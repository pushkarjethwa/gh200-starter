const fs = require("fs");

fs.mkdirSync("dist", { recursive: true });

const builtAt = new Date().toISOString();
const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Contoso Support Portal</title>
    <style>
      body { font-family: Arial, sans-serif; max-width: 820px; margin: 60px auto; padding: 0 20px; }
      .card { border: 1px solid #ddd; border-radius: 12px; padding: 24px; }
      h1 { margin-top: 0; }
      code { background: #f5f5f5; padding: 2px 6px; border-radius: 4px; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>Contoso Support Portal</h1>
      <p>This application was built and deployed with GitHub Actions.</p>
      <p>Build timestamp: <code>${builtAt}</code></p>
      <p>Health endpoint: <code>/api/health</code></p>
    </div>
  </body>
</html>`;

fs.writeFileSync("dist/index.html", html);
fs.writeFileSync("dist/build-info.txt", `Build completed at ${builtAt}\n`);
console.log("Build complete: dist/index.html and dist/build-info.txt created.");
