  
  function calucateBp(imagew, imageh, mousex, mousey, facepos){
    // TOP LEFT
    if(mousex < facepos.left && mousey < facepos.top){ 
      return '0px 0px'; 
    }
    // TOP
    if((facepos.left + imagew) > mousex && mousex > facepos.left && mousey < facepos.top){ 
      return '-'+ imagew +'px 0px'; 
    }
    // TOP RIGHT
    if(mousex > (facepos.left + imagew) && mousey < facepos.top){ 
      return '-'+ (2 * imagew) +'px 0px'; 
    }
    // LEFT
    if(mousex < facepos.left && mousey < (facepos.top + imageh) && mousey > facepos.top){ 
      return '0px -'+ imageh +'px'; 
    }
    // FRONT
    if((facepos.left + imagew) > mousex && mousex > facepos.left && mousey < (facepos.top + imageh) && mousey > facepos.top){
      return '-'+ imagew +'px -'+ imageh +'px' 
    }
    // RIGHT
    if(mousex > (facepos.left + imagew) && mousey < (facepos.top + imageh) && mousey > facepos.top){ 
      return '-'+ (2 * imagew) +'px -'+ imageh +'px'; 
    }
    // BOTTOM LEFT
    if(mousex < facepos.left && mousey > (facepos.top + imageh)){ 
      return '0px -'+ (2 * imageh) +'px'; 
    }
    // BOTTOM
    if((facepos.left + imagew) > mousex && mousex > facepos.left && mousey > (facepos.top + imageh)){ 
      return '-'+ imagew +'px -'+ (2 * imageh) +'px'; 
    }
    // BOTTOM RIGHT
    if(mousex > (facepos.left + imagew) && mousey > (facepos.top + imageh)){ 
      return '-'+ (2 * imagew) +'px -'+ (2 * imageh) +'px'; 
    }
  }

	function changeFace(mousex, mousey, face_id){
    var face = document.querySelector(face_id)
    var imagew = 160;
    var imageh = 160;
    var facepos = { // image position
      top:  face.offsetTop,
      left: face.offsetLeft
    };
    face.style.backgroundPosition = calucateBp(imagew, imageh, mousex, mousey, facepos);
	}
  
  document.addEventListener('mousemove', (e) => {
    changeFace(e.pageX, e.pageY, '#jerry');
    changeFace(e.pageX, e.pageY, '#george');			
    changeFace(e.pageX, e.pageY, '#elaine');			
    changeFace(e.pageX, e.pageY, '#kramer');			
  });
