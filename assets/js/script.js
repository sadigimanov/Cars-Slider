const title = document.getElementById('title');
const explain = document.getElementById('explain');
const carImg = document.getElementById('carImg');

const cars = [{
    title: '2016 Mustang GT, San Francisco, United States',
    explain: 'Published on May 17, 2017',
    photo: 'assets/img/mustang.webp'
},
{
    title: 'Nissan Skyline Gtr R34, Japan',
    explain: 'Published on April 26, 1957',
    photo: 'assets/img/skyline.jpg'
},
{
    title: 'Mazda RX-7 Spirit R, Hiroshima, Japan',
    explain: 'Published on March 3, 2002 ',
    photo: 'assets/img/mazda.jpg'
},
{
    title: 'Bugatti Chiron, Molsheim, France',
    explain: 'Published on May 26, 2016 ',
    photo: 'assets/img/chiron.webp'
},
{
    title: 'Toyota Supra from "The Fast and the Furious"',
    explain: 'Published on Octaber 26, 1994 ',
    photo: 'assets/img/supra.jpg'
},
{
    title: 'Lightning McQueen, United States',
    explain: 'Published on November 26, 2006 ',
    photo: 'assets/img/mcqueen.jpg'
},
];
let count = 0;

function render(index) {
    carImg.src = cars[index].photo;
    title.textContent = cars[index].title;
    explain.textContent = cars[index].explain;

}

function nextBtn() {
    count = (count + 1) % cars.length;
    render(count);
}

function prevBtn() {
    count = (count - 1 + cars.length) % cars.length;
    render(count);
}
