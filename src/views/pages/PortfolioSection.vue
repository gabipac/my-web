<template>
    <section class="bg-light" id="portfolio">
        <v-container>
            <v-row>
                <v-col>
                    <div class="big-title">
                        <span>portfolio</span>
                        <span>portfolio</span>
                        <span>personal projects</span>
                    </div>
                </v-col>
            </v-row>

            <v-row justify="center" class="fill-height mt-15">
                <v-col md="10" align="center">
                    <v-row justify="center">
                        <template v-for="(item, i) in items" :key="i">
                            <v-col cols="10" sm="5" md="4" lg="4" align="center">
                                <v-hover v-slot="{ isHovering, props }">
                                    <v-card
                                            class="mx-auto pa-10"
                                            color="white"
                                            max-width="350"
                                            v-bind="props"
                                            @click="goToPage(item.url)"
                                    >
                                        <v-img
                                                :aspect-ratio="1/1"
                                                :src="item.img"
                                        >
                                            <v-expand-transition>
                                                <div
                                                        v-if="isHovering"
                                                        class="d-flex transition-fast-in-fast-out v-card--reveal"
                                                        style="height: 100%"
                                                        color="white"
                                                >
                                                    <v-card-title class="d-flex flex-column align-center pr-5 pl-5">
                                                        <p class="item-title" v-html="item.title">
                                                        </p>

                                                        <div>
                                                            <p class="item-subtext">
                                                                {{ item.subtext }}
                                                            </p>
                                                            <p class="item-subtitle">
                                                                {{ item.subtitle }}
                                                            </p>
                                                        </div>
                                                    </v-card-title>
                                                </div>
                                            </v-expand-transition>
                                        </v-img>
                                    </v-card>
                                </v-hover>
                            </v-col>
                        </template>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
    export default {
        name: "portfolio-section",
        data: () => ({
            items: [
                {
                    title: 'NUAH <br>UNIVERSITY',
                    subtext: 'Web design + front-end',
                    subtitle: 'VUE JS  -  CSS  -  HTML  -  XD',
                    img: require('@/assets/imgs/logo-nuah-uni.svg'),
                    url: ('/university')
                },
                {
                    title: 'NUAH ORG',
                    subtext: 'Web design + front-end',
                    subtitle: 'VUE JS  -  CSS  -  HTML  -  XD',
                    img: require('@/assets/imgs/logo-nuah-org.svg'),
                    url: ('/nuah')
                },
                {
                    title: 'CULTURE',
                    subtext: 'Branding + identity',
                    subtitle: 'ADOBE (PS - XD - AI)',
                    img: require('@/assets/imgs/logo-culture.svg'),
                    url: ('/culture')
                },
            ],
        }),
        methods: {
            goToPage(pageRoute) {
                this.$router.push(pageRoute);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .v-card--reveal {
        background-color: #FFFFFF;
        align-items: center;
        bottom: 0;
        justify-content: center;
        //opacity: .9;
        position: absolute;
        width: 100%;
        flex-wrap: wrap;
        word-break: break-word;
    }
    .v-card-title {
        padding: 10px 20px;
        .item-title {
            font-family: 'Oswald', sans-serif;
            line-height: 1;
            color: #393D51;
            text-transform: uppercase;
            font-size: 50px;
            text-align: center;
            font-weight: 600;
            letter-spacing: -1px;
            @media (min-width: 960px) and (max-width: 1280px) {
                font-size: 34px;
            }
        }
        .item-subtext {
            font-family: 'Open Sans', sans-serif;
            font-size: 20px;
            text-align: center;
            letter-spacing: -0.5px;
            @media (min-width: 960px) and (max-width: 1280px) {
                font-size: 16px;
            }
        }
        .item-subtitle {
            font-family: 'Oswald', sans-serif;
            font-size: 22px;
            text-align: center;
            letter-spacing: -0.5px;
            text-transform: uppercase;
            color: #FF614D;
            font-weight: 600;
            @media (min-width: 960px) and (max-width: 1280px) {
                font-size: 18px;
            }
        }
    }

</style>