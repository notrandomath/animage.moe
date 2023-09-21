<template>
    <h1>FAQ</h1>
    <div class="faqBox">
        <h2>What is Cal Animage?</h2>
        <p>Cal Animage is a loosely organized association of International Anime clubs. CAA is one of the oldest anime clubs in North America and one of the largest anime clubs in the world outside of Japan.</p>

        <h2>What was the first chapter in Cal Animage?</h2>
        <p>Cal Animage Alpha (CAA) was the first chapter of Cal Animage founded in 1989 by Mike Tatsugawa, George Herbert, Albert Wang and Mike Ellis. CAA was the University of Califonia at Berkley's (UC Berkley) anime club. Tatsugawa was the founding president.</p>

        <h2>...</h2>
    </div>

</template>

<style scoped>
    .faqBox{
        margin-left: 5%;
        background-color: var(--frameColor);
        padding-left: 5%;
        padding-right: 5%;
        border-radius: 50px;
        width: 80%;
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        margin-bottom: 5%;
    }
    h2{
        font-size: 30px;
        @media screen and (max-width: 700px) {
            text-align: center;
        }
    }
    
</style>