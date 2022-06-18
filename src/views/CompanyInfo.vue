<script>
import jsonData from "./../json/data.json";
import CompanyItem from "./../components/CompanyItem.vue";
export default {
  components: { CompanyItem },
  data() {
    return {
      companies: jsonData.companies,
      experiences: jsonData.experiences,
    };
  },
  methods: {
    combineJson() {
      let result = this.experiences.reduce((returnArray, item) => {
        let match = this.companies.find((el) => el.code == item.code);
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
      console.log(result);
      return result;
    },
  },
};
</script>

<template>
  <div class="company-container">
    <h1>Company</h1>
    <div class="company-list">
      <company-item
        v-for="(company, index) in combineJson()"
        :company="company"
        :index="index"
      ></company-item>
    </div>
  </div>
</template>
