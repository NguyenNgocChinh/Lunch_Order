$(document).ready(function () {
  console.log('ready!');
});

function copyText(textToCopy) {
  if (!textToCopy) return;
  // Create a temporary textarea element
  const textarea = document.createElement('textarea');
  textarea.value = textToCopy;
  document.body.appendChild(textarea);

  // Select the text in the textarea
  textarea.select();
  textarea.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text to the clipboard
  document.execCommand('copy');

  // Remove the temporary textarea
  document.body.removeChild(textarea);
}
