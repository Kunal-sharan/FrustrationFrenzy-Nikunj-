"use client"
import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Foooter from "./Foooter";

export default function CancelationForm() {
  const [state, handleSubmit] = useForm("mgejjepk");

  if(state.succeeded){
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-6xl font-dancing font-bold text-green-800">Your cancellation request has been submitted. Thank you!</h1>
        <p className="text-4xl text-gray-600 font-dancing font-light m-2">You have received a confirmation email regarding cancelation.</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      <form
        className="flex flex-col gap-4 w-3/4 mx-auto mt-8 border-2 rounded-xl bg-dark-green border-black p-4 justify-center items-center"
        onSubmit={handleSubmit}
      >
        <h2 className="text-white text-3xl font-bold m-2">Reason for Cancellation</h2>
        <div className="flex flex-row gap-4">
          <label className="text-white flex items-center">
            <input type="checkbox" name="reason" value="Too costly" />
            <span className="ml-2">Too costly</span>
          </label>
          <label className="text-white flex items-center">
            <input type="checkbox" name="reason" value="Change of mind" />
            <span className="ml-2">Change of mind</span>
          </label>
          <label className="text-white flex items-center">
            <input type="checkbox" name="reason" value="Issue with schedule time" />
            <span className="ml-2">Issue with schedule time</span>
          </label>
        </div>
        <div>
          <label htmlFor="otherReason" className="text-white">Other (please specify)</label>
          <input
            id="otherReason"
            type="text"
            name="otherReason"
            className="text-black bg-white p-2 rounded-lg m-4"
          />
        </div>
        <button
          className="btn text-xl my-4 bg-sec-red text-white-green hover:bg-white hover:text-dark-green w-1/6"
          type="submit"
          disabled={state.submitting}
        >
          Submit
        </button>
        <ValidationError
          prefix="Reason"
          field="reason"
          errors={state.errors}
        />
      </form>
      <Foooter/>
    </div>
  );
}
