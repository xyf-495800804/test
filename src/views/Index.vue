<template>
  <div class="index">
    <div class="index_cotainer">
      <!-- 文字描述 -->
      <div class="index_title">
        <h2>暴富专用</h2>
      </div>
      <!-- 头像结束 -->
      <!-- 搜索框开始 -->
      <div class="index_input">
        <span class="index_input_span">题目</span>
        <input
          class="index_input_inp"
          v-model="subject"
          type="text"
          placeholder="请输入题目"
        />
        <button class="index_input_btn" @click="search">立即搜索</button>
      </div>
      <!-- 搜索框结束 -->
      <!-- 结果展示栏开始 -->
      <div
        v-if="this.dataList != undefined && this.dataList.length != 0"
        class="index_card"
        v-html="dataList"
      ></div>
      <div v-else class="index_card">随便搜索看看</div>
      <!-- 结果展示栏结束 -->

      <!-- 侵权开始 -->
      <div class="index_card_footer">
        本产品接口非本人维护，随时可能失效，可以免费使用，请不要商用，否则后果自负
      </div>
      <!-- 侵权结束 -->

      <!-- 小背景图开始 -->
      <div class="index_img">
        <img src="../assets/image/panxie.jpg" alt="" />
      </div>
      <!-- 小背景图结束 -->
    </div>
  </div>
</template>
<script>
export default {
  name: "Index",
  data() {
    return {
      subject: "", //题目
      dataList: "", //返回结果
      token: "test123",
    };
  },
  methods: {
    /* 搜索框触发事件 */
    search() {
      // console.log(this.subject);
      if (this.subject != undefined && this.subject.length != 0) {
        this.$axios
          .get(`/cad?q=${this.subject}&token=${this.token}`)
          .then((res) => {
            console.log(res);
            this.dataList = res.data;
          });
      } else {
        // alert("请输入东西");
        console.log("请输入东西");
      }
    },
  },
};
</script>

<style lang="less" scoped>
.index {
  width: 100%;
  height: 100%;

  .index_cotainer {
    width: 100%;
    height: 100%;
    .index_title {
      text-align: center;
      h2 {
        margin: 0;
      }
    }
    .index_input {
      width: 100%;
      height: 2.666667rem;
      margin-top: 1.666667rem;
      display: flex;
      .index_input_span {
        flex: 2;
        width: 2.666667rem;
        height: 2.666667rem;
        background: #fbfbfb;
        text-align: center;
        line-height: 2.666667rem;
      }
      .index_input_inp {
        flex: 6;
        margin: 0 0.533333rem;
        border: 0.066667rem solid #e6e6e6;
        border-radius: 0 0.133333rem 0.133333rem 0;
        padding: 0.333333rem;
      }
      .index_input_btn {
        flex: 2;
        border: 0.066667rem solid #e6e6e6;
        border-radius: 0 0.133333rem 0.133333rem 0;
        background-color: #009688;
        color: #fff;
      }
    }
    .index_card {
      margin: 3.333333rem 0.666667rem 0 0.666667rem;
      padding: 0.666667rem;
      border-radius: 1rem;
      border: 1px solid #ebeef5;
      background-color: #fff;
      overflow: hidden;
      color: #303133;
      transition: 0.3s;
      box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    }
    .index_card_footer {
      margin: 3.333333rem 0.666667rem 0 0.666667rem;
      padding: 0.666667rem;
      border-radius: 1rem;
      border: 1px solid #ebeef5;
      background-color: #fff;
      overflow: hidden;
      color: #303133;
      transition: 0.3s;
      box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
      color: #009688;
    }
    .index_img {
      margin-top: 3.333333rem;
      margin-left: 50%;
      transform: translateX(-50%);
      width: 13.333333rem;
      height: 13.333333rem;
      // background-color: chocolate;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
