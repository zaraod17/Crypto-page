<template>
  <v-list-item variant="text" :prepend-avatar="data.avatar">
    <v-list-item-content class="list-content">
      <div class="content-1">
        <v-list-item-title>{{ data.title }}</v-list-item-title
        ><v-list-item-subtitle style="width: 70px">
          <h4>{{ data.subtitle }}</h4></v-list-item-subtitle
        >
      </div>
      <div class="content-2">
        <v-list-item-title>Price</v-list-item-title
        ><v-list-item-subtitle style="width: 70px">
          <h4>{{ data.price }}</h4></v-list-item-subtitle
        >
      </div>
      <div class="content-3">
        <v-list-item-title>Change</v-list-item-title>
        <v-list-item-subtitle v-if="data.isGrowing">
          <p>{{ data.change }} <v-icon>mdi-arrow-right-circle</v-icon></p>
        </v-list-item-subtitle>
        <v-list-item-subtitle class="down" v-else>
          <p>{{ data.change }} <v-icon>mdi-arrow-right-circle</v-icon></p>
        </v-list-item-subtitle>
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
import { defineComponent, reactive } from "vue";

export default defineComponent({
  props: {
    avatar: String,
    title: String,
    subtitle: String,
    price: String,
    change: String,
    isGrowing: Boolean,
  },
  setup(props) {
    const buttonColor: { color: string } = { color: "#7445FB" };
    const data = reactive({
      avatar: props.avatar,
      title: props.title,
      subtitle: props.subtitle,
      price: props.price,
      change: props.change,
      isGrowing: props.isGrowing,
    });

    return { buttonColor, data };
  },
});
</script>

<style scoped lang="scss">
.v-list-item {
  min-width: 450px;
}
.list-content {
  display: flex;
  justify-content: space-between;
  .content {
    &-1,
    &-2,
    &-3 {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .down {
        p {
          color: #ea4d4d;
        }
        .v-icon {
          color: #ea4d4d;
          transform: rotate(45deg);
          margin-right: 8px;
        }
      }
    }
  }
  .v-icon {
    transform: rotate(-45deg);
    margin-right: 8px;
    color: #2dc78f;
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
