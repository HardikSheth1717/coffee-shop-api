# Pull code
cd /home/ubuntu/coffee-shop-api/
git checkout development
git pull origin development

# Build and deploy
npm install
npm run build
npm run start:dev
# pm2 restart server