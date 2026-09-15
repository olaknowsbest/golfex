/**
 * Strict sample-query handling shared by the static admin Fan Card,
 * Membership, Donation, and Customer detail prototypes. Only the exact
 * literal references in each allowlist are ever accepted — no other
 * value, and no other query parameter, is ever read or trusted. No
 * price, status, date, identity, verification state, ownership, or
 * total is accepted from the URL; every value shown on these pages is
 * hardcoded sample content, never derived from the query string. No
 * storage, no network calls, no backend simulation.
 */
(function () {
	'use strict';

	function initDetail(rootId, dataAttr, queryParam, allowed) {
		var root = document.getElementById(rootId);
		if (!root) {
			return;
		}
		var requested = new URLSearchParams(location.search).get(queryParam);
		var isValid = allowed.indexOf(requested) !== -1;
		root.setAttribute('data-state', isValid ? 'valid' : 'missing');
		root.setAttribute(dataAttr, isValid ? requested : '');
	}

	initDetail('afc-detail', 'data-card', 'card', ['FC-DEMO-001', 'FC-DEMO-002', 'FC-DEMO-003', 'FC-DEMO-004']);
	initDetail('amb-detail', 'data-membership', 'membership', ['MB-DEMO-001', 'MB-DEMO-002', 'MB-DEMO-003']);
	initDetail('adon-detail', 'data-donation', 'donation', ['DN-DEMO-001', 'DN-DEMO-002', 'DN-DEMO-003']);
	initDetail('acu-detail', 'data-customer', 'customer', ['CU-DEMO-001', 'CU-DEMO-002', 'CU-DEMO-003', 'CU-DEMO-004', 'CU-DEMO-005']);
})();
