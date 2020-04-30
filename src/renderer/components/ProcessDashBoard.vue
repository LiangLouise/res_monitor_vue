<template>
    <div>
        <el-table :data="processes" v-loading="loading">
            <el-table-column prop="pid" label="pid" align="center"/>
            <el-table-column prop="name" label="name" align="center"/>
            <el-table-column prop="pcpu" label="pcpu" align="center"/>
            <el-table-column prop="pmem" label="pmem" align="center"/>
            <el-table-column prop="state" label="state" align="center"/>
            <el-table-column prop="path" label="path" width="180" align="center"/>
        </el-table>
    </div>

</template>

<script>
    // No Need to create a store for it, only need this info when at the page
    import {processes} from 'systeminformation';

    export default {
        name: "ProcessDashBoard",
        data() {
            return {
                processes: [],
                getInterval: 0,
                loading: true
            }
        },
        mounted() {
          this.getInterval = setInterval(() => {
              processes().then((data) => {
                  this.processes = data.list
                      .map(child => {
                          return {
                              pid: child.pid,
                              name: child.name,
                              pcpu: child.pcpu.toFixed(2) + "%",
                              state: child.state,
                              path: child.path.length === 0 ? "-": child.path,
                              pmem: child.pmem.toFixed(2) + "%"
                          }
                      });
                  this.loading = false
              })
              .catch(err => {
                  console.log(err)
              })
          }, 3000)
        },
        beforeDestroy() {
            clearInterval(this.getInterval);
        }
    }
</script>

<style scoped>
    @import "~element-ui/lib/theme-chalk/index.css";

    .el-table {
        min-height: 500px;
        width: 100%;
    }

</style>