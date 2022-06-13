<script>
import jsonData from "./../json/data.json";
import EducationItem from "./../components/EducationItem.vue";
export default {
  components: { EducationItem },
  data() {
    return {
      educations: jsonData.educations,
      universities: jsonData.universities,
    };
  },
  methods: {
    combineJson() {
      let result = this.educations.reduce((returnArray, item) => {
        let match = this.universities.find((el) => el.code == item.code);
        if (match) {
          returnArray.push({
            ...item,
            name: match.name,
            url: match.url,
            location: match.location,
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
  <div class="education-container">
    <h1>Education</h1>
    <div class="education-list">
      <education-item
        v-for="(education, index) in combineJson()"
        :education="education"
        :index="index"
      ></education-item>
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

@media (min-width: 320px) and (max-width: 767px) {
  .education-list {
    width: 100%;
  }
}

@media (min-width: 768px) and (max-width: 1279px) {
  .education-list {
    width: 100%;
    max-width: 700px;
  }
}

@media (min-width: 1280px) {
  .education-list {
    width: 700px;
  }
}
</style>
