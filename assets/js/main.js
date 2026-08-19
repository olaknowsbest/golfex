/**
 * Site-specific glue code (not part of any vendor plugin bundle).
 *
 * This is a static export of the Golfex WordPress/Elementor demo: there is no
 * PHP backend, so Contact Form 7's own JS (which normally posts to
 * admin-ajax.php / the WP REST API) has been removed from the page. This file
 * replaces it with a client-side-only submit handler so the form still gives
 * real feedback instead of erroring out. See CHANGELOG.md to wire it to an
 * actual email service.
 */
(function () {
	'use strict';

	function handleStaticFormSubmit(form) {
		form.addEventListener('submit', function (event) {
			event.preventDefault();

			// Honeypot: a real visitor never fills this hidden field in.
			var honeypot = form.querySelector('.wpcf7-hp-field');
			if (honeypot && honeypot.value) {
				return;
			}

			if (!form.checkValidity()) {
				form.reportValidity();
				return;
			}

			var output = form.querySelector('.wpcf7-response-output');
			var submitBtn = form.querySelector('.wpcf7-submit');

			if (submitBtn) {
				submitBtn.disabled = true;
			}

			// Simulated network delay so the spinner/disabled state is visible.
			window.setTimeout(function () {
				form.classList.remove('invalid');
				form.classList.add('sent');

				if (output) {
					output.hidden = false;
					output.removeAttribute('aria-hidden');
					output.style.display = 'block';
					output.style.marginTop = '12px';
					output.style.padding = '10px 14px';
					output.style.borderRadius = '6px';
					output.style.border = '1px solid #2e7d32';
					output.style.color = '#2e7d32';
					output.textContent = 'Thanks! Your message was received.';
				}

				form.reset();

				if (submitBtn) {
					submitBtn.disabled = false;
				}
			}, 500);
		});
	}

	function hardenExternalLinks() {
		document.querySelectorAll('a[target="_blank"]').forEach(function (link) {
			var rel = (link.getAttribute('rel') || '').split(/\s+/);
			['noopener', 'noreferrer'].forEach(function (token) {
				if (rel.indexOf(token) === -1) {
					rel.push(token);
				}
			});
			link.setAttribute('rel', rel.join(' ').trim());
		});
	}

	document.addEventListener('DOMContentLoaded', function () {
		document.querySelectorAll('.wpcf7-form').forEach(handleStaticFormSubmit);
		hardenExternalLinks();
	});
})();
