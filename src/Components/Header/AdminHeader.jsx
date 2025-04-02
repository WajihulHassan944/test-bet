import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import "./Header.module.css";
import { useRouter } from 'next/router';
import Link from 'next/link';
import { logoutAdmin } from '@/Redux/adminAuthSlice';

const AdminHeader = () => {
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const { pathname } = useRouter() || {}; // Ensure it never crashes
  const handleLogout = () => {
    dispatch(logoutAdmin());
    router.push('/'); // Redirect to admin login page after logout
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
    
      <div className='menuIconFontAdmin' onClick={toggleMenu}>
        <i className={menuOpen ? "fa fa-times" : "fa fa-bars"}></i>
      </div>
      
      <div className='adminLogo'>
        <img src="https://res.cloudinary.com/dqi6vk2vn/image/upload/v1743079917/home/rtr4tmlkw82rmk1kywuc.webp" alt="Logo" style={{width:'70px'}} />
      </div>

        <div className={`admin-header ${menuOpen ? 'activeAdmin' : 'activeNotAdmin'}`}>
          <div>
            <center>
              <div className='logoimg'>
                <Link href="/administration">
                  <img src="https://res.cloudinary.com/dqi6vk2vn/image/upload/v1743079917/home/rtr4tmlkw82rmk1kywuc.webp" alt="Logo" style={{width:'70px'}} />
                </Link>
              </div>
            </center>
            <div className='anchorLinksWrapperAdmin'>
              <h1 className='matchHeading' style={{fontSize:'21px', marginTop:'23px'}} >Matches</h1>
              <Link href="/administration/upcomingFights"    className={`anchorlinksAdmin ${pathname === "/administration/upcomingFights" ? "activeLinkAdmin" : ""}`}>Submit/View Scores</Link>
              <Link href="/administration/AddNewMatch" className={`anchorlinksAdmin ${pathname === "/administration/AddNewMatch" ? "activeLinkAdmin" : ""}`}>Create a Match</Link>
              <Link href="/administration/PreviousMatches" className={`anchorlinksAdmin ${pathname === "/administration/PreviousMatches" ? "activeLinkAdmin" : ""}`}>All / prev Matches</Link>
              <Link href="/administration/DeleteUpdateMatches" className={`anchorlinksAdmin ${pathname === "/administration/DeleteUpdateMatches" ? "activeLinkAdmin" : ""}`}>Delete/Update</Link>
              <Link href="/administration/Calendar" className={`anchorlinksAdmin ${pathname === "/administration/Calendar" ? "activeLinkAdmin" : ""}`}>Calandar of matches</Link>
              <Link href="/administration/ShadowFightsLibrary" className={`anchorlinksAdmin ${pathname === "/administration/ShadowFightsLibrary" ? "activeLinkAdmin" : ""}`}>Shadow Fights Library</Link>
              <Link href="/administration/YoutubeArchive" className={`anchorlinksAdmin ${pathname === "/administration/YoutubeArchive" ? "activeLinkAdmin" : ""}`}>Youtube Archive</Link>
              <Link href="/administration/Community" className={`anchorlinksAdmin ${pathname === "/administration/Community" ? "activeLinkAdmin" : ""}`}>Community Forum</Link>
              <Link href="/administration/faqs" className={`anchorlinksAdmin ${pathname === "/administration/faqs" ? "activeLinkAdmin" : ""}`}>Faqs</Link>
              <Link href="/administration/news" className={`anchorlinksAdmin ${pathname === "/administration/news" ? "activeLinkAdmin" : ""}`}>News</Link>
              <Link href="/administration/sponsors" className={`anchorlinksAdmin ${pathname === "/administration/sponsors" ? "activeLinkAdmin" : ""}`}>Sponsors</Link>
             
              <h1 className='matchHeading' style={{marginTop:'13px', fontSize:'21px'}}>Users</h1>
              <Link href="/administration/RegisteredUsers" className={`anchorlinksAdmin ${pathname === "/administration/RegisteredUsers" ? "activeLinkAdmin" : ""}`}>Registered Users</Link>
             {/* <Link href="/administration/SubscribedUsers" className={`anchorlinksAdmin ${pathname === "/administration/upcomingFights" ? "activeLinkAdmin" : ""}`}>Subscribed Users</Link>
             */} <Link href="/administration/AffiliateUsers" className={`anchorlinksAdmin ${pathname === "/administration/AffiliateUsers" ? "activeLinkAdmin" : ""}`}>Affiliate Users</Link>
              <Link href="/administration/Email" className={`anchorlinksAdmin ${pathname === "/administration/Email" ? "activeLinkAdmin" : ""}`}>Email Template</Link>
           
            </div>
          </div>

          <div className='sideLinkswrapAdmin'>
            <Link href="#" className="sideLinksAdmin" onClick={handleLogout}>
              <i className="fa fa-sign-out" aria-hidden="true"></i> Logout
            </Link>
          </div>
        </div>
    
    </div>
  );
};

export default AdminHeader;
