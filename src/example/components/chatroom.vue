<template>
    <div class="room">
        <ul class="messages" v-chat-scroll>
            <li class="message" v-for="n in messages"><span><b>{{ n.from }}:</b> {{ n.message }}</span></li>
        </ul>
        <input v-model="message" @keydown.enter="send" type="text" class="send-message" placeholder="Type a message...">
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: "",
                messages: [
                    {from: "theomessin", message: "This example demonstrates what the vue-chat-scroll plugin does."},
                    {from: "theomessin", message: "When the v-chat-scroll directive is 
applied to an element,"},
                    {from: "theomessin", message: "it will be automatically monitored by the plugin."},
                    {from: "theomessin", message: "When a new child is added, the plugin will scroll to the bottom of the element."},
                    {from: "theomessin", message: "Why not try it yourself? Simply type a message below and press enter to send!"}
                ]
            };
        },
        methods: {
            send: function () {
                if (this.message == "") return;
                this.messages.push({from: "you", message: this.message});
                this.message = "";
            }
        }
    }
</script>

<style scoped lang="sass" rel="stylesheet/sass">
    .room
        display: flex
        padding: 25px
        width: 600px
        height: 250px
        flex-direction: column
        align-items: flex-start
        justify-content: center
        background-color: #fcfcfc
        border: 1px solid #D3DCE7

    .messages
        padding: 0
        width: 100%
        height: 100%
        list-style: none
        overflow-y: scroll
        overflow-x: hidden

    .message
        transition: all 0.250s linear
        box-sizing: border-box
        padding: 10px
        background-color: #fefefe
        border: 1px solid #D3DCE7
        margin: 5px 5px 5px 0
        word-wrap: break-word

    .message:last-of-type
        @extend .message
        margin: 5px 5px 0 0

    .send-message
        clear: both
        transition: all 0.250s linear
        border: 1px solid #D3DCE7
        color: #5A6A75
        box-sizing: border-box
        padding: 7px
        width: 100%
</style>
