function sliderInit() {
    let sliderImages = document.querySelectorAll(".carousel__action-item");
    let arrLeft = document.getElementById("arrLeft")
    let arrRight = document.getElementById("arrRight")
    let sliderPoint = document.querySelector(".carousel__action-counter_points");

    const itemsImage = []

    function getImage(items) {

        sliderImages.forEach((item) => {
            itemsImage.push(item)
        })
        return items
    }

    const arrImages = getImage(itemsImage)

    let count = 1

    arrRight.addEventListener('click', function () {
        let sizeImage = document.querySelector(".carousel__action-item");

        // получаем отступ
        let getMargin = getComputedStyle(sizeImage).marginRight.slice(0, 2);

        // получаем размер блока со слайдом
        let fullSizeBlock = sizeImage.offsetWidth + Number(getMargin)

        //Делаем отрицательным
        let margin = fullSizeBlock - (fullSizeBlock * 2) + 'px'


        if (count >= arrImages.length - 1) {

        } else (
            arrImages[count].style.marginLeft = margin,
            count++
        )
    })

    arrLeft.addEventListener('click', function () {
        if (count <= 1) {
        } else (
            arrImages[count - 1].style.marginLeft = '0px',
            count--
        )
    })

    sliderPoint.innerHTML = '<div class="carousel__action-counter_point"></div>'.repeat(itemsImage.length);
}

sliderInit()

function showBurger() {
    let birgerButton = document.querySelector(".menu__burger-button");
    let burgerMenu = document.querySelector("._menu__burger");
    let buttonAuth = document.querySelector("._button_auth");

    birgerButton.addEventListener('click', function () {
        burgerMenu.classList.toggle('_burger_active'),
        buttonAuth.classList.toggle('burger__auth')
        console.log('burger');
    })


    
}

showBurger()