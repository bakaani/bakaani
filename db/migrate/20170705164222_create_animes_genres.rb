class CreateAnimesGenres < ActiveRecord::Migration[5.1]
  def change
    create_table :animes_genres do |t|
      t.references :anime, foreign_key: true
      t.references :genre, foreign_key: true
    end
    add_index :animes_genres, [:anime_id, :genre_id]
  end
end
