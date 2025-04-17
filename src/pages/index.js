import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { playMusic, stopMusic } from "@/Redux/musicSlice";
import ReactPlayer from 'react-player/lazy';

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
        <title>Fantasy MMAadness | Fantasy Combat & MMA Leagues</title>
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Fantasy MMA Madness",
              "url": "https://www.fantasymmadness.com",
              "description": "Create, manage, and win in fantasy MMA and combat sports leagues.",
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
            <h1>{slideData[currentSlide].h1}</h1>
            <h2>{slideData[currentSlide].h2}</h2>
          </div>
        </div>

        <div className="video-embed-wrapper">
          <div className="no-hover">
          <ReactPlayer
  url="https://www.youtube.com/watch?v=C5wHWEzPrrs"
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
          alt="money"
          className={styles.moneyone}
          width={300}
          height={300}
          loading="lazy"
        />
        <Image
          src="https://res.cloudinary.com/dqi6vk2vn/image/upload/v1744521309/home/bepreufoaj9gpazw9eho.png"
          alt="money"
          className={styles.moneytwo}
          width={300}
          height={300}
          loading="lazy"
        />
        <h3 className={styles.thirdHomePageHeading}>🎉 Welcome, NEW USERS! 🎉</h3>
        <h2 className={styles.thirdHomePageSubheading}>Claim Your $20 Tokens Free Today!</h2>
        <p className={styles.thirdHomePageDescription}>
          As a new user, you’ll receive $20 worth of free tokens — a powerful head start to fuel your journey.
        </p>
        <Link href="/CreateAccount">
          <button className={styles.thirdHomePageButton}>Sign Up Now 🚀</button>
        </Link>
      </div>

      {/* INFO SECTIONS */}
      <div className={styles.fourthHomepageSection}>
        {[
  {
    title: "Claim Your $20 in Free Fantasy Combat Tokens",
    content:
      "Looking to dive into the high-stakes world of fantasy MMA? Fantasy Mmadness is giving new users $20 in free fantasy combat tokens to start building their dream lineups. Whether you're a casual fan curious about fantasy sports or a seasoned strategist ready to dominate, this bonus gives you a real edge. Use your tokens to join contests, draft top fighters, and experience every knockout and takedown like never before — all with zero risk.",
    seoLink: "https://www.getfanatics.app/",
  },
  {
    title: "What Is Fantasy Combat Sports?",
    content:
      "Fantasy combat sports is the perfect mix of fight night thrills and strategic thinking. At Fantasy Mmadness, players draft real MMA, boxing, and kickboxing athletes and earn points based on in-ring performance — think strikes landed, takedowns, and submission attempts. The more active and effective your fighters, the better your score. It’s an interactive way to engage with the action, test your fight IQ, and climb the leaderboard while doing it.",
    seoLink: "https://www.tapology.com/fantasy/",
  },
  {
    title: "Why Play on Fantasy Mmadness?",
    content:
      "Fantasy Mmadness isn't just another platform — it's a home for fans who live and breathe combat sports. With an intuitive interface, real-time scoring, and contests spanning major and regional events, the experience is built for both hardcore analysts and casual players. Gain access to exclusive rewards, compete in community-driven leagues, and enjoy seamless gameplay designed by fight fans, for fight fans. This is the evolution of fantasy sports.",
    seoLink: "https://enchloom.com/",
  },
  {
    title: "The Thrill of Combat Meets Strategic Gameplay",
    content:
      "Fantasy Mmadness delivers the rush of real fights with the deep tactics of fantasy sports. Every decision counts — will your pick land a submission in Round 1 or go the distance with relentless striking? Success isn’t just about choosing winners, but predicting action and maximizing point potential. Find underdog value, avoid risky matchups, and prove your skills by outmaneuvering the competition on the virtual scorecard.",
    seoLink: "https://marketplace.draftkings.com/fantasy-ufc",
  },
  {
    title: "How It Works",
    content:
      "Getting started with Fantasy Mmadness is simple and rewarding. Sign up for free, and you’ll receive $20 in tokens instantly — no deposit required. Use these tokens to enter live contests based on real upcoming fight cards. Draft a lineup of fighters based on stats, matchups, and gut instinct, then watch the points roll in as the action unfolds. Win, earn more tokens, and keep the fantasy brawls going week after week.",
    seoLink: "https://www.fantasylabs.com/fantasy-mma/",
  },
  {
    title: "Join a Growing Community of Fight Fans",
    content:
      "Fantasy Mmadness is more than just a game — it’s a vibrant community of passionate fight fans. Whether you're swapping picks in the Discord, battling for leaderboard dominance, or joining weekly tournaments, you’ll find a crew that loves the sport as much as you do. Dive into strategy chats, celebrate upsets, and build rivalries in a space where everyone understands the hype of a spinning back fist finish.",
    seoLink: "https://underdogfantasy.com/",
  },
  {
    title: "Don’t Just Watch the Fight — Be a Part of It",
    content:
      "With Fantasy Mmadness, you're not just watching from the sidelines — you're in the middle of the action. Draft fighters, create dream matchups, and experience every card like it’s your own championship run. Whether it's a title bout or a gritty prelim, every strike matters to your score. This is where fandom meets function — it’s time to move from spectator to strategist.",
    seoLink: "https://boomfantasy.com/",
  },
  {
    title: "Start Playing Now — Your Fantasy Fight Journey Begins Here",
    content:
      "There’s never been a better time to level up your love for combat sports. Fantasy Mmadness puts the power in your hands, offering free tokens, fierce competition, and a platform that rewards real knowledge. Claim your signup bonus, explore upcoming events, and start building lineups that hit hard. Whether you're in it for fun or fame, your fantasy fight journey starts here.",
    seoLink: "https://www.prizepicks.com/",
  },
]
.map((section, idx) => (
          <div key={idx} className={styles.newaddedContentSection}>
            <h4>{section.title}</h4>
            <p dangerouslySetInnerHTML={{ __html: section.content }} />
            <a style={{ display: "none" }} href={section.seoLink}>{section.title}</a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
