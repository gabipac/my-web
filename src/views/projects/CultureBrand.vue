<template>
    <project-card
    id="culture"
    bg_title="Culture"
    name_title="Culture"
    subname_title="about this project"
    :img_intro="require('@/assets/imgs/logo-culture2.svg')">
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

    <section class="bg-light">
        <v-container>
            <v-row justify="center">
                <v-col cols="10" sm="10" md="10" align="start" class="mb-n16">
                    <h2>layouts</h2>
                </v-col>
            </v-row>

            <v-row justify="center" class="mt-15">
                <v-col md="10" align="center">
                    <v-row justify="center" class="pb-16">
                        <v-col cols="10" sm="5" md="4" lg="4" align="center" v-for="(layout, l) in layouts" :key="l">
                            <a @click="openDialog(layout.img)" class="portfolio-projects-item">
                                <div class="item-img">
                                    <img class="layout" :src="layout.img"/>
                                </div>
                                <div class="item-hover-details">
                                    <span class="item-name" v-html="layout.title"></span>
                                </div>
                            </a>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>

            <v-dialog v-model="dialog" content-class="photo-dialog" max-width="800px">
                <v-card color="transparent">
                    <v-btn class="close" icon="mdi-window-close" @click="dialog = false"></v-btn>
                    <img :src="dialogImg" />
                </v-card>
            </v-dialog>
        </v-container>
    </section>

    <FooterLayout/>
</template>

<script>
    import ProjectCard from "@/views/components/ProjectCard";
    import FooterLayout from "@/views/layout/FooterLayout";
    export default {
        name: "CultureBrand",
        components: {
            ProjectCard,
            FooterLayout
        },
        data: () => ({
            dialog: false,
            dialogImg: '',
            layouts: [
                {
                    title: 'Brand Book',
                    img: require('@/assets/imgs/culture-book1.jpg'),
                },
                {
                    title: 'Brand Book',
                    img: require('@/assets/imgs/culture-book2.jpg'),
                },
                {
                    title: 'Brand Book',
                    img: require('@/assets/imgs/culture-book3.jpg'),
                },
                {
                    title: 'Brand Book',
                    img: require('@/assets/imgs/culture-book4.jpg'),
                },
                {
                    title: 'Brand Book',
                    img: require('@/assets/imgs/culture-book5.jpg'),
                },
                {
                    title: 'Brand Book',
                    img: require('@/assets/imgs/culture-book6.jpg'),
                },
                {
                    title: 'Brand Book',
                    img: require('@/assets/imgs/culture-book7.jpg'),
                },
                {
                    title: 'Fashion design',
                    img: require('@/assets/imgs/culture-fem1.jpg'),
                },
                {
                    title: 'Fashion design',
                    img: require('@/assets/imgs/culture-fem2.jpg'),
                },
                {
                    title: 'Fashion design',
                    img: require('@/assets/imgs/culture-hombres1.jpg'),
                },
                {
                    title: 'Fashion design',
                    img: require('@/assets/imgs/culture-hombres2.jpg'),
                },
                {
                    title: 'Labels',
                    img: require('@/assets/imgs/culture-postcard.jpg'),
                },
                {
                    title: 'Presentation<br>design',
                    img: require('@/assets/imgs/culture-plegado1.jpg'),
                },
                {
                    title: 'Presentation<br>design',
                    img: require('@/assets/imgs/culture-plegado2.jpg'),
                },
            ],
        }),
        methods: {
            openDialog(input) {
                this.dialog = !this.dialog;
                this.dialogImg = input
            }
        }
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

    .v-overlay--active .v-overlay__scrim {
        display: none;
    }
    .v-overlay--active {
        backdrop-filter: blur(5px);
        background: rgba(0, 0, 0, .5);
    }

    .portfolio-projects-item {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        aspect-ratio: 1 / 1;
        border-radius: 5px;
        overflow: hidden;

        .item-img {
            overflow: hidden;
            object-fit: cover;
            min-height: 100%;
            min-width: 100%;
            .layout {
                overflow: hidden;
                object-fit: cover;
                min-height: 100%;
                min-width: 100%;
                max-width: 100%;
                max-height: 100%;
            }
        }

        .item-hover-details {
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            opacity: 0;
            margin-bottom: -100%;
            transition: all .3s ease;
            background-color: white;

            .item-name {
                color: #393D51;
                text-transform: uppercase;
                font-family: 'Open Sans', sans-serif;
                font-weight: 800;
                font-size: 25px;
                text-align: center;
            }
        }
        &:hover {
            .item-hover-details {
                margin-bottom: 0;
                opacity: .9;
            }
        }
    }
    .v-card {
        .close {
            align-self: flex-end;
            background: transparent;
            box-shadow: none;
            color: #F8FAFF;
        }
    }

</style>