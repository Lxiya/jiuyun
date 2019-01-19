<template>
	<div>
		<div class="member-add page-with-nav-top">
			<NavTop :title="title"/>
			<div class="from-group">
				<div class="input-group">
					<van-field v-model="Member.nickName" label="姓名：" required placeholder="会员姓名"/>
				</div>
				<div class="input-group">
					<van-field v-model="Member.sex" label="性别" placeholder="会员性别" readonly @click="showSexPopup"/>
				</div>
				<div class="input-group">
					<van-field v-model="Member.phoneNumber" label="手机号：" required placeholder="手机号"/>
				</div>
				<div class="input-group">
					<van-field
						v-model="Member.password"
						label="密码："
						placeholder="(选填)默认密码为123456"
						type="password"
					/>
				</div>
				<div class="input-group">
					<van-field v-model="repeatPassword" label="确认密码：" placeholder="请确认密码" type="password"/>
				</div>
				<div class="input-group last-group">
					<van-field
						v-model="Member.birthday"
						label="出生年月："
						required
						placeholder="出生年月"
						readonly
						@click="showDatePopup"
					/>
				</div>
			</div>
			<div class="button-group">
				<div class="button-with-green">
					<van-button :disabled="disabled" @click="submitAdd" plain type="primary">添加</van-button>
				</div>
			</div>

			<!-- 时间日期弹出层 -->
			<van-popup v-model="dataShow" position="bottom">
				<van-datetime-picker
					v-model="currentDate"
					type="date"
					:formatter="formatter"
					:min-date="minDate"
					:max-date="maxDate"
					@cancel="cancelDate"
					@confirm="getSelectedDate"
				/>
			</van-popup>

			<!-- 性别选择弹出层 -->
			<van-popup v-model="sexShow" position="bottom">
				<van-picker
					ref="sex-picker"
					:columns="columns"
					show-toolbar
					@cancel="cancelSex "
					@confirm="getSelectedSex"
				/>
			</van-popup>
		</div>
	</div>
</template>

<script>
import { RegJudge } from '../../../static/js/RegJudge'

export default {
	name: 'jyMemberAdd',
	data() {
		return {
			// 头部导航配置参数
			title: '添加会员',

			repeatPassword: '',

			Member: {
				nickName: '',
				phoneNumber: '',
				password: '',
				birthday: '',
				sex: '',
				shopCode: ''
			},

			disabled: true,
			dataShow: false,
			sexShow: false,
			columns: ['女', '男'],
			minDate: new Date(1949, 10, 1),
			maxDate: new Date(),
			currentDate: new Date()
		}
	},
	methods: {
		//时间日期选择弹出层
		showDatePopup() {
			this.dataShow = true
		},
		cancelDate() {
			this.dataShow = false
		},

		// 性别选择弹出层
		showSexPopup() {
			this.sexShow = true
		},
		cancelSex() {
			this.sexShow = false
		},

		// 时间日期格式转换
		formatter(type, value) {
			if (type === 'year') {
				return `${value}年`;
			} else if (type === 'month') {
				return `${value}月`
			} else if (type === 'day') {
				return `${value}日`
			}
			return value;
		},
		getSelectedDate(value) {
			let date = new Date(value)
			date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
			this.Member.birthday = date
			this.dataShow = false
		},

		getSelectedSex(value, index) {
			this.Member.sex = value
			this.sexShow = false
		},

		// 改变按钮状态
		changeButtonStatus(value) {
			value ? this.disabled = false : this.disabled = true
		},

		submitAdd() {
			let _vm = this

			if (RegJudge.judgeNull(this.Member.sex, '性别', _vm)) {
				if (RegJudge.judgePhone(this.Member.phoneNumber, '手机号码', _vm)) {
					if (RegJudge.judgePassword(this.Member.password, this.repeatPassword, '密码', _vm)) {
						if (RegJudge.judgeNull(this.Member.birthday, '出生日期', _vm)) {
							this.$toast.loading({ mask: false, message: '处理中...' });

							this.disabled = true

							this.$http.get('/app/shop/addMember', {
								params: this.Member
							}).then(reponse => {
								setTimeout(() => {
									this.$toast.clear()

									reponse = reponse.body

									reponse.success ? this.$router.push('/store/memberAddSuccess') : (reponse.code ? (this.$toast('手机号已注册'), this.disabled = false) : false)
								}, 500);
							})
						}
					}
				}
			} else {
				return false
			}
		}

	},
	watch: {
		'Member.nickName'(value) {
			this.changeButtonStatus(value)
		}
	},
	created() {
		this.Member.shopCode = this.$store.getters.getShopCode
	}
}
</script>

<style lang="stylus" scoped>
.page-with-nav-top.member-add
	padding-top 1.26rem
.member-add
	.from-group
		padding 0.38rem 0.3rem
		margin-bottom 0.6rem
		background-color #fff
	.button-group
		padding 0 0.5rem
</style>
