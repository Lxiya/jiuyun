<template>
	<div>
		<div class="add-success page-with-nav-top">
			<NavTop :title="title"/>
			<Success>
				<div slot="success-type">
					<h1 class="font-green">您已添加成功</h1>
				</div>
			</Success>
		</div>
	</div>
</template>

<script>
export default {
	name: 'jyAddSuccess',
	data() {
		return {
			title: '我的会员'
		}
	},

}
</script>

<style lang="stylus" scoped>
.add-success
	display flex
	justify-content center
	// align-items center
</style>

