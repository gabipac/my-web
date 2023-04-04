<template>
    <section :id="id" class="bg-light">
        <v-container>
            <v-row justify="center">
                <v-col cols="10" sm="10" md="10" align="center">
                    <div class="big-title">
                        <span style="white-space: nowrap">{{ bg_title }}</span>
                        <span>{{ name_title }}</span>
                        <span>{{ subname_title }}</span>
                    </div>
                </v-col>
            </v-row>

            <v-row justify="center" class="mt-16">
                <v-col cols="10" sm="10" md="5" align="center" content="center">
                    <v-img :aspect-ratio="1/1" max-width="450" :src="img_intro"></v-img>
                </v-col>

                <v-col cols="10" sm="10" md="5" align="center" class="vl ml-md-10 ml-lg-10">
                    <slot></slot>
                </v-col>
            </v-row>

        </v-container>
    </section>
</template>

<script>
    export default {
        name: "ProjectCard",
        props: {
            id: String,
            bg_title: String,
            name_title: String,
            subname_title: String,
            img_intro: String,
        }
    }
</script>

<style lang="scss" scoped>

    .vl {
        border-left: .5px solid rgba(57, 61, 81, .2);
        @media only screen and (max-width: 960px) {
            border-left: none;
        }
    }

</style>