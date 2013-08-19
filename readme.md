# Vimmy - Simpler Vi Keybinds

This is a Chrome port of my quick Vimmy.safariext project

## Installation

I didn't bother publishing the extension, but installing from the package is easy enough. Get a copy of the folder onto your computer, then open `chrome://extensions` in Chrome, turn on Developer Mode and load the unpacked extension.

## Quickstart
- `hjkl` to scroll left/down/up/right
- `gg` and `shift+g` to scroll to top/bottom
- `f` to follow a link with its default action
- `esc` and `ctrl+[` to break out of link mode

## Specific Benefits
There are a few reasons why I wrote my own extension rather than using one of the existing ones
- smarter hinting (higher contrast, explicitly points to the item, hints are kept in place after navigation)
- scrolling animations make motion more fluid
- doesn't override or add common actions (⌘+T, ^+tab, ⌘+W, etc.)
- turns off hjkl scrolling for websites I know that implement their own (Facebook, Twitter, etc.)
- flexible and easy to maintain to I can add shortcuts easily later if I so desire

## Bugs
There are a few websites where the hint CSS becomes broken. I'm on the lookout for these and I fix them as I see them. The same goes for websites with their own hjkl bindings.
