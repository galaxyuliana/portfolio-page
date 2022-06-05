<template>
  <div class="education-container">
    <h1>Education</h1>
    <div class="education-list">
      <div class="education-item">
        <img
          src="https://www.yonsei.ac.kr/_res/sc/img/intro/img_symbol22.png"
          class="logo"
        />
        <div class="name">
          <p>Yonsei University</p>
        </div>
        <div class="location">
          <label>Location</label>
          <p>Seoul, Republic of Korea</p>
        </div>
        <div class="major">
          <label>Major</label>
          <p>Computer Engineering</p>
        </div>
        <div class="degree">
          <label>Degree</label>
          <p>Master in Engineering</p>
        </div>
        <div class="gpa">
          <label>GPA</label>
          <p>4.28 / 4.3</p>
        </div>
        <div class="period">
          <label>Period</label>
          <p>Mar. 2019 ~ Aug. 2021</p>
        </div>
        <div class="desc">
          <label>Description</label>
          <p>Went to Yonsei University Graduate School of Engineering (GSE)
          to develop professionalism.
          Was able to learn about algorithms, 3d graphics,
          app platform design, databases, artificial intelligence, and etc.</p>
        </div>
      </div>
      <div class="education-item">
        <img
          src="http://www.baewha.ac.kr/mbs/kr/images/contents/intro/img_symbol02.gif"
          class="logo"
        />
        <div class="name">
          <p>Baewha Women's University</p>
        </div>
        <div class="location">
          <label>Location</label>
          <p>Seoul, Republic of Korea</p>
        </div>
        <div class="major">
          <label>Major</label>
          <p>Smart IT</p>
        </div>
        <div class="degree">
          <label>Degree</label>
          <p>Bachelor of Science</p>
        </div>
        <div class="gpa">
          <label>GPA</label>
          <p>4.5 / 4.5</p>
        </div>
        <div class="period">
          <label>Period</label>
          <p>Mar. 2017 ~ Feb. 2018</p>
        </div>
        <div class="desc">
          <label>Description</label>
          <p>Went to university to get bachelor's degree.
          It was an opportunity to learn Java, design, PHP, and more.</p>
        </div>
      </div>
      <div class="education-item">
        <img
          src="http://www.baewha.ac.kr/mbs/kr/images/contents/intro/img_symbol02.gif"
          class="logo"
        />
        <div class="name">
          <p>Baewha Women's University</p>
        </div>
        <div class="location">
          <label>Location</label>
          <p>Seoul, Republic of Korea</p>
        </div>
        <div class="major">
          <label>Major</label>
          <p>Smart IT</p>
        </div>
        <div class="degree">
          <label>Degree</label>
          <p>Associate Degree of Science</p>
        </div>
        <div class="gpa">
          <label>GPA</label>
          <p>4.47 / 4.5</p>
        </div>
        <div class="period">
          <label>Period</label>
          <p>Mar. 2014 ~ Feb. 2017</p>
        </div>
        <div class="desc">
          <label>Description</label>
          <p>Wanted to become a developer, so I went to a college where I could learn more about practical work.
          Was able to experience various programming languages such as Java, .NET, C#, HTML, JQuery, SQL, and Android.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.education-container {
  min-height: 100vh;
}

.education-list {
  display: block;
  margin: 0 auto;
}

.education-item {
  border: 1px solid #8a909852;
  margin: 20px;
  padding: 20px;
}

.education-item:hover {
  border: 1px solid #2A314252;
}

.education-item p {
  display: inline-block;
}

.education-info {
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

label {
  font-weight: 800;
}

label::after {
  content: "|";
  margin: 0px 5px;
}

.logo {
  grid-column: 1 / span 2;
  width: 100%;
}

.name {
  grid-column: 1 / span 2;
  text-align: center;
  border-bottom: 1px solid #8a909852;
  padding-bottom: 12px;
}

@media (min-width: 320px) and (max-width: 767px) {
  .education-list {
    width: 100%;
  }

  .name {
    font-size: 23px;
  }
}

@media (min-width: 768px) and (max-width: 1279px) {
  .education-list {
    width: 100%;
    max-width: 700px;
  }

  .education-item {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .education-info {
    grid-column: 1 / span 2;
    display: grid;
    grid-template-columns: 1fr 1fr;
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
}

@media (min-width: 1280px) {
  .education-list {
    width: 700px;
  }

  .education-item {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .education-info {
    grid-column: 1 / span 2;
    display: grid;
    grid-template-columns: 1fr 1fr;
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
}
</style>
