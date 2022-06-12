<script>
import { GChart } from "vue-google-charts";

export default {
  data() {
    return {
      skillsData: [
        ["Skill", "Years Used"],
        [".NET", 4.5],
        ["AJAX", 3],
        ["Android Application - Java", 0.8],
        ["AWS", 0.5],
        ["C#", 4.5],
        ["CSS", 4.5],
        ["HTML", 4.5],
        ["iOS - Swift", 0.3],
        ["Java", 1],
        ["JavaScript", 4.5],
        ["JQuery", 3],
        ["JSON", 3],
        ["Microsoft SQL Server", 4.5],
        ["MS-Exchange", 1],
        ["Oracle DB", 1],
        ["Python", 1],
        ["R", 0.5],
        ["SCSS", 3],
        ["Vue.js", 1.2],
        ["XML", 3],
      ],
      toolsData: [
        ["Tool", "Years Used"],
        ["Android Studio", 0.8],
        ["AppVeyor", 2.5],
        ["Azure DevOps Server", 2.5],
        ["DBeaver", 1.2],
        ["Exchange Powershell", 1],
        ["Git", 3],
        ["Google Colab", 1],
        ["Jira", 1.2],
        ["QlikView", 0.3],
        ["SQL Developer", 0.5],
        ["SQL Server Management Studio", 4.5],
        ["SVN", 1.2],
        ["Visual Studio", 4.5],
        ["Visual Studio Code", 3.5],
        ["XCode", 0.3],
        ["Zeplin", 2.5],
      ],
      skillsOptions: {
        height: 600,
        colors: ["#61718A"],
      },
      toolsOptions: {
        height: 500,
        colors: ["#8C97A9"],
      },
    };
  },
  components: {
    GChart,
  },
};
</script>

<template>
  <div class="profile">
    <div class="personal-info">
      <h1 id="name">Yuliana Y. Shin</h1>
      <h2 id="position">Full Stack Web Developer</h2>
      <ul id="details">
        <li>4+ years experience in Web Development</li>
        <li>
          Experienced in IT solution, Insurance Brokerage, and Media Industry
        </li>
        <li>Master of Engineering (Computer Engineering)</li>
        <li>Arriving in Vancouver on June 23rd</li>
      </ul>
      <ul id="contacts">
        <li>
          <a href="mailto:yulianashin613@gmail.com">yulianashin613@gmail.com</a>
        </li>
        <li>
          <a href="https://github.com/galaxyuliana">https://github.com/galaxyuliana</a>
        </li>
      </ul>
    </div>
    <div class="about-me">
      Hello, My name is Yuliana Y. Shin.<br />
      I'm a full stack developer who can handle both frontend and backend.<br />
      I have worked as a .NET web developer in Korea for over 4 years,
      and I will be arriving in Vancouver on June 23rd to start a new chapter in life.<br />
      I am the one who is Responsible and Adaptable.
    </div>
    <div class="skills">
      <h2>Technical Skills</h2>
      <GChart type="BarChart" :data="skillsData" :options="skillsOptions" />
      <GChart type="BarChart" :data="toolsData" :options="toolsOptions" />
    </div>
    <div class="assessment">
      <h2>What I got from the Manager Assessment</h2>
      What are some things Yuliana does well?
      <ul>
        <li>Produce stable and reliable output with good quality control and very efficient in communication</li>
        <li>Clear and effective communication and reliable output</li>
        <li>Secure and detailed in analytic and testing</li>
        <li>Elaborate case analysis</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
#name {
  font-weight: bold;
}
#position {
  margin: 10px 0px;
}
#details {
  padding-inline-start: 20px;
}
#contacts {
  list-style: none;
  padding: 0px;
}
</style>
