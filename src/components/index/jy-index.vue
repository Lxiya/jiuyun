<template>
	<div>
		<div class="index">
			<div class="jy-header">
				<jy-header/>
			</div>
			<div class="jy-header-nav">
				<jy-headerNav/>
			</div>
			<div class="jy-news-current">
				<jy-newsCurrent/>
			</div>
		</div>
	</div>
</template>

<script>
import jyHeader from '@/components/index/child/jy-header'
import jyHeaderNav from '@/components/index/child/jy-headerNav'
import jyNewsCurrent from '@/components/index/child/jy-newsCurrent'


export default {
	name: 'jyIndex',
	components: {
		'jy-header': jyHeader,
		'jy-headerNav': jyHeaderNav,
		'jy-newsCurrent': jyNewsCurrent
	}
}
</script>

<style lang="stylus" scoped>
div.index
	position relative
	min-height 4.38rem
	.jy-header-nav
		position absolute
		left 0
		right 0
		bottom -1.65rem
	.jy-news-current
		position absolute
		left 0
		right 0
		top 6.33rem
</style>
