<template>
    <div class="container">
        <h1>vue-chat-scroll example chatroom</h1>
        <chatroom></chatroom>
    </div>
</template>

<script>
    import Chatroom from './chatroom.vue'
    export default {
        components: {
            chatroom: Chatroom
        }
    }
</script>

<style lang="sass" rel="stylesheet/sass">
    @import url('https://fonts.googleapis.com/css?family=Lato:300,400')

    html, body, #app
        margin: 0
        padding: 0
        width: 100%
        height: 100%
        font-size: 13px
        background-color: #fafafa
        font-family: 'Lato', sans-serif

    input
        font-size: 13px
        font-family: 'Lato', sans-serif

    .container
        height: 100%
        display: flex
        align-items: center
        justify-content: center
        flex-direction: column

    h1
        font-size: 20px
        font-weight: 200
</style>