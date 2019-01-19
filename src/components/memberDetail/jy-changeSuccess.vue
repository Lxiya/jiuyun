<template>
	<div>
		<div class="change-success page-with-nav-top">
			<NavTop :title="title"/>
			<Success>
				<div slot="success-type">
					<h1 class="font-green">您已提交成功</h1>
				</div>
			</Success>
		</div>
	</div>
</template>

<script>
export default {
	name: 'jyChangeSuccess',
	data() {
		return {
			title: '我的会员'
		}
	},

}
</script>

<style lang="stylus" scoped>
.change-success
	display flex
	justify-content center
	// align-items center
</style>

