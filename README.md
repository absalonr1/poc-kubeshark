# poc-kubeshark con servicios locales en rancher-desktop


POC:

Ingress -->  Service 1 ---> Service2 ---> MongoDB Atlas

![kubesark1](https://github.com/user-attachments/assets/1d564b59-461a-4e6a-a4ed-37053b026125)


# Imagenes docker visibles desde local registry 


```
nerdctl --namespace k8s.io build -t foo /some-dockerfile-directory 
# En YAML de k8s
imagePullPolicy: Never 
```

# Conectarse Ingress controller (traefik) localmente

```
# allowed lower ports to be open and restarted Rancher Desktop 
$ sudo sysctl net.ipv4.ip_unprivileged_port_start 
net.ipv4.ip_unprivileged_port_start = 1024

$ sudo sysctl net.ipv4.ip_unprivileged_port_start=80 
net.ipv4.ip_unprivileged_port_start = 80 

# Hacer Persistente el Cambio: Para que el cambio sea permanente 
# (es decir, se mantenga después de reiniciar el sistema), 
# debes agregarlo al archivo de configuración /etc/sysctl.conf: 

$echo "net.ipv4.ip_unprivileged_port_start=0" | sudo tee -a /etc/sysctl.conf 
sudo sysctl -p  
```
# kubeshark

```
$ brew install kubeshark
$ kubeshark tap
```


# Tools

```
kubectl run -it tool --image=praqma/network-multitool -- /bin/bash
```