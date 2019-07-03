# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝（ ユーザー ）＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
User.create!([
  {
    nickname: "Source me",
    email: "source_me.111@gmail.com",
    family_name: "奏巣",
    first_name: "未ー",
    family_name_kana: "ソース",
    first_name_kana: "ミー",
    password: "123456"
  },
  {
    nickname: "テスト　太郎",
    email: "test.111@gmail.com",
    family_name: "手酢斗",
    first_name: "太郎",
    family_name_kana: "テスト",
    first_name_kana: "タロウ",
    password: "123456"
  }
])

# # ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝（ ボード ）＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
Board.create!([
  {
    name: "プログラミング",
    user_id: "1"
  },
  {
    name: "英語",
    user_id: "1"
  },
  {
    name: "レシピ",
    user_id: "2"
  },
  {
    name: "美味しかったお店",
    user_id: "2"
  }
])

# # ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝（ カテゴリー ）＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
Category.create!([
  {
    name: "マークアップ関連",
    user_id: "1",
    board_id: "1"
  },
  {
    name: "サーバーサイド関連",
    user_id: "1",
    board_id: "1"
  },
  {
    name: "TOEIC",
    user_id: "1",
    board_id: "2"
  },
  {
    name: "プログラミング",
    user_id: "1",
    board_id: "2"
  },
  {
    name: "お肉料理",
    user_id: "2",
    board_id: "1"
  },
  {
    name: "野菜料理",
    user_id: "2",
    board_id: "1"
  },
  {
    name: "梅田駅近辺",
    user_id: "2",
    board_id: "2"
  },
  {
    name: "難波駅近辺",
    user_id: "2",
    board_id: "2"
  }
])

# ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝（ ソースポスト ）＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
Source.create!([
  {
    url: "https://qiita.com/natales/items/67cfb2c2c2bd546f5ff2",
    title: "Haml の導入",
    text: "＜導入＞　gem 'haml-rails'",
    user_id: "1",
    board_id: "1",
    category_id: "1"
  },
  {
    url: "https://qiita.com/watak676/items/525ad3d8a1297e3244e3",
    title: "Haml の書き方",
    text: "htmlを記述するとき、簡単かつ簡易的に記述できるHamlについての書き方を記します。
    
    Ruby On Rails などを扱うとき、Hamlで記述する人も多いでしょう。

    ちなみに私はSlimなども好きです。
    
    

    ＜コード解説＞
    
    1. !!!
    <!DOCTYPE html>を表す

    2. %
    タグの前に%を付けると< 開始タグ >と< 終了タグ >を表す。

    3. インデントを必ず入れる
    入れ子構造にする時は字下げを必ず同じスペース分入れる。
    ちなみに私の場合はRubyが主ですがその他プログラムでも記述するときは字下げ（タブ幅）を2にしています。だいたい4つスペースか2つスペースなんかが一般的でしょうか。

    4. 属性を入れる場合
    Ruby風に{}とシンボルで書ける。


    コメント記法
      HTML的に記述

      「/ コメントだよ」

      もしくは複数行書くときは

      / コメントだよ
      コメントだよ
      コメントだよ

      HTMLには反映させないけどHamlの中では反映させたい場合

      「-#」を「1」と同様に記述する。",
    user_id: "1",
    board_id: "1",
    category_id: "1"
  },
  {
    url: "https://mamewaza.com/support/blog/howto-use-flex.html",
    title: "CSS 要素を横並びにする",
    text: "親要素に display:flex; を記載。子要素が横並びになる。",
    user_id: "1",
    board_id: "1",
    category_id: "1"
  },
  {
    url: "https://qiita.com/jiggaman0412/items/74dd0c28b0d7512823d0",
    title: "Rails の認証機能に関して(Basic認証などなど)",
    text: "認証にも種類があって、その認証方法によって利用するライブラリが異なってくる。",
    user_id: "1",
    board_id: "1",
    category_id: "2"
  },
  {
    url: "https://qiita.com/shunsuke227ono/items/968537eb7b055323d618",
    title: "【DB設計/オブジェクト指向】一対一テーブルを作った方が良いケース【Rails】",
    text: "データ管理の都合上分ける必要があるケースなど",
    user_id: "1",
    board_id: "1",
    category_id: "2"
  },
  {
    url: "https://eikaiwa.dmm.com/blog/25545/",
    title: "忙しい会社員のためのTOEIC勉強法！ すき間時間で効率よく英語学習するために",
    text: "あれこれと手を出すよりも1冊を最後までやりきること。その1冊として選んでいただきたいのは、模擬試験問題集（最低2回分）。
    それだけでOKです。",
    user_id: "1",
    board_id: "2",
    category_id: "3"
  },
  {
    url: "https://matome.naver.jp/odai/2136542247447334201",
    title: "【英語】たったの半年でTOEICテスト800点を取れる人のスゴイ勉強法の共通点",
    text: "身の回りのものはできるだけ英語に設定。パソコン、携帯、表示を全て英語。まず周りを英語だらけにしましょう",
    user_id: "1",
    board_id: "2",
    category_id: "3"
  },
  {
    url: "https://www.hassy-blog.com/entry/programmers_must_study_english/",
    title: "プログラマなのにまだ英語から逃げてるの？具体的な勉強法を解説！",
    text: "英語力は大きく「聞く」「読む」「書く」「話す」の4技能に分けられます。
    この4技能のうち、プログラマに最も求められるのは「読む」力です。語の公式ドキュメントがスラスラ読める英語力を目指すために、TOEICのリーディング425点以上を目標にしましょう。これだけのスコアが取れれば、少なくとも英語を読むことに関する抵抗はなくなっているはずですよ。",
    user_id: "1",
    board_id: "2",
    category_id: "4"
  },
  {
    url: "https://qiita.com/Ted-HM/items/7dde25dcffae4cdc7923",
    title: "プログラミングでよく使う英単語のまとめ【随時更新】",
    text: "名前をつけるときには、名詞、動詞の違い、複数形、過去形などに注意しましょう。オブジェクト指向では、クラス名は名詞、メソッドは動詞とします。",
    user_id: "1",
    board_id: "2",
    category_id: "4"
  },
  {
    url: "https://delishkitchen.tv/categories/9241",
    title: "[delishkitchen]お肉のおかずの人気レシピ・作り方",
    text: "お肉のおかずレシピを簡単動画でご紹介。豚肉、牛肉、鶏肉を中心に、ハンバーグや生姜焼きなどの定番レシピから、圧力鍋を使った豚の角煮などの本格的なレシピまでご紹介！お弁当のおかずや夕飯の献立にぴったりな料理を多数掲載しています。あの人気料理も動画を見れば簡単に美味しく作れるかも!?",
    user_id: "2",
    board_id: "1",
    category_id: "5"
  },
  {
    url: "https://cookpad.com/category/11",
    title: "[cookpad]お肉のおかず",
    text: "お肉を食べて元気もりもり♪今日の晩ご飯もやっぱりお肉！",
    user_id: "2",
    board_id: "1",
    category_id: "5"
  },
  {
    url: "https://delishkitchen.tv/categories/9238",
    title: "野菜のおかずの人気レシピ・作り方",
    text: "野菜のおかずレシピを簡単動画でご紹介。基本・定番の野菜料理や、人気の野菜おかずを作るワザとコツが満載！栄養の気になる、毎日のお弁当おかずにもぴったりなレシピが見つかります。彩り鮮やかな野菜のおかずを楽しみましょう♪",
    user_id: "2",
    board_id: "1",
    category_id: "6"
  },
  {
    url: "https://cookpad.com/category/10",
    title: "[cookpad]野菜のおかず",
    text: "野菜が大好き！旬野菜を上手につかって、おいしく健康に、彩り良くお料理！夜ご飯の献立に迷ったらまずこちらをどうぞ♪",
    user_id: "2",
    board_id: "1",
    category_id: "6"
  },
  {
    url: "https://stores.ippudo.com/1068",
    title: "[ラーメン]シロマルベース 梅田店",
    text: "ポタージュスープより濃厚なスープを目指した、トロ～リとろけるスープが絶品。濃厚なのにスープ自体に粘度はなく、比較的さらっとしています。
    写真は「シロマルベース」にトッピングを付けた「チョイ盛り」。基本はチャーシューとねぎのシンプルな博多ラーメンです。ストレートの細麺のため、濃厚なスープでもあっさり食べられます。",
    user_id: "2",
    board_id: "2",
    category_id: "7"
  },
  {
    url: "https://retty.me/area/PRE27/ARE89/SUB8901/100001334644/",
    title: "[居酒屋] 魚頂天酒場 まつり 梅田店",
    text: "厳選食材で作る海鮮和食と全国４７都道府県50銘柄日本酒が楽しめるお店！
    熟練の料理人による匠の技で磨き上げた海鮮料理と旨い酒を味わうなら「魚頂天酒場」へ 食べて！飲んで★大盛り上がり♪ 【日本酒】全国47都道府県の50銘柄が飲み放題！ 梅田に居ながら全国の日本酒を飲み比べできる！ 【旬素材】日本各地より厳選！季節の食材が続々と入荷 目利きが選んだ新鮮な山海の幸！ 素材本来の旨味を最大限に引き出した逸品料理 【各種宴会・パーティー】自慢の海鮮と絶品料理の数々！ <全7品>全2時間飲み放題付コース3,500円～ ぐるなびクーポンをチェック！ 【お洒落な雰囲気】お洒落な和空間♪隠れ家的な掘りごたつ・テーブル個室あり 少人数の飲み会～最大96名様の貸切宴会までOK 会社・団体様の宴会・接待・女子会・同窓会・女子会などに対応 【個室充実】 掘りごたつ個室:4～32名様 テーブル個室:4～18名様、2～10名様",
    user_id: "2",
    board_id: "2",
    category_id: "7"
  },
  {
    url: "https://www.hotpepper.jp/strJ001106032/?vc_lpp=MSZlZmRhYmNiODExZCY1ZDFiNThjMCYyMjg2NWYmNWQyZjFmNDAmWFJ0WXdBQUpuUGhuQlk1NndLaHZCc0NvYjBla3ZBJjQJWFJ0WXdBQUpuUGhuQlk1NndLaHZCc0NvYjBla3ZBCTA4ODQ5NDc3NTYwMjU5NDY5MjE5MDcwMjEzMTQ0MAkJaHR0cHM6Ly9oYXJhaGVyaS5uZXQvYXJ0aWNsZS8xODMvbmFtYmFfZGlubmVyCXsiX2loIjoiQ2lBZ0lDQWc0NE9iNDRPRDQ0T0k0NE9hNDRPRDQ0T1I0NE84NDRLdzQ0T3I0NE9oQ2lBZ0lDQSIsIl91cmkiOiJodHRwczpcL1wvd3d3LmhvdHBlcHBlci5qcFwvc3RySjAwMTEwNjAzMlwvIn0&vos=afhpppvczzzzx00000041",
    title: "[タイ料理]大阪カオマンガイカフェ",
    text: "南海難波駅の近くにあるタイ料理レストラン。
    大阪屈指の電気街のど真ん中にあるにも関わらず、一歩足を踏み入れるとそこはまさにタイ。
    装飾品などお店の雰囲気はもちろん、タイ料理独特のエスニックな香りも同時に迎えてくれます。
    ゆったりとした落ち着いた雰囲気の中でいただく本場のタイ料理は格別！
    タイ料理ならではの『旨辛』があなたを虜にすること間違いなし！
    日常の喧騒から離れて、異国情緒溢れる空間で優雅に過ごしてみませんか？",
    user_id: "2",
    board_id: "2",
    category_id: "8"
  },
  {
    url: "https://restaurant.ikyu.com/108112/?ikCo=10000004&CosNo=10000004&CosUrl=https%3A%2F%2Frestaurant.ikyu.com%2F108112%2F",
    title: "[フレンチ]brasserie RINASCE",
    text: "2017年にオープンした新しいお店。
    明るく開放的な空間なので食事も会話も弾み、楽しい時間を過ごすことができます。
    フレンチですがカジュアルに利用出来るのも魅力的。
    美味しいお料理とお酒をリーズナブルに楽しめるのは嬉しいですね。
    食を通した美を追及したお料理の数々は、これまでのヘルシーの概念を覆すような美味しさ。
    生き生きとした素材と味に驚くこと間違いなし！
    健康や美に気を遣う人にも嬉しい、新感覚のフレンチです♡",
    user_id: "2",
    board_id: "2",
    category_id: "8"
  }
])
