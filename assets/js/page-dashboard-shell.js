/**
 * Dashboard-shell glue: accessible mobile drawer toggle for the customer
 * dashboard preview. No application state, no storage, no network calls —
 * purely a UI open/closed toggle, independent of the public site-shell.js.
 */
(function () {
	'use strict';

	var toggle = document.getElementById('dashboard-menu-toggle');
	var sidebar = document.getElementById('dashboard-sidebar');
	var closeBtn = document.querySelector('[data-dashboard-close]');
	var backdrop = document.querySelector('[data-dashboard-backdrop]');
	var body = document.body;

	if (!toggle || !sidebar) {
		return;
	}

	function closeDrawer() {
		sidebar.classList.remove('is-open');
		toggle.setAttribute('aria-expanded', 'false');
		if (backdrop) {
			backdrop.classList.remove('is-visible');
		}
		body.classList.remove('dashboard-scroll-lock');
	}

	function openDrawer() {
		sidebar.classList.add('is-open');
		toggle.setAttribute('aria-expanded', 'true');
		if (backdrop) {
			backdrop.classList.add('is-visible');
		}
		body.classList.add('dashboard-scroll-lock');
	}

	toggle.addEventListener('click', function () {
		if (sidebar.classList.contains('is-open')) {
			closeDrawer();
		} else {
			openDrawer();
		}
	});

	if (closeBtn) {
		closeBtn.addEventListener('click', function () {
			closeDrawer();
			toggle.focus();
		});
	}

	if (backdrop) {
		backdrop.addEventListener('click', function () {
			closeDrawer();
			toggle.focus();
		});
	}

	document.addEventListener('keydown', function (event) {
		if (event.key === 'Escape' && sidebar.classList.contains('is-open')) {
			closeDrawer();
			toggle.focus();
		}
	});

	window.addEventListener('resize', function () {
		if (window.innerWidth > 900) {
			closeDrawer();
		}
	});
})();
