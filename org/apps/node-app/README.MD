docker build -t custom-mysql .
docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=test -p 3306:3306 -d custom-mysql
