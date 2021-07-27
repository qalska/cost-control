<template>
    <div>
        <v-app-bar
        color="green"
        dark flat>
            <v-toolbar-title class="nav__title">Cost Control</v-toolbar-title>
            <v-btn class="ml-10" to="/" text>Home</v-btn>
            <v-btn class="ml-3 mr-3" to="/notes" text>Notes</v-btn>
            <v-spacer/>
            <v-btn class="ml-3 mr-3" to="#" text>Log in</v-btn>
        </v-app-bar>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .nav__title{
        font-size: 35px;
    }
</style>