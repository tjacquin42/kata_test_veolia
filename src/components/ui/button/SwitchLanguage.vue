<template>
    <button @click="toggleLang">
        🌐 {{ currentLangLabel }}
    </button>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { ref, computed } from 'vue'

const { t, locale } = useI18n()

const toggleLang = () => {
    locale.value = locale.value === 'en' ? 'fr' : 'en'
}
const currentLangLabel = computed(() =>
    locale.value === 'fr' ? 'FR' : 'EN'
)
</script>

<style scoped>
button {
    background: #f0f0f0;
    border: 1px solid #ccc;
    padding: 0.4rem 0.8rem;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #e6e6e6;
}
</style>