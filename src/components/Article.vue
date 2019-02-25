<template>
  <div class="article">
    <div v-if="isloading">
      <img src="../assets/loading.gif" alt="">
    </div>
    <div v-else>
      <div class="topic_header">
        <div class="topic_title">
          {{post.title}}
        </div>
        <ul>
          <li>•发布于{{post.create_at | formatDate}}</li>
          <li>•作者{{post.author.loginname}}</li>
          <li>•已浏览{{post.visit_count}}次</li>
          <li>来自{{post | tabFormatter}}</li>
        </ul>
        <div v-html="post.content" class="topic_content"></div>
      </div>
      <div>
        <div class="topbar">回复</div>
        <div id="reply" v-for="(reply,index) in post.replies">
          <router-link :to="{
          name:'userInfo',
          params:{
          name:reply.author.loginname
          }
          }">
            <img :src="reply.author.avatar_url" alt="">
            <span>{{reply.author.loginname}}</span>
          </router-link>
          <span>{{index + 1}}楼</span>
          <span class="zan" v-if="reply.ups.length > 0">
            ☝{{reply.ups.length}}
          </span>
          <p class="topic_content" v-html="reply.content"></p>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Article",
    data() {
      return {
        isloading: false,
        posts:{} //当前文章页的所有内容
      }
    },
    methods:{
      getArticleData(){
        this.$http.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
          .then(res=>{
            this.isloading = false
            if(res.data.success === true){
              this.post = res.data.data
            }
          }).catch(err=>{
            console.log(err)
        })
      }
    },
    beforeMount(){
      this.isloading = true
      this.getArticleData()
    }

  }
</script>

<style lang="scss">
  @import url(../assets/markdown-github.css) ;

  .topbar {
    padding: 10px;
    background-color: #f6f6f6;
    height: 16px;
    font-size: 12px;
    margin-top: 10px;
  }

  .article:not(:first-child) {
    margin-right: 340px;
    margin-top: 15px;
  }

  #reply, .topic_header {
    background-color: #fff;
  }
  #reply {
    padding: 10px 10px;
  }
  #reply:nth-child(even) {
    background-color: rgb(246,246,246);
  }

  #reply img {
    width: 30px;
    height: 30px;
    position: relative;
    bottom: -9px;
    border-radius: 3px;
  }

  #reply a, #reply span {
    font-size: 13px;
    color: #666;
    padding: 0 10px;
    text-decoration: none;
  }

  .replySec {
    border-bottom: 1px solid #e5e5e5;
    padding: 0 10px;
  }

  .loading {
    text-align: center;
    padding-top: 300px;
  }

  .replyUp a:nth-of-type(2) {
    margin-left: 0px;
    display: inline-block;
  }

  .topic_header {
    padding: 10px;
  }

  .topic_title {
    font-size: 20px;
    font-weight: bold;
    padding-top: 8px;
  }

  .topic_header ul {
    list-style: none;
    padding: 0px 0px;
    margin: 6px 0px;
  }

  .topic_header li {
    display: inline-block;
    padding: 0 5px;
    font-size: 12px;
    color: #838383;
  }

  .topic_content {
    border-top: 1px solid #e5e5e5;
    line-height: 20px;
    padding: 0 10px;
  }

  .markdown-text img {
    width: 92% !important;
  }
  .zan{
    float: right;
    margin-right: 40px;
  }
</style>