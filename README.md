# turkicc.github.io

Personal site for **Turkicc**, Minecraft screensharer. Live at https://turkicc.github.io

## Update the server list

All servers are in [`servers.js`](servers.js). One line per server:

```js
{ name: "PvPHQ", type: "ss", role: "Screensharer", members: 106800, status: "active" },
```

- `type`: `"ss"` (screenshare community, shown as a big card), `"tier"` (tierlist) or `"com"` (server / SMP / FFA)
- `members`: Discord member count as a plain number (`1.4k` = `1400`)
- `status`: `"active"` or `"resigned"`

The stats at the top (active servers, combined members, tierlists, all-time) are calculated from this list automatically.

You can edit `servers.js` directly on GitHub (pencil icon → Commit changes). The site updates within a minute or two.

## Files

- `index.html` – the page (design, profile text, contact links)
- `servers.js` – the server list
- `favicon.svg` – tab icon
