window.onload=function(){
    let changed = document.querySelector('.second');
    let second = document.querySelector('.second');
    let third = document.querySelector('.third');
    let first = document.querySelector('.first');
    let button_first = document.querySelector('.butt');
    let button_second = document.querySelector('.butt_second');
    let button_third = document.querySelector('.butt_third');
    let hint = document.querySelector('.contentside');
    let hint_second = document.querySelector('.contentside_second');
    let hint_third = document.querySelector('.contentside_third');


    let gardens = document.querySelector('.button_gardens');
    let lawn = document.querySelector('.button_lawn');
    let planting = document.querySelector('.button_planting');
    let garden = document.querySelector('.garden_first');
    let garden_second = document.querySelector('.garden_second');
    let planting_first = document.querySelector('.planting_first');
    let planting_second = document.querySelector('.planting_second');
    let planting_third = document.querySelector('.planting_third');
    let lawn_car = document.querySelector('.lawn_car');



 let  contact_butt = document.querySelector('.contact_butt');
 let  city_list  = document.querySelector('.city_list');
 let  contact_box  = document.querySelector('.contact_box');


 let  contact_butt_md = document.querySelector('.contact_butt_md');
 let  city_list_md  = document.querySelector('.city_list_md');
 let  contact_box_md  = document.querySelector('.contact_box_md');


 let  city_list_first = document.querySelector('.city_list_first');
 let  city_list_second = document.querySelector('.city_list_second');
 let  city_list_third = document.querySelector('.city_list_third');
 let  city_list_four = document.querySelector('.city_list_four');


 let  list_first_butt = document.querySelector('.list_first_butt');
 let  list_second_butt = document.querySelector('.list_second_butt');
 let  list_third_butt= document.querySelector('.list_third_butt');
 let  list_four_butt = document.querySelector('.list_four_butt');



 let  city_list_first_md = document.querySelector('.city_list_first_md');
 let  city_list_second_md = document.querySelector('.city_list_second_md');
 let  city_list_third_md = document.querySelector('.city_list_third_md');
 let  city_list_four_md = document.querySelector('.city_list_four_md');


 let  list_first_butt_md = document.querySelector('.list_first_butt_md');
 let  list_second_butt_md = document.querySelector('.list_second_butt_md');
 let  list_third_butt_md = document.querySelector('.list_third_butt_md');
 let  list_four_butt_md = document.querySelector('.list_four_butt_md');
 let  img_women = document.querySelector('.img_women');










      button_first.addEventListener('click', () => {//При клике на кнопку
        hint.classList.toggle('showlist'); //Покажем блок;
        second.classList.toggle('hide');
        third.classList.toggle('hide');
        first.classList.toggle('color');
        button_first.classList.toggle('changed')
    
      
      }
      );
      button_second.addEventListener('click', () => {//При клике на кнопку
        hint_second.classList.toggle('showlist'); //Покажем блок;
        first.classList.toggle('hide');
        third.classList.toggle('hide');
        second.classList.toggle('color_second');
        button_second.classList.toggle('changed_second');

      
    
      
      }
      );

      button_third.addEventListener('click', () => {//При клике на кнопку
        hint_third.classList.toggle('showlist'); //Покажем блок;
        first.classList.toggle('hide');
        second.classList.toggle('hide');
        third.classList.toggle('color_third');
        button_third.classList.toggle('changed_third');

      
    
      
      }
      );
      


      gardens.addEventListener('click', () => {//При клике на кнопку
        planting_first.classList.add('filter'); //Покажем блок;
        planting_second.classList.add('filter'); //Покажем блок;
        planting_third.classList.add('filter'); //Покажем блок;
        lawn_car.classList.add('filter'); //Покажем блок;
        garden.classList.remove('filter'); 
        garden_second.classList.remove('filter'); 
    

    
      
      }
      );

      planting.addEventListener('click', () => {//При клике на кнопку
        planting_first.classList.remove('filter'); //Покажем блок;
        planting_second.classList.remove('filter'); //Покажем блок;
        planting_third.classList.remove('filter'); //Покажем блок;
        lawn_car.classList.add('filter'); //Покажем блок;
        garden.classList.add('filter'); 
        garden_second.classList.add('filter'); 
    
      
      }
      );


      lawn.addEventListener('click', () => {//При клике на кнопку
        planting_first.classList.add('filter'); //Покажем блок;
        planting_second.classList.add('filter'); //Покажем блок;
        planting_third.classList.add('filter'); //Покажем блок;
        lawn_car.classList.remove('filter'); //Покажем блок;
        garden.classList.add('filter'); 
        garden_second.classList.add('filter'); 
    
      
      }
      );



      contact_butt.addEventListener('click', () => {//При клике на кнопку
        city_list.classList.toggle('show'); //Покажем блок;
        contact_butt.classList.toggle('changed_contact'); //Покажем блок;
        contact_box.classList.add('colorcity'); //Покажем блок;
        contact_box.classList.add('shadow'); //Покажем блок;
        city_list_first.classList.remove('showlistcityfirst');
        city_list_second.classList.remove('showlistcitysecond');
        city_list_third.classList.remove('showlistcitythird');
        city_list_four.classList.remove('showlistcityfour');

       
     
        
    
      
      }
      );

            contact_butt_md.addEventListener('click', () => {//При клике на кнопку
        city_list_md.classList.toggle('show'); //Покажем блок;
        contact_butt_md.classList.toggle('changed_contact_md'); //Покажем блок;
        contact_box_md.classList.add('colorcity'); //Покажем блок;
        contact_box_md.classList.add('shadow'); //Покажем блок;
        city_list_first_md.classList.remove('showlistcityfirst_md');
        city_list_second_md.classList.remove('showlistcitysecond_md');
        city_list_third_md.classList.remove('showlistcitythird_md');
        city_list_four_md.classList.remove('showlistcityfour_md');
        img_women.classList.remove('margin_top');
        img_women.classList.add('display_sm');


      
     
        
    
      
      }
      );

      list_first_butt.addEventListener('click', () => {//При клике на кнопку
        city_list_first.classList.add('showlistcityfirst'); //Покажем блок;
        city_list.classList.remove('show'); 

      
      }
      );
      list_second_butt.addEventListener('click', () => {//При клике на кнопку
        city_list_second.classList.add('showlistcitysecond'); //Покажем блок;
        city_list.classList.remove('show'); 
      
      }
      );
      list_third_butt.addEventListener('click', () => {//При клике на кнопку
        city_list_third.classList.add('showlistcitythird'); //Покажем блок;
        city_list.classList.remove('show'); 
      
      }
      );
      list_four_butt.addEventListener('click', () => {//При клике на кнопку
        city_list_four.classList.add('showlistcityfour'); //Покажем блок;
        city_list.classList.remove('show'); 
      
      }
      );


      //md


      list_first_butt_md.addEventListener('click', () => {//При клике на кнопку
        city_list_first_md.classList.add('showlistcityfirst_md'); //Покажем блок;
        city_list_md.classList.remove('show'); 
        img_women.classList.add('margin_top');
        img_women.classList.add('display_sm');
       
      
      }
      );
      list_second_butt_md.addEventListener('click', () => {//При клике на кнопку
        city_list_second_md.classList.add('showlistcitysecond_md'); //Покажем блок;
        city_list_md.classList.remove('show'); 
        img_women.classList.add('margin_top');
        img_women.classList.add('display_sm');
        
      
      
      }
      );
      list_third_butt_md.addEventListener('click', () => {//При клике на кнопку
        city_list_third_md.classList.add('showlistcitythird_md'); //Покажем блок;
        city_list_md.classList.remove('show'); 
        img_women.classList.add('margin_top');
        img_women.classList.add('display_sm');
      
      
      }
      );
      list_four_butt_md.addEventListener('click', () => {//При клике на кнопку
        city_list_four_md.classList.add('showlistcityfour_md'); //Покажем блок;
        city_list_md.classList.remove('show'); 
        img_women.classList.add('margin_top');
        img_women.classList.add('display_sm');
       
      
      
      }
      );






   
  
     
    }
  
