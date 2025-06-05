import React from "react";
import { CircleCheckBig } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Target, FileCheck2, Brain } from "lucide-react";
import { Icon } from "@iconify-icon/react";

const features = [
  {
    title: "Instant AI Analysis",
    description:
      "Get AI-powered resume analysis in seconds with a detailed breakdown of strengths and improvement areas.",
    icon: <Brain className="text-blue-600 w-15 h-15 mx-auto" />,
  },
  {
    title: "ATS Optimization",
    description:
      "Ensure your resume is ATS-friendly so it gets past recruiters' screening systems with ease.",
    icon: <FileCheck2 className="text-blue-600 w-15 h-15 mx-auto" />,
  },
  {
    title: "Interview Readiness",
    description:
      "Receive actionable feedback to refine your resume and make it stand out for hiring managers.",
    icon: <Target className="text-blue-600 w-15 h-15 mx-auto" />,
  },
];
const tour = [
  {
    description: "Upload Your Resume – Drag and drop your PDF/DOCX.",
    icon: (
      <Icon
        icon="uil:file-upload-alt"
        style={{ color: "#256EFF" }}
        width="60"
        height="60"
      />
    ),
  },
  {
    description: " Instant AI Analysis – Get a clear ATS friendly score.",
    icon: (
      <Icon
        icon="ri:chat-voice-ai-line"
        style={{ color: "#256EFF" }}
        width="60"
        height="60"
      />
    ),
  },
  {
    description: "Boost Your Resume with expert - backed improvements.",
    icon: (
      <Icon
        icon="charm:rocket"
        style={{ color: "#256EFF" }}
        width="60"
        height="60"
      />
    ),
  },
  {
    description: "Apply with confidence and Land More Interviews.",
    icon: (
      <Icon
        icon="streamline:target-remix"
        style={{ color: "#256EFF" }}
        width="60"
        height="60"
      />
    ),
  },
];


const Home = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  return (
    <div className="w-full -mt-15 heading overflow-x-hidden">
      {/* Hero Section */}
      <div
        className="flex flex-col md:flex-row items-center justify-between p-4 sm:p-8 w-full h-auto md:h-[635px] backdrop-blur-3xl bg-white"
        style={{
          backgroundImage: "url('images/background.png')",
          backgroundSize: "contain",
        }}
      >
        {/* Left Side (Text) */}
        <div className="w-full md:w-1/2 flex flex-col space-y-6 sm:space-y-[40px] md:ml-12 text-center md:text-left px-4">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-sans font-medium leading-tight">
            Resumify - Power Up <br className="hidden md:block" /> Your Resume! ⚡
          </h1>
          <div className="space-y-4 font-bold">
            <p className="text-base sm:text-lg text-gray-700">
              Your resume shouldn’t just exist - it should stand out. Resumify
              supercharges your resume with AI-powered analysis, ensuring it’s
              ATS-friendly, optimized, and interview-ready in seconds.
            </p>
            <button
              className="bg-[#256EFF] py-3 px-6 rounded-xl text-base sm:text-xl text-white font-semibold w-full sm:w-[400px] mx-auto md:mx-0 transition-all duration-300 hover:bg-[#339EFF] hover:scale-110 h-[60px]"
              onClick={() => {
                isLoggedIn ? navigate("/analyser") : navigate("/login");
              }}
            >
              Upload your Resume Now 💪
            </button>
          </div>
        </div>

        {/* Right Side (Image) */}
        <div className="w-full md:w-[480px] flex justify-center md:justify-end mt-10 md:mt-0 px-4">
          <img src="images/resume.gif" alt="Resume" className="w-[80%] sm:w-full" />
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-[20px] space-y-10 px-4 sm:px-10">
        <h2 className="text-3xl sm:text-5xl font-semibold text-center">Why Resumify?</h2>
        <div className="flex flex-wrap justify-center sm:justify-around gap-8 sm:gap-[70px]">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl w-[280px] h-auto sm:h-[260px] flex flex-col p-5 gap-5 items-center text-center shadow transition-all duration-300"
            >
              <div className="bg-blue-50 p-5 rounded-2xl text-xl shadow-lg">{feature.icon}</div>
              <div>
                <h2 className="text-xl sm:text-[25px] font-semibold mt-2">{feature.title}</h2>
                <p className="mt-2 text-[14px] sm:text-[15px] font-normal">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Divider Icon */}
      <div className="w-[50px] h-[70px] rounded-full m-auto text-center mt-6">
        <Icon icon="mdi:thunder-circle" width="60" height="70" style={{ color: "#407bdf" }} />
      </div>

      {/* Guide Section */}
      <div className="mt-10 sm:mt-15 flex flex-col items-center px-4 text-center">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold w-full sm:w-3/4">
          Unlock your Resume's True <br /> Potential
        </h1>
        <div className="flex justify-center sm:justify-evenly flex-wrap w-full mt-6 gap-3">
          {tour.map((step, index) => (
            <React.Fragment key={index}>
              <div className="bg-white rounded-2xl w-[160px] sm:w-[180px] h-[300px] flex flex-col p-5 sm:p-8 transition-all duration-300 hover:scale-105 border-2 border-[#256EFF] justify-evenly">
                <div className="text-3xl sm:text-4xl text-[#256EFF] mb-4">{step.icon}</div>
                <p className="text-sm sm:text-lg font-bold">{step.description}</p>
              </div>
              {index < tour.length - 1 && (
                <Icon
                  icon="si:double-arrow-right-line"
                  width="45"
                  height="45"
                  className="hidden sm:block"
                  style={{ color: "#407bdf" }}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full mt-10 sm:mt-[-25px] flex flex-col md:flex-row items-center px-4 md:px-10">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">
            Don't Just Submit <br /> Stand Out!
          </h1>
          <div className="mt-6 sm:mt-10 flex flex-col text-left items-start gap-4 text-base sm:text-xl text-[#256EFF]">
            <p className="flex gap-2 items-center justify-center md:justify-start">
              <CircleCheckBig color="#256EFF" /> AI powered Resume Analyser
            </p>
            <p className="flex gap-2 items-center justify-center md:justify-start">
              <CircleCheckBig color="#256EFF" /> Instant analysis
            </p>
            <p className="flex gap-2 items-center justify-center md:justify-start">
              <CircleCheckBig color="#256EFF" /> Actionable insights
            </p>
          </div>
          <button
            className="bg-[#256EFF] mt-6 py-3 px-6 rounded-xl text-white text-base sm:text-xl font-medium mb-10 sm:mb-0"
            onClick={() => {
              isLoggedIn ? navigate("/analyser") : navigate("/login");
            }}
          >
            ⚡ Try Resumify Now
          </button>
        </div>
        <div className="w-full hidden md:flex justify-center mt-8 md:mt-0">
          <img
            src="images/img1.gif"
            alt="Animation"
            className="w-full sm:w-3/4 md:w-[600px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;


