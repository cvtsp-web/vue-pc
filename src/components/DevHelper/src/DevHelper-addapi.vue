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
import { Message } from 'element-ui'
    export default {
          props:["apiOptionsArr"],
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
                },
                alertMess:false
            }
        },
        inject: ['actions'],
        methods: {
           handlerForm() {
                this.$refs['form'].validate( vaild => {
                    if(!vaild) return;
                    this.actions.saveDevApi(this.formData).then(data=>{
                        if(data.flag){
                            //刷新api数组
                            this.$emit("setApi")
                            //重置form
                            this.handlerRepeat()
                            //消息提示
                            Message.success('添加成功')
                        }
                            
                    });
                })
            },

            handlerRepeat() {
                this.$refs['form'].resetFields();
                
            }
        }
    }
</script>
<style>

</style>

