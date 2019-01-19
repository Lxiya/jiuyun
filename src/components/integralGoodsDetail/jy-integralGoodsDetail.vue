<template>
	<div>
		<div class="store-detail">
			<div class="detail-show">
				<van-row type="flex" justify="space-between">
					<van-col span="24">
						<IntegralExchange :item="item" :showBig="showBig"/>
					</van-col>
				</van-row>
			</div>

			<div class="accpect-address">
				<div class="position-icon">
					<img src="static/images/position-icon.png" alt>
				</div>
				<div class="address-text">
					<span>兑换地址：{{item.province}} {{item.city}} {{item.county}} {{item.shopAdress}}</span>
				</div>
			</div>

			<div class="store-phone">
				<div class="phone-icon">
					<img src="static/images/phone-icon.png" alt>
				</div>
				<div class="phone-number">
					<span>联系电话：{{item.phoneNumber}}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'jyIntegralGoodsDetail',
	data() {
		return {
			goodsId: '',
			item: {},
			showBig: true
		}
	},
	created() {
		this.goodsId = this.$route.params.goodsId

		this.$http.get('/app/member/shopGoodsListDetail', {
			params: {
				shopGoodsId: this.goodsId
			}
		}).then(reponse => {
			reponse = reponse.body
			this.item = reponse.data

			console.log(reponse)
		})
	}
}
</script>

<style lang="stylus" scoped>
div.store-detail
	padding-top 0.2rem
	.accpect-address, .store-phone
		display flex
		align-items center
		justify-content flex-start
		padding 0.45rem 0 0.45rem 0.25rem
		margin-bottom 0.25rem
		font-size 0.26rem
		background-color #fff
		box-shadow 0px 3px 8px rgba(144, 144, 144, 0.1)
		img
			display block
			width 0.34rem
			margin-right 0.2rem
</style>

