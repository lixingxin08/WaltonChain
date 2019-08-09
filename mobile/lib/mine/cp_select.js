
//select按钮
cp_select = {
    param_parentId : "",    //容器id
    param_list : [20,30,40,50,100],        //数组
    param_selectNum : 0,
    param_funCallBack : null,  //回调函数
    htmlCode :  '\
                <div id="id_cp_select_main" class="cp_select_main">\
                    <div id="id_cp_select_btn_down" class="cp_select_btn"><img src="../img/btn_select.png"></div>\
                    <div id="id_cp_select_content" class="cp_select_content"></div>\
                </div>\
                ',
    cssCode :   '\
                .cp_select_main{position:absolute;}\
                .cp_select_btn{position:absolute; left:0px; top:0px; cursor:pointer;}\
                .cp_select_content{position:absolute; z-index:1000; top:0px; left:-350px; width:340px; height:460px; background-color:#373c50; border:0px; border-radius:10px; display:none;}\
                .cp_select_content_select{position:absolute; width:340px; height:80px; cursor:pointer; line-height:80px; font-size:32px; color:#fff; background-color:#373c50; transition:all .6s;}\
                .cp_select_content_select:hover{color:#b4beec;}\
                .cp_select_content_select_active{color:#000 !important; background-color:#6b7abb !important;}\
                ',

    //初始化
    init : function(p_str_parentId, p_list_info, p_fun_callBack){
        cp_select.param_parentId = p_str_parentId;
        cp_select.param_list = p_list_info;
        cp_select.param_funCallBack = p_fun_callBack;

        this.loadCss();
        this.loadHtml();
        cp_select.selectNum(cp_select.param_selectNum);
        $('#id_cp_select_btn_down').click({myType:"id_cp_select_btn_down"}, cp_select.btnClickHandler);
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

        var zSpace = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        var zHtmlCode = "";

        zHtmlCode +=    '<div style="position:absolute; width:340px; height:460px; line-height:60px; font-size:32px; color:#9a9eaa;">'+zSpace+'View</div>\
                         <div style="position:absolute; left:0px; top:60px; width:340px; height:2px; background-color:#4a4d54; z-index:1200;"></div>\
                        ';
        var zTotalHeight = 0;
        for(var i=0; i<this.param_list.length; i++){
            var zInfo = this.param_list[i];
            var zTop = i*80+60;
            zTotalHeight = (i+1)*80+60;
            zHtmlCode += '\
                    <div id="id_cp_select_content_select_'+i+'" class="cp_select_content_select" style="top:'+zTop+'px;" onclick="cp_select.onSelectClickHandle('+i+')">'+zSpace+zInfo+'</div>\
                    ';
        }
            
        $('#id_cp_select_content').css({"height":zTotalHeight});
        $('#id_cp_select_content').html(zHtmlCode);
    },

    //按钮点击事件
    btnClickHandler : function(p_obj_event){
        switch(p_obj_event.data.myType){
            case "id_cp_select_btn_down":
                $('#id_cp_select_content').fadeToggle();
                break;
        }
    },

    closeWin : function(){
        $('#id_cp_select_content').fadeOut();
    },

    //选择点击
    onSelectClickHandle : function(p_int_index){
        var zValue = $('#id_cp_select_content_select_'+p_int_index).text();
        $('#id_cp_select_content').fadeOut();
        cp_select.selectNum(p_int_index);

        if(zValue != cp_select.param_selectNum){
            cp_select.param_funCallBack(zValue);
        }
        cp_select.param_selectNum = zValue;
    },

    //选择某个页码
    selectNum : function(p_int_index){
        for(var i=0; i<cp_select.param_list.length; i++){
            $('#id_cp_select_content_select_'+i).removeClass("cp_select_content_select_active");
        }
        $('#id_cp_select_content_select_'+p_int_index).addClass("cp_select_content_select_active");
    },

    //窗口尺寸重置
    windowResize : function(p_left){
        $('#id_cp_select_main').css({"left":p_left+"px"});
    }
}

