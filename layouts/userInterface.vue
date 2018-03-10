<template>
    <v-app>
        <v-content>
            <user-menu></user-menu>
            <div class="wrapper">
                <nuxt/>
            </div>
        </v-content>
    </v-app>
</template>

<script>
    import UserMenu from '@/components/UserMenu'

    export default {
        components: {
            'user-menu': UserMenu
        }
    }
</script>

<style scoped>
    .wrapper {
        padding-left: 90px;
        padding-top: 20px;
    }
</style>