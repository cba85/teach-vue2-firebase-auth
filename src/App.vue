<template>
  <div id="app">
    <div class="container">
      <navbar></navbar>
    </div>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/globals/Navbar";

export default {
  components: {
    Navbar
  }
};
</script>
