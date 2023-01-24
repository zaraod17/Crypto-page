<template>
  <v-card style="background-color: whitesmoke">
    <v-switch :model-value="true" label="Payte" density="compact"> </v-switch>
    <v-list style="background-color: whitesmoke" density="compact" nav>
      <v-list-item
        v-for="item in itemsList"
        :key="item.id"
        active-color="black"
        :prepend-icon="item.icon"
        :title="item.title"
        :value="item.title"
        variant="plain"
        ><template #append>
          <v-badge
            v-if="item.id === 1"
            color="red"
            content="9+"
            inline
          ></v-badge>
        </template>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <bottom-sidebar />
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BottomSidebar from "./BottomSidebar.vue";

export default defineComponent({
  name: "SideBar",
  components: { BottomSidebar },

  setup() {
    const itemsList: Array<{
      id: string | number;
      title: string;
      icon: string;
    }> = [
      { id: 1, title: "Overview", icon: "mdi-home-outline" },
      { id: 2, title: "Buy/Sell", icon: "mdi-bank-outline" },
      { id: 3, title: "Wallets", icon: "mdi-wallet-outline" },
      { id: 4, title: "Bundles", icon: "mdi-check-decagram-outline" },
      { id: 5, title: "Reporting", icon: "mdi-flag-outline" },
      { id: 6, title: "Community", icon: "mdi-atom" },
    ];

    return { itemsList };
  },
});
</script>

<style scoped lang="scss">
.v-switch {
  margin-left: 24px;
  margin-top: 40px;
  color: #4592fb;
  :deep(&__thumb) {
    color: #7445fb !important;
  }

  :deep(.v-label) {
    font-size: 24px;
    line-height: 24px;
    font-weight: 600;
    color: black;
    opacity: 1;
  }
}

.v-list {
  margin-top: 63px;
  /deep/ .v-list-item {
    &__overlay {
      background: white;
    }
    &--active {
      background: white;
      .v-list-item__prepend {
        color: #7445fb !important;
      }
    }
    &-title {
      font-family: "SF Pro Display";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
    }
  }
}
/deep/.v-card {
  position: absolute;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
}
</style>
