$(function () {
  // code to add a listener for click events on the save button. This code uses
  // the id in the containing time-block as a key to save the user input in
  // local storage.

  var timeblocks = $('.time-block');

  for(var timeblock of timeblocks) {
    var slot = $('#' + timeblock.id);
    slot.children('button').on('click', function(event){
      var currentId = $(this).parent().attr('id');
      var todo = $('#' + currentId).children('textarea').val();
      localStorage.setItem(currentId, todo);
    });
  }
  //
  // code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour using the id
  // attribute of each time-block and conditionally adding the
  // past, present, and future classes to the time blocks. Day.js was used to get the
  // current hour in 24-hour time.

  var currentHour = Number(dayjs().format('HH'));

  for(var slot of timeblocks) {
    var entry = $('#' + slot.id);
    currentHour < entry.attr('id').split('-')[1] ? entry.addClass('future')  // code to use 'split' method inspired by instructor
    : currentHour > entry.attr('id').split('-')[1] ?  entry.addClass('past') 
    : entry.addClass('present'); 
  }

  // code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements using the id
  // attribute of each time-block.
  var entries = $('textarea');
  for(var entry of entries) {
    var key = $(entry).parent().attr('id');
    $('#' + key).children('textarea').val(localStorage.getItem(key));
  }

  // code to display the current date in the header of the page.
  var currentDay = $('#currentDay');
  currentDay.text(dayjs().format('MMM D, YYYY'));
});
