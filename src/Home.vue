<template>
  <div>
    <router-link to="/bar">sadas</router-link>Home
    <el-button type="primary">12</el-button>
  </div>
</template>
<script>
export default {
  name: "home",
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
