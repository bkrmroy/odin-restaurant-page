export default function showAbout(){

    console.log('about contents')

    const content = document.querySelector('.content')
    content.classList.remove('home-contents')
    content.classList.add('about-contents')
    const aboutPage = document.createElement('div')
    aboutPage.classList.add('about-page')
    content.innerHTML= ''

    const about = document.createElement('div')
    about.classList.add('about-description')

    const aboutTitle = document.createElement('div')
    aboutTitle.textContent = 'About us'
    aboutTitle.classList.add('about-title')

    const aboutText = document.createElement('div')
    aboutText.classList.add('about-text')
    aboutText.textContent = 'Mollit consectetur nostrud cupidatat ut cupidatat velit irure. Exercitation commodo do laborum quis ut reprehenderit nulla sit aliquip elit. Est exercitation magna esse voluptate voluptate reprehenderit sunt tempor.'
    aboutText.textContent += 'Ad Lorem voluptate esse consectetur aute aute laboris aliqua irure dolor amet. Ipsum irure reprehenderit minim qui eiusmod ut et proident est. Incididunt labore laborum est eiusmod ad esse laboris dolor dolor duis veniam sint quis. Magna sit proident ex excepteur Lorem consequat.'
    
    about.appendChild(aboutTitle)
    about.appendChild(aboutText)

    aboutPage.appendChild(about)
    content.appendChild(aboutPage)
}