<template>
    <div>
        <el-button class="title-button" size="small" icon="el-icon-minus" @click="onMinimize" circle></el-button>
        <el-button class="title-button" size="small" icon="el-icon-full-screen" @click="onMaximize" circle></el-button>
        <el-button class="title-button" size="small" type="danger" icon="el-icon-close" @click="onClose" circle></el-button>
    </div>
</template>

<script>
    const win = require('electron').remote.getCurrentWindow();

    export default {
        props: [ 'title', 'ico' ],
        data() {
            return {
                isMax: false
            }
        },
        methods: {
            onClose() {
                win.close();
            },
            onMinimize() {
                win.minimize();
            },
            onMaximize() {
                if (win.isMaximized()) {
                    this.isMax = false;
                    win.unmaximize();
                }
                else {
                    this.isMax = true;
                    win.maximize();
                }
            }
        }
    }
</script>

<style>
    @import "~element-ui/packages/theme-chalk/lib/button.css";
    @import "~element-ui/packages/theme-chalk/lib/icon.css";

    .title-button {
        cursor: default;
    }
</style>
