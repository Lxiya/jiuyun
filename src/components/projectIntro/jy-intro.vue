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
		this.$http.get('/app/index/articleDetail',
			{ params: { id: '1234567890' } }).then(reponse => {
				reponse = reponse.body
				this.content = reponse.data.content
			})
	}
}
</script>

<style lang="stylus" scoped>
</style>

