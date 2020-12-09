$(function(){
 
  //おみくじの配置
  randNum = Math.floor(Math.random() * 5);
  $('#bou').html('<img src="./omikuji_files/img/bou'+ randNum +'.png">');
  var $ogp = $('#icon').html('<img src="./omikuji_files/img/icon'+ randNum +'.png">');
  // metaのイメージを上書き
  // var imgUrl = 'https://k49977.github.io/omikuji/omikuji_files/img/icon'+ randNum +'.png';
  // $("#meta-img").attr('content',imgUrl);
 
  //スタートボタンをクリック
  $("#startBtn").click(function(){
    //スタートボタンを非表示に
    $(this).stop().animate({ opacity: 0}, 500,
    function(){
      //#omokujiを回転させながら移動
      $('#omikuji').rotate({animateTo:-120});
      $("#omikuji").stop().animate({ top: "200px",  left: "-100px"}, 1000, 'easeOutCubic',
      function(){
        //おみくじの結果が書かれた棒が出現
        $("#bou img").stop().delay(300).animate({ marginTop: "0",  marginLeft: "0"}, 800, 'easeOutBounce',
        function(){
          //アイコンが出現
          $("#icon").delay(500).animate({
              opacity: 1,
              "marginTop" : "-225px",
              "marginLeft" : "-150px",
              "width" : "450px"
          }, 1000, "easeOutBounce");
        });
      });
    });
  });
});

function linkclick(){

    var array = new Array('大吉', '吉', '小吉', '凶', '大凶');

    window.open('http://twitter.com/share?url=https://k49977.github.io/omikuji/index.html&text=今日のアニメおみくじの結果は'+ array[randNum] + 'でした。' + '&hashtags=はっちゃまんのアニメサイト', '_blank');
}