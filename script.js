
const letter = `my baby, my fav human, darling, honey, bunny, babyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy,

i still remember when you came up to me in college and introduced yourself. i didn’t expect it, but that small moment became something really big in my life. at first, we just talked a little, had some canteen moments which went bad on the 2nd or 3rd time (idk) , and slowly we started talking more, meeting more and that’s when everything started changing.

i liked you from the start, honestly. but somewhere in the middle i lost that spark for a bit cuz uk why but once we started hanging out properly again, everything came back, and this time it hit harder. i started feeling things for you in a way i’ve never felt for anyone else.

on may 7th, when we fought (idk over what lol), and i asked if you loved me, i didn’t expect a yes. but you said it and that moment just made me feel like the luckiest guy ever. 

we fight a lot, yeah. and most of the time it’s because of me. i mess up, i say dumb things, and i act distant sometimes but please know, it’s never because i don’t care. i care so much. more than i show, more than i know how to express. and i’m sorry for the times i made you feel bad or ignored.

you’re the most beautiful, breathtaking, cutest girl i’ve ever seen. like seriously . your smile, your voice, your angry face (yes even that), your whole vibe it’s all perfect to me.

i wish i could spoil you the way i want to. buy you your fav things, take you out, give you surprises but you know how things are for me right now. still, i promise i’ll work hard, get better, and one day give you the life you deserve.

you’ve changed the way i see love. before you, i didn’t believe in all this relationship stuff either. but now? now i can’t imagine a day without talking to you, without hearing your voice. you make even my worst days feel okay.

i want a future with you. the kind where we come home tired, eat together, cuddle, have fucking sex sex, talk about random stuff and fall asleep knowing we’ve got each other. i don’t care about anything else as long as it’s you beside me.

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
