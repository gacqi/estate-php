var yMoneyCard=`
    <div class="y-money demo-card-wide mdl-card mdl-shadow--2dp">
        <div class="mdl-card__title">
            <h2 class="mdl-card__title-text"></h2>
        </div>
        <div class="mdl-card__supporting-text">
            <div class="mdl-textfield mdl-js-textfield">
                <input class="mdl-textfield__input" type="text" id="msg-title">
                <label class="mdl-textfield__label" for="msg-title">标题...</label>
            </div>
            <div class="mdl-textfield mdl-js-textfield">
                <input class="mdl-textfield__input" type="text" id="msg-area">
                <label class="mdl-textfield__label" for="msg-area">地段...</label>
            </div>
            <div class="mdl-textfield mdl-js-textfield">
                <input class="mdl-textfield__input" type="text" id="msg-address">
                <label class="mdl-textfield__label" for="msg-address">地址...</label>
            </div>
            <div class="mdl-textfield mdl-js-textfield">
                <input class="mdl-textfield__input" type="text" id="msg-price">
                <label class="mdl-textfield__label" for="msg-price">价格...</label>
            </div>
            <div class="mdl-textfield mdl-js-textfield">
                <input class="mdl-textfield__input" type="text" id="msg-content">
                <label class="mdl-textfield__label" for="msg-content">内容...</label>
            </div>
        </div>
        <div class="mdl-card__actions mdl-card--border">
            <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                发射
            </a>
        </div>
        <div class="mdl-card__menu">
            <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
                <i class="material-icons">monetization_on</i>
            </button>
        </div>
    </div>
`;
//信息发布模块
var Ymessage = new Vue({
    el: "#y-message-module",
    data: {

    },
    components: {
        'y-sell': {
            template: yMoneyCard
        },
        'y-rent-out': {
            template: yMoneyCard
        },
        'y-ask-buy': {
            template: yMoneyCard
        },
        'y-want-rent': {
            template: yMoneyCard
        },
        'y-share-house': {
            template: yMoneyCard
        },
    }
});
