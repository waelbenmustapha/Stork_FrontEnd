import React from 'react';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div
      class="container-fluid"
      style={{
        backgroundColor: "#eaeaea",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {" "}
      <output
        style={{
          borderColor: "#eaeaea",
        }}
      >
        <footer class="section-footer border-top">
          <div class="container-fluid">
            <section class="footer-top padding-y">
              <div class="row">
                <aside class="col-md-4">
                  <article class="mr-3">
                    <div>
                      <h1
                        style={{
                          marginLeft: "50px",
                          fontSize:'18px'
                        }}
                      >
                        RETROUVEZ-NOUS SUR
                      </h1>
                      <p className="social-container">
                        <a
                          href="https://www.youtube.com/c/jamesqquick"
                          className="youtube social"
                        >
                          <FontAwesomeIcon icon={faYoutube} size="2x" />
                        </a>
                        <a
                          href="https://www.facebook.com/learnbuildteach/"
                          className="facebook social"
                        >
                          <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                        <a
                          href="http://www.instagram.com/larnbuildteach"
                          className="instagram social"
                        >
                          <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                        <a
                          href="https://wwww.twitter.com"
                          className="twitter social"
                        >
                          <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </a>
                      </p>
                    </div>{" "}
                   
                  </article>
                </aside>
                <aside class="col-sm-3 col-md-2">
                  <h6 class="title">A PROPOS</h6>
                  <ul class="list-unstyled">
                    <li>
                      {" "}
                      <a href="#" data-abc="true">
                        About us
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#" data-abc="true">
                        Services
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#" data-abc="true">
                        Terms & Condition
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#" data-abc="true">
                        Our Blogs
                      </a>
                    </li>
                  </ul>
                </aside>
                <aside class="col-sm-3 col-md-2">
                  <h6 class="title">Services</h6>
                  <ul class="list-unstyled">
                    <li>
                      {" "}
                      <a href="#" data-abc="true">
                        Help center
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#" data-abc="true">
                        Money refund
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#" data-abc="true">
                        Terms and Policy
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#" data-abc="true">
                        Open dispute
                      </a>
                    </li>
                  </ul>
                </aside>
                <aside class="col-sm-3 col-md-2">
                  <h6 class="title">Pour les utilisateurs</h6>
                  <ul class="list-unstyled">
                    <li>
                      {" "}
                      <a href="#" data-abc="true">
                        {" "}
                        User Login{" "}
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#" data-abc="true">
                        {" "}
                        User register{" "}
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#" data-abc="true">
                        {" "}
                        Account Setting{" "}
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#" data-abc="true">
                        {" "}
                        My Orders{" "}
                      </a>
                    </li>
                  </ul>
                </aside>
                <aside class="col-sm-2 col-md-2">
                  <h6 class="title">Notre app</h6>{" "}
                  <a href="#" class="d-block mb-2" data-abc="true">
                    <img
                      class="img-responsive app"
                      src="https://i.imgur.com/nkZP7fe.png"
                      height="40"
                    />
                  </a>{" "}
                  <a href="#" class="d-block mb-2" data-abc="true">
                    <img
                      class="img-responsive app"
                      src="https://i.imgur.com/47q2YGt.png"
                      height="40"
                      width="123"
                    />
                  </a>
                </aside>
              </div>
            </section>
            <section class="footer-copyright border-top">
              <p class="float-left text-muted">
                {" "}
                © 2021 Stork All rights reserved{" "}
              </p>
              <p target="_blank" class="float-right text-muted">
                {" "}
                <a href="#" data-abc="true">
                  Privacy &amp; Cookies
                </a>{" "}
                &nbsp; &nbsp;{" "}
                <a href="#" data-abc="true">
                  Accessibility
                </a>{" "}
              </p>
            </section>
          </div>
        </footer>
      </output>{" "}
    </div>
  );
}

export default Footer;
