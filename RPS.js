const choices = document.querySelectorAll('.choice');
const resultDiv = document.getElementById('result');
const scoreDiv = document.getElementById('score');

let userScore = 0;
let compScore = 0;

const getComputerChoice = () => {
  const options = ['rock', 'paper', 'scissors'];
  return options[Math.floor(Math.random() * 3)];
};

const getWinner = (user, computer) => {
  if (user === computer) return 'draw';
  if (
    (user === 'rock' && computer === 'scissors') ||
    (user === 'paper' && computer === 'rock') ||
    (user === 'scissors' && computer === 'paper')
  ) return 'user';
  return 'computer';
};

const playGame = (userChoice) => {
  const computerChoice = getComputerChoice();
  const winner = getWinner(userChoice, computerChoice);

  if (winner === 'user') {
    userScore++;
    resultDiv.textContent = `You Win! ${userChoice} beats ${computerChoice}`;
  } else if (winner === 'computer') {
    compScore++;
    resultDiv.textContent = `You Lose! ${computerChoice} beats ${userChoice}`;
  } else {
    resultDiv.textContent = `It's a Draw! You both chose ${userChoice}`;
  }

  scoreDiv.textContent = `${userScore} : ${compScore}`;
};

choices.forEach(choice => {
  choice.addEventListener('click', () => {
    playGame(choice.id);
  });
});
