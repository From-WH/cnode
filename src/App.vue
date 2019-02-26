<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <router-view name="main"></router-view>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header'
  import PostList from './components/PostList'
  import Article from './components/Article'
  import UserInfo from './components/UserInfo'


  export default {
    name:'App',
    components:{
      Header,
      PostList,
      Article,
      UserInfo,
    }
  }
</script>

<style>
 body, div{
   margin: 0;
   padding: 0;
 }
 body{
   background-color: rgb(225,225,225);
 }
 .main{
   width: 90%;
   margin: 0 auto;
 }
</style>
