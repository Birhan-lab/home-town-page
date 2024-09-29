var dice, rolls, total, item;

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}


dice = [1, 2, 3, 4, 5, 6];
rolls = [];
total = 0;


document.getElementById('button_roll').addEventListener('click', (event) => {
  rolls.push(randomMember(dice));
  let element_list = document.getElementById('list');
  element_list.replaceChildren();
  rolls.forEach((item) => {
    let new_li = document.createElement('li');
    new_li.innerText = item;

    element_list.appendChild(new_li);
  });
  let element_total = document.getElementById('total');
  element_total.innerText = rolls.reduce((a,b) => a+b, 0);
  total = rolls.reduce((a,b) => a+b, 0);
  if (total == 11) {
    let element_info = document.getElementById('info');
    element_info.innerText = 'You won';
  }
  if (total > 11) {
    let element_info2 = document.getElementById('info');
    element_info2.innerText = 'You lost';
  }
  if (total < 11) {
    let element_info3 = document.getElementById('info');
    element_info3.innerText = 'Keep playing';
  }

});

document.getElementById('button_remove').addEventListener('click', (event) => {
  rolls.pop();

});

document.getElementById('button_restart').addEventListener('click', (event) => {
  rolls = [];
  total = 0;
  let element_list2 = document.getElementById('list');
  element_list2.replaceChildren();
  let element_total2 = document.getElementById('total');
  element_total2.innerText = rolls.reduce((a,b) => a+b, 0);

});
