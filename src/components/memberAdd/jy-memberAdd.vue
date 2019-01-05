<template>
	<div>
		<div class="member-add page-with-nav-top">
			<NavTop :title="title"/>
			<div class="from-group">
				<div class="input-group">
					<van-field v-model="userName" label="姓名：" placeholder="会员姓名"/>
				</div>
				<div class="input-group">
					<van-field v-model="phone" label="手机号：" placeholder="手机号"/>
				</div>
				<div class="input-group">
					<van-field v-model="password" label="密码：" placeholder="默认初始密码123456" type="password"/>
				</div>
				<div class="input-group last-group">
					<van-field v-model="brithday" label="出生年月：" placeholder="出生年月" @click="showDataPopup"/>
				</div>
			</div>
			<div class="button-group">
				<div class="button-with-green">
					<van-button :disabled="disabled" @click="submitAdd" plain type="primary">添加</van-button>
				</div>
			</div>

			<!-- 时间日期弹出层 -->
			<van-popup v-model="show" position="bottom">
				<van-datetime-picker
					v-model="currentDate"
					type="date"
					:formatter="formatter"
					:min-date="minDate"
					:max-date="maxDate"
					@cancel="cancel"
					@confirm="cancel"
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
			phone: '',
			password: '',
			brithday: '',
			disabled: true,
			show: false,
			minDate: new Date(1949, 10, 1),
			maxDate: new Date(),
			currentDate: new Date()
		}
	},
	methods: {
		submitAdd() {
			alert('提交')
		},
		showDataPopup() {
			this.show = true
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
		cancel() {
			this.show = false
		},
		// selecteDate() {
		// 	console.log(getValues())
		// }
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
