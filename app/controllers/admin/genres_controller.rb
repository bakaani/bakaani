class Admin::GenresController < AdminController
  skip_before_action :verify_authenticity_token
  before_action :find_genre, only: [:update, :destroy]

  def index
    respond_to do |format|
      format.html
      format.json do
        render json: { genres: Genre.order(:name) }
      end
    end
  end

  def create
    respond_to do |format|
      format.json do
        @genre = Genre.new(genre_params)
        if @genre.save
          render json: { genre: @genre, message: t('admin.flash.success') }
        else
          render json: { errors: @genre.errors.full_messages }, status: 422
        end
      end
    end
  end

  def update
    respond_to do |format|
      format.json do
        if @genre.update_attributes(genre_params)
          render json: { genre: @genre, message: t('admin.flash.success') }
        else
          render json: { errors: @genre.errors.full_messages }, status: 422
        end
      end
    end
  end

  def destroy
    respond_to do |format|
      format.json do
        @genre.destroy
        render json: { message: t('admin.flash.delete_success') }
      end
    end
  end

  private

  def find_genre
    @genre = Genre.find(params[:id])
  end

  def genre_params
    params.require(:genre).permit(:name)
  end
end
