<template>
    <div>
        <el-button @click="login">登录</el-button>
    </div>
</template>

<script>
    /**
     * @author: undefined
     * @created: Tue Aug 21 2018 17:12:00 GMT+0800 (CST)
     */
    import request from '@/utils/request'
    export default {
        name: 'login',
        methods: {
            login() {
                this.$store.dispatch('loginApi').then(data => {
                    this.$router.push('/home')
                })
            }
        }
    }
</script>
