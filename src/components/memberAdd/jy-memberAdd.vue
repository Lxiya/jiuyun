<template>
	<div>
		<div class="member-add page-with-nav-top">
			<NavTop :title="title"/>
			<div class="from-group">
				<div class="input-group">
					<van-field v-model="userName" label="姓名：" required placeholder="会员姓名"/>
				</div>
				<div class="input-group">
					<van-field v-model="sex" label="性别" placeholder="会员性别" @click="showSexPopup"/>
				</div>
				<div class="input-group">
					<van-field v-model="phone" label="手机号：" required placeholder="手机号"/>
				</div>
				<div class="input-group">
					<van-field v-model="password" label="密码：" placeholder="默认初始密码123456" type="password"/>
				</div>
				<div class="input-group">
					<van-field v-model="confirmPaasword" label="确认密码：" placeholder="请确认密码" type="password"/>
				</div>
				<div class="input-group last-group">
					<van-field
						v-model="brithday"
						label="出生年月："
						required
						placeholder="出生年月"
						@click="showDataPopup"
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
					@cancel="cancel"
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
export default {
	name: 'jyMemberAdd',
	data() {
		return {
			// 头部导航配置参数
			title: '添加会员',

			userName: '',
			sex: '',
			sexIndex: '',
			phone: '',
			password: '',
			confirmPaasword: '',
			brithday: '',
			shopCode: '',

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
		submitAdd() {
			// alert('提交')
		},

		//时间日期选择弹出层
		showDataPopup() {
			this.dataShow = true
		},
		cancel() {
			this.dataShow = false
		},

		// 性别选择弹出层
		showSexPopup() {
			this.sexShow = true
		},
		cancelSex() {
			this.sexShow = false
		},


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

		// 获得生日
		getSelectedDate(value) {
			let date = new Date(value)
			date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
			this.brithday = date
			this.dataShow = false

		},

		// 获得性别
		getSelectedSex(value, index) {
			this.sex = value
			this.sexIndex = index
			this.sexShow = false
		},

		// 请求
		submitAdd() {
			this.$http.get('/app/shop/addMember', {
				params: {
					nickName: this.userName,
					phoneNumber: this.phone,
					password: this.password,
					birthday: this.brithday,
					shopCode: this.shopCode
				}
			}).then(reponse => {
				reponse = reponse.body
			})
		}

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
