/**
 * Strict sample-query handling for the static admin payment-review
 * detail prototype. Only the exact literal reference "PAY-DEMO-001" is
 * ever accepted — no other value, and no other query parameter, is ever
 * read or trusted. No amount, status, address, product outcome, or
 * transaction data is accepted from the URL; every value shown on this
 * page is hardcoded sample content, never derived from the query
 * string. No storage, no network calls, no backend simulation.
 */
(function () {
	'use strict';

	var VALID_PAYMENT_REFERENCE = 'PAY-DEMO-001';
	var root = document.getElementById('apr-review');
	if (!root) {
		return;
	}

	var requested = new URLSearchParams(location.search).get('payment');
	root.setAttribute('data-state', requested === VALID_PAYMENT_REFERENCE ? 'valid' : 'missing');
})();
