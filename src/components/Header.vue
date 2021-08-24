<template>
  <div id="header">
    <img :src="headerLogo" alt="TV Search" />
    <router-link to="/">
      <span>TV Search</span>
    </router-link>
  </div>
</template>

<script>
import { Vue } from "vue-class-component";
import logo from "../assets/img/logo48.png";

export default class Header extends Vue {
  headerLogo = logo;
}
</script>

<style lang="scss" scoped>
@import "../globals";

#header {
  color: white;
  padding: 30px 20px;
  background-color: $background-color;

  * {
    vertical-align: middle;
  }

  img {
    margin-right: 20px;
  }

  span {
    font-family: $font-title;
    font-size: 300%;
  }

  a {
    text-decoration: none;
    color: white;

    &:hover {
      color: #c5eff7;
    }
  }
}
</style>