<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  name: "app",
  data() {
    return {
      msg: "hello vue !!"
    };
  }
};
</script>
<style scoped lang='less'>
#app {
  span {
    color: #ffff00;
  }
}
</style>
