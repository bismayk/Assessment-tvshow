<template>
<v-app>
  <v-content>
    <AppHeader />
    <br/>
    <Search />
    <router-view />
    <AppFooter />
  </v-content>
</v-app>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import Search from "@/components/Search.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    Search,
    AppFooter
  }
};
</script>

<style>
</style>
