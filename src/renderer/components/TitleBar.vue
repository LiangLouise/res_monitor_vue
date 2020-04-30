<template>
    <div class="titleBar">
        <div class="title">{{ title }}</div>
        <div class="btnGroup">
            <TitleBarButtons/>
        </div>
    </div>
</template>

<script>
    import TitleBarButtons from "./TitleBarButtons";
    export default {
        props: ['title'],
        components: {TitleBarButtons}
    }
</script>

<style lang="scss">
    @import "~element-ui/packages/theme-chalk/lib/divider.css";
    @import "~element-ui/packages/theme-chalk/lib/icon.css";
    @import "./vars";

    .title {
        padding-left: 5px;
    }

    .titleBar {
        z-index: 100;
        padding-right: 5px;
        width: calc(100% - 2px);
        position: fixed;
        padding-bottom: 5px;
        justify-content: center;
        align-items: center;
        display: flex;
        color: var(--vue-electron-titlebar-color);
        background-color: #E4E7ED;
        height: $titleBar-Height;
        -webkit-app-region: drag;
    }

    .btnGroup {
        flex-grow: 1;
        display: flex;
        flex-direction: row-reverse;
    }
</style>