
//tipsA(飘上)
cp_tipsA = {
    param_parentId : "",    //容器id
    param_frmePosId : "",   //定位元素的id
    param_info : "内容",    //内容
    param_color : "#000",   //字体颜色
    param_type : 1,         //效果类型
    htmlCode :  '\
                <div class="cp_tipsA" id="id_cp_tipsA">\
                    <div class="cp_tipsA_content" id="id_cp_tipsA_content">测试css</div>\
                </div>\
                ',
    cssCode :   '\
                .cp_tipsA{margin:0 auto; position:absolute; top:0; left:0; right:0; bottom:0; z-index:2000;}\
                .cp_tipsA_content{\
                    width: 140px;\
                    font-size : 16px;\
                    bold : true;\
                    color : #fff;\
                    height: 40px;\
                    padding-left: 5px;\
                    background-image: none;\
                    word-break:keep-all;\
                    white-space:nowrap;\
                    overflow:hidden;\
                    text-align: center;\
                    line-height: 2.42857143;\
                    opacity:1;\
                    border-radius: 4px}\
                ',

    //运行元件
    init : function(p_str_parentId, p_from_pos_id, p_str_info, p_str_color, p_int_type){
        this.param_parentId = p_str_parentId;
        this.param_frmePosId = p_from_pos_id;
        this.param_info = p_str_info;
        this.param_color = p_str_color;
        this.param_type = p_int_type;

        this.loadCss();
        this.loadHtml();
        this.startCP();
    },

    //加载html
    loadHtml : function(){
        document.getElementById(this.param_parentId).innerHTML = this.htmlCode;
        document.getElementById("id_cp_tipsA_content").innerHTML = this.param_info;
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

    //执行
    startCP : function(){
        $('#id_cp_tipsA').stop();
        
        var scrollTop=document.body.scrollTop||document.documentElement.scrollTop
        var formObject = document.getElementById(this.param_frmePosId).getBoundingClientRect();
        var id_cp_tipsA_content = document.getElementById("id_cp_tipsA_content");
        id_cp_tipsA_content.style.color = this.param_color;
        
        document.getElementById("id_cp_tipsA").style.top = (formObject.height/2 + scrollTop+formObject.top - 40)+"px";
        document.getElementById("id_cp_tipsA").style.left = (formObject.width/2 + formObject.left - 60)+"px";
        document.getElementById("id_cp_tipsA").style.opacity = 1;
       
        $('#id_cp_tipsA').show();
        $("#id_cp_tipsA").animate({
            top:'-=100px',
            opacity:'0.5',
        }, 1000, 'easeInCubic', this.funCallBack);
    },

    funCallBack : function(event){
        $('#id_cp_tipsA').hide();
    }
}

