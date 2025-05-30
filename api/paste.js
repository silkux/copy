let content = "";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      content = body;
      res.status(200).end('OK');
    });
  } else {
    res.status(200).send(content);
  }
}
