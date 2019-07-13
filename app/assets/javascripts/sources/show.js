$(document).on('turbolinks:load',function(e){
  e.preventDefault();

  $('#createCategoryBtn').on('click',function(){
    $('#body').html('');

    var createCategory =
                          `
                            <div class="categories-new">
                              <div class="main">
                                <form action="/categories" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="bycxGi4mA3wu1F7NiBZn4GW150xs5S8ijAyBsPszTU0FzTzST6jPhvRlu2paFvSetroFkLh57/86OoG/kq0jrA=="><div class="boardCreate">
                                  <div class="boardCreate__title">
                                    <p>新しいカテゴリーの作成</p>
                                  </div>
                                  <div class="boardCreate__form">
                                    <div class="title">
                                    <input class="title__form" placeholder="タイトルを入力" autofocus="autofocus" type="text" name="category[name]" id="category_name">
                                    <input class="title__board-id" value="${$(this).data('board-id')}" type="text" name="category[board_id]" id="category_board_id">
                                  </div>
                                  <div class="submit">
                                    <input type="submit" name="commit" value="作成する" class="submit__btn">
                                  </div>
                                </form>
                              </div>
                          `
    $('#body').append(createCategory);
  });

  $('[id=category-box]').on('mouseenter',function(){
    $('.side__sources').css("display","block");
    $('#center').html('');
    var sources = $(this).data('source-id');


    var sourceListTop = `
                          <div class="createSourceBtn" id="createSourceBtn" data-id="${$(this).data('category-id')}" data-board-id="${$(this).data('board-id')}">
                            <i class="fas fa-plus"></i>
                            <p>新規Source記事</p>
                          </div>
                          <div class="source-contents" id="source-contents">
                          </div>
                        `
    $('#center').append(sourceListTop)
    
    for (var i = 0; i < sources.length; i++){
      var source = sources[i] - 1;
      var sourceList = 
                        `
                          <div class="source-box" data-title="${gon.sources[source].title}" data-url="${gon.sources[source].url}" data-text="${gon.sources[source].text}">
                            <div class="source-title">
                              <p>
                                ${gon.sources[source].title}
                              </p>
                            </div>
                          </div>
                        `
      $('#source-contents').append(sourceList)
    }


    $('.source-box').on('mouseenter',function(){
      $('#body').html('');
      var source = 
                  `
                    <div class="source-top">
                      <a href="${$(this).data('url')}">
                        <div class="source-top__title">
                          <h2>
                            ${$(this).data('title')}
                          </h2>
                        </div>
                      </a>
                    </div>
                    <div class="center">
                      <div class="text">
                        <p>
                        ${$(this).data('text')}
                        </p>
                      </div>
                    </div>
                  `
      $('#body').append(source)
    });

    $('#createSourceBtn').on('click',function(){
      $('#body').html('');
      var category_id = $(this).data('id') - 1
      var select_category = gon.categories[category_id]


      var createSource = 
                          `
                            <div class="sources-new">
                              <div class="new-main">
                                <form action="/sources" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="ZnL4ek1hS4YXPqZEOn/MpKICSJJFWM5Dx5Jg/k0lCpMMmPWyLO+HfM2PQ+Pof1/acQ2qTpHEDp5xpGDxJLtkcg=="><div class="sourceCreate">
                                <div class="sourceCreate__title">
                                  <p>新規 Source記事</p>
                                </div>
                                <div class="sourceCreate__form">
                                  <div class="form-contents">
                                    <div class="category-form">
                                      <p>Category: ${select_category.name}</p>
                                      <input value="${select_category.id}" type="text" name="source[category_id]" id="source_category_id">
                                    </div>
                                    <div class="form">
                                      <p>URL</p>
                                      <input class="value" placeholder="URLを入力" type="text" name="source[url]" id="source_url">
                                    </div>
                                    <div class="form">
                                      <p>タイトル</p>
                                      <input class="value" placeholder="タイトルを入力" type="text" name="source[title]" id="source_title">
                                    </div>
                                    <div class="form">
                                      <p>記事内容</p>
                                      <textarea class="value text-form" placeholder="記事内容を入力 ( 最大1000文字 )" name="source[text]" id="source_text"></textarea>
                                    </div>
                                    <div class="form_board-id">
                                      <input value="${$(this).data('board-id')}" type="text" name="source[board_id]" id="source_board_id">
                                    </div>
                                    <div class="submit">
                                      <input type="submit" name="commit" value="作成する" class="submit__btn">
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          `

      $('#body').append(createSource);
    });
  });

  $('.side__sources').on('mouseleave',function(){
    $('.side__sources').css("display","none");
  });
});
