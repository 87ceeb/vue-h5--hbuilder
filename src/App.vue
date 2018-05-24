<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <h1>11</h1>
    <button type="button" class="mui-btn" @click="newPage">默认</button>
    <button type="button" class="mui-btn mui-btn-primary">蓝色12</button>
    <button type="button" class="mui-btn mui-btn-success">绿色</button>
    <button type="button" class="mui-btn mui-btn-warning">黄色</button>
    <button type="button" class="mui-btn mui-btn-danger">红色</button>
    <button type="button" class="mui-btn mui-btn-royal">紫色</button>
  </div>
</template>

<script>
import plus from 'plus' // use plus
import mui from 'mui' // use mui
export default {
  name: 'app',
  methods:{
    newPage(){
      alert()
      mui.openWindow({
        url:'./index/index.html',
        id:'new',
        styles:{
          top:0,//新页面顶部位置
          bottom:0//新页面底部位置
        }
      })
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  h1{
    color: red;
  }
}
</style>
