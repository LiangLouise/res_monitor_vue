<template>
    <el-col :span="12">
        <div class="aside-header">
            <P>Menu</P>
        </div>
        <el-menu default-active="currentTab">
            <el-menu-item index="1" @click="onTabClick">
                <i class="el-icon-menu"></i>
                <span slot="title">Hardware</span>
            </el-menu-item>
            <el-menu-item index="2" @click="onTabClick">
                <i class="el-icon-menu"></i>
                <span slot="title">Processes</span>
            </el-menu-item>
            <el-menu-item index="3" @click="onTabClick">
                <i class="el-icon-document"></i>
                <span slot="title">THREE</span>
            </el-menu-item>
            <el-menu-item index="4" @click="onTabClick">
                <i class="el-icon-setting"></i>
                <span slot="title">FOUR</span>
            </el-menu-item>
        </el-menu>
    </el-col>
</template>

<script>

    import {mapGetters} from 'vuex';

    export default {
        name: "SubMenu",
        methods: {
            onTabClick(e) {
                this.$store.commit('Tab/setTabNumber', Number(e.index));
            }
        },
        computed: {
            ...mapGetters('Tab', [
              'currentTab'
            ])
        }
    }
</script>

<style lang="scss" scoped>
    @import '~element-ui/packages/theme-chalk/lib/index.css';

    .aside-header {
        height: 20px;
        justify-content: center;
        max-height: 20px;
        line-height: 10px;
    }

    .el-col {
        width: 100%;
        height: 100%;
    }
</style>