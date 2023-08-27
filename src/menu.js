export default function showMenu(){
    console.log('menu contents')
    const content = document.querySelector('.content')

    content.classList.remove('home-contents')
    content.classList.remove('about-contents')
    content.classList.add('menu-contents')
    content.innerHTML= ''

    const menuPageTitle = document.createElement('div')
    menuPageTitle.classList.add('menu-page-title')
    menuPageTitle.textContent = "Our Menu"
    content.appendChild(menuPageTitle)

    const theMenu = document.createElement('div')
    theMenu.classList.add('the-menu')
    content.appendChild(theMenu)

    for(let i=1;i<=4;i++){
        const menuGroup = document.createElement('div')
        menuGroup.classList.add(`menu-group-${i}`)
        const menuGroupTitle = document.createElement('div')
        menuGroupTitle.classList.add(`group-title-${i}`)
        menuGroup.appendChild(menuGroupTitle)
        theMenu.appendChild(menuGroup)
        for(let j= 1 ; j<= 4; j++){
            const dish = document.createElement('div')
            dish.classList.add(`dish-${j}`)
            const dishTitle = document.createElement('div')
            dishTitle.classList.add(`dish-title-${j}`)
            dish.appendChild(dishTitle)
            const dishIngredients = document.createElement('div')
            dishIngredients.classList.add(`dish-ingredients-${j}`)
            dish.appendChild(dishIngredients)
            menuGroup.appendChild(dish)
        }
    }
    document.querySelector('.group-title-1').textContent = 'Main course'
    document.querySelector('.group-title-2').textContent = 'Soups and Salads'
    document.querySelector('.group-title-3').textContent = 'Desserts'
    document.querySelector('.group-title-4').textContent = 'Drinks'

    document.querySelector('.menu-group-1 .dish-title-1').textContent = 'Super Delicious Zuppa Toscana'
    document.querySelector('.menu-group-1 .dish-ingredients-1').textContent = 'Amet fugiat enim consequat sint consectetur.'
    document.querySelector('.menu-group-1 .dish-title-2').textContent = 'Do fugiat proident non nisi culpa'
    document.querySelector('.menu-group-1 .dish-ingredients-2').textContent = 'Cillum minim elit laborum ullamco deserunt'

    document.querySelector('.menu-group-2 .dish-title-1').textContent = 'Quis ullamco pariatur cupidatat do'
    document.querySelector('.menu-group-2 .dish-ingredients-1').textContent = 'Velit ipsum eu in est qui nulla et nulla do est do'
    document.querySelector('.menu-group-2 .dish-title-2').textContent = 'Elit id officia irure sit fugiat'
    document.querySelector('.menu-group-2 .dish-ingredients-2').textContent = 'Tempor ea adipisicing exercitation in minim'

    document.querySelector('.menu-group-3 .dish-title-1').textContent = 'Voluptat Lorem excepteur'
    document.querySelector('.menu-group-3 .dish-ingredients-1').textContent = 'Officia Lorem aliqua elit laboris dolore'
    document.querySelector('.menu-group-3 .dish-title-2').textContent = 'Sint nisi aute nostrud ea nulla'
    document.querySelector('.menu-group-3 .dish-ingredients-2').textContent = 'Proidenti tempor duis quis culpa et sint cillum'

    document.querySelector('.menu-group-4 .dish-title-1').textContent = 'Quis ullamco pariatur cupidatat do'
    document.querySelector('.menu-group-4 .dish-ingredients-1').textContent = 'Velit ipsum eu in est qui nulla et nulla do est do'
    document.querySelector('.menu-group-4 .dish-title-2').textContent = 'Incididunt magnat exercitation aliquip'
    document.querySelector('.menu-group-4 .dish-ingredients-2').textContent = 'Tempor ea adipisicing exercitation in minim'

}