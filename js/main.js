const noBtn = document.querySelector('.btn--no')
const yesBtn = document.querySelector('.btn--yes')
const img = document.querySelector('.heart')
const description = document.querySelector('.description')

const titleB = document.querySelector('.title--big')
const titleM = document.querySelector('.title--mini')

let i = 0

const noClicked = () => {
	noBtn.style.top = Math.floor(Math.random() * 75) + '%'
	noBtn.style.right = Math.floor(Math.random() * 20) + '%'
	i++

	if (i >= 3) {
		img.setAttribute('src', './img/sadcat.gif')
		noBtn.style.display = 'none'
		description.style.display = 'block'
		titleB.textContent = 'Jeszcze możesz zmienić decyzję...'
		titleM.style.display = 'none'
		yesBtn.style.left = '30%'
	}
}

const yesClicked = () => {
	noBtn.style.display = 'none'
	yesBtn.style.left = '30%'
	img.setAttribute('src', './img/happycat.gif')
	description.style.display = 'block'
	titleM.style.display = 'block'
	titleM.textContent = 'Już się nie mogę doczekać, aż Cię przytulę...'
	titleB.textContent = '01:01 KOCHAM CIĘ BARDZO!!!!'
}

noBtn.addEventListener('click', noClicked)
noBtn.addEventListener('touchend', noClicked)

yesBtn.addEventListener('click', yesClicked)
yesBtn.addEventListener('touchend', yesClicked)
