CarrierWave.configure do |config|
  if Rails.env.production?
    config.storage = :fog
    config.fog_provider = 'fog/aws'
    config.fog_credentials = {
      provider: 'AWS',
      aws_access_key_id: ENV['AWS_ACCESS_KEY'],
      aws_secret_access_key: ENV['AWS_SECRET_KEY'],
      region: ENV['AWS_REGION'],
      host: ENV['AWS_HOST']
    }
    config.fog_directory = ENV['AWS_BUCKET']
    config.fog_public = false
    config.fog_attributes = { cache_control: "public, max-age=#{365.day.to_i}" }
  else
    config.storage = :file

    if Rails.env.test?
      config.enable_processing = false
    end
  end
end
