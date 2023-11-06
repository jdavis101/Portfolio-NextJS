import Image from "next/image";
import Head from "next/head";
import headerimage from "@/app/images/nightraleigh.png";
import Header from "./header";
import Navbar from "./navbar";

export default function Page() {
  return (
    <html>
      <head>
        <title>Jay.Dav</title>
      </head>

      <body>
        <Navbar />
        {/* Header */}
        <div className="w-full h-screen bg-[url(images/nightraleigh.png)] bg-cover bg-center">
          {/* Change above to background image component */}
          {/* Header Container */}
          <div className="px-[10%] py-[100px]">
            <div className=" text-base mt-[20%] color-white ">
              <Header />
            </div>
          </div>
        </div>
        <div id="About">{/* Section Start */}</div>
        <div id="Contact">{/* Section Start */}</div>
      </body>
    </html>
  );
}
