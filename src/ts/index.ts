const fontSize = 30;

setWowText('wowwow');

window.setTimeout(() => {
  $('#wowwow').animate({ fontSize });
}, 2000);

function setWowText(text: string): void {
  $('#wowwow').text(text);
}
