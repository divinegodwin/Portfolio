import Navbar from "./Navbar";
import "./App.css";
import colorFlipper from "../public/Images/colorfliper.jpg";
import ghostGram from "../public/Images/ghostgram.jpg";
import Js from "../public/Images/js.png";
import Html from "../public/Images/html-5.png";
import Css from "../public/Images/css.png";
import reactImage from "../public/Images/react.png";
import nextSvg from "../public/Images/nextjs.svg";
import tailwindImage from "../public/Images/tailwind.png";
import Supabase from "../public/Images/supabase.png";
import Github from "../public/Images/github.png";
import Git from "../public/Images/git.png";

function App() {
  return (
    <div>
      <Navbar />

      <div className=" px-6 pt-[8rem] w-full  " id="home">
        <header className=" main-header font-bold text-4xl ">
          <span className="text-[#FFBA08]">I'm</span>
          <br /> Agbasimelo
          <br /> Divine
        </header>

        <p className="text-lg pt-3">
          I'm a passionate React.js and Next.js developer with a passion for
          crafting sleek and responsive web applications. Proficient in Tailwind
          CSS and adept at database management with PostgreSQL and Supabase.
          <br />I enjoy building responsive and scalable web applications that
          deliver a seamless user experience.
        </p>

        <div className="flex flex-row gap-8 ml-5 pt-5 text-[#FFBA08] ">
          <div className="bg-[#212123] w-[70px] h-[70px] pt-6 pl-6 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="main-grid-item-icon"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </div>

          <div className="bg-[#212123] w-[70px] h-[70px] pt-6 pl-6 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="main-grid-item-icon"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
            </svg>
          </div>

          <div className="bg-[#212123] w-[70px] h-[70px] pt-6 pl-6 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="main-grid-item-icon"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <rect height="20" rx="5" ry="5" width="20" x="2" y="2" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </div>
        </div>

        <div id="service">
          <div className="pt-20 grid justify-center">
            <header className="font-bold text-2xl ">Service</header>
          </div>

          <div className="bg-[#212123]  h-[220px]  rounded-lg text-black mt-4 k mb-4">
            <div className="grid justify-center">
              <svg
                className="w-[150px] h-[120px] text-[#FFBA08]"
                data-slot="icon"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                ></path>
              </svg>
            </div>

            <div className=" text-white ">
              <p className="font-bold grid justify-center">Web Development</p>{" "}
            </div>
            <p className="  px-2 text-white py-3 text-center ">
              Web developer with React Js and Next JS{" "}
            </p>
          </div>

          <div className="bg-[#212123]  h-[220px]  rounded-lg text-black mt-4 k mb-4">
            <div className="grid justify-center">
              <svg
                className="w-[150px] h-[120px] text-[#FFBA08]"
                data-slot="icon"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                ></path>
              </svg>
            </div>
            <div className="px-1 text-white">
              <p className="font-bold  px-3 py-3 grid justify-center">Web UI</p>
            </div>
            <p className="text-center text-white">
              {" "}
              Web UI designer with Figma{" "}
            </p>
          </div>
        </div>

        <div className=" grid justify-center">
          <div className="pt-20 grid justify-center">
            <header className=" font-bold text-2xl ">My Tools</header>
          </div>

          <div className="grid gap-12 grid-cols-3 pt-12 h-auto justify-center">
            <img
              src={Html}
              alt="html image"
              className="w-[40px] h-[40px]"
            ></img>

            <img src={Css} alt="css image" className="w-[40px] h-[40px]"></img>

            <img
              src={tailwindImage}
              alt="Tailwind image"
              className="w-[40px] h-[40px]"
            ></img>

            <img
              src={Js}
              alt="javascript image"
              className="w-[40px] h-[40px]"
            ></img>

            <img
              src={reactImage}
              alt="react image"
              className="w-[40px] h-[40px]"
            ></img>

            <img
              src={nextSvg}
              alt="nextSvg image"
              className="w-[40px] h-[40px]"
            ></img>

            <img
              src={Supabase}
              alt= "supabase image"
              className="w-[40px] h-[40px]"
            ></img>

              <img
              src={Git}
              alt= "supabase image"
              className="w-[40px] h-[40px]"
            ></img>


                <img
              src={Github}
              alt= "supabase image"
              className="w-[40px] h-[40px]"
            ></img>

          </div>
        </div>

        <div>
          <div className="pt-20 grid justify-center">
            <header className="font-bold text-2xl">Portfolio</header>
          </div>

          <div className="projects w-[100%] h-auto pb-5 mt-8  rounded-lg">
            <div className=" grid justify-center">
              <img
                src={ghostGram}
                alt="Ghost Gram image"
                className="w-[300px] h-[500px] rounded-lg"
              />

              <h3 className="pl-1 pt-3 font-bold">Ghost Gram</h3>
              <p className="pl-1">Reactjs/Nextjs intergration</p>
            </div>

            <div className="grid justify-center pt-12 ">
              <img
                src={colorFlipper}
                alt="color flipper image"
                className="w-[300px] h-[500px] rounded-lg"
              />

              <h3 className="pl-1 pt-3 font-bold">Color Flipper</h3>
              <p className="pl-1">Made with vanilla Javascript</p>
            </div>
          </div>
        </div>

        <div className="pt-16 grid justify-center">
          <p className="font-bold text-2xl">Contact Me</p>
        </div>

        <div className="email-options h-[100px] mt-4 w-full bg-[#212123] px-6 py-2 rounded-lg">
          <svg
            className="w-[25px] pt-1 text-[#FFBA08]"
            data-slot="icon"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            ></path>
          </svg>
          <p className="text-[#c5c5c5]">EMAIL</p>
          <p className="text-white">divinegodwin172@gmail.com</p>
        </div>

        <div className="phone-number-option h-[100px] w-full mt-2 bg-[#212123] px-6 py-2 rounded-lg">
          <svg
            className="w-[25px] pt-1 text-[#FFBA08]"
            data-slot="icon"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
            ></path>
          </svg>
          <p className="text-[#c5c5c5]">PHONE</p>
          <p className="text-white">+2347049974066</p>
        </div>

        <div className="phone-number-option h-[100px] w-full mt-2 mb-6 bg-[#212123] px-6 py-2 rounded-lg">
          <svg
            className="w-[25px] pt-1 text-[#FFBA08]"
            data-slot="icon"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            ></path>
          </svg>
          <p className="text-[#c5c5c5]">LOCATION</p>
          <p className="text-white">Nigeria</p>
        </div>
      </div>
    </div>
  );
}

export default App;
