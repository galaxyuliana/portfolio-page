<template>
  <div class="company-container">
    <h1>Company</h1>
    <div class="company-list">
      <div class="company-item">
        <div class="company-info">
          <img
            src="https://keymedia.com/images/Key-Media-Pty-Ltd_Leading-International-Media-Company-2018.png"
            class="logo"
          />
          <div class="name">
            <p>KEY MEDIA PTY LTD</p>
          </div>
        </div>
        <div class="location">
          <label>Location</label>
          <p>Seoul, Republic of Korea</p>
        </div>
        <div class="duration">
          <label>Duration</label>
          <p>Aug. 2019 ~ Mar. 2022</p>
        </div>
        <div class="position">
          <label>Position</label>
          <p>Junior Web Developer</p>
        </div>
        <div class="team">
          <label>Team</label>
          <p>Web Department</p>
        </div>
        <div class="employment-type">
          <label>Employment Type</label>
          <p>Full-time, Full Stack Web Developer</p>
        </div>
        <div class="desc">
          <label>Description</label>
          <p>Web development and maintenance of magazine sites in 8 fields including mortgage, insurance, HR, safety, education, consumer, law and wealth.</p>
        </div>
        <a href="#" class="btn-project">Featured Projects</a>
      </div>
      <div class="company-item">
        <div class="company-info">
          <img
            src="https://www.marsh.com/content/dam/marsh/Imagery/marsh-2/logos/Marsh-header-rgb-blue.svg"
            class="logo"
          />
          <div class="name">
            <p>Marsh Korea</p>
          </div>
        </div>
        <div class="location">
          <label>Location</label>
          <p>Seoul, Republic of Korea</p>
        </div>
        <div class="duration">
          <label>Duration</label>
          <p>Apr. 2018 ~ May. 2019</p>
        </div>
        <div class="position">
          <label>Position</label>
          <p>Web Developer</p>
        </div>
        <div class="team">
          <label>Team</label>
          <p>GIT</p>
        </div>
        <div class="employment-type">
          <label>Employment Type</label>
          <p>Full-time, Full Stack Web Developer</p>
        </div>
        <div class="desc">
          <label>Description</label>
          <p>Web development for intranet and customer insurance claims. Customize based on customer requirements and business' needs. Supported for branch offices in Asia Pacific.</p>
        </div>
        <a href="#" class="btn-project">Featured Projects</a>
      </div>
      <div class="company-item">
        <div class="company-info">
          <img
            src="https://www.kaoni.com/wp-content/uploads/2018/04/logofile3.png"
            class="logo"
          />
          <div class="name">
            <p>KAONi</p>
          </div>
        </div>
        <div class="location">
          <label>Location</label>
          <p>Seoul, Republic of Korea</p>
        </div>
        <div class="duration">
          <label>Duration</label>
          <p>Apr. 2017 ~ Mar. 2018</p>
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
.company-container {
  min-height: 100vh;
}

.company-list {
  display: block;
  margin: 0 auto;
}

.company-item {
  border: 1px solid #8a909852;
  margin: 20px;
  padding: 20px;
}

.company-item:hover {
  border: 1px solid #2A314252;
}

.company-item p {
  display: inline-block;
}

.company-info {
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #8a909852;
}

.name {
  font-weight: bold;
  margin: 0;
}

.name p {
  margin: 0;
}

.btn-project {
  margin: 0 auto;
  text-decoration: none;
  background: #2A3142;
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  border: 3px solid #2A3142;
}

.btn-project:hover {
  background: #ffffff;
  color: #2A3142;
}

label {
  font-weight: 800;
}

label::after {
  content: "|";
  margin: 0px 5px;
}

@media (min-width: 320px) and (max-width: 767px) {
  .company-list {
    width: 100%;
  }

  .logo {
    max-height: 25px;
  }

  .name {
    font-size: 23px;
  }

  .btn-project {
    width: 200px;
    height: 30px;
    padding: 7px 0px 7px 0px;
    text-align: center;
    border: 3px solid #2A3142;
    font-size: 20px;
    margin-top: 10px;
    display: block;
  }
}

@media (min-width: 768px) and (max-width: 1279px) {
  .company-list {
    width: 100%;
    max-width: 700px;
  }

  .company-item {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .company-info {
    grid-column: 1 / span 2;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .logo {
    max-height: 45px;
  }

  .name {
    font-size: 30px;
  }

  .employment-type {
    grid-column: 1 / span 2;
  }

  .desc {
    grid-column: 1 / span 2;
  }

  .desc p {
    display: inline;
  }

  .btn-project {
    grid-column: 1 / span 2;
    width: 200px;
    height: 35px;
    padding: 13px 0px 7px 0px;
    text-align: center;
    border: 3px solid #2A3142;
    font-size: 20px;
    margin-top: 20px;
  }
}

@media (min-width: 1280px) {
  .company-list {
    width: 700px;
  }

  .company-item {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .company-info {
    grid-column: 1 / span 2;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .logo {
    max-height: 45px;
  }

  .name {
    font-size: 30px;
  }

  .employment-type {
    grid-column: 1 / span 2;
  }

  .desc {
    grid-column: 1 / span 2;
  }

  .desc p {
    display: inline;
  }

  .btn-project {
    grid-column: 1 / span 2;
    width: 200px;
    height: 35px;
    padding: 13px 0px 7px 0px;
    text-align: center;
    border: 3px solid #2A3142;
    font-size: 20px;
    margin-top: 20px;
  }
}
</style>
