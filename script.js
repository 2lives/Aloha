$("#emailbox").submit(function(event) { 
  event.preventDefault();

if (($("#enteremail").val() == "")){
      alert("Please enter a valid email")

} else {
  alert("Thanks for Subscribing");

    }
  }
);



$('.main-carousel').flickity({
  cellAlign: 'left',
  contain: true,
  autoPlay: true,
  pageDots: false
});

// $('#subbutton').on('click', function(event) {
//   event.preventDefault();
//   if($('#enteremail').val == ""){
//       alert('Please enter a valid email');
//   }
// });

