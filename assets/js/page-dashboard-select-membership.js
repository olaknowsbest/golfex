/**
 * Choose a Membership selector: keeps live prices, billing-basis labels,
 * and yearly-savings text in sync with the checked plan/billing radios,
 * and only builds a "Review Membership" link once both a plan and a
 * billing period are chosen. Reads the incoming ?plan= and ?billing=
 * query parameters on load only to restore a previously valid selection
 * (e.g. returning from "Edit Membership" on the confirmation screen) —
 * an invalid or missing value in either parameter leaves that choice
 * unmade rather than assuming a default. No storage, no network calls,
 * no backend simulation.
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

	var root = document.getElementById('dsm-select');
	var planRadios = document.querySelectorAll('input[name="dsm-plan"]');
	var billingRadios = document.querySelectorAll('input[name="dsm-billing"]');
	var reviewCta = document.getElementById('dsm-review-cta');
	var reviewSummary = document.getElementById('dsm-review-summary');

	if (!root || !planRadios.length || !billingRadios.length || !reviewCta || !reviewSummary) {
		return;
	}

	function formatPrice(amount) {
		return amount.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 });
	}
	function planLabel(plan) {
		return plan.charAt(0).toUpperCase() + plan.slice(1);
	}
	function billingLabel(billing) {
		return billing === 'monthly' ? 'Monthly' : 'Yearly';
	}

	function render() {
		var plan = root.getAttribute('data-plan');
		var billing = root.getAttribute('data-billing');
		var planIsValid = VALID_PLANS.indexOf(plan) !== -1;
		var billingIsValid = VALID_BILLING.indexOf(billing) !== -1;

		VALID_PLANS.forEach(function (key) {
			var data = PLANS[key];
			var amountEl = root.querySelector('[data-plan-amount="' + key + '"]');
			var basisEl = root.querySelector('[data-plan-basis="' + key + '"]');
			var savingsEl = root.querySelector('[data-plan-savings="' + key + '"]');

			if (billingIsValid) {
				amountEl.textContent = formatPrice(data[billing]);
				basisEl.textContent = billing === 'monthly' ? '/month' : '/year';
			} else {
				amountEl.textContent = 'Select billing';
				basisEl.textContent = '';
			}

			if (billingIsValid && billing === 'yearly') {
				savingsEl.textContent = 'Save ' + formatPrice(data.yearlySavings) + ' per year';
				savingsEl.hidden = false;
			} else {
				savingsEl.hidden = true;
			}
		});

		if (planIsValid && billingIsValid) {
			reviewCta.setAttribute('aria-disabled', 'false');
			reviewCta.href = 'dashboard-confirm-membership.html?plan=' + encodeURIComponent(plan) + '&billing=' + encodeURIComponent(billing);
			reviewSummary.textContent = planLabel(plan) + ' — ' + billingLabel(billing) + ' — ' + formatPrice(PLANS[plan][billing]) + (billing === 'monthly' ? '/month' : '/year');
		} else {
			reviewCta.setAttribute('aria-disabled', 'true');
			reviewCta.removeAttribute('href');
			reviewSummary.textContent = 'Choose a billing period and a plan to continue.';
		}
	}

	var params = new URLSearchParams(location.search);
	var requestedPlan = params.get('plan');
	var requestedBilling = params.get('billing');
	var initialPlan = VALID_PLANS.indexOf(requestedPlan) !== -1 ? requestedPlan : '';
	var initialBilling = VALID_BILLING.indexOf(requestedBilling) !== -1 ? requestedBilling : '';

	root.setAttribute('data-plan', initialPlan);
	root.setAttribute('data-billing', initialBilling);

	planRadios.forEach(function (radio) {
		radio.checked = radio.value === initialPlan;
		radio.addEventListener('change', function () {
			if (radio.checked) {
				root.setAttribute('data-plan', radio.value);
				render();
			}
		});
	});
	billingRadios.forEach(function (radio) {
		radio.checked = radio.value === initialBilling;
		radio.addEventListener('change', function () {
			if (radio.checked) {
				root.setAttribute('data-billing', radio.value);
				render();
			}
		});
	});

	render();
})();
