<script>
export default {
  props: ["company"],
};
</script>

<template>
  <div class="company-item">
    <div class="company-info">
      <img :src="company.url" class="logo" />
      <div class="name">
        <p>{{ company.name }}</p>
      </div>
    </div>
    <div class="location">
      <label>Location</label>
      <p>{{ company.location }}</p>
    </div>
    <div class="period">
      <label>Period</label>
      <p>{{ company.period }}</p>
    </div>
    <div class="position">
      <label>Position</label>
      <p>{{ company.position }}</p>
    </div>
    <div class="team">
      <label>Team</label>
      <p>{{ company.team }}</p>
    </div>
    <div class="employment-type">
      <label>Employment Type</label>
      <p>{{ company.type }}</p>
    </div>
    <div class="desc">
      <label>Description</label>
      <p>{{ company.desc }}</p>
    </div>
    <a href="#" class="btn-project">Featured Projects</a>
  </div>
</template>

<style scoped>
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
