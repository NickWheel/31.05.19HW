
let btn = document.querySelector('.switch');

let vertical_road = document.querySelector('.road_vertical');
let vertical_lights = document.querySelectorAll('.lights_vertical');

let horizontal_road = document.querySelector('.road_horizontal');
let horizontal_lights = document.querySelectorAll('.lights_horizontal');

let green_road = '#ABFFAB';
let red_road = '#C95C5C';


for (let i=0;i<vertical_lights.length;i++) {
    btn.addEventListener('click', function() {
        if(vertical_lights[i].style.backgroundColor === 'red') {
            vertical_lights[i].style.backgroundColor = 'lime';
            vertical_road.style.zIndex = '6';
            vertical_road.style.backgroundColor = green_road;

            horizontal_lights[i].style.backgroundColor = 'red';
            horizontal_road.style.backgroundColor = red_road;

        }
        else {
            vertical_lights[i].style.backgroundColor = 'red';
            vertical_road.style.zIndex = '4';
            vertical_road.style.backgroundColor = red_road;

            horizontal_lights[i].style.backgroundColor = 'lime';
            horizontal_road.style.backgroundColor = green_road;
        }
    });
}