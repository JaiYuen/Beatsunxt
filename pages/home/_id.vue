<!--
 * @Author: your name
 * @Date: 2020-10-28 15:42:14
 * @LastEditTime: 2021-01-31 19:52:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myapp\pages\home\_id.vue
-->
<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        Home for ID
      </h1>
      <div class="links">
        HOME FOR ID
      </div>
      <div>{{temp}}</div>
    </div>
  </div>
</template>

<script>
export default {
  validate({ params }) {
    // 初始化时检测类型，如必须为Number
    console.log('I am here1',process.server);
    return /^\d+$/.test(params.id);
  },
  async asyncData(ctx) {
    console.log('I am here',process.server);
    const result = await ctx.$axios.get("/index");
    return {temp:result}    
  },

  middleware: "home-filter",
  layout: "theme"
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
