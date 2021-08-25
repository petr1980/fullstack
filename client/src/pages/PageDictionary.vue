<template>
  <div class="page">
    <div class="container">
      <h1 class="page-title">{{ title }}</h1>
      <tile-list :items="dictionaryList" title="Words sets">
        <template #tile="{ item }">
          <tile-dictionary :data="item" />
        </template>
      </tile-list>
    </div>
  </div>
</template>

<script>
import TileDictionary from "../components/TileDictionary.vue";
import TileList from "../components/TileList.vue";
export default {
  name: "PageDictionary",
  components: { TileList, TileDictionary },
  data() {
    return {
      title: "My dictionary",
      dictionaryList: [
        {
          id: 1,
          title: "My dictionary",
          count: "100",
        },
        {
          id: 2,
          title: "Drinks",
          count: "200",
        },
        {
          id: 3,
          title: "Words from the Internet",
          count: "1200",
        },
        {
          id: 1,
          title: "My dictionary",
          count: "100",
        },
        {
          id: 2,
          title: "Drinks",
          count: "200",
        },
        {
          id: 3,
          title: "Words from the Internet",
          count: "1200",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
