<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    <button class="login-btn" @click="goLogin">登录</button> <!-- 新增按钮 -->
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hello',
    }
  },
  methods: {
    goLogin() {
      uni.navigateTo({
        url: '/pages/login/login'
      })
    }
  },
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}

/* 新增登录按钮样式 */
.login-btn {
  margin-top: 50rpx;
  width: 60%;
  background-color: #007AFF;
  color: white;
  padding: 20rpx;
  border-radius: 10rpx;
}
</style>
