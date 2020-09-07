<template>
  <div class="about">
   <p>{{number}}</p>
   <p>{{title}}</p>
  </div>
</template>
<script>
// @ is an alias to /src
import store from "@/store/index.js";

export default {
  name: "Home",
  data() {
    return {};
  },
  computed: {
    number() {
      console.log();
      return this.$store.state.User.cound;
    },
    title(){
      return this.$store.state.User.title;
    }
  },
  components: {
  },
  mounted() {
    // this.number = this.$store.dispatch('User/changeCound')
  },
  methods: {
    jianFn() {
      this.$store.dispatch("User/JianCound");
    },
    jiaFn() {
      this.$store.dispatch("User/JiaCound");
    },
  },
};
</script>