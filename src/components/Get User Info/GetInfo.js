import Button from "../Button";
import Logo from "../Logo";

const GetInfo = () => {
    return (
        <div className="bg-teal bg-cover h-screen">
        <Logo />
        <div className="text-white grid justify-items-center " >
            <h1 className="mb-10 text-4xl mt-40">Setup your account</h1>
            <div>
                 <p className="mb-10">Pick a username: &nbsp; <input type="text" name="username" /></p> 
        <p  className="mb-10">Enter your phone no.: &nbsp; <input type="text" name="phone" /></p>
            </div>
       <Button text="Let's gooo!" />
        </div>
        </div>
    );
  };
  
  export default GetInfo;
  