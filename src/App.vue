<template>
  <div id="app">
    <navbar></navbar>
    <router-view />
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
