/**
 * Complete Payment controller: reads a strict ?source= allowlist
 * (fan-card|membership|donation|booking) plus the minimum per-source
 * display fields already validated by that product's own confirmation
 * page, and renders a read-only prototype summary. No crypto amount,
 * exchange rate, wallet address, or payment/approval status is ever
 * read from the URL. Currency selection only toggles which static
 * explanatory message is shown in the Quote panel — it never fabricates
 * a rate or crypto amount. No storage, no network calls, no backend
 * simulation.
 */
(function () {
	'use strict';

	var VALID_SOURCES = ['fan-card', 'membership', 'donation', 'booking'];

	var FAN_CARD_TIERS = {
		bronze: { label: 'Bronze Fan Card', price: 250 },
		silver: { label: 'Silver Fan Card', price: 500 },
		gold: { label: 'Gold Fan Card', price: 1000 },
		platinum: { label: 'Platinum Fan Card', price: 1500 }
	};

	var MEMBERSHIP_PLANS = {
		supporter: { label: 'Supporter Membership', monthly: 125, yearly: 1450 },
		insider: { label: 'Insider Membership', monthly: 250, yearly: 2900 },
		premier: { label: 'Premier Membership', monthly: 500, yearly: 5700 }
	};
	var VALID_MEMBERSHIP_BILLING = ['monthly', 'yearly'];

	var VALID_TZ = { PT: 'Pacific Time (PT)', MT: 'Mountain Time (MT)', CT: 'Central Time (CT)', ET: 'Eastern Time (ET)' };
	var VALID_BOOKING_TYPES = ['virtual', 'appearance', 'golf'];

	function formatPrice(amount) {
		return amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
	}
	function toMinutes(hhmm) {
		if (typeof hhmm !== 'string' || !/^\d{1,2}:\d{2}$/.test(hhmm)) { return NaN; }
		var parts = hhmm.split(':');
		var h = Number(parts[0]);
		var m = Number(parts[1]);
		if (h < 0 || h > 23 || m < 0 || m > 59) { return NaN; }
		return h * 60 + m;
	}
	function overlapsBlocked(startM, endM, blocked) {
		for (var i = 0; i < blocked.length; i++) {
			var bs = toMinutes(blocked[i][0]);
			var be = toMinutes(blocked[i][1]);
			if (startM < be && bs < endM) { return true; }
		}
		return false;
	}
	function formatTimeLabel(hhmm) {
		var mins = toMinutes(hhmm);
		var h = Math.floor(mins / 60);
		var m = mins % 60;
		var period = h >= 12 ? 'PM' : 'AM';
		var h12 = h % 12;
		if (h12 === 0) { h12 = 12; }
		return h12 + ':' + (m < 10 ? '0' : '') + m + ' ' + period;
	}
	function formatDateLabel(iso) {
		var d = new Date(iso + 'T00:00:00');
		return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
	}

	var root = document.getElementById('dpay-payment');
	var backLink = document.getElementById('dpay-back');
	if (!root || !backLink) { return; }

	var params = new URLSearchParams(location.search);
	var source = params.get('source');

	var result = null; // { productType, item, total, backHref, navId }

	if (source === 'fan-card') {
		var tier = params.get('tier');
		var tierData = FAN_CARD_TIERS[tier];
		if (tierData) {
			result = {
				productType: 'Fan Card',
				item: tierData.label,
				total: formatPrice(tierData.price),
				backHref: 'dashboard-purchase-fan-card.html?tier=' + encodeURIComponent(tier),
				navId: 'dpay-nav-fan-card'
			};
		}
	} else if (source === 'membership') {
		var plan = params.get('plan');
		var billing = params.get('billing');
		var planData = MEMBERSHIP_PLANS[plan];
		var billingValid = VALID_MEMBERSHIP_BILLING.indexOf(billing) !== -1;
		if (planData && billingValid) {
			result = {
				productType: 'Membership',
				item: planData.label + ' (' + (billing === 'monthly' ? 'Monthly' : 'Yearly') + ')',
				total: formatPrice(planData[billing]) + (billing === 'monthly' ? '/month' : '/year'),
				backHref: 'dashboard-confirm-membership.html?plan=' + encodeURIComponent(plan) + '&billing=' + encodeURIComponent(billing),
				navId: 'dpay-nav-membership',
				isMembership: true
			};
		}
	} else if (source === 'donation') {
		var amountRaw = params.get('amount');
		var visibilityRaw = params.get('visibility');
		var amount = amountRaw !== null ? Number(amountRaw) : NaN;
		var amountValid = isFinite(amount) && amount > 0 && amount <= 1000000;
		var visibilityValid = visibilityRaw === 'public' || visibilityRaw === 'anonymous';
		if (amountValid && visibilityValid) {
			var formattedAmount = amount % 1 === 0 ? amount.toFixed(0) : amount.toFixed(2);
			result = {
				productType: 'Donation',
				item: 'One-time donation (' + (visibilityRaw === 'public' ? 'Display my name' : 'Donate anonymously') + ')',
				total: '$' + formattedAmount,
				backHref: 'dashboard-confirm-donation.html?amount=' + encodeURIComponent(amountRaw) + '&visibility=' + encodeURIComponent(visibilityRaw),
				navId: 'dpay-nav-donation'
			};
		}
	} else if (source === 'booking') {
		var DATA = window.NK_BOOKING_AVAILABILITY;
		var type = params.get('type');
		var date = params.get('date');
		var start = params.get('start');
		var end = params.get('end');
		var tz = params.get('timezone');

		if (DATA && VALID_BOOKING_TYPES.indexOf(type) !== -1 && DATA[type] && date && DATA[type].dates[date] && VALID_TZ[tz]) {
			var config = DATA[type];
			var day = config.dates[date];
			var startM = toMinutes(start);
			var endM = toMinutes(end);
			var windowStart = toMinutes(day.window[0]);
			var windowEnd = toMinutes(day.window[1]);

			if (
				!isNaN(startM) && !isNaN(endM) &&
				startM % 30 === 0 && endM % 30 === 0 &&
				startM >= windowStart && endM <= windowEnd &&
				endM - startM >= config.minMinutes &&
				!overlapsBlocked(startM, endM, day.blocked)
			) {
				var duration = endM - startM;
				var price = config.hourlyRate * (duration / 60);
				result = {
					productType: 'Booking',
					item: config.label + ' — ' + formatDateLabel(date) + ', ' + formatTimeLabel(start) + '–' + formatTimeLabel(end) + ' ' + tz,
					total: formatPrice(price),
					backHref: 'dashboard-confirm-booking.html?type=' + encodeURIComponent(type) + '&date=' + encodeURIComponent(date) + '&start=' + encodeURIComponent(start) + '&end=' + encodeURIComponent(end) + '&timezone=' + encodeURIComponent(tz),
					navId: 'dpay-nav-booking',
					isBooking: true
				};
			}
		}
	}

	if (!result) {
		root.setAttribute('data-state', 'missing');
		return;
	}

	root.setAttribute('data-state', 'valid');
	backLink.href = result.backHref;

	document.getElementById('dpay-product-type').textContent = result.productType;
	document.getElementById('dpay-item').textContent = result.item;
	document.getElementById('dpay-total').textContent = result.total;

	if (result.isBooking) {
		document.getElementById('dpay-booking-note').hidden = false;
	}
	if (result.isMembership) {
		var membershipNote = document.getElementById('dpay-membership-note');
		if (membershipNote) { membershipNote.hidden = false; }
	}

	var navLink = document.getElementById(result.navId);
	if (navLink) {
		navLink.setAttribute('aria-current', 'page');
	}

	var quotePanel = document.getElementById('dpay-quote-panel');
	var currencyRadios = document.querySelectorAll('input[name="dpay-currency"]');
	currencyRadios.forEach(function (radio) {
		radio.addEventListener('change', function () {
			if (radio.checked) {
				quotePanel.setAttribute('data-currency', radio.value);
			}
		});
	});
})();
