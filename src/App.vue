<template>
  <v-container fluid style="padding: 0">
    <v-row no-gutters>
      <v-col class="sidebar" cols="12" lg="3">
        <side-bar />
      </v-col>
      <v-col class="content" overflow cols="9">
        <tool-bar />
        <v-row class="tiles">
          <v-col cols="12" sm="6">
            <current-balance />
          </v-col>
          <v-col v-if="!isSmallScreen" cols="12" sm="6">
            <summary-tile />
          </v-col>
          <v-col cols="12">
            <tabs-tile />
          </v-col>
          <v-col v-if="isSmallScreen" cols="12">
            <summary-tile />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, onBeforeMount } from "vue";
import SideBar from "./components/SideBar/SideBar.vue";
import ToolBar from "./components/ToolBar/ToolBar.vue";
import CurrentBalance from "./components/Tiles/CurrentBalance.vue";
import SummaryTile from "./components/Tiles/SummaryTile.vue";
import TabsTile from "./components/Tabs/TabsTile.vue";
import { fetchData } from "@/store/data_api";

export default defineComponent({
  name: "App",
  components: { SideBar, ToolBar, CurrentBalance, SummaryTile, TabsTile },

  setup() {
    const screenWidth = ref<number>(window.screen.width);
    const data = ref();

    const updateScreenWidth = () => (screenWidth.value = window.screen.width);

    onMounted(() => {
      window.addEventListener("resize", updateScreenWidth);
    });

    const isSmallScreen = computed<boolean>(() => {
      if (screenWidth.value < 600) {
        return true;
      } else {
        return false;
      }
    });

    onBeforeMount(() => {
      fetchData();
    });
    return { isSmallScreen, data };
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
      // max-height: 1000px;
      margin-left: 64px;
    }
  }
}
.tiles {
  justify-content: space-around;
}

@media only screen and (min-width: 1264px) {
  .sidebar {
    max-width: 260px !important;
  }
}
</style>
