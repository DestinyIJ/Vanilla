var GalleryCenter = document.getElementById("GalleryCenter")

console.log(GalleryCenter)
var count = 0

window.addEventListener("wheel", function (e) {
    if(e.deltaY < 0) {
        count -= 10
  
    } else if (e.deltaY > 0) {
        count += 10
    }

    GalleryCenter.style.transform = `translate(-50%, -50%) perspective(1000px) rotateY(${count}deg)`
})


window.addEventListener('scroll', function(event) {
  // Get the current scroll position
  const currentScrollPos = window.scrollY;

  // Check if the current scroll position is greater than the previous scroll position
  if (currentScrollPos > this.previousScrollPos) {
    // Scrolling down
    count -= 10;
  } else {
    // Scrolling up
    count += 10;
  }

  // Update the previous scroll position
  this.previousScrollPos = currentScrollPos;

  GalleryCenter.style.transform = `translate(-50%, -50%) perspective(1000px) rotateY(${count}deg)`
});

window.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
        count -= 10;
    } else if (event.key === 'ArrowLeft') {
      // Left arrow key is pressed
      count += 10;
    }
  
    
  GalleryCenter.style.transform = `translate(-50%, -50%) perspective(1000px) rotateY(${count}deg)`
  });

