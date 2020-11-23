import { useEffect, useState } from 'react'
import { HiHeart } from 'react-icons/hi'
import Carousel from './Carousel'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const people = [
    {
        name: "Lucas Bond",
        occupation: "BOD of Skyscanner",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus diam, varius porttitor.",
        image: "../../assets/images/jerome-boudot.jpg"
    },
    {
        name: "David Champion",
        occupation: "CEO of iCloud",
        desc: "System is excellent. It has made my system user experience to become one of the easiest!",
        image: "../../assets/images/david-campion.jpg"
    },
    {
        name: "David Frank van Hord",
        occupation: "CEO of Marks.co",
        desc: "I just wanted to share a quick note and let you know that you guys do a really good job.",
        image: "../../assets/images/vincent-joignie.jpg"
    },
    {
        name: "Lucas Bond",
        occupation: "BOD of Skyscanner",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus diam, varius porttitor.",
        image: "../../assets/images/jerome-boudot.jpg"
    },
    {
        name: "David Champion",
        occupation: "CEO of iCloud",
        desc: "System is excellent. It has made my system user experience to become one of the easiest!",
        image: "../../assets/images/david-campion.jpg"
    },
]

const WhatPeopleSay = () => {
    let [counter, setCounter] = useState(1)
    let [show, setShow] = useState(0)
    const [carousel, setCarousel] = useState({})
    const [newPeople, setNewPeople] = useState([])

    const handleNext = () => {
        setCounter(counter + 1)
        setShow(show * counter)
    }

    // useEffect(() => {
    //     const carouselSlide = document.querySelector('.testimoni')
    //     const carouselSlideAll = document.querySelectorAll('.testimoni .person')

    //     let counter = 1
    //     const size = carouselSlideAll[0].clientWidth + 40
    //     setShow(-size)

    //     setCarousel(carouselSlide)
    //     carouselSlide.addEventListener('transitionend', () => {
    //         console.log('test')
    //     })
    //     console.log(carouselSlide)
    // }, [])

    return (
        <div className="whatpeoplesay">
            <span className="title">
                <div style={{
                    display: 'flex', 
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <span className="icon__heart">
                        <HiHeart />
                    </span>
                    <h2>What other people say about our service</h2>
                </div>
                {/* <div className="icon__next">
                    <div style={{
                        width: 50,
                        height: 50,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#EEDEFF',
                        borderRadius: '50%'
                    }}>
                        <img src="../../assets/images/arrow-right.svg" alt="Next" onClick={handleNext} />
                    </div>
                </div> */}
            </span> 
            <div className="testimoni" onTransitionEnd={() => console.log('test')} style={{transition: 'transform 0.4s ease-in-out'}}>
                {/* {
                    people.map(person => {
                        return (
                            <>
                                <div 
                                    id={person.id}
                                    className="person" 
                                    style={{
                                        transform: `translateX(${show}px)`,
                                        }}
                                    
                                >
                                    <div className="identity">
                                        <img src={person.image} alt=""/>
                                        <div className="info">
                                            <strong className="name">{person.name}</strong>
                                            <div className="occupation">{person.occupation}</div>
                                        </div>
                                    </div>
                                    <p>"{person.desc}"</p>
                                </div>
                            </>
                        )
                    })
                } */}
                <Carousel />
            </div>
            <div className="dot">
                <div style={{ backgroundColor: counter === 1 ? '#242584' : '#E0E0FE'}} />
                <div style={{ backgroundColor: counter === 2 ? '#242584' : '#E0E0FE'}} />
                <div style={{ backgroundColor: counter === 3 ? '#242584' : '#E0E0FE'}} />
            </div>
        </div>
    )
}

export default WhatPeopleSay