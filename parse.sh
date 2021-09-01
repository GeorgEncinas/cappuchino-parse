# Tested in Powershell

# node backup.js 2020-02 data/FCyT

node get2.js 2021-02

node parse2.filter.js 2021-02

node parse2.gestion.js 2021-02 2021-01

mkdir downloads-server/2020.cappuchino/data/FCyT/2021-02
mkdir public/data/FCyT/2021-02

cp data/FCyT/2021-02/*.json downloads-server/2020.cappuchino/data/FCyT/2021-02/.
cp data/FCyT/2021-02/*.json public/data/FCyT/2021-02/.

cp data/FCyT/2021-02.json downloads-server/2020.cappuchino/data/FCyT/.
cp data/FCyT/2021-02.json public/data/FCyT/.

cp data/FCyT/index.json downloads-server/2020.cappuchino/data/FCyT/.
cp data/FCyT/index.json public/data/FCyT/.

cp data/FCyT/news.json downloads-server/2020.cappuchino/data/FCyT/.
cp data/FCyT/news.json public/data/FCyT/.

cp data/index.json downloads-server/2020.cappuchino/data/.
cp data/index.json public/data/.

Compress-Archive -Path .\public\* -DestinationPath downloads-server\2020.cappuchino\2021-02.4.cappuchino.zip
scp -P9195 .\downloads-server\2020.cappuchino\2021-02.4.cappuchino.zip scesi@dozer-ssh.scesi.org:~/.

# sudo unzip 2021-02.4.cappuchino.zip -d /srv/www/2021.cappuchino
# firebase deploy

# old
# cp data/FCyT/2020-02/*.json backups/cappuchino-2020-08-31--21-36--backup/data/FCyT/2020-02/.
# cp data/FCyT/2020-02.json backups/cappuchino-2020-08-31--21-36--backup/data/FCyT/.
# cp data/FCyT/index.json backups/cappuchino-2020-08-31--21-36--backup/data/FCyT/.
# cp data/index.json backups/cappuchino-2020-08-31--21-36--backup/data/.
# cp data/FCyT/news.json backups/cappuchino-2020-08-31--21-36--backup/data/FCyT/.
