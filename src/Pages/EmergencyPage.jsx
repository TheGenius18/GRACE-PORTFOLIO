import {React} from "react";
import NavbarMain from "../components/navbar/NavbarMain";
import Emergency from "../components/Emergency/Emergency";




export default function Home() {

  return (
    <div className="bg-[#1a1a1a] p-0 m-0">
      <NavbarMain/>
      <Emergency/>

    </div>
  );
}

