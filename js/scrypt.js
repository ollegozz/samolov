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

    sliderPoint.innerHTML = '<div class="carousel__action-counter_point"></div>'.repeat(itemsImage.length);
    let dots = document.querySelectorAll(".carousel__action-counter_point");

    dots.forEach(element => {
        return element
    });

    let dot = dots

    dot[0].classList.add('_dot-active')



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
            dot[count].classList.add('_dot-active'),
            dot[count - 1].classList.remove('_dot-active'),
            count++
        )
    })

    arrLeft.addEventListener('click', function () {
        if (count <= 1) {
        } else (
            arrImages[count - 1].style.marginLeft = '0px',
            dot[count - 2].classList.add('_dot-active'),
            dot[count - 1].classList.remove('_dot-active'),
            count--
        )
    })
}

sliderInit()

function showBurger() {
    let birgerButton = document.querySelector(".menu__burger-button");
    let burgerMenu = document.querySelector("._menu__burger");
    let buttonAuth = document.querySelector("._button_auth");

    birgerButton.addEventListener('click', function () {
        burgerMenu.classList.toggle('_burger_active'),
            buttonAuth.classList.toggle('burger__auth')
    })
}

showBurger()


function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show');
        }
    });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
for (let elm of elements) {
    observer.observe(elm);
}



function showDropLost() {
    let drop = document.querySelectorAll(".listDrop");


    drop.forEach(item => {
        item.addEventListener('click', e => {
            item.querySelector('.myDropdown').classList.toggle("show"),
                item.querySelector('.dropbtn').classList.toggle("_none"),
                item.querySelector('.dropbtn-close').classList.toggle("_none")
        });
    });
}

showDropLost()