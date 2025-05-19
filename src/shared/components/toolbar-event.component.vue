<script>
export default {
  name: "toolbar-event",
  methods: {
    navigateTo(page) {
      this.selectedOption = page;
      if (page === 'home') {
        this.$router.push('/home');
      } else if (page === 'check-in') {
        this.$router.push('/registration/event-check-ins/new');
      }
    },
    onLanguageChange(event) {
      // Aquí iría la lógica para cambiar idioma, aunque no pides i18n todavía.
      // Puedes dejarlo vacío o simplemente cambiar el estado.
      // Ejemplo:
      this.selectedLanguage = event.value;
    }
  },
  mounted() {
    // Detectar la ruta actual para marcar el botón activo
    const currentPath = this.$route.path;
    if (currentPath.startsWith('/home')) {
      this.selectedOption = 'home';
    } else if (currentPath.startsWith('/registration/event-check-ins')) {
      this.selectedOption = 'check-in';
    } else {
      this.selectedOption = '';
    }
  },
  watch: {
    '$route.path'(newPath) {
      if (newPath.startsWith('/home')) {
        this.selectedOption = 'home';
      } else if (newPath.startsWith('/registration/event-check-ins')) {
        this.selectedOption = 'check-in';
      } else {
        this.selectedOption = '';
      }
    }
  }
}
</script>

<template>
  <pv-toolbar>
    <template #start>
      <img
          src="https://logo.clearbit.com/eventify.com"
          alt="Eventify Logo"
          width="40"
          height="40"
          aria-label="Eventify Logo"
          class="mr-2"
      />
      <span class="font-bold text-lg" aria-label="Certification text">ISO 27001:2022 certified</span>
    </template>

    <template #center>
      <pv-button
          label="Home"
          class="p-button-text"
          :class="{ 'p-button-active': selectedOption === 'home' }"
          @click="navigateTo('home')"
          aria-current="page"
          aria-label="Go to Home"
      />
      <pv-button
          label="Check-In"
          class="p-button-text"
          :class="{ 'p-button-active': selectedOption === 'check-in' }"
          @click="navigateTo('check-in')"
          aria-label="Go to Check-In"
      />
    </template>

  </pv-toolbar>
</template>

<style scoped>

</style>