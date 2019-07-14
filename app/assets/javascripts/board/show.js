$(document).on('turbolinks:load',function(e){
  e.preventDefault();




  $(document).on('mouseenter','.fa-bars', function(e){
    e.preventDefault();
    var user = gon.user;
    var close = 
                `
                  <div class="header">
                    <a href="/users/${user.id}">
                      <i class="fas fa-user-circle"></i>
                    </a>
                    <a rel="nofollow" data-method="delete" href="/users/sign_out">
                      <i class="fas fa-sign-out-alt"></i>
                    </a>
                    <i class="fas fa-align-right"></i>
                  </div>
                `
    $('.header').html('');
    $(close).appendTo('.header').hide().fadeIn(500);


    $(document).on('mouseleave','.header', function(e){
      e.preventDefault();
      $('.header').html('');
      var bar = 
                `
                  <div class="header">
                    <i class="fas fa-bars"></i>
                  </div>
                `
      $(bar).appendTo('.header').hide().fadeIn(500);
    });
  });






  $(document).on("click",'#fa-plus-circle', function (e) {
    e.preventDefault();
  
    var newBoard = 
                  `
                    <div class="boards-new">
                      <div class="main">
                        <a class="back-btn">
                          <div class="submit-back">
                            <i class="far fa-times-circle"></i>
                          </div>
                        </a>
                        <form action="/boards" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="8AyJpMXpNNtj5DgJ+XbAPPSwSmsygym/H5SZA9mA+XTrPuwjoEeeZgxdK1k6KwwTxGBqRJSc+ty1Q7TQ7+nhsw=="><div class="boardCreate">
                        <div class="boardCreate__title">
                          <p>Create　New Board</p>
                        </div>
                        <div class="boardCreate__form">
                          <div class="title">
                            <input class="title__form" placeholder="タイトルを入力 ( 最大20文字 )" autofocus="autofocus" type="text" name="board[name]" id="board_name">
                          </div>
                          <div class="submit">
                            <input type="submit" name="commit" value="作成する" class="submit__btn">
                          </div>
                          <div class="sourceCreate__title">
                          </div>
                        </div>
                      </div>
                    </form></div>
                  `
    $(newBoard).appendTo('.board-show').hide().fadeIn(300);

    $(document).on("click", ".back-btn", function (e) {
      e.preventDefault();
      $('.boards-new').remove();
    });
  });




  $(document).on("mouseenter",'.fa-plus-circle', function (e) {
    $('.fa-plus-circle').css("animation-name","none");
  });
  $(document).on("mouseleave",'.fa-plus-circle', function (e) {
    $('.fa-plus-circle').css("animation-name","top-jump_effect");
  });




  $(document).on("mouseenter",'.boardList', function (e) {
    $('.board').css("animation","none");
  });
  $(document).on("mouseleave",'.boardList', function (e) {
    $('.board').css("animation","infinity-loop 20s infinite linear 0s both");
  });
});