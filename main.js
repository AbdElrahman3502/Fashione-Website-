console.log('Hi');

let all = document.getElementById('All');
let first = document.getElementById('First');
let second = document.getElementById('Second');
let third = document.getElementById('Third');
let content = document.querySelector('.section');

all.onclick = () => {
  content.style.height = '1105px';
  all.style.color = '#00B1B0';
  all.style.borderBottom = '2px solid #00B1B0';
  first.style.color = '#000';
  first.style.borderBottom = 'none';
  second.style.color = '#000';
  second.style.borderBottom = 'none';
  third.style.color = '#000';
  third.style.borderBottom = 'none';
}

first.onclick = () => {
  content.style.height = '365px';
  content.scroll(0, 0);
  all.style.color = '#000';
  all.style.borderBottom = 'none';
  first.style.color = '#00B1B0';
  first.style.borderBottom = '2px solid #00B1B0';
  second.style.color = '#000';
  second.style.borderBottom = 'none';
  third.style.color = '#000';
  third.style.borderBottom = 'none';
}

second.onclick = () => {
  content.style.height = '365px';
  content.scrollTo(0, 350);
  all.style.color = '#000';
  all.style.borderBottom = 'none';
  first.style.color = '#000';
  first.style.borderBottom = 'none';
  second.style.color = '#00B1B0';
  second.style.borderBottom = '2px solid #00B1B0';
  third.style.color = '#000';
  third.style.borderBottom = 'none';
}

third.onclick = () => {
  content.style.height = '365px';
  content.scrollTo(0, 750);
  all.style.color = '#000';
  all.style.borderBottom = 'none';
  first.style.color = '#000';
  first.style.borderBottom = 'none';
  second.style.color = '#000';
  second.style.borderBottom = 'none';
  third.style.color = '#00B1B0';
  third.style.borderBottom = '2px solid #00B1B0';
}