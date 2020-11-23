import { useEffect, useState } from "react";

const slideWidth = 30;

// const _items = [
//     {
//         player: {
//             title: 'Efren Reyes',
//             desc:
//                 'Known as "The Magician", Efren Reyes is well regarded by many professionals as the greatest all around player of all time.',
//             image: 'https://i.postimg.cc/RhYnBf5m/er-slider.jpg'
//         }
//     },
//     {
//         player: {
//             title: "Ronnie O'Sullivan",
//             desc:
//                 "Ronald Antonio O'Sullivan is a six-time world champion and is the most successful player in the history of snooker.",
//             image: 'https://i.postimg.cc/qBGQNc37/ro-slider.jpg'
//         }
//     },
//     {
//         player: {
//             title: 'Shane Van Boening',
//             desc:
//                 'The "South Dakota Kid" is hearing-impaired and uses a hearing aid, but it has not limited his ability.',
//             image: 'https://i.postimg.cc/cHdMJQKG/svb-slider.jpg'
//         }
//     },
//     {
//         player: {
//             title: 'Mike Sigel',
//             desc:
//                 'Mike Sigel or "Captain Hook" as many like to call him is an American professional pool player with over 108 tournament wins.',
//             image: 'https://i.postimg.cc/C12h7nZn/ms-1.jpg'
//         }
//     },
//     {
//         player: {
//             title: 'Willie Mosconi',
//             desc:
//                 'Nicknamed "Mr. Pocket Billiards," Willie Mosconi was among the first Billiard Congress of America Hall of Fame inductees.',
//             image: 'https://i.postimg.cc/NfzMDVHP/willie-mosconi-slider.jpg'
//         }
//     }
// ]

const _items = [
    {
        name: "Lucas Bond",
        occupation: "BOD of Skyscanner",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus diam, varius porttitor.",
        image: "../../assets/images/jerome-boudot.jpg",
        id: "lastClone"
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
        image: "../../assets/images/david-campion.jpg",
        id: "firstClone"
    }
]

const length = _items.length
_items.push(..._items)


const sleep = (ms = 0) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const createItem = (position, idx, activeIdx) => {
    const item = {
        styles: {
            transform: `translateX(${position * slideWidth}rem)`
        },
        person: _items[idx]
    }

    switch (position) {
        case length - 1:
        case length + 1:
            item.styles = { ...item.styles, filter: 'grayscale(0)' }
            break
        case length:
            break
        default:
            item.styles = { ...item.styles, opacity: 0 }
            break
    }

    return item
}
const CarouselSlideItem = ({ pos, idx, activeIdx }) => {
    const item = createItem(pos, idx, activeIdx)

    return (
        <li className='carousel__slide-item' style={item.styles}>
            <div className='carousel__slide-item-img-link'>
                <img src={item.person.image} />
                <div className="identity">
                <strong>{item.person.name}</strong>
                <p>{item.person.occupation}</p>
                </div>
            </div>
            <div className='carousel-slide-item__body'>
                <p>{item.person.desc}</p>
            </div>
        </li>
    )
}

const keys = Array.from(Array(_items.length).keys())

const Carousel = ({click, nextSlide}) => {
    const [items, setItems] = useState(keys)
    const [isTicking, setIsTicking] = useState(false)
    const [activeIdx, setActiveIdx] = useState(0)
    const bigLength = items.length

    const prevClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true)
            setItems(prev => {
                return prev.map((_, i) => prev[(i + jump) % bigLength])
            })
        }
    }

    const nextClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true)
            setItems(prev => {
                return prev.map(
                    (_, i) => prev[(i - jump + bigLength) % bigLength]
                )
            })
        }
        console.log('jalan')
    }  

    const handleDotClick = idx => {
        if (idx < activeIdx) prevClick(activeIdx - idx)
        if (idx > activeIdx) nextClick(idx - activeIdx)
    }

    useEffect(() => {
        if (isTicking) sleep(300).then(() => setIsTicking(false))
    }, [isTicking])

    useEffect(() => {
        setActiveIdx((length - (items[0] % length)) % length)
    }, [items])

    return (
        <div className='carousel__wrap'>
            <div className='carousel__inner'>
                <div className='carousel__container'>
                    <ul className='carousel__slide-list'>
                        {items.map((pos, i) => {
                            return <CarouselSlideItem
                                key={i}
                                idx={i}
                                pos={pos}
                                activeIdx={activeIdx}
                            />
})}
                    </ul>
                </div>
                <div className="icon__next" onClick={() => nextClick()} >
                    <div style={{
                        width: 50,
                        height: 50,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#EEDEFF',
                        borderRadius: '50%'
                    }}>
                        <img src="../../assets/images/arrow-right.svg" alt="Next" />
                    </div>
                </div>
                <div className='carousel__dots'>
                    {items.slice(0, length).map((pos, i) => (
                        <button
                            key={i}
                            onClick={() => handleDotClick(i)}
                            className={i === activeIdx ? 'dot active' : 'dot'}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Carousel