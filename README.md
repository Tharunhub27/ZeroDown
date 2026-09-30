# ZeroDown

## Blue-Green Deployment for Zero-Downtime Application Delivery

ZeroDown is a DevOps project that demonstrates blue-green deployment using Docker and Kubernetes.

The project maintains two application versions:

- Blue - current stable version
- Green - new version

The new version is deployed and health-checked before application traffic is switched to it.

If a problem occurs, traffic can be switched back to the stable version.