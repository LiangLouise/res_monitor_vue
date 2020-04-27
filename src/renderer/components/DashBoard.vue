<template>
    <div>
        <p>Total Memory: {{ $store.state.memory_total }} Gb</p>
        <p>CPU Speed {{cpu_speed}} GHz</p>
        <p>CPU Info {{cpu_usage}} GHz</p>
        <el-progress type="circle" :percentage=memory_usage></el-progress>
    </div>

    
</template>

<script>
import { mapGetters } from 'vuex';
let si = require('systeminformation');

export default {
    data() {
        return {
            memory_usage: 0,
            memory_total: 0,
            cpu_speed: 0,
            cpu_usage: 0 
        }
    },

    mounted() {
        this.memInterval = setInterval(this.getMemData, 2000)
        this.cpuInterval = setInterval(this.getCpuData, 2000)
    },
    
    methods: {
        getMemData() {
            si.mem().then(data => {
                this.memory_usage = Number((data.used / data.total * 100).toFixed(2))
                this.memory_total = (data.total / Math.pow(1024, 3)).toFixed(2)
            })
            .catch(err => {
                console.log(err)
            })
        },
        getCpuData() {
            si.cpuCurrentspeed().then(data => {
                this.cpu_speed = data.avg
                this.cpu_usage = data
            })
            .catch(err => {
                console.log(err)
            })
        }
    },

    beforeDestroy() {
        clearInterval(this.memInterval)
        clearInterval(this.cpuInterval)
    },
    computed: {
        ...mapGetters([
            'memUsage',
            "memTotal"
        ])
    }
}
</script>