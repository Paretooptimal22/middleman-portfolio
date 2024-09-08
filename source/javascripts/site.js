document.addEventListener('DOMContentLoaded', function() {
  const keywords = ['Kevin', 'web developer', 'Tokyo', "Le Wagon's Web Development Bootcamp", 'front-end opportunities in Japan'];

  function highlightKeywords() {
    const aboutMeElement = document.getElementById('about');
    if (aboutMeElement) {  // Check if the element exists
      let aboutMeText = aboutMeElement.innerHTML;

      keywords.forEach(keyword => {
        const regex = new RegExp(`(${keyword})`, 'gi');
        aboutMeText = aboutMeText.replace(regex, '<span class="highlight">$1</span>');
      });

      aboutMeElement.innerHTML = aboutMeText;

      // Delay adding the .highlight-active class to trigger the animation
      setTimeout(() => {
        const highlightedElements = document.querySelectorAll('.highlight');
        highlightedElements.forEach(element => {
          element.classList.add('highlight-active');
        });
      }, 100); // Add a slight delay to ensure the DOM has updated
    }
  }

  // Call the function to highlight keywords
  highlightKeywords();
});
