import "./slider";
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import checkNumInputs from './modules/checkNumInputs';
import timer from './modules/timer';
import images from './modules/images';

window.addEventListener('DOMContentLoaded', () => {// scripts will work after loading of page/
    "use strict";

    let modalState = {}; // состояние нашего модального окна
    let deadline = '2022-02-22';

 

    changeModalState(modalState);
    modals();
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click'); // if decoration content has same div we should write this
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block'); // прямые наследники > img
    forms(modalState); 
    timer('.container1', deadline);
    images();
}); 


