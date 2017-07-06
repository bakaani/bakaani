class Admin::AnimesController < AdminController
  before_action :find_anime, only: [:show, :edit, :update, :destroy]

  def index
    @animes = Anime.all
  end

  def show
  end

  def new
    @anime = Anime.new
  end

  def create
    @anime = Anime.new(anime_params)
    if @anime.save
      redirect_to admin_animes_path
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @anime.update_attributes(anime_params)
      redirect_to admin_anime_path(@anime)
    else
      render :edit
    end
  end

  def destroy
    @anime.destroy
    redirect_to admin_animes_path
  end

  private

  def find_anime
    @anime = Anime.find(params[:id])
  end

  def anime_params
    params.require(:anime).permit(:title, :desc, :published_at, :cover, :status, :show_type)
  end
end
