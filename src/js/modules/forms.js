import checkNumInputs from "./checkNumInputs";

const forms = (state) => { // здесь говорим что приходит тоже state
    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'); // we call all input for clearing after sending form.
       
    checkNumInputs('input[name="user_phone"]');
    

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжимся',
        failure: 'Что-то пошло не так'
    };

    const postData = async (url, data) => { // чтобы JS не пошел дальше а ждал запрос от сервера.
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, { // в res будет записаться промис который вернется из сервера т.е результат
            method: "POST",
            body: data
        });

        return await res.text(); //здесь наш php сервер тоже текстовый поэтому так пишем.
    };

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    };

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMEssage = document.createElement('div');
            statusMEssage.classList.add('status');
            item.appendChild(statusMEssage);


            const formData = new FormData(item);
            if (item.getAttribute('data-calc') === 'end') {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }

            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    statusMEssage.textContent = message.success;
                })
                .catch(() => statusMEssage.textContent = message.failure)
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMEssage.remove();
                    }, 5000);
                });
        });
    });
 };

export default forms;