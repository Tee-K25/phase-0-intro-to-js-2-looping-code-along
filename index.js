let friends = ["Charlie", "Samip", "Ali"];
let events = "birthday";
function writeCards(friends, events) {
  let messages = [];
  for (i = 0; i < friends.length; i++) {
    var message = `Thank you,${friends[i]},for the wonderful ${events} gifts!`;
    messages.push(message);
  }
  return messages;
}

function countDown(num) {
  while (num >= 0) {
    console.log(`Countdown is ${num}`);
    num--;
  }
}
countDown(10);
