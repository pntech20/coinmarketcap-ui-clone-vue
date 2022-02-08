<template>
  <header>
    <div class="border-b">
      <TopNav></TopNav>
    </div>
    <div class="border-b py-4">
      <MainNav></MainNav>
    </div>
  </header>
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
