/**
 * Confirm Membership summary builder: reads the incoming ?plan= and
 * ?billing= query parameters (set by dashboard-select-membership.html)
 * and shows only that plan's static summary, with billing period, price,
 * and yearly savings filled in from a fixed internal plan/billing table
 * — never from the URL. No storage, no network calls, no order or
 * backend state — this only toggles which pre-rendered summary is
 * visible and fills in its dynamic fields. Never defaults to a plan or a
 * billing period; an invalid or missing value in either parameter leaves
 * the page in its "Select a Membership first" state.
 */
(function () {
	'use strict';

	var PLANS = {
		supporter: { monthly: 125, yearly: 1450, yearlySavings: 50 },
		insider: { monthly: 250, yearly: 2900, yearlySavings: 100 },
		premier: { monthly: 500, yearly: 5700, yearlySavings: 300 }
	};
	var VALID_PLANS = ['supporter', 'insider', 'premier'];
	var VALID_BILLING = ['monthly', 'yearly'];

	var root = document.getElementById('dcm-confirm');
	if (!root) {
		return;
	}

	function formatPrice(amount) {
		return amount.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 });
	}

	var params = new URLSearchParams(location.search);
	var plan = params.get('plan');
	var billing = params.get('billing');
	var isValid = VALID_PLANS.indexOf(plan) !== -1 && VALID_BILLING.indexOf(billing) !== -1;
	var state = isValid ? plan : 'missing';

	root.setAttribute('data-state', state);

	if (!isValid) {
		return;
	}

	var data = PLANS[plan];
	var billingLabel = billing === 'monthly' ? 'Monthly' : 'Yearly';
	var priceText = formatPrice(data[billing]) + (billing === 'monthly' ? '/month' : '/year');
	var editHref = 'dashboard-select-membership.html?plan=' + encodeURIComponent(plan) + '&billing=' + encodeURIComponent(billing);
	var paymentHref = 'dashboard-payment.html?source=membership&plan=' + encodeURIComponent(plan) + '&billing=' + encodeURIComponent(billing);

	var section = root.querySelector('.dcm-plan[data-plan="' + plan + '"]');
	if (!section) {
		return;
	}

	var billingEl = section.querySelector('.dcm-field-billing');
	var priceEl = section.querySelector('.dcm-field-price');
	var savingsRow = section.querySelector('.dcm-field-savings-row');
	var savingsEl = section.querySelector('.dcm-field-savings');
	var editLink = section.querySelector('.dcm-edit-link');
	var continueLink = section.querySelector('.dcm-continue');

	if (billingEl) { billingEl.textContent = billingLabel; }
	if (priceEl) { priceEl.textContent = priceText; }
	if (billing === 'yearly') {
		if (savingsEl) { savingsEl.textContent = 'Save ' + formatPrice(data.yearlySavings) + ' per year'; }
		if (savingsRow) { savingsRow.hidden = false; }
	} else if (savingsRow) {
		savingsRow.hidden = true;
	}
	if (editLink) { editLink.href = editHref; }
	if (continueLink) { continueLink.href = paymentHref; }
})();
