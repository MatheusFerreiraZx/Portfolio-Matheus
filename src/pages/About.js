import React from "react";
import Skills from "./Skills";

const About = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <Skills />
      </section>

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
        <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">BEMOBI</h3>
          <h4 className="text-lg">Software Engineer</h4>
          <p className="text-sm text-text-secondary">2022 - 2024</p>
          <p className="mt-2">
            <ul class="list-disc pl-5">
              <li>
                Develop and enhance high-impact applications used by over 100
                million users.
              </li>
              <li>
                Participate in the development of a user-friendly web
                application for bill payments, ensuring a smooth user
                experience.
              </li>
              <li>
                Design and develop Progressive Web Apps (PWAs) to deliver a
                mobile-like experience for Brazilian telephone operators,
                optimizing user interaction.
              </li>
              <li>
                Demonstrate strong coding skills by migrating legacy application
                templates to a modern framework (React JS), improving code
                maintainability and efficiency.
              </li>
              <li>
                Collaborate effectively with external partners (telecom
                operators) to integrate a complex feature (mobile recharge)
                within the TikTok app, enhancing user functionality.
              </li>
              <li>
                Maintain the health and performance of critical applications by
                utilizing observability tools, ensuring a positive user
                experience.
              </li>
              <li>
                Teach new interns and support them in their initial tasks.
              </li>
              <li>
                Participate in the agile methodology adaptation process, using
                both Scrum and Kanban, scoring tasks, participating in
                refinements and reviews, and communicating with the product
                team.
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
