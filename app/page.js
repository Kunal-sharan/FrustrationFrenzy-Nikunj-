"use client"
import { useEffect } from "react";
import MainPage from "./mainpage/page";
import Navbar from "./navbar/Navbar";

export default function Home() {
  useEffect(() => {
    if (!window.location.hash) {
      window.location.hash = "loaded";
      window.location.reload();
    }
  }, []);
  return (
    <main>
      {/* <Form/> */}
      {/* <ContinueAs/> */}
      {/* <Videobrief/> */}
      <Navbar/>
      <MainPage />
      {/* <SessionBooking/> */}
    </main>
  );
}
