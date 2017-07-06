require 'rails_helper'

RSpec.describe Genre, type: :model do
  subject { FactoryGirl.build(:genre) }

  it { is_expected.to respond_to(:name) }
  it { is_expected.to validate_presence_of(:name) }
  it { is_expected.to validate_uniqueness_of(:name) }
  it { is_expected.to have_and_belong_to_many(:animes).dependent(:destroy) }
end
