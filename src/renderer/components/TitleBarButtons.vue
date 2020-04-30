<template>
    <div>
        <el-button class="title-button" size="small" icon="el-icon-minus" @click="onMinimize" circle></el-button>
        <el-button class="title-button" size="small" icon="el-icon-full-screen" @click="onMaximize" circle></el-button>
        <el-button class="title-button" size="small" type="danger" icon="el-icon-close" @click="onClose" circle></el-button>
    </div>
</template>

<script>
    const {remote} = require("electron");

    const win = remote.getCurrentWindow();

    export default {
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
    @import "~element-ui/lib/theme-chalk/index.css";

    .title-button {
        cursor: default;
    }
</style>
