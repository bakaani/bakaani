module ApplicationHelper
  def webpack_assets_url(name)
    if Rails.env.development?
      "http://localhost:8080/assets/#{name}"
    else
      "/assets/#{Rails.application.config.assets.webpack_manifest[name]}"
    end
  end

  def render_react(entry, props = {})
    content_tag :div, nil, { 'data-props' => props.to_json }.merge!(
      entry.is_a?(String) ? { id: entry } : entry
    )
  end

  def options_for(collection)
    options_for_select(collection.map { |option| [option.titleize, option] })
  end
end
