mkdir -p data/FCyT/2023-02
node get.3.2 2023-02

# first add md5 sum for invalid pdf
node parse2.filter.js 2023-02

node parse2.gestion.js 2023-02 2023-01

sudo mkdir -p /srv/www/2022.cappuchino/data/FCyT/2023-02
sudo cp data/FCyT/2023-02/*.json /srv/www/2022.cappuchino/data/FCyT/2023-02/.
sudo cp data/FCyT/2023-02.json   /srv/www/2022.cappuchino/data/FCyT/.
sudo cp data/FCyT/index.json     /srv/www/2022.cappuchino/data/FCyT/.
sudo cp data/FCyT/news.json      /srv/www/2022.cappuchino/data/FCyT/.
sudo cp data/index.json          /srv/www/2022.cappuchino/data/.

mkdir -p /mnt/data/starhuks/api_cappuchino/public/data/departments/fcyt/2023-2
cp data/FCyT/2023-02/*.json /mnt/data/starhuks/api_cappuchino/public/data/departments/fcyt/2023-2/.
cp data/FCyT/2023-02.json   /mnt/data/starhuks/api_cappuchino/public/data/departments/fcyt/.
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
