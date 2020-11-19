import { HiHeart } from 'react-icons/hi'

const people = [
    {
        name: "David Champion",
        occupation: "CEO of iCloud",
        desc: "System is excellent. It has made my system user experience to become one of the easiest!",
        image: ""
    },
    {
        name: "David Frank van Hord",
        occupation: "CEO of Marks.co",
        desc: "I just wanted to share a quick note and let you know that you guys do a really good job.",
        image: ""
    },
    {
        name: "Lucas Bond",
        occupation: "BOD of Skyscanner",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus diam, varius porttitor.",
        image: ""
    },
]

const WhatPeopleSay = () => {
    return (
        <div className="whatpeoplesay">
            <span className="title">
                <div>
                    <span className="icon__heart">
                        <HiHeart />
                    </span>
                </div>
                <h2>What other people say about our service</h2>
            </span> 
            <div className="testimoni">
                {
                    people.map(person => {
                        return (
                            <div className="person">
                                <div className="identity">
                                    <img src="" alt=""/>
                                    <div className="info">
                                        <strong className="name">{person.name}</strong>
                                        <div className="occupation">{person.occupation}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default WhatPeopleSay