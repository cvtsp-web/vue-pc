<template>
    <div>
        <el-upload 
            multiple
            class="picture-upload"
            :action="FILE_UPLOAD" 
            list-type="picture"
            :on-success="handleImageSuccess"
            :before-upload="beforeImageUpload" ref='loads'>
            <img :src="imgUrl" />
            <i class="el-icon-plus"></i>
        </el-upload>
    </div>
</template>

<script>
import CONFIG from '@/utils/config'
import { Upload, Message } from 'element-ui'

export default {
    components: { ElUpload: Upload  },
    data() {
        return {
            imgUrl: '',
            
        }
    },
    computed: {
        uploadObj(){
            return this.$refs['loads'];
        },
        FILE_UPLOAD(){
            return CONFIG.MIDDLE_SERVER + '/devtestapi/upload';
        },
        
    },
    methods: {
        handleImageSuccess(res, file) {
            let _self=this;
            if(file.status == "success"){
                // setTimeout(function(){
                //     _self.uploadObj.clearFiles();
                // },1000)
                
            }
        },

        /**
         * 上传图片之前的回调
         * @param {Object} file: 上传内容的信息
         * @return {Boolean} 是否符合上传规则
         */
        beforeImageUpload(file) {
            const isIMG = ['image/jpeg', 'image/png', 'image/svg', 'image/gif'].indexOf(file.type);
            const isSIZE = file.size / 1024 / 1024 < 2;
            const isFile = file.size / (1024*1024) < 10;
            if(isIMG === -1) {
                if(!isFile) {
                    Message.error('上传内容不能超过10M');
                    return false;
                }
            }else{
                if(!isSIZE) {
                    Message.error('上传内容不能超过2M');
                    return false;
                }
            }
        }
    }
}
</script>
<style>
.picture-upload .el-upload--picture{
    background-color: #fbfdff;
    border: 1px dashed #c0ccda;
    border-radius: 6px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 148px;
    height: 148px;
    line-height: 146px;
    vertical-align: top;
    display: inline-block;
    margin: 10px 10px 10px 0;
    text-align: center;
    cursor: pointer;
    outline: 0;
    
}
.picture-upload .el-upload-list{
    display: inline-block;
}
.picture-upload .el-upload-list .el-upload-list__item{
    width: 450px;
}
</style>

