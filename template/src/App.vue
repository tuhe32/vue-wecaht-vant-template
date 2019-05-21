<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <keep-alive :include="cachedViews">
        <router-view />
    </keep-alive>
    <van-tabbar v-model="active" class="footbar" v-if="isShowFoot">
    	<van-tabbar-item icon="yemian-copy" :to="{name: 'Home'}" >首页</van-tabbar-item>
    	<van-tabbar-item icon="wode" :to="{name: 'UserIndex'}">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
  import { Tabbar, TabbarItem } from 'vant'
  import {mapState} from 'vuex'
  export default {
    name: 'app',
    components: {
      [Tabbar.name]: Tabbar,
      [TabbarItem.name]: TabbarItem,
    },
    computed: {
      ...mapState({
        isShowFoot:state => state.user.isShowFoot,
        // direction:state => state.user.direction,
        route: state => state.route,
        path: state => state.route.path,
      }),
      active:{
        get:function() {
          // console.log('[active]',this.route)
          if(this.route.path == ('/home')) return 0
          else if(this.route.path == ('/list')) return 1
          else if(this.route.path == ('/add')) return 2
        },
        set:function() {}
      },
      cachedViews() {
        return this.$store.state.view.cachedViews
      },
    },
  }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
