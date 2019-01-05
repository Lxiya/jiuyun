<template>
	<div>
		<div class="nav-top">
			<van-nav-bar
				:title="title"
				:fixed="fixed"
				:border="border"
				:right-text="rightText"
				left-arrow
				@click-left="onClickLeft"
				@click-right="onClickRight"
			/>
		</div>
	</div>
</template>

<script>
export default {
	name: 'NavTop',
	props: {
		title: String,
		border: Boolean,
		rightText: String,
		routerReplace: String
	},
	data() {
		return {
			fixed: true
		}
	},
	methods: {
		onClickLeft() {
			this.$router.go(-1)
		},
		onClickRight() {
			this.$router.push(this.routerReplace)
		}
	}
}
</script>
