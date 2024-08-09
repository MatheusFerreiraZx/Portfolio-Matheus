import React from "react";
import Skills from "./Skills";

const About = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-text-secondary mb-4">
          I'm a Brazilian Software Engineer specializing in iOS App Development
          with Swift, utilizing frameworks such as SwiftUI and UIKit. I also
          have experience in creating web applications using ReactJS, NextJS,
          and TailwindCSS.
          <p>
            {" "}
            In my career, I've worked at a large company where I handled massive
            data and developed high-impact applications used by over 100 million
            users. I excel in creating user-friendly applications, enhancing
            performance, and integrating complex features. My strong
            communication skills and ability to build quick connections help me
            thrive in collaborative environments. Driven by curiosity and a love
            for challenges, I am always eager to learn and grow.{" "}
          </p>
          Outside of work, I am passionate about technology and soccer. I enjoy
          reading, working out at the gym, playing video games, and watching
          soccer matches. I'm always up for a good conversation and am fluent in
          both English and Portuguese.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <Skills />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">BEMOBI</h3>
          <h4 className="text-lg">Software Engineer</h4>
          <p className="text-sm text-text-secondary">2022 - 2024</p>
          <p className="mt-2">
            <ul class="list-disc pl-5">
              <li>
                High-Impact Applications: Contributed to the development and
                enhancement of applications used by over 100 million users, with
                a focus on delivering seamless, user-friendly experiences.
              </li>
              <li>
                iOS Expertise: Leveraged Swift, UIKit, and SwiftUI to improve
                and maintain iOS applications, ensuring high performance and
                user satisfaction.
              </li>
              <li>
                PWA Development: Designed and built Progressive Web Apps (PWAs)
                for Brazilian telecom operators, delivering a mobile-like
                experience that optimized user interaction.
              </li>
              <li>
                Feature Integration: Successfully integrated complex features,
                such as mobile recharge within the TikTok app, through
                collaboration with external telecom partners, enhancing
                functionality and user engagement.
              </li>
              <li>
                Mentorship & Team Collaboration: Guided new interns and
                supported their onboarding, while actively participating in
                Scrum and Kanban processes, contributing to task management and
                team communication.
              </li>
              <li>
                Performance & Observability: Utilized observability tools to
                monitor and maintain application health, ensuring a consistently
                positive user experience.
              </li>
            </ul>
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <div>
          <h3 className="text-xl font-semibold">
            CENTRO UNIVERSITÁRIO INTERNACIONAL UNINTER
          </h3>
          <p className="text-sm text-text-secondary">2023 - Present</p>
          <p className="mt-2">
            <p>Associate's Degree in Analysis and Systems Development.</p>I was
            General monitor for technology courses at Uninter College, including
            Computer Science, Software Engineering, Computer Engineering, System
            Analysis and Development, and Mobile Development.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
