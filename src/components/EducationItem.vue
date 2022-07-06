<script>
export default {
  props: ["education"],
  methods: {
    getImage(code) {
      switch (code) {
        case "ys":
          // eslint-disable-next-line no-case-declarations
          const imgUrl = new URL("../assets/yonsei.png", import.meta.url);
          return imgUrl;
        case "bw":
          // eslint-disable-next-line no-case-declarations
          const imgUrl2 = new URL("../assets/baewha.gif", import.meta.url);
          return imgUrl2;
      }
    },
  },
};
</script>

<template>
  <div class="education-item">
    <img :src="getImage(education.code)" class="logo" />
    <div class="name">
      <p>{{ education.name }}</p>
    </div>
    <div class="location">
      <label>Location</label>
      <p>{{ education.location }}</p>
    </div>
    <div class="major">
      <label>Major</label>
      <p>{{ education.major }}</p>
    </div>
    <div class="degree">
      <label>Degree</label>
      <p>{{ education.degree }}</p>
    </div>
    <div class="gpa">
      <label>GPA</label>
      <p>{{ education.gpa }}</p>
    </div>
    <div class="period">
      <label>Period</label>
      <p>{{ education.period }}</p>
    </div>
    <div class="desc">
      <label>Description</label>
      <p>{{ education.desc }}</p>
    </div>
  </div>
</template>

<style scoped>
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
  .name {
    font-size: 23px;
  }
}

@media (min-width: 768px) and (max-width: 1279px) {
  .education-item {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .name {
    font-size: 30px;
  }

  .desc {
    grid-column: 1 / span 2;
  }

  .desc p {
    display: inline;
  }
}

@media (min-width: 1280px) {
  .education-item {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .name {
    font-size: 30px;
  }

  .desc {
    grid-column: 1 / span 2;
  }

  .desc p {
    display: inline;
  }
}
</style>
