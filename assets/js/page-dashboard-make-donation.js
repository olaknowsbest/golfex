(function () {
	'use strict';

	var root = document.getElementById('dmd-donate');
	var amountRadios = document.querySelectorAll('input[name="dmd-amount"]');
	var customRadio = document.getElementById('dmd-amount-custom');
	var customInput = document.getElementById('dmd-custom-value');
	var visibilityRadios = document.querySelectorAll('input[name="dmd-visibility"]');
	var reviewLink = document.getElementById('dmd-review-link');
	if (!root || !amountRadios.length || !reviewLink) { return; }

	function selectedAmount() {
		var chosen = null;
		amountRadios.forEach(function (radio) {
			if (radio.checked) { chosen = radio.value; }
		});
		if (chosen === 'custom') {
			var value = parseFloat(customInput.value);
			if (!isFinite(value) || value <= 0) { return null; }
			return Math.round(value * 100) / 100;
		}
		return chosen ? Number(chosen) : null;
	}

	function selectedVisibility() {
		var visibility = 'public';
		visibilityRadios.forEach(function (radio) {
			if (radio.checked) { visibility = radio.value; }
		});
		return visibility;
	}

	function update() {
		var amount = selectedAmount();
		var valid = amount !== null && amount > 0;
		if (valid) {
			reviewLink.setAttribute('aria-disabled', 'false');
			reviewLink.href = 'dashboard-confirm-donation.html?amount=' + encodeURIComponent(amount) + '&visibility=' + encodeURIComponent(selectedVisibility());
		} else {
			reviewLink.setAttribute('aria-disabled', 'true');
			reviewLink.removeAttribute('href');
		}
	}

	amountRadios.forEach(function (radio) {
		radio.addEventListener('change', update);
	});
	customInput.addEventListener('input', function () {
		customRadio.checked = true;
		update();
	});
	visibilityRadios.forEach(function (radio) {
		radio.addEventListener('change', update);
	});

	/* Restore only a validated amount and visibility when returning from
	   "Edit Donation" — the optional message is never restored, and an
	   invalid or missing parameter leaves the form in its existing
	   neutral state (no amount pre-selected) rather than defaulting to
	   any particular amount. */
	var restoreParams = new URLSearchParams(location.search);
	var restoredAmountRaw = restoreParams.get('amount');
	var restoredAmount = restoredAmountRaw !== null ? Number(restoredAmountRaw) : NaN;
	var restoredAmountValid = isFinite(restoredAmount) && restoredAmount > 0 && restoredAmount <= 1000000;
	var restoredVisibility = restoreParams.get('visibility');
	var restoredVisibilityValid = restoredVisibility === 'public' || restoredVisibility === 'anonymous';

	if (restoredAmountValid) {
		var matchedPreset = false;
		amountRadios.forEach(function (radio) {
			if (radio.value !== 'custom' && Number(radio.value) === restoredAmount) {
				radio.checked = true;
				matchedPreset = true;
			}
		});
		if (!matchedPreset) {
			customRadio.checked = true;
			customInput.value = restoredAmount % 1 === 0 ? restoredAmount.toFixed(0) : restoredAmount.toFixed(2);
		}
	}

	if (restoredVisibilityValid) {
		visibilityRadios.forEach(function (radio) {
			radio.checked = radio.value === restoredVisibility;
		});
	}

	update();
})();
