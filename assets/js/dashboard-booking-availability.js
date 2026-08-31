/*
 * Shared fictional sample availability for the static Bookings prototype.
 * Loaded before page-dashboard-book-slot.js and
 * page-dashboard-confirm-booking.js so both pages read the exact same
 * data. This is a single local JS configuration object — not an API, not
 * storage, not a backend simulation. In production this data would come
 * from administrator-managed availability records (Laravel/MySQL).
 *
 * All times are authored in Pacific Time (PT), 24-hour "HH:MM". Blocked
 * ranges represent periods already held or booked and are excluded from
 * selectable start/end times.
 */
window.NK_BOOKING_AVAILABILITY = {
	virtual: {
		label: 'Virtual Meet-and-Greet',
		hourlyRate: 150,
		minMinutes: 30,
		dates: {
			'2026-09-12': { window: ['09:00', '17:00'], blocked: [['12:00', '12:30']] },
			'2026-09-20': { window: ['10:00', '14:00'], blocked: [] }
		}
	},
	appearance: {
		label: 'Event Appearance',
		hourlyRate: 500,
		minMinutes: 60,
		dates: {
			'2026-10-02': { window: ['16:00', '20:00'], blocked: [] },
			'2026-10-17': { window: ['10:00', '14:00'], blocked: [['11:00', '12:00']] }
		}
	},
	golf: {
		label: 'Golf Experience',
		hourlyRate: 300,
		minMinutes: 60,
		dates: {
			'2026-09-30': { window: ['07:00', '15:00'], blocked: [['09:00', '11:00']] },
			'2026-10-24': { window: ['08:00', '12:00'], blocked: [] }
		}
	}
};
