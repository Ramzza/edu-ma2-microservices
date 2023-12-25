# Terminal in following path:

<repo_path>/devops_proj/backend

# Build image:

docker build -t devops_server .

# Run container:

docker run -p 3001:3001 -d --name devops_srv devops_server

# Export image

docker save -o ../vagrant/provision/srv/devops_srv_img.tar devops_server:latest

# Import image

docker load -i devops_srv_img.tar

## Push tag to Dockerhub

docker build -t ramza/edu-ma2-web-db:tagname .
docker tag ramza/edu-ma2-web-db:tagname ramza/edu-ma2-web-fe:latest

docker push ramza/edu-ma2-web-db:tagname
docker push ramza/edu-ma2-web-db:latest
