import { ref, onMounted, onBeforeUnmount } from "vue";

const firstFunctionality = (props) => {
    const items = ref([]);
    const newItem = ref("");

    const addItem = () => {
        items.value.push({ name: newItem.value, index: items.value.length, type: props.itemType })
        newItem.value = "";
    }

    return { items, addItem, newItem };
}

const secondFunctionality = () => {
    const currentTime = ref("");
    let interval = null;

    const setTime = () => {
        const date = new Date();

        currentTime.value = date.toLocaleString();
    }

    onMounted(() => {
        setTime();

        interval = setInterval(setTime, 1000);
    });

    onBeforeUnmount(() => {
        clearInterval(interval);
    })

    return { currentTime };
}


export { firstFunctionality, secondFunctionality };