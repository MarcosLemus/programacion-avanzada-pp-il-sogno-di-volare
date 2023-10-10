const civilAircrafts = [
    'assets/avion-civil-1.jpg',
    'assets/avion-civil-2.jpg',
    'assets/avion-civil-3.jpg',
    'assets/avion-civil-4.jpg',
    'assets/avion-civil-5.jpg'
];

const militaryAircrafts = [
    'assets/avion-militar-1.jpg',
    'assets/avion-militar-2.jpg',
    'assets/avion-militar-3.jpg',
    'assets/avion-militar-4.jpg',
    'assets/avion-militar-5.jpg'
];

const civilHelicopters = [
    'assets/helicoptero-civil-1.jpg',
    'assets/helicoptero-civil-2.jpg',
    'assets/helicoptero-civil-3.jpg',
    'assets/helicoptero-civil-4.jpg',
    'assets/helicoptero-civil-5.jpg'
];

const militaryHelicopter = [
    'assets/helicoptero-militar-1.jpg',
    'assets/helicoptero-militar-2.jpg',
    'assets/helicoptero-militar-3.jpg',
    'assets/helicoptero-militar-4.jpg',
    'assets/helicoptero-militar-5.jpg'
];

class Gallery {
    constructor(civilImages, militaryImages) {
        this.civilImages = civilImages;
        this.militaryImages = militaryImages;
    }
    
    getRandomCivil() {
        const randomIndex = Math.floor(this.civilImages.length * Math.random())

        return this.civilImages[randomIndex];
    }

    
    
    getRandomMilitary() {
        const randomIndex = Math.floor(this.militaryImages.length * Math.random())
        
        return this.militaryImages[randomIndex];
    }
    
    getAll() {
        return this.civilImages.concat(this.militaryImages)
    }
}


class Painter {
    constructor() {
        this.createGallery();
    }

    createGallery() {
        const body = document.querySelector('body')
        const sectionDOMEL = document.createElement('section')
        
        body.appendChild(sectionDOMEL);

        this.gallery = sectionDOMEL;
        
    }

    createImageTag(imageUrl) {
        const pictureDOMEL = document.createElement('picture')
        const imgDOMEL = document.createElement('img')
        imgDOMEL.src = imageUrl;
        pictureDOMEL.appendChild(imgDOMEL)
    
        return pictureDOMEL;
        
    }

    paintSingleImage(imageUrl) {
        const img = this.createImageTag(imageUrl);
        this.gallery.appendChild(img)
    }

    paintMultipleImages(arrayOfImages) {
        this.gallery.innerHTML = ''

        arrayOfImages.forEach(images => {
            this.paintSingleImage(images)
        });
    }
}

const aircrafts = new Gallery(civilAircrafts, militaryAircrafts);

console.log(aircrafts);
const helicopters = new Gallery(civilHelicopters, militaryHelicopter);
const painter = new Painter();

