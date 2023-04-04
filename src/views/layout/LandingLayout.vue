<template>
    <v-layout class="bg-stars">
        <v-app-bar app color="transparent">

            <a href="">
                <img class="logo" :src=" require('@/assets/imgs/logo-dark-squared.svg')">
            </a>

            <v-spacer></v-spacer>

            <v-btn variant="text" class="hidden-xs">portfolio</v-btn>
            <p class="hidden-xs">·</p>
            <v-btn variant="text" class="hidden-xs">about</v-btn>
            <p class="hidden-xs">·</p>
            <v-btn variant="text" class="hidden-xs">contact</v-btn>

            <v-app-bar-nav-icon class="hidden-sm-and-up" variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </v-app-bar>

        <v-navigation-drawer
                v-model="drawer"
                location="right"
                class="sidebar-menu"
                temporary>

            <v-list density="compact" nav>
                <v-list-item title="home" value="home"></v-list-item>
                <v-list-item title="portfolio" value="portfolio"></v-list-item>
                <v-list-item title="about" value="about"></v-list-item>
                <v-list-item title="contact" value="contact"></v-list-item>
            </v-list>

        </v-navigation-drawer>

        <v-main>
            <router-view/>
        </v-main>
    </v-layout>
</template>

<script>
    export default {
        name: "landing-layout",
        data: () => ({
            drawer: false
        }),
    }
</script>

<style lang="scss">
    .logo {
        margin-left: 40px;
        max-height: 40px;
    }
    .v-layout {
        overflow-y: scroll !important;
        overflow-x: hidden !important;
        font-family: 'Oswald', sans-serif;
        color: #A2AACE;

        .v-app-bar {
            position: relative;
            box-shadow: none !important;

            .v-btn {
                text-transform: none !important;
                font-size: 20px;
            }
        }
        .v-main {
            padding-top: 0 !important;
            section {
                position: relative;
            }
        }
        .v-navigation-drawer {
            /*box-shadow: none !important;*/
            height: 100% !important;
            top: 0!important;
            background-color: #F0F3FF;
            color: #4E523E;
            .v-navigation-drawer__content {
                display: flex;
                justify-content: center;
                align-items: center;
                .v-list-item {
                    grid-template-columns: none;
                    .v-list-item__content {
                        display: flex;
                        justify-content: center;
                        font-size: 20px !important;
                        text-align: center;
                        .v-list-item-title {
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            font-size: 18px !important;
                            height: 40px;
                            width: 100px;
                        }
                    }
                }
            }
        }
    }
</style>