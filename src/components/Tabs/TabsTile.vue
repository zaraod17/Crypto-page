<template>
  <v-card
    ><v-tabs v-model="tab" bg-color="whitesmoke" :slider-color="sliderColor">
      <v-tab value="one">Item One</v-tab>
      <v-tab value="two">Item Two</v-tab>
      <v-tab value="three">Item Three</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="one"> One </v-window-item>

        <v-window-item value="two"> Two </v-window-item>

        <v-window-item value="three"> Three </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      tab: null,
      sliderColor: "#7445FB",
    };
  },
  name: "TabsTile",
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.v-card {
  max-width: 1040px;
  border-radius: 16px;
  background-color: whitesmoke;
  margin-inline: 68px;
  margin-top: 32px;
  // .v-tab__slider {
  //   color: red;
  // }
}
</style>
