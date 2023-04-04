<template>
    <section>
        <project-card
        id="culture"
        bg_title="Culture"
        name_title="Culture"
        subname_title="about this project"
        :img_intro="require('@/assets/imgs/project2.jpg')">
            <div class="ml-md-10 ml-lg-10">
                <p class="mb-3"><strong>Client: </strong>CULTURE</p>
                <p class="mb-3"><strong>Category: </strong>Fashion design startup</p>
                <p class="mb-3"><strong>Release: </strong>Under release</p>
                <p class="mb-3"><strong>Description: </strong>Culture is a formal casual clothing design brand, which stands out for having collections inspired by different parts of the world.</p>
                <p class="mb-3"><strong>Website: </strong>Under construction</p>
                <div class="my-tasks">
                    <p class="mr-3"><strong>Tasks:</strong></p>
                    <span>Branding & visual identity</span>
                    <span>Logo design</span>
                    <span>Style clothes</span>
                    <span>Printing</span>
                    <span>Research</span>
                </div>
            </div>
        </project-card>

        <v-row justify="center" class="bg-light">
            <v-col cols="10" sm="10" md="10" align="start" class="mb-n16">
                <h2>layouts</h2>
            </v-col>
        </v-row>

        <v-row justify="center" class="bg-light mt-n5 pb-16">
            <v-col cols="10" sm="10" md="10" align="center">
                <v-row justify="center" class="pb-16">
                    <template v-for="(layout, l) in layouts" :key="l">
                        <v-col cols="10" sm="5" md="4" lg="4" align="center">
                            <v-hover v-slot="{ isHovering, props }">
                                <v-card
                                        class="mx-auto"
                                        color="grey-lighten-4"
                                        max-width="350"
                                        v-bind="props"
                                        @click="dialog = !dialog">

                                    <v-img
                                            :aspect-ratio="1/1"
                                            cover
                                            :src="layout.img">
                                        <v-expand-transition>
                                            <div
                                                    v-if="isHovering"
                                                    class="d-flex transition-fast-in-fast-out v-card--reveal"
                                                    style="height: 100%"
                                            >
                                                <v-card-title class="d-flex flex-column align-center pr-5 pl-5">
                                                    <p class="layout-title" v-html="layout.title"></p>
                                                </v-card-title>
                                                <v-dialog v-model="dialog"
                                                          width="auto">
                                                    <img :src="layout.img"/>
                                                </v-dialog>
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
        <footer-layout></footer-layout>
    </section>
</template>

<script>
    import ProjectCard from "@/views/components/ProjectCard";
    import FooterLayout from "@/views/layout/FooterLayout";
    export default {
        name: "NuahOrg",
        components: {
            ProjectCard,
            FooterLayout
        },
        data: () => ({
            dialog: false,
            layouts: [
                {
                    title: 'Logo',
                    img: require('@/assets/imgs/project1.jpg'),
                },
                {
                    title: 'Banner',
                    img: require('@/assets/imgs/project2.jpg'),
                },
                {
                    title: 'Logo',
                    img: require('@/assets/imgs/project1.jpg'),
                },
                {
                    title: 'Banner',
                    img: require('@/assets/imgs/project2.jpg'),
                },
                {
                    title: 'Logo',
                    img: require('@/assets/imgs/project1.jpg'),
                },
                {
                    title: 'Banner',
                    img: require('@/assets/imgs/project2.jpg'),
                },
            ],
        }),
    }
</script>

<style lang="scss" scoped>

    h2 {
        font-family: 'Great Vibes', cursive;
        font-size: 65px;
        line-height: 1;
        color: #545A79;
        margin-bottom: 30px;
        @media only screen and (max-width: 650px) {
            font-size: 45px;
        }

    }
    .my-tasks {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        word-wrap: break-word;
        span {
            display: inline-block;
            margin: 0 10px 10px 0;
            white-space: nowrap;
            text-transform: uppercase;
            padding: 0 15px;
            color: #F8FAFF;
            background-color: #545A79;
            border-radius: 5px;
            font-family: 'Open Sans', sans-serif;
            font-size: 20px;
        }
    }
    .v-card--reveal {
        background-color: #F8FAFF;
        align-items: center;
        bottom: 0;
        justify-content: center;
        opacity: .9;
        position: absolute;
        width: 100%;
        flex-wrap: wrap;
        word-break: break-word;
    }
    .v-card-title {
        padding: 10px 20px;

        .layout-title {
            font-family: 'Open Sans', sans-serif;
            line-height: 1;
            color: #393D51;
            text-transform: uppercase;
            font-size: 50px;
            text-align: center;
            font-weight: 600;
            @media only screen and (max-width: 960px) {
                font-size: 35px;
            }
        }
    }
    .v-overlay--active .v-overlay__scrim {
        display: none;
    }
    .v-overlay--active {
        backdrop-filter: blur(5px);
        background: rgba(0, 0, 0, .5);
    }
    img {
        position: relative !important;
        min-width: 600px;
        @media only screen and (max-width: 650px) {
            min-width: 300px;
        }
    }

</style>