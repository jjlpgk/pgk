import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 消息提醒
const XiaoxitixingModel = sequelize.define('XiaoxitixingModel', {
	id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		comment: '主键id'
	},
	tongzhibiaoti: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '通知标题'
	},
	tongzhineirong: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '通知内容'
	},
	tongzhiriqi: {
		type: DataTypes.DATEONLY,
		allowNull: true,
		get() {
            return moment(this.getDataValue('tongzhiriqi')).format('YYYY-MM-DD')
        },
		comment: '通知日期'
	},
	yonghuming: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '用户名'
	},
	xingming: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '姓名'
	},
	lianxidianhua: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '联系电话'
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
	tableName: 'xiaoxitixing'
})

export default XiaoxitixingModel
