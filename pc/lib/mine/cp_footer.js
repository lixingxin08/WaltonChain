
//手机端的底部按钮
cp_footer = {
    param_parentId : "",    //容器id
    param_selectedId : 1,   //选中哪个栏目
    htmlCode :  '<div class="cp_footer_main" id="id_footer_main">\
                    <div class="cp_footer_bg"></div>\
                    <div id="id_cp_footer_btn_1" class="cp_footer_btn cp_footer_btn_1">首页</div>\
                    <div id="id_cp_footer_btn_2" class="cp_footer_btn cp_footer_btn_2">资产</div>\
                    <div id="id_cp_footer_btn_3" class="cp_footer_btn cp_footer_btn_3">团队</div>\
                    <div id="id_cp_footer_btn_4" class="cp_footer_btn cp_footer_btn_4">大神</div>\
                    <div id="id_cp_footer_btn_5" class="cp_footer_btn cp_footer_btn_5">我的</div>\
                </div>',
    cssCode :   '\
                .cp_footer_main{position:fixed; bottom:0px; height:60px; z-index:2000;}\
                .cp_footer_bg{position:absolute; background-color:rgba(0,0,0,0.8); width:375px; height:60px;}\
                .cp_footer_btn{position:absolute; top:15px; color:#fff; font-size:22px; font-weight:100; -webkit-user-select:none; -moz-user-select:none; -ms-user-select:none; user-select:none;}\
                .cp_footer_btn_1{left:15px;}\
                .cp_footer_btn_2{left:85px;}\
                .cp_footer_btn_3{left:160px;}\
                .cp_footer_btn_4{left:235px;}\
                .cp_footer_btn_5{left:310px;}\
                .cp_footer_btn:hover{color:#9aebff;}\
                .cp_footer_select{text-shadow: 0 0 10px #FFFFFF, 0 0 20px #FFFFFF, 0 0 30px #FFFFFF, 0 0 40px #FF00DE, 0 0 70px #FF00DE, 0 0 80px #FF00DE, 0 0 100px #FF00DE;}\
                ',

    //初始化
    init : function(p_str_parentId, p_int_selectId){
        this.param_parentId = p_str_parentId;
        this.param_selectedId = p_int_selectId;

        this.loadCss();
        this.loadHtml();

        document.getElementById('id_cp_footer_btn_1').addEventListener('mousedown',function(){cp_footer.onFooterDown(1)}); 
        document.getElementById('id_cp_footer_btn_2').addEventListener('mousedown',function(){cp_footer.onFooterDown(2)}); 
        document.getElementById('id_cp_footer_btn_3').addEventListener('mousedown',function(){cp_footer.onFooterDown(3)}); 
        document.getElementById('id_cp_footer_btn_4').addEventListener('mousedown',function(){cp_footer.onFooterDown(4)});
        document.getElementById('id_cp_footer_btn_5').addEventListener('mousedown',function(){cp_footer.onFooterDown(5)});
        window.onresize = windowResize;

        this.selected(false);
        this.windowResize();
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

    //窗口尺寸重置
    windowResize : function(){
        $('#id_footer_main').css({"width":document.body.clientWidth+"px"});
    },

    //按钮按下
    onFooterDown : function(p_int_id){
        cp_footer.param_selectedId = p_int_id;
        cp_footer.selected(true);
    },

    //选择
    selected : function(p_bool_isUpdatePage){
        cp_footer.resetBtn();

        switch(cp_footer.param_selectedId){
            case 1:
                $('#id_cp_footer_btn_1').addClass("cp_footer_select");
                if(p_bool_isUpdatePage==true) common.gotoWebSite('main.html');
                break;
            case 2:
                $('#id_cp_footer_btn_2').addClass("cp_footer_select");
                if(p_bool_isUpdatePage==true) common.gotoWebSite('asset.html');
                break;
            case 3:
                $('#id_cp_footer_btn_3').addClass("cp_footer_select");
                if(p_bool_isUpdatePage==true) common.gotoWebSite('group.html');
                break;
            case 4:
                $('#id_cp_footer_btn_4').addClass("cp_footer_select");
                if(p_bool_isUpdatePage==true) common.gotoWebSite('manager.html');
                break;
            case 5:
                $('#id_cp_footer_btn_5').addClass("cp_footer_select");
                if(p_bool_isUpdatePage==true) common.gotoWebSite('mine.html');
                break;
        }
    },

    //重置按钮
    resetBtn : function(){
        var zMyList=document.getElementsByClassName("cp_footer_btn");
        for(var i=0; i<zMyList.length; i++){
            var zMyId = zMyList[i].id;
            $('#'+zMyId).removeClass("cp_footer_select");
        }
    }
}

