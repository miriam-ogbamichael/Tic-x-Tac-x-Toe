
const store = require('../store')

// const switchPlayer = function () {
//   console.log('in switch player')
//   if (store.currentPlayer === 'X') {
//     store.currentPlayer = 'O'
//   } else {
//     store.currentPlayer = 'X'
//   }
// }
//
// const checkForWinner = function () {
//   console.log('board is', store.board)
//   // if all elements in top row are equal and NOT AN EMPTY STRING
//   if (store.board[0] === store.board[1]
//     && store.board[1] === store.board[2]
//     && store.board[0] !== '')
//         console.log('first row wins')
//         return
//       }
//
//   if ((store.board[3] === store.board[4]
//     && store.board[4] === store.board[5]
//     && store.board[3] !== '')
//     //  console.log('second row wins')
//     //  return


// module.exports = {
//   switchPlayer,
//   checkForWinner
// }
// $(() => {
//   let currentPlayer = 'x' // Makes the x be the first move
//
//   const onBoxClick = (event) => { // event handler for when box is clicked
//     console.log('click')
//
//     const box = $(event.target) // specifically selects the box player clicks
//
//     box.css('background', 'transparent').text(currentPlayer)
//
//     currentPlayer = currentPlayer === '0' ? 'x' : '0'
//     // Interchangable current players
//   }
//
//   $('.box').on('click', onBoxClick)
//   // Put an event listener on all the boxes that when any of the boxes are
//   // clicked, the 'onBoxClick' eventhandler is called upon.
// })
