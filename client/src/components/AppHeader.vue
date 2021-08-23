<template>
  <div class="header container">
    <div class="header__logo"><img src="../assets/logo.png" alt="" /></div>
    <h1>{{ title }}</h1>
    <nav class="header__nav">
      <ul>
        <li v-for="item in navigation" :key="item.pageName">
          <router-link class="link" :to="{ name: item.pageName }">{{
            item.title
          }}</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      title: "English teacher",
      navigation: [
        {
          pageName: "Home",
          title: "Home page",
        },
        {
          pageName: "Login",
          title: "Page login",
        },
        {
          pageName: "Dictionary",
          title: "Dictionary",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  height: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
  background: #f1f1f1;
  &__logo {
    width: 30px;
  }
  &__nav {
    ul {
      display: flex;
      align-items: center;
      list-style: none;
    }
    li {
      padding: 5px;
    }
    .link {
      display: block;
      padding: 10px;
      text-decoration: none;
      color: inherit;
      background: #ccccd0;
      &.router-link-active {
        background: orange;
      }
    }
  }
}
</style>