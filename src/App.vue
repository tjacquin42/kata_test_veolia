<template>
    <div id="app">
        <header>
            <h1>{{ t('auction.title') }}</h1>
            <ButtonSwitchLanguage />
        </header>

        <main>
            <Auction />
        </main>

        <footer>
            <p>© {{ new Date().getFullYear() }} - Thomas Jacquin</p>
        </footer>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import Auction from './components/Auction.vue'
import ButtonSwitchLanguage from './components/ui/button/SwitchLanguage.vue'

const { t, locale } = useI18n()

const toggleLang = () => {
    locale.value = locale.value === 'en' ? 'fr' : 'en'
}
const currentLangLabel = computed(() =>
    locale.value === 'fr' ? 'FR' : 'EN'
)
</script>

<style scoped>
#app {
    font-family: system-ui, sans-serif;
    color: #333;
    padding: 1rem;
    max-width: 800px;
    margin: auto;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 2rem;
}

main {
    margin-bottom: 2rem;
}

footer {
    text-align: center;
    font-size: 0.9rem;
    color: #888;
}
</style>
  
