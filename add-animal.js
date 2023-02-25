Vue.createApp({
    data(){
        return {
            linkChooseSpecie:'./choose-specie.html',
        };
    },
    methods: {
        openChooseSpeciePage(){
            location.replace(this.linkChooseSpecie);
        },
    }
}).mount('#add-animal');