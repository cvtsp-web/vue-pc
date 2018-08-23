<template>
    <el-dialog title="我是开发小助手" :visible.sync="dialogFlag">
        <el-tabs>
            <el-tab-pane label="选择">
                <dev-helper-chooseapi />
            </el-tab-pane>
            <el-tab-pane label="添加接口地址">
                <dev-helper-addapi />
            </el-tab-pane>
            <el-tab-pane label="上传文件">
                
            </el-tab-pane>
        </el-tabs>
    </el-dialog>
</template>

<script>
    /**
     * @author: wukangjun
     * @created: Tue Aug 21 2018 14:21:33 GMT+0800 (CST)
     */
    import { RequestNode } from '@/utils/request'
    import DevHelperAddapi from './DevHelper-addapi.vue'
    import DevHelperChooseapi from './DevHelper-chooseapi.vue'
    export default {
        name: 'DevHelper',
        components: { DevHelperAddapi, DevHelperChooseapi },
        data() {
            return {
                dialogFlag: false
            }
        },
        mounted() {
            console.log('************* 我是开发小助手 **************')
            this.handlerKeyCommander();
        },
        provide() {
            return {
                actions: {
                    // 保存ip地址
                    saveDevApi(params) {
                        return RequestNode({
                            url: '/devtestapi/insert',
                            params
                        });
                    },
                    // 查找所有ip地址
                    findDevApi() {
                        return RequestNode({
                            url: '/devtestapi/find',
                            method: 'get'
                        })
                    }
                }
            }
        },
        methods: {
            /**
             * 键盘命令事件 (当前组件键盘: ctrl + 0)
             * @param {Event} e
             */
            handlerKeyCommander() {
                document.addEventListener('keydown', e => {
                    var e = e || window.event;
                    var keycode = e.keyCode || e.which || e.charCode || 0;
                    var ctrlKey = e.ctrlKey || e.metaKey;
                    // ctrl + s(number)
                    if(ctrlKey && keycode === 83) {
                        e.preventDefault();
                        this.dialogFlag = true;
                    } 
                })
            }
        }
    }
</script>

<style lang="less" scoped>
@import '../style/DevHelper.less';

</style>

