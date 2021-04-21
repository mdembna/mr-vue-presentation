import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App);

app.directive('custom-directive', {
    created() {
        console.log('directive: created hook')
    },
    beforeMount() {
        console.log('directive: beforeMount hook')
    },
    mounted(el, binding) {
        const defaultModifiers = {
            start: false,
        };

        const { start } = { ...defaultModifiers, ...binding.modifiers};

        const updateBackground = (el) => {
            if (window.innerWidth < 600 ) el.style.backgroundColor = 'pink';
            else el.style.backgroundColor = 'initial';
        }

        const handler = binding.value || updateBackground;

        window.addEventListener('resize', () => handler(el));

        if (start) handler(el);
    },
    beforeUpdate() {
        console.log('directive: beforeUpdate hook')
    },
    unmounted() {
        console.log('directive: unmounted hook')
    },
})

app.use(router).mount('#app')
