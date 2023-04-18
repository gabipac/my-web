<template>
    <footer class="bg-footer">
        <div :style=" 'background-image: url(' + require('@/assets/imgs/bg-stars.jpg') + ')' "></div>
        <v-container>
            <v-row justify="center" class="ma-0 pt-10">
                <v-col cols="10" sm="10" md="6" lg="6" align="center">
                    <h2>Me on social’s</h2>
                    <div>
                        <a href="https://www.linkedin.com/in/gabriela-paciaroni-39a04b270" target="_blank"><v-icon icon="mdi-linkedin"></v-icon></a>
                        <a href="https://instagram.com/soloveoamor?igshid=ZDdkNTZiNTM=" target="_blank"><v-icon icon="mdi-instagram"></v-icon></a>
                        <a href="https://github.com/gabipac" target="_blank"><v-icon icon="mdi-github"></v-icon></a>
                    </div>
                </v-col>
                <v-col cols="10" sm="10" md="6" lg="6">
                    <p class="para-light">gabrielapaciaroni@gmail.com</p>
                </v-col>
            </v-row>
            <v-row justify="center" class="pt-15 ma-0 align-end align-self-end">
                <v-col cols="10" sm="10" md="10" align="center" class="mt-4">
                    <small><em>Copyright © 2023 imaginegabi.com</em></small>
                </v-col>
            </v-row>
        </v-container>
    </footer>
</template>

<script>
    export default {
        name: "FooterLayout"
    }
</script>

<style lang="scss" scoped>
    .bg-footer {
        background-image: url("../../assets/imgs/bg-stars.jpg");
        position: absolute;
        width: 100%;
        min-height: 300px;
        display: flex;
        flex-direction: column;
        align-content: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        position: relative;
    }
    .v-container {
        min-height: 300px;
    }
    .para-light {
        color: #F8FAFF;
        text-align: center;
    }
    h2 {
        text-transform: uppercase;
        color: #F8FAFF;
        text-align: center;
    }
    small {
        color: #F8FAFF;
        font-family: 'Open Sans', sans-serif;
        white-space: nowrap;
    }
    .v-icon {
        color: #F8FAFF;
        padding: 20px;
    }

</style>