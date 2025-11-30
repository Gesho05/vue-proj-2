<script setup>
import Card from '@/components/Card.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
     <section class="py-4 mx-40">
      <div class="container-xl lg:container m-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 p-4 rounded-lg">
           <RouterLink to="/jobs">
          <Card>
            <h2 class="text-2xl font-bold">For Developers</h2>
            <p class="mt-2 mb-2">
              Browse our Vue jobs and start your career today
            </p>
          </Card>
        </RouterLink>
          <RouterLink to="/jobs/add">
          <Card bg="bg-green-100" hover="hover:bg-green-200 transition-colors duration-300">
            <h2 class="text-2xl font-bold">For Employers</h2>
            <p class="mt-2 mb-2">
              List your job to find the perfect developer for the role
            </p>
          </Card>
        </RouterLink>
        </div>
      </div>
    </section>
</template>