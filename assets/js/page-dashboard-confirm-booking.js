(function () {
	'use strict';

	var DATA = window.NK_BOOKING_AVAILABILITY;
	var VALID_TYPES = ['virtual', 'appearance', 'golf'];
	var VALID_TZ = { PT: 'Pacific Time (PT)', MT: 'Mountain Time (MT)', CT: 'Central Time (CT)', ET: 'Eastern Time (ET)' };

	var root = document.getElementById('dcb-confirm');
	if (!DATA || !root) { return; }

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
	function formatDuration(mins) {
		var h = Math.floor(mins / 60);
		var m = mins % 60;
		if (h === 0) { return m + ' min'; }
		if (m === 0) { return h + ' hr'; }
		return h + ' hr ' + m + ' min';
	}
	function formatPrice(amount) {
		return amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
	}

	var params = new URLSearchParams(location.search);
	var type = params.get('type');
	var date = params.get('date');
	var start = params.get('start');
	var end = params.get('end');
	var tz = params.get('timezone');

	var backLink = document.getElementById('dcb-back');

	/* Price is never read from the query string — it is always
	   recalculated here from the validated type and duration. A
	   tampered or price-mismatched URL therefore cannot influence the
	   displayed total; it can only fail validation below. */
	var valid = false;
	var duration = null;
	var price = null;

	if (VALID_TYPES.indexOf(type) !== -1 && DATA[type] && date && DATA[type].dates[date] && VALID_TZ[tz]) {
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
			valid = true;
			duration = endM - startM;
			price = config.hourlyRate * (duration / 60);
		}
	}

	var continueLink = document.getElementById('dcb-continue-link');

	if (!valid) {
		root.setAttribute('data-state', 'missing');
		if (backLink) {
			backLink.href = VALID_TYPES.indexOf(type) !== -1
				? 'dashboard-book-slot.html?type=' + encodeURIComponent(type)
				: 'dashboard-book-slot.html';
		}
		return;
	}

	root.setAttribute('data-state', 'valid');

	/* "Edit Booking" carries the full validated selection back to the
	   slot-selection screen, which restores type, date, start, end, and
	   timezone in that dependent order — never just the type. */
	if (backLink) {
		var backQs = new URLSearchParams();
		backQs.set('type', type);
		backQs.set('date', date);
		backQs.set('start', start);
		backQs.set('end', end);
		backQs.set('timezone', tz);
		backLink.href = 'dashboard-book-slot.html?' + backQs.toString();
	}

	document.getElementById('dcb-type').textContent = DATA[type].label;
	document.getElementById('dcb-date').textContent = formatDateLabel(date);
	document.getElementById('dcb-time').textContent = formatTimeLabel(start) + ' – ' + formatTimeLabel(end);
	document.getElementById('dcb-timezone').textContent = VALID_TZ[tz];
	document.getElementById('dcb-duration').textContent = formatDuration(duration);
	document.getElementById('dcb-rate').textContent = formatPrice(DATA[type].hourlyRate) + '/hr';
	document.getElementById('dcb-price').textContent = formatPrice(price);

	if (continueLink) {
		continueLink.setAttribute('aria-disabled', 'false');
		continueLink.href = 'dashboard-payment.html?source=booking&type=' + encodeURIComponent(type) + '&date=' + encodeURIComponent(date) + '&start=' + encodeURIComponent(start) + '&end=' + encodeURIComponent(end) + '&timezone=' + encodeURIComponent(tz);
	}
})();
