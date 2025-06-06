const express = require("express"); const app = express();

const gifts = [
  "ein Maid-Outfit. Fang besser an zu putzen!",
  "eine Prinzessinen-Mysterybox (es ist Yasmin drin).",
  "eine Chai-Latte sophorKaffee ",
  "ein neues Outfit sophorHYPE ",
  "gar nichts. Wärst du mal brav gewesen sophorKorb ",
  "ein Kamasutra. Hoffentlich seid ihr beide gelenkig.",
  "ein bisschen Majoran, damit das Leben würzig bleibt.",
  "eine Limousine. Erinnert mich irgendwie an Oma...",
  "einen Valorant-Skin. Hoffentlich ist es Star Guardian.",
  "eine Kopie vom Hit-Film WAMPE. Du Glückspilz sophorHYPE ",
  "einen sophorKorb . Wärst du mal nicht so frech gewesen.",
  "einen sophorAntiKorb . Bitte nehmt euch ein Zimmer, das hält ja keiner aus.",
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
  "eine saubere Küche. Die geilen Maids haben wohl wieder zugeschlagen sophorNice ",
  "einen neuen Bot für Twitch. Jetzt hat Sophie wieder was zum Verlieben.",
  "ein neues Outfit für ein VTuber-Model. Natürlich nicht so schön wie das von Susi.",
  "ein bisschen Liebe. Kann man das auch in Prozenten ausdrücken?",
  "einen rechtzeitigen Bus. Ich hätte fast angefangen zu weinen :(",
  "ein süßes Lächeln. Ich glaube meine Knie zittern.",
  "ein nettes Kompliment (aber Mom kann das noch besser).",
  "Bikinibilder von Yamila. Die sind selten.",
  "13 Stunden Schlaf. Schön sein ist nicht leicht gemacht.",
  "Liebe. Einfach nur Liebe. Kein Meme, einfach nur Liebe.",
  "das Gefühl nicht alleine in diesem Universum zu sein.",
  "ein halbes Knoppers. Nichtmal ein ganzes. Richtiges Einzelkind.",
  "ein Instagram-Reel. Sei nicht so schüchtern und sende eins zurück.",
  "eine Krosse-Krabbe-Pizza. Natürlich ohne Schwammerl und Oliven ^^",
  "einen Döner von Ferhat (mit alles ohne scharf).",
  "eine eigene Sportplaylist. Ab ins Fitnessstudio mit dir jetzt.",
  "ein offenes Ohr, falls dir mal was am Herzen liegt.",
  "einen Track wo der Sänger gleich am Anfang AUSRASTET!!!",
  "einen Eimer mit Farbe. SEI BLOß VORSICHTIG!!!",
  "eine Packung Pistazien. Bitte nicht auf das Ipad stellen XD.",
  "einen Wingsuit. Oder soll das eine Jacke sein?",
  "einen Anruf. Kira on the phone.",
  "einen City-Roller. Damit kannst du bei jeder scheiß Party vorrollen sophorHYPE ",
  "ein kleines Tänzchen. Ich hoffe du kannst Tango tanzen ^^",
  "eine witzige Nachricht. Meine Backen tun schon langsam weg XD",
  "einen Bussibär. Bei deinem Anblick wird der zum Bergsteiger.",
  "ein Toffifee du kleiner Hase <3",
  "ein kleines Gedicht. Richter Bad-Poet-Boy sophorNice ",
  ""
];
const momGift = "Liebe von der coolsten Mom überhaupt sophorHYPE <3";

//  git commit -am "text angepasst" && git push

app.get("/geschenk", (req, res) => {
  const user = req.query.user || "jemand";
  let target = req.query.target || "jemand anderes";

  // Entferne führendes @, falls vorhanden
  if (target.startsWith("@")) {
    target = target.substring(1);
  }

  const gift = gifts[Math.floor(Math.random() * gifts.length)];
  if (user == (("sandy_sunshine68") || "taremani04")) {
  res.send(`${user} schenkt ${target} ${momGift}`);
  }
  else{
  res.send(`${user} schenkt ${target} ${gift}`);
  }
});

app.listen(3000, () => {
  console.log("API läuft auf Port 3000");
});