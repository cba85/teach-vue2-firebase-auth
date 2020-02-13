<template>
  <div>
    <h1 class="is-size-1 has-text-centered margin-bottom-1">Register</h1>

    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <div class="notification is-danger" v-if="error">
          {{ error }}
        </div>

        <form @submit.prevent="submit">
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input
                class="input"
                type="text"
                name="name"
                v-model="form.name"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input
                class="input"
                type="email"
                name="email"
                v-model="form.email"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input
                class="input"
                type="password"
                name="password"
                v-model="form.password"
              />
            </div>
          </div>

          <div class="field">
            <div class="control">
              <button class="button is-link">Create an account</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: ""
      },
      error: null
    };
  },
  methods: {
    submit() {
      //alert("ok");
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          //console.log(data);
          data.user
            .updateProfile({
              displayName: this.form.name
            })
            .then(() => {
              //alert("ok");
            });
        })
        .catch(error => {
          //console.log(error);
          this.error = error;
        });
    }
  }
};
</script>
