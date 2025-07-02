const express = require("express"); const app = express();

const gifts = [
  //"ein Maid-Outfit. Fang besser an zu putzen!",
  //"eine Prinzessinen-Mysterybox (es ist Yasmin drin).",
  //"eine Chai-Latte sophorKaffee ",
  //"ein neues Outfit sophorKaffee ",
  //"gar nichts. Wärst du mal brav gewesen sophorKorb ",
  //"ein Kamasutra. Hoffentlich seid ihr beide gelenkig.",
  //"ein bisschen Majoran, damit das Leben würzig bleibt.",
  "eine Limousine. Erinnert mich irgendwie an Oma...",
  //"einen Valorant-Skin. Hoffentlich ist es Star Guardian.",
  "eine Kopie vom Hit-Film WAMPE. Du Glückspilz sophorKaffee ",
  //"einen sophorKorb . Wärst du mal nicht so frech gewesen.",
  "einen sophorAntiKorb . Bitte nehmt euch ein Zimmer, das hält ja keiner aus.",
  //"ein Konzert-Ticket für bbno$. Viel Spaß ihr kleinen Freaks.",
  "ein grünes Red Bull. Hier weiß jemand was gut ist :)",
  "einen Gutschein für den Friseur. Jetzt kannst du die Person mit den 2. schönsten Haaren sein.",
  //"eine Besichtigungstour mit Mario zum Freimaurer-Bunker.",
  "eine Runde Streicheleinheiten mit Dolly ^^",
  //"ein Funko-Pop. Ich hoffe es ist Ariel.",
  //"eine Verspätung. Was eine Stanzi.",
  //"ein Tagesticket für den Fitinn. Lass dich nicht ablenken ^^",
  "einen Crush. Ich hoffe der Therapeut erfährt davon nichts.",
  "eine Möglichkeit zum Modeln. Dein Termin beginnt in einer Stunde.",
  //"einen neuen Gaming-PC. Der alte war schon in die Jahre gekommen.",
  //"ein Ticket für die Comicon. Da rennt irgendwo auch eine Sage herum.",
  "einen Klaps auf den Po. Da steht jemand auf dich <3 ",
  "eine saubere Küche. Die geilen Maids haben wohl wieder zugeschlagen sophorKaffee ",
  //"einen neuen Bot für Twitch. Jetzt hat Sophie wieder was zum Verlieben.",
  //"ein neues Outfit für ein VTuber-Model. Natürlich nicht so schön wie das von Susi.",
  "ein bisschen Liebe. Kann man das auch in Prozenten ausdrücken?",
  //"einen rechtzeitigen Bus. Ich hätte fast angefangen zu weinen :(",
  //"ein süßes Lächeln. Ich glaube meine Knie zittern.",
  "ein nettes Kompliment (aber Mom kann das noch besser).",
  "Bikinibilder von Yamila. Die sind selten.",
  //"13 Stunden Schlaf. Schön sein ist nicht leicht gemacht.",
  "Liebe. Einfach nur Liebe. Kein Meme, einfach nur Liebe.",
  "das Gefühl nicht alleine in diesem Universum zu sein.",
  "ein halbes Knoppers. Nichtmal ein ganzes. Richtiges Einzelkind.",
  //"ein Instagram-Reel. Sei nicht so schüchtern und sende eins zurück.",
  "eine Krosse-Krabbe-Pizza. Natürlich ohne Schwammerl und Oliven ^^",
  "einen Döner von Ferhat (mit alles ohne scharf).",
  //"eine eigene Sportplaylist. Ab ins Fitnessstudio mit dir jetzt.",
  "ein offenes Ohr, falls dir mal was am Herzen liegt.",
  //"einen Track wo der Sänger gleich am Anfang AUSRASTET!!!",
  //"einen Eimer mit Farbe. SEI BLOß VORSICHTIG!!!",
  "eine Packung Pistazien. Bitte nicht auf das Ipad stellen XD.",
  //"einen Wingsuit. Oder soll das eine Jacke sein?",
  "einen Anruf. Kira on the phone.",
  //"einen City-Roller. Damit kannst du bei jeder scheiß Party vorrollen sophorKaffee ",
  "ein kleines Tänzchen. Ich hoffe du kannst Tango tanzen ^^",
  //"eine witzige Nachricht. Meine Backen tun schon langsam weh XD",
  "einen Bussibär. Bei deinem Anblick wird der zum Bergsteiger.",
  "ein Toffifee du kleiner Hase <3 ",
  "ein kleines Gedicht. Richtiger Bad-Poet-Boy <3 ",
  "ein kurzes coding adventure. 15 minuten, nicht mehr.",
  "einen Tom... ich meine Patrick?",
  "ein bisschen zu viel Aufmerksamkeit. Da hängt doch jemand mit dem Feldstecher im Baum...",
  "eine Reise in die Berge, ich hoffe du hast keine Höhenangst ;) ",
  "eine kurze Voicemail mit deiner schönen Stimme sophorSpongebobLOVE ",
  "einen schüchternen Blick. Da steht jemand auf dich du qt-3.14",
  "eine Packung Smarties. Die perfekte Mischung aus süß und crazy ;) ",
  "ein süßes Träumchen. Soll er niemals enden sophorSpongebobLOVE ",
  "einen Gutenachtkuss. Schlaf gut <3 ",
  "eine Runde R.E.P.O weil ihr zusammen jedes Monster besiegen könnt.",
  "ein Bussi aufs Nussi <3 ",
  "einen Spaziergang zu einem Ort wo der Flieder blüht und die Vögel zwitschern.",
  "einen gemeinsamen JAM. Lass uns für den Rest unseres Lebens dazu viben sophorSpongebobLOVE ",
  "ein paar Legosteine und eine Tube Gleitcreme, damit die Steine besser flutschen ;) ",
  "einen Englischkurs. Was heißt Hexe auf Englisch?",
  "eine Packung Käse-Bugles du Puppe <3 ",
  "ein kleines Kompliment. Da will dich wohl jemand in Verlegenheit bringen ;) ",
  "eine Liste an süßen Reels die du geliked hast. An wen hast du dabei wohl gedacht ^^ ",
  "eine sehr späte Antwort. Etzala verwendest du noch Windows 7 oder was da los?",
  "ein paar Ideen für Dehnübungen, damit du beim Bettsport gelenkig bleibst ;) ",
  "einen tiefen Blick. Wie schön diese Augen nur sind sophorSpongebobLOVE ",
  "die auswahl zwischen Eistee Zitrone und Pfirsich. Ich hoffe du triffst die richtige.",
  "einen gemeinsamen Karaokeabend. Hoffentlich singt ihr schief irgendwelche Liebeslieder <3 ",
  "eine gemeinsame JAM-Session. Aber nur wenn du willst. Sonst natürlich nicht. Willst du ><?",
  "einen Spaziergang durch den Park. Hast du Bock?",
  "ein sexy T-Shirt in dem du richtig gut aussehn wirst!!11!!1!",
  "ein bisschen Zeit um zu heilen. Nimm sie dir, du hast sie verdient sophorSpongebobLOVE ",
  "17 tiefe Blicke und 12 mal ein breites Grinsen ^^ ",
  "eine Möglichkeit zum Katze streicheln ;) ",
  "einen Charakter in meinem Sims-Haus. Schau ma mal was wir für unanständige Dinge treiben ;) ",
];
const momGift = "Liebe von der coolsten Mom überhaupt sophorKaffee ";

//  git commit -am "text angepasst" && git push

app.get("/geschenk", (req, res) => {
  const user = req.query.user || "jemand";
  let target = req.query.target || "jemand anderes";

  // Entferne führendes @, falls vorhanden
  if (target.startsWith("@")) {
    target = target.substring(1);
  }

  const gift = gifts[Math.floor(Math.random() * gifts.length)];
  if (["sandy_sunshine68", "sandy_sunshine", "sandysunshine68"].includes(user)) {
  res.send(`${user} schenkt ${target} ${momGift}`);
  }
  else{
  res.send(`${user} schenkt ${target} ${gift}`);
  }
});

app.listen(3000, () => {
  console.log("API läuft auf Port 3000");
});