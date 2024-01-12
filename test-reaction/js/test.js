    
    let num1 =  new Date().getTime();
    

    $(".fig").click(function () { 
        let num2 = new Date().getTime();
        $(".fig").css("display" , "none");
        let resul = (num2 - num1) / 1000
        aparecer();
        $("#time").html(resul);
        
    });

    function aparecer() {
        setTimeout(() => {
            let tam = Math.random()* 200  + 100;
            tam = tam + "px";
            
            let x = Math.floor(Math.random()* 1058); 
            let y = Math.floor(Math.random()* 392);
            y = y + "px";
            x = x + "px";
            let R = Math.floor(Math.random()* 255);
            let B = Math.floor(Math.random()* 255);
            let G = Math.floor(Math.random()* 255);
            let color = "rgb(" + R + "," + G +","+ B+")";
            let form = Math.floor(Math.random()* 2);
            if (form==0) {
                $(".fig").css("border-radius" , "50%")}
            else{$(".fig").css("border-radius" , "0%")}
            
            $(".fig").css({
                "display" : "block" , 
                "width" : tam  , 
                "height" : tam ,
                "background-color" : color,
                "top" : y ,
                "left" : x 
            })
            
            num1 =  new Date().getTime();
        }, 1000);
        
    }
    