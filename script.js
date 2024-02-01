const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");
const dialog = document.getElementById("dialog");
const message = document.getElementById("message");

noButton.addEventListener("click", function() {
  // Generate random coordinates for the dialog box
  const left = Math.random() * (window.innerWidth - 200);
  const top = Math.random() * (window.innerHeight - 200);
  dialog.style.left = left + "px";
  dialog.style.top = top + "px";
});

yesButton.addEventListener("click", function() {
  message.innerText = "Yes, you are dumb! Thank You and Regards";
  message.style.display = "block";
  dialog.style.display = "none";
});

// Show the dialog box when the page loads
dialog.style.display = "block";