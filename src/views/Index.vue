// src/views/Index.vue
<template>
  <div>我是首页</div>
</template>
<script>
import { defineComponent } from "vue"
// import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'

export default defineComponent({
  setup() {
    // let store = useStore()
    let router = useRouter()
    let route = useRoute()
    // console.log('store', store)
    console.log('router', router)
    console.log('route', route)
    console.log('我是App里123112的打印')
  }
})
</script>

