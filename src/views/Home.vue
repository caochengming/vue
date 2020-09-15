<template>
  <div class="home">
    <p>Vuex学习</p>
    <p>
      <span @click="jianFn" style="padding:10px">-</span>
      {{number}}
      <span @click="jiaFn" style="padding:10px">+</span>
    </p>
    <div>
      <el-input placeholder="请输入内容" v-model="info" class="input-with-select">
        <el-button slot="append" @click="sumbitInfo">提交</el-button>
      </el-input>
    </div>
    <div @click="handleDestroy">销毁</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import store from "@/store/index.js";

export default {
  name: "Home",
  data() {
    return {
      info: "",
    };
  },
  computed: {
    number() {
      return this.$store.state.User.cound;
    },
    // info(){
    //    return this.$store.state.User.title;
    // }
  },
  components: {
    HelloWorld,
  },

  beforeCreate() {
    this.compName = "single";
    console.log(`--${this.compName}--beforeCreate`);
  },
  created() {
    console.log(`--${this.compName}--created`);
  },
  beforeMount() {
    console.log(`--${this.compName}--beforeMount`);
  },
  mounted() {
    this.info = this.$store.state.User.title;
    console.log(`--${this.compName}--mounted`);
    var ninjia = new this.ninja()
    const ninjia2 = new ninjia.constructor()
    console.log(ninjia)
    console.log(ninjia2 != ninjia)
  },
  beforeUpdate() {
    console.log(`--${this.compName}--beforeUpdate`);
  },
  updated() {
    console.log(`--${this.compName}--updated`);
  },
  beforeDestroy() {
    console.log(`--${this.compName}--beforeDestroy`);
  },
  destroyed() {
    console.log(`--${this.compName}--destroyed`);
  },
  methods: {
    handleDestroy() {
      this.$destroy();
    },
    jianFn() {
      this.$store.dispatch("User/JianCound");
    },
    jiaFn() {
      this.$store.dispatch("User/JiaCound");
    },
    sumbitInfo() {
      this.$store.dispatch("User/changTitle", this.info);
    },
    ninja(){

    },
  },
};
</script>
