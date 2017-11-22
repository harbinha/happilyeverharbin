<template>
    <div class="person">
        <img class="img-fluid" :src="imageUrl" :alt="name">
        <h3 class="cabernet bold">{{name}}</h3>
        <div class="title">{{title}}</div>
        <div class="description">{{description}}</div>
    </div>
</template>

<script>
export default {
    name: 'person',
    props: ['imageUrl', 'name', 'description', 'title'],
}
</script>

<style scoped>
    .person {
        margin-bottom: 40px;
        text-align: left;
    }
    .title {
        font-size: 1.6em;
    }
    .description {
        font-size: .9em;
    }
</style>