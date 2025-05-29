const express = require("express");
const app = express();

/*
const gifts = [
  "einen Apfel 🍎",
  "einen Keks 🍪",
  "eine Blume 🌸",
  "einen Teddybär 🧸",
  "einen Kaffee ☕",
  "eine Pizza 🍕",
  "einen Donut 🍩",
  "eine Banane 🍌"
];
*/

app.get("/", (req, res) => {
  const user = req.query.user || "jemand";
  const target = req.query.target || "jemand anderes";
  const gift = gifts[Math.floor(Math.random() * gifts.length)];
  res.send(`${user} schenkt ${target} ${gift} – wie süß!`);
});

app.listen(3000, () => {
  console.log("API läuft auf Port 3000");
});