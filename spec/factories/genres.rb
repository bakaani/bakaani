FactoryGirl.define do
  factory :genre do
    sequence(:name) { |i| "Genre#{i+1}" }
  end
end
