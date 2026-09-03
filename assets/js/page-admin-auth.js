/**
 * Accessible password visibility toggle for the static admin login
 * prototype. Purely a local DOM type-attribute switch — nothing is
 * stored, submitted, or sent anywhere. No form submission, no fetch, no
 * storage, no auth of any kind exists on this page.
 */
(function () {
	'use strict';

	var toggle = document.getElementById('admin-password-toggle');
	var input = document.getElementById('admin-password');
	var showIcon = document.getElementById('admin-password-icon-show');
	var hideIcon = document.getElementById('admin-password-icon-hide');
	var toggleLabel = document.getElementById('admin-password-toggle-label');

	if (!toggle || !input || !showIcon || !hideIcon || !toggleLabel) {
		return;
	}

	/* showIcon/hideIcon are raw <svg> elements — SVGElement does not
	   reliably reflect the HTMLElement.hidden IDL property in all
	   browsers, so the hidden attribute is set/removed directly here
	   rather than assigned via the .hidden property shortcut. */
	function setIconHidden(icon, isHidden) {
		if (isHidden) {
			icon.setAttribute('hidden', '');
		} else {
			icon.removeAttribute('hidden');
		}
	}

	toggle.addEventListener('click', function () {
		var reveal = input.type === 'password';
		input.type = reveal ? 'text' : 'password';
		toggle.setAttribute('aria-pressed', reveal ? 'true' : 'false');
		toggleLabel.textContent = reveal ? 'Hide password' : 'Show password';
		setIconHidden(showIcon, reveal);
		setIconHidden(hideIcon, !reveal);
	});
})();
