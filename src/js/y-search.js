//信息中心
var YsearchHub = new Vue();
//搜索模块
var Ysearch = new Vue({
    el: "#y-search-module",
    data: {
        msg: "search",
        listData:[]
    },
    mounted: function () {
        YsearchHub.$on('callListCb', this.callListCb);
        this.$http.get('./back/estate_list.php').then(function(msg){
            this.listData=msg.body;
        },function(err){
            console.log(err);
        });
    },
    components: {
        'y-search': {
            data: function () {
                return {
                    searchVal: ''
                };
            },
            template: `
               <div class="y-searchbox">
                    <div class="mdl-textfield mdl-js-textfield">
                        <input class="mdl-textfield__input" type="text" id="pleaseSearch" v-model="searchVal" @keyup="callList">
                        <label class="mdl-textfield__label" for="pleaseSearch">搜索引擎咻~~启动！</label>
                    </div>
               </div>
            `,
            methods: {
                callList: function () {
                    console.log('xxx');
                    YsearchHub.$emit('callListCb');
                }
            }
        },
        'y-list': {
            props:['listData'],
            template: `
            <div>
                <table style="margin: 0 auto;" class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>标题</th>
                            <th>大小</th>
                            <th>地址</th>
                            <th>装修</th>
                            <th>格局</th>
                            <th>发布时间</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="white-space: normal;" v-for="item in listData">
                            <td>{{item.eid}}</td>
                            <td>{{item.title}}</td>
                            <td>{{item.area}}㎡</td>
                            <td>{{item.address}}</td>
                            <td>{{item.room_type}}</td>
                            <td>{{item.construct}}</td>
                            <td>{{item.create_time}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            `
        }
    },
    methods: {
        callListCb: function () {
            console.log('xxxx-xxxx');
        }
    }
});