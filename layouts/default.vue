<template>
  <div>
    <v-app>
      <v-content>
        <toolbar></toolbar>
        <nuxt/>
      </v-content>
    </v-app>
  </div>
</template>

<script>
  import Toolbar from '@/components/Toolbar'
  export default {
      components: {
        'toolbar': Toolbar
      }
  }
</script>

<style>

</style>
