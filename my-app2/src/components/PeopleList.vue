<template>
    <div>
        <ul>
            <!-- 2. Then, we're using built-in v-for directive to iterate over products -->
            <li v-for="(p, key) in people" v-bind:key="key">
                <h2>{{ p.name }}, IBU {{p.ibu}}</h2>
                <p>{{ p.tagline }}</p> 
                <small>{{ p.description }}</small><br>
                <button v-on:click="removePerson(key)">Remove</button>
            </li>
        </ul>
        <!-- 5. v-if can be helpful with conditional statements -->
        <p v-if="!people.length">No products!</p>
    </div>
</template>

<script>
export default {
    name: 'PeopleList',
    props: {
        people: {
            type: Array
        }
    },
    methods: {
        removePerson(key) {
            this.$emit('onRemovePerson', {
                key
            });
        }
    }
}
</script>

<style>

</style>

