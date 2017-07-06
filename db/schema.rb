# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170705164222) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "animes", force: :cascade do |t|
    t.string "title", null: false
    t.text "desc"
    t.string "status", default: "na"
    t.date "published_at"
    t.string "show_type", default: "tv"
    t.string "cover"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["title"], name: "index_animes_on_title", unique: true
  end

  create_table "animes_genres", force: :cascade do |t|
    t.bigint "anime_id"
    t.bigint "genre_id"
    t.index ["anime_id", "genre_id"], name: "index_animes_genres_on_anime_id_and_genre_id"
    t.index ["anime_id"], name: "index_animes_genres_on_anime_id"
    t.index ["genre_id"], name: "index_animes_genres_on_genre_id"
  end

  create_table "genres", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_genres_on_name", unique: true
  end

  add_foreign_key "animes_genres", "animes"
  add_foreign_key "animes_genres", "genres"
end