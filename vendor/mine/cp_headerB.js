
//pc端的顶部按钮
cp_headerB = {
    param_parentId : "",    //容器id
    param_selectedId : 1,   //选中哪个栏目
    htmlCode :  '\
                <div id="id_cp_headerB_main" class="cp_headerB_main">\
                    <div class="cp_headerB_bg_132"></div>\
                    <div class="cp_headerB_700_0" style="top:132px;"></div>\
                    <div class="cp_headerB_head">\
                        <img class="cp_headerB_logo" src="../img/logo.jpg">\
                        <div id="id_cp_headerB_btn_show" class="cp_headerB_logo_btn"><img src="../img/btn_nav.png"></div>\
                        <div id="id_cp_headerB_btn_close" class="cp_headerB_logo_btn" style="display:none;"><img src="../img/btn_nav_close.png"></div>\
                    </div>\
                    <div id="id_cp_headerB_search" class="cp_headerB_search">\
                        <div class="cp_headerB_bg_132"></div>\
                        <div class="cp_headerB_search_bg">\
                            <input id="id_cp_headerB_search_input" class="cp_headerB_search_input" type="text" placeHolder="Search by Block / Tansaction / Address"/>\
                            <div id="id_cp_headerB_search_btn" class="cp_headerB_search_btn"><img src="../img/btn_search.png"></div>\
                        </div>\
                    </div>\
                    <div id="id_cp_headerB_nav" class="cp_headerB_nav">\
                        <div class="cp_headerB_bg_480"></div>\
                        <div id="id_cp_headerB_btn_1" class="cp_headerB_btn cp_headerB_btn_1" style="top:0px;">&nbsp;&nbsp;&nbsp;&nbsp;Home</div>\
                        <div class="cp_headerB_700_0" style="top:80px;"></div>\
                        <div id="id_cp_headerB_btn_2" class="cp_headerB_btn cp_headerB_btn_2" style="top:80px;">&nbsp;&nbsp;&nbsp;&nbsp;Statistic</div>\
                        <div class="cp_headerB_700_0" style="top:160px;"></div>\
                        <div id="id_cp_headerB_btn_3" class="cp_headerB_btn cp_headerB_btn_3" style="top:160px;">&nbsp;&nbsp;&nbsp;&nbsp;MN&GMN</div>\
                        <div class="cp_headerB_700_0" style="top:240px;"></div>\
                        <div id="id_cp_headerB_btn_4" class="cp_headerB_btn cp_headerB_btn_4" style="top:240px;">&nbsp;&nbsp;&nbsp;&nbsp;Downloads</div>\
                        <div class="cp_headerB_700_0" style="top:320px;"></div>\
                        <div id="id_cp_headerB_btn_5" class="cp_headerB_btn cp_headerB_btn_5" style="top:320px;">&nbsp;&nbsp;&nbsp;&nbsp;About</div>\
                        <div class="cp_headerB_700_0" style="top:400px;"></div>\
                    </div>\
                </div>\
                ',
    cssCode :   '\
                .cp_headerB_main{position:fixed; z-index:1000; top:0px; width:700px; height:185px;}\
                .cp_headerB_bg_132{position:absolute; width:3000px; height:132px; left:-1000px; background-color:#1b1f2f;}\
                .cp_headerB_bg_480{position:absolute; width:3000px; height:480px; left:-1000px; background-color:#1b1f2f;}\
                .cp_headerB_head{position:absolute; top:21px; width:700px;}\
                .cp_headerB_logo{position:absolute;}\
                .cp_headerB_logo_btn{position:absolute; right:0px; top:25px; cursor:pointer;}\
                .cp_headerB_search{position:absolute; width:700px; top:132px; background-color:#1b1f2f; display:none;}\
                .cp_headerB_search_bg{position:absolute; width:700px; height:80px; top:26px; background-color:#373c4f; border-radius:40px;}\
                .cp_headerB_search_input{position:absolute; left:40px; top:0px; width:580px; height:80px; line-height:80px; background:transparent; border-color:transparent; color:#fff; font-size:26px;}\
                .cp_headerB_search_btn{position:absolute; left:640px; top:22px; width:36px; height:36px; cursor:pointer;}\
                .cp_headerB_search_btn:hover img{filter:brightness(1.5); transition:filter .6s;}\
                .cp_headerB_search_btn:active img{filter:brightness(3);}\
                .cp_headerB_search_btn img{width:36px; height:36px;}\
                .cp_headerB_nav{position:absolute; top:132px; width:700px; height:480px; background-color:#1b1f2f; display:none;}\
                .cp_headerB_btn{position:absolute; line-height:80px; height:80px; width:700px; background-color:#1b1f2f; color:#c8c8c8; font-size:26px; -webkit-user-select:none; -moz-user-select:none; -ms-user-select:none; user-select:none; cursor:pointer; transition:filter .6s;}\
                .cp_headerB_btn:hover{filter:brightness(1.2);}\
                .cp_headerB_btn:active{filter:#00eac8;}\
                .cp_headerB_select{color:#00eac8 !important;}\
                .cp_headerB_700_0{position:absolute; width:700px; height:2px; background-color:#2a3044; z-index:1000;}\
                ',

    //初始化
    init : function(p_str_parentId, p_int_selectId){
        this.param_parentId = p_str_parentId;
        this.param_selectedId = p_int_selectId;

        this.loadCss();
        this.loadHtml();

        $('#id_cp_headerB_btn_show').click({myType:"id_cp_headerB_btn_show"}, cp_headerB.btnClickHandler);
        $('#id_cp_headerB_btn_close').click({myType:"id_cp_headerB_btn_close"}, cp_headerB.btnClickHandler);


        $('#id_cp_headerB_btn_1').click({myType:"id_cp_headerB_btn_1"}, cp_headerB.btnClickHandler);
        $('#id_cp_headerB_btn_2').click({myType:"id_cp_headerB_btn_2"}, cp_headerB.btnClickHandler);
        $('#id_cp_headerB_btn_3').click({myType:"id_cp_headerB_btn_3"}, cp_headerB.btnClickHandler);
        $('#id_cp_headerB_btn_4').click({myType:"id_cp_headerB_btn_4"}, cp_headerB.btnClickHandler);
        $('#id_cp_headerB_btn_5').click({myType:"id_cp_headerB_btn_5"}, cp_headerB.btnClickHandler);
        $('#id_cp_headerB_search_btn').click({myType:"id_cp_headerB_search_btn"}, cp_headerB.btnClickHandler);

        $("#id_cp_headerB_search_input").keyup(function(){
            if(event.keyCode == 13){
                var zSearchValue = $('#id_cp_headerB_search_input').val();
                if(zSearchValue){
                    var zType = 1;
                    if(zSearchValue.length<10){
                        zType = 1;//block
                    }else if(zSearchValue.length>10 && zSearchValue.length<50){
                        zType = 2;//miner
                    }else{
                        zType = 3;//transaction
                    }
                    cp_headerB.goToSearch(zType, zSearchValue);
                }
            }
        });

        cp_headerB.selected(this.param_selectedId, false);
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
    windowResize : function(p_left){
        $('#id_cp_headerB_main').css({"left":p_left+"px"});
    },

    //按钮点击事件
    btnClickHandler : function(p_obj_event){
        switch(p_obj_event.data.myType){
                case "id_cp_headerB_btn_show":
                    $('#id_cp_headerB_btn_show').fadeOut();
                    $('#id_cp_headerB_btn_close').fadeIn();
                    $('#id_cp_headerB_nav').fadeIn();
                    break;
                case "id_cp_headerB_btn_close":
                    $('#id_cp_headerB_btn_show').fadeIn();
                    $('#id_cp_headerB_btn_close').fadeOut();
                    $('#id_cp_headerB_nav').fadeOut();
                    break;
                case "id_cp_headerB_btn_1":
                    cp_headerB.selected(1);
                    break;
                case "id_cp_headerB_btn_2":
                    cp_headerB.selected(2);
                    break;
                case "id_cp_headerB_btn_3":
                    cp_headerB.selected(3);
                    break;
                case "id_cp_headerB_btn_4":
                    cp_headerB.selected(4);
                    break;
                case "id_cp_headerB_btn_5":
                    cp_headerB.selected(5);
                    break;
                case "id_cp_headerB_search_btn":
                    var zSearchValue = $('#id_cp_headerB_search_input').val();
                    if(zSearchValue){
                        //399454
                        //0x25cfd39329f4dd876a4c09b2a10b69ccd5711622
                        //0x2c7b6df4d42fa02898b07b94d8f615135b9029254970765253fc509c2b361c85
                        var zType = 1;
                        if(zSearchValue.length<10){
                            zType = 1;//block
                        }else if(zSearchValue.length>10 && zSearchValue.length<50){
                            zType = 2;//miner
                        }else{
                            zType = 3;//transaction
                        }
                        cp_headerB.goToSearch(zType, zSearchValue);
                    }
                    break;
        }
    },

    //选择
    selected : function(p_int_id, p_bool_isUpdatePage=true){
        cp_headerB.resetBtn();
        switch(p_int_id){
            case 1:
                $('#id_cp_headerB_btn_1').addClass("cp_headerB_select");
                $('#id_cp_headerB_search').show();
                if(p_bool_isUpdatePage==true) common.gotoWebSite('main.html');
                break;
            case 2:
                $('#id_cp_headerB_btn_2').addClass("cp_headerB_select");
                if(p_bool_isUpdatePage==true) common.gotoWebSite('statistic.html');
                break;
            case 3:
                $('#id_cp_headerB_btn_3').addClass("cp_headerB_select");
                if(p_bool_isUpdatePage==true) common.gotoWebSite('mn.html');
                break;
            case 4:
                $('#id_cp_headerB_btn_4').addClass("cp_headerB_select");
                if(p_bool_isUpdatePage==true) common.gotoWebSite('downloads.html');
                break;
            case 5:
                $('#id_cp_headerB_btn_5').addClass("cp_headerB_select");
                if(p_bool_isUpdatePage==true) common.gotoWebSite('about.html');
                break;
        }
    },

    //搜索
    //@p_int_type   1.Block 2.Miner 3.Transation
    //@p_str_info   内容
    goToSearch : function(p_int_type, p_str_info){
        console.log("goToSearch============", p_int_type, p_str_info);
        switch(p_int_type){
            case 1:
                common.setCookie("searchBlock", p_str_info);
                common.gotoWebSite('searchBlock.html');
                break;
            case 2:
                common.setCookie("searchMiner", p_str_info);
                common.gotoWebSite('searchMiner.html');
                break;
            case 3:
                common.setCookie("searchTran", p_str_info);
                common.gotoWebSite('searchTran.html');
                break;
        }
    },

    //重置按钮
    resetBtn : function(){
        var zMyList=document.getElementsByClassName("cp_headerB_btn");
        for(var i=0; i<zMyList.length; i++){
            var zId = i+1;
            var zMyId = zMyList[i].id;
            $('#id_cp_headerB_btn_'+zId).removeClass("cp_headerB_select");
            $('#id_cp_headerB_line_'+zId).hide();
        }
    }
}

