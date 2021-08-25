<template>
  <div class="header">
    <div class="logo">
      <img class="logo__img" src="../assets/img/logo.svg" alt="English here" />
      <div class="logo__text">English <span>here</span></div>
    </div>
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
  height: rem(65px);
  padding: 10px 15px;
  background: $dark-tiles;
  border-bottom: 1px solid $gold;

  &__nav {
    ul {
      display: flex;
      align-items: center;
      list-style: none;
    }
    li {
      margin: 0 rem(15px);
    }
    .link {
      display: block;
      color: $white;
      font-size: 14px;
      text-transform: uppercase;
      text-decoration: none;
      font-weight: 500;
      &:hover {
        text-decoration: underline;
      }
      &.router-link-active {
        color: $gold;
        text-decoration: none;
      }
    }
  }
}
.logo {
  display: flex;
  align-items: center;
  &__img {
    width: 2rem;
  }
  &__text {
    margin: 10px;
    font-size: 1.2rem;
    text-transform: uppercase;
    span {
      display: block;
      font-size: 0.8em;
    }
  }
}
</style>