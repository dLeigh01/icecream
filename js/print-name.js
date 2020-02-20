var name = prompt("Please enter your name: ");

// name = null;
if (typeof name !== 'null') {
  document.write('<p>' + name + '</p>');
} else {
  document.write('<p>' + ' ' + '</p>');
}