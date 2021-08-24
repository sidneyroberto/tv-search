<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "./components/Header.vue";

@Options({ components: { Header } })
export default class App extends Vue {}
</script>

<style lang="scss">
@import "./globals";

body {
  margin: 0;
  font-family: $font-main;
}
</style>
