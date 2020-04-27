<template>
    <el-container>
        <el-aside width="15%">
            <SubMenu></SubMenu>
        </el-aside>
        <el-container>
            <el-main><DashBoard></DashBoard></el-main>
        </el-container>
    </el-container>
</template>

<script>
    import DashBoard from "./DashBoard";
    import SubMenu from "./SubMenu";
    export default {
        name: "Main",
        components: {SubMenu, DashBoard}
    }
</script>

<style lang="scss" scoped>
    @import "~element-ui/packages/theme-chalk/lib/index.css";
    @import "./vars";

    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: #DCDFE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        background-color: #EBEEF5;
        text-align: center;
        line-height: 160px;
        height: calc(100vh - 40px);
        margin-top: $titleBar-Height;
        padding: 20px;
        overflow-y: auto;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }

</style>