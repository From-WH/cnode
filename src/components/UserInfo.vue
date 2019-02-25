<template>
  <div>

    <div class="userInfomation ">
      <div>
        <p>个人主页</p>
      </div>
      <div class="loding" v-if="isloading">
        <img src="../assets/loading.gif" alt="">
      </div>
      <div class="username" v-else>
        <section>
          <img :src="userinfo.avatar_url" alt="">
        </section>
        <span>{{userinfo.loginname}}</span>
        <p>{{userinfo.score}}积分</p>
        <p>注册时间{{userinfo.create_at | formatDate}}</p>
      </div>
      <div class="replies">
        <p>回复的主题</p>
        <ul>
          <li v-for="item in userinfo.recent_replies">
            <router-link :to="{
              name:'post_content',
              params:{
              id:item.id
             }
            }">
              <span>{{item.title}}</span>
            </router-link>
          </li>

        </ul>
      </div>
      <div class="topics">
        <p>创建的主题</p>
        <ul>
          <li v-for="item in userinfo.recent_topics">
            <router-link :to="{
              name:'post_content',
              params:{
              id:item.id
             }
            }">
              <span>{{item.title}}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "UserInfo",
    data() {
      return {
        isloading: false,
        userinfo: {}
      }
    },
    methods: {
      getUserData() {
        this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
          .then(res => {
            this.isloading = false
            this.userinfo = res.data.data
          }).catch(function (err) {
          console.log(err)
        })
      }
    },
    beforeMount() {
      this.isloading = true
      this.getUserData()
    },
  }
</script>

<style lang="scss" scoped>
  .userInfomation {
    background: white;
    width: 75%;
    margin: 10px auto;
  }

  .userInfomation section {
    padding: 12px;
  }
  .username{
    padding: 10px 10px;
  }
  .userInfomation img {
    width: 30px;
    border-radius: 3px;
  }

  .userInfomation li {
    list-style: none;
  }

  .userInfomation .replies,
  .userInfomation .topics {
    font-size: 0.72rem;
    border-top: 10px #DDDDDD solid;
  }

  .userInfomation > div > p {
    padding: 12px 0 12px 12px;
    background-color: rgba(212, 205, 205, 0.17);
    font-size: 0.85rem;
    margin: 0;
  }

  .userInfomation > div > ul > li {
    padding: 4px 0 4px 12px;
    white-space: nowrap;
    font-size: 0.8rem;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    text-overflow: ellipsis;
    overflow: hidden;
    line-height: 30px;
    vertical-align: middle;
  }

  .userInfomation > div > ul > li > a {
    color: #094E99;
    text-decoration: none;
  }
</style>