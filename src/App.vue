<script setup lang="ts">
const prefixes = ['Air', 'Jet', 'Flight']
const sufixes = ['Hub', 'Station', 'Mart']
const domains = ['AirHub', 'AirStation', 'AirMart', 'JetHub', 'JetStation', 'JetMart', 'FlightHub', 'FlightStation', 'FlightMart']
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
                  {{prefix}}
                </li>
              </ul>
              <br/>
              <div class="row">
                <input type="text" placeholder="Digite o prefixo"/>
                <button class="ml-1"><ify icon="ic:baseline-plus"/></button>
              </div>
            </div>
          </div>
          <h5>Sufixos <span>{{sufixes.length}}</span></h5>
          <div class="card">
            <div class="card-body">
              <ul >
                <li v-for="(sufix, key) in sufixes" :key="key">
                  {{sufix}}
                </li>
              </ul>
              <br/>
              <div class="row">
                <input type="text" placeholder="Digite o prefixo">
                <button class="ml-1"><ify icon="ic:baseline-plus"/></button>
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
