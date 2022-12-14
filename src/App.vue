<script setup lang="ts">
import { computed, ref } from 'vue'

const prefixText = ref<string>('')
const sufixText = ref<string>('')

const addPrefix = (data:string) => {
  prefixes.value.push(data)
  prefixText.value = ''
}
const deletePrefix = (data:string) => {
  prefixes.value.splice(prefixes.value.indexOf(data), 1)
}

const addSufix = (data:string) => {
  sufixes.value.push(data)
  sufixText.value = ''
}
const deleteSufix = (data:string) => {
  sufixes.value.splice(sufixes.value.indexOf(data), 1)
}

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
          <h5>Prefixos <span>{{prefixes.length}}</span></h5>
          <div class="card">
            <div class="card-body ">
              <div class="blockScroll">
                <ul >
                  <li v-for="(prefix, key) in prefixes" :key="key">
                    <div class="grid grid-cols-12">
                      <div class="flex justify-between col-span-12">
                        <div>
                          {{prefix}}
                        </div>
                        <div>
                          <button class="ml-1" @click="deletePrefix(prefix)"><ify icon="clarity:trash-solid"/></button>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <br/>
              <div class="flex">
                <!-- <input v-model="prefixText" type="text" v-on:keyup.enter="addPrefix(prefixText)" placeholder="Digite o prefixo"/> -->
                <input v-model="prefixText" type="text" @keyup.enter="addPrefix(prefixText)" placeholder="Digite o prefixo" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                <button class="ml-1" @click="addPrefix(prefixText)"><ify icon="ic:baseline-plus"/></button>
              </div>
            </div>
          </div>
          <h5>Sufixos <span>{{sufixes.length}}</span></h5>
          <div class="card">
            <div class="card-body">
              <div class="blockScroll">
                <ul >
                  <li v-for="(sufix, key) in sufixes" :key="key">
                    <div class="grid grid-cols-12">
                      <div class="flex col-span-12 justify-between">
                        <div>
                          {{sufix}}
                        </div>
                        <div>
                          <button class="ml-1" v-on:click="deleteSufix(sufix)"><ify icon="clarity:trash-solid"/></button>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <br/>
              <div class="flex">
                <!-- <input v-model="sufixText" type="text" @keyup.enter="addSufix(sufixText)" placeholder="Digite o sufixo"> -->
                <input v-model="sufixText" type="text" @keyup.enter="addSufix(sufixText)" placeholder="Digite o sufixo" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                <button class="ml-1" v-on:click="addSufix(sufixText)"><ify icon="ic:baseline-plus"/></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <h5>Domains <span>{{domains.length}}</span></h5>
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
    </div>
  </div>
</template>

<style scoped>
.blockScroll {
  height: 120px;
  overflow: auto;
}
</style>
