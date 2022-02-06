<template>
  <div>
    <header>
      <TopNav></TopNav>
      <MainNav></MainNav>
    </header>
  </div>
</template>

<script>
import MainNav from "./MainNav.vue";
import TopNav from "./TopNav.vue";
// @ is an alias to /src

export default {
  name: "Header",
  components: {
    MainNav,
    TopNav,
},
};
</script>
