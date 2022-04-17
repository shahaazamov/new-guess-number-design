let random = Math.floor(Math.random() * 20) + 1

let again = document.querySelector('.again')
let soroq = document.querySelector('.soroq')
let check = document.querySelector('.check')
let start = document.querySelector('.start')
let score = document.querySelector('.score')
let highscore = document.querySelector('.highscore')
let input = document.querySelector('.input')
let scorenum = 20
let Guess=document.querySelector('.center')
let modal=document.querySelector('.modal')
let overlay=document.querySelector('.overlay')
let changing= document.querySelector('.changing')
let close =document.querySelector('.close')


check.addEventListener('click', function () {
    if (random === Number(input.value)) {
        start.innerHTML = 'Topyabsiz'
        soroq.innerHTML=random
        Guess.innerHTML='Congratulation'
        highscore.innerHTML=scorenum
        changing.innerHTML=scorenum
        modal.classList.remove('hidden')
        overlay.classList.remove('hidden')
    } else if (random > Number(input.value)) {
        start.innerHTML = 'qoshing'
        scorenum--
        score.innerText = scorenum
        highscore.innerHTML=scorenum
    } else if (random < Number(input.value)) {
        start.innerHTML = 'kamroq tushing'
        scorenum--
        score.innerText = scorenum
        highscore.innerHTML=scorenum
    }
})
close.addEventListener('click',function(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
})
again.addEventListener('click',function(){
    location.reload()
})

