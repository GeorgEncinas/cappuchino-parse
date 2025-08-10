#!/bin/bash

GESTION_PATH=2025-02

mkdir -p public/data/FCyT/${GESTION_PATH}

cp data/FCyT/${GESTION_PATH}/*.json public/data/FCyT/${GESTION_PATH}/
cp data/FCyT/${GESTION_PATH}.json   public/data/FCyT/
cp data/FCyT/index.json     public/data/FCyT/
cp data/FCyT/news.json      public/data/FCyT/
cp data/index.json          public/data/