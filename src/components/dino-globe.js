import React, { useEffect, useState } from "react";
import ReactGlobe from "react-globe";

import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

// import defaultMarkers from "./markers.js";

function markerTooltipRenderer(marker) {
  return `Species: ${marker.species} (Value: ${marker.value})`;
}

const options = {
  markerTooltipRenderer
};

function structureDinoData(result) {
  var dinoData = [];

  for (let i = 0; i < result.length; i++) {
    var data = {
      id: i + 1,
      coordinates: [result[i].lat, result[i].lon],
      color: "black",
      value: 55,
      species: result[i].name
    };
    dinoData.push(data);
  }

  return dinoData;
}

function Globe() {
  const [markers, setMarkers] = useState([]);
  const [event, setEvent] = useState(null);
  const [details, setDetails] = useState(null);
  const [listintervals, updateListIntervals] = useState([]);

  useEffect(() => {
    fetch("https://dinodb.azurewebsites.net/api/dino/list")
      .then((response) => response.json())
      .then((result) => updateListIntervals(result))
      .catch((error) => console.log("error", error));
  }, []);

  useEffect(() => {
    fetch("https://dinodb.azurewebsites.net/api/dino/Albian")
      .then((response) => response.json())
      .then((result) => structureDinoData(result))
      // .then((dinos) => console.log(dinos))
      .then((dinoMarkers) => setMarkers(dinoMarkers))
      .catch((error) => console.log("error", error));
    // setMarkers(defaultMarkers);
  }, []);

  function onClickMarker(marker, markerObject, event) {
    setEvent({
      type: "CLICK",
      marker,
      markerObjectID: markerObject.uuid,
      species: marker.species,
      pointerEventPosition: { x: event.clientX, y: event.clientY }
    });
    setDetails(markerTooltipRenderer(marker));
  }

  function onDefocus(previousFocus) {
    setEvent({
      type: "DEFOCUS",
      previousFocus
    });
    setDetails(null);
  }

  return (
    <div>
      {details && (
        <div
          style={{
            background: "white",
            position: "absolute",
            fontSize: 20,
            bottom: 0,
            right: 0,
            padding: 12
          }}
        >
          <p>{details}</p>
          <p>
            EVENT: type={event.type}, species={event.species}, position=
            {JSON.stringify(event.pointerEventPosition)})
          </p>
        </div>
      )}

      {/* <button></button> */}

      <ReactGlobe
        height="70vh"
        markers={markers}
        options={options}
        width="100vw"
        onClickMarker={onClickMarker}
        onDefocus={onDefocus}
      />
    </div>
  );
}

export default Globe;