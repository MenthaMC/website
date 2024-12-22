<script setup lang="ts">
import "@/style/404.css"
import { getRandomInt } from "@/util/mathUtil.ts";

const sayings = [
    "这个箱子里面唯一的物品就是写着 ‘404 Not Found.’的纸条...",
    "你似乎来到了这个网页的无人区，你可能是这里的唯一一个人类。",
    "看来这里是一条死路，你看起来有点饿，需要去码头整点薯条吗？",
    "嘟嘟达嘟嘟达",
    "哥们，你这网页保熟吗？",
    "404 Not Found."
]
const comeBack = () => {
  window.history.back()
}

const jumpToMain = () => {
  window.location.href = '/'
}
const msg = sayings[getRandomInt(0, sayings.length - 1)];
</script>

<template>
  <el-empty :description="msg">
    <el-link type="primary" @click="comeBack">返回上一页</el-link> && <el-link type="primary" @click="jumpToMain">返回主页</el-link>
  </el-empty>
</template>
