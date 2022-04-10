const card = document.querySelectorAll('.card');
const card1 = document.querySelector('.card1');


window.addEventListener('scroll', scrolling);


function scrolling() {
    const height = window.innerHeight / 5 * 4;


    console.log(height)
    console.log(card1.getBoundingClientRect().top)

    card.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < height) {
            card.classList.add('show');
        }else{
            card.classList.remove('show');
        }
    })
}