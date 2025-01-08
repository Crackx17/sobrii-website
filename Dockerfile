FROM node:18

WORKDIR /app

# Copie les fichiers package.json et package-lock.json pour installer les dépendances
COPY package.json package-lock.json ./

# Installe les dépendances
RUN npm install

# Copie tous les fichiers dans l'image Docker
COPY . .

# Build et export de l'application Next.js
RUN npm run build && npm run export

# Installe 'serve' pour servir les fichiers statiques
RUN npm install -g serve

# Expose le port pour l'application
EXPOSE 3001

# Commande pour démarrer le serveur statique avec 'serve'
CMD ["serve", "-s", "out", "-l", "3002"]
