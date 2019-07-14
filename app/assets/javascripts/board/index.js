$(document).on('turbolinks:load',function(e){
  e.preventDefault();






  var jumpAction_signUp = function(){
    $('.sign-up').css("animation-name","top-jump_effect");
    $('.sign-up').css("animation-duration","0.9s");
    $('.sign-up').css("animation-timing-function","(0, 0.5, 0.8, 1)");
    $('.sign-up').on('animationend', function() {
      $('.sign-up').css("animation-name","none");
    });
  };

  
  var jumpAction_signUp_Interval = setInterval(jumpAction_signUp, 1000);
  
  $('.sign-up').hover(
    function() {
      clearInterval(jumpAction_signUp_Interval);
    },
    function() {
      jumpAction_signUp_Interval = setInterval(jumpAction_signUp, 1000);
    }
  );




  var jumpAction_logIn = function(){
    $('.log-in').css("animation-name","top-jump_effect");
    $('.log-in').css("animation-duration","0.9s");
    $('.log-in').css("animation-timing-function","(0, 0.5, 0.8, 1)");
    $('.log-in').on('animationend', function() {
      $('.log-in').css("animation-name","none");
    });
  };
  

  var jumpAction_logIn_Interval = setInterval(jumpAction_logIn, 1000);
  
  $('.log-in').hover(
    function() {
      clearInterval(jumpAction_logIn_Interval);
    },
    function() {
      jumpAction_logIn_Interval = setInterval(jumpAction_logIn, 1000);
    }
  );






  $(document).on("click",'#sign-up', function (e) {
    e.preventDefault();
              var signup =
                          `
                            <div class="registration-new">
                              <div class="new-main">
                                <a class="back-btn">
                                  <div class="submit-back">
                                    <i class="far fa-times-circle"></i>
                                  </div>
                                </a>
                                <form class="new_user" id="new_user" action="/users" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="R3tf7f6oA+gEQJsLaMuhzXIGV1pug4nH0RMuKr3bOX0PiDk4tWL+dkV/txFHgJUpuds3iuJVPLuXnZxAGeMXwA=="><div class="sourceCreate">
                                <div class="sourceCreate__title">
                                  <p>Sign up　Form</p>
                                </div>
                                <div class="sourceCreate__form">
                                  <div class="form-contents">
                                    <div class="form">
                                      <p>ニックネーム　Nick name</p>
                                      <input autofocus="autofocus" class="value" placeholder="例) SourceMe 太郎" type="text" name="user[nickname]" id="user_nickname">
                                    </div>
                                    <div class="form">
                                      <p>メールアドレス　E-mail</p>
                                      <input autocomplete="email" class="value" placeholder="PC・携帯どちらでも可" type="email" name="user[email]" id="user_email">
                                    </div>
                                    <div class="form">
                                      <p>姓　Family-name</p>
                                      <input class="value" placeholder="例) 山田" type="text" name="user[family_name]" id="user_family_name">
                                    </div>
                                    <div class="form">
                                      <p>名　First-name</p>
                                      <input class="value" placeholder="例) 彩" type="text" name="user[first_name]" id="user_first_name">
                                    </div>
                                    <div class="form">
                                      <p>姓(カナ)　Family-name(kana)</p>
                                      <input class="value" placeholder="例) ヤマダ" type="text" name="user[family_name_kana]" id="user_family_name_kana">
                                    </div>
                                    <div class="form">
                                      <p>名(カナ)　First-name(kana)</p>
                                      <input class="value" placeholder="例) サヤカ" type="text" name="user[first_name_kana]" id="user_first_name_kana">
                                    </div>
                                    <div class="form">
                                      <p>パスワード　Password</p>
                                      <input autocomplete="new-password" class="value" placeholder="６文字以上" type="password" name="user[password]" id="user_password">
                                    </div>
                                    <div class="form">
                                      <p>パスワード(確認)　Password(Confirmation)</p>
                                      <input autocomplete="new-password" class="value" placeholder="６文字以上" type="password" name="user[password_confirmation]" id="user_password_confirmation">
                                    </div>
                                  </div>
                                  <div class="submit">
                                    <input type="submit" name="commit" value="Sign up" class="submit__btn">
                                  </div>
                                </div>
                              </div>
                            </form></div>
                          `
    $('h1').css("color","grey");
    $('.sign-up').css("animation-name","top-select_effect");
    $('.sign-up').css("animation-duration","0.5s");
    $('.sign-up').on('animationend', function() {
      $('.sign-up').css("display","none");
      $('.log-in').css("display","none");
      $('.sign-up').css("animation-name","none");
    });
    $(signup).appendTo('.index-main').hide().fadeIn(500);



    $(document).on("click", ".back-btn", function (e) {
      e.preventDefault();
      $('.registration-new').remove();
      $('.log-in').css("animation-name","none");
      $('.sign-up').css("animation-name","top-close_effect");
      $('.sign-up').css("display","block");
      $('.log-in').css("display","block");
      $('h1').css("color","black");
      $('.sign-up').on('animationend', function() {
        $('.sign-up').css("display","block");
        $('.log-in').css("display","block");
      });
    });
  });
  










  $(document).on("click",'#log-in', function (e) {
    e.preventDefault();
    var login =
                `
                <div class="sessions-new">
                  <div class="new-main">
                    <a class="back-btn">
                      <div class="submit-back">
                        <i class="far fa-times-circle"></i>
                      </div>
                    </a>
                    <form class="new_user" id="new_user" action="/users/sign_in" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="0gmmAkQUf2ETX8iFlSHrPMOGQX4WJ+IMxG5XvTrVtGYO29eeRj1tPuhz7AX/ZaWOsNQt8dP+CVUjjbdqgYLuhA=="><div class="sourceCreate">
                    <div class="sourceCreate__title">
                      <p>Login Form</p>
                    </div>
                    <div class="sourceCreate__form">
                      <div class="form">
                        <input autofocus="autofocus" autocomplete="email" class="form__url" placeholder="メールアドレス Email" type="email" name="user[email]" id="user_email">
                      </div>
                    <div class="form">
                      <input autocomplete="current-password" class="form__url" placeholder="パスワード Password" type="password" name="user[password]" id="user_password">
                    </div>
                    <div class="submit">
                      <input type="submit" name="commit" value="Login" class="submit__btn">
                    </div>
                    <div class="submit login__btn">
                    </div>
                  </div>
                </div>
                </form></div>
                `

    $('h1').css("color","grey");
    $('.log-in').css("animation-name","top-select_effect");
    $('.log-in').css("animation-duration","0.5s");
    $('.log-in').on('animationend', function() {
      $('.sign-up').css("display","none");
      $('.log-in').css("display","none");
      $('.log-in').css("animation-name","none");
    });
    $(login).appendTo('.index-main').hide().fadeIn(500);



    $(document).on("click", ".back-btn", function (e) {
      e.preventDefault();
      $('.sessions-new').remove();
      $('.sign-up').css("animation-name","none");
      $('.log-in').css("animation-name","top-close_effect");
      $('.sign-up').css("display","block");
      $('.log-in').css("display","block");
      $('h1').css("color","black");
      $('.log-in').on('animationend', function() {
        $('.sign-up').css("display","block");
        $('.log-in').css("display","block");
      });
    });
  });
});