<template>
    <el-form :model="formData" :rules="formDataRules" ref="form">
        <el-form-item label="姓名:" prop="name">
            <el-input v-model="formData.name" />
        </el-form-item>
        <el-form-item label="接口地址:" prop="api">
            <el-input v-model="formData.api" placeholder="例: 10.10.12.122:8007"/>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="handlerForm">提交</el-button>
            <el-button @click="handlerRepeat">重置</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        data() {
            return {
                formData: {
                    name: '',
                    api: ''
                },
                formDataRules: {
                    name: [
                         { required: true, message: '请输入昵称' }
                    ],
                    api: [
                        { required: true, message: '请输入地址' }
                    ]
                }
            }
        },
        inject: ['actions'],
        methods: {
            handlerForm() {
                this.$refs['form'].validate(vaild => {
                    if(!vaild) return;
                    this.actions.saveDevApi(this.formData);
                })
            },

            handlerRepeat() {
                this.$refs['form'].resetFields();
            }
        }
    }
</script>

