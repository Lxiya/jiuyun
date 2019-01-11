<template>
	<div>
		<div class="project-intro page-with-nav-top">
			<NavTop :title="title"/>
			<div class="intro-content" v-html="content"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'jyIntro',
	data() {
		return {
			// 头部导航配置参数
			title: '项目介绍',

			content: ''
		}
	},
	created() {
		this.$toast.loading({
			mask: false,
			message: '加载中...'
		});

		this.$http.get('/app/index/articleDetail',
			{ params: { id: '1234567890' } }).then(reponse => {
				setTimeout(() => {
					this.$toast.clear()
					reponse = reponse.body
					this.content = reponse.data.content
				}, 500);


			})
	}
}
</script>

<style lang="stylus" scoped>
</style>

