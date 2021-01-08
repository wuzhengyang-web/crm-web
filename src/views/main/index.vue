<template>
  <div class="main-box">
    <el-container>
      <el-aside width="200px">
        <div class="title-wrapper">
          <img src="../../assets/cat.jpg" alt="">
          <span>后台管理系统</span>
        </div>
        <el-scrollbar>
          <!--     default-active   默认高亮的内容 对应的是index的取值 一般情况下 取值的是 el-menu-item
                  的 index的取值 -->
          <el-menu
              router
              default-active="1"
              class="el-menu-vertical-demo"
          >
            <!--        el-menu-item  不能展开的 -->
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title">系统首页</span>
            </el-menu-item>
            <!--            el-submenu 表示是二级导航 可以展开 -->
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>商品相关</span>
              </template>
              <el-menu-item index="brand">
                <i class="el-icon-menu"></i>
                <span slot="title">品牌管理</span>
              </el-menu-item>
              <el-menu-item index="category" >
                <i class="el-icon-menu"></i>
                <span slot="title">分类管理</span>
              </el-menu-item>
              <el-menu-item index="2-3">
                <i class="el-icon-menu"></i>
                <span slot="title">商品管理</span>
              </el-menu-item>
            </el-submenu>
            <el-menu-item index="supplier">
              <i class="el-icon-menu"></i>
              <span slot="title">运营商管理</span>
            </el-menu-item>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>售后相关</span>
              </template>
              <el-menu-item index="afterSale">
                <i class="el-icon-menu"></i>
                <span slot="title">退换货出库管理</span>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-scrollbar>

      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <div class="main-body">
            <router-view/>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>
<!-- 第一种方式引入-->
<!--<script src="./index.js"></script>-->
<!--第二种方式 -->
<script>
import obj from "@/views/main/index";
export default obj;
</script>

<style lang="less" >
@import "./index";
</style>
