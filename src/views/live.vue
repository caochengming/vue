<template>
	<div id="app">
		<div class="liveFrom">
			<el-form ref="form" :model="form" label-width="120px">
				<el-form-item label="视频宽">
					<el-input v-model="form.width"></el-input>
				</el-form-item>
				<el-form-item label="视频高">
					<el-input v-model="form.height"></el-input>
				</el-form-item>
				<el-form-item label="选择阿里or腾讯">
					<el-radio-group v-model="form.radio">
						<el-radio :label="1">腾讯播放器</el-radio>
						<el-radio :label="2">阿里播放器</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="播放地址">
					<el-input v-model="form.videoUrl"></el-input>
				</el-form-item>
				<el-form-item label="播放地址">
					<el-switch v-model="form.isLive" active-text="直播" inactive-text="回放">
					</el-switch>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="onSubmit">立即创建</el-button>
					<el-button>取消</el-button>
				</el-form-item>
			</el-form>
		</div>
		<div class="videoBox" >
			<player-video :option="form" ></player-video>
		</div>
	</div>
</template>
<script>
	import playerVideo from './aliVideo/player.vue'
	export default {
		name: "app",
		props: {

		},
		data() {
			//数据定义
			return {
				form: {
					radio: 2,
					width: 500,
					height: 300,
					videoUrl: 'http://player.alicdn.com/video/aliyunmedia.mp4',
					isLive: false,
				},
				optionFu:{},
				videoStatus: false,
			};
		},
		methods: {
			onSubmit() {
				this.optionFu = this.form
				this.videoStatus = true
				
			}
		},
		watch: {},
		computed: {},
		components: {
			playerVideo
		},
		beforeCreate: function() {},
		created: function() {},
		beforeMount: function() {},
		mounted: function() {},
		beforeUpdate: function() {},
		updated: function() {},
		beforeDestroy: function() {},
		destroyed: function() {},
	};
</script>

<style scoped>
	#app {
		width: 100vw;
		height: 100vh;
		display: flex;
		/* align-items: center; */
	}

	.liveFrom {
		width: 40%;
		padding: 30px 10px;
		border-right: 1px solid #ccc;
	}

	.videoBox {
		width: 50%;
	}
</style>
