<template>
  <div class="header">
    <router-link :to="{
    name:'home',
    }">
      <img src="../assets/cnodejs_light.svg" alt="logo">
    </router-link>
    <ul>
      <li><a href="">首页</a></li>
      <li><a href="">新手入门</a></li>
      <li><a href="">API</a></li>
      <li><a href="">关于</a></li>
      <li><a href="">注册</a></li>
      <li><a href="">登陆</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style lang="scss" scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .header {
    background-color: rgb(68, 68, 68);
    height: 50px;
  }

  img {
    margin-left: 76px;
    margin-top: 8px;
    height: auto;
    width: 120px;
  }
  ul{
    list-style: none;
    float: right;
  }
  ul li {
    display: inline-block;
    line-height: 50px;
    padding-left: 15px;
    padding-right: 15px;

  }
  ul li:last-child{
    margin-right: 50px;
  }
  a{
    text-decoration: none;
    color: #ccc;
    font-size: 14px;
    text-shadow: none;
  }
</style>