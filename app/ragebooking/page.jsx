"use client"
import React, { useState } from "react";
import FeedbackForm from "../Components/FeedbackForm";

export default function AppointmentGrid() {
  // Initialize state for 16 buttons
  const [dates, setDates] = useState(Array(16).fill("24-05-2024 || 9:30 AM"));
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [selectedDate, setSelectedDate] = useState(""); // State to store selected date

  const handleFeedbackButtonClick = (date) => {
    setSelectedDate(date); // Update selected date when button clicked
    setShowFeedbackForm(true);
  };

  const handleBackButtonClick = () => {
    setShowFeedbackForm(false);
  };

  return (
    <div className="relative w-screen h-screen ">
      <div className="flex flex-row w-full py-8 px-4 gap-12 bg-white-green">
        <div className="w- place-content-start">
          <div className="text-black font-crimson text-3xl w-full ">
            Rage Room Instruction
          </div>
          <div className="w-full break-words text-black text-md">
            If you have any questions or specific requests, we encourage you to
            reach out to us directly or complete the form provided. We value
            your input and are always ready to assist you. We look forward to
            hearing from you and are committed to providing you with the best
            possible service. Thank you for choosing{" "}
            <strong>Frustration Frenzy</strong>
          </div>
        </div>
        <div>
          <div className="w-full ">
            <div className="">
              <div className="text-black font-crimson text-4xl w-full text-center m-2 ">
                Rage Room Instruction
              </div>
              <div className="w-full break-words text-black text-md py-4">
                If you have any questions or specific requests, we encourage you
                to reach out to us directly or complete the form provided. We
                value your input and are always ready to assist you. We look
                forward to hearing from you and are committed to providing you
                with the best possible service. Thank you for choosing Lorem
                ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
                blanditiis, accusamus quia saepe obcaecati illo possimus placeat
                odio ipsum aliquam odit, dolore animi alias adipisci eveniet
                labore voluptates voluptas quasi.
                <strong>Frustration Frenzy</strong>
              </div>
            </div>
            <div className=" text-black text-3xl font-bold py-4">
              Available Timings
            </div>
            <div className="grid grid-cols-4 gap-4">
              {dates.map((date, i) => (
                <div key={i}>
                  <button
                    onClick={() => handleFeedbackButtonClick(date)}
                    className="bg-green-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    {date}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Render FeedbackForm with selected date when showFeedbackForm is true */}
      {showFeedbackForm && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg">
            <FeedbackForm selectedDate={selectedDate} />{" "}
            {/* Pass selected date as prop */}
            <button
              onClick={handleBackButtonClick}
              className="absolute top-4 right-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
            >
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
