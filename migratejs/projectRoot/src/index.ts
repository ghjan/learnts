/// <reference> plugin/nc/nc.d.ts

var nc_token = ["CF_APP_1", (new Date()).getTime(), Math.random()].join(':');
var NC_Opt = {
    renderTo: "#your-dom-id",
    appkey: "CF_APP_1",
    scene: 'test',
    token: nc_token,
    trans: {'key1': "code0"},
    is_Opt: 0,
    type: "scrape",
    width: 300,
    height: 100,
    isEnabled: true,
    language: 'cn',
    times: 5,
    objects: ["//img.alicdn.com/tps/TB1BT9jPFXXXXbyXFXXXXXXXXXX-80-80.png"],//勿动，照抄即可
    apimap: {
        // 'uab_Url': '//aeu.alicdn.com/js/uac/909.js',
    },
    elements: [
        '//img.alicdn.com/tfs/TB17cwllsLJ8KJjy0FnXXcFDpXa-50-74.png',
        '//img.alicdn.com/tfs/TB17cwllsLJ8KJjy0FnXXcFDpXa-50-74.png'
    ],
    bg_back_prepared: '//img.alicdn.com/tps/TB1skE5SFXXXXb3XXXXXXXXXXXX-100-80.png',
    bg_front: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABQCAMAAADY1yDdAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAADUExURefk5w+ruswAAAAfSURBVFjD7cExAQAAAMKg9U9tCU+gAAAAAAAAAIC3AR+QAAFPlUGoAAAAAElFTkSuQmCC',
    obj_ok: '//img.alicdn.com/tfs/TB1rmyTltfJ8KJjy0FeXXXKEXXa-50-74.png',
    bg_back_pass: '//img.alicdn.com/tfs/TB1KDxCSVXXXXasXFXXXXXXXXXX-100-80.png',
    obj_error: '//img.alicdn.com/tfs/TB1q9yTltfJ8KJjy0FeXXXKEXXa-50-74.png',
    bg_back_fail: '//img.alicdn.com/tfs/TB1w2oOSFXXXXb4XpXXXXXXXXXX-100-80.png',
    upLang: {
        "cn": {
            _ggk_guide: "请摁住鼠标左键，刮出两面盾牌",
            _ggk_success: "恭喜您成功刮出盾牌<br/>继续下一步操作吧",
            _ggk_loading: "加载中",
            _ggk_fail: ['呀，盾牌不见了<br/>请', "javascript:noCaptcha.reset()", '再来一次', '或', "http://survey.taobao.com/survey/QgzQDdDd?token=%TOKEN", '反馈问题'],
            _ggk_action_timeout: ['我等得太久啦<br/>请', "javascript:noCaptcha.reset()", '再来一次', '或', "http://survey.taobao.com/survey/QgzQDdDd?token=%TOKEN", '反馈问题'],
            _ggk_net_err: ['网络实在不给力<br/>请', "javascript:noCaptcha.reset()", '再来一次', '或', "http://survey.taobao.com/survey/QgzQDdDd?token=%TOKEN", '反馈问题'],
            _ggk_too_fast: ['您刮得太快啦<br/>请', "javascript:noCaptcha.reset()", '再来一次', '或', "http://survey.taobao.com/survey/QgzQDdDd?token=%TOKEN", '反馈问题']
        }
    },
    callback: function (data) { //成功回调
        window.console && console.log(nc_token)
        window.console && console.log(data.sessionId)
        window.console && console.log(data.sig)
    },
    failCallback: function (data) { //拦截or失败回调
    },
    error: function (data) { //异常回调
    }
};
var nc = new noCaptcha(NC_Opt);
