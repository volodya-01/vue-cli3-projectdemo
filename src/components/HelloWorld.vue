<template>
  <div class="hello">
    <div class="titleoutbox">
      <div class="title">
        {{ title }}
      </div>
      <div class="linkbox">
        <a href="https://blog.csdn.net/qq_42231156/article/details/88225660"
          >1.https://blog.csdn.net/qq_42231156/article/details/88225660</a
        >
      </div>
        <div class="linkbox">
        <a href="https://blog.csdn.net/lfcss/article/details/81055847"
          >2.https://blog.csdn.net/lfcss/article/details/81055847</a
        >
      </div>
        <div class="linkbox">
        <a href="https://blog.csdn.net/weixin_39773631/article/details/92844592"
          >3.https://blog.csdn.net/weixin_39773631/article/details/92844592</a
        >
      </div>
    </div>
    <div>{{ msg }}---{{ a }}---{{ time1 }}---{{ time2 }}</div>
  </div>
</template>

<script>
import Urlclass from "@/http/Urlclass";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      a: "",
      time1: "",
      time2: "",
      title: "",
    };
  },
  mounted() {
    this.gettest();
    this.gettime();
    setInterval(() => {
      this.gettime();
    }, 1000);
  },
  methods: {
    gettest() {
      this.$axios
        .post(Urlclass.UrlclassLogin + "singer")
        //.post("/api/singer")
        .then((res) => {
          console.log(
            "%cres返回的信息%c",
            "font-size:36px;font-weight:blod;color:red",
            "",
            res
          );
          this.title = res.data.data.title;
        })
        .catch((err) => {
          console.log("连接数据库失败！");
        });
      /* this.$axios
        .post(Urlclass.UrlclassLogin+"/GetControlPressure",JSON.stringify(params))
        .then(res => {
           console.log("%cres返回的信息%c","font-size:36px;font-weight:blod;color:red","", res);
         
        })
        .catch(err => {
          console.log("连接数据库失败！");
        }); */
    },
    gettime() {
      var date = new Date();
      this.time1 = this.$moment(date).format("HH:mm:ss");
      this.time2 = this.$moment(date).format("YYYY-MM-DD HH:mm:ss");
      this.time3 = this.$moment().add(2, "hours").format("YYYY-MM-DD HH:mm:ss");
      this.f = this.$moment().subtract(5, "days").format("YYYY-MM-DD");
      this.g = this.$moment().subtract(2, "hours").format("HH:mm:ss");
      this.h = this.$moment(date).format("HH");
      this.m = this.$moment(date).format("mm");
      this.s = this.$moment(date).format("ss");
      this.year = this.$moment(date).format("YYYY");
      this.month = this.$moment(date).format("MM");
      this.day = this.$moment(date).format("DD");
      var a = new Date("2019.07.01 13:00:00");
      var b = new Date();
      // console.log("a,", a);
      // console.log("b", b);
      // console.log("a-b", a - b);
      // console.log("new Date(a-b)", new Date(a - b));
      // console.log(
      //   "new Date(a-b)",
      //   this.$moment(new Date(a - b)).format("HH:mm:ss")
      // );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 160px;
  .titleoutbox {
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 60px;
    .title {
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: flex-start;
      font: 900 24px sans-serif;
      color: #42b983;
        margin-bottom: 20px;
    }
    .linkbox {
       display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: flex-start;
      a {
        font: 900 16px sans-serif;
        color: #42b983;
        text-decoration: none;
        margin-top: 20px;
        margin-left: 20px;
      }
    }
  }
}
</style>
