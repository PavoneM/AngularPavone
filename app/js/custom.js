$(document).ready(function(){
    /* ---------------------------------------------------------------------- */
    /*	Progressbar load page
    /* ---------------------------------------------------------------------- */
    $(".progressbar > span").each(function() {
        var bar = $(this);
        var level = $(this).attr('level');
        bar.width(0);
        bar.animate({
            width: level+'%'
        }, 800);
    });

    /* ---------------------------------------------------------------------- */
    /*	ProgressBar Show/Hide Description
    /* ---------------------------------------------------------------------- */
    $(".roll-with-description.hide").each(function(){
        $(this).each(function(){
            $(this).find(".description").css('display','none')
        })
    });

    $(".roll-with-description.show").each(function(){
        $(this).each(function(){
            $(this).find(".description").css('display','block')
        })
    });

    $(".roll-with-description").each(function(){
        $(this).click(function(){
            var speed = 600;
            if ($(this).hasClass("show")) {
                $(this).removeClass("show");
                $(this).find(".description").slideUp(speed);
                setTimeout($(this).addClass("hide"), speed);

            }
            else if ($(this).hasClass("hide")) {
                $(this).removeClass("hide");
                $(this).find(".description").slideDown(speed);
                setTimeout($(this).addClass("show"), speed);
            }
        })
    });
    /* ---------------------------------------------------------------------- */
    /*	Block Show/Hide Description
    /* ---------------------------------------------------------------------- */
    $(".hidden").each(function(){
        $(this).each(function(){
            $(this).find(".block-content").css('display','none')
        })
    });

    $(".showing").each(function(){
        $(this).each(function(){
            $(this).find(".block-content").css('display','block')
        })
    });

});
