
const letter = `i honestly don’t even remember how exactly it all started, but what i do know is that it’s one of the best things to happen in my life. from random convos in college to canteen fights to awkward flirting to full-blown chaos, somehow we ended up here. and i’m so glad we did.

i know i mess up a lot. i say dumb things, i get moody, i act distant sometimes, and i know it hurts you. but please never think it’s because i don’t care. i care about you more than i’ve ever cared about anyone. even when i’m acting weird or quiet, you’re the one person who’s always on my mind.

you’ve seriously changed how i see relationships. i used to not care much about all that couple stuff, but now it actually means something to me. and that’s because of you.

i love how you hype me up, how you match my energy, how you bully me one second and act soft the next. even when you’re threatening to steal my salary or make me go broke after marriage, i still want all of it with you.

you’re the most beautiful, chaotic, caring, stubborn, dramatic and lovable human i know. and i wouldn’t want anyone else by my side.

i can’t wait for the day when we get to be together properly. no hostel, no distance, no hiding. just us. i’ll come back home tired, and you’ll be waiting to yell at me or cuddle or both. and that’s the version of life i actually want.

i love you. so much. more than you probably realise. and no matter how things go, i’m not going anywhere. unless you kill me, which is a real possibility considering how you talk sometimes.

i love you so so so so so soo so soos oso ososoo ossoso osoososo sosos ososos soooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo much.
`;

const textEl = document.getElementById("letterText");
let index = 0;

function typeLetter() {
  if (index < letter.length) {
    textEl.textContent += letter.charAt(index);
    index++;
    setTimeout(typeLetter, 15);
  }
}

typeLetter();
