<script>
export default {
  props: ["project"],
};
</script>

<template>
  <div class="project-item">
    <div class="project-info">
      <div class="company-info">
        <img :src="project.url" class="logo" />
        <div class="company-name">
          <p>{{ project["company-name"] }}</p>
        </div>
      </div>
      <div class="name">
        <p>{{ project.name }}</p>
      </div>
    </div>
    <div class="type">
      <label>Type</label>
      <p>{{ project.type }}</p>
    </div>
    <div class="period">
      <label>Period</label>
      <p>{{ project.period }}</p>
    </div>
    <div class="role">
      <label>Role</label>
      <p>{{ project.role }}</p>
    </div>
    <div class="contribution">
      <label>Contribution</label>
      <p>{{ project.contribution }}</p>
    </div>
    <div class="skills">
      <label>Skills</label>
      <p>{{ project.skills }}</p>
    </div>
    <div class="desc">
      <label>Description</label>
      <p>{{ project.desc }}</p>
    </div>
  </div>
</template>

<style scoped>
.project-item {
  border: 1px solid #8a909852;
  margin: 20px;
  padding: 20px;
}

.project-item:hover {
  border: 1px solid #2A314252;
}

.project-item p {
  display: inline-block;
}

.project-info {
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #8a909852;
}

.company-info {
  text-align: right;
}

.logo {
  max-height: 15px;
  margin-right: 5px;
}

.company-name {
  display: inline-block;
}

.company-name p {
  margin: 0;
  color: #8a9098;
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

@media (min-width: 320px) and (max-width: 767px) {
  .name {
    font-size: 23px;
  }
}

@media (min-width: 768px) and (max-width: 1279px) {
  .project-item {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .project-info {
    grid-column: 1 / span 2;
  }

  .name {
    font-size: 30px;
  }

  .skills {
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
  .project-item {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .project-info {
    grid-column: 1 / span 2;
  }

  .name {
    font-size: 30px;
  }

  .skills {
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
