<template>
	<div>
		<div class="integral-store">
			<div class="integral-list">
				<van-list v-model="loading" :finished="finished" @load="loadMore" finished-text="没有更多了">
					<van-row type="flex" justify="space-between" gutter="7">
						<van-col span="12" v-for="(item,index) in goodsList" :key="index">
							<div
								@click="goAppActivity(''+activityPath+'/member/integralGoodsDetail/'+item.id+'','商品详情')"
							>
								<IntegralExchange :item="item"/>
							</div>
						</van-col>
					</van-row>
				</van-list>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'jyIntegralGoodsList',
	data() {
		return {
			goodsList: [],
			shopId: '',

			// 分页配置
			page: 1,
			size: 6,
			total: 0,
			loading: false,
			finished: false,
		}
	},
	methods: {
		requestData() {
			this.$http.get('/app/shop/shopGoodsList', {
				params: {
					shopId: this.shopId,
					page: this.page,
					size: this.size
				}
			}).then(reponse => {
				reponse = reponse.body

				if (reponse.data) {
					this.goodsList = this.goodsList.concat(reponse.data.list)
					this.total = reponse.data.total
				} else {
					this.goodsList = []
					this.total = 0
				}

				this.loading = false

				if (this.goodsList.length === this.total) {
					this.finished = true
				}
			})
		},

		loadMore() {
			setTimeout(() => {
				this.requestData()
				this.page++
			}, 500)
		}
	},
	created() {
		this.shopId = this.$route.params.shopId
	}
}
</script>

<style lang="stylus" scoped>
div.integral-store
	padding-top 0.2rem
	overflow-x hidden
</style>

