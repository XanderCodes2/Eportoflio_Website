// ... (previous JavaScript code)

commentForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = nameInput.value;
  const comment = commentInput.value;
  const currentDate = new Date(); // Get current date and time

  // Adjust to the user's timezone
  const userTime = currentDate.toLocaleString(undefined, {
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
  });

  const newComment = document.createElement('div');
  newComment.classList.add('comment');
  newComment.innerHTML = `<p><strong>${name}</strong> - ${userTime}</p><p>${comment}</p>`;

  commentsList.appendChild(newComment); // Append the new comment to commentsList

  nameInput.value = '';
  commentInput.value = '';
});
