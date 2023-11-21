```shell
# размер каталогов
du -sh ./*
du --max-depth=1 -h
```
```shell
# права
find /home/user -type f -exec chmod 644 {} \;
find /home/user -type d -exec chmod 755 {} \;
```
```shell
# архивация
zip squash.zip file1 file2 file3
zip -r squash.zip dir1 -x "*node_modules/*"
unzip squash.zip
```
```shell
# xampp
sudo ln -s ~/htdocs/ /opt/lampp/htdocs
mklink /d "c:\xampp\htdocs\" "d:\htdocs\" # windows
```
```shell
# сброс до мастера
git fetch --all && git reset --hard origin/master
```
