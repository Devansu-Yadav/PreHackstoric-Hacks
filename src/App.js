import NavBar from "./components/navbar";
import Loading from "./components/loading";
import { useAuth0 } from "@auth0/auth0-react";
import React from "react"

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }
  
  return (
    <div id="app">
      <NavBar />
    </div>
  );
}

export default App;
