const header = document.querySelector('.header')


let mainLocation = scrollY



addEventListener('scroll', () => {
    let currentLocation = scrollY
    console.log(currentLocation)

    if(mainLocation >= currentLocation) {
        header.style.top = '0'
    } else {
        header.style.top = '-80px'
    }

    mainLocation = currentLocation
})






