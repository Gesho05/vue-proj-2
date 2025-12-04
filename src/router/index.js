import { createRouter, createWebHistory } from "vue-router";
import { defineAsyncComponent } from "vue";

// Lazy load all views to reduce initial bundle size
const HomeView = defineAsyncComponent(() => import("@/views/HomeView.vue"));
const JobsView = defineAsyncComponent(() => import("@/views/JobsView.vue"));
const NotFoundView = defineAsyncComponent(() => import("@/views/NotFoundView.vue"));
const JobView = defineAsyncComponent(() => import("@/views/JobView.vue"));
const AddJobView = defineAsyncComponent(() => import("@/views/AddJobView.vue"));
const EditJobView = defineAsyncComponent(() => import("@/views/EditJobView.vue"));

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView
        },
        {
            path: '/jobs/:id',
            name: 'job',
            component: JobView
        },
        {
            path: '/jobs/add',
            name: 'add-job',
            component: AddJobView
        },
        {
            path: '/jobs/edit/:id',
            name: 'edit-job',
            component: EditJobView
        },
        {
            path: '/:catchAll(.*)',
            name: 'not-found',
            component: NotFoundView
        }
    ]
});

export default router;
