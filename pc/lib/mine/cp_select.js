
//select按钮
cp_select = {
    param_parentId : "",    //容器id
    param_list : [],        //数组
    param_funCallBack : null,  //回调函数
    htmlCode :  '\
                <div id="id_cp_select_main" class="cp_select_main">\
                    <div class="cp_select_bg"></div>\
                    <div id="id_cp_select_title" class="cp_select_title">20</div>\
                    <div id="id_cp_select_btn_down" class="cp_select_btn"><img src="../img/select_down.png"></div>\
                    <div id="id_cp_select_btn_up" class="cp_select_btn"><img src="../img/select_up.png"></div>\
                    <div id="id_cp_select_content" class="cp_select_content"></div>\
                </div>\
                ',
    cssCode :   '\
                .cp_select_bg{position:absolute; width:90px; height:35px; background-color:#373c4f; border:0px; border-radius:5px;}\
                .cp_select_title{position:absolute; top:10px; width:60px; text-align:center; color:#fff; font-family:Arial; font-size:16px;}\
                .cp_select_main{position:absolute;}\
                .cp_select_btn{position:absolute; left:60px; top:7px; cursor:pointer;}\
                .cp_select_content{position:absolute; top:38px; width:90px; height:35px; background-color:#373c4f; border:0px; border-radius:5px;}\
                .cp_select_content_select{position:absolute; left:10px; width:70px; height:26px; text-align:center; border:0px; border-radius:5px; cursor:pointer; line-height:26px; color:#aaa; background-color:#373c4f; transition:all .6s;}\
                .cp_select_content_select:hover{color:#fff; background-color:#59607b;}\
                ',

    //初始化
    init : function(p_str_parentId, p_list_info, p_fun_callBack){
        cp_select.param_parentId = p_str_parentId;
        cp_select.param_list = p_list_info;
        cp_select.param_funCallBack = p_fun_callBack;

        this.loadCss();
        this.loadHtml();

        $('#id_cp_select_btn_down').click({myType:"id_cp_select_btn_down"}, cp_select.btnClickHandler);
        $('#id_cp_select_btn_up').click({myType:"id_cp_select_btn_up"}, cp_select.btnClickHandler);
        
        $('#id_cp_select_title').text(cp_select.param_list[0]);

        $('#id_cp_select_btn_down').show();
        $('#id_cp_select_btn_up').hide();
        $('#id_cp_select_content').hide();
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

    //加载html
    loadHtml : function(){
        document.getElementById(this.param_parentId).innerHTML = this.htmlCode;

        $('#id_cp_select_content').html("");
        var zHtmlCode = "";
        var zTotalHeight = 0;
        for(var i=0; i<this.param_list.length; i++){
            var zInfo = this.param_list[i];
            var zTop = i*30+4;
            zTotalHeight = (i+1)*30+4;
            zHtmlCode += '\
                    <div id="id_cp_select_content_select_'+i+'" class="cp_select_content_select" style="top:'+zTop+'px" onclick="cp_select.onSelectClickHandle('+i+')">'+zInfo+'</div>\
                    ';
        }
            

        $('#id_cp_select_content').css({"height":zTotalHeight});
        $('#id_cp_select_content').html(zHtmlCode);
    },

    //按钮点击事件
    btnClickHandler : function(p_obj_event){
        switch(p_obj_event.data.myType){
                case "id_cp_select_btn_down":
                    $('#id_cp_select_btn_down').hide();
                    $('#id_cp_select_btn_up').show();
                    $('#id_cp_select_content').fadeIn();
                    break;
                case "id_cp_select_btn_up":
                    $('#id_cp_select_btn_down').show();
                    $('#id_cp_select_btn_up').hide();
                    $('#id_cp_select_content').fadeOut();
                    break;
        }
    },

    closeWin : function(){
        $('#id_cp_select_content').fadeOut();
    },
    
    //选择点击
    onSelectClickHandle : function(p_int_index){
        var zOldValue = $('#id_cp_select_title').text();
        var zValue = $('#id_cp_select_content_select_'+p_int_index).text();
        $('#id_cp_select_btn_down').show();
        $('#id_cp_select_btn_up').hide();
        $('#id_cp_select_content').fadeOut();
        
        if(zValue != zOldValue){
            $('#id_cp_select_title').text(zValue);
            cp_select.param_funCallBack(zValue);
        }
    },

    //窗口尺寸重置
    windowResize : function(p_left){
        $('#id_cp_select_main').css({"left":p_left+"px"});
    }
}

