import React, { useState } from "react";
import Footer from "./Footer";
import mobileScreen1 from "../images/Group 43 1.png";
import Ai from "../images/AI recognition.png";
import mobileScreen2 from "../images/Calender 1.png";
import Reports1 from "../images/Reports 1.png";
import Report from "../images/report.png";
import Right from "../images/✔️.png";
import Image4 from "../images/image 4.png";
import Image5 from "../images/image 5.png";
import Image7 from "../images/image 7.png";
import comunicate from "../images/👫🏻__👩🏻_🏫.png";
import mobileScreen3 from "../images/Android Compact - 1.png";
import { FaCheck, FaRocket } from "react-icons/fa6";
import DemoSection from "./DemoSection";
import RocketForm from "./RocketForm";
import Navbar from "./Navbar";
import LearningSection from "./LearningSection";



export default function Home() {

  const [activeButton, setActiveButton] = useState(null); // State to track active button

  const buttonStyle = (buttonName) => ({
    fontSize: "16px",
    color: activeButton === buttonName ? "white" : "#000000",
    backgroundColor: activeButton === buttonName ? "#457b9d" : "#f0f0f0",
    border: "1px solid grey",
    borderRadius: "50px",
    cursor: "pointer",
    outline: "none",
    transition: "background-color 0.3s, color 0.3s",
    padding: "10px"
   
  });

  const buttonStyle2 = (buttonName) => ({
     padding: "10px",
    fontSize: "16px",
    color: activeButton === buttonName ? "white" : "#000000",
    backgroundColor: activeButton === buttonName ? "red" : "#f0f0f0",
    border: "1px solid grey",
    borderRadius: "50px",
    cursor: "pointer",
    outline: "none",
    transition: "background-color 0.3s, color 0.3s",
   
  });

  const data =[
   "Full Access",
   "Unlimeted Usages",
   "Priority Access",
   "Frequent Updates",
   "Open Roadmap",
  ]
  return (
    <>
   
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #F5F5F5, #A0D4D6)",
        
      }}
    >
       <Navbar/>

      {/* Main Section */}
      <LearningSection/>


      {/* Video Section */}
      <section
      style={{
        width: "80%",
        margin: "20px auto",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "10px",
      }}
    >
      <video
        width="100%"
        height="100%"
        controls
        style={{
          objectFit: "cover",
          borderRadius: "8px",
          maxWidth: "100%",
        }}
      >
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>




      {/* Additional Info Section */}
      <div
      style={{
        borderRadius: "50px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        maxWidth: "300px",
        margin: "20px auto",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
        gap: "10px"
      }}
    >
      <button
        style={buttonStyle("Teachers")}
        onClick={() => setActiveButton("Teachers")}
      >
        For Teachers
      </button>
      <button
        style={buttonStyle2("Parents")}
        onClick={() => setActiveButton("Parents")}
      >
        For Parents
      </button>
    </div>

      {/* mobile Screeens */}
      <section>
        <p>
        AI-driven SaaS stramlines teacher's daily tasks, empowering them to  prioritize education and enhance parent involvement.
        </p>

        <div style={{display:'flex',flexDirection:"row",
           justifyContent:"center",alignItems:"center", gap:"220px"
           }}>
          <div style={{display:"flex" ,flexDirection:"column",gap:"180px",}}>
            <div style={{ padding: "20px",   boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)", borderRadius: "14px"}} >
              <img src={Ai} alt="img" />
              <p>attendance with AI-face recognition in 3se.</p>
              <img src={mobileScreen1} alt="" />
            </div>
            <div style={{ padding: "20px",   boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)", borderRadius: "14px"}}>
              <img src={Right} alt="img" />
              <p>Terack tasks and notices</p>
              <img src={mobileScreen2} alt="" />
            </div>
          </div>
          <div style={{display:"flex",alignItems:"center",flexDirection:"column",gap:"70px", }}>
            <div style={{ padding: "20px",   boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)", borderRadius: "14px"}}>
              <img src={Report} alt="img" />
              <p>Student report managment</p>
              <img src={Reports1} alt="" />
            </div>

            <div style={{ padding: "20px",   boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)", borderRadius: "14px"}}>
              <img src={comunicate} alt="img" />
              <p>Communication with parents hassle-free</p>
              <img src={mobileScreen3} alt="" />
            </div>
          </div>
        </div>
      </section>


      <section
  style={{
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    gap: "70px",
    padding: "2px",
    justifyItems: "center",
  }}
>
  <div style={{fontSize: "50px"}}>
    Make your school Future ready!
  </div>
  <div
    style={{
      width: "60%",
      height: "350px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center", // Centering content horizontally
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
      borderRadius: "20px",
      padding: "50px"
    }}
  >
    <h1>Free While in Beta</h1>
    <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "start" }}>
  {data &&
    data.map((name) => (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <FaCheck />
        {name}
      </div>
    ))}
  <button
    type="button"
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px", // Space between text and icon
      padding: "10px 20px",
      backgroundColor: "#1d3557",
      color: "#fff",
      border: "none",
      borderRadius: "8px", // Rounded corners
      cursor: "pointer",
      fontSize: "16px",
    }}
  >
   Try for free  <FaRocket /> 
  </button>
</div>

  </div>
</section>

<DemoSection />
<section>


</section>
<p>
 Trusted by Teachers at over 1,000 of the india's leanding Schools.
</p>

<div style={{display:"flex",justifyItems:"center",alignItems:"center",gap:"20px"}}>
  <img src={Image4} alt="" />
  <img src={Image5} alt="" />
  <img src={Image7} alt="" />
</div>
<section>
  <div>

<RocketForm/>
  </div>
</section>

      {/* Footer Section */}
      <Footer />
    </div>
    </>
   
  );
}
