FactoryGirl.define do
  factory :anime do
    sequence(:title) { |i| "anime#{i+1}" }
  end
end
