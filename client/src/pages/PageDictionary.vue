<template>
  <div class="page">
    <div class="container">
      <h1 class="page-title">{{ title }}</h1>
      <tile-list :items="dictionaryList" title="Words sets">
        <template #tile="{ item }">
          <tile-dictionary :data="item" />
        </template>
      </tile-list>

      <button class="button button-primary" @click="openModal">Add set</button>
    </div>

    <the-modal
      :is-open="isModalOpen"
      @confirm="addWords"
      @closeModal="isModalOpen = false"
    >
      <template #content
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        similique!</template
      >
    </the-modal>
  </div>
</template>

<script>
import TheModal from "@/components/TheModal";
import TileDictionary from "../components/TileDictionary.vue";
import TileList from "../components/TileList.vue";
export default {
  name: "PageDictionary",
  components: { TheModal, TileList, TileDictionary },
  data() {
    return {
      title: "My dictionary",
      isModalOpen: false,
      dictionaryList: [
        {
          id: "My dictionary",
          title: "My dictionary",
          count: "100",
        },
        {
          id: "Drinks",
          title: "Drinks",
          count: "200",
        },
        {
          id: "Words from the Internet",
          title: "Words from the Internet",
          count: "1200",
        },
        {
          id: "Family",
          title: "Family",
          count: "100",
        },
        {
          id: "Family",
          title: "Family",
          count: "200",
        },
        {
          id: "Words from the Internet",
          title: "Words from the Internet",
          count: "1200",
        },
      ],
    };
  },

  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    addWords() {
      console.log("confirm");
    },
  },
};
</script>

<style scoped></style>
