<template>
  <v-container fluid style="padding: 0">
    <v-row no-gutters>
      <v-col cols="3" style="max-width: 260px">
        <side-bar />
      </v-col>
      <v-col class="content" overflow cols="9">
        <tool-bar />
        <v-row class="tiles">
          <current-balance />
          <summary-tile />
        </v-row>
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
  .v-container {
    max-width: 1440px;
    background-color: white;
    border-radius: 1rem;
    margin: auto;
    position: relative;
    .content {
      max-height: 1000px;
      margin-left: 64px;
    }
  }
}
.tiles {
  justify-content: space-around;
}
</style>
