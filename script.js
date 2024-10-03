const cardArray = [
    {
        name : 'fries',
        img : '/memoryGame/images/fries.png',
    },
    {
        name : 'cheeseburger',
        img : '/memoryGame/images/cheeseburger.png',
    },
    {
        name : 'hotdog',
        img : '/memoryGame/images/hotdog.png',
    },
    {
        name : 'milkshake',
        img : '/memoryGame/images/milkshake.png',
    },
    {
        name : 'pizza',
        img : '/memoryGame/images/pizza.png',
    },
    {
        name : 'ice-cream',
        img : '/memoryGame/images/ice-cream.png',
    },
    {
        name : 'fries',
        img : '/memoryGame/images/fries.png',
    },
    {
        name : 'cheeseburger',
        img : '/memoryGame/images/cheeseburger.png',
    },
    {
        name : 'hotdog',
        img : '/memoryGame/images/hotdog.png',
    },
    {
        name : 'milkshake',
        img : '/memoryGame/images/milkshake.png',
    },
    {
        name : 'pizza',
        img : '/memoryGame/images/pizza.png',
    },
    {
        name : 'ice-cream',
        img : '/memoryGame/images/ice-cream.png',
    },
]

cardArray.sort(() => Math.random() - 0.5);

let cardChoosen =[]

let cardChoosenId = []
let cardsWon =[]


let totalScore = document.getElementById('result');
const gridDisplay = document.querySelector('#grid');

cardArray.forEach((_,index) =>{
    const card = document.createElement('img')
    card.setAttribute('src', 'images/blank.png')
    card.setAttribute('data-id', index)
    card.addEventListener('click', flipCard)
     gridDisplay.appendChild(card);

})

function checkMatch(){

    const cards = document.querySelectorAll('img')
    let op1 = cardChoosenId[0];
    let op2 = cardChoosenId[1];

        console.log(cards);
        if(op1 === op2){
            cards[op1].setAttribute('src','images/blank.png');
            cards[op2].setAttribute('src','images/blank.png');
            alert("you chose the same card, choose again...")
        }
    if(cardChoosen[0] === cardChoosen[1]){
       alert('Yay!! matched..')
        cards[op1].setAttribute('src','images/white.png');
        cards[op2].setAttribute('src','images/white.png');
        cards[op1].removeEventListener('click',flipCard);
        cards[op2].removeEventListener('click',flipCard);
        cardsWon.push(cardChoosen);
      
        
    } else{
        cards[op1].setAttribute('src','images/blank.png');
        cards[op2].setAttribute('src','images/blank.png');
    }
    totalScore.textContent = cardsWon.length;
    cardChoosen = []
    cardChoosenId = []
    if(cardsWon.length === cardArray.length / 2){
        totalScore.textContent = "Congrats!! you found them all...."
       
    }

}

function flipCard(){
    const cardId = this.getAttribute('data-id');
    cardChoosen.push(cardArray[cardId].name);
    this.setAttribute('src',cardArray[cardId].img)
    cardChoosenId.push(cardId)
    console.log(cardChoosen);
    if(cardChoosen.length === 2){
        setTimeout(checkMatch,500)
    }


}






