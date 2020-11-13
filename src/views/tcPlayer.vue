<template>
  <div class="">
     
    <div class="prism-player" :id="playerId" :style="playerStyle"></div>
 
  </div>
</template>


<script>

window.AliPlayerComponent = {
  PreviewVodComponent:()=>{},
  MemoryPlayComponent:()=>{}
}

export default {
  name: "Aliplayer",
  props: {
    freeType:{
       type: Number,
        default: 0
    },
    playerStyle: {
      type: String,
      default: ""
    },
    sfreeTime:{
       type: Number,
        default: 0
    },
    isLive: {
      type: Boolean,
      default: false
    },
     playauth: {
        type: String,
        default: ''
    },
    source: {
      type: String,
      default: ""
    },
    cover: {
      type: String,
      default: ""
    },
    cssLink:{   //css版本源
      required: false,
      type: [String],
      default: `https://g.alicdn.com/de/prismplayer/2.8.2/skins/default/aliplayer-min.css`
    },
    scriptSrc:{ //js版本源
      required: false,
      type: [String],
      default: `https://cloudcache.tencent-cloud.com/open/qcloud/video/vcplayer/TcPlayer-2.3.3.js`
    },
    scriptCommter: {
      required: false,
      type: [String],
      default: "./aliplayercomponents-1.0.5.min.js "
    }

  },
  data() {
    return {
      playerId: "aliplayer_" + Math.random().toString(36).substr(2),
      instance: null, //播放器实例
      endTime:0,//
        
    };
  },
  watch:{ 
    //监听播放源变化
    source(){
      this.instance.dispose();
      this.instance = null
      this.initPlayer()
    },
    sfreeTime(val){
      let time = val
      this.instance.setPreviewTime(time);  
    }
  },
 
  created () { 
   
    if (window.Aliplayer === undefined) {
      this.insertScript() 
    } else {
    
      this.initPlayer() 
    }
  },
  mounted(){
  
  },
  methods: {
    insertScript() {
      let _this = this;
      const linkID = 'aliplayer-min-css';
      const scriptID = 'aliplayer-min-js';
      const scriptIDs = 'aliplayercomponents-1.0.5.min.js';
      const head = document.getElementsByTagName('head');
      const html = document.getElementsByTagName('html');
      let scriptTag = document.getElementById(scriptID);
      let linkIDTag = document.getElementById(linkID);
      let scriptCommter = document.getElementById(scriptIDs);
      if(!linkIDTag) {
        const link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = _this.cssLink;
        link.id = linkID;
       head[0].appendChild(link);
      }
      if(!scriptTag) {
        
          scriptTag = document.createElement('script');
          scriptTag.type = "text/javascript";
          scriptTag.id = scriptID;
          scriptTag.src = _this.scriptSrc;
          html[0].appendChild(scriptTag);
        
      } 
      if (!scriptCommter) {
      
          scriptCommter = document.createElement('script');
          scriptCommter.type = "text/javascript";
          scriptCommter.id = scriptID;
           scriptCommter.src = _this.scriptCommter;
          html[0].appendChild(scriptCommter);
          scriptCommter.addEventListener("load", function () {
          
            _this.initPlayer();
          });
        }else {
        
            _this.initPlayer();
        }
    },
    initPlayer(){
     
      if(this.instance == null){
        
          
            this.$nextTick(() => {
              this.instance = window.Aliplayer({
                    id: this.playerId,
                    autoplay:true,
                    isLive: this.isLive,
                    waitingTimeout:60,
                    playsinline: true,
                    useH5Prism:true,//	指定使用H5播放器。
                    preload:true,
                    useFlashPrism: false,//	指定使用Flash播放器
                    playauth: this.playauth,
                    source: this.source,
                    showBar:3000,
                    controlBarVisibility:'click',
                    cover: this.cover,
                   // autoPlayDelay: 60,
                   // autoPlayDelayDisplayText:'正在加载中....',
                    x5_orientation:2,//声明TBS播放器支持的方向
                    components: [
                        {
                          name: 'PreviewVodComponent',
                          type:window.AliPlayerComponent.PreviewVodComponent,
                          args: [this.sfreeTime*60, '#endPreviewTemplate', `请购买在观看完整视频`]
                        },
                        //这里是记忆播放，目前有问题注释掉，
                        // {
                        //   name: 'MemoryPlayComponent',
                        //   type:window. AliPlayerComponent.MemoryPlayComponent,
                     	//   args:[true]
                        // }
                    ],
                    
                }, function () {
                  console.log('可以播放')
                })
                /**
                 * evnet
                 **/
                this.instance.on("replay", () => {
                })
                this.instance.on("play", () => {
                  
                })
                this.instance.on("ended", () => {
                     this.$emit("ended");
                })
                this.instance.on('timeupdate', () => {
                 
             
                })
              
               
            })
        }
       
        
        
      
    },

    getCurrentTime: function() {
      return this.instance.getCurrentTime();
    },
    
  
    
   
  },
  beforeDestroy() {
   
  },
  destroyed() {
 
   
  },
};
</script>
<style>
 
@import url(https://g.alicdn.com/de/prismplayer/2.8.8/skins/default/aliplayer-min.css);
</style>
