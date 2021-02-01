<!--
 * @Author: your name
 * @Date: 2021-01-31 16:30:40
 * @LastEditTime: 2021-01-31 16:41:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Beats\layouts\error.vue
-->

<template>
  <div class="container">
    <div>
    <img src="../static/logo.png" />      
    <h1 v-if="error.statusCode === 404">页面不存在</h1>
    <h1 v-else>应用发生错误异常</h1>
    <nuxt-link to="/">回到首页</nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['error'],
  }
</script>
