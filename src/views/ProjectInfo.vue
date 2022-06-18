<script>
import jsonData from "./../json/data.json";
import ProjectItem from "./../components/ProjectItem.vue";
export default {
  components: { ProjectItem },
  data() {
    return {
      projects: jsonData.projects,
      companies: jsonData["companies"],
    };
  },
  methods: {
    combineJson() {
      let result = this.projects.reduce((returnArray, item) => {
        let match = this.companies.find((el) => el.code == item.code);
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
