import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
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
  <img src="https://res.cloudinary.com/dqi6vk2vn/image/upload/v1744521308/home/ftanjih5z8hupq8wpl4z.png" className={styles.moneyone} alt="money" />
  <img src="https://res.cloudinary.com/dqi6vk2vn/image/upload/v1744521309/home/bepreufoaj9gpazw9eho.png" className={styles.moneytwo} alt="money" />
  <h3 className={styles.thirdHomePageHeading}>🎉 Welcome, NEW USERS! 🎉</h3>
  <h2 className={styles.thirdHomePageSubheading}>Claim Your $20 Tokens Free Today!</h2>
  
  <p className={styles.thirdHomePageDescription}>
    As a new user, you’ll receive $20 worth of free tokens — a powerful head start to fuel your journey.
  </p>
  <Link href="/CreateAccount">
    <button className={styles.thirdHomePageButton}>Sign Up Now 🚀</button>
  </Link>
</div>

<div className={styles.fourthHomepageSection}>
  <div className={styles.newaddedContentSection}>
    <h4>Claim Your $20 in Free Fantasy Combat Tokens</h4>
    <p>
      Looking to dive into the high-stakes world of <strong>fantasy MMA</strong>? Now’s your chance to get started with a bang. Sign up today and receive <strong>$20 worth of free combat tokens</strong> instantly. These tokens are your entry point into a high-energy world of fantasy fight action, where you can build lineups, join contests, and start scoring without spending a dime. Whether you're a seasoned fantasy player or completely new to <strong>UFC fantasy leagues</strong>, this bonus gives you the competitive edge you need to jump into weekly battles, test your predictions, and aim for the top of the leaderboard from day one. No credit card. No delay. Just sign up, claim your free bonus, and get ready to enter the cage.
    </p>
  </div>

  <div className={styles.newaddedContentSection}>
    <h4>What Is Fantasy Combat Sports?</h4>
    <p>
      Fantasy combat sports is where fight fans become players. Much like fantasy football, you create your lineup of fighters, make strategic predictions based on real-life matches, and score points based on how your chosen athletes perform. But unlike traditional fantasy sports, this arena includes not only MMA but also <strong>Boxing</strong>, <strong>Kickboxing</strong>, and even <strong>Bare Knuckle Fighting</strong>. That means more variety, more matchups, and more ways to win. Instead of passively watching fights, you actively engage with them — tracking stats, making matchup decisions, and adjusting strategies. The result? A deeper, more immersive experience that puts you in the middle of the action and rewards your knowledge and instinct.
    </p>
  </div>

  <div className={styles.newaddedContentSection}>
    <h4>Why Play on Fantasy MMA Madness?</h4>
    <p>
      Fantasy MMA Madness is more than just another platform — it's a community and a proving ground. From casual fans to expert-level strategists, our platform offers layers of gameplay that keep every contest exciting. Explore options like <strong>daily fantasy MMA</strong> picks, full card predictions, and even long-term league formats. You can build your dream team using fighters from major organizations and compete in weekly tournaments for real prizes. And for those chasing the leaderboard, every accurate prediction and smart draft decision brings you closer to major bragging rights and top-tier rewards. It’s a playground for strategy, luck, and everything in between — tailor-made for fans who live and breathe the fight game.
    </p>
  </div>

  <div className={styles.newaddedContentSection}>
    <h4>The Thrill of Combat Meets Strategic Gameplay</h4>
    <p>
      Every fantasy matchup is more than a game — it's a chess match layered with adrenaline. When the cage door closes and the real fight begins, your choices as a fantasy manager get tested in real time. Did you choose a striker with knockout power or a grappler with a gas tank for days? Did you go with a rising star or a proven champion? In <strong>MMA fantasy</strong> contests, every punch, submission attempt, and decision win can swing your score. It's not just the thrill of watching a fight — it’s the thrill of watching your picks either climb the ranks or fall short, all based on your insight and preparation. It's fantasy combat evolved, and it's unlike anything else in sports entertainment.
    </p>
  </div>

  <div className={styles.newaddedContentSection}>
    <h4>How It Works</h4>
    <p>
      Getting started is easy. First, create a free account and instantly receive your <strong>$20 in fantasy tokens</strong>. Then, build your ideal fight card by selecting your favorite athletes from upcoming real-world events. Once your lineup is locked in, enter into one of our weekly contests — whether you’re looking for beginner-friendly competitions or high-stakes brawls. As your selected fighters perform, your fantasy score updates in real time. The better they do — knockouts, takedowns, wins — the more points you earn. Compete against friends or the broader <strong>fantasy fight league</strong> community and cash in on your combat IQ. It's straightforward, rewarding, and packed with action every step of the way.
    </p>
  </div>

  <div className={styles.newaddedContentSection}>
    <h4>Join a Growing Community of Fight Fans</h4>
    <p>
      Fantasy MMA Madness isn’t just a platform — it’s a rapidly expanding universe of passionate fans. Our players come from all backgrounds, united by one thing: a love for combat sports. Inside our platform, you’ll find forums to discuss picks, leaderboards that display the top tacticians, and community contests where upsets and surprises rule the day. Whether you’re into <strong>MMA DFS</strong>, just starting with <strong>UFC DraftKings picks</strong>, or want to sharpen your fantasy scoring, you’ll find a home here. Connect, compete, and grow with thousands of other players who are just as hyped for the next big card as you are.
    </p>
  </div>

  <div className={styles.newaddedContentSection}>
    <h4>Don’t Just Watch the Fight — Be a Part of It</h4>
    <p>
      Watching from the sidelines is fine — but being in the action is better. Fantasy MMA Madness lets you transform every pay-per-view, every fight night, and every undercard brawl into a personal opportunity to win. With tools like <strong>UFC DraftKings picks</strong>, <strong>lineup optimizers</strong>, and historical performance stats, you’ll have everything you need to strategize and succeed. The best part? The action doesn't end when the fight does. Weekly contests, season-long leagues, and surprise rewards mean there's always another challenge around the corner. So why just watch when you can win? Build your team, make your picks, and let the battles begin.
    </p>
  </div>

  <div className={styles.newaddedContentSection}>
    <h4>Start Playing Now — Your Fantasy Fight Journey Begins Here</h4>
    <p>
      If you're ready to turn your fight night passion into fantasy dominance, now is the perfect time to jump in. With a $20 token bonus, multiple contest formats, and a platform optimized for both desktop and mobile, Fantasy MMA Madness delivers the full package. Whether you're into fast-paced <strong>DFS MMA</strong> or want to experiment with <strong>fantasy UFC picks today</strong>, you’ll find options that match your playstyle and intensity level. Don't miss another chance to earn rewards while watching the sports you love. Register today, create your first lineup, and make your mark in the growing world of <strong>fantasy combat sports</strong>.
    </p>
  </div>
</div>



  </>
  );
};

export default Home;
