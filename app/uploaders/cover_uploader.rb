class CoverUploader < CarrierWave::Uploader::Base
  include CarrierWave::MiniMagick

  process resize_to_fit: [225, 291]

  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

  def default_url
    ActionController::Base.helpers.asset_path([version_name, 'no_image.jpg'].compact.join('_'))
  end

  def extension_whitelist
    %w(jpg jpeg gif png)
  end
end
