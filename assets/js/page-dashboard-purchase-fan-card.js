/**
 * Purchase Fan Card tier switcher: reads the incoming ?tier= query
 * parameter (set by the "Select" links on dashboard-fan-cards.html) to
 * preselect a tier, then keeps the live preview/summary in sync with the
 * checked radio. No storage, no network calls, no application state
 * beyond this one visible selection. Never defaults to a tier — a
 * missing or invalid ?tier= leaves the page in its neutral,
 * nothing-selected state (data-tier="").
 */
(function () {
	'use strict';

	var VALID_TIERS = ['standard', 'premium', 'vip'];
	var root = document.getElementById('dpf-purchase');
	var radios = document.querySelectorAll('input[name="dpf-tier"]');
	var continueLink = document.getElementById('dpf-continue-link');

	if (!root || !radios.length) {
		return;
	}

	function applyTier(tier) {
		root.setAttribute('data-tier', tier);
		if (continueLink) {
			if (tier) {
				continueLink.setAttribute('aria-disabled', 'false');
				continueLink.href = 'dashboard-payment.html?source=fan-card&tier=' + encodeURIComponent(tier);
			} else {
				continueLink.setAttribute('aria-disabled', 'true');
				continueLink.removeAttribute('href');
			}
		}
	}

	var requested = new URLSearchParams(location.search).get('tier');
	var initial = VALID_TIERS.indexOf(requested) !== -1 ? requested : '';

	radios.forEach(function (radio) {
		radio.checked = radio.value === initial;
		radio.addEventListener('change', function () {
			if (radio.checked) {
				applyTier(radio.value);
			}
		});
	});

	applyTier(initial);
})();
