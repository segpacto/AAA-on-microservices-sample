# AAA-on-microservices-sample(WIP)

The idea behind this repository is demonstrate how to make use of AAA(authentication, authorization, and accounting) on distributed systems.
This repo will make use of (Keycloak)[https://www.keycloak.org/] for AAA, also and API Gateway written in nodejs using (fast-gateway)[https://github.com/BackendStack21/fast-gateway] to control the access to the microservices and make partial validation of JWT tokens. Next to this it is included 2 microservices `customer-api` and `invoice-api` which will be behind the API Gateway and serve data based on roles.
