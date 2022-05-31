<template>
  <div class="company-container">
    <h1>Company</h1>
    <div class="company-list">
      <div class="company-item">
        <img
          src="https://keymedia.com/images/Key-Media-Pty-Ltd_Leading-International-Media-Company-2018.png"
          class="logo"
        />
        <p class="name">KEY MEDIA PTY LTD</p>
        <p class="location">Seoul, Republic of Korea</p>
        <p class="position">Junior Web Developer</p>
        <p class="team">Web Department</p>
        <p class="employment-type">Full-time, Full Stack Web Developer</p>
        <p class="duration">Aug. 2019 ~ Mar. 2022</p>
        <p class="desc">Web development and maintenance of magazine sites in 8 fields including mortgage, insurance, HR, safety, education, consumer, law and wealth.</p>
        <a href="#" class="btn-project">Featured Projects</a>
      </div>
      <div class="company-item">
        <img
          src="https://www.marsh.com/content/dam/marsh/Imagery/marsh-2/logos/Marsh-header-rgb-blue.svg"
          class="logo"
        />
        <p class="name">Marsh Korea</p>
        <p class="location">Seoul, Republic of Korea</p>
        <p class="position">Web Developer</p>
        <p class="team">GIT</p>
        <p class="employment-type">Full-time, Full Stack Web Developer</p>
        <p class="duration">Apr. 2018 ~ May. 2019</p>
        <p class="desc">Web development for intranet and customer insurance claims. Customize based on customer requirements and business' needs. Supported for branch offices in Asia Pacific.</p>
        <a href="#" class="btn-project">Featured Projects</a>
      </div>
      <div class="company-item">
        <img
          src="https://www.kaoni.com/wp-content/uploads/2018/04/logofile3.png"
          class="logo"
        />
        <div class="name">
          <p>KAONi</p>
        </div>
        <div class="location">
          <label>Location</label>
          <p>Seoul, Republic of Korea</p>
        </div>
        <div class="position">
          <label>Position</label>
          <p>Web Developer</p>
        </div>
        <div class="team">
          <label>Team</label>
          <p>Web Department Team</p>
        </div>
        <div class="employment-type">
          <label>Employment Type</label>
          <p>Full-time, Full Stack Web Developer</p>
        </div>
        <div class="duration">
          <label>Duration</label>
          <p>Apr. 2017 ~ Mar. 2018</p>
        </div>
        <div class="desc">
          <label>Description</label>
          <p>Web development of groupware solutions, in charge of mail, address book, and schedule management modules. Customize based on customer requirements.</p>
        </div>
        <a href="#" class="btn-project">Featured Projects</a>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .company-container {
    min-height: 100vh;
  }
  .company-list {
    display: block;
    width: 700px;
    margin: 0 auto;
  }
  .company-item {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border: 1px solid #8a909852;
    margin: 20px;
    padding: 20px;
  }

  .company-item:hover {
    border: 1px solid #2A314252;
  }

  .logo {
    /* grid-column: 1 / span 2; */
    max-height: 45px;
  }

  .name {
    font-size: 30px;
    font-weight: bold;
    margin: 0;
  }

  .name p {
    margin: 0;
  }

  /* .location {
    text-align: right;
  } */

  .desc {
    grid-column: 1 / span 2;
  }

  .btn-project {
    grid-column: 1 / span 2;
    margin: 0 auto;
    text-decoration: none;
    width: 200px;
    height: 35px;
    background: #2A3142;
    color: #ffffff;
    font-weight: bold;
    padding: 13px 0px 7px 0px;
    text-align: center;
    border: 3px solid #2A3142;
    font-size: 20px;
  }

  .btn-project:hover {
    background: #ffffff;
    color: #2A3142;
  }
}
</style>
