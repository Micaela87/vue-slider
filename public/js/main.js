const myApp = new Vue({
    el: '#app',
    data: {
        indexSlide: 0,
        slides: slides
    },
    methods: {
        slideUp() {
            if (this.indexSlide === 0) {
                this.indexSlide = this.slides.length - 1;
            } else {
                this.indexSlide--;
            }
        },
        slideDown() {
            if (this.indexSlide === this.slides.length - 1) {
                this.indexSlide = 0;
            } else {
                this.indexSlide++;
            }
        }
    }
});

