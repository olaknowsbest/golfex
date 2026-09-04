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

	function getFocusable() {
		var nodes = sidebar.querySelectorAll(
			'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
		);
		return Array.prototype.filter.call(nodes, function (el) {
			return el.offsetParent !== null;
		});
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
		if (closeBtn) {
			/* Deferred: a real mouse click focuses the clicked toggle button
			   as part of the browser's own default handling, which runs
			   after this listener and would otherwise override an
			   immediate focus() call here. */
			window.setTimeout(function () {
				closeBtn.focus();
			}, 0);
		}
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
		if (!sidebar.classList.contains('is-open')) {
			return;
		}

		if (event.key === 'Escape') {
			closeDrawer();
			toggle.focus();
			return;
		}

		if (event.key === 'Tab') {
			var focusable = getFocusable();
			if (!focusable.length) {
				return;
			}
			var first = focusable[0];
			var last = focusable[focusable.length - 1];

			if (event.shiftKey && document.activeElement === first) {
				event.preventDefault();
				last.focus();
			} else if (!event.shiftKey && document.activeElement === last) {
				event.preventDefault();
				first.focus();
			}
		}
	});

	window.addEventListener('resize', function () {
		if (window.innerWidth > 900) {
			closeDrawer();
		}
	});
})();
