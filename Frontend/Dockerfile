# Utilizar la versión oficial de Node.js como imagen base
FROM node:16

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar el archivo de dependencias del proyecto
COPY package*.json ./
COPY public ./public
COPY src ./src
COPY . ./

RUN npm install

# Copiar el resto del código fuente del proyecto al contenedor

RUN npm run build

COPY . ./


# Exponer el puerto por defecto de Next.js
EXPOSE 5173

# Comando para ejecutar la aplicación Next.js
CMD ["npm", "run", "dev", "--", "--host"]

