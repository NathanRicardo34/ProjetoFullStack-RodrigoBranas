<script setup lang="ts">
import { ref } from 'vue'

const prefixText = ref<string>('')
const sufixText = ref<string>('')

const addPrefix = (data:string) => {
  prefixes.value.push(data)
  prefixText.value = ''
  generate()
}
const deletePrefix = (data:string) => {
  prefixes.value.splice(prefixes.value.indexOf(data), 1)
  generate()
}

const addSufix = (data:string) => {
  sufixes.value.push(data)
  sufixText.value = ''
  generate()
}
const deleteSufix = (data:string) => {
  sufixes.value.splice(sufixes.value.indexOf(data), 1)
  generate()
}

const generate = () => {
  domains.value = []
  for( let i of prefixes.value) {
    for( let j of sufixes.value) {
      domains.value.push(i + j)
    }
  }
}

const prefixes = ref(['Air', 'Jet', 'Flight'])
const sufixes = ref(['Hub', 'Station', 'Mart'])
const domains = ref(['AirHub', 'AirStation', 'AirMart', 'JetHub', 'JetStation', 'JetMart', 'FlightHub', 'FlightStation', 'FlightMart'])
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
            <div class="card-body">
              <ul >
                <li v-for="(prefix, key) in prefixes" :key="key">
                  <div class="grid grid-cols-3">
                    {{prefix}}
                    <div class="text-right">
                      <button class="ml-1" v-on:click="deletePrefix(prefix)"><ify icon="clarity:trash-solid"/></button>
                    </div>
                  </div>
                </li>
              </ul>
              <br/>
              <div class="row">
                <input v-model="prefixText" type="text" v-on:keyup.enter="addPrefix(prefixText)" placeholder="Digite o prefixo"/>
                <button class="ml-1" v-on:click="addPrefix(prefixText)"><ify icon="ic:baseline-plus"/></button>
              </div>
            </div>
          </div>
          <h5>Sufixos <span>{{sufixes.length}}</span></h5>
          <div class="card">
            <div class="card-body">
              <ul >
                <li v-for="(sufix, key) in sufixes" :key="key">
                  <div class="row">
                    <div class="gap-12 columns-2">
                      {{sufix}}
                      <div class="text-right">
                        <button class="ml-1" v-on:click="deleteSufix(sufix)"><ify icon="clarity:trash-solid"/></button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <br/>
              <div class="row">
                <input v-model="sufixText" type="text" v-on:keyup.enter="addSufix(sufixText)" placeholder="Digite o sufixo">
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
          <ul>
            <li v-for="(domain, key) in domains" :key="key">
              {{domain}}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
