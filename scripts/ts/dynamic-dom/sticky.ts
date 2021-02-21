export function sticky() {
  // When the user scrolls the page, execute myFunction

  // Get the header
  var header = document.getElementById("main-menu-container");

  // Get the offset position of the navbar
  if (header) {
    var sticky = header.offsetTop;

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    const myFunction = () => {
      if (header) {
        if (window.pageYOffset > sticky) {
          header.classList.add("sticky");
        } else {
          header.classList.remove("sticky");
        }
      }
    };
  window.onscroll = function () {
    myFunction();
  };
}
}
