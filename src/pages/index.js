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
<div className={styles.fourthHomepageSection}>
  <div className={styles.newaddedContentSection}>
    <h4>Why Fans Love Fantasy MMADNESS</h4>
    <p
      dangerouslySetInnerHTML={{
        __html: `
        <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">Fantasy MMADNESS</a> is not just another sports platform—it's the home of the most exciting <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">MMA fantasy prediction game</a> out there. Whether you're looking to <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">Play Fantasy MMADNESS</a> or simply visit the <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">Fantasy MMADNESS Official Site</a>, you'll find a world built for combat sports fans.
        
        As the <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">best MMA fantasy app</a> of 2025, it combines a <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">real-time fight prediction game</a> with a live scoring system. You can <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">challenge friends in fantasy MMA</a>, <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">compete in MMA fantasy tournaments</a>, and <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">earn rewards predicting fights</a>.

        On the <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">Fantasy MMADNESS Platform</a>, users can <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">create your fantasy MMA league</a>, explore <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">interactive MMA fantasy games</a>, and climb the <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">fantasy fight leaderboard</a> with each strategic pick.

        Whether you’re into <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">Fantasy MMADNESS Online</a> or using the app, you’ll experience <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">fantasy fight stats and leaderboards</a> like never before. With the <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">Fantasy MMADNESS Fight Predictor</a>, users get a true edge in the game.

        Fans can <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">predict UFC-style fights online</a>, <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">start predicting fights now</a>, and even enter a <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">free MMA fantasy contest</a>. It's a place to <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">get in on the MMA fantasy action</a> and <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">play & win MMA fantasy cash prizes</a>.

        Looking to <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">test your fight prediction skills</a>? Join the <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">Fantasy MMADNESS Website</a> today and experience a <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">strategy-based fight prediction</a> experience tailored for true fans.

        You can <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">join MMA fantasy leagues</a> built on precision and compete in <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">high-stakes MMA fantasy matches</a>. It’s truly the <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">ultimate MMA fantasy platform</a> for anyone passionate about the fight game.

        Whether you're in it for <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">fantasy MMA contests</a>, the thrill of a <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">round-by-round fight prediction game</a>, or building your legacy through <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">online MMA fantasy sports platform</a>, we've got you covered.

        So <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">make your MMA predictions today</a>, <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">climb the fantasy fight leaderboard</a>, and discover why it’s known as the <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">MMA fan’s favorite fantasy game</a>.

        <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">Fantasy MMADNESS – predict and win</a>, <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">where fight fans play and win</a>, and live out <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">MMA fantasy battles that pay</a>.
        `
      }}
    />
    <a style={{ display: "none" }} href="https://www.fantasymmadness.com/">Explore Fantasy MMADNESS</a>
  </div>
    <div className={styles.newaddedContentSection}>
    <h4>What You Can Do on Fantasy MMADNESS</h4>
    <p
      dangerouslySetInnerHTML={{
        __html: `
        At <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">Fantasy MMADNESS</a>, players can explore a fully <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">free-to-play MMA fantasy tournament</a> experience that brings fans closer to the sport they love. This isn’t just a game—it's a <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">live MMA fantasy scoring system</a> where every strike, takedown, and decision counts.

        If you’re ready to dive deeper, <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">visit Fantasy MMADNESS</a> and explore how <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">MMA pick’em challenges</a> are changing the way we predict fights. Whether you're looking to <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">play fantasy MMA with friends</a> or want to take on the world, this is your home.

        <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">Join Fantasy MMADNESS</a> and start competing in a <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">fantasy fight game online</a> designed by fans, for fans. Here, strategy meets action in a way that transforms every fight night.

        Experience <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">Fantasy MMADNESS Online</a> like never before, where every pick matters and every round could make or break your leaderboard position. There's no better place to connect with your passion and test your predictions.
        `
      }}
    />
    <a style={{ display: "none" }} href="https://www.fantasymmadness.com/">What You Can Do on Fantasy MMADNESS</a>
  </div>
  <div className={styles.newaddedContentSection}>
    <h4>Join the Movement</h4>
    <p
      dangerouslySetInnerHTML={{
        __html: `
        If you're searching for <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">your next favorite fantasy sports app</a>, look no further than <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">Fantasy MMADNESS</a>. It’s where smart fans meet to <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">win money predicting MMA fights</a> in real-time.

        This <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">combat sports fantasy game</a> brings together UFC fans, data analysts, and casual predictors in one place. You'll discover a truly <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">online MMA fantasy sports platform</a> that rewards insight and intuition.

        <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">Visit the Fantasy MMADNESS Website</a> today and take the first step toward building your fight-night legacy. From expert picks to fan-fueled forums, <a href="https://www.fantasymmadness.com/" target="_blank" rel="noopener noreferrer">Fantasy MMADNESS</a> is the all-in-one experience where fight fans play smarter, bolder, and better.
        `
      }}
    />
    <a style={{ display: "none" }} href="https://www.fantasymmadness.com/">Join the Movement</a>
  </div>
</div>


{/* 
      <FeaturedSponsors /> */}

    </>
  );
};

export default Home;
