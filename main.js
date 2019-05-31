
let btn = document.querySelector('.switch');


let vertical_road = document.querySelector('.road_vertical');
let vertical_lights = document.querySelectorAll('.lights_vertical');

let horizontal_road = document.querySelector('.road_horizontal');
let horizontal_lights = document.querySelectorAll('.lights_horizontal');

let green_road = '#ABFFAB';
let red_road = '#C95C5C';


let counter = 0;
console.log(counter);

outer: for (let i=0;i<vertical_lights.length;i++) {
    btn.addEventListener('click', function() {
        vertical_lights[i].style.backgroundColor = 'red';
        vertical_road.style.zIndex = '4';
        vertical_road.style.backgroundColor = red_road;

        horizontal_lights[i].style.backgroundColor = 'lime';
        horizontal_road.style.backgroundColor = green_road;
        counter += 1;
        console.log(counter, 'end of outer for loop', i);

        if(vertical_lights[i].style.backgroundColor === 'red') {
            console.log(counter, 'in if', i);
            btn.addEventListener('click', function() {
                vertical_lights[i].style.backgroundColor = 'lime';
                vertical_road.style.zIndex = '6';
                vertical_road.style.backgroundColor = green_road;
        
                horizontal_lights[i].style.backgroundColor = 'red';
                horizontal_road.style.backgroundColor = red_road;
                counter += 1;
                console.log(counter, 'before break', i);
            });
        }
    });
    // i = 0;
    
    // btn.addEventListener('click', function() {
    //     vertical_lights[i].style = 'background-color: lime;'
    //     horizontal_lights[i].style = 'background-color: red;'
    // });
}