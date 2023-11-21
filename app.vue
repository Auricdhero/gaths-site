<template>
  <div>
    <Title>GHANA ASSOCIATION OF TOURISM AND HOSPITALITY STUDENTS</Title>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

  </div>
</template>

<script setup>
const router = useRouter();

useSeoMeta({
  title: 'GHANA ASSOCIATION OF TOURISM AND HOSPITALITY STUDENTS',
  ogTitle: 'GATHS',
  ogImage: '/favicon.ico'
})

// Scroll to top after each navigation
router.afterEach(() => {
  window.scrollTo(0, 0);
});
</script>
