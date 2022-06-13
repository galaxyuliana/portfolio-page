<script>
import jsonData from "./../json/data.json";
import ProjectItem from "./../components/ProjectItem.vue";
export default {
  components: { ProjectItem },
  data() {
    return {
      projects: jsonData.projects,
      companies: jsonData["company-profiles"],
    };
  },
  methods: {
    combineJson() {
      let result = this.projects.reduce((returnArray, item) => {
        let match = this.companies.find(
          (el) => el["company-code"] == item["company-code"]
        );
        if (match) {
          returnArray.push({
            ...item,
            ["company-name"]: match.name,
            url: match.url,
          });
        }
        return returnArray;
      }, []);
      return result;
    },
  },
};
</script>

<template>
  <div class="project-container">
    <h1>Featured Projects</h1>
    <div class="project-list">
      <project-item
        v-for="(project, index) in combineJson()"
        :project="project"
        :index="index"
      ></project-item>
    </div>
  </div>
</template>

<style scoped>
.project-container {
  min-height: 100vh;
}

.project-list {
  display: block;
  margin: 0 auto;
}

@media (min-width: 320px) and (max-width: 767px) {
  .project-list {
    width: 100%;
  }
}

@media (min-width: 768px) and (max-width: 1279px) {
  .project-list {
    width: 100%;
    max-width: 700px;
  }
}

@media (min-width: 1280px) {
  .project-list {
    width: 700px;
  }
}
</style>
