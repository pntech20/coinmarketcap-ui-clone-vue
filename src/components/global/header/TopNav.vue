<template>
  <div class="container mx-auto">
    <div class="p-2 flex justify-between">
      <div>Stats in left</div>
      <div>lang and currency</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopNav",
  components: {},
  data() {
    return {
      //
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    getUsers(){
      
      this.$Backend.getUsers().then(res => {
        console.log("get_users");
        console.log(JSON.stringify(res));
      });
    }
  }

};
</script>
