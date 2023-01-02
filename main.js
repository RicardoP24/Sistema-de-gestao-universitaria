

window.onload = () => {
    changeGradeColors();
    toggleNavBar();
    copyright();
   
    const tab_switchers = document.querySelectorAll('[data-switcher]');
    back(tab_switchers);

    for (let i = 0; i < tab_switchers.length; i++) {
        const tab_switcher = tab_switchers[i];
        console.log(tab_switchers[i]);
        const page_id = tab_switcher.dataset.tab;

        tab_switcher.addEventListener('click', () => {

                document.querySelector('main article .main_article_body .main_article_body_info_right .info:nth-child(4)').classList.remove('is-active');
                
                try{
                    document.querySelector(`.top_menu .is-active`).classList.remove('is-active');
                    document.querySelector('nav ul li .is-active').classList.remove('is-active');
                    document.querySelector(`main .main_create.is-active`).classList.remove('is-active');

                }catch(e){
                    console.log(e);
                }

                if(page_id>=5){
                    document.querySelector(`.top_menu_btn`).classList.add('is-active');
                }else{
                    document.querySelector(`.top_menu_welcome`).classList.add('is-active');
                }

                tab_switcher.classList.add('is-active');
                document.querySelector(`main :nth-child(${page_id})`).classList.add('is-active');

                SwitchPage (page_id);
        });
        
    }

}

function SwitchPage (page_id) {

    const current_page = document.querySelectorAll('main article.is-active');
    current_page.forEach(element=>{
        element.classList.remove('is-active');
    });

    const next_page = document.querySelectorAll(`main article[data-page="${page_id}"]`);
    next_page.forEach(element=>{
        element.classList.add('is-active');
    });
}
 
function changeGradeColors(){
    const Notas=document.querySelectorAll('.main_article_table_std tbody tr td:nth-child(4)');
    Notas.forEach(element => {
        try{
        if(parseInt(element.textContent)<10)
            element.style.color='var(--RED)';
        else
            element.style.color='var(--GREEN)';

        element.style.fontWeight='var(--SEMI-BOLD)';

        }catch(e){
            console.log(e);
        }
    });

}

function back(tab_switchers){


    const btn=document.querySelector(`.top_menu_btn`);
    btn.addEventListener('click',()=>{
        btn.classList.remove('is-active');
        document.querySelector(`.top_menu_welcome`).classList.add('is-active');
        page_id=0;

        for(i =0;i<tab_switchers.length;i++){
            try {
                document.querySelector(`main article[data-page="${i+1}"].is-active`).classList.remove('is-active');
                page_id=i+1;
            } catch (error) {
                console.log(error)
            }
        }

        console.log(page_id)

        if(page_id>=5 && page_id<8){
            document.querySelector(`nav ul li a[data-tab="1"]`).classList.add('is-active');
            document.querySelectorAll(`main article[data-page="1"]`).forEach(element=>{
                element.classList.add('is-active');
            });
            document.querySelector(`main :nth-child(1)`).classList.add('is-active');

        }else if(page_id>=8 && page_id<10){
            document.querySelector(`nav ul li a[data-tab="2"]`).classList.add('is-active');
            document.querySelectorAll(`main article[data-page="2"]`).forEach(element=>{
                element.classList.add('is-active');
            });
            document.querySelector(`main :nth-child(2)`).classList.add('is-active');


        }else if((page_id>=10 && page_id<12 )|| page_id==14){
            document.querySelector(`nav ul li a[data-tab="3"]`).classList.add('is-active');
            document.querySelectorAll(`main article[data-page="3"]`).forEach(element=>{
                element.classList.add('is-active');
            });
            document.querySelector(`main :nth-child(3)`).classList.add('is-active');


        }else if((page_id>=12 && page_id<14) || page_id==15){
            document.querySelector(`nav ul li a[data-tab="4"]`).classList.add('is-active');
            document.querySelectorAll(`main article[data-page="4"]`).forEach(element=>{
                element.classList.add('is-active');
            });
            document.querySelector(`main :nth-child(4)`).classList.add('is-active');

        }

    });
     

  
}

function toggleNavBar(){
    const menu_toggle = document.querySelector('.hamburguer i');
    const sidebar = document.querySelector('nav');
    const btn = document.querySelector('.hamburguer');
    
    const texts = document.querySelectorAll('nav ul li a :nth-child(2)');
    
    menu_toggle.addEventListener('click', () => {
    
        btn.classList.toggle('is-active');
        menu_toggle.classList.toggle('fa-times');
        sidebar.style.transition='width 2s'
    
        sidebar.classList.toggle('is-active');
        texts.forEach(element =>{
            
            element.classList.toggle('is-active1');
    
        });
    
    });
     
}

function copyright(){
    const paragraph = `
    Copyright &copy; ${new Date().getFullYear()} <b> Ricardo Silva </b>
    `;
    
    document.getElementById("copyright").innerHTML = paragraph;
}
 