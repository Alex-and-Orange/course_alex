let ctx = document.querySelector("canvas");

//INSTRUMENTAL SIDE//
let isIconNameActive_ = false;
let isIconColorActive_ = false;


//Player
let player = {
    imgPlayer : new Image(), //Инициализация изображения персонажа
    x : 0,      //Положение по X
    y : 0,      //Положение по Y
    speed : 50, //Скорость перемещения
    
    name : '',
    color : '',
    url : ''
}

//Mouse pictures
let mousePictures = [
    'null',
    {name: 'Красный' , url: './image/Mause/Mause1.png'},
    {name: 'Оранжевый' , url: './image/Mause/Mause2.png'},
    {name: 'Желтый' , url: './image/Mause/Mause3.png'},
    {name: 'Зеленый' , url: './image/Mause/Mause4.png'},
    {name: 'Голубой' , url: './image/Mause/Mause5.png'},
    {name: 'Синий' , url: './image/Mause/Mause6.png'},
    {name: 'Фиолетовый' , url: './image/Mause/Mause7.png'},
    {name: 'Белый' , url: './image/Mause/Mause8.png'},
    {name: 'Серый' , url: './image/Mause/Mause9.png'},
    {name: 'Бежевый' , url: './image/Mause/Mause10.png'},

]


//KEYS-EVENTS

addEventListener('keydown', (event) => {
    if(event.keyCode == 13 && isIconNameActive_) {   
        isIconNameActive_ = false;   
        player.name = document.querySelector('.inputName').value; 
        chooseColor();
    }
})


//GAME SIDE//

window.onload = () => {
    if(localStorage.length == 0) { //GAME START
        //START ICONS
        let parrentElement = document.querySelector('#icon');

        let chooseName = document.createElement('div');     //CHOOSE NAME ICON
        chooseName.innerHTML = 'Выберите имя вашего мышонка';

        let inputName = document.createElement('input');    //NAME INPUT
        inputName.className = 'inputName';
        inputName.type = 'text';

        parrentElement.className='gameIcons';
        parrentElement.appendChild(chooseName);
        parrentElement.appendChild(inputName);

        isIconNameActive_ = true;

        console.log('local = 0');
    } else {    //GAME CONTINUE
        console.log('local > 0');

        player.name = localStorage.name;
        player.color = localStorage.color;
        player.imgPlayer.src = localStorage.url;
    }
};


function chooseColor() {
    isIconColorActive_ = true;

    let parrentElement = document.querySelector('.gameIcons');
    parrentElement.innerHTML = '';
    
    let chooseColorText = document.createElement('div')
    chooseColorText.innerHTML = 'Выберите цвет вашего мышонка'
    
    parrentElement.appendChild(chooseColorText);
    
    let selectMenu = document.createElement('select');
    
    for(let i = 1; i < 11; i++) {
        let optionMenu = document.createElement('option')
        optionMenu.text = mousePictures[i].name;
        selectMenu.appendChild(optionMenu);
    }

    parrentElement.appendChild(selectMenu);

    let buttonSelectColor = document.createElement('input');
    buttonSelectColor.type = 'button';
    buttonSelectColor.value = 'Играть!';
    buttonSelectColor.onclick = () => {

        isIconColorActive_ = false;
        player.color = document.querySelector('select').value;

        for(let i = 1; i < 11; i++) {
            if(mousePictures[i].name == player.color){
                player.imgPlayer.src = mousePictures[i].url;
                player.url = mousePictures[i].url;
                break;
            }
        }
        
        setStorage();
        start();

    };

    parrentElement.appendChild(buttonSelectColor);
}

function setStorage() {
    localStorage.setItem('name',player.name);
    localStorage.setItem('color',player.color); 
    localStorage.setItem('url', player.url);  
}


// GAME STARTS

function start() {
    document.querySelector('#icon').remove(); 
    

}


