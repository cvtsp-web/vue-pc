<template>
    <el-select v-model="currentAPI" style="width: 100%">
        <el-option v-for="(opt, index) in apiOptions" :key="index">

        </el-option>
    </el-select>
</template>

<script>
export default {
    data() {
        return{
            currentAPI: '',
            apiOptions: []
        }
    },
    inject: ['actions'],
    async mounted() {
        const results = await this.actions.findDevApi();

    }
}
</script>

