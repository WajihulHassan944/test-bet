import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import MoneyOne from "../../src/Assets/money1.png";
import MoneyTwo from "../../src/Assets/money2.png";
import styles from "@/styles/Home.module.css";
import { playMusic, stopMusic } from "@/Redux/musicSlice";

// Simulate fetching data server-side
export async function getServerSideProps() {
  const slideData = [
    { h1: "The thrill of combat", h2: "Boxing, MMA, Kickboxing & Bare knuckle" },
    { h1: "Unleash your fight IQ", h2: "Pick fighters. Score big. Climb the leaderboard." },
    { h1: "Real combat, virtual stakes", h2: "Boxing & MMA fantasy leagues for real fans." },
    { h1: "Build your dream fight card", h2: "Every punch, kick, and takedown counts." },
    { h1: "Earn rewards for winning picks", h2: "Fantasy meets combat sports like never before." },
  ];

  return { props: { slideData } };
}

const Home = ({ slideData }) => {
  const dispatch = useDispatch();
  const howlerRef = useRef(null);
  const isPlaying = useSelector((state) => state.music.isPlaying);

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const currentSeek = howlerRef.current?.seek() || 0;
    dispatch(stopMusic(currentSeek));

    return () => {
      dispatch(playMusic());
    };
  }, [dispatch]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slideData.length]);

  return (
    <>
      <Head>
        <title>Fantasy MMA Madness - Home</title>
        <meta
          name="description"
          content="Experience the thrill of combat sports like Boxing, MMA, Kickboxing, and Bare Knuckle. Join now and claim your $20 free tokens today!"
        />
        <meta property="og:title" content="Fantasy MMA Madness - Thrill of Combat" />
        <meta
          property="og:description"
          content="Experience the thrill of combat sports like Boxing, MMA, Kickboxing, and Bare Knuckle. Join now and claim your $20 free tokens today!"
        />
        <meta property="og:url" content="https://fantasymmadness.com/" />
        <meta
          name="keywords"
          content="MMA, Fantasy Sports, Boxing, Kickboxing, Bare Knuckle, Combat Sports, Free Tokens, Fantasy MMA Madness"
        />
      </Head>

      <div className={styles.homeFirst}>
        {/* SLIDER */}
        <div className={styles.bannerSliderWrapper}>
          <div className={styles.slide} key={currentSlide}>
            <h1>{slideData[currentSlide].h1}</h1>
            <h2>{slideData[currentSlide].h2}</h2>
          </div>
        </div>

        {/* VIDEO */}
        <div className="video-embed-wrapper">
          <div className="no-hover">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/C5wHWEzPrrs?autoplay=1&loop=1&playlist=C5wHWEzPrrs&controls=0&modestbranding=1&rel=0&fs=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* BONUS SECTION */}
      <div className={styles.thirdHomePageSection}>
  <Image src={MoneyOne} className={styles.moneyone} alt="money" />
  <Image src={MoneyTwo} className={styles.moneytwo} alt="money" />
  <h3 className={styles.thirdHomePageHeading}>🎉 Welcome, NEW USERS! 🎉</h3>
  <h2 className={styles.thirdHomePageSubheading}>Claim Your $20 Tokens Free Today!</h2>
  <p className={styles.thirdHomePageDescription}>
    Join the action now and kickstart your journey in Fantasy MMA Madness with an exclusive bonus!
  </p>
  <p className={styles.thirdHomePageDescription}>
    As a new user, you'll receive $20 worth of free tokens to build your fantasy fight card, make strategic picks, and test your combat sports knowledge.
  </p>
  <p className={styles.thirdHomePageDescription}>
    Whether you're into MMA, Boxing, Kickboxing, or Bare Knuckle brawls — this is your chance to dominate the virtual arena and win real prizes.
  </p>
  <p className={styles.thirdHomePageDescription}>
    Sign up now to compete in weekly fantasy matchups, earn rewards, and experience the adrenaline of fight night like never before!
  </p>
  <Link href="/CreateAccount">
    <button className={styles.thirdHomePageButton}>Sign Up Now 🚀</button>
  </Link>
</div>

    </>
  );
};

export default Home;
