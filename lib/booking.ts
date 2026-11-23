// The one place the booking link lives. Every "Book a 30-minute call" button
// reads from here, so changing the scheduler means changing this line only.

export const BOOKING_URL = 'https://calendar.app.google/A4H4KiH9CHsWfSM36';

export const BOOKING_LABEL = 'Book a 30-minute call';

export const isExternalBooking = /^https?:\/\//.test(BOOKING_URL);

// The call page, where the booking calendar and the fallback form sit.
export const CALL_PAGE = '/leverage-audit';
