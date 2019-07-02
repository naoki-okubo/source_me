# DB設計

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false|
|email|string|null: false, unique: true|
|family_name|string|null: false|
|first_name|string|null: false|
|family_name_kana|string|null: false|
|first_name_kana|string|null: false|


### Association

- has_many :boards, dependent: :destroy
- has_many :sources, dependent: :destroy
- has_many :category, dependent: :destroy




## boardsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|
|user_id|references|null: false, foreign_key: true|


### Association

- belongs_to :user
- has_many :sources, dependent: :destroy
- has_many :category, dependent: :destroy


## sourcesテーブル

|Column|Type|Options|
|------|----|-------|
|url|text|null: false|
|title|string|null: false|
|text|text|---|
|user_id|bigint|null: false, foreign_key: true|
|board_id|bigint|null: false, foreign_key: true|
|category_id|bigint|null: false, foreign_key: true|

### Association

- belongs_to :user
- belongs_to :board
- belongs_to :category, dependent: :destroy

## categoriesテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|user_id|references|null: false, foreign_key: true|
|board_id|references|null: false, foreign_key: true|

### Association

- belongs_to :user
- belongs_to :board
- has_many :sources, dependent: :destroy