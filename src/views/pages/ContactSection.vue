<template>
    <section class="bg-light">
        <v-container>
            <v-row justify="center">
                <v-col cols="10" sm="10" md="10" align="center">
                    <div class="big-title">
                        <span>contact</span>
                        <span>contact</span>
                        <span>leave me a message</span>
                    </div>
                </v-col>

                <v-col cols="10" sm="6" md="5" align="center" class="mt-15">
                    <p>Let me know how can I help you. Make me your question. Ask for advice. Request my service. Suggest me improvements. Leave your opinion!</p>
                    <v-btn>contact</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
    export default {
        name: "ContactSection"
    }
</script>

<style lang="scss" scoped>
    .v-btn {
        margin: 50px 0;
        background-color: transparent;
        border: solid 2px #FF614D;
        text-transform: none;
        box-shadow: none;
        color: #FF614D;
        font-size: 22px;
        font-family: 'Oswald', sans-serif;
        height: auto !important;
        padding: 5px 30px;
        letter-spacing: 0;

    }

</style>