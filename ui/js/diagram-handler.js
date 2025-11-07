document.addEventListener('DOMContentLoaded', function() {
  const diagrams = document.querySelectorAll('.diagram-clickable');
  
  diagrams.forEach(function(diagram) {
    const img = diagram.querySelector('img');
    if (img) {
      diagram.addEventListener('click', function() {
        window.open(img.src, '_blank');
      });
    }
  });
});
