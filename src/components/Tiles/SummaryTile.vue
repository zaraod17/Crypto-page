<template>
  <v-card height="330" width="500" title="Current Balance">
    <template #text>
      <div class="price">summary chart here</div>
    </template>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "SummaryTile",
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.v-card {
  border-radius: 16px;
  background-color: whitesmoke;
  margin-left: 68px;
  margin-top: 32px;
  :deep(&-title) {
    font-size: 20px;
    line-height: 24px;
    margin-left: 32px;
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
