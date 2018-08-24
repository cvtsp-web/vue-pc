<template>
    <div>
        <el-upload 
            multiple
            :action="FILE_UPLOAD" 
            list-type="picture-card"
            :on-success="handleImageSuccess"
            :before-upload="beforeImageUpload">
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
            imgUrl: ''
        }
    },
    computed: {
        FILE_UPLOAD() {
            return CONFIG.MIDDLE_SERVER + '/devtestapi/upload';
        }
    },
    methods: {
        handleImageSuccess(res, file) {
            console.log(file)
        },

        /**
         * 上传图片之前的回调
         * @param {Object} file: 上传内容的信息
         * @return {Boolean} 是否符合上传规则
         */
        beforeImageUpload(file) {
            const isIMG = ['image/jpeg', 'image/png', 'image/svg', 'image/gif'].indexOf(file.type);
            const isSIZE = file.size / 1024 / 1024 < 2;

            if(isIMG === -1) {
                Message.error('上传内容不符合图片格式!');
                return false;
            }

            if(!isSIZE) {
                Message.error('上传内容不能超过2M');
                return false;
            }
            return true;
        }
    }
}
</script>

