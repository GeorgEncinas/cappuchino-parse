# Tested in Powershell

# node backup.js 2020-02 data/FCyT

node get2.js 2022-01

node parse2.filter.js 2022-01

node parse2.gestion.js 2022-01 2021-02

mkdir downloads-server/2020.cappuchino/data/FCyT/2022-01
mkdir public/data/FCyT/2022-01

cp data/FCyT/2022-01/*.json downloads-server/2020.cappuchino/data/FCyT/2022-01/.
cp data/FCyT/2022-01/*.json public/data/FCyT/2022-01/.

cp data/FCyT/2022-01.json downloads-server/2020.cappuchino/data/FCyT/.
cp data/FCyT/2022-01.json public/data/FCyT/.

cp data/FCyT/index.json downloads-server/2020.cappuchino/data/FCyT/.
cp data/FCyT/index.json public/data/FCyT/.

cp data/FCyT/news.json downloads-server/2020.cappuchino/data/FCyT/.
cp data/FCyT/news.json public/data/FCyT/.

cp data/index.json downloads-server/2020.cappuchino/data/.
cp data/index.json public/data/.

Compress-Archive -Path .\public\* -DestinationPath downloads-server\2020.cappuchino\2022-01.4.cappuchino.zip
scp -P9195 .\downloads-server\2020.cappuchino\2022-01.4.cappuchino.zip scesi@dozer-ssh.scesi.org:~/.

# sudo unzip 2022-01.4.cappuchino.zip -d /srv/www/2022.cappuchino
# firebase deploy

# update redirect in old anual gestion
# update gestion in scesi.org/admin for scesi.org/capuchino and scesi.org/cappuchino in anual
