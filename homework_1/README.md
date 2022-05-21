# Домашка №1
## Обычные задачи
### 1) Посмотреть где я
pwd
### 2) Создать папку
mkdir foldername
### 3) Зайти в папку
cd foldername
### 4) Создать 3 папки
mkdir foldername1 foldername2 foldername3
### 5) Зайти в любоую папку
cd foldername1
### 6) Создать 5 файлов (3 txt, 2 json)
touch textfile1.txt textfile2.txt textfile3.txt jsonfile1.json jsonfile2.json
### 7) Создать 3 папки
mkdir foldername1.1 foldername1.2 foldername1.3
### 8) Вывести список содержимого папки
ls
### 9) + Открыть любой txt файл
nano textfile1.txt 
### 10) + написать туда что-нибудь, любой текст.
Hello, World!
### 11) + сохранить и выйти.
Ctrl + X –> y
### 12) Выйти из папки на уровень выше
cd ..
### 13) переместить любые 2 файла, которые вы создали, в любую другую папку.
mv -t foldername2 foldername1/textfile2.txt foldername1/jsonfile2.json
### 14) скопировать любые 2 файла, которые вы создали, в любую другую папку.
cp -t foldername3 foldername1/textfile3.txt foldername1/jsonfile1.json
### 15) Найти файл по имени
find . -name textfile3.txt
### 16) просмотреть содержимое в реальном времени (команда grep) изучите как она работает.
tail -f foldername1/textfile1.txt
### 17) вывести несколько первых строк из текстового файла
head foldername1/textfile1.txt -n 2
### 18) вывести несколько последних строк из текстового файла
tall foldername1/textfile1.txt -n 2
### 19) просмотреть содержимое длинного файла (команда less) изучите как она работает.
less foldername1/textfile1.txt –> :q
### 20) вывести дату и время
date
## Задачи со звёздочкой
### 1) Отправить http запрос на сервер.
http://162.55.220.72:5005/terminal-hw-request  
curl http://162.55.220.72:5005/terminal-hw-request
### 2) Написать скрипт который выполнит автоматически пункты 3, 4, 5, 6, 7, 8, 13
sh homework.sh
