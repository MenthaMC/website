<script setup lang="ts">
import "@/style/main.css"
import { Search } from '@element-plus/icons-vue'
import {ref} from "vue";
import { searchItem } from "@/util/util.ts"
import Prism from "prismjs";

const input = ref('')
const reload = () => {
  window.location.reload()
}

Prism.highlightAll();
</script>

<template>
  <div class="main_box">
    <p class="max">MenthaMC - Maven repository.</p>
    <p class="sub">Welcome to MenthaMC!!</p>
    <div style="width: 100%; display: flex; justify-content: center;">
      <el-input
          style="width: calc(100% / 2);"
          placeholder="请输入你要搜索的Maven包...."
          v-model="input"
          :prefix-icon="Search"
          @keydown.enter="searchItem(input)"
          clearable
      />
    </div>
    <hr>

    <p>Maven</p>
    <div style="margin: 20px;">
      <pre>
        <code class="language-xml line-numbers">
          &lt;repositories&gt;
            &lt;repository&gt;
              &lt;id&gt;mentha-mc&lt;/id&gt;
              &lt;url&gt;https://repo.menthamc.com/repository/maven-public/&lt;/url&gt;
            &lt;/repository&gt;
          &lt;/repositories&gt;
        </code>
      </pre>
    </div>

    <p>Gradle Groovy</p>
    <div style="margin: 20px;">
      <pre>
        <code class="language-gradle line-numbers">
          repositories {
            maven {
              url 'https://repo.menthamc.com/repository/maven-public/'
              name 'mentha-mc'
            }
            mavenCentral()
          }
        </code>
      </pre>
    </div>

    <p>Gradle Kotlin</p>
    <div style="margin: 20px;">
      <pre>
        <code class="language-gradle line-numbers">
          repositories {
            maven("https://repo.menthamc.com/repository/maven-public/")
            mavenCentral()
          }
        </code>
      </pre>
    </div>

    <p>SBT</p>
    <div style="margin: 20px;">
      <pre>
        <code class="language-scala line-numbers">
          resolvers += "mentha-mc" at "https://repo.menthamc.com/repository/maven-public/"
        </code>
      </pre>
    </div>

    <hr>
    <p class="copyright">Copyright &copy; 2024&nbsp;<span @click="reload" class="link">MenthaMC</span>. All rights reserved. </p>
  </div>
</template>

<style scoped>
.max {
  display: flex;
  justify-content: center;

  padding-top: 10px;
  font-size: 1.2em;
  user-select: none;
}

.sub {
  margin-bottom: 7px;
}

p {
  display: flex;
  justify-content: center;

  padding-top: 5px;
  font-size: 1.0em;
  user-select: none;
}

.copyright {
  display: flex;
  justify-content: center;

  padding: 10px;
  font-size: 0.5em;
  user-select: none;
  letter-spacing: 0.5px;
}

.link {
  user-select: none;
}

.link:hover {
  cursor: pointer;
}
</style>
