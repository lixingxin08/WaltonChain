
//
cp_footerB = {
    param_parentId : "",    //容器id
    htmlCode :  '\
                <div id="id_cp_footerB_main" class="cp_footerB_main">\
                    <div id="id_cp_footerB_container" class="cp_footerB_container">\
                        <img class="cp_footerB_logo" src="../img/logoB.jpg">\
                        <div class="cp_footerB_txt1">Homepage:</div>\
                        <div id="id_cp_footerB_btn_url" class="cp_footerB_txt1_1"><u>https://www.waltonchain.org</u></div>\
                        <div class="cp_footerB_txt2">Contact Us:</div>\
                        <div id="id_cp_footerB_btn2_url" class="cp_footerB_txt1_1" style="left:140px !important; top:180px !important;"><u>services@waltonchain.org</u></div>\
                        <div class="cp_footerB_txt3">Waltonchain Explorer © 2017-2018 Walton Chain Foundation Ltd. All rights reserved.</div>\
                    </div>\
                </div>\
                <div id="id_end_top" style="position:absolute; width:10px; height:10px; background-color:#ff0000; opacity:0;"></div>\
                <div id="id_end_bottom" style="position:absolute; left:100px; width:10px; height:10px; background-color:#00ff00; opacity:0;"></div>\
                ',
    cssCode :   '\
                .cp_footerB_main{position:absolute; width:100%; height:280px; background-color:#141929; bottom:0px;}\
                .cp_footerB_container{position:absolute;}\
                .cp_footerB_logo{position:absolute; top:45px;}\
                .cp_footerB_txt1{position:absolute; font-weight:400; left:20px; top:133px; width:80px; color:#ddd; font-size:20px; font-family:Microsoft YaHei;}\
                .cp_footerB_txt1_1{position:absolute; font-weight:400; left:145px; top:133px; width:400px; color:#ddd; font-size:20px; font-family:Microsoft YaHei; cursor:pointer; transition:color .6s;}\
                .cp_footerB_txt1_1:hover{color:#7e98ff;}\
                .cp_footerB_txt2{position:absolute; font-weight:400; left:20px; top:180px; width:700px; color:#ddd; font-size:20px; font-family:Microsoft YaHei;}\
                .cp_footerB_txt3{position:absolute; left:20px; top:235px; width:700px; color:#ddd; font-size:16px; font-family:Microsoft YaHei; opacity:.5;}\
                ',

    //初始化
    init : function(p_str_parentId){
        this.param_parentId = p_str_parentId;

        this.loadCss();
        this.loadHtml();

        $('#id_cp_footerB_btn_url').click({myType:"id_cp_footerB_btn_url"}, cp_footerB.btnClickHandler);
        $('#id_cp_footerB_btn2_url').click({myType:"id_cp_footerB_btn2_url"}, cp_footerB.btnClickHandler);
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

    //按钮点击事件
    btnClickHandler : function(p_obj_event){
        switch(p_obj_event.data.myType){
                case "id_cp_footerB_btn_url":
                    window.open("https://www.waltonchain.org/", "_blank"); 
                    break;
                case "id_cp_footerB_btn2_url":
                    window.open("mailto:services@waltonchain.org", "_blank"); 
                    break;
        }
    },

    //更新y
    updateTop : function(p_int_top){
        $('#id_end_top').css({"top":p_int_top+"px"});
        $('#id_end_bottom').css({"bottom":"0px"});
        var zPos_top = $('#id_end_top').css("top");
        var zPos_bottom = $('#id_end_bottom').css("top");
        zPosTop = parseInt(zPos_top.replace("px", ""));
        zPosBottom = parseInt(zPos_bottom.replace("px", ""));

        if(zPosTop>zPosBottom){
            $('#id_cp_footerB_main').css({"top":zPosTop+"px"});
        }else{
            $('#id_cp_footerB_main').css({"top":(zPosBottom-280)+"px"});
        }
    },

    //窗口尺寸重置
    windowResize : function(p_int_left){
        $('#id_cp_footerB_container').css({"left":p_int_left+"px"});
    }
}

