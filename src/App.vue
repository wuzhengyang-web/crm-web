<template>
  <!--  template 是HTML5当中的模板标签，这个标签中的内容默认是不显示的
      应用只有一个页面 index.html  App.vue 这里面的内容就是展示在
      index..html的app 中的

      document.querySelect('#app').innerHtml=document.querySelect("template").innerHTML

      template 模板标签下 只能有一个根标签
      .vue后缀名的文件 是vue的组件文件 这个文件中包含三中信息

      template   页面 html
      script     编写js 页面用户交互
      style     编写这个页面的CSS 页面样式

      router-view 标签 表示一个不确定显示的内容 这个要显示的内容 比如vue组件 要在 router中配置路径
      才能显示
  -->
  <!--  <div class="box">
  &lt;!&ndash;    <button>点我到达登陆页</button>&ndash;&gt;
  &lt;!&ndash;    <button>点我到达主页</button>&ndash;&gt;

      <router-link to="/login">登录</router-link>
      <router-link to="/main">主页</router-link>
      <router-view/>
    </div>-->
  <div class="app-box">
   <router-view/>
  </div>
</template>

<script>

</script>
<!--清除内外边距---->
<style lang="less">

* {
  margin: 0;
  padding: 0;
}
.app-box{
  background-color: #fff;
}
html,body,.app-box{
  height: 100%;
  width: 100%;
}
</style>
