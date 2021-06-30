# navbar
> A navbar [component](https://github.com/marcodpt/component/)

[Live demo](https://marcodpt.github.io/component/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2Fmarcodpt%2Fnavbar%2Fsample.js)

[Tests](https://marcodpt.github.io/component/tests.html?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2Fmarcodpt%2Fnavbar%2Ftests.js)

## Params
 - boolean `whiteText`: whenever the text should be white or black, configure
it with your background choice
 - string `fixed`: position where the navbar should be fixed
 - string|boolean `expand`: if it is open, use screen sizes: xs, sm, md, lg
 - string `type`: primary, secondary, light, dark, etc
 - string `home`: url of home
 - string `image`: url of image
 - string|number `imageHeight`: height of the image
 - string `title`: Title of the navbar
 - array of objects `items` with navbar links, properties:
   - string `icon`
   - string `title`
   - string `url`
   - array `items`: recursive

## Update
 - string `url`: The current url of the page for setup the active route
