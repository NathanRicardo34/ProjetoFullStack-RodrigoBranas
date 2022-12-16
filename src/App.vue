<script setup lang="ts">
import { computed, ref } from 'vue'
import AppItemList from './components/AppItemList.vue'
import DomainList from './components/DomainList.vue'

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
const prefixes = ref(['Air', 'Jet', 'Flight'])
const sufixes = ref(['Hub', 'Station', 'Mart'])
</script>
<template>
  <div>
    <h1 class="text-center font-bold underline">
      NameGator
    </h1>
    <h6 class="text-secundary"> Gerador de nomes </h6>
  </div>
  <div>
    <div class="container">
      <div class="row">
        <div class="gap-6 columns-2">
          <div>
            <app-item-list title="Prefixos" :items="prefixes"/>
          </div>
          <div>
            <app-item-list title="Sufixos" :items="sufixes"/>
          </div>
        </div>
      </div>
      <br/>
      <domain-list title="Domain" :prefixes="prefixes" :sufixes="sufixes"/>
    </div>
  </div>
</template>
<style lang="scss" scoped>
</style>
