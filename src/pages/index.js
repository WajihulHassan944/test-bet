import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { playMusic, stopMusic } from "@/Redux/musicSlice";
import ReactPlayer from 'react-player/lazy';
import FeaturedSponsors from "@/Components/Home/HomeSponsors/OurSponsors";
import HomeLeaderboardTwo from "@/Components/GlobalLeaderboard/HomeLeaderBoardTwo";

export async function getServerSideProps() {
  const slideData = [
    { h1: "Fantasy MMA, Boxing & Combat Sports", h2: "Draft fighters, score knockouts, rule the fantasy leagues." },
    { h1: "Fantasy UFC & Fantasy BKFC Action", h2: "Climb the fantasy fighter rankings and earn epic rewards." },
    { h1: "Create Your Fantasy Matchups", h2: "Experience fantasy bare knuckle, fantasy kickboxing, and more." },
    { h1: "Dominate Fantasy Combat Sports", h2: "Every punch, kick, and knockout moves you up the leaderboard." },
    { h1: "Fantasy Fighting at Its Finest", h2: "Build dream teams across MMA, boxing, and fantasy wrestling." },
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
        <title>Fantasy MMAadness | Fantasy Combat Sports, MMA, Boxing</title>
        <meta
          name="description"
          content="Play Fantasy MMA, Fantasy Boxing, Fantasy UFC, Fantasy BKFC, Fantasy Kickboxing, and Fantasy Bare Knuckle. Create dream fantasy fights, climb fighter rankings, and dominate fantasy combat leagues."
        />
        <meta property="og:title" content="Fantasy MMAadness - Fantasy Fighting Action Awaits" />
        <meta
          property="og:description"
          content="Join Fantasy MMAadness and experience the ultimate fantasy combat sports world. Build lineups for Fantasy MMA, Boxing, Wrestling, and more!"
        />
        <meta property="og:url" content="https://fantasymmadness.com/" />
        <meta
          name="keywords"
          content="Fantasy MMA, Fantasy UFC, Fantasy BKFC, Fantasy Boxing, Fantasy Kickboxing, Fantasy Bare Knuckle, Fantasy Combat, Fantasy Fighting, Fantasy Sports Betting Combat, Fantasy Fighter Rankings, Fantasy League Combat Sports, Fantasy Matchups, Fantasy Wrestling, Fantasy Combat Sports Analysis"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Fantasy MMAadness",
              "url": "https://www.fantasymmadness.com",
              "description": "Play Fantasy MMA, Boxing, Kickboxing, and Fantasy Combat Sports leagues. Draft fighters, score big, and win rewards.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.fantasymmadness.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />
      </Head>

      <div className={styles.homeFirst}>
        <div className={styles.bannerSliderWrapper}>
          <div className={styles.slide} key={currentSlide}>
            <h1 style={{fontWeight:'100'}}>{slideData[currentSlide].h1}</h1>
            <h2 style={{fontWeight:'100'}}>{slideData[currentSlide].h2}</h2>
             <Link href="/mock-game" className={styles.loginhomebtn}>Play for free</Link>
            <div className={styles.bannerButtons}>
            <Link href="/CreateAccount" className={styles.signupbtn}>Sign up</Link>
            <Link href="/mock-game" className={styles.signupbtn}>Play for free</Link>
            </div>
          </div>
        </div>

        <div className="video-embed-wrapper">
          <div className="no-hover">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=erHfHDovoCE"
              playing
              loop
              controls={false}
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>

      {/* BONUS SECTION */}
      <div className={styles.thirdHomePageSection}>
        <Image
          src="https://res.cloudinary.com/dqi6vk2vn/image/upload/v1744521308/home/ftanjih5z8hupq8wpl4z.png"
          alt="fantasy money tokens"
          className={styles.moneyone}
          width={300}
          height={300}
          loading="lazy"
        />
        <Image
          src="https://res.cloudinary.com/dqi6vk2vn/image/upload/v1744521309/home/bepreufoaj9gpazw9eho.png"
          alt="free fantasy tokens"
          className={styles.moneytwo}
          width={300}
          height={300}
          loading="lazy"
        />
        <h3 className={styles.thirdHomePageHeading}>🎉 Welcome to Fantasy Combat Mmadness! 🎉</h3>
        <h2 className={styles.thirdHomePageSubheading}>Claim Your $20 Free Fantasy MMA Tokens Today!</h2>
        <p className={styles.thirdHomePageDescription}>
          Join now and kickstart your fantasy fighting journey with $20 worth of free tokens! Build fantasy matchups, climb fantasy fighter rankings, and dominate Fantasy Combat leagues across MMA, Boxing, and Bare Knuckle Fighting Championships.
        </p>
        <Link href="/CreateAccount">
          <button className={styles.thirdHomePageButton}>Sign Up Now 🚀</button>
        </Link>
      </div>
{/* BRAND ANCHOR PARAGRAPHS */}
{/* BRAND ANCHOR PARAGRAPHS */}
<div className={styles.fourthHomepageSection}>
  <div className={styles.newaddedContentSection}>
    <h4>Why Play Fantasy Combat Sports</h4>
    <p>
      With <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">Fantasy MMADNESS</a>, you can <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">start predicting fights now</a>, join <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">MMA fantasy leagues</a>, and <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">win money predicting MMA fights</a>. 
      Draft top fighters, earn fantasy fight stats and leaderboard points, and experience the <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">ultimate MMA fantasy platform</a> today.
      <br /><br />
      Enter <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">free-to-play fantasy leagues</a>, predict winners, methods (KO, submission, decision), and rounds — all while collecting badges and real-world rewards.
    </p>
  </div>

  <div className={styles.newaddedContentSection}>
    <h4>Live the Action</h4>
    <p>
      Enter a <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">free MMA fantasy contest</a> or <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">get in on the MMA fantasy action</a> with the <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">Fantasy MMADNESS Fight Predictor</a>. 
      It’s more than a game—it’s where <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">fight fans play and win</a>.
      <br /><br />
      Activate your fight IQ in real time. Use our <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">Live Fantasy Fight Predictor</a> to choose winners, methods, and rounds — and track your score during the event.
      Snap decisions create live thrill, while instant scoring fuels competitive excitement on global leaderboards.
    </p>
  </div>

  <div className={styles.newaddedContentSection}>
    <h4>Strategy Meets Reward</h4>
    <p>
      Build your dream league and <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">create your fantasy MMA league</a>. Challenge friends in <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">fantasy MMA contests</a>, climb the <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">fantasy fight leaderboard</a>, and make your mark in <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">high-stakes MMA fantasy matches</a>.
      <br /><br />
      Whether private or public, leagues offer full control: manage rosters, set custom scoring, trade fighters, and earn seasonal rewards. Dominate each round with smart predictions and strategic play.
    </p>
  </div>
</div>

{/* 
      <FeaturedSponsors /> */}
<HomeLeaderboardTwo />
    </>
  );
};

export default Home;
