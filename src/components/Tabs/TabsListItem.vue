<template>
  <v-list-item
    class="v-list-item-title-2"
    variant="text"
    prepend-avatar="https://bitcoin.org/img/icons/opengraph.png?1674137323"
  >
    <v-list-item-content class="list-content">
      <div class="content-1">
        <v-list-item-title>BTC</v-list-item-title
        ><v-list-item-subtitle> <h4>Bitcoin</h4></v-list-item-subtitle>
      </div>
      <div class="content-2">
        <v-list-item-title>Price</v-list-item-title
        ><v-list-item-subtitle> <h4>2312</h4></v-list-item-subtitle>
      </div>
      <div class="content-3">
        <v-list-item-title>Change</v-list-item-title
        ><v-list-item-subtitle> <p>2312</p></v-list-item-subtitle>
      </div>
      <div class="content-4">Chart</div>
      <div class="list-actions">
        <v-btn variant="text" :color="buttonColor.color">Sell</v-btn>
        <v-btn style="color: white" variant="flat" :color="buttonColor.color"
          >Buy</v-btn
        >
      </div>
    </v-list-item-content>
  </v-list-item>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const buttonColor: { color: string } = { color: "#7445FB" };
    return { buttonColor };
  },
});
</script>

<style scoped lang="scss">
.list-content {
  display: flex;
  justify-content: space-between;
  &-1 {
    display: block;
  }
  .v-icon {
    transform: rotate(-45deg);
    color: #2dc78f;
    margin-right: 8px;
  }
  p {
    color: #2dc78f;
  }
  .list-actions {
    .v-btn {
      text-transform: capitalize;
    }
  }
}
.v-list-item {
  background-color: white;
  margin-block: 10px;
  padding-block: 20px;
  border-radius: 8px;
  height: 80px;

  :deep(&-title) {
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #9896a1;
  }
  :deep(&-subtitle) {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 14px;
    line-height: 14px;
    color: #0a041c;
    opacity: 1;
  }
}
</style>
