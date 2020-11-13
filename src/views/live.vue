<template>
	<div id="app">
		<div class="liveFrom">
			<el-form ref="form" :model="videoInfo" label-width="120px">
				
				<el-form-item label="选择阿里or腾讯">
					<el-radio-group v-model="videoInfo.playerType">
						<el-radio :label="1">腾讯播放器</el-radio>
						<el-radio :label="2">阿里播放器</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="播放地址">
					<el-input v-model="videoInfo.videoUrl"></el-input>
				</el-form-item>
				<el-form-item label="播放形式">
					<el-switch v-model="videoInfo.isLive" active-text="直播" inactive-text="回放">
					</el-switch>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="onSubmit">立即创建</el-button>
					<el-button>取消</el-button>
				</el-form-item>
			</el-form>
		</div>
		<div class="videoBox">
			<player-video :option="videoInfo" ></player-video>
			<!-- <video-player v-if="source" ref="Aliplayer" :vid="vid" :isLive="isLive" :source="source" :sfreeTime="3" @ended="Aliplayerended"></video-player> -->
		</div>
	</div>
</template>
<script>
	import playerVideo from './aliVideo/player.vue'
	import videoPlayer from './aliPlayer.vue'
	export default {
		name: "app",
		props: {},
		data() {
			//数据定义
			return {
				videoInfo: {
					// 播放器选择
					playerType: 2,
					//视频地址
					videoUrl: 'https://cdn.youinsh.cn/p/record/1694_f4b6272affd011eab87c00163e04c8e0/%E5%85%89%E5%B9%B4%E4%B9%8B%E5%A4%96.m3u8',
					//是否直播
					isLive: false,
					coverUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605268659622&di=e30d84a2ef42dfb7e16efc0815218b24&imgtype=0&src=http%3A%2F%2Fimg2015.zdface.com%2F20170411%2Fb60ccdae878724b30d0286edec3b2212.jpg'
				},
				videoStatus:false,
			};
		},
		methods: {
			onSubmit(){
				this.videoStatus = true
			}
		},
		watch: {},
		computed: {},
		components: {
			playerVideo,
			videoPlayer
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
		width: 600px;
		height: 400px;
	}
</style>
