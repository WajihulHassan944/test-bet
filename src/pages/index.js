import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { playMusic, stopMusic } from "@/Redux/musicSlice";
import ReactPlayer from 'react-player/lazy';
import FeaturedSponsors from "@/Components/Home/HomeSponsors/OurSponsors";

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
            <div className={styles.bannerButtons}>
            <Link href="/CreateAccount" className={styles.signupbtn}>User Sign up</Link>
            <Link href="/AffiliateCreateAccount" className={styles.signupbtn}>Affiliate Sign up</Link>
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
        <h3 className={styles.thirdHomePageHeading}>🎉 Welcome to Fantasy Combat Madness! 🎉</h3>
        <h2 className={styles.thirdHomePageSubheading}>Claim Your $20 Free Fantasy MMA Tokens Today!</h2>
        <p className={styles.thirdHomePageDescription}>
          Join now and kickstart your fantasy fighting journey with $20 worth of free tokens! Build fantasy matchups, climb fantasy fighter rankings, and dominate Fantasy Combat leagues across MMA, Boxing, and Bare Knuckle Fighting Championships.
        </p>
        <Link href="/CreateAccount">
          <button className={styles.thirdHomePageButton}>Sign Up Now 🚀</button>
        </Link>
      </div>

      {/* INFO SECTIONS */}
      <div className={styles.fourthHomepageSection}>
        {[
          {
            title: "Unlock Your Fantasy Combat Sports Journey",
            content:
              "Fantasy Mmadness offers the ultimate experience for Fantasy MMA, Fantasy Boxing, and Fantasy Kickboxing enthusiasts. Get your $20 free tokens and dive into Fantasy BKFC, Fantasy Bare Knuckle matchups, and more!",
            seoLink: "https://www.getfanatics.app/",
          },
          {
            title: "What is Fantasy Fighting?",
            content:
              "Fantasy Fighting is where strategy meets excitement! Draft real fighters from MMA, boxing, or wrestling events. Score based on strikes, takedowns, and submissions. Experience fantasy combat sports at a new level with Fantasy Matchups that keep you on your toes.",
            seoLink: "https://www.tapology.com/fantasy/",
          },
          {
            title: "Master Fantasy Combat Sports Analysis",
            content:
              "Sharpen your skills with expert Fantasy Combat Sports Analysis. Whether it's Fantasy UFC, Fantasy BKFC, or bare knuckle fantasy matchups, knowing your fighters is key to dominating fantasy fighter rankings and winning big!",
            seoLink: "https://enchloom.com/",
          },
          {
            title: "Climb the Fantasy Fighter Rankings",
            content:
              "Draft smart, pick underdogs, and climb the Fantasy Fighter Rankings leaderboard. From Fantasy MMA to Fantasy Wrestling leagues, your strategy and passion will determine your rise to the top!",
            seoLink: "https://marketplace.draftkings.com/fantasy-ufc",
          },
          {
            title: "Create Epic Fantasy Matchups",
            content:
              "Want to see a dream Fantasy Boxing bout or Fantasy Combat showdown? Now you can! Build your fantasy league with wild Fantasy Matchups across all combat sports. Unleash your imagination and strategic mind.",
            seoLink: "https://www.fantasylabs.com/fantasy-mma/",
          },
          {
            title: "Join the Ultimate Fantasy Combat Community",
            content:
              "Connect with fellow Fantasy MMA, Boxing, and Wrestling fans. Discuss fantasy sports betting strategies, debate Fantasy League outcomes, and celebrate fantasy combat victories together!",
            seoLink: "https://underdogfantasy.com/",
          },
          {
            title: "Bet Smarter with Fantasy Sports Betting in Combat",
            content:
              "Turn every fight night into a fantasy triumph! Engage in Fantasy Sports Betting within our combat leagues — combining thrilling fantasy fighting with smart wagering tactics.",
            seoLink: "https://boomfantasy.com/",
          },
          {
            title: "Your Fantasy Combat Legacy Starts Now",
            content:
              "Sign up today to build your fantasy fighting legacy. Whether it's Fantasy UFC, Fantasy Bare Knuckle, or Fantasy Wrestling, Fantasy Mmadness gives you the tools to rise, win, and celebrate greatness.",
            seoLink: "https://www.prizepicks.com/",
          },
        ].map((section, idx) => (
          <div key={idx} className={styles.newaddedContentSection}>
            <h4>{section.title}</h4>
            <p dangerouslySetInnerHTML={{ __html: section.content }} />
            <a style={{ display: "none" }} href={section.seoLink}>{section.title}</a>
          </div>
        ))}
      </div>

      <FeaturedSponsors />
    </>
  );
};

export default Home;
