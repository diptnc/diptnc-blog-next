require('dotenv').config({ path: './.env' })


module.exports = {
  reactStrictMode: true,
  env: {
    NEXT_API_FETCH_POST: 'https://webhooks.mongodb-realm.com/api/client/v2.0/app/diptnc-blog-ngzlx/service/blog_post/incoming_webhook/webhook0',
    NEXT_API_FETCH_AUTHOR_DETAILS: 'https://webhooks.mongodb-realm.com/api/client/v2.0/app/diptnc-blog-ngzlx/service/blog_user/incoming_webhook/webhook1',
    NEXT_API_FETCH_CATEGORY: 'https://webhooks.mongodb-realm.com/api/client/v2.0/app/diptnc-blog-ngzlx/service/blog_category/incoming_webhook/webhook0',
  },

  // distDir: 'build',
}

