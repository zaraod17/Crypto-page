<template>
  <v-card height="330" width="500">
    <template #title>
      Current Balance
      <v-btn
        color="grey-lighten"
        icon="mdi-dots-horizontal"
        variant="text"
        style="position: absolute; right: 20px"
      ></v-btn
    ></template>
    <template #text>
      <div class="price">
        <h2>$</h2>
        <h1>45423.23</h1>
      </div>
      <div class="description">
        <v-icon>mdi-arrow-right-circle</v-icon>
        <p>12% vs last month</p>
      </div>
    </template>
    <v-card-actions>
      <v-btn style="color: white" variant="flat" :color="buttonColor.color"
        >Quick Invest</v-btn
      >
      <v-btn variant="text" :color="buttonColor.color"> Show Raport</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CurrentBalance",
  setup() {
    const buttonColor: { color: string } = { color: "#7445FB" };
    return { buttonColor };
  },
});
</script>

<style lang="scss" scoped>
.v-card {
  border-radius: 16px;
  background-color: whitesmoke;
  // margin-left: 68px;
  margin-top: 32px;
  :deep(&-title) {
    font-size: 20px;
    line-height: 24px;
    margin-left: 32px;
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
    .description {
      margin-left: 32px;
      margin-top: 16px;
      display: flex;
      .v-icon {
        transform: rotate(-45deg);
        color: #2dc78f;
        margin-right: 8px;
      }
      p {
        color: #2dc78f;
      }
    }
  }
  &-actions {
    margin-left: 32px;
    margin-top: 72px;
    .v-btn {
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 24px;
      text-transform: capitalize;
    }
  }
}
</style>
