import { Request } from '@/utils/request'

export default {
    actions: {
        loginApi(store, params) {
            return Request({
                url: '/login',
                params: {
                    enterpriseCode: 111111111,
                    account: 'admin',
                    password: '18f4f4d01f8ec4393a12e25521980cb26ad0484783ec6fdc431cc51a8aed71e5385bd22e691736cc504df19a10e6296487d6bd0f2be9e4215a910690162530b8',
                    language: 'zh_CN'
                }
            })
        }
    }
}