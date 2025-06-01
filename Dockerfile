# Gunakan image resmi Node.js sebagai base image
FROM node:20

# Set direktori kerja di dalam container
WORKDIR /app

# Salin file package.json dan package-lock.json jika ada
COPY package*.json ./

# Install dependencies
RUN npm install

# Salin seluruh kode sumber ke dalam container
COPY . .

# Ekspose port aplikasi (ubah sesuai port yang digunakan di server.js)
EXPOSE 5000

# Jalankan aplikasi
CMD ["node", "src/server.js"]
