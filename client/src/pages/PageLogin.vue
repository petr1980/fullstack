<template>
  <div class="page-login">
    <div class="login">
      <app-form @submit="submitLogin" :formData="login" title="Login">
        <template v-slot:content>
          <app-form-item-wrapper
            label="Enter label"
            :invalid="invalid && !login.email"
          >
            <app-input v-model.trim="login.email" />
          </app-form-item-wrapper>
          <app-form-item-wrapper
            label="Enter password"
            :invalid="invalid && !login.password"
          >
            <app-input v-model.trim="login.password" />
          </app-form-item-wrapper>
        </template>
      </app-form>
    </div>
  </div>
</template>

<script>
import AppForm from "../components/AppForm.vue";
export default {
  name: "PageLogin",
  components: { AppForm },
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
      invalid: false,
    };
  },

  mounted() {},
  methods: {
    submitLogin({ email, password }) {
      if (!email || !password) {
        this.invalid = true;
        return;
      } else {
        console.log({ email, password });
        this.$router.push({ name: "Home" });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.page-login {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
}
.login {
  display: block;
  margin: 0;
  width: 500px;
  max-width: 100%;
  padding: 30px;
  @include tale-color();
}
</style>
