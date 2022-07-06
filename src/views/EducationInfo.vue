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
    <h1 class="title">EDUCATION</h1>
    <div class="education-list">
      <education-item
        v-for="(education, index) in combineJson()"
        :education="education"
        :index="index"
      ></education-item>
    </div>
  </div>
</template>
