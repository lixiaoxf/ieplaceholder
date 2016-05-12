/*
 * jQuery placeholder, fix for IE6,7,8,9
 * 使IE浏览器支持input输入框的placeholder属性
 *
 * 先执行 $.ieplaceholder.init()；
 *
 * 如果有异步操作修改placeholder
 *
 * $.ieplaceholder.reFix()；
 *
 */
(function(jQuery,window){
    var iePlaceHolder = {
        //检测
        _check : function(){
            return 'placeholder' in document.createElement('input');
        },
        //初始化
        init : function(){
            if(!this._check()){
                this.fix();
            }
        },
        //浏览器判断是否是ie
        isIEBrowser : function(){
            var browser=navigator.appName
            var b_version=navigator.appVersion
            var version=b_version.split(";");
            var trim_Version=version[1].replace(/[ ]/g,"");
            var isIE = false;
            if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE6.0")
            {
                isIE = true;
                return isIE;
            }
            else if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE7.0")
            {
                isIE = true;
                return isIE;
            }
            else if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE8.0")
            {
                isIE = true;
                return isIE;
            }
            else if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE9.0")
            {
                isIE = true;
                return isIE;
            }
            return isIE;
        },
        //修复
        fix : function(){
            var _JPHolder = this;
            jQuery(':input[placeholder]').each(function(index, element) {
                var self = $(this), txt = self.attr('placeholder'),width=self.width(),outwidth=self.outerWidth();
                if(iePlaceHolder.isIEBrowser()){
                    self.wrap($('<div></div>').css({position:'relative', zoom:'1', border:'none', background:'none', padding:'none', margin:'none', 'display':'inline','vertical-align':'middle',"width":outwidth}));
                }else{
                    self.wrap($('<div ></div>').css({position:'relative', zoom:'1', border:'none', background:'none', padding:'none', margin:'none', 'max-width':'280px'}));
                }
                var pos = self.position(), h = self.outerHeight(true), paddingleft = self.css('padding-left');
                var holder = $('<span></span>').text(txt).css({position:'absolute', left:0, top:0, height:h, lineHeight:h+"px", paddingLeft:paddingleft, color:'#aaa',"width":outwidth,'text-align':'left'}).appendTo(self.parent());
                self.focusin(function(e) {
                    holder.hide();
                }).focusout(function(e) {
                    if(!self.val()){
                        holder.show();
                    }
                });
                holder.click(function(e) {
                    holder.hide();
                    self.focus();
                });
            });
        },
        reFix : function(){
            if(!this._check()){
                this.__reFix();
            }
        },
        __reFix : function(){
            var _JPHolder = this;
            jQuery(':input[placeholder]').each(function(index, element) {
                var self = $(this), txt = self.attr('placeholder');
                var $parent = self.parent();
                $parent.find("span").text(txt);
            });
        }
    };

    jQuery.ieplaceholder = iePlaceHolder

})(jQuery,window)
