import React from "react";
import Member from "../components/Member";
import Navbar from "../components/Navbar";
import team from "../team.js";
function About(props) {
  console.log(team);
  return (
    <div className="">
      <Navbar {...props} />
      {/* <h1 className="text-center text-3xl mt-3 mb-3">Our Team</h1>
      <div className="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 px-3 lg:px-6 m-auto ">
        <img className="w-3/4 m-auto xl inline" src="../../team.jpg" />
      </div> */}
      <div className="p-3 flex flex-row items-center justify-center mt-5 mb-4 rounded-lg w-5/6 md:w-3/4  m-auto">
        <h1 className="text-center text-2xl lg:text-4xl w-full bg-sky-100 p-9 rounded-3 m-auto">
          Our Team
        </h1>
        <img className="w-1/2 m-auto xl lg:inline" src="../../team.jpg" />
      </div>
      <div className="flex flex-row flex-wrap justify-center mb-5">
        {team.map((member, index) => {
          return <Member member={member} key={index} />;
        })}
      </div>
    </div>
  );
}
export default About;
