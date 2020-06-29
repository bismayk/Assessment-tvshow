<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" sm="12" md="12">
          <v-row>
            <v-col
              :key="index"
              v-for="(shows, index) in pageOfItems"
              cols="10"
              lg="6"
              md="3"
              sm="4"
              xs="12"
            >
              <router-link
                style="text-decoration: none;"
                :to="{ name: 'Details', params: { id: `${shows.id}` } }"
              >
                <!-- TV show Component -->
                <TvShows :tvShow="shows" />
              </router-link>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <div class="middle">
      <div class="card-footer">
        <jw-pagination :items="getAllTvShows" @changePage="onChangePage" :pageSize="8"></jw-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import TvShows from "@/components/TvShows";

export default {
  name: "Dashboard",
  data() {
    return {
      //for pagination
      pageOfItems: []
    };
  },
  components: {
    TvShows
  },
  computed: {
    ...mapGetters("showList", ["getAllTvShows"])
  },
  methods: {
    getTvShows() {
      this.$store.dispatch("showList/getTvShows");
    },
    onChangePage(pageOfItems) {
      // update page of items
      this.pageOfItems = pageOfItems;
    }
    
  },
  mounted() {
    this.getTvShows();
  }
};
</script>
<style>
.middle {
  padding-left: 25%;
  color: blue;
}
a {
  cursor: pointer;
}
.pagination {
  justify-content: center;
  flex-wrap: wrap;
}
</style>