// Javascript document

$(document).ready(function() {
	console.log("ready");
        
    
    
    
    
    
    
//CHANGE LOGO ON HOVER
    $('#logo').hover(function() {
            console.log("logo hover");
            $('#logo img').attr("src", "img/Logos/logoBanner.png");      
        }, function() {
            $('#logo img').attr("src", "img/Logos/logoBanner2.png");
        
		return false;
	});
    
    
    
    
    
    
    
/*/PEOPLE BIO INFO
    $('.peeps').hover(function() {
            console.log("bio hover");
            $('img', this).animate({width: '90px', height: '90px'}, 150);
            /*$('img', this).css('transition', 'transform 0.25s').css('transform', 'translateY(0px)');
            $('h2', this).css('transition', 'transform 0.25s').css('transform', 'translateY(0px)');*/
        /*    $('.bio', this).css('visibility','visible');
            $('h2', this).css('color', '#E48125');
            
        }, function() {
            $('img', this).animate({width: '180px', height: '180px'}, 150);
            /*$('img', this).css('transition', 'transform 0.25s').css('transform', 'translateY(0px)');
            $('h2', this).css('transition', 'transform 0.25s').css('transform', 'translateY(0px)');*/
     /*       $('.bio', this).css('visibility','hidden');
            $('h2', this).css('color', '#37474F');
        
	}); */
    
    
    
    
    
//NAME HOVER IN PROJECTS
    $('#projects p img').hover(function() {
            console.log("project bio hover");
        
            var src = $(this).attr('src'); 
            // "img/Students/Justin-Woodjack.jpg"
            var tarr = src.split('/');      
            // ["img","Students","Justin-Woodjack.jpg"]
            var file = tarr[tarr.length-1]; 
            // "Justin-Woodjack.jpg"
            var data = file.split('.')[0];  
            // "Justin-Woodjack"
            var names = data.split('-').join(' ');

            console.log(names);
        
            var lbl = document.createElement('span')
            lbl.className = 'tooltip' //.overlay pos abs
            lbl.style.left = this.offsetLeft
            lbl.textContent = names
            this.parentNode.appendChild(lbl)

            //$('#label').text(names);
            //$('#label').css('visibility', 'visible');
        
        }, function() {
            //$('#label').css('visibility', 'hidden');
            var removethese = this.parentNode.getElementsByClassName('tooltip')
            
            for(var i = 0; i<removethese.length; i++){
                this.parentNode.removeChild(removethese[i])
            }
        
        }).mousemove(function(e) {
            var mousex = e.pageX + 20; //Get X coordinates
            var mousey = e.pageY + 10; //Get Y coordinates
            $('.tooltip').css({top: mousey, left: mousex})
        
        

        return false;
	}); 
    
    
    
    


        
    
    
    
});