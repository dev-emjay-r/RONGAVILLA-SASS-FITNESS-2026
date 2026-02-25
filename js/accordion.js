//My Version
/*
const questions = document.querySelectorAll('.contactFaq__item--question');


questions.forEach(question => {
    
    question.addEventListener('click',()=>{
        //this.classList.toggle('active');
        var panel = question.nextElementSibling;
        // Toggle the next sibling
       
        // console.log(panel.className);;
        if (panel.style.height === "0px") {
          panel.style.height = "10rem";
          panel.style.opacity = "100";
        } else {
          panel.style.height = "0px";
          panel.style.opacity = "0";
        }
          
        
    })
});
*/

// Instructor Version

const faqItem = document.querySelectorAll('.contactFaq__item');

faqItem.forEach((item) =>{
    const question = item.querySelector('.contactFaq__item--question');
    const answer = item.querySelector(".contactFaq__item--answer");

    question.addEventListener('click',()=>{
        const open = item.classList.contains('active');
    faqItem.forEach((i)=>{
        i.classList.remove('active');
        i.querySelector(".contactFaq__item--answer").style.maxHeight = null;
    })

    if(!open) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + "px";
    }
    });

});