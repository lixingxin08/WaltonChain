common = {
    VER : "1.0",
    MAX_WIDTH : 750,
    ROOT_URL : "",
    REFRESH_TIME : 60000,  //刷新时间间隔
    PHP_URL_ZSF : "https://waltonchain.pro:18950/api/",
    PHP_URL_TEST : "http://127.0.0.1/waltonchain/api/",


    //初始化
    init : function(){
        var curWwwPath = window.document.location.href;
        var pos = curWwwPath.indexOf("src");
        var localhostPaht = curWwwPath.substring(0, pos);
        common.ROOT_URL = localhostPaht;

        //默认正式服
        $.cookie('isZSF', 1);
    },

    //初始化缩放
    initScale : function (p_float_scaleMax=0){
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

    //不可横向拖动
    initScreenMoveY : function(p_str_id){
        let box = document.getElementById(p_str_id);
        $box = $('#'+p_str_id);
        let mouseState = false; //鼠标默认状态
        let startX = 0;
        let startY = 0;
        let moveDirection = 0 //鼠标拖动距离
        $boxTop = parseInt($box.css('top'))//表示内容块被偏移的值
        //鼠标按下事件
        box.addEventListener('touchstart', function(e) {
            var zTouch = e.changedTouches;  
            mouseState = true
            //获取鼠标坐标
            startX = zTouch[0].clientX;
            startY = zTouch[0].clientY;
            //鼠标拖动初始化
            moveDirection = 0
            $boxTop = parseInt($box.css('top'))
        })
        //鼠标移动状态
        box.addEventListener('touchmove', function(e) {
            var zTouch = e.changedTouches;  
            //判断鼠标是不是被按下中移动
            if(mouseState) {
                //判断是向左还是向右拖动鼠标
                moveDirection = zTouch[0].clientY - startY;
                //向右移动
                var zMoveLeft = $boxTop + moveDirection + 'px';
                // box.style.top = $boxTop + moveDirection + 'px';
                $('#'+p_str_id).css({"top":zMoveLeft});
            }
        })
        //鼠标弹起事件
        box.addEventListener('touchend', function(e) {
            return;
            var zTouch = e.changedTouches;  
            mouseState = false
            if(moveDirection > 0) {
                //$boxTop<0表示已经看到最左的模块，不能在向右拖拉
                $boxTop = parseInt($box.css('top'))
                //取余，比如拖动了52px，实际内容块就250px，偏移余下的px就能看的完整的内容块
                $num = $boxTop % 250;
                if($boxTop < 0) {
                    $box.animate({
                        top: $boxTop - $num + 'px'
                    }, 500, function() {
                        console.log(parseInt($box.css('top')))
                    })
                } else {
                //向右偏移，如果$boxLeft大于等于0的话 那就是还是第一个颜色模块，不允许被偏移
                    $box.animate({
                        top: 0 + 'px'
                    }, 500, function() {})
                }
            } else if(moveDirection < 0) {
                //$boxTop>-750表示已经看到最右边的模块，不能在向左拖拉
                $boxTop = parseInt($box.css('top'))
                // $num = 250 + $boxTop % 250
                if($boxTop > -500) {
                    $box.animate({
                        top: $boxTop + 'px'
                    }, 500, function() {
                        // console.log(parseInt($box.css('top')));
                    })
                }else{
                //向左偏移，如果$boxLeft小于等于-750px的话 那就是最后一个颜色模块，不允许被偏移
                    $box.animate({
                        top: -500 + 'px'
                    }, 500, function() {})
                }
            }
        })
    },

    //列表横向拖动
    initTableMouseMove : function(p_str_id){
        let box = document.getElementById(p_str_id);
        $box = $('#'+p_str_id);
        let mouseState = false; //鼠标默认状态
        let startX = 0;
        let startY = 0;
        let moveDirection = 0 //鼠标拖动距离
        $boxLeft = parseInt($box.css('left'))//表示内容块被偏移的值
        //鼠标按下事件
        box.addEventListener('touchstart', function(e) {
            var zTouch = e.changedTouches;  
            mouseState = true
            //获取鼠标坐标
            startX = zTouch[0].clientX;
            startY = zTouch[0].clientY;
            //鼠标拖动初始化
            moveDirection = 0
            $boxLeft = parseInt($box.css('left'))
        })
        //鼠标移动状态
        box.addEventListener('touchmove', function(e) {
            var zTouch = e.changedTouches;  
            //判断鼠标是不是被按下中移动
            if(mouseState) {
                //判断是向左还是向右拖动鼠标
                moveDirection = zTouch[0].clientX - startX;
                //向右移动
                var zMoveLeft = $boxLeft + moveDirection + 'px';
                // box.style.left = $boxLeft + moveDirection + 'px';
                $('#'+p_str_id).css({"left":zMoveLeft});
            }
        })
        //鼠标弹起事件
        box.addEventListener('touchend', function(e) {
            var zTouch = e.changedTouches;  
            mouseState = false
            if(moveDirection > 0) {
                //$boxLeft<0表示已经看到最左的模块，不能在向右拖拉
                $boxLeft = parseInt($box.css('left'))
                //取余，比如拖动了52px，实际内容块就250px，偏移余下的px就能看的完整的内容块
                $num = $boxLeft % 250;
                if($boxLeft < 0) {
                    $box.animate({
                        left: $boxLeft - $num + 'px'
                    }, 500, function() {
                        console.log(parseInt($box.css('left')))
                    })
                } else {
                //向右偏移，如果$boxLeft大于等于0的话 那就是还是第一个颜色模块，不允许被偏移
                    $box.animate({
                        left: 0 + 'px'
                    }, 500, function() {})
                }
            } else if(moveDirection < 0) {
                //$boxLeft>-750表示已经看到最右边的模块，不能在向左拖拉
                $boxLeft = parseInt($box.css('left'))
                // $num = 250 + $boxLeft % 250
                if($boxLeft > -500) {
                    $box.animate({
                        left: $boxLeft + 'px'
                    }, 500, function() {
                        // console.log(parseInt($box.css('left')));
                    })
                }else{
                //向左偏移，如果$boxLeft小于等于-750px的话 那就是最后一个颜色模块，不允许被偏移
                    $box.animate({
                        left: -500 + 'px'
                    }, 500, function() {})
                }
            }
        })
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
        var zUrl = zPreUrl + p_str_name;
        return zUrl;
    },

    //跳转到页面
    gotoWebSite : function(p_str_url, p_bool_isNeedVer=true){
        if(p_bool_isNeedVer==true){
            javascript:location.href=p_str_url+'?ver='+common.VER;
        }else{
            javascript:location.href=p_str_url;
        }
    }


}
