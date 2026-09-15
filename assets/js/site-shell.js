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

		/* The public drawer has no separate close button — the toggle
		   itself doubles as the close control — so it's included as the
		   first stop in the trapped cycle alongside the nav's own links.
		   Re-queried on every open/Tab rather than cached once, so a
		   responsive layout change or link visibility change can't leave
		   this working off a stale list. */
		function getFocusable() {
			var nodes = nav.querySelectorAll(
				'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
			);
			var list = Array.prototype.filter.call(nodes, function (el) {
				return el.offsetParent !== null && el.getAttribute('aria-hidden') !== 'true';
			});
			if (toggle.offsetParent !== null) {
				list.unshift(toggle);
			}
			return list;
		}

		/* Background scroll lock: html/body get overflow:hidden (removes the
		   scrollable range entirely, so wheel/touch/PageUp/PageDown/Space/
		   Home/End/arrow keys all become no-ops on the background regardless
		   of which drawer element has focus) plus a position:fixed body with
		   a stored negative top/left offset (belt-and-suspenders against
		   iOS Safari's rubber-band touch-scroll, which can bleed through
		   overflow:hidden alone). The drawer's own overflow-y:auto is
		   untouched, so it can still scroll internally if its content
		   overflows a short viewport. One lock/unlock pair, called only
		   from openNav()/closeNav(), keeps every open and close path — and
		   the resize-to-desktop safety check, which already routes through
		   closeNav() — sharing the same lifecycle. */
		var scrollLockX = 0;
		var scrollLockY = 0;
		var savedBodyTop = '';
		var savedBodyLeft = '';
		var savedBodyWidth = '';
		var isScrollLocked = false;

		function lockScroll() {
			if (isScrollLocked) {
				return;
			}
			scrollLockX = window.scrollX;
			scrollLockY = window.scrollY;
			savedBodyTop = document.body.style.top;
			savedBodyLeft = document.body.style.left;
			savedBodyWidth = document.body.style.width;
			document.body.style.top = (-scrollLockY) + 'px';
			document.body.style.left = (-scrollLockX) + 'px';
			document.body.style.width = '100%';
			document.documentElement.classList.add('nav-scroll-lock');
			document.body.classList.add('nav-scroll-lock');
			isScrollLocked = true;
		}

		function unlockScroll() {
			if (!isScrollLocked) {
				return;
			}
			document.documentElement.classList.remove('nav-scroll-lock');
			document.body.classList.remove('nav-scroll-lock');
			document.body.style.top = savedBodyTop;
			document.body.style.left = savedBodyLeft;
			document.body.style.width = savedBodyWidth;
			isScrollLocked = false;
			/* behavior: 'instant' overrides this site's inherited
			   scroll-behavior: smooth (from the legacy theme CSS), which
			   would otherwise animate this restore into a visible glide
			   instead of landing back on the exact spot instantly. */
			window.scrollTo({ left: scrollLockX, top: scrollLockY, behavior: 'instant' });
		}

		function closeNav() {
			nav.classList.remove('is-open');
			toggle.setAttribute('aria-expanded', 'false');
			if (backdrop) {
				backdrop.classList.remove('is-visible');
			}
			unlockScroll();
		}

		function openNav() {
			nav.classList.add('is-open');
			toggle.setAttribute('aria-expanded', 'true');
			if (backdrop) {
				backdrop.classList.add('is-visible');
			}
			lockScroll();
			/* Deferred: a real click/keyboard activation of the toggle
			   leaves focus on the toggle itself as part of the browser's
			   own default handling, which runs after this listener and
			   would otherwise be free to move focus elsewhere first. */
			window.setTimeout(function () {
				toggle.focus();
			}, 0);
		}

		toggle.addEventListener('click', function () {
			if (nav.classList.contains('is-open')) {
				closeNav();
			} else {
				openNav();
			}
		});

		if (backdrop) {
			backdrop.addEventListener('click', function () {
				closeNav();
				toggle.focus();
			});
		}

		nav.querySelectorAll('a').forEach(function (link) {
			link.addEventListener('click', function () {
				closeNav();
				toggle.focus();
			});
		});

		document.addEventListener('keydown', function (event) {
			if (!nav.classList.contains('is-open')) {
				return;
			}

			if (event.key === 'Escape') {
				closeNav();
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
				closeNav();
			}
		});
	}

	document.addEventListener('DOMContentLoaded', function () {
		document.querySelectorAll('.site-header').forEach(initNav);
	});
})();
