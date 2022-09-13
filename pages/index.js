import { useState } from "react";
import { usePopper } from "react-popper";
import Head from "next/head";

import axios from "axios";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "./layout";

export default function Home() {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: "offset", options: { offset: [10, 10] } }],
  });
  const [showWidget, setShowWidget] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>My Widget</title>
        <meta name="description" content="My widget test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button
        onClick={() => {
          setShowWidget(!showWidget);
        }}
        // ref={setReferenceElement}
        className="z-10 absolute transition bottom-4 right-4 p-2 rounded-full h-[64px] w-[64px] bg-user-gray hover:bg-light-sky shadow-md hover:shadow-lg text-white"
        type="button"
      >
        {showWidget && (
          <svg
            className="text-white h-13 w-13"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinejoin="round"
              strokeWidth="3"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
        {!showWidget && <img src="/custdelight-white-low-icon-low.png" />}
      </button>
      {showWidget && (
        <div className="absolute right-4 bottom-10 ">
          <Layout setShowWidget={setShowWidget} />
        </div>
      )}
      {/* {showWidget && (<div 
      className="absolute bg-white  rounded-md shadow-lg right-4"
      ref={setPopperElement}
      style={styles.popper}
      {...attributes.popper}>
      <Welcome/>
    </div>
  )}   */}
    </div>
  );
}
