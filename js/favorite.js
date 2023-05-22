const favoriteBtns = document.querySelectorAll('.unfavorite-btn');

favoriteBtns.forEach(function (element) {
    element.onclick = function () {
        const heart = element.querySelector('.fa-heart');
        console.log(1);
        if (!element.classList.contains('favorite-btn')) {
            heart.classList.add('fa-regular');
            heart.classList.remove('fa-solid');

            element.classList.add('favorite-btn');
        }
        else{
            heart.classList.remove('fa-regular');
            heart.classList.add('fa-solid');
            element.classList.remove('favorite-btn');
        }
    }
});