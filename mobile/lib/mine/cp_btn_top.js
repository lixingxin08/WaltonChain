
//点击去到最顶端的按钮
cp_btn_top = {
    param_parentId : "",    //容器id
    param_SorH : true,     //显示或不显示
    htmlCode :  '\
                <div id="id_cp_btn_top" class="cp_btn_top">\
                    <img src="../img/btn_top.png">\
                </div>\
                ',
    cssCode :   '\
                .cp_btn_top{position:fixed; bottom:60px; right:60px; z_index:10000; cursor:pointer;}\
                ',

    //运行元件
    init : function(p_str_parentId){
        cp_btn_top.param_parentId = p_str_parentId;

        cp_btn_top.loadCss();
        cp_btn_top.loadHtml();

        cp_btn_top.showOrHide(false);

        $('#id_cp_btn_top').click({myType:"id_cp_btn_top"}, cp_btn_top.btnClickHandler);
        $(window).scroll(function(event){
            var zTop = $(window).scrollTop();
            if(zTop > 1000){
                cp_btn_top.showOrHide(true);
            }else{
                cp_btn_top.showOrHide(false);
            }
        });
    },

    //加载html
    loadHtml : function(){
        document.getElementById(cp_btn_top.param_parentId).innerHTML = cp_btn_top.htmlCode;
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

    //显示或隐藏
    showOrHide : function(p_bool_sh){
        if(p_bool_sh != cp_btn_top.param_SorH){
            cp_btn_top.param_SorH = p_bool_sh;
            if(cp_btn_top.param_SorH==true){
                $("#"+cp_btn_top.param_parentId).show();
            }else{
                $("#"+cp_btn_top.param_parentId).hide();
            }
        }
    },

    //按钮点击事件
    btnClickHandler : function(p_obj_event){
        switch(p_obj_event.data.myType){
            case "id_cp_btn_top":
                $(window).scrollTop(0);
                break;
        }
    },

    //窗口尺寸重置
    windowResize : function(p_left){
        // $('#id_cp_select_main').css({"left":p_left+"px"});
    }
}

