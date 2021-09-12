import { useEffect } from "react";

const FlashCard = ({dinoName}) => {
    const cardData = {};

    useEffect(() => {
        fetch("https://dinodb.azurewebsites.net/api/dino/flashcard/" + dinoName)
        .then(function(response) {
            if(response.status === 500) {
                return (
                    <div>
                        No Data Found for Dinosaur!
                    </div>
                )
            }
            return response.json();
        })
        .then((data) => cardData = {
            ross: data.ross,
            text: data.card,
            dinoImg: data.image
        })
        .catch((error) => console.log(error));
    }, [])

    return (
        <div className="flash-card">
            <img src={cardData.dinoImg} alt="dino pic" />
            <p className="dino-text">{cardData.text}</p>
        </div>
    );
  };
  
  export default FlashCard;
  