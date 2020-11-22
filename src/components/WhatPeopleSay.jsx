import { useEffect, useState } from 'react'
import { HiHeart } from 'react-icons/hi'
import Carousel from './Carousel'

const people = [
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
    }
]

const WhatPeopleSay = () => {
    let [slide, setSlide] = useState(0)

    const handleNext = (nextClick) => {
        // nextClick()
        console.log(nextClick)
    }
    
    return (
        <div className="whatpeoplesay">
            <span className="title">
                <div style={{
                    display: 'flex', 
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <span className="icon__heart" style={{    
                        width: 65,
                        height: 42
                    }
                    }>
                        <HiHeart />
                    </span>
                    <h2>What other people say about our service</h2>
                </div>
                <div className="icon__next">
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
                </div>
            </span> 
            <div className="testimoni">
                {/* {
                    people.map(person => {
                        return (
                            <div 
                                id={person.id}
                                className="person" 
                                style={{transform: `translateX(${firstShow}px)`}}
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
                        )
                    })
                } */}
                {/* <Carousel click={(nilai) => handleNext(nilai)} nextSlide={slide} /> */}
            </div>
        </div>
    )
}

export default WhatPeopleSay