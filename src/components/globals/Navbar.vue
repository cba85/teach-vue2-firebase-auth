<template>
  <nav
    class="navbar margin-bottom-1"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img
          src="https://bulma.io/images/bulma-logo.png"
          width="112"
          height="28"
        />
      </a>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-end">
        <template v-if="user.loggedIn">
          <div class="navbar-item">
            <p>Clément</p>
          </div>
          <div class="navbar-item">
            <a @click.prevent="signOut" class="button is-light">
              Sign out
            </a>
          </div>
        </template>
        <div class="navbar-item" v-else>
          <div class="buttons">
            <a class="button is-primary" href="register">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light" href="login">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";

export default {
  computed: {
    ...mapGetters({
      user: "user"
    })
  },
  methods: {
    signOut() {
      //console.log("ok");
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "welcome"
          });
        });
    }
  }
};
</script>

<style>
.margin-bottom-1 {
  margin-bottom: 1em;
}
</style>
