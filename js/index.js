import { preloadImages } from './utils.js';
import MenuController from './menuController.js';

// Preload  images and fonts
Promise.all([preloadImages('.gallery__figure-img')]).then(() => {
   
    // LEAVE THIS HERE FOR OUR LOADER
    // Remove loader (loading class)
    document.body.classList.remove('loading');

    // Initialize the MenuController
    new MenuController(document.querySelector('.menu'));

});