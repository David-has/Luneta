# Lunetă – astronomical observatory

A landing page for Lunetă, a fictional astronomical observatory. At night visitors can see planets and stars, and during the day they can watch the Sun safely and visit the planetarium. Everything runs in the browser, with no libraries and no server.

> Demo project: the programs, prices, reviews and bookings are made up. The page content is in Romanian.

## Features

- **Night and day:** one switch changes everything at once. At night the sky shows stars, the Moon and a shooting star. During the day the Sun appears with rotating rays, and clouds drift by. The telescope on the hill changes its direction.
- **Today's Moon phase**, calculated from the current date and shown in the hero (night mode).
- **Programs with tabs:** observing nights at night, a day program (Sun, planetarium, workshops) during the day. Each one has a price, duration, level, rating and tags.
- **One-click booking:** the "Rezervă" button on a card fills the form with the chosen program.
- **Sky guide that draws itself on scroll:** at night it connects the stars of the Summer Triangle and Polaris. During the day it shows the route of a visit. The stops light up one by one.
- **Tickets and subscriptions**, with one highlighted plan.
- **How a visit works**, with a line that fills as you scroll.
- **Reviews, FAQ and a booking form.**
- **Scroll motion:** progress bar, counting numbers, hero parallax and elements that appear one after another.
- **Responsive**, and it respects the "reduce motion" setting. The chosen theme is saved in the browser.

## Project structure

```
index.html   page structure
style.css    styles, themes and animations
script.js    content, themes, bookings and scroll animations
```

## Run it locally

1. Download or clone the project.
2. Open `index.html` in a browser, or use the **Live Server** extension in VS Code.

All three files must be in the same folder.

## Publish it (GitHub Pages)

1. Upload the files to the root of the repository.
2. Go to **Settings → Pages**.
3. Under *Source* choose **Deploy from a branch**, branch **main**, folder **/ (root)**.
4. After a minute or two the page is live at `https://your-username.github.io/your-repo/`.

## Customize it

At the top of `script.js`, the `DATA` object holds the texts, programs and prices for night mode (`dark`) and day mode (`light`).

Colors are in the variables at the top of `style.css`, one set for each mode.

## Built with

Plain HTML, CSS and JavaScript. The fonts (Fraunces and Outfit) come from Google Fonts.
