const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
const WINNING_COMBINATIONS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]

]
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const winningMessageElement = document.getElementById('winningMessage')
const restartButton = document.getElementById('restartButton')
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
let circleTurn;
let count = 0;
let numberTurns = document.getElementById('number');

startGame()

restartButton.addEventListener('click', () =>{
	location.reload();
})

function startGame() {
	circleTurn = false
	document.getElementById('pl1').style.backgroundColor = 'green';
	document.getElementById('pl2').style.backgroundColor = 'white';
	cellElements.forEach(cell => {
		cell.classList.remove(X_CLASS)
		cell.classList.remove(CIRCLE_CLASS)
		cell.removeEventListener('click', handleClick)
		cell.addEventListener('click', handleClick, { once: true })
		numberTurns.innerHTML = '';
	})
	setBoardHoverClass();
	

	winningMessageElement.classList.remove('show')
}

function handleClick(event) {
	//console.log('clecked')//проверка что было нажато и сколько раз(по условию можно нажать только раз)
	const cell = event.target
	const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS// Х потом О
	if (circleTurn) {
		document.getElementById('pl1').style.backgroundColor = 'green';
		document.getElementById('pl2').style.backgroundColor = 'white';
		
	}
	else {
		document.getElementById('pl2').style.backgroundColor = 'green';
		document.getElementById('pl1').style.backgroundColor = 'white';
	}

	placeMark(cell, currentClass)
	if (checkWin(currentClass)) {
		endGame(false)
	} else if (isDraw()) {
		endGame(true)
	} else {
		swapTurns();
		setBoardHoverClass()
	}
	count++;
	numberTurns.innerHTML  =  count;

}

function endGame(draw) {
	if (draw) {
		winningMessageElement.innerHTML = 'Draw!'
	} else {
		winningMessageTextElement.innerHTML = `${circleTurn ? "O's" : "X's"} Wins!`
	}
	winningMessageElement.classList.add('show')
}

function isDraw() {
	return [...cellElements].every(cell => {
		return cell.classList.contains(X_CLASS) ||
			cell.classList.contains(CIRCLE_CLASS)
	})
}


function placeMark(cell, currentClass) {
	cell.classList.add(currentClass)
}

function swapTurns() {
	circleTurn = !circleTurn
}
function setBoardHoverClass() {//при хавере подсвечивается серым то что возможно будет нажато 
	board.classList.remove(X_CLASS)
	board.classList.remove(CIRCLE_CLASS)
	if (circleTurn) {
		board.classList.add(CIRCLE_CLASS)
	} else {
		board.classList.add(X_CLASS)
	}
}

function checkWin(currentClass) {
	return WINNING_COMBINATIONS.some(combination => {
		return combination.every(index => {
			return cellElements[index].classList.contains(currentClass)
		})
	})
}