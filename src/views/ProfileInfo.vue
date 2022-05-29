<script>
import { GChart } from "vue-google-charts";

export default {
  data() {
    return {
      skillsData: [
        ["Year", "Usage"],
        [".NET", 5],
        ["C#", 5],
        ["Java", 1],
        ["HTML", 5],
        ["JavaScript", 5],
        ["JQuery", 3],
        ["XML", 4],
        ["MSSQL", 5],
        ["AJAX", 3],
        ["MS-Exchange", 1],
        ["Oracle DB", 1],
        ["JSON", 3],
        ["Vue.js", 1.2],
        ["Android Application - Java", 0.8],
        ["iOS - Swift", 0.3],
        ["AWS", 0.5],
        ["CSS", 5],
        ["SCSS", 3],
      ],
      toolsData: [
        ["Year", "Usage"],
        ["Jira", 1.3],
        ["SVN", 1.2],
        ["Visual Studio", 5],
        ["Visual Studio Code", 4],
        ["DBeaver", 1.2],
        ["SQL Developer", 0.8],
        ["Android Studio", 0.8],
        ["XCode", 0.3],
        ["Git", 3],
        ["SQL Server Management Studio", 5],
        ["Exchange Powershell", 1],
        ["Azure DevOps Server", 2.5],
        ["AppVeyor", 2.5],
        ["Zeplin", 2.5],
      ],
      skillsOptions: {
        chart: {
          title: "Skill sets",
          subtitle: "usage",
        },
        hAxis: {
          title: "Usage Years",
          minValue: 0,
        },
        vAxis: {
          title: "Skills",
        },
        height: 700,
      },
      toolsOptions: {
        chart: {
          title: "Skill sets",
          subtitle: "usage",
        },
        hAxis: {
          title: "Usage Years",
          minValue: 0,
        },
        vAxis: {
          title: "Tools",
        },
        height: 700,
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
        Hello, My name is Yuliana Y. Shin. I used to work as Full Stack Web Developer in Korea.
        Responsible, Elaborate
    </div>
    <div class="skills">
      Skill Sets
      <GChart type="BarChart" :data="skillsData" :options="skillsOptions" />
      <GChart type="BarChart" :data="toolsData" :options="toolsOptions" />
    </div>
    <div class="assessment">
      What I got from the Manager Assessment
      <br />
      What are some things Yuliana does well?
      <ul>
        <li>Produce stable and reliable output with good quality control and very efficient in communication</li>
        <li>Clear and effective communivation and reliable output</li>
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
