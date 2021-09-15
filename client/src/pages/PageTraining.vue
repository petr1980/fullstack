<template>
  <div class="page">
    <div class="container">
      <h1 class="page-title">{{ title }}</h1>
      <section class="section">
        <div class="section-title__wrap">
          <h2 class="section-title">{{ set }}</h2>
          <router-link
            class="button button-primary"
            :to="{ name: 'vocabulary', params: { id: set } }"
            >return to set</router-link
          >
        </div>
        <training-flip-cards :words="words">
          <template #tile="{ word }">
            <app-tile :word="word" flip></app-tile>
          </template>
        </training-flip-cards>
      </section>
    </div>
  </div>
</template>

<script>
import TrainingFlipCards from "@/components/Training/TrainingFlipCards";
import AppTile from "@/components/UI/AppTile";
export default {
  name: "PageTraining",
  components: { AppTile, TrainingFlipCards },
  data() {
    return {
      title: "Training",
      words: [
        {
          id: 1,
          en: "squat",
          ru: "приседание",
        },
        {
          id: 2,
          en: "hazard",
          ru: "риск, опасность",
        },
        {
          id: 3,
          en: "jamming",
          ru: "(тех.) заедание; защемление; зажимание",
        },
        {
          id: 3,
          en: "surefire",
          ru: "безошибочный, верный, надёжный",
        },
        {
          id: 4,
          en: "withstand",
          ru: "выдерживать, выносить",
        },
        {
          id: 5,
          en: "ding",
          ru: "оставлять вмятину",
        },
      ],
    };
  },

  computed: {
    set() {
      return this.$route.params.id;
    },
  },
};
</script>

<style scoped></style>
