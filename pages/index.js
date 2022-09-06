import { useState } from "react";
import { usePopper } from "react-popper";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Welcome from "./welcome";

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
        ref={setReferenceElement}
        className="absolute bottom-4 right-4 p-2 rounded-l-lg rounded-t-lg bg-blue-700 hover:bg-blue-600 shadow-md hover:shadow-lg text-white"
        type="button"
      >
        Restaurant
      </button>
      {showWidget && (
        <div className="absolute right-4 bottom-20">
          <Welcome />
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
