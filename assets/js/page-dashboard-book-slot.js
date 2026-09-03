(function () {
	'use strict';

	var DATA = window.NK_BOOKING_AVAILABILITY;
	var VALID_TYPES = ['virtual', 'appearance', 'golf'];

	var typeSelect = document.getElementById('dbs-type');
	var dateSelect = document.getElementById('dbs-date');
	var startSelect = document.getElementById('dbs-start');
	var endSelect = document.getElementById('dbs-end');
	var tzSelect = document.getElementById('dbs-timezone');
	var durationEl = document.getElementById('dbs-duration');
	var priceEl = document.getElementById('dbs-price');
	var reviewLink = document.getElementById('dbs-review-link');
	if (!DATA || !typeSelect || !dateSelect || !startSelect || !endSelect || !tzSelect || !reviewLink) { return; }

	function toMinutes(hhmm) {
		var parts = hhmm.split(':');
		return Number(parts[0]) * 60 + Number(parts[1]);
	}
	function toHHMM(mins) {
		var h = Math.floor(mins / 60);
		var m = mins % 60;
		return (h < 10 ? '0' : '') + h + ':' + (m < 10 ? '0' : '') + m;
	}
	function formatTimeLabel(hhmm) {
		var mins = toMinutes(hhmm);
		var h = Math.floor(mins / 60);
		var m = mins % 60;
		var period = h >= 12 ? 'PM' : 'AM';
		var h12 = h % 12;
		if (h12 === 0) { h12 = 12; }
		return h12 + ':' + (m < 10 ? '0' : '') + m + ' ' + period;
	}
	function formatDateLabel(iso) {
		var d = new Date(iso + 'T00:00:00');
		return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
	}
	function formatDuration(mins) {
		var h = Math.floor(mins / 60);
		var m = mins % 60;
		if (h === 0) { return m + ' min'; }
		if (m === 0) { return h + ' hr'; }
		return h + ' hr ' + m + ' min';
	}
	function formatPrice(amount) {
		return amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
	}
	function overlapsBlocked(startM, endM, blocked) {
		for (var i = 0; i < blocked.length; i++) {
			var bs = toMinutes(blocked[i][0]);
			var be = toMinutes(blocked[i][1]);
			if (startM < be && bs < endM) { return true; }
		}
		return false;
	}

	function resetSelect(select, placeholder) {
		select.innerHTML = '';
		var opt = document.createElement('option');
		opt.value = '';
		opt.textContent = placeholder;
		select.appendChild(opt);
		select.value = '';
		select.disabled = true;
	}

	function populateDates() {
		var type = typeSelect.value;
		if (!type || !DATA[type]) {
			resetSelect(dateSelect, 'Choose a booking type first');
			return;
		}
		dateSelect.innerHTML = '';
		var placeholder = document.createElement('option');
		placeholder.value = '';
		placeholder.textContent = 'Choose a date';
		dateSelect.appendChild(placeholder);
		Object.keys(DATA[type].dates).forEach(function (iso) {
			var opt = document.createElement('option');
			opt.value = iso;
			opt.textContent = formatDateLabel(iso);
			dateSelect.appendChild(opt);
		});
		dateSelect.disabled = false;
	}

	function populateStartTimes() {
		var type = typeSelect.value;
		var date = dateSelect.value;
		if (!type || !date || !DATA[type] || !DATA[type].dates[date]) {
			resetSelect(startSelect, 'Choose a date first');
			return;
		}
		var config = DATA[type];
		var day = config.dates[date];
		var windowStart = toMinutes(day.window[0]);
		var windowEnd = toMinutes(day.window[1]);
		startSelect.innerHTML = '';
		var placeholder = document.createElement('option');
		placeholder.value = '';
		placeholder.textContent = 'Choose a start time';
		startSelect.appendChild(placeholder);
		for (var t = windowStart; t + config.minMinutes <= windowEnd; t += 30) {
			if (!overlapsBlocked(t, t + config.minMinutes, day.blocked)) {
				var opt = document.createElement('option');
				opt.value = toHHMM(t);
				opt.textContent = formatTimeLabel(toHHMM(t));
				startSelect.appendChild(opt);
			}
		}
		startSelect.disabled = false;
	}

	function populateEndTimes() {
		var type = typeSelect.value;
		var date = dateSelect.value;
		var start = startSelect.value;
		if (!type || !date || !start || !DATA[type] || !DATA[type].dates[date]) {
			resetSelect(endSelect, 'Choose a start time first');
			return;
		}
		var config = DATA[type];
		var day = config.dates[date];
		var windowEnd = toMinutes(day.window[1]);
		var startM = toMinutes(start);
		endSelect.innerHTML = '';
		var placeholder = document.createElement('option');
		placeholder.value = '';
		placeholder.textContent = 'Choose an end time';
		endSelect.appendChild(placeholder);
		for (var t = startM + config.minMinutes; t <= windowEnd; t += 30) {
			if (!overlapsBlocked(startM, t, day.blocked)) {
				var opt = document.createElement('option');
				opt.value = toHHMM(t);
				opt.textContent = formatTimeLabel(toHHMM(t));
				endSelect.appendChild(opt);
			}
		}
		endSelect.disabled = false;
	}

	function update() {
		var type = typeSelect.value;
		var date = dateSelect.value;
		var start = startSelect.value;
		var end = endSelect.value;
		var tz = tzSelect.value;

		var duration = null;
		var price = null;
		if (type && DATA[type] && start && end) {
			var startM = toMinutes(start);
			var endM = toMinutes(end);
			if (endM > startM) {
				duration = endM - startM;
				price = DATA[type].hourlyRate * (duration / 60);
			}
		}

		durationEl.textContent = duration !== null ? formatDuration(duration) : '—';
		priceEl.textContent = price !== null ? formatPrice(price) : '—';

		var valid = !!(type && date && start && end && tz && duration !== null);
		if (valid) {
			reviewLink.setAttribute('aria-disabled', 'false');
			var qs = new URLSearchParams();
			qs.set('type', type);
			qs.set('date', date);
			qs.set('start', start);
			qs.set('end', end);
			qs.set('timezone', tz);
			reviewLink.href = 'dashboard-confirm-booking.html?' + qs.toString();
		} else {
			reviewLink.setAttribute('aria-disabled', 'true');
			reviewLink.removeAttribute('href');
		}
	}

	typeSelect.addEventListener('change', function () {
		populateDates();
		resetSelect(startSelect, 'Choose a date first');
		resetSelect(endSelect, 'Choose a start time first');
		update();
	});
	dateSelect.addEventListener('change', function () {
		populateStartTimes();
		resetSelect(endSelect, 'Choose a start time first');
		update();
	});
	startSelect.addEventListener('change', function () {
		populateEndTimes();
		update();
	});
	endSelect.addEventListener('change', update);
	tzSelect.addEventListener('change', update);

	/* No default booking type, date, or time unless a valid ?type=,
	   ?date=, ?start=, ?end=, ?timezone= combination is supplied — used
	   to restore state when returning from "Edit Booking". Each field is
	   only restored if it is still genuinely available: type must be
	   known, date must exist for that type, start must be an option
	   populateStartTimes() actually generated for that date (respecting
	   the window, the minimum duration, and blocked periods), and end
	   must likewise be an option populateEndTimes() actually generated
	   for that start. An invalid, unavailable, or blocked value halts
	   the cascade at that field rather than silently substituting a
	   default — later fields are left at their neutral placeholder.
	   Duration and price are never read from the URL; update() always
	   recalculates them locally from the restored type/start/end. */
	resetSelect(dateSelect, 'Choose a booking type first');
	resetSelect(startSelect, 'Choose a date first');
	resetSelect(endSelect, 'Choose a start time first');

	var restoreParams = new URLSearchParams(location.search);
	var requestedType = restoreParams.get('type');
	var requestedDate = restoreParams.get('date');
	var requestedStart = restoreParams.get('start');
	var requestedEnd = restoreParams.get('end');
	var requestedTz = restoreParams.get('timezone');
	var VALID_TZ = ['PT', 'MT', 'CT', 'ET'];

	if (VALID_TZ.indexOf(requestedTz) !== -1) {
		tzSelect.value = requestedTz;
	}

	if (VALID_TYPES.indexOf(requestedType) !== -1) {
		typeSelect.value = requestedType;
		populateDates();

		if (requestedDate && DATA[requestedType].dates[requestedDate]) {
			dateSelect.value = requestedDate;
			populateStartTimes();

			var startAvailable = Array.prototype.some.call(startSelect.options, function (opt) {
				return opt.value === requestedStart;
			});
			if (requestedStart && startAvailable) {
				startSelect.value = requestedStart;
				populateEndTimes();

				var endAvailable = Array.prototype.some.call(endSelect.options, function (opt) {
					return opt.value === requestedEnd;
				});
				if (requestedEnd && endAvailable) {
					endSelect.value = requestedEnd;
				}
			}
		}
	}

	update();
})();
