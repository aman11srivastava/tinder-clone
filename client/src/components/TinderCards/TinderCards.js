import React, {useState} from "react";
import './TinderCards.css'
import TinderCard from "react-tinder-card";

export const TinderCards = () => {
    const [people, setPeople] = useState([
        {
            id: 1,
            name: 'Elon Musk',
            url: "https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg",
        },
        {
            id: 2,
            name: 'Jeff Bezos',
            url: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg",
        },
    ])
    const [lastDirection, setLastDirection] = useState()

    const swiped = (direction, nameToDelete) => {
        console.log("REMOVING: ", nameToDelete)
        // setLastDirection(direction)
    };

    const outOfFrame = name => {
        console.log(name, "left the screen")
    };

    return (
        <div className={"tinderCards"}>
            <div className={"tinderCards__cardContainer"}>
                {people.map(person => (
                    <TinderCard
                        className = "swipe"
                        key = {person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div style={{backgroundImage: `url(${person.url})`}} className={"card"}>
                            <h3>{person.name}</h3>
                        </div>

                    </TinderCard>
                ))}
            </div>

        </div>
    )
}

export default TinderCards
