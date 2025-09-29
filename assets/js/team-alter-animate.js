let alterableTeam = {
    Arya: {
        name : 'Sastrika Arya',
        id : 'Arya',
        alter: {Kariya: {name : 'Kairya Ryuuichi', id : 'Kariya'}}
    },
}

$(document).ready(function() {
    loadProfile();

});


function switchProfile(who, status){ 
    if(status != null){
        localStorage.setItem('TeamProfileIsAlter_'+who, status);
    }else{
        let teamProfileIsAlter = localStorage.getItem('TeamProfileIsAlter_'+who);
        localStorage.setItem('TeamProfileIsAlter_'+who, teamProfileIsAlter);
    }


        if(status == 'true'){

            $('center#'+who+' img').addClass('fade-out');
        }else if(status == 'false'){
            

            $('center#'+alterableTeam[who].alter.Kariya.id+' img').addClass('fade-out');
            
        }


        setTimeout(() => {
            checkingProfile(who, true);
        }, 2000);
}


function loadText(who){
    const $textElement = $('center#'+who+' h2');

    if ($textElement.length) {

        const text = $textElement.text().trim();

        $textElement.empty();

        $.each(text.split(''), function(index, char) {
            const charContent = (char === ' ') ? '\u00A0' : char; 

            $('<span>')
                .text(charContent)
                .css('--index', index)
                .appendTo($textElement); 
        });
    }
}




function loadProfile(){
    checkingProfile('Arya', false);
}

function checkingProfile(who, switcher){
    let teamProfileIsAlter = localStorage.getItem('TeamProfileIsAlter_'+who);

    if(who == 'Arya'){
        if(teamProfileIsAlter == 'false') {
            $('#'+alterableTeam[who].alter.Kariya.id).hide();
            $('#'+alterableTeam[who].id).show();

            if(switcher == true ){
        
                $('center#'+alterableTeam[who].alter.Kariya.id+' img').removeClass('teamProfileOut');	
                $('center#'+alterableTeam[who].alter.Kariya.id+' img').removeClass('fade-out');	
                $('center#'+alterableTeam[who].alter.Kariya.id+' img').addClass('teamProfileIn');
                $('center#'+who+' img').removeClass('fade-out');
                $('center#'+who+' img').removeClass('fade-in');
                
                

                loadText(who)


                setTimeout(() => {
                    $('center#'+who+' img').removeClass('teamProfileIn');
                    $('center#'+who+' img').addClass('teamProfileOut');
                }, 500);

            }else{
                $('center#'+who+' img').removeClass('teamProfileIn');				
                $('center#'+who+' img').addClass('teamProfileOut');
            }


        }else if(teamProfileIsAlter == 'true'){
            $('#'+alterableTeam[who].alter.Kariya.id).show();
            $('#'+alterableTeam[who].id).hide();



            
            if(switcher == true ){
                $('center#'+who+' img').removeClass('teamProfileOut');
                $('center#'+who+' img').removeClass('fade-out');
                $('center#'+who+' img').addClass('teamProfileIn');
                $('center#'+alterableTeam[who].alter.Kariya.id+' img').removeClass('fade-in');
                loadText(alterableTeam[who].alter.Kariya.id)
                setTimeout(() => {
                    $('center#'+alterableTeam[who].alter.Kariya.id+' img').removeClass('teamProfileIn');
                    $('center#'+alterableTeam[who].alter.Kariya.id+' img').addClass('teamProfileOut');
                }, 500);
            }else{
                $('center#'+alterableTeam[who].alter.Kariya.id+' img').removeClass('teamProfileIn');
                $('center#'+alterableTeam[who].alter.Kariya.id+' img').addClass('teamProfileOut');	
            }



        }else{
            localStorage.setItem('TeamProfileIsAlter_'+who, 'false');
            $('#'+alterableTeam[who].alter.Kariya.id).hide();				
        }
    }

}
