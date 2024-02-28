mkdir -p data/FCyT/2024-01
node get2 2024-01

# first add md5 sum for invalid pdf
node parse2024.js 409701
node parse2024.js 320902
node parse2024.js 299701
node parse2024.js 650001
node parse2024.js 429701
node parse2024.js 166231
node parse2024.js 760101
node parse2024.js 359201
node parse2024.js 309801
node parse2024.js 134111
node parse2024.js 114071
node parse2024.js 439801
node parse2024.js 349701
node parse2024.js 319801
node parse2024.js 339701
node parse2024.js 389701
node parse2024.js 411702

node parse2024.summary.js 2024-01

node parse2.gestion.js 2024-01 2023-02

sudo mkdir -p /srv/www/2022.cappuchino/data/FCyT/2024-01
sudo cp data/FCyT/2024-01/*.json /srv/www/2022.cappuchino/data/FCyT/2024-01/.
sudo cp data/FCyT/2024-01.json   /srv/www/2022.cappuchino/data/FCyT/.
sudo cp data/FCyT/index.json     /srv/www/2022.cappuchino/data/FCyT/.
sudo cp data/FCyT/news.json      /srv/www/2022.cappuchino/data/FCyT/.
sudo cp data/index.json          /srv/www/2022.cappuchino/data/.

mkdir -p /mnt/data/starhuks/api_cappuchino/public/data/departments/fcyt/2024-1
cp data/FCyT/2024-01/*.json /mnt/data/starhuks/api_cappuchino/public/data/departments/fcyt/2024-1/.
cp data/FCyT/2024-01.json   /mnt/data/starhuks/api_cappuchino/public/data/departments/fcyt/.
cp data/FCyT/index.json   /mnt/data/starhuks/api_cappuchino/public/data/departments/fcyt/index.json
cp data/FCyT/news.json   /mnt/data/starhuks/api_cappuchino/public/data/departments/fcyt/.
cd /mnt/data/starhuks/api_cappuchino
./runserver.sh

# añadir a bruno la carpeta downloads-server/2020.cappuchino/data/FCyT/* data/deparments/fcyt en api.starkbucks

# node generate-index.js 2022-01

# copy

# http-server public/

# Compress-Archive -Path .\public\* -DestinationPath downloads-server\2020.cappuchino\2022-01.5.cappuchino.zip
# scp -P9195 .\downloads-server\2020.cappuchino\2022-01.5.cappuchino.zip scesi@dozer-ssh.scesi.org:~/.

# sudo unzip 2022-01.5.cappuchino.zip -d /srv/www/2022.cappuchino
# firebase deploy

# update redirect in old anual gestion
# update gestion in scesi.org/admin for scesi.org/capuchino and scesi.org/cappuchino in anual
