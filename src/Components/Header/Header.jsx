import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Redux/authSlice';
import { logoutAffiliate } from '../../Redux/affiliateAuthSlice';
import Logo from "../../Assets/logo.png";
import "./Header.module.css";
import Link from "next/link"; 
import { toast } from 'react-toastify';
import Image from "next/image";
import WinImg from "../../Assets/promotional-banner-home-removebg-preview.png";
import { useRouter } from 'next/router';

const Header = () => {
  const affiliate = useSelector((state) => state.affiliateAuth.userAffiliate);
  const router = useRouter();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { isAuthenticatedAffiliate } = useSelector((state) => state.affiliateAuth);
  const submenuRef = useRef(null);
  const { pathname } = router || {}; // Ensure it never crashes
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [showPromotion, setShowPromotion] = useState(false);
  
  // Removed "hydrated" state so that on SSR the header is rendered by default.
  
  const handleClose = () => {
    setIsVisible(false);
  };

  const [authStatusSponsor, setAuthStatusSponsor] = useState(null);
  
  // Set authStatusSponsor on client-side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setAuthStatusSponsor(localStorage.getItem("isSponsorAuthenticated") === "true");
    }
  }, []);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPromotion(true);
    }, 1000); // 1-second delay

    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    if (submenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [submenuOpen]);

  const isFightsActive =
    pathname?.startsWith('/upcomingfights') ||
    pathname?.startsWith('/blogs') ||
    pathname?.startsWith('/blog-details') ||
    pathname?.startsWith('/past-fights') ||
    pathname?.startsWith('/YourFights') ||
    pathname?.startsWith('/calendar-of-fights') ||
    pathname?.startsWith('/our-fighters');

  const toggleSubmenu = () => {
    setSubmenuOpen(prev => !prev);
  };

  const handleClickOutside = (event) => {
    if (submenuRef.current && !submenuRef.current.contains(event.target)) {
      setSubmenuOpen(false);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Successfully logged out 👋");
    router.push('/');
  };

  const handleLogoutAffiliate = () => {
    dispatch(logoutAffiliate());
    toast.success("Successfully logged out 👋");
    router.push('/');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLogoutSponsor = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem('isSponsorAuthenticated');
      localStorage.removeItem('sponsorData');
    }
  };

  // Determine header style (default is public header when no auth info is available)
  const shouldRenderScrollingText =
    !isAuthenticated &&
    !isAuthenticatedAffiliate &&
    !pathname?.includes('/administration') &&
    !authStatusSponsor &&
    !pathname?.toLowerCase().includes('affiliate') &&
    !pathname?.toLowerCase().includes('shadow');

  const headerStyles = shouldRenderScrollingText
    ? { top: '52px' }
    : { top: '0' };

  return (
    <>
      { shouldRenderScrollingText && (
        <Link href="/CreateAccount" style={{ textDecoration: 'none' }}>
          <div className="scrolling-text-container">
            <div className="scrolling-text-inner" style={{ '--marquee-speed': '20s', '--direction': 'scroll-left' }} role="marquee">
              <div className="scrolling-text">
                <div className="scrolling-text-item">
                  🤑  Signup, Get $20 instantly &nbsp;🚀&nbsp; Sign up now, get 20 tokens free &nbsp;🎁&nbsp; Play Now and Win $10,000 &nbsp;🤑
                </div>
                <div className="scrolling-text-item">
                  Signup, Get $20 instantly&nbsp; 🚀&nbsp; Sign up now, get 20 tokens free&nbsp; 🎁&nbsp; Play Now and Win $10,000&nbsp; 🤑
                </div>
                <div className="scrolling-text-item">
                  Signup, Get $20 instantly&nbsp; 🚀&nbsp; Sign up now, get 20 tokens free&nbsp; 🎁&nbsp; Play Now and Win $10,000&nbsp; 🤑
                </div>
              </div>
            </div>
          </div>
        </Link>
      )}

      {showPromotion && isVisible && shouldRenderScrollingText && (
        <div className="container-promotion-absolute-center">
          <div className="close-button" onClick={handleClose}>✖</div>
          <div className='imgpromotionContainer'>
            <Image src={WinImg} alt="winimg" className="promotion-image-in-header" />
          </div>
          <Link href="/CreateAccount" onClick={handleClose}>
            <button className="signup-button">Sign up Now</button>
          </Link>
          <p>
            Don’t miss your shot at the ultimate prize – a massive <strong>$10,000</strong> is up for grabs!
            Join the action now and claim your chance to win big!
          </p>
        </div>
      )}

      {/* Default: Always render a header so it appears in the page source */}
      {isAuthenticatedAffiliate ? (
        <div className="header user-header" style={headerStyles}>
          <div className="logoimg">
            <Link href="/">
              <Image src={Logo} alt="Logo" className="logoimageactual" />
            </Link>
          </div>
          <div className="anchorLinksWrapper">
            <Link href="/AffiliateDashboard" className={`anchorlinks ${pathname === "/AffiliateDashboard" ? "activeLink" : ""}`}>Fights</Link>
            <Link href="/HowItWorks" className={`anchorlinks ${pathname === "/HowItWorks" ? "activeLink" : ""}`}>How it works</Link>
            <Link href="/affiliate-league" className={`anchorlinks ${pathname === "/affiliate-league" ? "activeLink" : ""}`}>My League</Link>
            <Link href="/past-promotions" className={`anchorlinks ${pathname === "/past-promotions" ? "activeLink" : ""}`}>Past Promotions</Link>
            <Link href="/AffiliateProfile" className={`anchorlinks ${pathname === "/AffiliateProfile" ? "activeLink" : ""}`}>Profile</Link>
            <Link href="/AffiliatePromotion" className={`anchorlinks ${pathname === "/AffiliatePromotion" ? "activeLink" : ""}`}>Insights</Link>
            <Link href="/affiliate-guides" className={`anchorlinks ${pathname === "/affiliate-guides" ? "activeLink" : ""}`}>Guides</Link>
            <Link href="/" onClick={handleLogoutAffiliate} className="anchorlinks">Logout</Link>
          </div>
          <div className="affiliateAccountShow">
            <div className="affiliate-image">
              {affiliate && affiliate.profileUrl && (<img src={affiliate.profileUrl} alt="Logo" />)}
            </div>
            {affiliate && affiliate.firstName && (<h3>{affiliate.firstName}</h3>)}
          </div>
          <div className="menuIconFont" onClick={toggleMenu}>
            <i className="fa fa-bars"></i>
          </div>
        </div>
      ) : isAuthenticated ? (
        <div className="header user-header">
          <div className="logoimg">
            <Link href="/">
              <Image src={Logo} alt="Logo" className="logoimageactual" />
            </Link>
          </div>
          <div className="anchorLinksWrapper">
            <Link
              href="#"
              className={`anchorlinks fightsubmenu ${isFightsActive ? 'activeLink' : ''}`}
              onClick={toggleSubmenu}
              ref={submenuRef}
            >
              Fights
              <div
                className={`submenu ${submenuOpen ? 'submenuOpen' : 'submenuClosedclass'}`}
                style={{ pointerEvents: submenuOpen ? 'auto' : 'none' }}
              >
                <Link href="/upcomingfights" className="submenuLink">Upcoming Fights</Link>
                <Link href="/past-fights" className="submenuLink">Past Fights</Link>
                <Link href="/YourFights" className="submenuLink">Your Fights</Link>
                <Link href="/our-fighters" className="submenuLink">Our Fighters</Link>
              </div>
            </Link>
            <Link href="/leaderboard" className={`anchorlinks ${pathname === "/leaderboard" ? "activeLink" : ""}`}>Leaderboard</Link>
            <Link href="/myLeagueRecords" className={`anchorlinks ${pathname === "/myLeagueRecords" ? "activeLink" : ""}`}>Leagues</Link>
            <Link href="/profile" className={`anchorlinks ${pathname === "/profile" ? "activeLink" : ""}`}>Profile</Link>
            <Link href="/community-forum" className={`anchorlinks ${pathname === "/community-forum" ? "activeLink" : ""}`}>Community</Link>
            <Link href="/guides" className={`anchorlinks ${pathname === "/guides" ? "activeLink" : ""}`}>Guides</Link>
          </div>
          <div className="sideLinkswrap">
            <Link href="/UserDashboard" className={`sideLinks ${pathname === "/UserDashboard" ? "activeLink" : ""}`}>
              Dashboard
            </Link>
            <button onClick={handleLogout} className="sideLinks logoutButton" style={{ background: 'transparent', border: 'none', outline: 'none' }}>
              <i className="fa fa-sign-out" aria-hidden="true"></i> Logout
            </button>
          </div>
          <div className="menuIconFont" onClick={toggleMenu}>
            <i className="fa fa-bars"></i>
          </div>
        </div>
      ) : authStatusSponsor ? (
        <div className="header public-header" style={headerStyles}>
          <div className="logoimg">
            <Link href="/">
              <Image src={Logo} alt="Logo" className="logoimageactual" />
            </Link>
          </div>
          <div className="anchorLinksWrapper">
            <Link href="/home" className={`anchorlinks ${pathname === "/home" ? "activeLink" : ""}`}>Home</Link>
            <Link href="/playforfree" className={`anchorlinks ${pathname === "/playforfree" ? "activeLink" : ""}`}>Play for free</Link>
            <Link href="/community-forum" className={`anchorlinks ${pathname === "/community-forum" ? "activeLink" : ""}`}>Community</Link>
            <Link
              className={`anchorlinks fightsubmenu ${isFightsActive ? 'activeLink' : ''}`}
              onClick={toggleSubmenu}
              ref={submenuRef}
              href="#"
            >
              Fights
              <div
                className={`submenu ${submenuOpen ? 'submenuOpen' : 'submenuClosedclass'}`}
                style={{ pointerEvents: submenuOpen ? 'auto' : 'none' }}
              >
                <Link href="/upcomingfights" className="submenuLink">Upcoming Fights</Link>
                <Link href="/past-fights" className="submenuLink">Past Fights</Link>
                <Link href="/our-fighters" className="submenuLink">Our Fighters</Link>
                <Link href="/past-fights-records" className="submenuLink">Past Fights Videos</Link>
                <Link href="/fights-rewards" className="submenuLink">Fight Rewards</Link>
                <Link href="/fights-news" className="submenuLink">Fight News</Link>
                <Link href="/blogs" className="submenuLink">Fight Blogs</Link>
              </div>
            </Link>
            <Link href="/Sponsors" className={`anchorlinks ${pathname === "/Sponsors" ? "activeLink" : ""}`}>Sponsors</Link>
            <Link href="/faqs" className={`anchorlinks ${pathname === "/faqs" ? "activeLink" : ""}`}>Faqs</Link>
          </div>
          <div className="sideLinkswrap">
            <Link className="joinNowBtn" href="/login" onClick={handleLogoutSponsor}>Logout</Link>
          </div>
          <div className="menuIconFont" onClick={toggleMenu}>
            <i className="fa fa-bars"></i>
          </div>
        </div>
      ) : (
        <div className="header public-header" style={headerStyles}>
          <div className="logoimg">
            <Link href="/">
              <Image src={Logo} alt="Logo" className="logoimageactual" />
            </Link>
          </div>
          <div className="anchorLinksWrapper">
            <Link href="/home" className={`anchorlinks ${pathname === "/home" ? "activeLink" : ""}`}>Home</Link>
            <Link href="/playforfree" className={`anchorlinks ${pathname === "/playforfree" ? "activeLink" : ""}`}>Play for free</Link>
            <Link href="/community-forum" className={`anchorlinks ${pathname === "/community-forum" ? "activeLink" : ""}`}>Community</Link>
            <Link
              className={`anchorlinks fightsubmenu ${isFightsActive ? 'activeLink' : ''}`}
              onClick={toggleSubmenu}
              ref={submenuRef}
              href="#"
            >
              Fights
              <div
                className={`submenu ${submenuOpen ? 'submenuOpen' : 'submenuClosedclass'}`}
                style={{ pointerEvents: submenuOpen ? 'auto' : 'none' }}
              >
                <Link href="/calendar-of-fights" className="submenuLink">Fight Calendar</Link>
                <Link href="/upcomingfights" className="submenuLink">Upcoming Fights</Link>
                <Link href="/past-fights" className="submenuLink">Past Fights</Link>
                <Link href="/our-fighters" className="submenuLink">Our Fighters</Link>
                <Link href="/past-fights-records" className="submenuLink">Past Fights Videos</Link>
                <Link href="/fights-rewards" className="submenuLink">Fight Rewards</Link>
                <Link href="/fights-news" className="submenuLink">Fight News</Link>
                <Link href="/global-leaderboard" className="submenuLink">Fighters Leaderboard</Link>
                <Link href="/spin-wheel" className="submenuLink">Spin the Wheel</Link>
                <Link href="/blogs" className="submenuLink">Fight Blogs</Link>
              </div>
            </Link>
            <Link href="/Sponsors" className={`anchorlinks ${pathname === "/Sponsors" ? "activeLink" : ""}`}>Sponsors</Link>
            <Link href="/faqs" className={`anchorlinks ${pathname === "/faqs" ? "activeLink" : ""}`}>Faqs</Link>
            <Link href="/login" className={`anchorlinks ${pathname === "/login" ? "activeLink" : ""}`}>Login</Link>
          </div>
          <div className="sideLinkswrap">
            <Link href="/CreateAccount" className="joinNowBtn">Sign Up Now</Link>
          </div>
          <div className="menuIconFont" onClick={toggleMenu}>
            <i className="fa fa-bars"></i>
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      <div className={`mobileMenu ${menuOpen ? 'active' : ''}`}>
        <div className="closeMenuIcon" onClick={toggleMenu}>
          <i className="fa fa-times"></i>
        </div>
        <div className="logoimg">
          <Link href="/" onClick={closeMenu}>
            <center>
              <Image src={Logo} alt="Logo" className="logoimageactual" />
            </center>
          </Link>
        </div>
        <div className="menuContent">
          <div className="anchorLinksWrapper">
            {isAuthenticatedAffiliate ? (
              <>
                <Link href="/AffiliateDashboard" className="anchorlinks" onClick={closeMenu}>Fights</Link>
                <Link href="/affiliate-league" className="anchorlinks" onClick={closeMenu}>My League</Link>
                <Link href="/past-promotions" className="anchorlinks" onClick={closeMenu}>Past Promotions</Link>
                <Link href="/HowItWorks" className="anchorlinks" onClick={closeMenu}>How it works</Link>
                <Link href="/AffiliateProfile" className="anchorlinks" onClick={closeMenu}>Profile</Link>
                <Link href="/AffiliatePromotion" className="anchorlinks" onClick={closeMenu}>Insights</Link>
                <Link href="/affiliate-guides" className="anchorlinks" onClick={closeMenu}>Guides</Link>
                <button onClick={() => { handleLogoutAffiliate(); closeMenu(); }} className="anchorlinks logoutButton" style={{ background: 'transparent', border: 'none', outline: 'none' }}>
                  <i className="fa fa-sign-out" aria-hidden="true"></i> Logout
                </button>
                <div className="affiliateAccountShow affiliateAccountShowMob">
                  <div className="affiliate-image">
                    {affiliate && affiliate.profileUrl && (<img src={affiliate.profileUrl} alt="Logo" />)}
                  </div>
                  {affiliate && affiliate.firstName && (<h3>{affiliate.firstName}</h3>)}
                </div>
              </>
            ) : isAuthenticated ? (
              <>
                <Link href="/YourFights" className="anchorlinks" onClick={closeMenu}>Your Fights</Link>
                <Link href="/leaderboard" className="anchorlinks" onClick={closeMenu}>Leaderboard</Link>
                <Link href="/myLeagueRecords" className="anchorlinks" onClick={closeMenu}>Leagues</Link>
                <Link href="/profile" className="anchorlinks" onClick={closeMenu}>Profile</Link>
                <Link href="/guides" className="anchorlinks mobileAnchorLinks" onClick={closeMenu}>Guides</Link>
                <Link href="/community-forum" className="anchorlinks" onClick={closeMenu}>Community</Link>
                <Link href="/UserDashboard" className="anchorlinks" onClick={closeMenu}>Dashboard</Link>
                <button onClick={() => { handleLogout(); closeMenu(); }} className="anchorlinks logoutButton" style={{ background: 'transparent', border: 'none', outline: 'none' }}>
                  <i className="fa fa-sign-out" aria-hidden="true"></i> Logout
                </button>
              </>
            ) : authStatusSponsor ? (
              <>
                <Link href="/home" className="anchorlinks" onClick={closeMenu}>Home</Link>
                <Link href="/playforfree" className="anchorlinks" onClick={closeMenu}>Play for free</Link>
                <Link href="/community-forum" className="anchorlinks" onClick={closeMenu}>Community</Link>
                <Link href="/upcomingfights" className="anchorlinks" onClick={closeMenu}>Upcoming Fights</Link>
                <Link href="/past-fights" className="anchorlinks" onClick={closeMenu}>Past Fights</Link>
                <Link href="/Sponsors" className="anchorlinks mobileAnchorLinks" onClick={closeMenu}>Sponsors</Link>
                <Link href="/login" className="anchorlinks" onClick={handleLogoutSponsor}>
                  <i className="fa fa-sign-in" aria-hidden="true"></i> Logout
                </Link>
              </>
            ) : (
              <>
                <Link href="/home" className="anchorlinks mobileAnchorLinks" onClick={closeMenu}>Home</Link>
                <Link href="/playforfree" className="anchorlinks mobileAnchorLinks" onClick={closeMenu}>Play for free</Link>
                <Link href="/community-forum" className="anchorlinks mobileAnchorLinks" onClick={closeMenu}>Community</Link>
                <Link href="/upcomingfights" className="anchorlinks mobileAnchorLinks" onClick={closeMenu}>Upcoming Fights</Link>
                <Link href="/CreateAccount" className="anchorlinks mobileAnchorLinks" onClick={closeMenu}>Create account</Link>
                <Link href="/past-fights" className="anchorlinks mobileAnchorLinks" onClick={closeMenu}>Past Fights</Link>
                <Link href="/our-fighters" className="anchorlinks mobileAnchorLinks" onClick={closeMenu}>Our Fighters</Link>
                <Link href="/past-fights-records" className="anchorlinks mobileAnchorLinks" onClick={closeMenu}>Past Fights Videos</Link>
                <Link href="/fights-rewards" className="anchorlinks mobileAnchorLinks" onClick={closeMenu}>Fight Rewards</Link>
                <Link href="/fights-news" className="anchorlinks mobileAnchorLinks" onClick={closeMenu}>Fight News</Link>
                <Link href="/spin-wheel" className="anchorlinks mobileAnchorLinks" onClick={closeMenu}>Spin the Wheel</Link>
                <Link href="/calendar-of-fights" className="anchorlinks mobileAnchorLinks" onClick={closeMenu}>Fight Calendar</Link>
                <Link href="/blogs" className="anchorlinks mobileAnchorLinks" onClick={closeMenu}>Fight Blogs</Link>
                <Link href="/Sponsors" className="anchorlinks mobileAnchorLinks" onClick={closeMenu}>Sponsors</Link>
                <Link href="/login" className="anchorlinks mobileAnchorLinks" onClick={closeMenu}>
                  <i className="fa fa-sign-in" aria-hidden="true"></i> Login
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
