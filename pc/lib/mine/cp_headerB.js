
//pc端的顶部按钮
cp_headerB = {
    param_parentId : "",    //容器id
    param_selectedId : 1,   //选中哪个栏目
    htmlCode :  '\
                <div id="id_cp_headerB_main" class="cp_headerB_main">\
                    <img class="cp_headerB_logo" src="../img/logo.png">\
                    <div style="position:absolute; left:240px; top:30px;">\
                        <div id="id_cp_headerB_btn_1" class="cp_headerB_btn cp_headerB_btn_1">Home</div>\
                        <div id="id_cp_headerB_btn_2" class="cp_headerB_btn cp_headerB_btn_2">Statistics</div>\
                        <div id="id_cp_headerB_btn_3" class="cp_headerB_btn cp_headerB_btn_3">MN & GMN</div>\
                        <div id="id_cp_headerB_btn_4" class="cp_headerB_btn cp_headerB_btn_4">Downloads</div>\
                        <div id="id_cp_headerB_btn_5" class="cp_headerB_btn cp_headerB_btn_5">About</div>\
                        <div id="id_cp_headerB_btn_6" class="cp_headerB_btn cp_headerB_btn_6">CrossChain</div>\
                        <div id="id_cp_headerB_line_1" class="cp_headerB_line cp_headerB_line_1"></div>\
                        <div id="id_cp_headerB_line_2" class="cp_headerB_line cp_headerB_line_2"></div>\
                        <div id="id_cp_headerB_line_3" class="cp_headerB_line cp_headerB_line_3"></div>\
                        <div id="id_cp_headerB_line_4" class="cp_headerB_line cp_headerB_line_4"></div>\
                        <div id="id_cp_headerB_line_5" class="cp_headerB_line cp_headerB_line_5"></div>\
                        <div id="id_cp_headerB_line_6" class="cp_headerB_line cp_headerB_line_6"></div>\
                    </div>\
                    <div class="cp_headerB_search">\
                        <div class="cp_headerB_search_bg"></div>\
                        <input id="id_cp_headerB_search_input" class="cp_headerB_search_input" type="text" placeHolder="Search by Block / Transaction / Address"/>\
                        <div id="id_cp_headerB_search_btn" class="cp_headerB_search_btn"><img src="../img/btn_search.png"></div>\
                    </div>\
                </div>\
                ',
    cssCode :   '\
                .cp_headerB_main{position:absolute; top:0px; width:1200px; height:80px;}\
                .cp_headerB_logo{position:absolute; top:23px;}\
                .cp_headerB_btn{position:absolute; width:100px; text-align:center; color:#9a9ca8; font-size:15px; font-weight:400; -webkit-user-select:none; -moz-user-select:none; -ms-user-select:none; user-select:none; cursor:pointer; transition: color .6s;}\
                .cp_headerB_btn_1{left:0px;}\
                .cp_headerB_btn_2{left:100px;}\
                .cp_headerB_btn_3{left:200px;}\
                .cp_headerB_btn_4{left:300px;}\
                .cp_headerB_btn_5{left:400px;}\
                .cp_headerB_btn_6{left:500px;}\
                .cp_headerB_btn:hover{color:#9aebff;}\
                .cp_headerB_btn::active{color:#fff;}\
                .cp_headerB_select{color:#fff !important; font-size:16px; font-weight:600;}\
                .cp_headerB_line{position:absolute; background-color:#00fdd9; height:3px; top:25px; width:100px;}\
                .cp_headerB_line_1{left:0px;}\
                .cp_headerB_line_2{left:100px;}\
                .cp_headerB_line_3{left:200px;}\
                .cp_headerB_line_4{left:300px;}\
                .cp_headerB_line_5{left:400px;}\
                .cp_headerB_line_6{left:500px;}\
                .cp_headerB_search{position:absolute; left:855px; top:20px;}\
                .cp_headerB_search_bg{position:absolute; width:345px; height:40px; background-color:#373c4f; border-radius:20px;}\
                .cp_headerB_search_input{position:absolute; left:10px; top:2px; width:285px; height:30px; background:transparent; border-color:transparent; color:#fff; font-size:16px;}\
                .cp_headerB_search_btn{position:absolute; left:305px; top:8px; width:22px; height:23px; cursor:pointer;}\
                .cp_headerB_search_btn:hover img{filter:brightness(1.5); transition:filter .6s;}\
                .cp_headerB_search_btn:active img{filter:brightness(3);}\
                .cp_headerB_search_btn img{width:22px; height:23px;}\
                ',

    //初始化
    init : function(p_str_parentId, p_int_selectId){
        this.param_parentId = p_str_parentId;
        this.param_selectedId = p_int_selectId;

        this.loadCss();
        this.loadHtml();

        $('#id_cp_headerB_btn_1').click({myType:"id_cp_headerB_btn_1"}, cp_headerB.btnClickHandler);
        $('#id_cp_headerB_btn_2').click({myType:"id_cp_headerB_btn_2"}, cp_headerB.btnClickHandler);
        $('#id_cp_headerB_btn_3').click({myType:"id_cp_headerB_btn_3"}, cp_headerB.btnClickHandler);
        $('#id_cp_headerB_btn_4').click({myType:"id_cp_headerB_btn_4"}, cp_headerB.btnClickHandler);
        $('#id_cp_headerB_btn_5').click({myType:"id_cp_headerB_btn_5"}, cp_headerB.btnClickHandler);
        $('#id_cp_headerB_btn_6').click({myType:"id_cp_headerB_btn_6"}, cp_headerB.btnClickHandler);
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
                case "id_cp_headerB_btn_1":
                    cp_headerB.selected(1, true);
                    break;
                case "id_cp_headerB_btn_2":
                    cp_headerB.selected(2, true);
                    break;
                case "id_cp_headerB_btn_3":
                    cp_headerB.selected(3, true);
                    break;
                case "id_cp_headerB_btn_4":
                    cp_headerB.selected(4, true);
                    break;
                case "id_cp_headerB_btn_5":
                    cp_headerB.selected(5, true);
                    break;
                case "id_cp_headerB_btn_6":
                    cp_headerB.selected(6, true);
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
    selected : function(p_int_id, p_bool_isUpdatePage){
        cp_headerB.resetBtn();
        switch(p_int_id){
            case 1:
                $('#id_cp_headerB_btn_1').addClass("cp_headerB_select");
                $('#id_cp_headerB_line_1').show();
                if(p_bool_isUpdatePage==true) common.gotoWebSite('main.html');
                break;
            case 2:
                $('#id_cp_headerB_btn_2').addClass("cp_headerB_select");
                $('#id_cp_headerB_line_2').show();
                if(p_bool_isUpdatePage==true) common.gotoWebSite('statistic.html');
                break;
            case 3:
                $('#id_cp_headerB_btn_3').addClass("cp_headerB_select");
                $('#id_cp_headerB_line_3').show();
                if(p_bool_isUpdatePage==true) common.gotoWebSite('mn.html');
                break;
            case 4:
                $('#id_cp_headerB_btn_4').addClass("cp_headerB_select");
                $('#id_cp_headerB_line_4').show();
                if(p_bool_isUpdatePage==true) common.gotoWebSite('downloads.html');
                break;
            case 5:
                $('#id_cp_headerB_btn_5').addClass("cp_headerB_select");
                $('#id_cp_headerB_line_5').show();
                if(p_bool_isUpdatePage==true) common.gotoWebSite('about.html');
                break;
            case 6:
                $('#id_cp_headerB_btn_6').addClass("cp_headerB_select");
                $('#id_cp_headerB_line_6').show();
                if(p_bool_isUpdatePage==true) window.open("http://waltonchain.pro:8881", "_blank");
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
                common.gotoWebSite('searchBlock.html'+"?"+p_str_info);
                break;
            case 2:
                common.setCookie("searchMiner", p_str_info);
                common.gotoWebSite('searchMiner.html'+"?"+p_str_info);
                break;
            case 3:
                common.setCookie("searchTran", p_str_info);
                common.gotoWebSite('searchTran.html'+"?"+p_str_info);
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

