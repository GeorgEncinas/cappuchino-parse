# firebase section
mkdir public/data/FCyT/2024-02
cp data/FCyT/2024-02/*.json public/data/FCyT/2024-02/.
cp data/FCyT/2024-02.json public/data/FCyT/.
cp data/FCyT/index.json public/data/FCyT/.
cp data/FCyT/news.json public/data/FCyT/.
cp data/index.json public/data/.

firebase deploy
