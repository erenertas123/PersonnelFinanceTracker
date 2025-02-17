<script setup lang="ts">

const props = defineProps({
  pageName: { type: String, required: true, default: 'Default' },
  href: { type: String, required: true, default: '/' },
})
</script>

<template>
  <nav class="flex w-full items-center justify-between mb-10">
    <div class="flex items-center gap-2">
      <nav aria-label="breadcrumb">
        <ol class="flex flex-wrap items-center gap-1.5 break-words text-base sm:gap-2.5">
          <li class="inline-flex items-center gap-1.5">
            <a class="transition-colors text-zinc-900 dark:text-zinc-50" href="/">Home</a>
          </li>
          <div class="flex items-center">
            <li role="presentation" aria-hidden="true"
              class="[&amp;>svg]:w-3.5 [&amp;>svg]:h-3.5 text-zinc-900 dark:text-zinc-50">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-chevron-right">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </li>
            <li class="inline-flex items-center gap-1.5">
              <a class="transition-colors text-zinc-900 dark:text-zinc-50 capitalize ml-1.5" :href="props.href">
                {{ props.pageName }}
              </a>
            </li>
          </div>
        </ol>
      </nav>
    </div>
  </nav>
</template>
