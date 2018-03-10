<template>
    <v-navigation-drawer permanent absolute mini-variant v-model="drawer" class="primary">
        <v-toolbar flat class="transparent">
            <v-list class="pa-0">
                <v-list-tile avatar>
                    <v-list-tile-avatar>
                        <img src="https://randomuser.me/api/portraits/men/85.jpg" >
                    </v-list-tile-avatar>
                </v-list-tile>
            </v-list>
        </v-toolbar>
        <v-list class="pt-0" dense>
            <v-divider></v-divider>
            <v-list-tile v-for="item in items" :key="item.title" @click="">
                <v-tooltip right>
                    <v-list-tile-action slot="activator">
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <span>{{ item.title }}</span>
                </v-tooltip>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        data () {
            return {
                drawer: true,
                items: [
                    { title: 'Home', icon: 'dashboard' },
                    { title: 'About', icon: 'question_answer' }
                ],
            }
        }
    }
</script>