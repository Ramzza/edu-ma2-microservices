# Stuff for k8s

## Create docker-registry secret

kubectl create secret docker-registry <secret_name> --namespace=<NAMESPACE_NAME> --docker-server=hub.docker.com --docker-username=<docker_user> --docker-password=<access_token>

## Using K8S in Docker

Add config in kube.config in home folder for Lens connection

### Get config without cert

kubectl config view --minify

### Get config with cert

kubectl config view --raw

## Create namespace from yml

kubectl apply -f .\00_create_namespace.yml

## Create FE deployment from yml

kubectl apply -f .\01_frontend.yml

## Create Ingress from yml

kubectl apply -f .\01_ingress.yml

## Create DB from yml

kubectl apply -f .\02_database.yml
