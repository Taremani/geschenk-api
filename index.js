const express = require("express");
const app = express();


const gifts = [
  "ein Maid-Outfit. Fang besser an putzen!",
  "einen Keks. Den kannst du mit dem ganzen Freundeskreis teilen.",
  "eine Prinzessinen-Misterybox (es ist Yasmin drin).",
  "eine Chai-Latte.",
  "ein neues Outfit <3",
  "gar nichts. Wärst du mal brav gewesen.",
  "ein Kamasutra. Hoffentlich seid ihr beide gelenkig.",
  "ein bisschen Majoran, damit das Leben würzig bleibt.",
  "eine Limousine. Erinnert mich irgendwie an Oma...",
  "einen Valorant-Skin. Hoffentlich ist es Star Guardian.",
  "eine Kopie vom Hit-Film WAMPE. Du Glückspilz.",
  "einen Korb. Wärst du mal nicht so frech gewesen.",
  "einen Anti-Korb. Bitte nehmt euch ein Zimmer, das hält ja keiner aus.",
  "ein Konzert-Ticket für bbno$. Viel Spaß ihr kleinen Freaks.",
  "ein grünes Red Bull. Hier weiß jemand was gut ist :)",
  "einen Gutschein für den Friseur. Jetzt kannst du die Person mit den 2. schönsten Haaren sein.",
  "eine Besichtigungstour mit Mario zum Freimaurer-Bunker.",
  "eine Runde Streicheleinheiten mit Dolly ^^",
  "ein Funko-Pop. Ich hoffe es ist Ariel.",
  "eine Verspätung. Was eine Stanzi.",
  "ein Tagesticket für den Fitinn. Lass dich nicht ablenken ^^",
  "einen Crush. Ich hoffe der Therapeut erfährt davon nichts.",
  "eine Möglichkeit zum Modeln. Dein Termin beginnt in einer Stunde.",
  "einen neuen Gaming-PC. Der alte war schon in die Jahre gekommen.",
  "ein Ticket für die Comicon. Da rennt irgendwo auch eine Sage herum.",
  "einen Klaps auf den Po. Da steht jemand auf dich <3",
  "eine saubere Küche. Die geilen Maids haben wohl wieder zugeschlagen :)",
  "einen neuen Bot für Twitch. Jetzt hat Sophie wieder was zum Verlieben.",
  "ein neues Outfit für ein VTuber-Model. Natürlich nicht so schön wie das von Susi.",
  "ein bisschen Liebe. Kann man das auch in Prozenten ausdrücken?",
  "einen rechtzeitigen Bus. Ich hätte fast angefangen zu weinen :(",
  "ein süßes Lächeln. Ich glaube meine Knie zittern.",
  "ein nettes Kompliment (aber Mom kann das noch besser)",
  "Bikinibilder von Yamila. Die sind selten.",
  "13 Stunden Schlaf. Schön sein ist nicht leicht gemacht.",
  "Liebe. Einfach nur Liebe. Kein Meme, einfach nur Liebe.",
  "das Gefühl nicht alleine in diesem Universum zu sein.",
  "ein halbes Knoppers. Nichtmal ein ganzes. Richtiges Einzelkind.",
  "ein Instagram-Reel. Sei nicht so schüchtern und sende eins zurück.",
];


app.get("/geschenk", (req, res) => {
  const user = req.query.user || "jemand";
  const target = req.query.target || "jemand anderes";
  const gift = gifts[Math.floor(Math.random() * gifts.length)];
  res.send(`${user} schenkt ${target} ${gift}`);
});

app.listen(3000, () => {
  console.log("API läuft auf Port 3000");
});