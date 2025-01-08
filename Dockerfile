FROM node:18

WORKDIR /app

# Copie les fichiers package.json et package-lock.json pour installer les dépendances
COPY package.json package-lock.json ./

# Installe les dépendances
RUN npm install

# Copie tous les fichiers dans l'image Docker
COPY . .

# Build de l'application avec Vite
RUN npm run build

# Installe 'serve' pour servir les fichiers statiques
RUN npm install -g serve

# Expose le port pour l'application
EXPOSE 3001

# Commande pour démarrer le serveur statique avec 'serve'
CMD ["serve", "-s", "dist", "-l", "3002"]
