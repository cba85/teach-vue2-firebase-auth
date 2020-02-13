<template>
  <div>
    <h1 class="is-size-1 has-text-centered margin-bottom-1">Login</h1>

    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <div class="notification is-danger" v-if="error">
          {{ error }}
        </div>

        <form @submit.prevent="submit">
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input
                class="input"
                type="email"
                name="email"
                v-model.trim="$v.form.email.$model"
                :class="{ 'is-danger': $v.form.email.$error }"
              />
              <template v-if="$v.form.email.$error">
                <p class="help is-danger" v-if="!$v.form.email.required">
                  Email is required
                </p>
                <p class="help is-danger" v-if="!$v.form.email.email">
                  Email must be valid
                </p>
              </template>
            </div>
          </div>

          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input
                class="input"
                type="password"
                name="password"
                v-model.trim="$v.form.password.$model"
                :class="{ 'is-danger': $v.form.password.$error }"
              />
              <template v-if="$v.form.password.$error">
                <p class="help is-danger" v-if="!$v.form.password.required">
                  Password is required
                </p>
              </template>
            </div>
          </div>

          <div class="field">
            <div class="control">
              <button class="button is-link">Login</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import { required, email } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      error: null
    };
  },
  validations: {
    form: {
      email: {
        required,
        email
      },
      password: { required }
    }
  },
  methods: {
    submit() {
      //console.log("ok");
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      }

      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(() => {
          this.$router.replace(
            this.$route.query.redirect || {
              name: "home"
            }
          );
        })
        .catch(error => {
          this.error = error;
        });
    }
  }
};
</script>
