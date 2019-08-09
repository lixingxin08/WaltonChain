common = {
    VER : "1.2",
    MAX_WIDTH : 1200,
    ROOT_URL : "",
    REFRESH_TIME : 60000,  //刷新时间间隔
    PHP_URL_ZSF : "https://waltonchain.pro:18950/api/",
    PHP_URL_TEST : "http://127.0.0.1/waltonchain/api/",
    isZSF : 1,    //是否正式服
    JS_LOAD_COUNTER : 0,
    JS_IS_LOADED : false,

    //初始化
    init : function(p_cp_list){
        var curWwwPath = window.document.location.href;
        var pos = curWwwPath.indexOf("src");
        var localhostPaht = curWwwPath.substring(0, pos);
        common.ROOT_URL = localhostPaht;

        //默认正式服
        $.cookie('isZSF', common.isZSF);

        //加载css和js
        common.JS_LOAD_COUNTER = 0;
        common.JS_IS_LOADED = false;
        var zHead = document.getElementsByTagName('head')[0];
        //css
        var link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = '../css/common.css?ver='+common.VER;
        zHead.appendChild(link);

        if(!p_cp_list){
            p_cp_list = [];
             common.JS_IS_LOADED = true;
             return;
        }
        //js
        var zScriptListB = [];
        for(var j=0; j<p_cp_list.length; j++){
            var zJvalue = "../lib/mine/"+p_cp_list[j]+".js";
            if(p_cp_list[j].indexOf("/")!=-1){
                zJvalue = p_cp_list[j];
            }
            zScriptListB.push(zJvalue);
        }
        for(var i=0; i<zScriptListB.length; i++){
            var zScriptB = document.createElement('script');
            zScriptB.type = 'text/javascript';
            zScriptB.src = zScriptListB[i] +"?ver="+common.VER;
            zScriptB.onload = zScriptB.onreadystatechange = function() {
                if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete" ){
                   common.JS_LOAD_COUNTER ++;
                    if(common.JS_LOAD_COUNTER>=zScriptListB.length){
                        common.JS_IS_LOADED = true;
                    } 
                }
            }
            zHead.appendChild(zScriptB);
        };
    },

    //初始化缩放
    initScale : function (p_float_scaleMax){
        var phoneWidth = parseInt(window.screen.width);
        var phoneHeight = parseInt(window.screen.height);
        var phoneScale = phoneWidth/common.MAX_WIDTH;//除以的值按手机的物理分辨率
        if(p_float_scaleMax>0){
            if(phoneScale > p_float_scaleMax){
                phoneScale = p_float_scaleMax;
            }
        }

        var ua = navigator.userAgent;
        var oMeta = document.createElement('meta');
        oMeta.charset = 'utf-8';
        oMeta.name = "viewport";
        //安卓系统
        if (/Android (\d+\.\d+)/.test(ua)) {
            var version = parseFloat(RegExp.$1);
             if (version > 2.3) {
                oMeta.content = "width=device-width, initial-scale="+phoneScale+",minimum-scale="+phoneScale+",maximum-scale="+phoneScale+",user-scalable=no";
             } else {
                oMeta.content = "width=device-width,user-scalable=no";
             }
        // 其他系统
        } else {
            oMeta.content = "width=device-width, initial-scale="+phoneScale+",minimum-scale="+phoneScale+",maximum-scale="+phoneScale+",user-scalable=no";
        }
        // console.log("scale:" + phoneWidth+","+common.MAX_WIDTH+","+phoneScale);
        document.getElementsByTagName('head')[0].appendChild(oMeta);
        return phoneScale;
    },

    //去空格
    trim : function (p_str){
        return p_str.replace(/(^\s*)|(\s*$)/g, "");
    },

    //自动往前面补零
    //@p_int_num    数值
    //@p_int_n      位数
    preZero : function(p_int_num, p_int_n) {
        return (Array(p_int_n).join(0) + p_int_num).slice(-p_int_n);
    },

    //把数字逢千加逗号
    numQian : function(p_num){
        var zValueList = p_num.toString().split(".");
        var zZhengShu = zValueList[0].toString();
        var zXiaoShu = zValueList[1];
        var zStrLen = zZhengShu.length;
        var zValueList = [];
        var zStrTotal = "";
        for(var i=1; i<=6; i++){
            var zVA = (i-1)*3;
            var zVB = i*3;
            if(zStrLen>zVA){
                var zValue = zZhengShu.substr(-1*((zStrLen>zVB)?zVB:zStrLen), (zStrLen>zVB)?3:(zStrLen-zVA));
                zValueList.push(zValue);
            }
        }
        for(var j=(zValueList.length-1); j>=0; j--){
            var zValue = zValueList[j];
            if(j==(zValueList.length-1)){
                zStrTotal = zValue;
            }else{
                zStrTotal = zStrTotal + "," + zValue;
            }
        }
        if(zXiaoShu){
            zStrTotal = zStrTotal + "." + zXiaoShu;
        }
        return zStrTotal;
    },

    //砍头砍尾留中间
    strMiddleDot : function(p_str_info, p_int_index){
        var zHead = p_str_info.substr(0, p_int_index);
        var zEnd = p_str_info.substr(-1*p_int_index);
        var zStrTotal = zHead+"......"+zEnd;
        return zStrTotal;
    },

    //设置是否正式服
    setIsZSF : function(){
        //是否app
        var zCurWwwPath = window.document.location.href;
        var zListA = zCurWwwPath.split("?");
        if(!zListA || !zListA[1]){
            console.log("setIsZSF====zListA=undefined");
            return;
        }
        var zListB = zListA[1].split("&");
        for(var i=0; i<zListB.length; i++){
            var zListC = zListB[i].split("=");
            if(zListC[0]=="isZSF"){
                $.cookie('isZSF', zListC[1]);
                break;
            }
        }
        // console.log("是否正式服:"+$.cookie('isZSF'));
    },

    //设置cookie
    setCookie : function(p_str_name, p_all_value, p_all_value2){
        switch(p_str_name){
            case "isZSF"://string token
                $.cookie("isZSF", p_all_value);
                break;
            case "searchMiner":
                $.cookie("searchMiner", p_all_value);
                break;
            case "searchBlock":
                $.cookie("searchBlock", p_all_value);
                break;
            case "searchTran":
                $.cookie("searchTran", p_all_value);
                break;
            case "desc_time":
                $.cookie("desc_time", p_all_value);
                break;
            case "desc_1":
                $.cookie("desc_1", p_all_value);
                break;
            case "desc_2":
                $.cookie("desc_2", p_all_value);
                break;
            case "desc_3":
                $.cookie("desc_3", p_all_value);
                break;
            case "desc_4":
                $.cookie("desc_4", p_all_value);
                break;
            case "desc_5":
                $.cookie("desc_5", p_all_value);
                break;
            case "desc_6":
                $.cookie("desc_6", p_all_value);
                break;
            case "desc_7":
                $.cookie("desc_7", p_all_value);
                break;
            case "desc_8":
                $.cookie("desc_8", p_all_value);
                break;
        }
    },

    //获取cookie
    getCookie : function(p_str_name, p_all_value){
        var zValue = 0;
        switch(p_str_name){
            case "isZSF"://string token
                zValue = $.cookie("isZSF");
                break;
            case "searchMiner":
                zValue = $.cookie("searchMiner");
                break;
            case "searchBlock":
                zValue = $.cookie("searchBlock");
                break;
            case "searchTran":
                zValue = $.cookie("searchTran");
                break;
            case "desc_time":
                zValue = $.cookie("desc_time");
                break;
            case "desc_1":
                zValue = $.cookie("desc_1");
                break;
            case "desc_2":
                zValue = $.cookie("desc_2");
                break;
            case "desc_3":
                zValue = $.cookie("desc_3");
                break;
            case "desc_4":
                zValue = $.cookie("desc_4");
                break;
            case "desc_5":
                zValue = $.cookie("desc_5");
                break;
            case "desc_6":
                zValue = $.cookie("desc_6");
                break;
            case "desc_7":
                zValue = $.cookie("desc_7");
                break;
            case "desc_8":
                zValue = $.cookie("desc_8");
                break;
        }
        return zValue;
    },

    //获取申请php的地址
    getPhpUrl : function(p_str_name){
        var zIsZSF = common.getCookie("isZSF");
        var zPreUrl = common.PHP_URL_ZSF;
        if(zIsZSF!=1){
            zPreUrl = common.PHP_URL_TEST;
        }
        var zNow = new Date().getTime();
        var zUrl = zPreUrl + p_str_name+'?myTime='+zNow;
        return zUrl;
    },
  
    //跳转到页面
    gotoWebSite : function(p_str_url, p_bool_isNeedVer, p_bool_isNewWin){
        if(p_bool_isNeedVer==false){
            javascript:location.href=p_str_url;
        }else{
            if(p_str_url.indexOf("?")!=-1){
                var zUrl = p_str_url+'&ver='+common.VER;
                if(p_bool_isNewWin==true){
                    window.open(zUrl, '_blank');
                }else{
                    javascript:location.href=zUrl;
                }
            }else{
                var zUrl = p_str_url+'?ver='+common.VER;
                if(p_bool_isNewWin==true){
                    window.open(zUrl, '_blank');
                }else{
                    javascript:location.href=zUrl;
                }
            }
            // javascript:location.href=p_str_url;
        }
    }


}
