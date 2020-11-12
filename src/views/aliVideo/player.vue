<template>
	<div id="video">
		<div id="aliPlayer"></div>
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
				videoUrl: ''
			};
		},
		methods: {
			newPlayerFn() {
				var that = this
				this.player = new Aliplayer({
					"id": "aliPlayer",
					"source": that.videoUrl,
					"width": that.option.width + 'px',
					"height": that.option.height + 'px',
					"autoplay": true,
					"isLive": true,
					"rePlay": false,
					"playsinline": true,
					"preload": true,
					"controlBarVisibility": "hover",
					"useH5Prism": true,
				}, function(player) {
					console.log("The player is created");
				});
			},
			tcPlayerNewFn() {
				var that = this
				this.tcPlayer = new TcPlayer('aliPlayer', {
					"m3u8": 'http://player.alicdn.com/video/aliyunmedia.mp4',
					"flv": "http://2157.liveplay.myqcloud.com/live/2157_358535a.flv", //增加了一个 flv 的播放地址，用于PC平台的播放 请替换成实际可用的播放地址
					"autoplay": true, //iOS 下 safari 浏览器，以及大部分移动端浏览器是不开放视频自动播放这个能力的
					"live": true,
					"poster": "http://www.test.com/myimage.jpg",
					"width": 500, //视频的显示宽度，请尽量使用视频分辨率宽度
					"height": 300 //视频的显示高度，请尽量使用视频分辨率高度
				});
			},

		},
		watch: {

			'option.radio'(index) {
				console.log(index, '使用那个播放器')
				if (index == 1) {
					this.tcPlayerNewFn()
				} else if(index == 2){
					this.newPlayerFn()
				}
			},
			'option.videoUrl'(url) {
				console.log(url)
				this.videoUrl = url
			},
			option() {

			}
		},
		computed: {},
		beforeCreate: function() {},
		created: function() {

		},
		beforeMount: function() {},
		mounted: function() {
			console.log(this.option, '父组件传值')
			// this.newPlayerFn()
			var that = this
			if (this.option.radio == 1) {
				this.tcPlayer = new TcPlayer('aliPlayer', {
					"m3u8": this.option.videoUrl,
					"flv": "http://2157.liveplay.myqcloud.com/live/2157_358535a.flv", //增加了一个 flv 的播放地址，用于PC平台的播放 请替换成实际可用的播放地址
					"autoplay": true, //iOS 下 safari 浏览器，以及大部分移动端浏览器是不开放视频自动播放这个能力的
					"live": false,
					"poster": "http://www.test.com/myimage.jpg",
					"width": 500, //视频的显示宽度，请尽量使用视频分辨率宽度
					"height": 300 //视频的显示高度，请尽量使用视频分辨率高度
				});
			} else {
				this.player = new Aliplayer({
					"id": "aliPlayer",
					"source": that.option.videoUrl,
					"width": that.option.width + 'px',
					"height": that.option.height + 'px',
					"autoplay": true,
					"isLive": that.option.isLive,
					"rePlay": false,
					"playsinline": true,
					"preload": true,
					"controlBarVisibility": "hover",
					"useH5Prism": true,
				}, function(player) {
					console.log("The player is created");
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
</style>
