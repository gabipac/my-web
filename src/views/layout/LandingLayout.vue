<template>
    <v-layout class="bg-stars">
        <v-app-bar app color="transparent">

            <a href="">
                <img class="logo" :src=" require('@/assets/imgs/logo-dark-squared.svg')">
            </a>

            <v-spacer></v-spacer>

            <v-btn variant="text" class="hidden-xs" href="#portfolio">portfolio</v-btn>
            <p class="hidden-xs">·</p>
            <v-btn variant="text" class="hidden-xs" href="#about">about</v-btn>
            <p class="hidden-xs">·</p>
            <v-btn variant="text" class="hidden-xs" href="#contact">contact</v-btn>

            <v-app-bar-nav-icon class="hidden-sm-and-up" variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </v-app-bar>

        <v-navigation-drawer
                v-model="drawer"
                location="right"
                class="sidebar-menu"
                absolute
                temporary>

            <v-list density="compact" nav>
                <v-list-item title="portfolio" value="portfolio" href="#portfolio"></v-list-item>
                <v-list-item title="about" value="about" href="#about"></v-list-item>
                <v-list-item title="contact" value="contact" href="#contact"></v-list-item>
            </v-list>

        </v-navigation-drawer>

        <a href="#home-page" class="to-top"><v-icon icon="mdi-arrow-up-bold-circle"></v-icon></a>

        <v-main>
            <router-view/>
        </v-main>

        <FooterLayout/>
    </v-layout>
</template>

<script>
    import FooterLayout from "@/views/layout/FooterLayout";

    export default {
        name: "landing-layout",
        data: () => ({
            drawer: false,
        }),
        components: {
            FooterLayout
        },
        created: function () {
            window.addEventListener('scroll', this.handleScroll);
        },
        methods: {
            handleScroll: function () {
                let toTop = document.querySelector('.to-top');
                if (window.pageYOffset > 200) {
                    toTop.classList.add("active");
                } else {
                    toTop.classList.remove("active");
                }
            }
        },
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
            display: flex;
            flex-wrap: wrap;
            section {
                position: relative;
            }
        }
        .v-navigation-drawer {
            /*box-shadow: none !important;*/
            height: 100vh !important;
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
        .to-top {
            background: none;
            position: fixed;
            bottom: 16px;
            right: 32px;
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #393D51;
            text-decoration: none;
            opacity: 0;
            font-size: 32px;
            pointer-events: none;
            transition: all .4s;
            z-index: 1000;
        }
        .to-top.active {
            bottom: 32px;
            opacity: 1;
            pointer-events: auto;
        }
    }
</style>