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
      let projectList = this.projects;
      if (this.$route.params.code != null) {
        projectList = this.projects.filter(
          (el) => el.code == this.$route.params.code
        );
      }

      let result = projectList.reduce((returnArray, item) => {
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
    <h1 class="title">
      FEATURED PROJECTS
      <span v-if="this.$route.params.code != null">
        -
        {{
          this.companies.find((el) => el.code == this.$route.params.code).name
        }}
      </span>
    </h1>
    <div class="project-list">
      <project-item
        v-for="(project, index) in combineJson()"
        :project="project"
        :index="index"
      ></project-item>
    </div>
  </div>
</template>
