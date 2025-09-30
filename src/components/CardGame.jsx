import { useEffect, useState } from "react";
import "../cardgame.css"
import {Character} from "../character"
import {getImage} from "../cardapi"

let characterList = ["Katara", "Sokka", "Aang", "Zuko", "Appa", "Avatar Roku", "Azula", "Iroh", "Suki", "Toph Beifong"]

function shuffle(arr) {
    for(let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}


function CardGame({currectScore, setCurrentScore, bestScore, setBestScore}) {
    const [characters, setCharacters] = useState(characterList)
    const [clickledCharacters, setClickledCharacters] = useState([]);

    useEffect(() => {
        (async () => {
            const items = await Promise.all(
                characterList.map(async (character, id) => {
                    const url = await getImage(character)
                    return new Character(character, id, url)
                })
            )
            setCharacters(shuffle([...items]))
        })()
    }, [])

    function handleClick(character) {
        let wasSeen = false;
        for (let i = 0; i < clickledCharacters.length; i++) {
            if (clickledCharacters[i] == character.id) {
                wasSeen = true;
                break;
            }
        }
       
        if (wasSeen) {
            if (currectScore > bestScore) {
                setBestScore(currectScore)
                
            }
            setCurrentScore(0)
        } else {
            setCurrentScore(prev => prev + 1)
            setClickledCharacters([...clickledCharacters, name])
        }

        let shuffledCharacters = shuffle(characters);
        setCharacters([...shuffledCharacters])

        
    }
    return (
        <div className="cardGame">
        {characters.map(character => (

            <div className="card" onClick={() => handleClick(character)} key={character.id}>
                <img src={character.imgSrc}></img>
                <h3>{character.name}</h3>
            </div>
        ))}
        </div>
    )
}

export default CardGame