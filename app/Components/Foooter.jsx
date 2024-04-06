import React from 'react'
import Link from 'next/link';
export default function Foooter() {
  return (
    <div>
      <div className="w-full flex flex-col bg-white mt-2">
        <div className="text-center text-4xl font-bold text-black p-8 border-b-4 rounded-xl border-black border-solid mb-4 mx-28">
          Follow US@FrustrationFrenzy
        </div>
        <div className=" flex flex-row  ">
          <div className="flex place-content-center flex-col px-40 py-8 gap-8 w-2/3">
            <Link href="/aboutUs">
              <div className="text-black  underline ">About Us</div>
            </Link>
            <Link href="/contactUs">
              <div className="text-black underline ">Contact Us</div>
            </Link>
            <Link href="/termsAndConditions">
              <div className="text-black  underline ">Terms & Conditions</div>
            </Link>
            <div className="text-black underline ">Privacy Policy</div>
            <Link href="/cancelation">
            <div className="text-black underline ">
              Cancellation
            </div>
            </Link>
          </div>
          <div className="flex flex-col gap-8 place-content-center justify-center align-middle w-full px-64">
            <div className="text-black text-center text-xl">Become Member</div>
            <div>
              <input
                className="w-full border-solid border-4 border-dark-green p-4 "
                placeholder="Email"
              />
            </div>
            <div className="w-full text-center text-lg text-white-green bg-dark-green p-4 hover:bg-sec-red ">
              <button>SUBCRIBE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
