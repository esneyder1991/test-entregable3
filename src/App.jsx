import { useEffect, useState } from "react";
import "./App.css";
import { getRandomDimension } from "./helpers/random";
import axios from "axios";
import Location from "./components/Location";
import ResidentList from "./components/ResidentList";

function App() {
  const [location, setLocation] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newLocation = e.target.locationId.value;

    const URL = `https://rickandmortyapi.com/api/location/${newLocation}`;

    axios
      .get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const URL = `https://rickandmortyapi.com/api/location/${getRandomDimension()}`;

    axios
      .get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App ">
        
      <div className="relative w-full h-full">
        <img className= "relative top-0 lef-0 w-full h-full bg-cover bg-center" src="/images/bg-header.png" alt="" />
        <div>
          <img className="absolute top-0 left-1/2 transform -translate-x-1/2  z-10" src="/images/portal.png" alt="" />
        </div>
        
        <img className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 object-contain" src="/images/logo-real.png" alt="" />

      </div>
      
      <div className='flex justify-center items-center bg-[url("/images/bg-header.png")] text-green-800 p-4'>
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          <div className="w-auto">
            <input
              id="locationId"
              placeholder="Type a location Id..."
              className="bg-black placeholder-gray-500 border-2 border-green-800 px-7 py-2 w-[80%] md:w-[65%] "
              type="text"
            />
            <button className="bg-green-800 text-white justify-center items-center border-2 border-green-800 px-6 py-2 w-[20%] md:w-[35%]">
              {" "}
              <span className="hidden  md:inline">Search</span>{" "}
              <i className="bx bx-search"></i>
            </button>
          </div>
          <h2 className="py-8 text-[#8EFF8B] flex justify-center items-center">
            Welcome to the crazy universe!
          </h2>
        </form>
      </div>

      <div className='bg-[url("/images/bg-page.png")] min-h-screen'>
        <Location location={location} />
        <ResidentList location={location} />
      </div>
    </div>
  );
}

export default App;
