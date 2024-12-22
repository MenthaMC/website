<script setup lang="ts">
import "@/style/search.css"
import axios from "axios";
import {useRoute} from "vue-router";
import {onUpdated, ref} from "vue";
import {ArrowRightBold, Files, Search} from "@element-plus/icons-vue";
import { searchItem } from "@/util/util.ts"
import Prism from "prismjs";

const loading = ref(true)
const data = ref({})
const query = useRoute().query.q
const input = ref(query);
const isEmpty = ref(false)

if ((useRoute().query.q?.length as number) > 0) {
  axios.get(`/api/v1/search?name=` + query).then(msg => {
    const item = msg.data;
    if (((item.items as Array<any>).length) > 0) {
      data.value =  item
    } else {
      isEmpty.value = true
    }

    loading.value = false
  })
} else {
  axios.get(`/api/v1/search`).then(msg => {
    const item = msg.data;
    if (((item.items as Array<any>).length) > 0) {
      data.value =  item
    } else {
      isEmpty.value = true
    }

    loading.value = false
  })
}

onUpdated(() => Prism.highlightAll())
</script>

<template>
  <div class="main_box" v-loading="loading">
    <div class="layout">
      <div class="header">
        <p class="max">MenthaMC - Maven repository.</p>
        <div style="width: 100%; display: flex; justify-content: center;">
          <el-input
              style="width: calc(100% / 2);"
              placeholder="请输入你要搜索的Maven包...."
              v-model="input"
              :prefix-icon="Search"
              @keydown.enter="searchItem(input as string)"
              clearable
          />
        </div>
        <hr>
      </div>

      <div class="main">
        <el-scrollbar height="100%">
          <el-collapse>
            <div v-if="!isEmpty">
              <el-collapse-item v-for="item in (data as any).items" :icon="ArrowRightBold">
                <template #title>
                  &nbsp;&nbsp;&nbsp;&nbsp;<el-icon><Files /></el-icon>
                  &nbsp;&nbsp;&nbsp;&nbsp;{{ item.group }}:{{ item.name }}:{{ item.version }}
                </template>

                <p>Maven</p>
                <div style="margin: 20px;">
                <pre>
                  <code class="language-xml line-numbers">
                    &lt;dependency&gt;
                      &lt;groupId&gt;{{ item.group }}&lt;/groupId&gt;
                      &lt;artifactId&gt;{{ item.name }}&lt;/artifactId&gt;
                      &lt;version&gt;{{ item.version }}&lt;/version&gt;
                    &lt;/dependency&gt;
                  </code>
                </pre>
                </div>

                <p>Gradle Groovy</p>
                <div style="margin: 20px;">
                <pre>
                  <code class="language-gradle line-numbers">
                    implementation group: '{{ item.group }}', name: '{{ item.name }}', version: '{{ item.version }}'
                  </code>
                </pre>
                </div>

                <p>Gradle Kotlin</p>
                <div style="margin: 20px;">
                <pre>
                  <code class="language-gradle line-numbers">
                    implementation("{{ item.group }}:{{ item.name }}:{{ item.version }}")
                  </code>
                </pre>
                </div>

                <p>SBT</p>
                <div style="margin: 20px;">
                <pre>
                  <code class="language-scala line-numbers">
                    libraryDependencies += "{{ item.group }}" % "{{ item.name }}" % "{{ item.version }}"
                  </code>
                </pre>
                </div>
              </el-collapse-item>
            </div>
            <div v-else>
              <el-empty :description="'\'' + query + '\'' + ' Not Found.'"></el-empty>
            </div>
          </el-collapse>
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>

<style scoped>
.max {
  display: flex;
  justify-content: center;

  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 1.2em;
  user-select: none;
}

p {
  display: flex;
  justify-content: center;

  padding-top: 5px;
  font-size: 1.0em;
  user-select: none;
}
</style>
