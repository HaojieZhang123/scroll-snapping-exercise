# CSS scroll snapping testing
testing scroll snapping via CSS.

scroll-snap-type on the parent container
scroll-padding to add space for any components on top like headers
scroll-behaviour to make section links animate scrolling smoothly
scroll-snap-align on the child element to tell where to align to.

Noticed some problems on iOS and iPadOS Safari client where links don't work consistently.

### Typewriting animation
Typewriting animation done via react custom hook.
Take into a string as props and a value for speed. 
Set an Interval and update a stat value with the first i letters of the text via `slice(0, i)`
