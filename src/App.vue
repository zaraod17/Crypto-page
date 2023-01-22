<template>
  <v-container fluid style="padding: 0">
    <v-row no-gutters>
      <v-col cols="3">
        <side-bar />
      </v-col>
      <v-col cols="9">
        <tool-bar />
        <current-balance />
        <summary-tile />
        <tabs-tile />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SideBar from "./components/SideBar/SideBar.vue";
import ToolBar from "./components/ToolBar/ToolBar.vue";
import CurrentBalance from "./components/Tiles/CurrentBalance.vue";
import SummaryTile from "./components/Tiles/SummaryTile.vue";
import TabsTile from "./components/Tabs/TabsTile.vue";

export default defineComponent({
  name: "App",
  components: { SideBar, ToolBar, CurrentBalance, SummaryTile, TabsTile },

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
  margin: auto;
}
.v-container {
  height: 100%;
}
.v-row {
  height: 100%;
}
</style>
