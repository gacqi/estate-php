//投诉建议模块
var Ycomplaint = new Vue({
    el: "#y-complaint-module",
    data: {

    },
    components: {
        'y-complaint': {
            template: `
                <div class="y-complaint demo-card-wide mdl-card mdl-shadow--2dp">
                    <div class="mdl-card__title">
                        <h2 class="mdl-card__title-text"></h2>
                    </div>
                    <div class="mdl-card__supporting-text">
                        <div class="mdl-textfield mdl-js-textfield">
                            <textarea class="mdl-textfield__input" type="text" rows= "6" id="complaint-area" ></textarea>
                            <label class="mdl-textfield__label" for="complaint-area">有啥好吐槽的呢...</label>
                        </div>
                    </div>
                    <div class="mdl-card__actions mdl-card--border">
                        <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                            弹射
                        </a>
                    </div>
                    <div class="mdl-card__menu">
                        <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
                            <i class="material-icons">bug_report</i>
                        </button>
                    </div>
                </div>      
            `
        }
    }
});