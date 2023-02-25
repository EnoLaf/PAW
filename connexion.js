Vue.createApp({
    data(){
        return {
            linkRegister:'./register.html',
            linkChooseSpecie:"./choose-specie.html",
        };
    },
    methods: {
        openChooseSpeciePage(){
            location.replace(this.linkChooseSpecie);
        },
        openRegisterPage(){
            location.replace(this.linkRegister);
        }
    }
}).mount('#connexion');