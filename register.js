Vue.createApp({
    data(){
        return {
            linkConnexion:'./connexion.html',
        };
    },
    methods: {
        openConnexionPage(){
            location.replace(this.linkConnexion);
        },
    }
}).mount('#register');