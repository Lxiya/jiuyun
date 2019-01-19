<template>
	<div>
		<div class="member-search page-with-nav-top top">
			<NavTop :title="title"/>
			<div class="search-list">
				<van-list v-model="loading" :finished="finished" @load="loadMore" finished-text="没有更多了">
					<MemberListItem
						v-for="(item,index) in memberList"
						:item="item"
						:key="index"
						:class="(total==index+1)?'last-item':''"
					/>
				</van-list>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'jyMemberSerachList',
	data() {
		return {
			// 头部导航配置参数
			title: '会员搜索',

			shopCode: '',
			infoId: '',
			memberList: [],
			destory: true,
			immediateCheck: false,

			// 分页参数
			page: 1,
			size: 10,
			total: 0,
			loading: false,
			finished: false,
		}
	},
	methods: {
		reuquestData() {
			this.$http.get('/app/shop/selectMember', {
				params: {
					shopCode: this.shopCode,
					infoId: this.infoId,
					page: this.page,
					size: this.size
				}
			}).then(reponse => {
				reponse = reponse.body

				if (reponse.data) {
					this.memberList = this.memberList.concat(reponse.data.list)
					this.total = reponse.data.total
				} else {
					this.memberList = []
					this.total = 0
				}
				this.loading = false

				if (this.memberList.length === this.total) {
					this.finished = true
				}
			})
		},

		//加载更多
		loadMore() {
			setTimeout(() => {
				this.reuquestData()
				this.page++
			}, 500)
		},
	},
	created() {
		this.shopCode = this.$route.params.shopCode
		this.infoId = this.$route.params.infoId
	},
	beforeRouteLeave(to, from, next) {
		to.path.search('memberList') != -1 ? (this.destory = true, this.memberList = []) : this.destory = false

		console.log(this.destory)

		next()
	},
	activated() {
		if (this.destory) {
			this.page = 1
			this.infoId = this.$route.params.infoId
			this.finished = false

		}
	}
}
</script>

<style lang="stylus">
.search-list
	margin-top 0.2rem
</style>

