import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const timeOptions: string[] = [
  "30 Min",
  "1 hour",
  "2 hrs +",
  "Flexible"
];

const OnboardingTimeCommitment: React.FC = () => {
  const navigate = useNavigate();

  const saveToBackend = async (timeCommitment: string) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      const backendUrl = process.env.NODE_ENV === "production"
        ? "https://s76-balaji-openln.onrender.com"
        : "http://localhost:5000";

      await fetch(`${backendUrl}/api/auth/profile`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          timeCommitment: timeCommitment,
        }),
        credentials: "include",
      });
    } catch (error) {
      console.error("Error saving time commitment:", error);
    }
  };

  const handleTimeSelect = (time: string) => {
    localStorage.setItem("timeCommitment", time);
    saveToBackend(time);
    navigate("/onboarding/learning-style");
  };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-black">
      <div className="flex flex-col justify-center items-center py-8 md:py-0 md:flex-1 bg-black relative">
        <h1 className="text-white text-4xl md:text-[70px] font-bold mb-2 md:mb-4 md:mt-[-80px] leading-none text-center">
          Onboarding
        </h1>
        <div className="text-purple-600 text-7xl md:text-[140px] font-bold mb-1 md:mb-2 leading-none">
          2
        </div>
        <div className="text-white text-2xl md:text-[42px] mb-8 md:mb-16 font-light text-center">
          Daily Time Commitment
        </div>
        <div className="w-[80%] md:w-[370px] h-3 bg-gray-300 rounded-full overflow-hidden md:absolute md:bottom-16">
          <div className="h-full bg-purple-600 rounded-full" style={{ width: "20%" }} />
        </div>
      </div>

      <div className="flex-1 bg-gradient-to-br from-[#1a0026] via-[#2d0036] to-[#3a005c] relative pb-10 md:pb-0">
        <div className="w-full h-full flex flex-col justify-start md:justify-center items-center px-4 md:px-6 pt-8 md:pt-0">
          <div className="w-full max-w-md grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {timeOptions.map((time, index) => (
              <button
                key={time}
                className={`py-3 md:py-4 rounded-2xl text-white text-base md:text-lg font-medium bg-[#4a295a] bg-opacity-60 hover:bg-purple-700 transition-colors duration-300 ${
                  index >= 2 && index < timeOptions.length - 1 ? "col-span-1 md:col-span-1" : ""
                }`}
                onClick={() => handleTimeSelect(time)}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingTimeCommitment;
