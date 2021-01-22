<template>
  <div id="app">
    <button @click="pushFn">保存cookit</button>
  </div>
</template>
<script>
import storageService from '../services/storage.service'
export default {
  name: "app",
  props: {},
  data() {
    //数据定义
    return {};
  },
  methods: {
    pushFn() {
      this.cookie.setCookie('token','12345',)
		},
  },
  watch: {},
  computed: {},
  beforeCreate: function() {},
  created: function() {},
  beforeMount: function() {},
  mounted: function() {},
  beforeUpdate: function() {},
  updated: function() {},
  beforeDestroy: function() {},
  destroyed: function() {},
};
</script>

<style lang="less" scoped></style>
