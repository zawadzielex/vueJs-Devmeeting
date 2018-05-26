<template>
    <div>
        <a href="#" v-on:click="sortBy('name')">Sort by Name</a>
        <a href="#" v-on:click="sortBy('ibu')">Sort by IBU</a>
    </div>
</template>

<script>
export default {
    name: "SortPeople",
    methods: {
        sortBy(type) {
            this.$emit('onSortBy', {
                type
            })
        }
    }
}
</script>

