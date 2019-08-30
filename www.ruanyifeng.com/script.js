
//为了方便复制到notion中，对代码进行处理
//将<section><pre><code>内容这种变成<pre>内容,同时将对代码中换行符进行处理
var pres = $('pre');
var preL = pres.length;
var i = preL;
for (i = 0; i < preL; i++) {
    var codes = $(pres[i]).children('code');
    var codeL = codes.length;
    $(pres[i]).removeClass();
    if (codeL > 0) {
        var text = '';
        var j = 0;
        for (j = 0; j < codeL; j++) {
            if($(codes[j]).html().indexOf('<br')>=0){
                var replacedHtml = $(codes[j]).html().replace(/<br.*?>/g, '\n');
                $(codes[j]).html(replacedHtml);
            }
            text += codes[j].textContent + '\n';
        }
        text = text.replace(/</g, '&lt;').replace(/>/g, '&gt;')

        $(pres[i]).html(text);
    } else {
        var codes = $(pres[i]).html().replace(/<br.*?>/g, '\n');
        $(pres[i]).html(codes)
    }


    var $blockquote = $('blockquote');
    for(var k = 0;k<$blockquote.length;k++){
        var blockHtml = $($blockquote[k]).html();
        console.info(blockHtml);
        // $($blockquote[k]).replaceWith(blockHtml);
    }


    // if($($('pre')[i]).parent()[0]){
    //     var hasNotText = $($('pre')[i]).prev().text() === "" || $($('pre')[i]).prev().text() === null;
    //     if ('SECTION' === $($('pre')[i]).parent()[0].tagName && hasNotText) {
    //         $(pres[i]).parent().removeClass();
    //         $(pres[i]).parent().children('ul').remove();
    //         $(pres[i]).parent().replaceWith($(pres[i]));
    //     }
    // }
}