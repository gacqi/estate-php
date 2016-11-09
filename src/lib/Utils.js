(function(){
    var root=this;
    var Utils={};
    root.Utils=Utils;

    //为组件增加一个占位容器，同时新建实例
    Utils.compCaller=function(Component,config){
        var holder=document.createElement('div');
        document.body.appendChild(holder);
        config.el=holder;
        return new Component(config);
    };
}.call(this))