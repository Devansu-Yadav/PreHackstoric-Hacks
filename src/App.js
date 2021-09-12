import NavBar from "./components/navbar";
import Loading from "./components/loading";
import { useAuth0 } from "@auth0/auth0-react";
import Globe from "./components/dino-globe";
import React from "react"
import LandingPage from "./components/Landing Page/LandingPage";
import GetInfo from "./components/Get User Info/GetInfo";
import FlashCard from "./components/Flash Card/FlashCard";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }
  
  return (
    <div className="m-0">
       <NavBar />
       <Globe />
      {/* <FlashCard /> */}
      {/* <LandingPage /> */}
      {/* <GetInfo /> */}
      {/* <NavBar /> */}
   </div> 
  );
}

export default App;
