const btnShare = document.querySelector('.share-content');
const modal = document.querySelector('.modal');
const iconShare = document.querySelector('.share-content img');
const modalBottom = document.querySelector('.modal-bottom');
const socialMedia = document.querySelector('.share-left');
ejecutarEvento();
const ventana = screen.width;
console.log(ventana);

function ejecutarEvento() {
    btnShare.addEventListener('click', ejecutarModal);

    modalBottom.addEventListener('click', ejecutarModal);
}

function ejecutarModal(e) {

    if (ventana > 475) {
        if (e.target.classList.contains('share-content')) {
            modal.style.display = 'flex';
            e.target.style.backgroundColor = 'hsl(214, 17%, 51%)';
            iconShare.style.filter = 'brightness(5)';
        }
    } else {
        if (e.target.classList.contains('share-right')) {
            modalBottom.style.backgroundColor = 'hsl(214, 17%, 51%)';
            e.target.style.backgroundColor = 'hsla(212, 23%, 69%, 0.377)';
            e.target.style.filter = 'brightness(5)';
            socialMedia.style.visibility = 'inherit';
        }
    }


}