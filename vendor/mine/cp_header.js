
//手机端的头部按钮
cp_header = {
    param_parentId : "",    //容器id
    param_txt : "",         //文字内容
    param_logoUrl : "",     //图标地址
    param_logoW : 50,       //图标宽
    param_logoH : 50,       //图标高
    param_logoPos : 80,     //图标的初始位置
    htmlCode :  '\
                <div class="cp_header_header">\
                    <div class="cp_header_bg" id="id_cp_header_bg"></div>\
                    <div class="cp_header_btn" id="id_cp_header_btn">＜</div>\
                    <img class="cp_header_logo" id="id_cp_header_logo" src="">\
                    <div class="cp_header_txt" id="id_cp_header_txt">标题</div>\
                </div>\
                ',
    cssCode :   '\
                .cp_header_header{width:100%; top:0px; left:0px; position:absolute; z-index:2000;}\
                .cp_header_bg{position:absolute; width:100%; height:50px; opacity:.2; background-color:#000;}\
                .cp_header_btn{position:absolute; left:10px; top:-5px; color:#000; font-size:40px; text-shadow:#fff 1px 0 0,#fff 0 1px 0,#fff -1px 0 0,#fff 0 -1px 0; -webkit-text-shadow:#fff 1px 0 0,#fff 0 1px 0,#fff -1px 0 0,#fff 0 -1px 0; -moz-text-shadow:#fff 1px 0 0,#fff 0 1px 0,#fff -1px 0 0,#fff 0 -1px 0; *filter: Glow(color=#fff, strength=1);}\
                .cp_header_logo{position:absolute; left:100px; top:1px; width:50px; height:50px;}\
                .cp_header_txt{position:absolute; left:10px; top:-5px; color:#005d98; font-size:28px; width:200px; line-height:2.20; text-align:left; text-shadow:#fff 1px 0 0,#fff 0 1px 0,#fff -1px 0 0,#fff 0 -1px 0; -webkit-text-shadow:#fff 1px 0 0,#fff 0 1px 0,#fff -1px 0 0,#fff 0 -1px 0; -moz-text-shadow:#fff 1px 0 0,#fff 0 1px 0,#fff -1px 0 0,#fff 0 -1px 0; *filter: Glow(color=#fff, strength=1);}\
                ',

    //初始化
    init : function(p_str_parentId, p_str_txt, p_str_logoUrl, p_int_logoW, p_int_logoH, p_int_logoPos=80){
        this.param_parentId = p_str_parentId;
        this.param_txt = p_str_txt;
        this.param_logoUrl = p_str_logoUrl;
        this.param_logoW = p_int_logoW;
        this.param_logoH = p_int_logoH;
        this.param_logoPos = p_int_logoPos;

        this.loadCss();
        this.loadHtml();

        document.getElementById('id_cp_header_btn').addEventListener('mousedown',function(){cp_header.onHeaderDown()}); 
        
        window.onresize = windowResize;
        this.windowResize();
    },

    //加载html
    loadHtml : function(){
        document.getElementById(this.param_parentId).innerHTML = this.htmlCode;
        document.getElementById("id_cp_header_logo").setAttribute("src", this.param_logoUrl);
        document.getElementById("id_cp_header_txt").innerHTML = this.param_txt;

        $('#id_cp_header_logo').css({"width":this.param_logoW+"px"});
        $('#id_cp_header_logo').css({"height":this.param_logoH+"px"});
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
        var zLogoLeft = this.param_logoPos;
        var zTxtLeft = zLogoLeft+ this.param_logoW + 5;
        $('#id_cp_header_logo').css({"left":zLogoLeft+"px"});
        $('#id_cp_header_txt').css({"left":zTxtLeft+"px"});
    },

    //按钮按下
    onHeaderDown : function(){
        javascript:history.back(-1);
    },

    //重置按钮
    resetBtn : function(){
        var zMyList=document.getElementsByClassName("footer_btn");
        for(var i=0; i<zMyList.length; i++){
            var zMyId = zMyList[i].firstChild.id;
            $('#'+zMyId).removeClass("btn_gradient_blue");
        }
    }
}

