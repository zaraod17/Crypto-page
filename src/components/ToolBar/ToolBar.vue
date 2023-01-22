<template>
  <div id="toolbar">
    <v-text-field
      variant="solo"
      label="Search"
      density="comfortable"
      single-line
      prepend-inner-icon="mdi-magnify"
    ></v-text-field>
    <div class="buttons">
      <v-badge color="red">
        <v-btn class="text-none" variant="tonal">
          <v-icon>mdi-bell-outline</v-icon>
        </v-btn>
      </v-badge>

      <v-menu>
        <template #activator="{ props }">
          <v-btn class="text-none" variant="tonal" v-bind="props">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ToolBar",
  data: () => ({
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" },
    ],
  }),
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
#toolbar {
  position: relative;
  margin-top: 49px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .v-text-field {
    position: relative;
    flex: 0 0 223px;
    left: 10%;
  }
  :deep(.v-field) {
    background-color: whitesmoke;
  }
  .buttons {
    display: flex;
    justify-content: space-evenly;
    width: 8rem;
    .v-btn {
      min-width: 0;
      width: 48px;
      height: 48px;
    }
    :deep(.v-badge__badge) {
      min-width: 12px !important;
      height: 12px;
    }
  }
}
</style>
