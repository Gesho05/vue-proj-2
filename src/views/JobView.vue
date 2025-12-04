<script setup>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import BackButton from '@/components/BackButton.vue';
import { get, delete_ } from '@/utils/api';
import { reactive, onMounted } from 'vue';
import { useRouter, RouterLink, useRoute } from 'vue-router';
import { useToast } from 'vue-toastification';

const router = useRouter();
const route = useRoute();
const toast = useToast();

const jobId = route.params.id;

const state = reactive({
  job: {},
  isLoading: true
});

const deleteJob = async () => {
  try {
    const confirm = window.confirm('Are you sure you want to delete this job?');
    if (confirm){
    await delete_(`/api/jobs/${jobId}`);
    toast.success('Job deleted successfully!');
    router.push('/jobs');
    }
  } catch (error) {
    console.error('Error deleting job:', error);
    toast.error('Failed to delete job.');
  }
}

onMounted(async () => {
  try {
    const response = await get(`/api/jobs/${jobId}`);
    state.job = response.data;
  } catch (error) {
    console.error('Error fetching job:', error);
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <BackButton class="bg-green-50" />
    <section v-if="!state.isLoading" class="bg-green-50 min-h-screen">
      <div class="container mx-auto py-10 px-4 md:px-12 lg:px-24">
        <div class="flex flex-col md:flex-row gap-8">
          <main class="flex-1 min-w-0">
            
            <div class="bg-white p-6 rounded-lg shadow-md">
              <div class=" flex flex-col items-center mb-6 mt-3">
              <div class="text-gray-500 text-lg mb-2 text-center">{{ state.job.type }}</div>
              <h1 class="text-4xl font-bold mb-4 text-center">{{ state.job.title }}</h1>
              <div class="text-gray-500 mb-4 flex items-center justify-center">
                <i class="pi pi-map-marker text-xl text-green-700 mr-2"></i>
                <p class="text-green-700">{{ state.job.location }}</p>
              </div>
            </div>
             <hr class="mb-6 text-gray-300 ">
             <h3 class="text-green-800 text-lg font-bold mb-2">Salary</h3>

              <p class="mb-4">{{ state.job.salary }}</p>
              <h3 class="text-green-800 text-lg font-bold mb-6">
                Job Description
              </h3>

              <p class="mb-4">
               {{ state.job.description }}
              </p>
            </div>
          </main>

          <!-- Sidebar -->
          <aside class="w-full md:w-80 lg:w-96 shrink-0">
            <!-- Company Info -->
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-3xl font-bold mb-4 text-center">Company Info</h3>
              <h2 class="text-xl mb-2">{{ state.job.company.name }}</h2>
              <p class="my-2">{{ state.job.company.description }}</p>
              <hr class="my-4" />
              <h3 class="text-xl">Contact Email:</h3>
              <p class="my-2 bg-green-100 p-2 rounded-lg text-gray-800">{{ state.job.company.contactEmail }}</p>
              <h3 class="text-xl">Contact Phone:</h3>
              <p class="my-2 bg-green-100 p-2 rounded-lg text-gray-800">{{ state.job.company.contactPhone }}</p>
            </div>

            <!-- Manage -->
            <div class="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 class="text-xl font-bold mb-6">Manage Job</h3>
              <RouterLink
                :to="`/jobs/edit/${state.job.id}`"
                class="bg-green-500 hover:bg-green-600 text-white text-center font-bold py-2 px-4 rounded-lg w-full focus:outline-none focus:shadow-outline mt-4 block"
                >Edit Job</RouterLink
              >
              <button
                @click="deleteJob"
                class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg w-full focus:outline-none focus:shadow-outline mt-4 block"
              >
                Delete Job
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
    <section v-else class="text-center text-gray-500 py-6">
                <PulseLoader />
             </section>
</template>