var ctx = document.getElementById('line-chart').getContext('2d');

//turtle
var one = new Image();
one.src = 'imgs/animal-02.png';
//stingray
var two = new Image();
two.src = 'imgs/animal-10.png';
//humpback whale
var three = new Image();
three.src = 'imgs/animal-09.png';
//great white shark
var four = new Image();
four.src = 'imgs/animal-08.png';
//dolphin
var five = new Image();
five.src = 'imgs/animal-07.png';
//diver
var six = new Image();
six.src = 'imgs/animal-06.png';
//sperm whale
var seven = new Image();
seven.src = 'imgs/animal-05.png';
//goblin
var eight = new Image();
eight.src = 'imgs/animal-04.png';
// gp octopus
var nine = new Image();
nine.src = 'imgs/animal-03.png';
//dumbo
var ten = new Image();
ten.src = 'imgs/animal-01.png';
//megamouth
var eleven = new Image();
eleven.src = 'imgs/animal-11.png';

var myChart = new Chart(ctx, {

    data: {
        labels: ['Green Sea Turtle', 'Stingray', 'Great White Shark', 'Giant Pacific Octopus', 'Deepest Human Dive','Megamouth shark', 'Sperm Whales', 'Humpback Whale','Goblin Shark', 'Bottlenose Dolphin','Dumbo Octopus'],
        datasets: [{
            type: 'line',
            // minBarLength: 0,
            // maxBarThickness: 20,
            label: 'Depth (M)',
            borderColor: ['rgba(220, 220, 220, 0)'],
            pointRadius: 100,
            pointHoverRadius: 100,
            pointStyle: [one, two, four, nine, six, eleven, seven, three, eight, five, ten],
            // pointStyle: one,
            data: [-17, -54, -200, -1500, -332, -4600, -920, -100, -1300, -285, -4000],

        },
        {
          label: {strokeStyle: 'rgba(220, 220, 220, 0)'},
          type: 'bar',
          label: ' ',
          data: [-17, -54, -200, -1500, -332, -4600, -920, -100, -1300, -285, -4000],
            backgroundColor: [
                'rgba(220, 220, 220, .5)'
            ],
            hoverBackgroundColor: ['rgba(255, 255, 255, .75)'
          ],
          hoverBorderRadius: 25,
          maxBarThickness: 20,

        }

      ]
    },
    options: {
      maintainAspectRatio: false,
    }
});
