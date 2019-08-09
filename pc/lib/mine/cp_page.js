
//select按钮
cp_page = {
    param_parentId : "",        //容器id
    param_curPage : 1,          //当前页
    param_totalPage : 1,        //总页
    param_funCallBack : null,   //回调函数
    htmlCode :  '\
                <div id="id_cp_page_main" class="cp_page_main">\
                    <div id="id_cp_page_btn_left" class="cp_page_btn" style="left:0px;">&#9668</div>\
                    <div id="id_cp_page_btn_1" class="cp_page_btn" style="left:35px;">1</div>\
                    <div id="id_cp_page_btn_2" class="cp_page_btn" style="left:70px;">2</div>\
                    <div id="id_cp_page_btn_3" class="cp_page_btn" style="left:105px;">3</div>\
                    <div id="id_cp_page_btn_4" class="cp_page_btn" style="left:140px;">4</div>\
                    <div id="id_cp_page_btn_5" class="cp_page_btn" style="left:175px;">5</div>\
                    <div id="id_cp_page_btn_6" class="cp_page_btn" style="left:210px;">6</div>\
                    <div id="id_cp_page_btn_7" class="cp_page_btn" style="left:245px;">7</div>\
                    <div id="id_cp_page_btn_right" class="cp_page_btn" style="left:280px;">&#9658</div>\
                </div>\
                ',
    cssCode :   '\
                .cp_page_main{position:absolute;}\
                .cp_page_btn{position:absolute; width:35px; height:35px; cursor:pointer; text-align:center; line-height:35px; border:1px solid #3b4053; color:#5b6073; background-color:#1b1f2f; transition:all .6s; display:none;}\
                .cp_page_btn:hover{color:#fff;}\
                .cp_page_btn_selected{color:#fff; background-color:#3b4053;}\
                ',

    //初始化
    init : function(p_str_parentId, p_int_curPage, p_int_totalPage, p_fun_callBack){
        cp_page.param_parentId = p_str_parentId;
        cp_page.param_curPage = parseInt(p_int_curPage);
        cp_page.param_totalPage = parseInt(p_int_totalPage);
        cp_page.param_funCallBack = p_fun_callBack;

        if(cp_page.param_totalPage==0){
            console.log("cp_page初始化失败，因为p_int_totalPage为0");
            $('#'+cp_page.param_parentId).hide();
            return;
        }
        $('#'+cp_page.param_parentId).show();

        this.loadCss();
        this.loadHtml();

        $('#id_cp_page_btn_left').click({myType:"id_cp_page_btn_left"}, cp_page.btnClickHandler);
        $('#id_cp_page_btn_1').click({myType:"id_cp_page_btn_1"}, cp_page.btnClickHandler);
        $('#id_cp_page_btn_2').click({myType:"id_cp_page_btn_2"}, cp_page.btnClickHandler);
        $('#id_cp_page_btn_3').click({myType:"id_cp_page_btn_3"}, cp_page.btnClickHandler);
        $('#id_cp_page_btn_4').click({myType:"id_cp_page_btn_4"}, cp_page.btnClickHandler);
        $('#id_cp_page_btn_5').click({myType:"id_cp_page_btn_5"}, cp_page.btnClickHandler);
        $('#id_cp_page_btn_6').click({myType:"id_cp_page_btn_6"}, cp_page.btnClickHandler);
        $('#id_cp_page_btn_7').click({myType:"id_cp_page_btn_7"}, cp_page.btnClickHandler);
        $('#id_cp_page_btn_right').click({myType:"id_cp_page_btn_right"}, cp_page.btnClickHandler);

        cp_page.judgeBtnShow();
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
                case "id_cp_page_btn_1":
                    cp_page.updatePage(cp_page.getPageById(1), true);
                    break;
                case "id_cp_page_btn_2":
                    cp_page.updatePage(cp_page.getPageById(2), true);
                    break;
                case "id_cp_page_btn_3":
                    cp_page.updatePage(cp_page.getPageById(3), true);
                    break;
                case "id_cp_page_btn_4":
                    cp_page.updatePage(cp_page.getPageById(4), true);
                    break;
                case "id_cp_page_btn_5":
                    cp_page.updatePage(cp_page.getPageById(5), true);
                    break;
                case "id_cp_page_btn_6":
                    cp_page.updatePage(cp_page.getPageById(6), true);
                    break;
                case "id_cp_page_btn_7":
                    cp_page.updatePage(cp_page.getPageById(7), true);
                    break;
        }
    },

    //通过按钮id获取page值
    getPageById : function(p_int_id){
        var zStr = $('#id_cp_page_btn_'+p_int_id).text();
        zStr = (zStr=="...")?0:zStr;
        return parseInt(zStr);
    },

    //通过page获取按钮id
    getIdByPage : function(p_int_page){
        var zPage = parseInt(p_int_page);
        for(var i=1; i<=7; i++){
            var zNum = parseInt($('#id_cp_page_btn_'+i).text());
            if(zNum==zPage){
                return i;
            }
        }
        return 0;
    },

    //更新页面
    judgeBtnShow : function(){
        var zCounter = 0;
        for(var i=1; i<=7; i++){
            if(cp_page.param_totalPage>=i){
                $('#id_cp_page_btn_'+i).show();
                zCounter ++;
            }
        }
        var zRightPos = (zCounter+1) * 35;
        $('#id_cp_page_btn_right').css({"left":zRightPos+"px"});
        $('#id_cp_page_btn_right').show();
        $('#id_cp_page_btn_left').show();

        var zPos = (zCounter + 2) * -35;
        $('#id_cp_page_main').css({"left":zPos+"px"});
    },

    //更新页面
    updatePage : function(p_int_curPage, p_bool_isFun){
        if(p_int_curPage==0){
            return;
        }
        cp_page.updatePageShow(p_int_curPage);

        cp_page.resetBtn();
        var zId = cp_page.getIdByPage(p_int_curPage);
        $('#id_cp_page_btn_'+zId).addClass("cp_page_btn_selected");
        cp_page.param_curPage = p_int_curPage;

        if(p_bool_isFun==true){
            cp_page.param_funCallBack(p_int_curPage);
        }
    },

    //更新页码显示
    updatePageShow : function(p_int_curPage){
        var zList = [1,2,3,4,5,6,7];
        var zMiddlePage = cp_page.getPageById(4);
        var zNewCurPage = parseInt(p_int_curPage);
        if(cp_page.param_totalPage>7){
            var zDiff_first = zNewCurPage;
            var zDiff_last = cp_page.param_totalPage - zNewCurPage;
            if(zDiff_first<=4){
                zList = [1,2,3,4,5,"...",cp_page.param_totalPage];
            }else{
                if(zDiff_last>=4){
                    zList = [1,"...",(zNewCurPage-1),zNewCurPage,(zNewCurPage+1),"...",cp_page.param_totalPage];
                }else{
                    if((zNewCurPage+3)<=cp_page.param_totalPage){
                        zList = [1,"...",(zNewCurPage-1),zNewCurPage,(zNewCurPage+1),(zNewCurPage+2),(zNewCurPage+3)];
                    }else{
                        zList = [1,"...",(cp_page.param_totalPage-4),(cp_page.param_totalPage-3),(cp_page.param_totalPage-2),(cp_page.param_totalPage-1),cp_page.param_totalPage];
                    }
                }
            }
        }
        for(var i=0; i<zList.length; i++){
            var zId = i+1;
            $('#id_cp_page_btn_'+zId).text(zList[i]);
        }
    },

    //更新页面
    resetBtn : function(){
        for(var i=1; i<=7; i++){
            $('#id_cp_page_btn_'+i).removeClass("cp_page_btn_selected");
        }
    },

    //窗口尺寸重置
    windowResize : function(p_left){
        // $('#id_cp_page_main').css({"left":p_left+"px"});
    }
}

