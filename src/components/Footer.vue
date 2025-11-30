<script setup>
import logo from '@/assets/img/logo.png';
</script>

<template>
  <footer class="bg-green-700 text-white py-8 px-16 mt-12 shadow-lg">
    <div class="container mx-auto flex flex-col md:flex-row items-center justify-between">
      <div class="flex items-center gap-3 mb-4 md:mb-0">
        <img class="h-10 w-auto" :src="logo" alt="Vue Jobs" />
        <span class="font-bold text-2xl tracking-wide">Vue Jobs</span>
      </div>
      <div class="flex flex-col md:items-end text-left md:text-right">
        <p class="text-sm mb-2">Connecting talent with opportunity</p>
        <div class="flex gap-4 mb-2 justify-start md:justify-end">
          <a href="#" class="hover:text-green-200 transition"><i class="pi pi-github text-xl"></i></a>
          <a href="#" class="hover:text-green-200 transition"><i class="pi pi-linkedin text-xl"></i></a>
          <a href="#" class="hover:text-green-200 transition"><i class="pi pi-envelope text-xl"></i></a>
        </div>
        <p class="text-xs opacity-80">&copy; {{ new Date().getFullYear() }} Vue Jobs. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
