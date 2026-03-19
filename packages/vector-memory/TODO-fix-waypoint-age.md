# Fix: Waypoint age display

The session start hook displays waypoint timestamps as relative time (e.g., "1d ago"), but the calculation is off. A waypoint set at 23:07 UTC on 2026-03-18 was shown as "1d ago" at 23:08 UTC on the same day.

Investigate the relative time logic in the waypoint display.
