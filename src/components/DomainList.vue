<script lang="ts" setup>
import { computed, toRefs } from 'vue';

const props = defineProps<{
  title: string,
  prefixes: string[],
  sufixes: string[]
}>()
const { title, prefixes, sufixes  } = toRefs(props)
const redirect = (url:string) => {
  window.open(url, '_blank')
}

const domains = computed(() => {
  const aux = []
  for( let i of prefixes.value) {
    for( let j of sufixes.value) {
      const name = i + j
      const url = name.toLowerCase()
      const checkout = `https://www.google.com/search?q=${url}`
      aux.push({
        name,
        checkout
      })
    }
  }
  return aux
})
</script>
<template>
    <h5>{{ title }} <span>{{domains.length}}</span></h5>
    <div class="card">
    <div class="card-body">
        <div class="blockScroll">
        <ul>
            <li v-for="domain in domains" :key="domain.name">
            <div class="grid grid-cols-12">
                <div class="flex justify-between col-span-12">
                <div>
                    {{domain.name}}
                </div>
                <div>
                    <button class="ml-1" @click="redirect(domain.checkout)"><ify icon="material-symbols:add-shopping-cart"/></button>
                </div>
                </div>
            </div>
            </li>
        </ul>
        </div>
    </div>
    </div>
</template>
<style lang="scss" scoped>
.blockScroll {
    height: 120px;
    overflow: auto;
}
</style>
