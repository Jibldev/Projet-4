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

    // Code ajouté pour le carousel
    const carousel = document.querySelector('#carouselExampleIndicators');
    if (carousel) {
        carousel.addEventListener('slid.bs.carousel', function () {
            const activeImg = document.querySelector('.carousel-item.active img');
            const src = activeImg.src;
            activeImg.src = ''; // Efface temporairement la source
            activeImg.src = src; // Recharge l'image avec le bon `srcset`
        });
    }
});