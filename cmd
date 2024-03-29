
kubectl get pods
kubectl run kubernetes-masterclass --image=iboukhenna/kubernetes-masterclass --port=8080
kubectl logs kubernetes-masterclass -f
kubectl exec -it kubernetes-masterclass -- /bin/sh
kubectl get all
kubectl describe pods kubernetes-masterclass
kubectl delete pods kubernetes-masterclass
kubectl run kubernetes-masterclass --image=iboukhenna/kubernetes-masterclass --port=8080 --dry-run=client -o yaml
kubectl run kubernetes-masterclass --image=iboukhenna/kubernetes-masterclass --port=8080 --dry-run=client -o yaml > pod.yaml
kubectl apply -f pod.yaml
kubectl delete -f pod.yaml

kubectl create deployment kubernetes-masterclass --image=iboukhenna/kubernetes-masterclass
kubectl delete deployment kubernetes-masterclass
kubectl create deployment kubernetes-masterclass --image=iboukhenna/kubernetes-masterclass --dry-run=client -o yaml > deployment.yaml
kubectl apply -f deployment.yaml
kubectl delete -f deployment.yaml
kubectl scale deployment kubernetes-masterclass --replicas=3
kubectl rollout history deployment kubernetes-masterclass

kubectl apply -f .

kubectl create configmap db-config --from-literal=db_host=postgres --from-literal=db_name=kubernetes-masterclass
kubectl delete configmap db-config
kubectl create configmap db-config --from-literal=db_host=postgres --from-literal=db_name=kubernetes-masterclass --dry-run=client -o yaml > configmap.yaml
kubectl apply -f configmap.yaml

kubectl create secret generic kubernetes-masterclass-secret --from-literal=postgres_username=postgres --from-literal=postgres_password=postgres --dry-run=client -o yaml 
kubectl delete secret kubernetes-masterclass-secret
