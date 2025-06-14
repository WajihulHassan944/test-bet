"use client";
import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footerDistributed}>
      <div className={styles.footerLeft}>
        <Image
          src="https://res.cloudinary.com/dqi6vk2vn/image/upload/v1743079917/home/rtr4tmlkw82rmk1kywuc.webp"
          alt="Logo"
          width={70}
          height={70}
        />
        <p>2350 Beaver Ruin Rd, Norcross Georgia 30071</p>
        <p>
        <Image
  src="https://res.cloudinary.com/dqi6vk2vn/image/upload/v1744772242/home/n5zql2bybao3c7q82hi2.png"
  alt="Contact Email"
  width={200}
  height={25}
  className={styles.contactImg}
/>

        </p>
        <p className={styles.footerCompanyName}>Fantasy Mmadness © 2025</p>
      </div>

      <div className={styles.footerCenter}>
        <p className={styles.footerLinks}>
          <Link href="/referral-leaderboard" className={styles.footerLink}>
            Referral Leaderboard
          </Link>
        
          <Link href="/terms-of-service" className={styles.footerLink}>
            Terms of service
          </Link>
          <Link href="/privacy-policy" className={styles.footerLink}>
            Privacy policy
          </Link>
          <Link href="/testimonials" className={styles.footerLink}>
            Testimonials
          </Link>
          <Link href="/contact" className={styles.footerLink}>
            Contact
          </Link>
        </p>
      </div>

      <div className={styles.footerRight}>
        <p className={styles.footerCompanyAbout}>
          <span>About Fantasy Mmadness LLC</span>
          Fantasy Mmadness LLC is a company dedicated to creating engaging
          fantasy sports experiences for fans.{" "}
          <Link href="/about" style={{ textDecoration: "none" }}>
            view more
          </Link>
        </p>

        <div className={styles.footerIcons}>
          <a
            href="https://www.facebook.com/fantasymmadness" // <-- Use actual page URL
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: "transparent" }}
          >
            <Image
              src="https://res.cloudinary.com/dqi6vk2vn/image/upload/v1744520491/home/sdypowaaa41si4blo55j.png"
              alt="Facebook"
              style={{ objectFit: "cover", borderRadius: "50%" }}
              width={40}
              height={40}
            />
          </a>

          <a
            href="https://www.instagram.com/fantasymmadness"
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: "transparent" }}
          >
            <Image
              src="https://res.cloudinary.com/dqi6vk2vn/image/upload/v1744520538/home/f4jdp7xacrjykuamdtrr.png"
              alt="Instagram"
              width={40}
              height={40}
              style={{ objectFit: "cover", borderRadius: "50%" }}
            />
          </a>

          <a
            href="https://x.com/davis_kell51697"
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: "transparent" }}
          >
            <Image
              src="https://res.cloudinary.com/dqi6vk2vn/image/upload/v1744520575/home/okbosgyxz2el7kqdrtlb.png"
              alt="Twitter (X)"
              width={40}
              height={40}
              style={{ objectFit: "cover", borderRadius: "50%" }}
            />
          </a>

          <a
            href="https://www.tiktok.com/@fantasy.mmadness"
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: "transparent" }}
          >
            <Image
              src="https://res.cloudinary.com/dqi6vk2vn/image/upload/v1744520574/home/eywwmlypt3qlh0btknoc.png"
              alt="Tiktok"
              width={40}
              height={40}
              style={{ objectFit: "cover", borderRadius: "50%" }}
            />
          </a>

<a
  href="https://www.youtube.com/@FantasyMMadness"
  target="_blank"
  rel="noopener noreferrer"
  style={{ background: "transparent" }}
>
  <Image
    src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
    alt="YouTube"
    width={40}
    height={40}
    style={{ objectFit: "cover", marginLeft:'3px'}}
  />
</a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
