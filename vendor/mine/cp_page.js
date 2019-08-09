
//select按钮
cp_page = {
    param_parentId : "",        //容器id
    param_curPage : 1,          //当前页
    param_totalPage : 1,        //总页
    param_funCallBack : null,   //回调函数
    htmlCode :  '\
                <div id="id_cp_page_main" class="cp_page_main">\
                    <div id="id_cp_page_btn_first" class="cp_page_btn" style="left:0px; width:75px;">First</div>\
                    <div id="id_cp_page_btn_left" class="cp_page_btn" style="left:95px; width:55px;">&#9668</div>\
                    <div id="id_cp_page_show" class="cp_page_show" style="left:160px; width:160px;">0/0</div>\
                    <div id="id_cp_page_btn_right" class="cp_page_btn" style="left:330px; width:55px;">&#9658</div>\
                    <div id="id_cp_page_btn_last" class="cp_page_btn" style="left:405px; width:75px;">Last</div>\
                </div>\
                ',
    cssCode :   '\
                .cp_page_main{position:absolute;}\
                .cp_page_btn{position:absolute; height:45px; font-size:22px; cursor:pointer; text-align:center; line-height:45px; border:1px solid #3b4053; color:#bac1dd; background-color:#1c1f30; transition:all .6s;}\
                .cp_page_btn:hover{color:#fff;}\
                .cp_page_btn:active{color:#fff; background-color:#3b4053;}\
                .cp_page_show{position:absolute; width:160px; height:45px; font-size:22px; text-align:center; line-height:45px; border:1px solid #3b4053; color:#727176; background-color:#1c1f30;}\
                ',

    //初始化
    init : function(p_str_parentId, p_int_curPage, p_int_totalPage, p_fun_callBack){
        cp_page.param_parentId = p_str_parentId;
        cp_page.param_curPage = parseInt(p_int_curPage);
        cp_page.param_totalPage = parseInt(p_int_totalPage);
        cp_page.param_funCallBack = p_fun_callBack;

        if(cp_page.param_totalPage==0){
            console.log("cp_page初始化失败，因为p_int_totalPage为0");
            return;
        }

        this.loadCss();
        this.loadHtml();

        $('#id_cp_page_btn_left').click({myType:"id_cp_page_btn_left"}, cp_page.btnClickHandler);
        $('#id_cp_page_btn_right').click({myType:"id_cp_page_btn_right"}, cp_page.btnClickHandler);
        $('#id_cp_page_btn_first').click({myType:"id_cp_page_btn_first"}, cp_page.btnClickHandler);
        $('#id_cp_page_btn_last').click({myType:"id_cp_page_btn_last"}, cp_page.btnClickHandler);

        cp_page.updatePage(cp_page.param_curPage);
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
    },

    //按钮点击事件
    btnClickHandler : function(p_obj_event){
        switch(p_obj_event.data.myType){
                case "id_cp_page_btn_left":
                    if(cp_page.param_curPage<=1){
                        return;
                    }
                    cp_page.updatePage(cp_page.param_curPage-1, true);
                    break;
                case "id_cp_page_btn_right":
                    if(cp_page.param_curPage>=cp_page.param_totalPage){
                        return;
                    }
                    cp_page.updatePage(cp_page.param_curPage+1, true);
                    break;
                case "id_cp_page_btn_first":
                    cp_page.updatePage(1, true);
                    break;
                case "id_cp_page_btn_last":
                    cp_page.updatePage(cp_page.param_totalPage, true);
                    break;
        }
    },

    //更新页面
    updatePage : function(p_int_curPage, p_bool_isFun=false){
        if(p_int_curPage==0){
            return;
        }
        cp_page.param_curPage = p_int_curPage;

        if(p_bool_isFun==true){
            cp_page.param_funCallBack(p_int_curPage);
        }

        $("#id_cp_page_show").text(cp_page.param_curPage + " / " + cp_page.param_totalPage);
    },

    //窗口尺寸重置
    windowResize : function(p_left){
        $('#id_cp_page_main').css({"left":p_left+"px"});
    }
}

