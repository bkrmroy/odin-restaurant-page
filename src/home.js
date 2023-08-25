// import jpg from './restaurant-home-img.jpg';
// // const restaurantImg =new Image()
// // restaurantImg.src = jpg

export default function showHome(){
    console.log('home contents')
    const content = document.querySelector('.content')
    content.innerHTML= ''
    const homeHeader = document.createElement('div')
    homeHeader.classList.add('home-header')
    const headertitle = document.createElement('div')
    headertitle.classList.add('header-title')
    headertitle.textContent = ' Bikram\'s Kitchen'
    homeHeader.appendChild(headertitle)
    

    const homeText = document.createElement('div')
    homeText.classList.add('home-text')
    homeText.textContent = 'Welcome to the finest restaurant in the town'
    
    homeHeader.appendChild(homeText)
    const reserve = document.createElement('button')
    reserve.classList.add('reserve')
    reserve.textContent = 'Make a reservation'

    homeHeader.appendChild(reserve)
    content.appendChild(homeHeader)
    const imgContainer = document.createElement('div')
    imgContainer.classList.add('home-img-container')
    imgContainer.textContent = 'work'
    imgContainer.appendChild(document.createElement('div'))


    // imgContainer.appendChild(restaurantImg)
    content.appendChild(imgContainer)
}