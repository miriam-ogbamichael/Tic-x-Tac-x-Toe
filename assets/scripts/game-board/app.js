
$(() => {
  let currentPlayer = 'x' // Makes the x be the first move

  const onBoxClick = (event) => { // event handler for when box is clicked
    console.log('click')

    const box = $(event.target) // specifically selects the box player clicks

    box.css('background', 'transparent').text(currentPlayer)

    currentPlayer = currentPlayer === '0' ? 'x' : '0'
    // Interchangable current players
  }

  $('.box').on('click', onBoxClick)
  // Put an event listener on all the boxes that when any of the boxes are
  // clicked, the 'onBoxClick' eventhandler is called upon.
})
