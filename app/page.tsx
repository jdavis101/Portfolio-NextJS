import "./styles/styling.css";
import Image from "next/image";
import Headshot from "./Images/Headshot.png";

export default function Home() {
  return (
    <main className="">
      <div className="text-white grid grid-cols-2 gap-4">
        <div
          className=" transition-all 
        duration-1000 ease-in-out animate-slide-in-l"
        >
          <Image
            src={Headshot}
            alt="Headshot photo"
            width={1000}
            height={1000}
          />
        </div>
        <div
          className=" transition-all 
        duration-1000 ease-in-out animate-slide-in-r"
        >
          Insert Experience Insert Experience Insert Experience Insert
          Experience Insert Experience Insert Experience
        </div>
      </div>
    </main>
  );
}
