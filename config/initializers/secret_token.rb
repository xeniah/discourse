
# Definitely change this when you deploy to production. Ours is replaced by jenkins.
# This token is used to secure sessions, we don't mind shipping with one to ease test and debug,
#  however, the stock one should never be used in production, people will be able to crack 
#  session cookies. 
#
# Generate a new secret with "rake secret".  Copy the output of that command and paste it
# in your secret_token.rb as the value of Discourse::Application.config.secret_token:
#
Discourse::Application.config.secret_token = "419a245f95b6396be66b3fc8199dfc3dd9cac2e5d721ff4e812022fb77ff87845e02f31cce6380a35baf8c57b4e576b93df18d8b524de6885b2b29a556a9493a" 

# delete all lines below in production
# if Rails.env.test? || Rails.env.development? 
#   Discourse::Application.config.secret_token = "419a245f95b6396be66b3fc8199dfc3dd9cac2e5d721ff4e812022fb77ff87845e02f31cce6380a35baf8c57b4e576b93df18d8b524de6885b2b29a556a9493a" 
# else 
#   raise "You must set a secret token in config/initializers/secret_token.rb"
# end

