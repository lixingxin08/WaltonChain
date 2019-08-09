//需要导入 jquery.cookie.js

//弹窗
cp_popUpWin = {
    param_parentId : "",       //参数-父级对象的id
    param_heightLevel : 1,     //参数-高度等级:1 2 3
    param_txtTitle : "标题",   //参数-标题
    param_txtContent : "内容", //参数-内容
    param_btn1Txt : "确定",    //参数-按钮1显示的文字
    param_btn2Txt : "取消",    //参数-按钮2显示的文字
    param_feedbackFun1 : null,   //参数-按钮1操作的回调函数
    param_feedbackFun2 : null,   //参数-按钮2操作的回调函数
    param_isShowCloseBtn : false,  //参数-是否右上角显示关闭按钮
    feebackDo : 1,                  //点击按钮后使用哪个feedback
    HEIGHT_1 : 150,
    HEIGHT_2 : 320,
    HEIGHT_3 : 420,
    htmlCode :  '\
                <div class="cp_popUpWin_container" id="id_cp_popUpWin_container">\
                    <div class="cp_popUpWin_bg" id="id_cp_popUpWin_bg"></div>\
                    <div class="cp_popUpWin_win" id="id_cp_popUpWin_win" hidden>\
                        <div class="cp_popUpWin_bg_top" ></div>\
                            <div class="cp_popUpWin_title" id="id_cp_popUpWin_title">标题</div>\
                        <div class="cp_popUpWin_bg_body" id="id_cp_popUpWin_bg_body">\
                            <div class="cp_popUpWin_content" id="id_cp_popUpWin_content">内容</div>\
                            <button class="cp_popUpWin_btn_1 cp_popUpWin_a_demo_one" id="id_cp_popUpWin_btn_1" hidden>确定</button>\
                            <button class="cp_popUpWin_btn_2 cp_popUpWin_a_demo_one" id="id_cp_popUpWin_btn_2" hidden>取消</button>\
                        </div>\
                    </div>\
                </div>\
                ',
    cssCode :   '\
                .cp_popUpWin_container{position:fixed; top:0px; left:0px; z-index:9000;}\
                .cp_popUpWin_bg{filter:alpha(Opacity=50);-moz-opacity:0.5;opacity:0.5; background-color:#000; width:2000px; height:2000px; position:absolute; top:0; left:0;}\
                .cp_popUpWin_win{position:absolute; box-shadow: 10px 10px 5px #444;}\
                .cp_popUpWin_bg_top{width:300px; height:50px; border:0px; background:#2793c5; border-radius:6px 6px 0px 0px;}\
                .cp_popUpWin_bg_body{width:300px; height:220px; border:0px; background:#fff; border-radius:0px 0px 6px 6px; overflow:auto;}\
                .cp_popUpWin_title{position:absolute; top:5px; left:10px; right:10px; text-align:center; font-size:26px; color:#fff;}\
                .cp_popUpWin_content{padding-left:10px; padding-right:10px; width:280px; text-align:center; font-size:20px; color:#666; overflow-y:auto; word-wrap:break-word; word-break:normal; vertical-align:middle; display:table-cell}\
                .cp_popUpWin_btn_1{position:absolute; left:25%; transform:translate(-50%, 0%);}\
                .cp_popUpWin_btn_2{position:absolute; right:25%; transform:translate(-50%, 0%);}\
                .cp_popUpWin_a_demo_one {\
                    background-color:#3bb3e0;\
                    padding:10px;\
                    position:relative;\
                    width:180px;\
                    height:40px;\
                    font-size:20px;\
                    line-height: 0.42857143;\
                    text-decoration:none;\
                    color:#fff;\
                    border: solid 1px #186f8f;\
                    background-image: linear-gradient(bottom, rgb(44,160,202) 0%, rgb(62,184,229) 100%);\
                    background-image: -o-linear-gradient(bottom, rgb(44,160,202) 0%, rgb(62,184,229) 100%);\
                    background-image: -moz-linear-gradient(bottom, rgb(44,160,202) 0%, rgb(62,184,229) 100%);\
                    background-image: -webkit-linear-gradient(bottom, rgb(44,160,202) 0%, rgb(62,184,229) 100%);\
                    background-image: -ms-linear-gradient(bottom, rgb(44,160,202) 0%, rgb(62,184,229) 100%);\
                    background-image: -webkit-gradient(\
                    linear,\
                    left bottom,\
                    left top,\
                    color-stop(0, rgb(44,160,202)),\
                    color-stop(1, rgb(62,184,229))\
                    );\
                    -webkit-box-shadow: inset 0px 1px 0px #7fd2f1, 0px 1px 0px #fff;\
                    -moz-box-shadow: inset 0px 1px 0px #7fd2f1, 0px 1px 0px #fff;\
                    box-shadow: inset 0px 1px 0px #7fd2f1, 0px 1px 0px #fff;\
                    -webkit-border-radius: 5px;\
                    -moz-border-radius: 5px;\
                    -o-border-radius: 5px;\
                    border-radius: 5px;\
                }\
                .cp_popUpWin_a_demo_one::before {\
                    background-color:#ccd0d5;\
                    display:block;\
                    position:absolute;\
                    z-index:-1;\
                    -webkit-border-radius: 5px;\
                    -moz-border-radius: 5px;\
                    -o-border-radius: 5px;\
                    border-radius: 5px;\
                    -webkit-box-shadow: inset 0px 1px 1px #909193, 0px 1px 0px #fff;\
                    -moz-box-shadow: inset 0px 1px 1px #909193, 0px 1px 0px #fff;\
                    -o-box-shadow: inset 0px 1px 1px #909193, 0px 1px 0px #fff;\
                    box-shadow: inset 0px 1px 1px #909193, 0px 1px 0px #fff;\
                }\
                .cp_popUpWin_a_demo_one:active {\
                    background-image: linear-gradient(bottom, rgb(62,184,229) 0%, rgb(44,160,202) 100%);\
                    background-image: -o-linear-gradient(bottom, rgb(62,184,229) 0%, rgb(44,160,202) 100%);\
                    background-image: -moz-linear-gradient(bottom, rgb(62,184,229) 0%, rgb(44,160,202) 100%);\
                    background-image: -webkit-linear-gradient(bottom, rgb(62,184,229) 0%, rgb(44,160,202) 100%);\
                    background-image: -ms-linear-gradient(bottom, rgb(62,184,229) 0%, rgb(44,160,202) 100%);\
                    background-image: -webkit-gradient(\
                    linear,\
                    left bottom,\
                    left top,\
                    color-stop(0, rgb(62,184,229)),\
                    color-stop(1, rgb(44,160,202))\
                    );\
                }\
                ',

    //运行元件
    init : function(p_str_parentId, p_int_heightLevel, p_str_title, p_str_content, p_str_btn1Txt, p_fun_feedbackFun1, p_str_btn2Txt, p_fun_feedbackFun2){
        this.param_parentId = p_str_parentId;
        this.param_heightLevel = p_int_heightLevel;
        this.param_txtTitle = p_str_title;
        this.param_txtContent = p_str_content;
        this.param_btn1Txt = p_str_btn1Txt;
        this.param_feedbackFun1 = p_fun_feedbackFun1;
        this.param_btn2Txt = p_str_btn2Txt;
        this.param_feedbackFun2 = p_fun_feedbackFun2;

        this.loadCss();
        this.loadHtml();
        
        $('#id_cp_popUpWin_title').html(this.param_txtTitle);
        $('#id_cp_popUpWin_content').html(this.param_txtContent);

        //高度
        var zMyHeight = 0;
        switch(this.param_heightLevel){
            case 1:
                zMyHeight = this.HEIGHT_1;
                $('#id_cp_popUpWin_content').css({"text-align":"center", "height":(zMyHeight-60)+"px"});
                break;
            case 2:
                zMyHeight = this.HEIGHT_2;
                $('#id_cp_popUpWin_content').css({"text-align":"left", "height":(zMyHeight-60)+"px"});
                break;
            case 3:
                zMyHeight = this.HEIGHT_3;
                $('#id_cp_popUpWin_content').css({"text-align":"left", "height":(zMyHeight-60)+"px"});
                break;
            default:
                zMyHeight = this.HEIGHT_1;
                break;
        }
        $('#id_cp_popUpWin_bg_body').css({"height":zMyHeight+"px"});

        //按钮1
        if(this.param_btn1Txt){
            $('#id_cp_popUpWin_btn_1').html(this.param_btn1Txt);
            $('#id_cp_popUpWin_btn_1').css({"left":"50%", "top":(zMyHeight-140)+"px"});
            $('#id_cp_popUpWin_btn_1').show();
        }
        else{
            $('#id_cp_popUpWin_btn_1').hide();
        }
        if(this.param_feedbackFun1){
            $('#id_cp_popUpWin_btn_1').click({myType:"id_cp_popUpWin_btn_1"}, cp_popUpWin.btnClickHandler);
        }else{
            $('#id_cp_popUpWin_btn_1').click({myType:"closeWin"}, cp_popUpWin.btnClickHandler);
        }

        //按钮2
        if(this.param_btn2Txt){
            $('#id_cp_popUpWin_btn_2').html(this.param_btn2Txt);
            $('#id_cp_popUpWin_btn_1').css({"left":"75px", "top":10+"px", "width":"120px"});
            $('#id_cp_popUpWin_btn_2').css({"left":"100px", "top":10+"px", "width":"120px"});
            $('#id_cp_popUpWin_btn_1').show();
            $('#id_cp_popUpWin_btn_2').show();
        }
        else{
            $('#id_cp_popUpWin_btn_2').hide();
        }
        if(this.param_feedbackFun2){
            $('#id_cp_popUpWin_btn_2').click({myType:"id_cp_popUpWin_btn_2"}, cp_popUpWin.btnClickHandler);
        }else{
            $('#id_cp_popUpWin_btn_2').click({myType:"closeWin"}, cp_popUpWin.btnClickHandler);
        }

        $('#'+this.param_parentId).show();
        $('#id_cp_popUpWin_win').fadeIn(500);

        this.setSizePos();
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

    //设置尺寸位置
    setSizePos : function(){
        var zMyWidth = document.body.clientWidth;
        var zMyHeight = window.screen.height;
        var zObjWidth = $('#id_cp_popUpWin_win').css("width");
        var zObjHeight = $('#id_cp_popUpWin_win').css("height");
        
        var zMiddleWidth = (common.MAX_WIDTH-parseInt(zObjWidth))/2;
        var zMiddleHeight = (zMyHeight-parseInt(zObjHeight))/2-40;
        // console.log(zMiddleHeight);
        $('#id_cp_popUpWin_win').css({"left":zMiddleWidth+"px", "top":zMiddleHeight+"px"});
    },

    //按钮点击事件
    btnClickHandler : function(p_obj_event){
        switch(p_obj_event.data.myType){
            case "closeWin":
                $('#id_cp_popUpWin_container').fadeOut(500, cp_popUpWin.popupWinHide);
                break;
            case "id_cp_popUpWin_btn_1":
                cp_popUpWin.feebackDo = 1;
                $('#id_cp_popUpWin_container').fadeOut(500, cp_popUpWin.popupWinHide);
                break;
            case "id_cp_popUpWin_btn_2":
                cp_popUpWin.feebackDo = 2;
                $('#id_cp_popUpWin_container').fadeOut(500, cp_popUpWin.popupWinHide);
                break;
        }
    },

    //隐藏显示窗口
    popupWinHide : function(){
        $('#id_cp_popUpWin_win').hide();
        parent.$('#'+this.param_parentId).hide();

        if(cp_popUpWin.feebackDo == 1 && cp_popUpWin.param_feedbackFun1!=undefined && cp_popUpWin.param_feedbackFun1!=null){
            cp_popUpWin.param_feedbackFun1();
        }else if(cp_popUpWin.feebackDo == 2 && cp_popUpWin.param_feedbackFun2!=undefined && cp_popUpWin.param_feedbackFun2!=null){
            cp_popUpWin.param_feedbackFun2();
        }
        

    }
}

