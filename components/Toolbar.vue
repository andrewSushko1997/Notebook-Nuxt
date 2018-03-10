<template>
    <v-toolbar dense dark color="primary">
        <v-toolbar-title>Notebook</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn color="info" to="/registration">
            <v-icon>account_circle</v-icon>
            <span class="button-text">Sign-Up</span>
        </v-btn>
        <v-btn color="info" to="/login">
            <v-icon>input</v-icon>
            <span class="button-text">Sign-In</span>
        </v-btn>
    </v-toolbar>
</template>

<script>
    export default {}
</script>

<style scoped>
    .button-text {
        margin-left: 5px;
    }
</style>