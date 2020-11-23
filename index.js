alert("Guess the Number");

let chosenNumber = prompt("");

if (chosenNumber > 17) {
  alert("Your guess is too high. Guess again!");
} else if (chosenNumber < 17) {
  alert("Your guess is too low.Guess again");
} else {
  alert("you guess correct");
}
