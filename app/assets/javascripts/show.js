$(document).on('turbolinks:load',function(){


  $('.side__categories').on('mouseenter',function(e){
    e.preventDefault();
    $('.side__sources').css("display","block");


    $('[id=category-box]').on('mouseenter',function(){
      $('#source-contents').html('');
      var sources = $(this).data('id');
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


      $('.source-box').on('click',function(){
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
    });
  });


  $('.side__sources').on('mouseleave',function(){
    $('.side__sources').css("display","none");
  });
});
