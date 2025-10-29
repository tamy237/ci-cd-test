# Étape 1 : Préparation du build (optionnel ici car site statique)
FROM alpine:3.19 AS builder
WORKDIR /app
COPY . .

# Étape 2 : Serveur Nginx
FROM nginx:alpine

# Copier le site statique
COPY --from=builder /app /usr/share/nginx/html

# Copier la configuration personnalisée (on va la créer ensuite)
COPY nginx.conf /etc/nginx/nginx.conf

# Ajouter curl pour les healthchecks
RUN apk add --no-cache curl

# Exposer le port
EXPOSE 80

# Commande de démarrage
CMD ["nginx", "-g", "daemon off;"]

