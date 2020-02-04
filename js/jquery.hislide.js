(function($) {
    var slide = function(ele,options) {
        var $ele = $(ele);
        var setting = {
            speed: 500,
            interval:500000,
            
        };
        $.extend(true, setting, options);
        var states = [
            { $zIndex: 1, width: 224, height: 388, top: 59, left: -100, $opacity:1 },
            { $zIndex: 2, width: 250, height: 445, top: 35, left: 50, $opacity: 1 },
            { $zIndex: 3, width:  332, height: 598, top: -50, left: 200, $opacity: 1 },
            { $zIndex: 2, width: 250, height: 445, top: 35, left: 450, $opacity: 1 },
            { $zIndex: 1, width: 224, height: 388, top: 59, left: 600, $opacity: 1 }
        ];

        var $lis = $ele.find('li');
        var timer = null;

        $ele.find('.hi-next').on('click', function() {
            next();
        });
        $ele.find('.hi-prev').on('click', function() {
            states.push(states.shift());
            move();
        });
        $ele.on('mouseenter', function() {
            clearInterval(timer);
            timer = null;
        }).on('mouseleave', function() {
            autoPlay();
        });

        move();
        autoPlay();

    
        function move() {
            $lis.each(function(index, element) {
                var state = states[index];
                $(element).css('zIndex', state.$zIndex).finish().animate(state, setting.speed).find('img').css('opacity', state.$opacity);
            });
        }
        function next() {
            states.unshift(states.pop());
            move();
        }

        function autoPlay() {
            timer = setInterval(next, setting.interval);
        }
    };
    $.fn.hiSlide = function(options) {
        $(this).each(function(index, ele) {
            slide(ele,options);
        });
        return this;
    };
})(jQuery);
