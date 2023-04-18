<template>
    <section class="bg-intro" id="home-page">
        <div class="stars" :style=" 'background-image: url(' + require('@/assets/imgs/bg-stars.png') + ')' "></div>
        <div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="center-text">
            <h1>Hi, I’m Gabriela</h1>
            <h2>I turn things into code</h2>
            <h3>make it virtual</h3>
        </div>
    </section>
    <portfolio-section />
    <about-section/>
    <contact-section/>
    <footer-layout/>
</template>

<script>
    import PortfolioSection from "@/views/pages/PortfolioSection.vue";
    import AboutSection from "@/views/pages/AboutSection";
    import ContactSection from "@/views/pages/ContactSection";
    import FooterLayout from "@/views/layout/FooterLayout";
    export default {
        name: "home-page",
        components: {
            PortfolioSection,
            AboutSection,
            ContactSection,
            FooterLayout
        }
    }
</script>

<style lang="scss" scoped>
    @keyframes starPulse {
        from {
            opacity: 1;
        }
        to {
            opacity: .2;
        }
    }
    .bg-intro {
        background-color: #393D51;
        width: 100%;
        min-height: 100vh;
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        overflow: hidden;
        position: relative;
    }
    .stars {
        position: absolute;
        width: 100%;
        min-height: 100%;
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        z-index: 2;
        -webkit-animation: starPulse 4s infinite alternate;
        -moz-animation: starPulse 4s infinite alternate;
        -o-animation: starPulse 4s infinite alternate;
        animation: starPulse 4s infinite alternate;
    }
    @keyframes animateBg {
        0%,100%
        {
            transform:scale(1);
        }
        50%
        {
            transform:scale(1.2);
        }
    }
    span{
        position: absolute;
        top: 50%;
        left: 50%;
        width: 4px;
        height: 4px;
        background: #fff;
        border-radius: 50%;
        box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1), 0 0 0 8px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 255, 255, 1)  ;
        animation:  animate 3s linear infinite;
    }
    span::before{
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 300px;
        height: 1px;
        background: linear-gradient(90deg, #fff, transparent);
    }
    @keyframes animate {
        0%
        {
            transform: rotate(315deg) translateX(0);
            opacity: 1;
        }
        70%
        {
            opacity: 1;

        }
        100%
        {
            transform: rotate(315deg) translateX(-1500px);
            opacity: 0;

        }

    }
    span {
        &:nth-child(1){
            top: 0;
            right: 0;
            left:initial;
            animation-delay: 0.5s;
            animation-duration: 3s;
        }
        &:nth-child(2){
            top: 80px;
            right: 0px;
            left:initial;
            animation-delay: 2s;
            animation-duration: 5s;
        }
        &:nth-child(3){
            top: 0;
            right: 180px;
            left:initial;
            animation-delay: 4s;
            animation-duration: 4s;
        }
        &:nth-child(4){
            top: 0;
            right: 400px;
            left:initial;
            animation-delay: 3s;
            animation-duration: 6s;
        }
        &:nth-child(5){
            top: 0;
            right: 600px;
            left:initial;
            animation-delay: 6s;
            animation-duration: 7s;
        }
        &:nth-child(6){
            top: 300px;
            right: 0px;
            left:initial;
            animation-delay: 5s;
            animation-duration: 4.5s;
        }
        &:nth-child(7){
            top: 0px;
            right: 700px;
            left:initial;
            animation-delay: 3.5s;
            animation-duration: 3.5s;
        }
        &:nth-child(8){
            top: 0;
            right: 1000px;
            left:initial;
            animation-delay: 4s;
            animation-duration: 5.5s;
        }
    }
    .center-text {
        z-index: 3;
        border: solid 1px #EFF2FF;
        padding: 10px 20px;
        text-align: center;
        line-height: 1.3;
        backdrop-filter: blur(3px);
        h1 {
            color: #EFF2FF;
            font-weight: 400;
            font-size: 40px;
        }
        h2 {
            color: #FF614D;
            font-weight: 300;
            font-size: 32px;
        }
        h3 {
            color: #A2AACE;
            font-family: 'Great Vibes', cursive;
            font-size: 50px;
            margin-left: -6px;
        }
    }
</style>