
//展示
cp_desc = {
    param_parentId : "",    //容器id
    htmlCode :  '\
                <div id="id_cp_desc_main" class="cp_desc_main">\
                    <div class="cp_desc_block cp_desc_block_1">\
                        <img class="cp_desc_block_img" src="../img/desc_1.jpg">\
                        <div class="cp_desc_block_txt">Latest Block</div>\
                        <div id="id_cp_desc_block_num_1" class="cp_desc_block_num cp_desc_block_num_1">#0</div>\
                    </div>\
                    <div class="cp_desc_block cp_desc_block_2">\
                        <img class="cp_desc_block_img" src="../img/desc_2.jpg">\
                        <div class="cp_desc_block_txt">Coin Price</div>\
                        <div id="id_cp_desc_block_num_2" class="cp_desc_block_num cp_desc_block_num_2">0<label style="font-size:20px;"> BTC</label></div>\
                    </div>\
                    <div class="cp_desc_block cp_desc_block_3">\
                        <img class="cp_desc_block_img" src="../img/desc_3.jpg">\
                        <div class="cp_desc_block_txt">Node Count</div>\
                        <div id="id_cp_desc_block_num_3" class="cp_desc_block_num cp_desc_block_num_3">0</div>\
                    </div>\
                    <div class="cp_desc_block cp_desc_block_4">\
                        <img class="cp_desc_block_img" src="../img/desc_4.jpg">\
                        <div class="cp_desc_block_txt">Avg Block Time</div>\
                        <div id="id_cp_desc_block_num_4" class="cp_desc_block_num cp_desc_block_num_4">0<label style="font-size:20px;"> s</label></div>\
                    </div>\
                    <div class="cp_desc_block cp_desc_block_5">\
                        <img class="cp_desc_block_img" src="../img/desc_5.jpg">\
                        <div class="cp_desc_block_txt">Avg Hashrate</div>\
                        <div id="id_cp_desc_block_num_5" class="cp_desc_block_num cp_desc_block_num_5">0<label style="font-size:20px;"> MH/s</label></div>\
                    </div>\
                    <div class="cp_desc_block cp_desc_block_6">\
                        <img class="cp_desc_block_img" src="../img/desc_6.jpg">\
                        <div class="cp_desc_block_txt">Difficulty</div>\
                        <div id="id_cp_desc_block_num_6" class="cp_desc_block_num cp_desc_block_num_6">0<label style="font-size:20px;"> GH</label></div>\
                    </div>\
                    <div class="cp_desc_block cp_desc_block_7">\
                        <img class="cp_desc_block_img" src="../img/desc_7.jpg">\
                        <div class="cp_desc_block_txt">Mined Coins</div>\
                        <div id="id_cp_desc_block_num_7" class="cp_desc_block_num cp_desc_block_num_7">0<label style="font-size:20px;"> WTC</label></div>\
                    </div>\
                    <div class="cp_desc_block cp_desc_block_8">\
                        <img class="cp_desc_block_img" src="../img/desc_8.jpg">\
                        <div class="cp_desc_block_txt">All Coins</div>\
                        <div id="id_cp_desc_block_num_8" class="cp_desc_block_num cp_desc_block_num_8">0<label style="font-size:20px;"> WTC</label></div>\
                    </div>\
                    <div class="cp_desc_line_0"></div>\
                    <div class="cp_desc_line_1"></div>\
                    <div class="cp_desc_line_2"></div>\
                    <div class="cp_desc_line_3"></div>\
                </div>\
                ',
    cssCode :   '\
                .cp_desc_main{position:absolute; width:700px; height:560px;}\
                .cp_desc_block{position:absolute; background-color:#181b2a; width:350px; height:140px;}\
                .cp_desc_block_1{left:0px; top:0px;}\
                .cp_desc_block_2{left:350px; top:0px;}\
                .cp_desc_block_3{left:0px; top:140px;}\
                .cp_desc_block_4{left:350px; top:140px;}\
                .cp_desc_block_5{left:0px; top:280px;}\
                .cp_desc_block_6{left:350px; top:280px;}\
                .cp_desc_block_7{left:0px; top:420px;}\
                .cp_desc_block_8{left:350px; top:420px;}\
                .cp_desc_block_img{position:absolute; width:88px; height:72px; left:22px; top:34px;}\
                .cp_desc_block_txt{position:absolute; width:180px; left:126px; top:35px; font-size:20px; font-family:BrandonText Medium; color:#c8c8c8;}\
                .cp_desc_block_num{position:absolute; width:228px; left:126px; top:66px; font-size:32px; font-family:BrandonText Thin; line-height:32px;}\
                .cp_desc_block_num_1{color:#04a6d2;}\
                .cp_desc_block_num_2{color:#f2b825;}\
                .cp_desc_block_num_3{color:#04d0b4;}\
                .cp_desc_block_num_4{color:#a579d9;}\
                .cp_desc_block_num_5{color:#e57cce;}\
                .cp_desc_block_num_6{color:#3db8d4;}\
                .cp_desc_block_num_7{color:#c17a32;}\
                .cp_desc_block_num_8{color:#00fdd9;}\
                .cp_desc_line_0{position:absolute; left:350px; top:0px; width:2px; height:560px; background-color:#2a3044; }\
                .cp_desc_line_1{position:absolute; left:0px; top:140px; width:700px; height:2px; background-color:#2a3044; }\
                .cp_desc_line_2{position:absolute; left:0px; top:280px; width:700px; height:2px; background-color:#2a3044; }\
                .cp_desc_line_3{position:absolute; left:0px; top:420px; width:700px; height:2px; background-color:#2a3044; }\
                ',

    //初始化
    init : function(p_str_parentId){
        this.param_parentId = p_str_parentId;

        this.loadCss();
        this.loadHtml();

    },

    //加载html
    loadHtml : function(){
        document.getElementById(this.param_parentId).innerHTML = this.htmlCode;
    },

    //加载CSS
    loadCss : function(){
        var style = document.createElement('style');
        style.type = 'text/css';
        style.rel = 'stylesheet';
        //for Chrome,Firefox,Opera,Safari
        style.appendChild(document.createTextNode(this.cssCode));
        //for IE
        var head = document.getElementsByTagName('head')[0];
        head.appendChild(style);
    },

    //更新信息
    //@p_int_pos    位置
    //@p_int_value  值
    updateInfo : function(p_int_pos, p_int_value){
        if(!p_int_value){
            console.log("cp_desc.updateInfo p_int_value数据无效:"+p_int_value+", pos:"+p_int_pos);
            return;
        }

        var zValue = common.numQian(p_int_value);
        switch(p_int_pos){
            case 1:
                $('#id_cp_desc_block_num_1').html("#"+zValue);
                break;
            case 2:
                $('#id_cp_desc_block_num_2').html(zValue+'<label style="font-size:20px;"> BTC</label>');
                break;
            case 3:
                $('#id_cp_desc_block_num_3').html(zValue);
                break;
            case 4:
                if(zValue=="NaN"){
                    zValue = "30.01";
                }
                $('#id_cp_desc_block_num_4').html(zValue+'<label style="font-size:20px;"> s</label>');
                break;
            case 5:
                if(zValue=="NaN"){
                    zValue = "33,483.03";
                }
                $('#id_cp_desc_block_num_5').html(zValue+'<label style="font-size:20px;"> GH/s</label>');
                break;
            case 6:
                $('#id_cp_desc_block_num_6').html(zValue+'<label style="font-size:20px;"> GH</label>');
                break;
            case 7:
                $('#id_cp_desc_block_num_7').html(zValue+'<label style="font-size:20px;"> WTC</label>');
                break;
            case 8:
                $('#id_cp_desc_block_num_8').html(zValue+'<label style="font-size:20px;"> WTC</label>');
                break;
        }
    },

    //更新数据
    updateDescInfo : function(){
        var zNow = new Date().getTime();
        var zPass = common.getCookie("desc_time");

        var zIsRefresh = true;
        if(zPass){
            var zDifference = zNow - zPass;
            if(zDifference < (common.REFRESH_TIME-500)){
                zIsRefresh = false;
            }
        }

        //判断是否从服务器读取数据
        if(zIsRefresh){
            cp_desc.php_getMarket();
            cp_desc.php_getAllCoins();
            cp_desc.php_getCurrentNodesDistribution();
            cp_desc.php_getAvgBlockTime();
        }else{
            cp_desc.getBlockInfo();
        }
        
        common.setCookie("desc_time", zNow);
    },

    //设置块的3个相关信息
    setBlockInfo : function (p_1, p_4, p_5, p_6){
        common.setCookie("desc_1", p_1);
        // common.setCookie("desc_4", p_4);
        common.setCookie("desc_5", p_5);
        common.setCookie("desc_6", p_6);
        cp_desc.getBlockInfo();
    },

    //读取块的3个相关信息
    getBlockInfo : function (){
        cp_desc.updateInfo(1, common.getCookie("desc_1"));
        cp_desc.updateInfo(2, common.getCookie("desc_2"));
        cp_desc.updateInfo(3, common.getCookie("desc_3"));
        cp_desc.updateInfo(4, common.getCookie("desc_4"));
        cp_desc.updateInfo(5, common.getCookie("desc_5"));
        cp_desc.updateInfo(6, common.getCookie("desc_6"));
        cp_desc.updateInfo(7, common.getCookie("desc_7"));
        cp_desc.updateInfo(8, common.getCookie("desc_8"));
    },

    php_getMarket : function(){
        $.ajax({
            url: common.getPhpUrl("getMarket/WTC/1"),
            type: "get",
            data:{},
            dataType: "json", //指定服务器返回的数据类型
            success: function (evt) {
                console.log("php_getMarket success:");
                console.log(evt);
                if(evt.token_market && evt.token_market[0]){
                    common.setCookie("desc_2", evt.token_market[0].TokenPriceBTC);
                    cp_desc.getBlockInfo();
                }else{
                    console.log("php_getMarket 结果为空:", evt.token_market);
                }
            },error: function(error){
                console.log("php_getMarket error:"+error.msg);
            }
        });
    },

    php_getAllCoins : function(){
        $.ajax({
            url: common.getPhpUrl("getAllCoins"),
            type: "get",
            data:{},
            dataType: "json", //指定服务器返回的数据类型
            success: function (evt) {
                console.log("php_getAllCoins success:");
                console.log(evt);
                common.setCookie("desc_7", evt.mining_coin);
                common.setCookie("desc_8", evt.origin_coin);
                cp_desc.getBlockInfo();
            },error: function(error){
                console.log("php_getAllCoins error:"+error.msg);
            }
        });
    },

    php_getCurrentNodesDistribution : function(){
        $.ajax({
            url: common.getPhpUrl("getCurrentNodesDistribution"),
            type: "get",
            data:{},
            dataType: "json", //指定服务器返回的数据类型
            success: function (evt) {
                console.log("php_getCurrentNodesDistribution success:");
                console.log(evt);
                var zValue = 0;
                for(let zKey in evt) {  
                    zValue += parseInt(evt[zKey]); 
                } 
                common.setCookie("desc_3", zValue);
                cp_desc.getBlockInfo();
            },error: function(error){
                console.log("php_getCurrentNodesDistribution error:"+error.msg);
            }
        });
    },

    php_getAvgBlockTime : function(){
        $.ajax({
            url: common.getPhpUrl("getAvgBlockTime"),
            type: "get",
            data:{},
            dataType: "json", //指定服务器返回的数据类型
            success: function (evt) {
                console.log("php_getAvgBlockTime success:");
                console.log(evt);
                var zValue = evt.AvgBlockTime;
                common.setCookie("desc_4", zValue);
                cp_desc.getBlockInfo();
            },error: function(error){
                console.log("php_getAvgBlockTime error:"+error.msg);
            }
        });
    },

    //窗口尺寸重置
    windowResize : function(p_left){
        $('#id_cp_desc_main').css({"left":p_left+"px"});
    }
}

