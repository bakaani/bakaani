class CreateAnimes < ActiveRecord::Migration[5.1]
  def change
    create_table :animes do |t|
      t.string :title, null: false
      t.text :desc
      t.string :status, default: 'na'
      t.date :published_at
      t.string :show_type, default: 'tv'
      t.string :cover

      t.timestamps
    end
    add_index :animes, :title, unique: true
  end
end
