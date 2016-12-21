$(function() {
  
  // 画面初期化時には雪を降らせる
  $(document).snowfall();
  
  var properties = [
    {
      scale : '#small',
      settings : {
        minSize  : 1,    // 雪の最小サイズ
        maxSize  : 5,    // 雪の最大サイズ
        minSpeed : 1,    // 雪の最低速度
        maxSpeed : 3,    // 雪の最高速度
        round    : true, // 雪の形を丸くする
        shadow   : true, // 雪に影をつける
        flakeColor : "#fff", // 雪の色を指定
      }
    },
    {
      scale : '#medium',
      settings : {
        minSize  : 3,    // 雪の最小サイズ
        maxSize  : 6,    // 雪の最大サイズ
        minSpeed : 3,    // 雪の最低速度
        maxSpeed : 6,    // 雪の最高速度
        round    : true, // 雪の形を丸くする
        shadow   : true, // 雪に影をつける
        flakeColor : "#fff", // 雪の色を指定
      }
    },
    {
      scale : '#large',
      settings : {
        minSize  : 5,    // 雪の最小サイズ
        maxSize  : 10,    // 雪の最大サイズ
        minSpeed : 6,    // 雪の最低速度
        maxSpeed : 10,    // 雪の最高速度
        round    : true, // 雪の形を丸くする
        shadow   : true, // 雪に影をつける
        flakeColor : "#fff", // 雪の色を指定
      }
    }
  ];
  
  
  properties.forEach(function(propetie){
    $(propetie.scale).on('click', function(){
      $(document).snowfall('clear');
      $(document).snowfall(propetie.settings);
    });
  });
  
});