import React from 'react'
import CardItem from './CardItem'
import './Cards.css';
import image1 from '../images/img-9.jpg'
import image2 from '../images/img-7.jpg'
import image3 from '../images/img-3.jpg'
import image4 from '../images/img-4.jpg'
// import image5 from '../images/img-5.jpg'
// import image6 from '../images/img-6.jpg'

function Cards() {
    return (
        <div className = 'cards'>
            <h1> Adventurous Amazon Jungle</h1>
            <div className = 'cards__container'>
            <div className = 'cards__wrapper'>
                <ul className = "cards__items">
                    <CardItem 
                    src = {image1} alt ='Travel image' 
                    className = 'cards__item__img'
                    text = ' Exploring the hidden waterfall deep inside the Amazon Jungle'
                    label = 'Adventure'
                    path ='/services' >
                    </CardItem>
                    <CardItem 
                    src = {image2} alt ='photographer image' 
                    className = 'cards__item__img'
                    text = ' Photography makes the world into the Third degree of Eye'
                    label = 'Photography'
                    path ='/services' >
                    </CardItem>
                    <CardItem 
                    src = {image3} alt ='Travel image' 
                    className = 'cards__item__img'
                    text = 'I am the King of the Pacific Ocean'
                    label = 'Sea'
                    path ='/services' >
                    </CardItem>
                    <CardItem 
                    src = {image4} alt ='Travel image' 
                    className = 'cards__item__img'
                    text = ' Football in the Black Island'
                    label = 'Game'
                    path ='/services' >
                    </CardItem>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default Cards
