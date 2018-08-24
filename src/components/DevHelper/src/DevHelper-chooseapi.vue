<template>
    <el-select v-model="currentAPI" style="width: 100%">
        <el-option 
        v-for="(opt, index) in apiOptions" 
        :key="index" 
        :label="getLabel(opt)" 
        :value="opt.api" />
    </el-select>
</template>

<script>
export default {
    data() {
        return{
            currentAPI: '',
            // { api: String, name: String}
            apiOptions: []
        }
    },
    inject: ['actions'],
    async mounted() {
        const { flag, data } = await this.actions.findDevApi();
        
        if(flag) {
            this.apiOptions = data;
        }
    },
    methods: {
        getLabel(opt) {
            return `${opt.name}  api: ${opt.api}`
        },
    },
}
</script>

