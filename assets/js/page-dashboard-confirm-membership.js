/**
 * Confirm Membership plan reader: reads the incoming ?plan= query
 * parameter (set by the "Choose X" links on
 * dashboard-select-membership.html) and shows only that plan's static
 * summary. No storage, no network calls, no order or backend state —
 * this only toggles which pre-rendered summary is visible. Never
 * defaults to a plan; an invalid or missing ?plan= leaves the page in
 * its "Select a Membership first" state.
 */
(function () {
	'use strict';

	var VALID_PLANS = ['supporter', 'insider', 'premier'];
	var root = document.getElementById('dcm-confirm');

	if (!root) {
		return;
	}

	var requested = new URLSearchParams(location.search).get('plan');
	var state = VALID_PLANS.indexOf(requested) !== -1 ? requested : 'missing';

	root.setAttribute('data-state', state);
})();
