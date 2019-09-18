var $article = $('.article-content');
var p = $article.parent();
while(p.length>0){
    p.siblings().remove();
    p = p.parent();
};

$('.author-info-block').remove();