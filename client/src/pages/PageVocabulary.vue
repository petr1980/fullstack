<template>
  <div class="page">
    <div class="container">
      <h1 class="page-title">{{ title }}</h1>
      <section class="section">
        <div class="section-title__wrap">
          <h2 class="section-title">{{ set }}</h2>
          <router-link
            class="button button-primary"
            :to="{ name: 'training', params: { id: set } }"
            >learn the set</router-link
          >
        </div>
        <div class="vocabulary">
          <div class="vocabulary__item" v-for="word in words" :key="word.id">
            <button class="audio">Voice</button>
            <div class="word">
              <div class="en">{{ word.en }}</div>
              <div class="ru">{{ word.ru }}</div>
            </div>
            <input class="check" type="checkbox" :value="word.id" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageVocabulary",
  data() {
    return {
      title: "Vocabulary",
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

<style lang="scss" scoped>
.vocabulary {
  &__item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    padding-bottom: 10px;
    font-size: rem(18px);
    border-bottom: 1px solid $gold;
  }
  .word {
    margin-left: 20px;
    .en {
      font-weight: bold;
    }
  }
  .check {
    margin-left: auto;
  }
}
</style>
