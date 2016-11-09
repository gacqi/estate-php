//登录注册模块
var Ylogin = new Vue({
    el: "#y-login-module",
    data: {

    },
    components: {
        'y-login': {
            template: `
                <div class="y-login demo-card-wide mdl-card mdl-shadow--2dp">
                    <div class="mdl-card__title">
                        <h2 class="mdl-card__title-text">灯之炉</h2>
                    </div>
                    <div class="mdl-card__supporting-text">
                        <div class="mdl-textfield mdl-js-textfield">
                            <input class="mdl-textfield__input" type="text" id="login-name">
                            <label class="mdl-textfield__label" for="login-name">用户名...</label>
                        </div>
                        <div class="mdl-textfield mdl-js-textfield">
                            <input class="mdl-textfield__input" type="password" id="login-password">
                            <label class="mdl-textfield__label" for="login-password">密码...</label>
                        </div>
                    </div>
                    <div class="mdl-card__actions mdl-card--border">
                        <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                            确定
                        </a>
                    </div>
                    <div class="mdl-card__menu">
                        <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
                            <i class="material-icons">face</i>
                        </button>
                    </div>
                </div>
            `
        },
        'y-sign': {
            template: `
                <div class="y-sign demo-card-wide mdl-card mdl-shadow--2dp">
                    <div class="mdl-card__title">
                        <h2 class="mdl-card__title-text">猪之厕</h2>
                    </div>
                    <div class="mdl-card__supporting-text">
                        <div class="mdl-textfield mdl-js-textfield">
                            <input class="mdl-textfield__input" type="text" id="login-name">
                            <label class="mdl-textfield__label" for="login-name">用户名...</label>
                        </div>
                        <div class="mdl-textfield mdl-js-textfield">
                            <input class="mdl-textfield__input" type="password" id="login-password">
                            <label class="mdl-textfield__label" for="login-password">密码...</label>
                        </div>
                        <div class="mdl-textfield mdl-js-textfield">
                            <input class="mdl-textfield__input" type="password" id="login-password">
                            <label class="mdl-textfield__label" for="login-password">确认密码...</label>
                        </div>
                    </div>
                    <div class="mdl-card__actions mdl-card--border">
                        <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                            确定
                        </a>
                    </div>
                    <div class="mdl-card__menu">
                        <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
                            <i class="material-icons">face</i>
                        </button>
                    </div>
                </div>      
            `
        }
    }
});