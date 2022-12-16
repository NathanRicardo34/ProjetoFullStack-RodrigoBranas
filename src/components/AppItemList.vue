<script lang="ts" setup>
import { toRefs, ref } from 'vue'

const itemText = ref<string>('')

const emit = defineEmits(['Item'])
const props = defineProps<{
    title: string,
    items: string[]
}>()
const { title, items } = toRefs(props)

const placeholder = `Digite o ${title.value.toLowerCase()}`

const addItem = (data:string) => {
  items.value.push(data)
  itemText.value = ''
  emit('Item', items)
}
const deleteItem = (data:string) => {
  items.value.splice(items.value.indexOf(data), 1)
  emit('Item', items)
}
</script>
<template>
<h5>{{ title }} <span>{{items.length}}</span></h5>
<div class="card">
    <div class="card-body ">
        <div class="blockScroll">
        <ul >
            <li v-for="(prefix, key) in items" :key="key">
            <div class="grid grid-cols-12">
                <div class="flex justify-between col-span-12">
                <div>
                    {{prefix}}
                </div>
                <div>
                    <button class="ml-1" @click="deleteItem(prefix)"><ify icon="clarity:trash-solid"/></button>
                </div>
                </div>
            </div>
            </li>
        </ul>
        </div>
        <br/>
        <div class="flex">
        <!-- <input v-model="prefixText" type="text" v-on:keyup.enter="addPrefix(prefixText)" placeholder="Digite o prefixo"/> -->
        <input v-model="itemText" type="text" @keyup.enter="addItem(itemText)" :placeholder="placeholder" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        <button class="ml-1" @click="addItem(itemText)"><ify icon="ic:baseline-plus"/></button>
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
