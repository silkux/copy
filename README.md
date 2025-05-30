# silkux-copy

Vestigial 5-minute web app for copy/paste and permanent delete.

🔗 https://silkux-copy.vercel.app

## Features

- Paste text
- Save to shared backend
- "Clear" deletes for everyone, forever
- No login, no database

## Structure

- `index.html` – UI
- `api/paste.js` – In-memory storage

## Deploy

```bash
vercel --prod
