<template>
  <div>
    <Header />
    <Menu />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";
export default {
  components: {
    Header,
    Menu,
    Footer
  }
};
</script>

<style></style>
