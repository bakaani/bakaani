class Admin::AnimesController < AdminController
  before_action :find_anime, only: [:show, :edit, :update, :destroy]

  def index
    @animes = Anime.order(:created_at).decorate
  end

  def show
  end

  def new
    @anime = Anime.new.decorate
  end

  def create
    @anime = Anime.new(anime_params).decorate
    if @anime.save
      redirect_to new_admin_anime_path, notice: t('admin.flash.success')
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @anime.update_attributes(anime_params)
      redirect_to admin_anime_path(@anime), notice: t('admin.flash.success')
    else
      render :edit
    end
  end

  def destroy
    @anime.destroy
    redirect_to admin_animes_path, notice: t('admin.flash.delete_success')
  end

  private

  def find_anime
    @anime = Anime.find(params[:id]).decorate
  end

  def anime_params
    params.require(:anime).permit(
      :title, :desc, :show_type, :remote_cover_url,
      :cover, :published_at, :status, genre_ids: []
    )
  end
end
