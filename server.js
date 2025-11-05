const express = require("express");
const app = express();
const port = 5000;

// Import des routes
app.get("/", (req, res) => {
  res.send("HELLO WORLD ! C'est le Serveur de MyAlfa Link !");
});

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
