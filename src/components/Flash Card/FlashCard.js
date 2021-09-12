import { useEffect, useState } from "react";

const FlashCard = ({dinoName}) => {
    var [imgsrc, updateImgSrc] = useState("https://cdn.discordapp.com/attachments/884791455414108170/886566864036188160/Asset_12x.png");
    var [dinoText, updateDinoText] = useState("No Data found for Dino!");
    var [ross, updateRoss] = useState("");

        useEffect(() => {
            fetch("https://dinodb.azurewebsites.net/api/dino/flashcard/" + dinoName)
            .then(function(response) {
                // if(response.status === 500) {
                //     updateDinoText("No Data Found for Dinosaur!");
                //     // updateImgSrc("https://cdn.discordapp.com/attachments/884791455414108170/886566864036188160/Asset_12x.png");
                // }
                return response.json();
            })
            .then(function(data) {
                updateRoss(data.ross);
                updateDinoText(data.card);
                updateImgSrc(data.image);
            })
            .catch((error) => updateDinoText("No data found for Dino!!"))
        });

    return (
        <div className="flash-card">
            <img src={imgsrc} alt="dino pic" />
            <p className="dino-text">{dinoText}</p>
        </div>
    );
  };
  
export default FlashCard;
  