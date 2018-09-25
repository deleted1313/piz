new Vue({
    el: '#app',
    data() {
        const that = this;
        return {
            index: 0,
            pageNum: 0,
            opts: {
                start: 0,
                dir: 'v',
                loop: false,
                duration: 300,
                beforeChange: function(ele, current, next) {
                    console.log('before', current, next)
                    that.index = next;
                },
                afterChange: function(ele, current) {
                    that.index = current;
                    console.log('after', current)
                }
            }
        };
    },
    methods: {
        moveTo: function(index) {
            this.$refs.fullpage.$fullpage.moveTo(index, true);
        },
        showPage: function() {
            this.pageNum++;
            this.$refs.fullpage.$fullpage.$update();
        }
    }
})

    let lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;
    const moveBackground = () => {
    x += (lFollowX - x) * friction;
    y += (lFollowY - y) * friction;
    translate = 'translate3d(' + x + 'px, ' + y + 'px, 0) scale(1.1)';
    document.querySelector('.bg').style.transform = translate;
    window.requestAnimationFrame(moveBackground);
    }
    window.addEventListener('mousemove', (e) => {
    let lMouseX = Math.max(-100, Math.min(100, window.innerWidth / 2 - e.clientX));
    let lMouseY = Math.max(-100, Math.min(100, window.innerHeight / 2 - e.clientY));
    lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
    lFollowY = (10 * lMouseY) / 100;
    });

    // document.addEventListener('contextmenu', function(e) {
    //     e.preventDefault()
    //     const ev = document.createEvent('HTMLEvents');
    //     ev.initEvent('contextmenu', true, false);
    //     ev.target.dispatchEvent(ev);
    // }, false);
    

    moveBackground();