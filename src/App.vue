<template>
  <div id="app">
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </div>-->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%!important;
}
.fl ,.lt {  float: left;  }
.fr ,.rt {  float: right;  }
/*清除浮动*/
.clearfix:after{content:"";display:block;clear:both;}
.clearfix{zoom:1;}
.clear {clear:both;}
.flex{display: flex;display:-webkit-flex;justify-content: space-between;flex-wrap: wrap}
/*placeholder 颜色*/
:-moz-placeholder { color: #666; }
::-moz-placeholder { color: #666;}
input:-ms-input-placeholder{ color: #666;}
input::-webkit-input-placeholder{ color: #666;}
</style>
