<template>
    <div id="main">
        <el-container>
            <el-aside width="15%">
                <SubMenu></SubMenu>
            </el-aside>
            <el-container>
                <el-main>
                    <HardWareDashBoard v-if="currentTab === 1"/>
                    <ProcessDashBoard v-else-if="currentTab === 2"/>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import HardWareDashBoard from "./HardWareDashBoard";
    import SubMenu from "./SubMenu";
    import {mapGetters} from 'vuex';
    import ProcessDashBoard from "./ProcessDashBoard";

    export default {
        name: "Main",
        components: {ProcessDashBoard, SubMenu, HardWareDashBoard},
        computed: {
            ...mapGetters('Tab', [
                'currentTab'
            ])
        }
    }
</script>

<style lang="scss" scoped>
    @import "~element-ui/packages/theme-chalk/lib/index.css";
    @import "./vars";

    #main {
        padding-top: $titleBar-Height;
    }

    .el-aside {
        background-color: #DCDFE6;
        color: #333;
        text-align: center;
        line-height: 200px;
        min-width: 150px;
    }

    .el-main {
        background-color: #EBEEF5;
        text-align: center;
        line-height: 160px;
        height: calc(100vh - 40px);
        padding: 20px;
        overflow-y: auto;
        position: relative;
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