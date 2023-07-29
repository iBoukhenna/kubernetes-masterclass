
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
