const myApp = new Vue({
    el: '#app',
    data: {
        indexSlide: 0,
        slides: slides
    },
    methods: {
        automaticSlider() {
            setInterval(function() {
                if (myApp.indexSlide === myApp.slides.length -1) {
                    myApp.indexSlide = 0;
                } else {
                    myApp.indexSlide++;
                }
                console.log('this is my index', myApp.indexSlide)
            }, 3000)
        }
    }
});

myApp.automaticSlider();