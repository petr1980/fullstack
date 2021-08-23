<template>
  <div class="page-login">
    <div class="login">
      <app-form @submit="submitLogin" :formData="login" title="Login">
        <template v-slot:content>
          <form-item-wrapper
            label="Enter label"
            :invalid="invalid && !login.email"
          >
            <custom-input v-model.trim="login.email" />
          </form-item-wrapper>
          <form-item-wrapper
            label="Enter password"
            :invalid="invalid && !login.password"
          >
            <custom-input v-model.trim="login.password" />
          </form-item-wrapper>
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
  border: 1px solid #333;
}
</style>