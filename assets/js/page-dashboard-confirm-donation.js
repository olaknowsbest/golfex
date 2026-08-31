(function () {
	'use strict';

	var root = document.getElementById('dcd-confirm');
	if (!root) { return; }

	var params = new URLSearchParams(location.search);
	var amountRaw = params.get('amount');
	var visibilityRaw = params.get('visibility');
	var messageRaw = params.get('message');

	var amount = amountRaw !== null ? Number(amountRaw) : NaN;
	var amountValid = isFinite(amount) && amount > 0 && amount <= 1000000;
	var visibilityValid = visibilityRaw === 'public' || visibilityRaw === 'anonymous';

	var continueLink = document.getElementById('dcd-continue-link');

	if (!amountValid || !visibilityValid) {
		root.setAttribute('data-state', 'missing');
		return;
	}

	root.setAttribute('data-state', 'valid');

	var amountEl = document.getElementById('dcd-amount');
	var formatted = amount % 1 === 0 ? amount.toFixed(0) : amount.toFixed(2);
	amountEl.textContent = '$' + formatted;

	var visibilityEl = document.getElementById('dcd-visibility');
	visibilityEl.textContent = visibilityRaw === 'public' ? 'Display my name' : 'Donate anonymously';

	if (continueLink) {
		continueLink.setAttribute('aria-disabled', 'false');
		continueLink.href = 'dashboard-payment.html?source=donation&amount=' + encodeURIComponent(amountRaw) + '&visibility=' + encodeURIComponent(visibilityRaw);
	}

	if (messageRaw) {
		var messageRow = root.querySelector('.dcd-summary__row--message');
		var messageEl = document.getElementById('dcd-message');
		messageEl.textContent = messageRaw;
		messageRow.hidden = false;
	}
})();
