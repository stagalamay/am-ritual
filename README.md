# AM Ritual

A sample website for a made-up cafe. AM Ritual is not a real business, and this was not built
for a client. It is a portfolio piece that shows a one-page site for a local food business.

## What is on the page

- A first screen with the headline, today's opening hours and two photos
- A menu: four photo cards, then a full price list in Philippine pesos
- A photo collage, a signature set, an about section
- Opening hours, a map and directions
- On phones, a bar fixed at the bottom with Directions and Call

## How it is built

Plain HTML, CSS and JavaScript. No framework and no build step.

| File | What it does |
|---|---|
| `index.html` | All the content |
| `styles.css` | Colours, type and layout. Written for phones first, with one block for wider screens |
| `hours.js` | Reads the time in Manila, shows "Open today until 9 PM", highlights today's row |
| `menu.js` | Menu tabs on phones, and links from the photo cards to the price list |
| `reveal.js` | Fades sections in as they scroll into view |
| `nav.js` | Underlines the top-bar link for the section on screen |
| `favicon.svg` | The browser-tab icon |

Things worth pointing out:

- The page works without JavaScript: the whole menu is listed and nothing stays hidden.
- Animations switch off for people who set their device to reduce motion.
- Every photo has a text description, and the page can be used with a keyboard.
- Photos are sized for the screen: a phone loads a smaller first-screen photo than a laptop.

## Run it

Open `index.html` in a browser. Nothing to install.

## Credits

- Photos: free stock photos from [Unsplash](https://unsplash.com), standing in for a cafe's own. Copies are in `images/`.
- Fonts: Fraunces and DM Sans, from Google Fonts.
