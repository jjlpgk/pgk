import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 电子信息资源
const DianzixinxiziyuanModel = sequelize.define('DianzixinxiziyuanModel', {
	id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		comment: '主键id'
	},
	ziyuanmingcheng: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '资源名称'
	},
	ziyuanleixing: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '资源类型'
	},
	ziyuantupian: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '资源图片'
	},
	ziyuanwenjian: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '资源文件'
	},
	ziyuanjieshao: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '资源介绍'
	},
	faburiqi: {
		type: DataTypes.DATEONLY,
		allowNull: true,
		get() {
            return moment(this.getDataValue('faburiqi')).format('YYYY-MM-DD')
        },
		comment: '发布日期'
	},
	yonghuming: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '用户名'
	},
	addtime: {
  		type: DataTypes.DATE,
  		defaultValue: DataTypes.NOW,
    	allowNull: false,
    	get() {
            return moment(this.getDataValue('addtime')).format('YYYY-MM-DD HH:mm:ss')
        },
		comment: '添加时间'
	}
}, {
	timestamps: false,
	freezeTableName: true,
	tableName: 'dianzixinxiziyuan'
})

export default DianzixinxiziyuanModel
