<script setup lang="ts">
import { ref } from 'vue';

const nama = ref('');
const email = ref('');
const asalSekolah = ref('');

const handleSubmit = async () => {
  const response = await fetch('http://localhost:3000/api/Daftar', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ nama: nama.value, email: email.value, asalSekolah: asalSekolah.value }),
  });

  if (response.ok) {
    console.log('Pendaftaran berhasil!');
  } else {
    console.error('Gagal mendaftar. Silakan coba lagi.');
  }
};
</script>

<template>
  <div>
    <h1 class="form-title">Form Registrasi Lomba</h1>

    <form class="registration-form">
      <div class="form-group">
        <label for="nama">Nama:</label>
        <input v-model="nama" type="text" id="nama" required />
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input v-model="email" type="email" id="email" required />
      </div>

      <div class="form-group">
        <label for="asalSekolah">Asal Sekolah:</label>
        <input v-model="asalSekolah" type="text" id="asalSekolah" required />
      </div>

      <button type="button" @click="handleSubmit">Submit</button>
    </form>
  </div>
</template>

<style scoped>
.form-title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}

.registration-form {
  max-width: 400px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 15px;
}

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
