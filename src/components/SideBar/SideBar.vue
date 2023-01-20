<template>
  <v-card style="background-color: whitesmoke">
    <v-switch inset :model-value="true" label="Payte"> </v-switch>
    <v-list style="background-color: whitesmoke" density="compact" nav>
      <v-list-item
        prepend-icon="mdi-view-dashboard"
        title="Home"
        value="home"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-forum"
        title="About"
        value="about"
      ></v-list-item>
    </v-list>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SideBar",

  setup() {
    return {};
  },
});
</script>

<style lang="scss">
.v-card {
  height: 100%;
  .v-switch {
    margin-left: 10%;
    color: indigo;

    .v-label {
      font-family: sans-serif;
      font-size: 24px;
      line-height: 24px;
      font-weight: 600;
      color: black;
      opacity: 1;
    }
  }
  .v-list {
    .v-list-item {
      :hover {
        color: white;
      }
    }
  }
}
</style>
