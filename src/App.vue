<template>
  <div id="app">
    <div id="nav">
      <router-link to="/index">首页</router-link>
      <router-link to="/user/login">登录</router-link>
      <router-link to="/user/register">注册</router-link>
    </div>
    <router-view />
  </div>
</template>
