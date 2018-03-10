<template>
    <h1>TEXT</h1>
</template>

<script>

export default {
    layout: 'userInterface',
    fetch({redirect}) {
       if(true) {
           redirect('/login')
       }
    }
}
</script>

<style>

</style>
