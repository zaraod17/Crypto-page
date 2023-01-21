<template>
  <v-container fluid style="padding: 0">
    <v-row no-gutters>
      <v-col cols="3">
        <side-bar />
      </v-col>
      <v-col cols="9">
        <v-sheet class="pa-2">
          <h1>Riotters assignment</h1>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SideBar from "./components/SideBar/SideBar.vue";

export default defineComponent({
  name: "App",
  components: { SideBar },

  setup() {
    return {};
  },
});
</script>

<style lang="scss">
body {
  background-color: black;
  margin: 0;
}
#app {
  max-height: 1000px;
  max-width: 1440px;
  background-color: white;
  border-radius: 1rem;
  position: relative;
  left: 10%;
  top: 10%;
}
.v-container {
  height: 100%;
}
.v-row {
  height: 100%;
}
</style>
