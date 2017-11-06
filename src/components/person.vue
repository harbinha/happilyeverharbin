<template>
    <div class="person">
        <div class="row">
        <div class="column column-50 person-img">
            <img :src="imageUrl" :alt="name">
        </div>
        <div class="column column-50 person-text">
            <h3 class="person-name">{{name}}</h3>
            <p class="person-description">
                {{description}}
            </p>
            <p class="how-we-met bold">How we met:</p>
            <p class="how-we-met-answer">{{howWeMet}}</p>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'person',
    props: ['imageUrl', 'name', 'description', 'howWeMet'],
}
</script>

<style scoped>
    .person {
        margin-bottom: 30px;
    }
</style>