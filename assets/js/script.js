const title = document.getElementById('title');
const explain = document.getElementById('explain');
const carImg = document.getElementById('carImg');

const cars = [{
    title: '2016 Mustang GT, San Francisco, United States',
    explain: 'Published on May 17, 2017',
    photo: 'mustang.webp'
},
{
    title: 'Nissan Skyline Gtr R34, Japan',
    explain: 'Published on April 26, 1957',
    photo: 'skyline.jpg'
},
{
    title: 'Mazda RX-7 Spirit R, Hiroshima, Japan',
    explain: 'Published on March 3, 2002 ',
    photo: 'mazda.jpg'
},
{
    title: 'Bugatti Chiron, Molsheim, France',
    explain: 'Published on May 26, 2016 ',
    photo: 'chiron.webp'
},
{
    title: 'Toyota Supra from "The Fast and the Furious"',
    explain: 'Published on Octaber 26, 1994 ',
    photo: 'supra.jpg'
},
{
    title: 'Lightning McQueen, United States',
    explain: 'Published on November 26, 2006 ',
    photo: 'mcqueen.jpg'
},
];
let count = 0;

function render(index) {
    const carIndex = cars[index]
    carImg.src = `./assets/img/${carIndex.photo}`;
    title.textContent = carIndex.title;
    explain.textContent = carIndex.explain;
};

function nextBtn() {
    count++;
    if (count === cars.length) count = 0;
    render(count);
};

function prevBtn() {
    count--;
    if (count < 0) count = cars.length - 1;
    render(count);
};
