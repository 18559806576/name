require=function c(i,s,r){function u(o,e){if(!s[o]){if(!i[o]){var t="function"==typeof require&&require;if(!e&&t)return t(o,!0);if(l)return l(o,!0);var n=new Error("Cannot find module '"+o+"'");throw n.code="MODULE_NOT_FOUND",n}var a=s[o]={exports:{}};i[o][0].call(a.exports,function(e){var t=i[o][1][e];return u(t||e)},a,a.exports,c,i,s,r)}return s[o].exports}for(var l="function"==typeof require&&require,e=0;e<r.length;e++)u(r[e]);return u}({AboutGame:[function(e,t,o){"use strict";cc._RF.push(t,"be7654mikxIkr6yrVLNwbe4","AboutGame");var n=e("GameUiTools"),a=e("GameTools");cc.Class({extends:cc.Component,properties:{customerButton:cc.Node},start:function(){n.setButtonClickEvents(this,this.customerButton,"openCustomerServiceConversation")},openCustomerServiceConversation:function(){a.playSimpleAudioEngine(0),window.wx.openCustomerServiceConversation({})},loadingResource:function(){a.playSimpleAudioEngine(0),cc.director.loadScene("MenuUI")}}),cc._RF.pop()},{GameTools:"GameTools",GameUiTools:"GameUiTools"}],AnimInAndOut:[function(e,t,o){"use strict";cc._RF.push(t,"0c73cXTEdFOEIiRT1cSAep1","AnimInAndOut"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){},onEnable:function(){this.node.opacity=0,this.node.setScale(0);var e=cc.fadeIn(.2),t=cc.scaleTo(.2,1);this.node.runAction(cc.spawn(e,t))},animateAndDestroy:function(){var e=this;if(!this.isDestroying){this.isDestroying=!0;var t=cc.fadeOut(.2),o=cc.scaleTo(.2,0),n=cc.callFunc(function(){e.node&&e.node.destroy()});this.node.runAction(cc.sequence(cc.spawn(t,o),n))}},animateAndDisable:function(){var e=this;if(!this.isDestroying){this.isDestroying=!0;var t=cc.fadeOut(.2),o=cc.scaleTo(.2,0),n=cc.callFunc(function(){e.node.active=!1});this.node.runAction(cc.sequence(cc.spawn(t,o),n))}}}),cc._RF.pop()},{}],AnimLayerTool:[function(e,t,o){"use strict";cc._RF.push(t,"dcf6e/4kv9KYrR4VIQPHtsC","AnimLayerTool");e("GameConfig");var p=e("GameTools"),n={moveButtonAnimTime:.3,backAnim:function(){window.wx.vibrateShort(),cc.director.getScene().children[0].runAction(cc.sequence(cc.scaleBy(.05,.95),cc.scaleTo(.125,1)))},bottonAnim:function(e){var t=new Array;null==e.length?t[0]=e:t=e;for(var o=0;o<t.length;o++){var n=5*cc.random0To1()+1,a=t[o].height/20,c=cc.jumpBy(n,cc.p(a,0),a,1),i=cc.jumpBy(n,cc.p(-a,0),-a,1),s=cc.scaleBy(.3,1.1,.9),r=cc.delayTime(n),u=cc.sequence(c,i,s,s.reverse(),r);t[o].runAction(u.repeatForever())}},createShowMessageBox:function(e,t,o,n,a){var c=new cc.Node;c.addComponent(cc.Sprite).spriteFrame=p.love2048FrameCache.getSpriteFrame("messageBox0"),c.setPosition(e,t),c.rotation=n,c.opacity=0,a.addChild(c);var i=new cc.Node;if(i.setPosition(0,30),-1!=o.indexOf("messageBox"))i.addComponent(cc.Sprite).spriteFrame=p.love2048FrameCache.getSpriteFrame(o);else{var s=new cc.Node,r=s.addComponent(cc.Label);r.string=o,r.fontSize=30,r.overflow=cc.Label.Overflow.CLAMP,r.enableWrapText=!0,r.horizontalAlign=cc.Label.HorizontalAlign.CENTER,r.verticalAlign=cc.Label.VerticalAlign.CENTER,s.width=220,s.height=300,i.addChild(s)}c.addChild(i);var u=cc.fadeIn(.2),l=cc.delayTime(1),m=cc.fadeOut(.2),h=cc.callFunc(this.callFuncAddScore,this,c),d=cc.sequence(u,l,m,h);c.runAction(d)},callFuncAddScore:function(e,t){e.destroy()},createPopStarAnim:function(e,t){var o=cc.callFunc(this.callFuncPopStarAnim,this,e);e.runAction(cc.sequence(cc.delayTime(t),o,cc.fadeOut()))},callFuncPopStarAnim:function(e,t){var o=new cc.Node;o.setPosition(t.getPosition());var n=o.addComponent(cc.ParticleSystem);switch(n.texture="res/raw-assets/resources/stars.png",t.number){case 0:n.startColor=cc.color(255,226,0);break;case 1:n.startColor=cc.color(235,110,165);break;default:n.startColor=cc.color(253,44,129)}n.startColorVar=cc.color(0,0,0,0),n.endColorVar=cc.color(0,0,0,0),n.endColor=n.startColor,n.autoRemoveOnFinish=!0,n.duration=.1,n.emissionRate=200,n.life=2,n.lifeVar=.5,n.angle=90,n.angleVar=360,n.custom=!0,n.playOnLoad=!0,t.getParent().addChild(o),t.active=!1}};t.exports=n,cc._RF.pop()},{GameConfig:"GameConfig",GameTools:"GameTools"}],GameCollisionDetection:[function(e,t,o){"use strict";cc._RF.push(t,"e48f3dDJ1VGVZd69EVB4IdN","GameCollisionDetection");var n=e("GameConfig");cc.Class({extends:cc.Component,properties:{},start:function(){},onCollisionEnter:function(e,t){cc.log("on collision enter"),n.GameScene.gameCollision()},onCollisionStay:function(e,t){cc.log("on collision stay")},onCollisionExit:function(e,t){cc.log("on collision exit")}}),cc._RF.pop()},{GameConfig:"GameConfig"}],GameConfig:[function(e,t,o){"use strict";cc._RF.push(t,"f937eblcKFPZItT3ZuvdIyg","GameConfig");t.exports={GameClubButton:null,GameScene:null,DEVICE_WIDTH:720,DEVICE_HEIGHT:1280,MAIN_MENU_NUM:"Classic",GameCore:0,GameHeightScore:0,IS_GAME_MUSIC:!0,IS_GAME_SHARE:!1,IS_GAME_START:!1,IS_GAME_OVER:!1},cc._RF.pop()},{}],GameOver:[function(e,t,o){"use strict";cc._RF.push(t,"dec8fHCKaxKIrsVoVxgLzJp","GameOver");var n=e("GameConfig"),a=e("AnimLayerTool"),c=e("GameTools"),i=e("GameUiTools");cc.Class({extends:cc.Component,properties:{backColor:cc.Node,game_over:cc.Node,scoreLabel:cc.Label,bestScoreLabel:cc.Label,rankButton:cc.Node,shareButton:cc.Node,backButton:cc.Node,restartButton:cc.Node,rankingScrollView:cc.Sprite},onLoad:function(){this.scoreLabel.string=n.GameCore,this.bestScoreLabel.string=n.GameHeightScore,c.submitScore(n.GameHeightScore),this.tex=new cc.Texture2D,window.sharedCanvas.width=720,window.sharedCanvas.height=1280,window.wx.postMessage({messageType:4,MAIN_MENU_NUM:n.MAIN_MENU_NUM}),i.setButtonClickEvents(this,this.rankButton,"buttonFunc"),i.setButtonClickEvents(this,this.shareButton,"buttonFunc"),i.setButtonClickEvents(this,this.backButton,"buttonFunc"),i.setButtonClickEvents(this,this.restartButton,"buttonFunc"),this.showAnimation(!0)},buttonFunc:function(e){var t=e.target;return this.rankButton==t?(c.playSimpleAudioEngine(0),c.getRankData()):this.shareButton==t?(c.playSimpleAudioEngine(0),setTimeout(function(){c.sharePicture()},100)):this.restartButton==t?(c.playSimpleAudioEngine(0),this.restartResource("GameScene")):this.backButton==t&&(c.playSimpleAudioEngine(0),this.restartResource("MenuUI")),!0},restartResource:function(e){c.removeRankData(),i.loadingScene(e)},_updateSubDomainCanvas:function(){null!=window.sharedCanvas&&(this.tex.initWithElement(window.sharedCanvas),this.tex.handleLoadedTexture(),this.rankingScrollView.spriteFrame=new cc.SpriteFrame(this.tex))},update:function(){this._updateSubDomainCanvas()},showAnimation:function(e){e&&(a.bottonAnim(this.game_over),a.bottonAnim(this.shareButton),a.bottonAnim(this.restartButton),a.bottonAnim(this.backButton))}}),cc._RF.pop()},{AnimLayerTool:"AnimLayerTool",GameConfig:"GameConfig",GameTools:"GameTools",GameUiTools:"GameUiTools"}],GameScene:[function(e,t,o){"use strict";cc._RF.push(t,"b71benT1ABC0aPZ2HVTgCte","GameScene");var c=e("GameTools"),n=e("GameUiTools"),i=e("GameConfig"),a=e("AnimLayerTool");cc.Class({extends:cc.Component,properties:{layerBack:cc.Node,bestLabel:cc.Label,scoreLabel:cc.Label,yuanyuan:cc.Node,fangfang:cc.Node,yuanyuanWing:cc.Node,fangfangWing:cc.Node},ctor:function(){i.IS_GAME_START=!1,i.GameScene=this},onLoad:function(){},start:function(){this.layerBack.on(cc.Node.EventType.TOUCH_START,this.onTouchBegan,this),this.startGame(),cc.director.getCollisionManager().enabled=!0},onTouchBegan:function(e){if(i.IS_GAME_START)if(c.playSimpleAudioEngine(3),e.touch.getLocation().x<cc.director.getWinSize().width/2){if(this.yuanyuan.y<-106){this.yuanyuan.rotation=-30;var t=cc.jumpBy(.4,30-i.GameCore,0,140,1),o=cc.rotateTo(.4,0);this.yuanyuan.runAction(cc.spawn(t,o))}}else if(this.fangfang.y<-106){this.fangfang.rotation=30;var n=cc.jumpBy(.4,-30+i.GameCore,0,140,1),a=cc.rotateTo(.4,0);this.fangfang.runAction(cc.spawn(n,a))}},update:function(e){},gameCollision:function(){.5==this.yuanyuan.scale?(this.yuanyuan.number=0,a.createPopStarAnim(this.yuanyuan,0),this.fangfang.pauseAllActions()):(this.fangfang.number=1,a.createPopStarAnim(this.fangfang,0),this.yuanyuan.pauseAllActions()),a.backAnim(),this.gameOverScene()},startGame:function(){i.IS_GAME_START=!0,i.GameCore=0,this.scoreLabel.string=i.GameCore,this.bestLabel.string=i.GameHeightScore,this.resetRunner()},resetRunner:function(){Math.random()<.5?(this.yuanyuan.setScale(.5),this.fangfang.setScale(1)):(this.fangfang.setScale(.5),this.yuanyuan.setScale(1)),this.yuanyuan.x=-578,this.fangfang.x=578;var e=cc.moveBy(2-i.GameCore/50,938,0),t=cc.moveBy(2-i.GameCore/50,-938,0),o=cc.callFunc(this.callFuncCard,this);this.yuanyuan.runAction(cc.sequence(e,o)),this.fangfang.runAction(t)},callFuncCard:function(e){c.playSimpleAudioEngine(4),this.scoreLabel.string=++i.GameCore,i.GameCore>i.GameHeightScore&&(i.GameHeightScore=i.GameCore,this.bestLabel.string=i.GameHeightScore,c.setItemByLocalStorage("GameHeightScore",i.GameHeightScore)),this.resetRunner()},gameOverScene:function(){c.playSimpleAudioEngine(2),i.IS_GAME_START=!1,n.loadingLayer("panel/GameOver")}}),cc._RF.pop()},{AnimLayerTool:"AnimLayerTool",GameConfig:"GameConfig",GameTools:"GameTools",GameUiTools:"GameUiTools"}],GameTools:[function(e,t,o){"use strict";cc._RF.push(t,"415acQw6oNBeo2WRVLPUaoS","GameTools");var n=e("GameConfig"),a={love2048FrameCache:null,numberLabelAtlas:null,playSimpleAudioEngine:function(e){if(n.IS_GAME_MUSIC)switch(e){case 0:cc.audioEngine.play(cc.url.raw("resources/audios/sfx_button.wav"),!1,.5);break;case 1:cc.audioEngine.play(cc.url.raw("resources/audios/sfx_highscore.wav"),!1,.5);break;case 2:cc.audioEngine.play(cc.url.raw("resources/audios/sfx_player_die.wav"),!1,.5);break;case 3:cc.audioEngine.play(cc.url.raw("resources/audios/sfx_player_jump.wav"),!1,.5);break;case 4:cc.audioEngine.play(cc.url.raw("resources/audios/sfx_score.wav"),!1,.5)}},getItemByLocalStorage:function(e,t){var o=cc.sys.localStorage.getItem(e);return null==o||""===o?(cc.sys.localStorage.setItem(e,t),t):"boolean"==typeof t?"boolean"==typeof o?o:"true"==o:"number"==typeof t?Number(o):o},setItemByLocalStorage:function(e,t){cc.sys.localStorage.setItem(e,t)},toastMessage:function(n){cc.loader.loadRes("panel/ShowMessage",function(e,t){if(!e){var o=cc.instantiate(t);o.getComponent(cc.Component).toastType=n,cc.director.getScene().getChildByName("Canvas").addChild(o)}})},showSpotAds:function(e){},autoShowSpotAds:function(e){},showAddInteardlView:function(){},showGameHelp:function(){},sharePicture:function(t){var e="快来跟我一起挑战大鸟撞小鸟吧。";"shareTicket"==t&&(e="看看你在群里排第几？快来和我挑战大鸟撞小鸟吧。"),window.wx.shareAppMessage({title:e,query:"x="+n.MAIN_MENU_NUM,imageUrl:canvas.toTempFilePathSync({destWidth:500,destHeight:400}),success:function(e){null!=e.shareTickets&&0<e.shareTickets.length&&"shareTicket"==t&&window.wx.postMessage({messageType:5,MAIN_MENU_NUM:n.MAIN_MENU_NUM,shareTicket:e.shareTickets[0]})}})},getGameIntegral:function(){return this.getItemByLocalStorage("GameIntegral",0)},setGameIntegral:function(e){cc.sys.localStorage.setItem("GameIntegral",e)},commentGame:function(){window.wx.openCustomerServiceConversation({})},checkFirstLoginGame:function(){var e=Math.floor(((new Date).getTime()-new Date(2018,3,18,0,0,0,0).getTime())/864e5);e>this.getItemByLocalStorage("FirstEnterGameDate",0)&&(cc.sys.localStorage.setItem("FirstEnterGameDate",e),this.setGameIntegral(this.getGameIntegral()+100),this.toastMessage(9))},getRankData:function(n){cc.loader.loadRes("panel/RankingListView",function(e,t){if(!e){var o=cc.instantiate(t);null!=n&&(o.getComponent(cc.Component).shareTicket=n),cc.director.getScene().children[0].addChild(o)}})},removeRankData:function(){window.wx.postMessage({messageType:0})},submitScore:function(e){window.wx.postMessage({messageType:3,MAIN_MENU_NUM:n.MAIN_MENU_NUM,score:e})}};t.exports=a,cc._RF.pop()},{GameConfig:"GameConfig"}],GameUiTools:[function(e,t,o){"use strict";cc._RF.push(t,"6633adSwotPR4cUtDy9WXUH","GameUiTools");e("GameConfig");var n=e("GameTools"),a={newSprite:function(e,t){var o=new cc.Node;return t?(e=e.split(".")[0],o.addComponent(cc.Sprite).spriteFrame=n.love2048FrameCache.getSpriteFrame(e)):o.addComponent(cc.Sprite).spriteFrame=new cc.SpriteFrame("res/raw-assets/resources/"+e),o},setNodeSpriteFrame:function(e,t){e.getComponent(cc.Sprite).spriteFrame=n.love2048FrameCache.getSpriteFrame(t)},setButtonClickEvents:function(e,t,o,n,a){var c=new Array;null==t.length?c[0]=t:c=t;for(var i=0;i<c.length;i++){var s=new cc.Component.EventHandler;s.target=e.node,s.component=e.node.name,s.handler=o,null==t.length?s.customEventData=n:s.customEventData=i;var r=c[i].addComponent(cc.Button);r.clickEvents.push(s),(null==a||a)&&(r.transition=cc.Button.Transition.SCALE,r.duration=.1,r.zoomScale=1.2)}},scheduleOnce:function(e,t,o){e.runAction(cc.sequence(cc.delayTime(o),cc.callFunc(t,e)))},loadingScene:function(n,e){e?cc.loader.loadRes("panel/LoadingLayer",function(e,t){var o=cc.instantiate(t);cc.director.getScene().children[0].addChild(o),cc.director.preloadScene(n,function(){cc.director.loadScene(n)})}):cc.director.preloadScene(n,function(){cc.director.loadScene(n)})},loadingLayer:function(e){cc.loader.loadRes(e,function(e,t){if(!e){var o=cc.instantiate(t);cc.director.getScene().children[0].addChild(o)}})}};t.exports=a,cc._RF.pop()},{GameConfig:"GameConfig",GameTools:"GameTools"}],LoadingScene:[function(e,t,o){"use strict";cc._RF.push(t,"fa66dpbqYROFqRT9GK3/WP2","LoadingScene");var n=e("GameTools"),a=e("GameConfig");cc.Class({extends:cc.Component,properties:{},start:function(){var e=this;setTimeout(function(){e.loadingResource()},10)},loadingResource:function(){a.IS_GAME_MUSIC=n.getItemByLocalStorage("IS_GAME_MUSIC",!0),a.GameHeightScore=n.getItemByLocalStorage("GameHeightScore",0),this.initFrameCache(),this.initWxSetting(),cc.director.preloadScene("MenuUI",function(){cc.director.loadScene("MenuUI")})},initFrameCache:function(){cc.loader.loadRes("watchout",cc.SpriteAtlas,function(e,t){n.love2048FrameCache=t})},initWxSetting:function(){window.wx.showShareMenu({withShareTicket:!0}),window.wx.onShareAppMessage(function(){return{title:"快来跟我一起挑战大鸟撞小鸟吧。",imageUrl:canvas.toTempFilePathSync({destWidth:500,destHeight:400})}});var e=wx.getLaunchOptionsSync();null!=e.shareTicket&&setTimeout(function(){console.log("shareTicket",e),n.getRankData(e.shareTicket)},3e3),n.getItemByLocalStorage("UserPlayGame",!0)&&(cc.sys.localStorage.setItem("UserPlayGame",!1),window.wx.setUserCloudStorage({KVDataList:[{key:"UserPlayGame",value:"1"}]}));var t=window.wx.getSystemInfoSync();a.GameClubButton=window.wx.createGameClubButton({icon:"green",style:{left:t.windowWidth/6,top:91*t.windowHeight/100,width:40,height:40}}),a.GameClubButton.hide()}}),cc._RF.pop()},{GameConfig:"GameConfig",GameTools:"GameTools"}],MenuUI:[function(e,t,o){"use strict";cc._RF.push(t,"5c2b5VzgPNHI4Chk6xcuhIS","MenuUI");var n=e("GameTools"),a=e("GameUiTools"),c=e("GameConfig"),i=e("AnimLayerTool");cc.Class({extends:cc.Component,properties:{layerBack:cc.Node,startGameButton:cc.Node,musicButton:cc.Node,anbotButton:cc.Node},onLoad:function(){c.IS_GAME_MUSIC||(this.musicButton.getComponent(cc.Sprite).spriteFrame=n.love2048FrameCache.getSpriteFrame("Sound_Off")),a.setButtonClickEvents(this,this.startGameButton,"startGameButtonFunc",1,!1),a.setButtonClickEvents(this,this.musicButton,"musicButtonFunc"),a.setButtonClickEvents(this,this.anbotButton,"anbotButtonFunc"),i.bottonAnim(this.startGameButton)},start:function(){null!=c.GameClubButton&&c.GameClubButton.show()},startGameButtonFunc:function(e,t){n.playSimpleAudioEngine(0),cc.director.loadScene("GameScene")},musicButtonFunc:function(){n.playSimpleAudioEngine(0),c.IS_GAME_MUSIC=!c.IS_GAME_MUSIC,n.setItemByLocalStorage("IS_GAME_MUSIC",c.IS_GAME_MUSIC),c.IS_GAME_MUSIC?this.musicButton.getComponent(cc.Sprite).spriteFrame=n.love2048FrameCache.getSpriteFrame("Sound_On"):this.musicButton.getComponent(cc.Sprite).spriteFrame=n.love2048FrameCache.getSpriteFrame("Sound_Off")},anbotButtonFunc:function(e){n.playSimpleAudioEngine(0),cc.director.loadScene("AboutGame")},loadingResource:function(){cc.director.loadScene("GameScene")},onDestroy:function(){null!=c.GameClubButton&&c.GameClubButton.hide()}}),cc._RF.pop()},{AnimLayerTool:"AnimLayerTool",GameConfig:"GameConfig",GameTools:"GameTools",GameUiTools:"GameUiTools"}],RankingListView:[function(e,t,o){"use strict";cc._RF.push(t,"31b56tJWjpPlrcCAXTwiyUM","RankingListView");var n=e("GameConfig"),a=e("AnimLayerTool"),c=e("GameTools"),i=e("GameUiTools");cc.Class({extends:cc.Component,properties:{backButton:cc.Node,shareButton:cc.Node,rankingScrollView:cc.Sprite,shareTicket:null},onLoad:function(){this.showAnimation(!0)},start:function(){if(i.setButtonClickEvents(this,this.backButton,"backButtonFunc"),i.setButtonClickEvents(this,this.shareButton,"shareButtonFunc"),a.createShowMessageBox(120,-350,"分享到群里可查看群排行榜！",0,this.node),null!=this.shareTicket){var e=new cc.Node;e.addComponent(cc.Label).string="群排行",e.setPosition(-260,503),this.node.addChild(e)}this.tex=new cc.Texture2D,window.sharedCanvas.width=720,window.sharedCanvas.height=1280,cc.log(this.shareTicket),null!=this.shareTicket?window.wx.postMessage({messageType:5,MAIN_MENU_NUM:n.MAIN_MENU_NUM,shareTicket:this.shareTicket}):window.wx.postMessage({messageType:1,MAIN_MENU_NUM:n.MAIN_MENU_NUM})},shareButtonFunc:function(e){c.playSimpleAudioEngine(4),setTimeout(function(){c.sharePicture("shareTicket")},100)},backButtonFunc:function(e){c.playSimpleAudioEngine(0),c.removeRankData(),window.wx.postMessage({messageType:4,MAIN_MENU_NUM:n.MAIN_MENU_NUM}),this.node.destroy()},_updateSubDomainCanvas:function(){null!=window.sharedCanvas&&(this.tex.initWithElement(window.sharedCanvas),this.tex.handleLoadedTexture(),this.rankingScrollView.spriteFrame=new cc.SpriteFrame(this.tex))},update:function(){this._updateSubDomainCanvas()},showAnimation:function(e){e&&(a.bottonAnim(this.backButton),a.bottonAnim(this.shareButton))}}),cc._RF.pop()},{AnimLayerTool:"AnimLayerTool",GameConfig:"GameConfig",GameTools:"GameTools",GameUiTools:"GameUiTools"}],ShowMessage:[function(e,t,o){"use strict";cc._RF.push(t,"38b70CDgDNDRrOc8pj7+Z2r","ShowMessage");e("GameConfig");var n=e("GameTools");e("GameUiTools");cc.Class({extends:cc.Component,properties:{messageLabel:cc.Label,backButton:cc.Node,toastType:0},start:function(){var e=null;e=0==this.toastType?"欢迎进入浪漫2048":1==this.toastType?"该功能苦逼的程序员还在努力开发中，欢迎留言反馈！":2==this.toastType?"积分不足！！！您可以玩游戏来获取积分，还可以每天登录赚取积分！":3==this.toastType?"最多只能后退3步！！！":4==this.toastType?"只能后退1步！！！":5==this.toastType?"该模式暂无帮助，谢谢！！！":6==this.toastType?"积分不足！！！您需要300积分来复活。":7==this.toastType?"恭喜充值成功，感谢您对浪漫2048的支持！！！":8==this.toastType?"充值失败，谢谢支持！！！":9==this.toastType?"今天首次进入奖励100积分，每天首次进入游戏都会获取积分哟！！！":10==this.toastType?"没有找到应用市场":11==this.toastType?"恭喜获得奖励10积分，感谢您对浪漫2048的支持":12==this.toastType?"您今天已经领过奖励了，谢谢":13==this.toastType?"聚合模式暂无自动功能，谢谢":14==this.toastType?"恭喜获得奖励100积分，感谢您对浪漫2048的支持":15==this.toastType?"经典模式不能使用道具功能，您可以去试试其它玩法哟！":16==this.toastType?"上传得分失败，请检查网络":17==this.toastType?"排行榜数据失败，请检查网络":18==this.toastType?"上传得分成功，赶紧去看看排行榜吧":19==this.toastType?"视频奖励":20==this.toastType?"保存图片成功":21==this.toastType?"保存图片失败":22==this.toastType?"点击需要消除的爱心即可消除该爱心！":23==this.toastType?"点击需要换位的爱心将会选中该爱心，继续点击该爱心周边的爱心即可实现爱心的换位！":24==this.toastType?"点击需要缩小数字的爱心即可将该爱心的数字缩小2倍":25==this.toastType?"点击需要消除的爱心即可消除与该爱心同横排的爱心！":26==this.toastType?"点击需要消除的爱心即可消除与该爱心同竖排的爱心！":27==this.toastType?"视频播放失败，谢谢！！":28==this.toastType?"滑动屏幕来移动小方块，两个数字一样的小方块相撞时就会相加合成一个方块，每次操作之后会在空白的方格处随机生成一个2或4的方块，最终得到一个2048的方块就算胜利了，如果16个格子全部填满无法移动的话则游戏结束。":29==this.toastType?"点击空白爱心，爱心会向点击的位置靠拢，当两个数字相同的爱心相遇时就会合并为两数字之和，全部填满无法移动的话则游戏结束。":30==this.toastType?"选中连接在一起的相同数字，点击的数字会聚合为更大的数字，其它数字则消除，完成通关所需得分即可进入下一关，否则游戏结束。":31==this.toastType?"选中连接在一起的相同数字，选中的数字将会被消除，完成通关所需得分即可进入下一关，否则游戏结束。":this.toastType,this.messageLabel.string=e},backButtonFunc:function(e){n.playSimpleAudioEngine(0),this.node.destroy()}}),cc._RF.pop()},{GameConfig:"GameConfig",GameTools:"GameTools",GameUiTools:"GameUiTools"}]},{},["AboutGame","AnimLayerTool","GameCollisionDetection","GameConfig","GameScene","GameTools","GameUiTools","LoadingScene","MenuUI","AnimInAndOut","GameOver","RankingListView","ShowMessage"]);