<template>
  <v-card
    ><v-tabs
      align-tabs="title"
      v-model="tab"
      bg-color="whitesmoke"
      :slider-color="sliderColor"
    >
      <v-tab value="one"><p>Summary</p></v-tab>
      <v-tab value="two"><p>Table</p></v-tab>
      <v-tab value="three"><p>Charts</p></v-tab>
      <v-tab value="four"><p>Reporting</p></v-tab>
      <v-tab value="five"><p>Analysis</p></v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="one">
          <v-list bg-color="#F5F5F5">
            <tabs-list-item
              avatar="https://bitcoin.org/img/icons/opengraph.png?1674137323"
              title="BTC"
              subtitle="Bitcoin"
              price="$29,982.96"
              change="2.15"
              :is-growing="true"
            />
            <tabs-list-item
              avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsJjcUPNCDaQYUFy42i2JUM75yRNT8BShJ_gUgSd60EkqYZ4ZWLbzM1EK4g-SDlXlN-wc&usqp=CAU"
              title="ETH"
              subtitle="Ethereum"
              price="$1,816.61"
              change="2.11"
              :is-growing="false"
            />
            <tabs-list-item
              avatar="https://s3.coinmarketcap.com/static-gravity/image/4aec70f6f1254e4f89650cc68ae49f3c.png"
              title="ADA"
              subtitle="Cardano"
              price="$0.57"
              change="2.47"
              :is-growing="true"
            />
          </v-list>
        </v-window-item>
        <v-window-item value="two"> Two </v-window-item>
        <v-window-item value="three"> Three </v-window-item>
        <v-window-item value="four">four</v-window-item>
        <v-window-item value="five">Five</v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import TabsListItem from "./TabsListItem.vue";
export default defineComponent({
  components: { TabsListItem },

  name: "TabsTile",
  setup() {
    const tab = ref(null);
    const sliderColor = "#7445FB";
    return { tab, sliderColor };
  },
});
</script>

<style lang="scss" scoped>
.v-card {
  max-width: 1040px;
  border-radius: 16px;
  background-color: whitesmoke;
  margin-top: 32px;

  &-text {
    margin-left: 2.5rem;
    .v-list {
      max-height: 500px;
    }
  }
  .v-tab {
    color: #9896a1;
    &:hover {
      color: #0a041c;
    }
    &--selected {
      color: #0a041c;
    }
  }
  .v-btn {
    &__content {
      p {
        font-family: sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        text-transform: capitalize;
      }
    }
  }
}
</style>
