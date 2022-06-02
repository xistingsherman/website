const container = document.getElementById('container'); //would only select the first if there are multiple
console.log(container);
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const cost = document.getElementById('cost');
const movieSelect = document.getElementById('movie');

populateUI();

let ticketPrice = +movieSelect.value;

function setMovieData(movieIndex, moviePrice){
  localStorage.setItem('selectedMovieIndex',movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

//update total and updateSelectedCount
function updateSelectedCount(){
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  const seatsIndex = [...selectedSeats].map(function(seat){
    return [...seats].indexOf(seat); //this is very useful***
  });

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex)); //convert from array to string
  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  cost.innerText = selectedSeatsCount * ticketPrice;
}

function populateUI(){
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
  if(selectedSeats !== null && selectedSeats.length > 0){
    seats.forEach((seat, index) => {
      if(selectedSeats.indexOf(index) > -1){ //if index does not exist, will return -1
        seat.classList.add('selected');
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

  if(selectedMovieIndex != null){
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

movieSelect.addEventListener('change', (e) => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

container.addEventListener('click', (e) => {
   if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
     console.log(e.target);
     e.target.classList.toggle('selected');
   }
   updateSelectedCount();
});

//// TODO: create reset functionality and fix css
function reset(){
  seats = [];
  count = 0;
  cost = 0;
  setMovieData();
  updateSelectedCount();
}
//initial count and total set
updateSelectedCount();
