require 'rails_helper'

RSpec.describe Anime, type: :model do
  subject { FactoryGirl.build(:anime) }

  it { is_expected.to respond_to(:title) }
  it { is_expected.to respond_to(:desc) }
  it { is_expected.to respond_to(:published_at) }
  it { is_expected.to respond_to(:cover) }
  it { is_expected.to respond_to(:status) }
  it { is_expected.to respond_to(:show_type) }

  it { is_expected.to validate_presence_of(:title) }
  it { is_expected.to validate_uniqueness_of(:title) }
  it { is_expected.to validate_inclusion_of(:status).in_array(%w(na ongoing completed)) }
  it { is_expected.to validate_inclusion_of(:show_type).in_array(%w(tv ova ona movie special)) }

  it { is_expected.to have_and_belong_to_many(:genres).dependent(:destroy) }
end
