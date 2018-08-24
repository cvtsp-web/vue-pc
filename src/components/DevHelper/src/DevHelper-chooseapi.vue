<template>
    <el-select v-model="currentAPI" style="width: 100%">
        <el-option 
        v-for="(opt, index) in apiOptionsArr" 
        :key="index" 
        :label="getLabel(opt)" 
        :value="opt.api" />
    </el-select>
</template>

<script>
export default {
    props:["apiOptionsArr"],
    data() {
        return{
            currentAPI: '',
            // { api: String, name: String}
            apiOptions: []
        }
    },
    computed:{
       
    },
    inject: ['actions'],
    created() {
       this.currentAPI=localStorage.getItem("server")||""
       this.$emit("setApi")
    },
    methods: {
        getLabel(opt) {
            return `${opt.name}  api: ${opt.api}`
        },
    },
    watch:{
        /**
         * @param (String) val 存储选中的api && 重载页面
         */
        currentAPI(newapi){
            if(newapi!=localStorage.getItem("server")){
                localStorage.setItem('server',newapi)
                window.location.reload()
            }

        },
    }
}
</script>

