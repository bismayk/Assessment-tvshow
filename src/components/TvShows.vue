<template>
  <v-card class="mx-auto my-12" max-width="390" min-height="530" max-height="530">
    <v-img height="100%" :src="tvShow.image.medium" alt="img"></v-img>

    <v-card-title>
      <div class="container">
      <a>
        {{ tvShow.name}}
        <span>({{ tvShow.premiered.substring(0, 4) }})</span>
      </a>
      </div>
    </v-card-title>

    <v-card-text>
      <div class="container">
      <div class="black--text ml-4">{{ tvShow.rating.average }}/10</div> 
      <div class="my-4 subtitle-1">
        <ul style="list-style: none;">
          <li v-for="genre in tvShow.genres" :key="genre">
            <a>{{ genre }}</a>
          </li>
        </ul>
      </div>
      </div>
    </v-card-text>
  </v-card>
</template>


<script>
export default {
  name: "TvShows",
  props: ["tvShow"],

  methods: {}
};
</script>
<style scoped>
.container {
    text-align: center;
}
</style>