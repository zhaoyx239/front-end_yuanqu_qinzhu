<template>
  <view class="container">
    <view class="form">
      <input
        v-model="userName"
        class="input"
        placeholder="请输入账号"
      />
      <input
        v-model="userPassword"
        class="input"
        placeholder="请输入密码"
        password
      />
      <button class="btn" @click="handleLogin">登录</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      userName: '',
      userPassword: ''
    };
  },
  methods: {
    async handleLogin() {
      if (!this.userName || !this.userPassword) {
        uni.showToast({
          title: '请输入账号和密码',
          icon: 'none'
        });
        return;
      }
      try {
        const res = await uni.request({
          url: '/api/user/login',
          method: 'POST',
          data: {
            userName: this.userName,
            userPassword: this.userPassword
          },
          header: {
            'Content-Type': 'application/json'
          }
        });
        
        if (res.data.code === 200) {
          // 登录成功，保存用户信息
          uni.setStorageSync('userInfo', { userName: this.userName });

          uni.showToast({
            title: '登录成功',
            icon: 'success'
          });

          setTimeout(() => {
            console.log('跳转到首页');
            uni.reLaunch({
              url: '/pages/index/index'
            });
          }, 1000);
        } else {
          uni.showToast({
            title: res.data.msg || '登录失败',
            icon: 'none'
          });
        }
      } catch (error) {
        console.error('登录请求错误：', error);
        uni.showToast({
          title: '请求失败，请检查网络',
          icon: 'none'
        });
      }
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 30rpx;
}

.form {
  width: 100%;
  max-width: 600rpx;
  display: flex;
  flex-direction: column;
}

.input {
  border: 1px solid #ccc;
  border-radius: 10rpx;
  padding: 20rpx;
  margin-bottom: 30rpx;
}

.btn {
  background-color: #007AFF;
  color: white;
  padding: 20rpx;
  border-radius: 10rpx;
}
</style>
