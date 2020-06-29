<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-title class="teal">
        <strong class="subheading text-center">Television is becoming a collage there are so many channels that you move through them making a collage yourself. In that way, everyone sees something a bit different.</strong>

        <v-spacer></v-spacer>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} —
        <strong>TV Maze</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
  })
};
</script>