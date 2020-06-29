<template>
    <div>
      <v-text-field
        prepend-inner-icon="mdi-magnify"
        rounded
        solo
        color="light-blue accent-4"
        placeholder="Enter keyword here..."
        v-model="tvShowName"
        data-test="search-key"
        v-on:input="getResults"
      />
      <v-list v-if="getResult.length">
        <v-list-item
          v-for="(result, index) in getResult"
          :key="index"
          @click="goToDetailPage(result.show.id)"
        >
          <v-list-item-content>
            <v-list-item-title>{{ result.show.name }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-avatar>
          <v-img v-if="result.show.image!=null" :src="result.show.image.medium"></v-img>
        </v-list-item-avatar>
        </v-list-item>
      </v-list>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { debounce } from "lodash";
export default {
  name: "Search",
  data() {
    return {
      tvShowName: ""
    };
  },
  computed: {
    ...mapGetters("search", ["getResult"])
  },
  methods: {
    goToDetailPage(id) {
      this.tvShowName = "";
      this.$store.dispatch("search/clearResult");
      this.$router.push({ name: "Details", params: { id: `${id}` } });
    },
    getResults: debounce(function() {
      this.$store.dispatch("search/getResult", this.tvShowName);
    }, 1800)
    // We can improve performance using Debouncing technique
  }
};
</script>
<style scoped>
</style>