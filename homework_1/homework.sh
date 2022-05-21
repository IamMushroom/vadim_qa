#!/bin/bash

: '
Скрипт для автоматического выполнения следующих шагов:
3) Зайти в папку
4) Создать 3 папки
5) Зайти в любоую папку
6) Создать 5 файлов (3 txt, 2 json)
7) Создать 3 папки
8) Вывести список содержимого папки
13) переместить любые 2 файла, которые вы создали, в любую другую папку.
'

cd folderforscript
mkdir foldername1 foldername2 foldername3
cd foldername1
touch textfile1.txt textfile2.txt textfile3.txt jsonfile1.json jsonfile2.json
mkdir foldername1.1 foldername1.2 foldername1.3
ls
mv -t ../foldername2 textfile2.txt jsonfile2.json
