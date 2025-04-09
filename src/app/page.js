// src/app/page.js - Server Component
import React from "react";
import Image from "next/image";
import LoginForm from "../components/LoginForm";

export default function Home() {
  return (
    <React.Fragment>
      <div id="wrapper">
        <div className="container">
          <div className="phone-app-demo w-full" />
          <div className="form-data">
            <LoginForm />
            <div className="sign-up">
              Don&apos;t have an account? <a href="#">Sign up</a>
            </div>

            <div className="get-the-app">
              <span>Get the app</span>
              <div className="badge">
                <img
                  src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
                  alt="android App"
                />
                <img
                  src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
                  alt="ios app"
                />
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div className="container">
            <nav className="footer-nav">
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
                <li>
                  <a href="#">Jobs</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">Profiles</a>
                </li>
                <li>
                  <a href="#">Languages</a>
                </li>
              </ul>
            </nav>
            <div className="copyright-notice">&copy; 2019 Complaints</div>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
}
