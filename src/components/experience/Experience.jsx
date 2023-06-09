import React from 'react'
import './experience.css'
import { Footer } from '../footer/Footer'

export const Experience = () => {
  return (
    <div className="experience">
      <h2>Welcome to my Experience page</h2>
      <p>
        I am Nji Dominion a Telecom engineer with one year of experience in
        Telecommunication. Over the years, I have had the opportunity to work on
        a variety of projects, from which have allowed me to develop my skills
        and expertise in telecommunications.<br></br>I have a passion for TECH,
        and I am committed to delivering high-quality work that meets the needs
        of my clients.<br/>Throughout my career, I have honed my skills in
        <hr />
        <ul>
          <li>MySQL</li>
          <li>Huawei</li>
          <li>Cisco Packet tracer </li>
        </ul>
        {/* <br /> */}
        and I have become an expert in Network configuration<br></br>. Each
        project is unique, and I take great pride in delivering work that is
        tailored to the specific needs of my clients. Thank you for visiting my
        experience page, and I look forward to hearing from you soon
      </p>

      <Footer />
    </div>
  );
}
