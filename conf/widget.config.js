/**
 * 悬浮在网页上的挂件
 */
module.exports = {
  THEME_SWITCH: process.env.NEXT_PUBLIC_THEME_SWITCH || false, // 是否显示切换主题按钮
  // Chatbase 是否显示chatbase机器人 https://www.chatbase.co/
  CHATBASE_ID: process.env.NEXT_PUBLIC_CHATBASE_ID || null,
  // WebwhizAI 机器人 @see https://github.com/webwhiz-ai/webwhiz
  WEB_WHIZ_ENABLED: process.env.NEXT_PUBLIC_WEB_WHIZ_ENABLED || false, // 是否显示
  WEB_WHIZ_BASE_URL:
    process.env.NEXT_PUBLIC_WEB_WHIZ_BASE_URL || 'https://api.webwhiz.ai', // 可以自建服务器
  WEB_WHIZ_CHAT_BOT_ID: process.env.NEXT_PUBLIC_WEB_WHIZ_CHAT_BOT_ID || null, // 在后台获取ID
  DIFY_CHATBOT_ENABLED: process.env.NEXT_PUBLIC_DIFY_CHATBOT_ENABLED || false,
  DIFY_CHATBOT_BASE_URL: process.env.NEXT_PUBLIC_DIFY_CHATBOT_BASE_URL || '',
  DIFY_CHATBOT_TOKEN: process.env.NEXT_PUBLIC_DIFY_CHATBOT_TOKEN || '',

  // 悬浮挂件
  WIDGET_PET: process.env.NEXT_PUBLIC_WIDGET_PET || true, // 是否显示宠物挂件
  WIDGET_PET_LINK:
    process.env.NEXT_PUBLIC_WIDGET_PET_LINK ||
    'https://raw.githubusercontent.com/imuncle/live2d/master/model/bronya_1/model.json', // 挂件模型地址 @see https://github.com/xiazeyu/live2d-widget-models
  WIDGET_PET_SWITCH_THEME:
    process.env.NEXT_PUBLIC_WIDGET_PET_SWITCH_THEME || true, // 点击宠物挂件切换博客主题

  SPOILER_TEXT_TAG: process.env.NEXT_PUBLIC_SPOILER_TEXT_TAG || '', // Spoiler文本隐藏功能，如Notion中 [sp]希望被spoiler的文字[sp]，填入[sp] 即可

  // 音乐播放插件
  MUSIC_PLAYER: process.env.NEXT_PUBLIC_MUSIC_PLAYER || true, // 是否使用音乐播放插件
  MUSIC_PLAYER_VISIBLE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_VISIBLE || true, // 是否在左下角显示播放和切换，如果使用播放器，打开自动播放再隐藏，就会以类似背景音乐的方式播放，无法取消和暂停
  MUSIC_PLAYER_AUTO_PLAY:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_AUTO_PLAY || true, // 是否自动播放，不过自动播放时常不生效（移动设备不支持自动播放）
  MUSIC_PLAYER_LRC_TYPE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_LRC_TYPE || '1', // 歌词显示类型，可选值： 3 | 1 | 0（0：禁用 lrc 歌词，1：lrc 格式的字符串，3：lrc 文件 url）（前提是有配置歌词路径，对 meting 无效）
  MUSIC_PLAYER_CDN_URL:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_CDN_URL ||
    'https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/aplayer/1.10.1/APlayer.min.js',
  MUSIC_PLAYER_ORDER: process.env.NEXT_PUBLIC_MUSIC_PLAYER_ORDER || 'list', // 默认播放方式，顺序 list，随机 random
  MUSIC_PLAYER_AUDIO_LIST: [
    // 示例音乐列表。除了以下配置外，还可配置歌词，具体配置项看此文档 https://aplayer.js.org/#/zh-Hans/
    {
      name: 'Ebony Day',
      artist: 'Somebody Else',
      url: 'https://ws6.stream.qqmusic.qq.com/O400002ijjoA3xcRi1.ogg?guid=7278107368&vkey=CF6FE52AB0DE12BA199CCFD2BC51B03953C99A5E05D0FAFFF6FA516344576ADBA475979975F7F0F930B6596F36A8B0A468DC7909F7CA8B48__v2b9aaf6a&uin=2538996472&fromtag=120532',
      cover:
        'https://y.qq.com/music/photo_new/T062R300x300M000003z8eSa0bKfBJ.jpg?max_age=2592000',
      lrc: '[00:00.000]LRC-toomic.com
[00:00]Somebody Else (别人) - Ebony Day
[00:00]//
[00:00]So you said you've found somebody else
[00:06]你说你已有了新欢
[00:08]And I prayed that that was just a lie
[00:16]我多希望这只是你的谎言
[00:17]So I said I loved you one more time
[00:21]因此我说 我爱你 再给我一次机会吧
[00:22]In case that would change your mind
[00:25]也许你就会改变心意
[00:28]You said I don't want your body
[00:31]你说 我对你没感觉
[00:31]But I know that you can find yourself somebody else
[00:35]但我知道 你一定会找到你的命中注定
[00:37]Our love has gone cold
[00:40]我们的爱就这样凋零
[00:40]And it doesn't feel like home when I hold you close
[00:44]即使与你紧紧相拥 我也感觉不到任何温暖
[00:47]And I'm lookin' at you tryna figure out if this is what you really want
[00:53]我凝视着你的双眸 试图弄清这是否就是你要的结局
[00:55]You said I don't want your body
[00:58]你说 我对你没感觉
[00:58]But I know that you can find yourself somebody else
[01:02]但我知道 你一定会找到你的命中注定
[01:04]I guess I don't want your body
[01:07]我想 我也许并不爱你
[01:07]If you're wishing you were lying here with someone else
[01:11]因为你总是想要逃离 想要和别人在一起
[01:14]So you said you've found somebody else
[01:20]你说你已有了新欢
[01:22]And I hoped that this wasn't goodbye
[01:30]我多希望这不是诀别
[01:30]But I can't help but wonder what went wrong
[01:34]但我力不从心 我想知道究竟是哪里出了错
[01:35]To make forever dead and gone
[01:38]为何我们的爱再也无法挽回
[01:42]You said I don't want your body
[01:44]你说 我对你没感觉
[01:44]But I know that you can find yourself somebody else
[01:49]但我知道 你一定会找到你的命中注定
[01:51]Your love has gone cold
[01:53]你的激情早已消散
[01:53]And it doesn't feel like home when I hold you close
[01:58]即使与你紧紧相拥 我也感觉不到任何温暖
[02:00]And I'm lookin' at you tryna figure out if this is what you really want
[02:07]我凝视着你的双眸 试图弄清这是否就是你要的结局
[02:09]You said I don't want your body
[02:11]你说 我对你没感觉
[02:11]But I know that you can find yourself somebody else
[02:15]但我知道 你一定会找到你的命中注定
[02:18]You said I don't want your body
[02:20]你说 我对你没感觉
[02:20]But I know that you can find yourself somebody else
[02:25]但我知道 你一定会找到你的命中注定
[02:26]I guess I don't want your body
[02:26]我想 我也许并不爱你'
    }
  ],
  MUSIC_PLAYER_METING: process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING || false, // 是否要开启 MetingJS，从平台获取歌单。会覆盖自定义的 MUSIC_PLAYER_AUDIO_LIST，更多配置信息：https://github.com/metowolf/MetingJS
  MUSIC_PLAYER_METING_SERVER:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_SERVER || 'netease', // 音乐平台，[netease, tencent, kugou, xiami, baidu]
  MUSIC_PLAYER_METING_ID:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_ID || '60198', // 对应歌单的 id
  MUSIC_PLAYER_METING_LRC_TYPE:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_LRC_TYPE || '1', // 已废弃！！！可选值： 3 | 1 | 0（0：禁用 lrc 歌词，1：lrc 格式的字符串，3：lrc 文件 url）

  // 一个小插件展示你的facebook fan page~ @see https://tw.andys.pro/article/add-facebook-fanpage-notionnext
  FACEBOOK_PAGE_TITLE: process.env.NEXT_PUBLIC_FACEBOOK_PAGE_TITLE || null, // 邊欄 Facebook Page widget 的標題欄，填''則無標題欄 e.g FACEBOOK 粉絲團'
  FACEBOOK_PAGE: process.env.NEXT_PUBLIC_FACEBOOK_PAGE || null, // Facebook Page 的連結 e.g https://www.facebook.com/tw.andys.pro
  FACEBOOK_PAGE_ID: process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID || '', // Facebook Page ID 來啟用 messenger 聊天功能
  FACEBOOK_APP_ID: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || '' // Facebook App ID 來啟用 messenger 聊天功能 获取: https://developers.facebook.com/
}
