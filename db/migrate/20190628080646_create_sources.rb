class CreateSources < ActiveRecord::Migration[5.2]
  def change
    create_table :sources do |t|
      t.text :url, null: false
      t.string :title, null: false
      t.text :text
      t.bigint :user_id, null: false, foreign_key: true
      t.bigint :board_id, null: false, foreign_key: true
      t.bigint :category_id, null: false, foreign_key: true
      t.timestamps
    end
  end
end
