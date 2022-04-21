import { Router } from 'express'
import UsersController from './Users'
import FileController from './File'
import ConfigController from './Config'
import CommonController from './Common'
import YonghuController from './Yonghu'
import TushufenleiController from './Tushufenlei'
import TushuxinxiController from './Tushuxinxi'
import YonghufenxiangController from './Yonghufenxiang'
import DianzixinxiziyuanController from './Dianzixinxiziyuan'
import XiaoxitixingController from './Xiaoxitixing'
import ForumController from './Forum'
import StoreupController from './Storeup'
import NewsController from './News'
import MessagesController from './Messages'
import DiscusstushuxinxiController from './Discusstushuxinxi'
import DiscussyonghufenxiangController from './Discussyonghufenxiang'
import DiscussdianzixinxiziyuanController from './Discussdianzixinxiziyuan'

export default ({ config, db }) => {
	let api = Router()

	api.use('/users', UsersController({ config, db }))

	api.use('/file', FileController({ config, db }))

	api.use('/config', ConfigController({ config, db }))

	api.use('/', CommonController({ config, db }))

	api.use('/yonghu', YonghuController({ config, db }))

	api.use('/tushufenlei', TushufenleiController({ config, db }))

	api.use('/tushuxinxi', TushuxinxiController({ config, db }))

	api.use('/yonghufenxiang', YonghufenxiangController({ config, db }))

	api.use('/dianzixinxiziyuan', DianzixinxiziyuanController({ config, db }))

	api.use('/xiaoxitixing', XiaoxitixingController({ config, db }))

	api.use('/forum', ForumController({ config, db }))

	api.use('/storeup', StoreupController({ config, db }))

	api.use('/news', NewsController({ config, db }))

	api.use('/messages', MessagesController({ config, db }))

	api.use('/discusstushuxinxi', DiscusstushuxinxiController({ config, db }))

	api.use('/discussyonghufenxiang', DiscussyonghufenxiangController({ config, db }))

	api.use('/discussdianzixinxiziyuan', DiscussdianzixinxiziyuanController({ config, db }))

	return api
}
