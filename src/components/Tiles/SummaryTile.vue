<template>
  <v-card>
    <template #title>
      Summary
      <v-btn
        color="grey-lighten"
        icon="mdi-dots-horizontal"
        variant="text"
        style="position: absolute; right: 20px"
      ></v-btn
    ></template>

    <template #text>
      <big-chart />
    </template>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BigChart from "../charts/BigChart.vue";
export default defineComponent({
  name: "SummaryTile",
  components: { BigChart },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.v-card {
  min-height: 330px;
  max-width: 500px;
  border-radius: 16px;
  background-color: whitesmoke;
  // margin-left: 68px;
  margin-top: 32px;
  :deep(&-title) {
    font-size: 20px;
    line-height: 24px;
    margin-left: 32px;
    width: 100%;
    display: flex;
    align-items: center;
  }
  :deep(&-text) {
    margin-top: 40px;
    display: block;

    .price {
      margin-left: 32px;
      display: flex;
      h1 {
        font-style: normal;
        font-weight: 300;
        font-size: 56px;
        line-height: 56px;
        width: 100%;
      }
      h2 {
        font-style: normal;
        font-weight: 300;
        font-size: 56px;
        line-height: 56px;
        color: #9896a1;

        margin-right: 0;
      }
      p {
        width: 100%;
      }
    }
  }
}
</style>
