class AnimeDecorator < Draper::Decorator
  delegate_all

  def t_published_at
    object.published_at ? I18n.l(object.published_at, format: :long) : I18n.t('others.nothing')
  end

  def t_status
    t_for(:status, object.status)
  end

  def t_show_type
    t_for(:show_type, object.show_type)
  end

  def genres_links
    genres = object.genres
    if genres.any?
      genres.map { |genre| h.link_to genre.name, '#' }
    else
      [I18n.t('others.nothing')]
    end
  end

  def status_options
    options_for(Anime::STATUSES, :status)
  end

  def show_type_options
    options_for(Anime::SHOW_TYPES, :show_type)
  end

  def options_for(options, column)
    h.options_for_select options.map { |option| [t_for(column, option), option] }
  end

  private

  def t_for(column, value)
    I18n.t("animes.#{column.to_s.pluralize}.#{value}")
  end
end
