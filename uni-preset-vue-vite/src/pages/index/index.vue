<template>
  <view class="content">
    <view class="text-area">
      <text class="system-title">生活园区勤工助学管理系统</text>
    </view>

    <!-- 右上角显示 -->
    <view class="top-right">
      <button v-if="!hasLogin" class="small-btn" @click="goLogin">登录</button>
      <view v-else class="user-wrapper" @click="toggleLogout">
        <text class="username">{{ userName }}</text>
      </view>
    </view>

    <!-- 下拉退出登录 -->
    <view v-if="showLogout" class="logout-popup" @click="logout">
      <text class="logout-text">退出登录</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      hasLogin: false,
      userName: '',
      showLogout: false
    }
  },
  onShow() {
    this.checkLoginStatus();
  },
  methods: {
    checkLoginStatus() {
      const userInfo = uni.getStorageSync('userInfo');
      if (userInfo && userInfo.userName) {
        this.hasLogin = true;
        this.userName = userInfo.userName;
      } else {
        this.hasLogin = false;
        this.userName = '';
      }
    },
    goLogin() {
      uni.navigateTo({
        url: '/pages/login/login'
      });
    },
    toggleLogout() {
      this.showLogout = !this.showLogout;
    },
    logout() {
      uni.removeStorageSync('userInfo');
      this.hasLogin = false;
      this.userName = '';
      this.showLogout = false;

      uni.showToast({
        title: '已退出登录',
        icon: 'none'
      });
    }
  }
}
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative;
}

/* 中间系统标题 */
.text-area {
  display: flex;
  justify-content: center;
}

.system-title {
  font-size: 40rpx;
  color: #333;
  font-weight: bold;
}

.top-right {
  position: absolute;
  top: 20rpx;
  right: 20rpx;
}

.small-btn {
  font-size: 24rpx;
  padding: 10rpx 20rpx;
  background-color: #007AFF;
  color: white;
  border: none;
  border-radius: 10rpx;
}

.user-wrapper {
  background-color: #eee;
  padding: 10rpx 20rpx;
  border-radius: 10rpx;
}

.username {
  font-size: 24rpx;
  color: #333;
}

.logout-popup {
  position: absolute;
  top: 80rpx;
  right: 20rpx;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8rpx;
  padding: 10rpx 20rpx;
  z-index: 10;
}

.logout-text {
  font-size: 24rpx;
  color: red;
}
</style>
