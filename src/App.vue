<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    if (!window.indexedDB) {
      window.alert('O browser não suporta uma versão estável de IndexedDB.')
    }
  }
}
</script>

<style>
</style>
