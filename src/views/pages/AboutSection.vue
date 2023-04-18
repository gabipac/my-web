<template>
    <section class="bg-light" id="about">
        <v-container>
            <v-row justify="center">
                <v-col cols="10" sm="10" md="10" align="center">
                    <div class="big-title">
                        <span style="white-space: nowrap">about me</span>
                        <span>about me</span>
                        <span>junior coder & web designer</span>
                    </div>
                </v-col>
            </v-row>

            <v-row justify="center" class="mt-15">
                <v-col cols="10" md="6" lg="6" align="center" class="pr-4">
                    <p>My name is Gabriela, and I am a web designer and front-end programmer. I have designed the UX and UI for some startups, and I have made their platforms through the latest technology: JS, Vue.js, Vuetify.<br><br>
                        I have always been passionate about the world of mathematics and design. Although my first college choice was economics, my creative streak has always pulsed within me. When I moved to Spain, I found a favorable environment for it to mature and finally, I decided to plunge into the world of design, hand in hand with technology, which is essential in our lives today.</p>
                </v-col>

                <v-col cols="10" md="4" lg="4"  align="center" align-self="center" order="first" order-sm="first" order-md="2" order-lg="2">
                    <v-img :aspect-ratio="1/1" contain max-width="300" :src=" require('@/assets/imgs/profile.png')" />
                </v-col>
            </v-row>

            <v-row justify="center">
                <v-col cols="10" sm="10" md="10" align="center">
                    <hr>
                    <h2>my skills</h2>
                    <div class="my-skills">
                        <span>Java script</span>
                        <span>VUEJS</span>
                        <span>VUETIFY</span>
                        <span>HTML</span>
                        <span>css</span>
                        <span>jQUERY</span>
                        <span>Bootstrap</span>
                        <span>WEBSTORM</span>
                        <span>VS CODE</span>
                        <span>PHOTOSHOP</span>
                        <span>XD</span>
                        <span>ILUSTRATOR</span>
                        <span>FIGMA</span>
                        <span>GIT</span>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
    export default {
        name: "AboutSection"
    }
</script>

<style lang="scss" scoped>
    hr {
        border: .5px solid rgba(57, 61, 81, .2);
        margin: 50px 0;
    }
    h2 {
        font-family: 'Great Vibes', cursive;
        font-size: 45px;
        line-height: 1;
        color: #545A79;
        margin-bottom: 30px;
    }
    .my-skills {
        word-wrap: break-word;
        span {
            display: inline-block;
            margin: 0 25px 25px 0;
            white-space: nowrap;
            text-transform: uppercase;
            padding: 0 15px;
            color: #F8FAFF;
            background-color: #FF614D;
            border-radius: 5px;
            font-family: 'Oswald', sans-serif;
            font-size: 20px;
        }
    }
    img {
        max-width: -webkit-fill-available;
        @media only screen and (max-width: 960px) {
            max-width: 380px;
        }
    }
</style>