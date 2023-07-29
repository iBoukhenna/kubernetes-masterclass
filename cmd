
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
