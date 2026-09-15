/**
 * Static auth screens: the password-visibility toggle is the only
 * interactive behavior here. No validation, submission, network
 * request, storage, cookie, or redirect is ever triggered from this
 * file. The primary Sign in / Create account / Send reset link
 * actions, and the Google option, remain disabled controls untouched
 * by this script.
 */
(function () {
	'use strict';

	document.querySelectorAll('.auth-password-toggle').forEach(function (toggle) {
		var input = document.getElementById(toggle.getAttribute('aria-controls'));
		if (!input) {
			return;
		}
		toggle.addEventListener('click', function () {
			var showing = input.type === 'text';
			input.type = showing ? 'password' : 'text';
			toggle.textContent = showing ? 'Show' : 'Hide';
			toggle.setAttribute('aria-pressed', String(!showing));
			toggle.setAttribute('aria-label', showing ? 'Show password' : 'Hide password');
		});
	});
})();
