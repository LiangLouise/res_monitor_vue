<template>
    <div>
        <p>Total Memory: {{ memTotal }} Gb</p>
        <el-progress type="circle" :percentage=memUsage></el-progress>
        <el-progress type="circle" :percentage=cpuLoad.cpu_currentLoad></el-progress>
        <el-progress type="circle" :percentage=cpuLoad.cpu_currentload_user></el-progress>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        computed: {
            ...mapGetters('Mem', [
                'memUsage',
                'memTotal'
            ]),
            ...mapGetters('Cpu', [
                'cpuLoad'
            ])
        }
    }
</script>

<style lang="scss">
    @import "~element-ui/packages/theme-chalk/src/progress";
</style>