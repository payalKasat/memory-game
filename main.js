console.log("Up and running!");

alert('Hello, friends.');

let cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];

let cardsInPlay = [];

function flipCard(){
	let cardId = this.getAttribute('data-id');
	console.log("User flipped" +" " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src',cards[cardId].cardImage);
	function checkForMatch(){
	
		if(cardsInPlay.length === 2){
			if(cardsInPlay[0] === cardsInPlay[1]){
				alert("You found a match!");
			}
			else{
				alert('sorry, try again');
			}
		}
		 console.log(cards[cardId].cardImage);
		 console.log(cards[cardId].suit);
	}
	checkForMatch();	
}
// flipCard(0);
// flipCard(1);

function createBoard(){
	for (let i = 0; i < 4; i++) {
    // Logic here
    let cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    let cardAttri = cardElement.setAttribute('data-id' , i);

    cardElement.addEventListener("click", flipCard);
    document.getElementById('game-board').appendChild(cardElement);

	}
}

createBoard();