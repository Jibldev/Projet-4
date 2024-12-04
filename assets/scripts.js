$(document).ready(function() {
    $('.gallery').mauGallery({
        columns: {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 3
        },
        lightBox: true,
        lightboxId: 'myAwesomeLightbox',
        showTags: true,
        tagsPosition: 'top'
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('#carouselExampleIndicators');
    
    // Charger l'image du slide actif au chargement de la page
    const initialActiveSlide = carousel.querySelector('.carousel-item.active img');
    if (initialActiveSlide) {
      initialActiveSlide.setAttribute('src', initialActiveSlide.dataset.src);
      initialActiveSlide.setAttribute('srcset', initialActiveSlide.dataset.srcset);
      initialActiveSlide.dataset.loaded = true;
    }
  
    // Charger les images quand le slide change
    carousel.addEventListener('slide.bs.carousel', function(event) {
      const nextSlide = event.relatedTarget;
      const img = nextSlide.querySelector('img');
  
      if (!img.dataset.loaded) {
        img.setAttribute('src', img.dataset.src);
        img.setAttribute('srcset', img.dataset.srcset);
        img.dataset.loaded = true;
      }
    });
  });