<template>
    <h1>History</h1>
    <div class="historyBox">
        <h2>WIP</h2>
        <p>
            The history page of Cal Animage is a work in progress! See
            <a href="https://www.animenewsnetwork.com/encyclopedia/lexicon.php?id=114">https://www.animenewsnetwork.com?/encyclopedia/lexicon.php?id=114</a> 
            and <a href="https://apricot.com/~shogun/C-A.html">https://apricot.com/~shogun/C-A.html</a> 
            for old sources overviewing the origins of Cal Animage.
        </p>
        <p>Do you know something about Cal Animage’s past that you could help tell the world? Please contact us, and help us tell the story of Animage’s early anime clubs!</p>
    </div>
</template>

<style scoped>
    .historyBox{
        margin-left: 5%;
        background-color: var(--frameColor);
        padding-left: 5%;
        padding-right: 5%;
        border-radius: 50px;
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        margin-bottom: 5%;
    }
    h2{
        font-size: 30px;
        @media screen and (max-width: 700px) {
            width: 100%;
            text-align: center;
        }
    }
    p{
        width: 100%;
        text-align: left;
    }
    a{
        word-wrap: break-word;
    }
</style>