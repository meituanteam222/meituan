<template>
<div>
    <top></top>
    <myinput></myinput>
</div>
</template>
<script>
export default {
data() {
return {};
},
methods: {},
components: {
    "top":() =>  import('./RegisterTop.vue'),
     "myinput":() =>  import('./RegisterInput.vue'),

}
};
</script>

<style scoped>

</style>