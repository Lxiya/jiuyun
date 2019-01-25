<template>
	<div>
		<div class="member-wrapper">
			<NavTop :title="title" :rightText="rightText" :router-replace="routerReplace"/>
			<van-pull-refresh v-model="isLoading" @refresh="onRefresh" :disabled="pullRefresh">
				<div class="member-list" ref="memberList">
					<van-search placeholder="会员编号/手机号/姓名" v-model="value" @search="serachMember()">
						<img src="static/images/search.png" alt slot="left-icon">
					</van-search>
					<div class="list-content">
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
			</van-pull-refresh>
		</div>
	</div>
</template>

<script>
export default {
	name: 'jyMemberList',
	data() {
		return {
			// 头部导航配置参数
			title: '我的会员',
			rightText: '添加',
			routerReplace: '/store/memberAdd',

			shopCode: '',
			memberList: [],
			value: '',

			// 下拉刷新配置
			isLoading: false,
			pullRefresh: false,

			// 分页配置
			page: 1,
			size: 10,
			total: 0,
			loading: false,
			finished: false,

			// 滚动条位置
			scrollPosition: 0
		}
	},
	methods: {
		// 会员列表请求
		reuquestData() {
			this.$http.get('/app/shop/memberList', {
				params: {
					shopCode: this.shopCode,
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

		// 下拉刷新
		onRefresh() {
			this.$http.get('/app/shop/memberList', {
				params: {
					shopCode: this.shopCode,
					page: 1,
					size: 10
				}
			}).then(reponse => {
				reponse = reponse.body

				setTimeout(() => {
					this.isLoading = false;
					this.memberList = reponse.data.list

					this.finished = this.memberList.length === reponse.data.total

					this.page = 2//下拉刷新之后重置当前页码
				}, 500);
			})
		},

		//加载更多
		loadMore() {
			setTimeout(() => {
				this.reuquestData()
				this.page++
			}, 500)
		},

		//会员搜索
		serachMember() {
			this.value ? this.$router.push('/store/memberSerachList/' + this.shopCode + '/' + this.value + '') : false
		}
	},
	created() {
		this.shopCode = this.$route.params.shopCode

		// 暂存店铺授权码,以备后续操作来使用
		this.$store.commit("saveShopCode", this.shopCode);
	},
	mounted() {
		let box = this.$refs.memberList

		box.addEventListener('scroll', () => {
			this.pullRefresh = !!box.scrollTop
		})
	},
	beforeRouteLeave(to, from, next) {
		this.scrollPosition = this.$refs.memberList.scrollTop
		next()
	},
	activated() {
		this.$refs.memberList.scrollTop = this.scrollPosition || 0
	}
}
</script>
<style lang="stylus" scoped>
.member-wrapper
	height 100vh
	box-sizing border-box
.member-list
	height 100vh
	box-sizing border-box
	padding-top 0.96rem
	overflow-y scroll
</style>

