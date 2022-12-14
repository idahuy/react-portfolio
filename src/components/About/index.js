import React from "react";
import profileImage from "../../assets/about/Profile_Pic.jpg";
function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src={profileImage} style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
            Hello, my name is Huy. I am a Full-Stack Web developer
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;