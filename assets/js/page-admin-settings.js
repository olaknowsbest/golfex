/**
 * Copy-to-clipboard for the three wallet-address fields on the static
 * admin Settings prototype. Each button copies only the text currently
 * shown in its paired input — never a hardcoded value, never anything
 * else on the page. No fetch, no storage, no persistence; the copied
 * text disappears the moment the page is reloaded because nothing is
 * ever saved anywhere.
 */
(function () {
	'use strict';

	var buttons = document.querySelectorAll('.aset-copy-btn');
	var status = document.getElementById('aset-copy-status');
	if (!buttons.length) {
		return;
	}

	buttons.forEach(function (button) {
		var targetId = button.getAttribute('data-copy-target');
		var input = targetId ? document.getElementById(targetId) : null;
		var label = button.querySelector('.aset-copy-btn__label');
		if (!input || !label) {
			return;
		}

		var defaultText = label.textContent;
		var resetTimer = null;

		button.addEventListener('click', function () {
			var value = input.value;

			function announceCopied() {
				label.textContent = 'Copied';
				button.classList.add('is-copied');
				if (status) {
					status.textContent = defaultText + ': Copied';
				}
				window.clearTimeout(resetTimer);
				resetTimer = window.setTimeout(function () {
					label.textContent = defaultText;
					button.classList.remove('is-copied');
				}, 1500);
			}

			if (navigator.clipboard && navigator.clipboard.writeText) {
				navigator.clipboard.writeText(value).then(announceCopied, function () {
					/* Clipboard write can fail (permissions, insecure
					   context); the field remains visible and selectable
					   either way, so no error state is shown. */
				});
			}
		});
	});
})();
