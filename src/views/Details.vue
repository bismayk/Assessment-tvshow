<template>
  <div class="grey lighten-5">
    <v-container>
      <v-row>
        <v-col cols="12" lg="4" md="4" sm="4" xs="2" v-if="Object.keys(getTvShow).length">
          <img :src="getTvShow.image.medium" alt="actor" height="405px" />
        </v-col>
        <v-col cols="12" lg="1" md="1" sm="1" xs="1"></v-col>
        <v-col cols="12" lg="6" md="6" sm="8" xs="2" v-if="Object.keys(getTvShow).length">
          <div class="text-center">
            <h2>{{ getTvShow.name }}({{ getTvShow.premiered.substring(0, 4) }})</h2>
          </div>
          <br />
          <div class="text-center">{{ getTvShow.rating.average }}/10</div>
          <br />
          <v-card class="d-inline-flex pa-2 mx-auto" tile>
            <div>
              <p class="font-weight-light">
                <span>Language</span>:
                <span>{{ getTvShow.language }}</span>
              </p>
              <p class="font-weight-light">
                <span>Official Site</span>:
                <span>{{ getTvShow.officialSite }}</span>
              </p>
              <p>
                <span>Premiered</span>:
                <span>{{ getTvShow.premiered }}</span>
              </p>
              <p>
                <span>Runtime</span>:
                <span>{{ getTvShow.runtime }}</span>
              </p>
              <p>
                <span>Status</span>:
                <span>{{ getTvShow.status }}</span>
              </p>
              <p>
                <span>Type</span>:
                <span>{{ getTvShow.type }}</span>
              </p>
              <p>
                <span>Genre</span>:
                <span v-for="genre in getTvShow.genres" :key="genre">
                  {{ genre }}
                  <span>|</span>
                </span>
              </p>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <h2>Show Story</h2>
        <br />
        <br />
        <p v-html="getTvShow.summary"></p>
      </v-row>

      <br />
      <br />

      <h2>Cast</h2>
      <br />
      <v-row>
        <v-col
          cols="12"
          lg="6"
          md="3"
          sm="4"
          xs="12"
          v-for="(cast, index) in getTvShowCast"
          :key="index"
        >
          <v-card class="mx-auto my-12" max-width="374">
            <v-img
              height="250"
              :src="cast.person.image && cast.person.image.medium"
              alt="movie-post"
            ></v-img>
            <v-card-title>{{ cast.person.name }}</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Details",
  data() {
    return {
      currentId: this.$route.params.id
    };
  },
  components: {},
  computed: {
    ...mapGetters("details", ["loading", "getTvShow", "getTvShowCast"])
  },
  methods: {
    getTvShowDetail(id) {
      this.$store.dispatch("details/getTvShowDetailsById", id);
    }
  },
  mounted() {
    this.getTvShowDetail(this.currentId);
  },
  watch: {
    // Need to watch route for re rendering same component
    $route(to) {
      this.currentId = to.params.id;
      this.getTvShowDetail(this.currentId);
    }
  }
};
</script>