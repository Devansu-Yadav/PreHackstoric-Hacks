import Button from "../Button";
import Logo from "../Logo";

const LandingPage = () => {
  return (
    <div className="bg-landing-page-graphic bg-cover h-screen">
      <Logo />
      <h1 className="text-white pl-20 mt-40 text-6xl ">
        <span className="text-orange"> Learn</span> about <br />
        dinosaurs <br /> from{" "}
        <span className="text-yellow">
          {" "}
          a new <br />
          prespective
        </span>
      </h1>
      <div className="pl-20 mt-6">
          
      <Button text="ARRRR! LOGIN!"/>
      </div>
    </div>
  );
};

export default LandingPage;
