var app = new Vue({
    el: '#app',
    data: {
        mails: [],

    },
    mounted() {
        for (let index = 0; index < 10; index++) {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    // console.log(response.data.response);
                    var emailRandom = response.data.response
                    //console.log(emailRandom);
                    this.mails.push(emailRandom)
                }).catch(error => {
                    console.error(error)
                });


        }

    }

})