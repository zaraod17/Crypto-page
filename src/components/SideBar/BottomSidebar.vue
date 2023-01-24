<template>
  <v-list style="background-color: whitesmoke" density="compact">
    <v-list-item title="Favorites" variant="plain">
      <template #append>
        <v-btn
          color="grey-lighten"
          icon="mdi-dots-horizontal"
          variant="text"
        ></v-btn>
      </template>
    </v-list-item>
  </v-list>
  <v-list style="background-color: whitesmoke" density="compact">
    <v-list-item
      class="v-list-item-title-2"
      title="BTC"
      variant="text"
      prepend-avatar="https://bitcoin.org/img/icons/opengraph.png?1674137323"
    >
      <template #subtitle>
        <p class="v-list-item-subtitle-2">Bitcoin</p>
      </template>
      <template #append> chart here </template>
    </v-list-item>
    <v-list-item
      class="v-list-item-title-2"
      title="XRP"
      variant="text"
      prepend-avatar="http://store-images.s-microsoft.com/image/apps.22328.13888734058999682.1f139c6c-8f01-4670-a2f7-aabf06b5c851.00a4819d-178e-4ac6-b420-6a935913e85e"
    >
      <template #subtitle>
        <h5 class="v-list-item-subtitle-2">Ripple</h5>
      </template>
      <template #append> chart here </template>
    </v-list-item>
    <v-list-item
      class="list-item-user"
      title="John Doe"
      variant="text"
      prepend-avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeyKsVv8iDGr6Q3LF9tIdyY_dOi79dqJKjIw&usqp=CAU"
      subtitle="john@doe.com"
    >
      <template #append>
        <v-btn
          color="grey-lighten"
          icon="mdi-dots-horizontal"
          variant="text"
        ></v-btn>
      </template>
    </v-list-item>
  </v-list>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "BottomSidebar",
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.v-list {
  /deep/ .v-list-item {
    margin-top: 28px;
    margin-left: 24px;
    &-title-2 {
      font-family: "SF Pro Display";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      color: #9896a1;
    }
    &-subtitle {
      opacity: 1;
    }
    &-subtitle-2 {
      font-family: "SF Pro Display";
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 14px;
      color: #0a041c;
      opacity: 1;
    }
  }
  .list-item-user {
    margin-top: 190px;
    margin-left: 23px;
    margin-bottom: 19px;
  }
}
</style>
