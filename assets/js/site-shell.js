/**
 * Public-shell glue: accessible mobile-menu toggle for .site-header.
 * No application state, no storage — purely a UI open/closed toggle.
 */
(function () {
	'use strict';

	function initNav(header) {
		var toggle = header.querySelector('.nav-toggle');
		var nav = header.querySelector('.site-nav');
		var backdrop = header.querySelector('.nav-backdrop');
		if (!toggle || !nav) {
			return;
		}

		function closeNav() {
			nav.classList.remove('is-open');
			toggle.setAttribute('aria-expanded', 'false');
			if (backdrop) {
				backdrop.classList.remove('is-visible');
			}
		}

		function openNav() {
			nav.classList.add('is-open');
			toggle.setAttribute('aria-expanded', 'true');
			if (backdrop) {
				backdrop.classList.add('is-visible');
			}
		}

		toggle.addEventListener('click', function () {
			if (nav.classList.contains('is-open')) {
				closeNav();
			} else {
				openNav();
			}
		});

		if (backdrop) {
			backdrop.addEventListener('click', closeNav);
		}

		nav.querySelectorAll('a').forEach(function (link) {
			link.addEventListener('click', closeNav);
		});

		document.addEventListener('keydown', function (event) {
			if (event.key === 'Escape' && nav.classList.contains('is-open')) {
				closeNav();
				toggle.focus();
			}
		});

		window.addEventListener('resize', function () {
			if (window.innerWidth > 900) {
				closeNav();
			}
		});
	}

	document.addEventListener('DOMContentLoaded', function () {
		document.querySelectorAll('.site-header').forEach(initNav);
	});
})();
