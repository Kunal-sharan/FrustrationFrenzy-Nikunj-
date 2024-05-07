"use client"
import React, { useState } from "react";
import FeedbackForm from "../Components/FeedbackForm";

export default function AppointmentGrid() {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const handleFeedbackButtonClick = (date) => {
    setSelectedDate(date);
    setShowFeedbackForm(true);
  };

  const handleBackButtonClick = () => {
    setShowFeedbackForm(false);
  };

  return (
    <div className="relative w-screen h-screen">
      <div className="flex flex-row w-full py-8 px-4 gap-12 bg-white-green">
        <div className="w-full h-screen mb-8">
          <strong className="text-xl">
            Instructions for a Smash Room Experience:
          </strong>
          <div className="w-full break-words text-black text-sm overflow-y-auto max-h-screen py-4">
            <ul>
              <li>
                <strong>Safety Gear:</strong> Before entering the smash room,
                put on the provided safety gear, including headgear, gloves,
                shoe cover, and protective suit if available, to protect
                yourself from flying debris.
              </li>
              <br />
              <li>
                <strong>Review Rules:</strong> Listen carefully to the rules and
                guidelines provided by us. This typically includes instructions
                on where and how to smash items safely.
              </li>
              <br />
              <li>
                <strong>Enter the Room:</strong> Step into the smash room and
                familiarize yourself with the space. Take a moment to adjust to
                the environment and mentally prepare for your session.
              </li>
              <br />
              <li>
                <strong>Release Your Stress:</strong> Once ready, start
                smashing! Focus on releasing your stress and pent-up emotions by
                hitting the items with controlled force. Be mindful of your
                surroundings and avoid reckless behavior.
              </li>
              <br />
              <li>
                <strong>Take Breaks:</strong> If you feel overwhelmed or tired,
                take a break. Step away from the smashing area, breathe deeply,
                and relax before resuming your session.
              </li>
              <br />
              <li>
                <strong>Finish Your Session:</strong> When your session is over
                or you&apos;ve smashed all the items, exit the room calmly.
                Remove your safety gear and return it to the designated area.
              </li>
              <br />
              <li>
                <strong>Reflect:</strong> Reflect on your experience and how you
                feel after releasing your stress in the smash room. Take note of
                any changes in your mood or mindset.
              </li>
              <br />
              <li>
                <strong>Exit:</strong> Leave the smash room area and return any
                equipment or gear to us. Share your feedback to help improve the
                experience for future visitors.
              </li>
              <br />
            </ul>
          </div>
        </div>
        <div>
          <div className="w-full">
            <div className="text-black font-bold font-crimson text-3xl w-full text-center m-1">
              ABOUT SMASH ROOM
            </div>
            <div className="w-full break-words text-black text-md py-4">
              <strong>Are you tired of bottling up your stress?</strong> Do you
              need a release from the pressures of everyday life? Welcome to our
              Smash Room, where you can unleash your inner beast and break,
              smash, and destroy to your heart&apos;s content! Our Smash Room
              offers a safe and controlled environment where you can let loose
              and destroy items without fear of consequences. Whether
              you&apos;re feeling overwhelmed at work, dealing with relationship
              issues, or just need a break from the mundane, our Smash Room is
              the perfect place to blow off steam.
            </div>
            <div className="text-black text-3xl font-bold py-4">
              Book Your Slot Now
            </div>
            <div className="grid grid-cols-4 py-4 gap-4">
              
                  <button
                    onClick={() => handleFeedbackButtonClick()}
                    className="bg-green-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    BOOK NOW
                  </button>
            </div>
            <p>
              The purpose of a smash room is to provide a safe and controlled
              environment for stress relief. Enjoy the experience and let go of
              your frustrations in a positive and constructive way.
            </p>
          </div>
        </div>
      </div>
      {showFeedbackForm && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg">
            <FeedbackForm selectedDate={selectedDate} />
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
