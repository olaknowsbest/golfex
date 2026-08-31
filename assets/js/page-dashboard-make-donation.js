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

	update();
})();
