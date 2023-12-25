# Cheat Sheet for executed commands

## Delete K8S service by its name

kubectl delete svc <service-name> -n <namespace>

## Port forward service to localhost

kubectl port-forward service/<service-name> -n <namespace> <local-port>:<service-port>
