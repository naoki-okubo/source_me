$(document).on('turbolinks:load',function(e){
  e.preventDefault();




  $(document).on('mouseenter','.fa-bars', function(e){
    e.preventDefault();
    var user = gon.user;
    var close = 
                `
                  <div class="header">
                    <i class="fas fa-user-circle"></i>
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
    $('.boards-new').remove();
    $('.fa-plus-circle').css("animation","none");
    $(newBoard).appendTo('.board-show').hide().fadeIn(300);
    $(document).on("click", ".back-btn", function (e) {
      e.preventDefault();
      $('.fa-plus-circle').css("animation","top-jump_effect 1.5s infinite ease 0s");
      $('.boards-new').remove();
    });
  });




  $(document).on("click",'.fa-user-circle', function (e) {
    e.preventDefault();
    console.log(gon.authenticity_token);
  
    var profile = 
                  `
                    <div class="users-edit">
                      <div class="new-main">
                        <a class="back-btn">
                          <div class="submit-back">
                            <i class="far fa-times-circle"></i>
                          </div>
                        </a>
                        <form class="edit_user" id="edit_user" action="/users" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="_method" value="put"><input type="hidden" name="authenticity_token" value="${gon.authenticity_token}"><div class="sourceCreate">
                        <div class="sourceCreate__title">
                          <p>Profile</p>
                        </div>
                        <div class="sourceCreate__form">
                          <div class="form-contents">
                            <div class="form">
                              <p>ニックネーム　Nick name</p>
                              <input autofocus="autofocus" class="value" type="text" value="${gon.user.nickname}" name="user[nickname]" id="user_nickname">
                            </div>
                            <div class="form">
                              <p>メールアドレス　E-mail</p>
                              <input autocomplete="email" class="value" type="email" value="${gon.user.email}" name="user[email]" id="user_email">
                            </div>
                            <div class="form">
                              <p>姓　Family-name</p>
                              <input class="value" type="text" value="${gon.user.family_name}" name="user[family_name]" id="user_family_name">
                            </div>
                            <div class="form">
                              <p>名　First-name</p>
                              <input class="value" type="text" value="${gon.user.first_name}" name="user[first_name]" id="user_first_name">
                            </div>
                            <div class="form">
                              <p>姓(カナ)　Family-name(kana)</p>
                              <input class="value" type="text" value="${gon.user.family_name_kana}" name="user[family_name_kana]" id="user_family_name_kana">
                            </div>
                            <div class="form">
                              <p>名(カナ)　First-name(kana)</p>
                              <input class="value" type="text" value="${gon.user.first_name_kana}" name="user[first_name_kana]" id="user_first_name_kana">
                            </div>
                            <div class="form">
                              <p class="any">パスワードを変更する</p>
                              <p class="any">Edit-Password</p>
                              <input autocomplete="new-password" placeholder="変更しない場合は空白（ ６文字以上 ）" class="value" type="password" name="user[password]" id="user_password">
                            </div>
                            <div class="form">
                              <p class="any">パスワードを変更する(確認)</p>
                              <p class="any">Edit-Password(Confirmation)</p>
                              <input autocomplete="new-password" placeholder="変更しない場合は空白" class="value" type="password" name="user[password_confirmation]" id="user_password_confirmation">
                            </div>
                            <div class="form form_current-password">
                              <p>現在のパスワード</p>
                              <p>Current-Password</p>
                              <input autocomplete="current-password" placeholder="６文字以上" class="value" type="password" name="user[current_password]" id="user_current_password">
                            </div>
                          </div>
                          <div class="submit">
                            <input type="submit" name="commit" value="更新" class="submit__btn">
                          </div>
                          </div>
                        </div>
                      </form>
                      <div class="submit delete-account">
                      <p>
                        アカウント情報の削除
                      </p>
                      <form class="button_to" method="post" action="/users">
                        <input type="hidden" name="_method" value="delete">
                        <input data-confirm="本当に退会しますか？退会手続きを行うと今まで保存した内容の全てが失われます。" class="cancel-btn" type="submit" value="退会する">
                        <input type="hidden" name="authenticity_token" value="${gon.authenticity_token}">
                      </form>
                    </div>
                  </div>
                `
    $('.users-edit').remove();
    $(profile).appendTo('.board-show').hide().fadeIn(300);
    $('.fa-plus-circle').css("animation","none");
    $(document).on("click", ".back-btn", function (e) {
      e.preventDefault();
      $('.fa-plus-circle').css("animation","top-jump_effect 1.5s infinite ease 0s");
      $('.users-edit').remove();
    });
  });


  $(document).on("mouseenter",'.fa-plus-circle', function (e) {
    $('.fa-plus-circle').css("animation-play-state","paused");
  });
  $(document).on("mouseleave",'.fa-plus-circle', function (e) {
    $('.fa-plus-circle').css("animation-play-state","running");
  });



  // ボードのスクロールバー　自動スクロール
  // $(document).on("mouseenter",'.boardList', function (e) {
  //   $('.board').css("animation-play-state","paused");
  // });
  // $(document).on("mouseleave",'.boardList', function (e) {
  //   $('.board').css("animation-play-state","running");
  // });
});