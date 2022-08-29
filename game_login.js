// Create function addUser()
// Get value of user by id player1_name_input and player2_name_input

  // Store these values locally

  //Assign "game_page.html" to window.location
function addUser()
{
  localStorage.getItem("player1_name_input")
  localStorage.getItem("player2_name_input")

localStorage.setItem("player1_name_input", player1_name_input)
localStorage.setItem("player2_name_input", player2_name_input)

  window.location = "game_page.html";
}

