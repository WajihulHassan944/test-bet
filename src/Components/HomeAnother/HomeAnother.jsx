import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { stopMusic, playMusic } from '../../Redux/musicSlice';
import Link from 'next/link';
import ReactPlayer from 'react-player/lazy';
import Head from 'next/head';

const HomeAnother = () => {
  const dispatch = useDispatch();
  const howlerRef = useRef(null);
  const [buttonText, setButtonText] = useState('Send Message');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const currentSeek = howlerRef.current?.seek() || 0;
    dispatch(stopMusic(currentSeek));

    return () => {
      dispatch(playMusic());
    };
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Sending');
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const data = {
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('https://fantasymmadness-game-server-three.vercel.app/contact-us-fantasymmadness', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setButtonText('Sent');
        e.target.reset();
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      setButtonText('Send Message');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Fantasy Boxing League & Game | Fantasy-MMadness</title>
        <meta
          name="description"
          content="Join the ultimate fantasy boxing experience! Play our fantasy boxing game, climb the leaderboard, and compete in the most thrilling fantasy boxing league. Sign up free today!"
        />
        <meta
          name="keywords"
          content="fantasy boxing, fantasy boxing league, fantasy boxing game, combat sports fantasy, MMA fantasy games, play boxing fantasy game"
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

      <div className="homeFirstAnother">
        <h1 data-aos="zoom-out">Step Into The Madness</h1>
        <h3 data-aos="zoom-out">Unleash the fantasy</h3>
        <h2>of combat sports with Fantasy Boxing</h2>
      </div>

      <div className='homeSecondSectionAnother'>
        <h1 className='homeAnotherHeading'>Step into the <span>madness</span> of Fantasy Boxing</h1>
        <div className="video-embed-wrapperAnother">
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

      <div className='homeFourthAnother'>
        <div className='text-fourth'>
          <h1 className='homeAnotherHeading'>Our Leagues</h1>
          <p style={{ marginBottom: '30px' }}>
            Join the most exciting <strong>Fantasy Boxing League</strong> where your fight predictions turn into victory. Our leagues offer not just entertainment, but also the chance to win real rewards and rise through competitive ranks. Whether you're a seasoned boxing fan or a newcomer to fantasy games, our league has a place for you. Start building your fantasy boxing legacy today!
          </p>
          <center><Link href="/login" className='playNowLink'>Play Now!</Link></center>
        </div>
      </div>

      <div className='homeFifthAnother'>
        <div className='text-fifth'>
          <h1 className='homeAnotherHeading'>Leaderboard</h1>
          <p style={{ marginBottom: '30px' }}>
            Prove your skills in our <strong>fantasy boxing game</strong>! Predict fight outcomes, earn points for correct calls, and compete on the leaderboard to unlock top-tier rewards. Show your knowledge of boxing and dominate the fantasy boxing charts in our exclusive competitive environment.
          </p>
          <center><Link href="/login" className='playNowLink'>Play Now!</Link></center>
        </div>
      </div>

      <div className='homeFourthAnother homeFourthAnotherPatTwo'>
        <div className='text-fourth'>
          <h1 className='homeAnotherHeading'>The Ultimate Showcase: MMA</h1>
          <p style={{ marginBottom: '30px' }}>
            MMA, or mixed martial arts, combines boxing, Brazilian Jiu-Jitsu, Muay Thai, and wrestling for unmatched intensity. In our <strong>fantasy boxing game</strong>, you get the best of both boxing and MMA — predicting fights, tracking performance, and engaging in strategic gameplay. Experience a dynamic world of combat sports fantasy today.
          </p>
          <center><Link href="/login" className='playNowLink'>Play Now!</Link></center>
        </div>
      </div>

      <div className='homeFifthAnother homeFifthAnotherPartTwo'>
        <div className='text-fifth'>
          <h1 className='homeAnotherHeading'>Play For Free</h1>
          <p style={{ marginBottom: '30px' }}>
            Dive into the adrenaline-pumping world of <strong>Fantasy Boxing</strong> at Fantasy-MMadness — absolutely free! Play our <strong>fantasy boxing game</strong> with zero cost, perfect for beginners and pros alike. Make your picks, join leagues, and explore the power of strategic fantasy combat. Sign up today and see how you rank in the only <strong>Fantasy Boxing League</strong> that matters.
          </p>
          <center><Link href="/login" className='playNowLink'>Play Now!</Link></center>
        </div>
      </div>

      <div className='homeSecondSectionAnother'>
        <div className='contactWrapperHomeAnother'>
          <h2 data-aos="zoom-out">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="fullName" placeholder='NAME*' required />
            <input type="email" name="email" placeholder='EMAIL' required />
            <input type="text" name="subject" placeholder='SUBJECT' />
            <textarea name="message" placeholder='MESSAGE' required></textarea>
            <button type="submit" disabled={isSubmitting}>{buttonText}</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default HomeAnother;
