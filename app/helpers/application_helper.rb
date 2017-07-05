module ApplicationHelper
  def webpack_assets_url(name)
    if Rails.env.development?
      "http://localhost:8080/assets/#{name}"
    else
      "/assets/#{Rails.application.config.assets.webpack_manifest[name]}"
    end
  end
end
