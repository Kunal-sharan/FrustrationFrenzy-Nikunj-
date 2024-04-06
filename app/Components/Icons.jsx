import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const icons = () => {
  return (
    <div className="inline-flex flex-col items-center gap-4 p-4 fixed right-8 top-72">
      <Link href="https://instagram.com/frustrationfrenzy?igshid=OGQ5ZDc2ODk2ZA==">
        <FontAwesomeIcon size="3x" icon={faInstagramSquare} color="black" />
      </Link>
      <Link href="https://frustrationfrenzy007@gmail.com">
        <FontAwesomeIcon size="3x" icon={faEnvelope} color="black" />
      </Link>
    </div>
  );
};

export default icons;
