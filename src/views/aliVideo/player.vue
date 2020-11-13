<template>
	<div id="video">
		<div v-if="option" id="aliPlayer"></div>
	</div>
</template>

<script>
	export default {
		name: "video",
		props: {
			option: {
				type: Object
			}
		},
		data() {
			//数据定义
			return {
				player: null,
				tcPlayer: null,
				videoUrl: '',
				isLive:false,
			};
		},
		methods: {
			newPlayerFn() {
				var that = this
				this.player = new Aliplayer({
					"id": "aliPlayer",
					"source": that.option.videoUrl,
					"width": '100%',
					"height": '100%',
					"autoplay": true,
					"isLive": that.isLive,
					"rePlay": false,
					"playsinline": true,
					"preload": true,
					"controlBarVisibility": "hover",
					"useH5Prism": true,
					"setCover":that.option.coverUrl
				}, function(player) {
					console.log("The player is created");
				});
			},
			tcPlayerNewFn() {
				var that = this
				this.tcPlayer = new TcPlayer('aliPlayer', {
					"m3u8"      : that.option.videoUrl,//请替换成实际可用的播放地址
					"m3u8_hd"   : that.option.videoUrl,
					"m3u8_sd"   : that.option.videoUrl,
					"flv": "http://2157.liveplay.myqcloud.com/live/2157_358535a.flv", //增加了一个 flv 的播放地址，用于PC平台的播放 请替换成实际可用的播放地址
					"autoplay": true, //iOS 下 safari 浏览器，以及大部分移动端浏览器是不开放视频自动播放这个能力的
					"live": that.isLive,
					"poster": "http://www.test.com/myimage.jpg",
					"width": '100%', //视频的显示宽度，请尽量使用视频分辨率宽度
					"height": '100%', //视频的显示高度，请尽量使用视频分辨率高度
					"pausePosterEnabled":that.option.coverUrl,
					"poster":that.option.coverUrl,
				});
			},

		},
		watch: {
			
			'option.playerType'(index) {
				if (index == 1) {
					this.player.dispose()
					this.tcPlayerNewFn()
				} else if(index == 2){
					this.tcPlayer.destroy()
					this.newPlayerFn()
				}
			},
			'option.videoUrl'(url) {
				console.log(url)
				this.videoUrl = url
			},
			'option.videoInfo'(status){
				console.log(status)
				this.isLive = status
			}
		},
		computed: {},
		beforeCreate: function() {},
		created: function() {
			this.isLive = this.option.isLive
		},
		beforeMount: function() {},
		mounted: function() {
			console.log(this.option, '父组件传值')
			var that = this
			if (this.option.radio == 1) {
				this.tcPlayer = new TcPlayer('aliPlayer', {
					"m3u8"      : this.option.videoUrl,//请替换成实际可用的播放地址
					"m3u8_hd"   : this.option.videoUrl,
					"m3u8_sd"   : this.option.videoUrl,
					"flv": "http://2157.liveplay.myqcloud.com/live/2157_358535a.flv", //增加了一个 flv 的播放地址，用于PC平台的播放 请替换成实际可用的播放地址
					"autoplay": true, //iOS 下 safari 浏览器，以及大部分移动端浏览器是不开放视频自动播放这个能力的
					"live": that.isLive,
					"poster": "http://www.test.com/myimage.jpg",
					"width": '100%', //视频的显示宽度，请尽量使用视频分辨率宽度
					"height": '100%', //视频的显示高度，请尽量使用视频分辨率高度
				
				});
			} else {
				this.player = new Aliplayer({
					"id": "aliPlayer",
					"source": that.option.videoUrl,
					"width": '100%',
					"height": '100%',
					"autoplay": true,
					"isLive": that.isLive,
					"rePlay": false,
					"playsinline": true,
					"preload": true,
					"controlBarVisibility": "hover",
					"useH5Prism": true,
				}, function(player) {
					console.log("The player is created");
					// player.dispose()
				});
			}

		},
		beforeUpdate: function() {},
		updated: function() {},
		beforeDestroy: function() {},
		destroyed: function() {},
	};
</script>

<style>
	#app {
		width: 100vw;
		height: 100vh;

	}
	#video{
		width: 100%;
		height: 100%;
	}
</style>
