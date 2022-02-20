import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => { //state is declared in global
    const  windowForm = document.querySelectorAll('.balcon_icons_img'),
            windowWidth = document.querySelectorAll('#width'),
            windowHeight = document.querySelectorAll('#height'),
            windowType = document.querySelectorAll('#view_type'),
            windowProfile = document.querySelectorAll('.checkbox');

    checkNumInputs('#width');
    checkNumInputs('#height');
    function bindActionToElems (event, elem, prop) {
        elem.forEach((item, i) => { 
            item.addEventListener(event, () => { 
                switch (item.nodeName) {
                    case 'SPAN' :
                        state[prop] = i;
                        break;
                    case 'INPUT':
                        if (item.getAttribute('type') === 'checkbox') { // из-за того что атрибуты несколько задаем еще одно условие
                           i === 0 ? state[prop] = "Холодно" : state[prop] = "Теплое"; // надо что пользователь должен нажать на один чекбокс
                           elem.forEach((box, j) => {
                               box.checked = false;
                               if  (i == j) {
                                   box.checked = true;
                               }
                           });
                        } else {
                            state[prop] = item.value;
                        }
                        break;

                    case 'SELECT':
                        state[prop] = item.value;
                        break;


                }

                
            });
    
        });
    }
    // function bindActionToElems (event, elem, prop) {
    //     elem.forEach((item, i) => { // при клике сюда мы получаем объект и записываем в state, то есть при клике на первую записывается один и при клике на последнюю записывается 4, elem каждый элемент 
    //         item.addEventListener(event, () => {
    //             if (elem.length > 1) {
    //                 state[prop] = i; 
    //             } else {
    //                 state[prop] = item.value; //валуе это значение которое мы можем вытащить с инпута
    //             } //в маин есть модал стате в котором изначально ничего нет когда мы кликаем в определнное значение, у нас в объекте state которое указано наверху, создается новая поля form, чтобы запомнить на какую форму кликнул пользователь я сюда передаю I, и он приходит с этой же callback функции.
    //             console.log(state)
    //         });
    
    //     });
    // }
    bindActionToElems('click', windowForm, 'form');
    bindActionToElems('input', windowHeight, 'height');
    bindActionToElems('input', windowWidth, 'width');
    bindActionToElems('change', windowType, 'type');
    bindActionToElems('change', windowProfile, 'profile');
};

export default changeModalState;        