$(document).ready(function ($) {
    "use strict";


    var book_table = new Swiper(".book-table-img-slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 2000,
        effect: "coverflow",
        coverflowEffect: {
            rotate: 3,
            stretch: 2,
            depth: 100,
            modifier: 5,
            slideShadows: false,
        },
        loopAdditionSlides: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    var team_slider = new Swiper(".team-slider", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 2000,

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1.2,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            },
        },
    });

    jQuery(".filters").on("click", function () {
        jQuery("#menu-dish").removeClass("bydefault_show");
    });
    $(function () {
        var filterList = {
            init: function () {
                $("#menu-dish").mixItUp({
                    selectors: {
                        target: ".dish-box-wp",
                        filter: ".filter",
                    },
                    animation: {
                        effects: "fade",
                        easing: "ease-in-out",
                    },
                    load: {
                        filter: ".all, .breakfast, .lunch, .dinner",
                    },
                });
            },
        };
        filterList.init();
    });

    jQuery(".menu-toggle").click(function () {
        jQuery(".main-navigation").toggleClass("toggled");
    });

    jQuery(".header-menu ul li a").click(function () {
        jQuery(".main-navigation").removeClass("toggled");
    });

    gsap.registerPlugin(ScrollTrigger);

    var elementFirst = document.querySelector('.site-header');
    ScrollTrigger.create({
        trigger: "body",
        start: "30px top",
        end: "bottom bottom",

        onEnter: () => myFunction(),
        onLeaveBack: () => myFunction(),
    });

    function myFunction() {
        elementFirst.classList.toggle('sticky_head');
    }

    var scene = $(".js-parallax-scene").get(0);
    var parallaxInstance = new Parallax(scene);


});


jQuery(window).on('load', function () {
    $('body').removeClass('body-fixed');

    //activating tab of filter
    let targets = document.querySelectorAll(".filter");
    let activeTab = 0;
    let old = 0;
    let dur = 0.4;
    let animation;

    for (let i = 0; i < targets.length; i++) {
        targets[i].index = i;
        targets[i].addEventListener("click", moveBar);
    }

    // initial position on first === All 
    gsap.set(".filter-active", {
        x: targets[0].offsetLeft,
        width: targets[0].offsetWidth
    });

    function moveBar() {
        if (this.index != activeTab) {
            if (animation && animation.isActive()) {
                animation.progress(1);
            }
            animation = gsap.timeline({
                defaults: {
                    duration: 0.4
                }
            });
            old = activeTab;
            activeTab = this.index;
            animation.to(".filter-active", {
                x: targets[activeTab].offsetLeft,
                width: targets[activeTab].offsetWidth
            });

            animation.to(targets[old], {
                color: "#0d0d25",
                ease: "none"
            }, 0);
            animation.to(targets[activeTab], {
                color: "#fff",
                ease: "none"
            }, 0);

        }

    }
});
// Base de datos de recetas
const recipes = {
    1: {
        title: "Lasagna de Carne",
        image: "assets/images/lasagna.jpg",
        description: "Una deliciosa lasagna casera con capas de pasta, carne jugosa y una mezcla de quesos cremosos que se derrite en tu boca.",
       ingredients: [
        "500g de carne molida",
        "1 cebolla picada",
        "2 dientes de ajo picados",
        "1 tomate grande picado o 1/2 taza de puré de tomate",
        "1 sobrecito de extracto de tomate (opcional)",
        "1 paquete de masa para lasaña (precocida si es posible)",
        "300g de queso rallado (mozzarella o queso Paraguay)",
        "2 cucharadas de aceite",
        "Sal y pimienta al gusto",
        "Orégano o comino (opcional)",
        "Un chorrito de leche o crema"
    ],
    instructions: [
        "Calentar el aceite en una olla y sofreír la cebolla y el ajo hasta que estén doraditos.",
        "Agregar la carne molida y cocinar bien, moviendo para que no se formen grumos.",
        "Añadir el tomate, el extracto (si se usa), sal, pimienta y orégano o comino. Agregar un chorrito de leche o crema para suavizar.",
        "Cocinar unos 10 minutos a fuego medio.",
        "En una fuente para horno, poner una capa de salsa, luego masa, carne, queso y repetir.",
        "Terminar con una capa de queso encima.",
        "Hornear a 180°C por 25-30 minutos hasta que el queso se derrita y se dore.",
        "Dejar reposar unos minutos antes de servir."
        ]
    },
    2: {
        title: "Onigiri Tradicional",
        image: "assets/images/onigirii.jpg",
        description: "Bolas de arroz japonés rellenas con ingredientes tradicionales, perfectas como snack o acompañamiento.",
         ingredients: [
        "2 tazas de arroz blanco cocido (tipo común)",
        "1 3/4 tazas de agua",
        "Sal al gusto",
        "Relleno a gusto (atún con mayonesa, pollo desmenuzado o jamón con queso)",
        "Un poco de aceite o manteca para darle sabor",
        "Tiritas de lechuga o jamón para envolver (opcional)"
    ],
    instructions: [
        "Lavar el arroz y cocinarlo con el agua hasta que quede tierno y un poco pegajoso.",
        "Dejar enfriar un poco para poder manipularlo sin quemarse.",
        "Mezclar el arroz con una pizca de sal y un chorrito de aceite o manteca si se desea.",
        "Mojarse las manos con agua para que no se pegue el arroz.",
        "Tomar una porción de arroz, hacer un huequito y colocar el relleno elegido.",
        "Cubrir con más arroz y formar bolitas o triángulos suaves con las manos.",
        "Si se quiere, envolver con una tirita de jamón o lechuga para decorar.",
        "Servir tibio o frío, ideal como merienda o acompañamiento."
    ]
    },
    3: {
        title: "Ensalada César Clásica",
        image: "assets/images/ensalada-cesar.jpg",
        description: " Una ensalada fresca y fácil, con lechuga, pan tostado, queso rallado y un aderezo casero suave.",
        ingredients: [
        "1 lechuga criolla o romana lavada y picada",
        "1 taza de pan tostado en cubitos",
        "100g de queso rallado (tipo Paraguay o el que tengas)",
        "Para el aderezo:",
        "3 cucharadas de mayonesa",
        "1 cucharada de jugo de limón",
        "1 diente de ajo picado",
        "1 chorrito de aceite",
        "Sal y pimienta al gusto"
    ],
    instructions: [
        "Lavar y picar la lechuga, luego dejar escurrir bien.",
        "Tostar el pan en sartén o horno hasta que quede crocante.",
        "En un bowl, mezclar la mayonesa, el jugo de limón, el ajo picado, el aceite, sal y pimienta hasta formar un aderezo suave.",
        "En una ensaladera, combinar la lechuga con el aderezo y mezclar bien.",
        "Agregar los cubitos de pan tostado y el queso rallado por encima.",
        "Servir enseguida para que el pan se mantenga crocante."
    ]
    },
    4: {
        title: "Desmechado de pollo",
        image: "assets/images/pollo.jpg",
        description: "Pechugas de pollo jugosas y tiernas marinadas con hierbas aromáticas y especias.",
        ingredients: [
        "2 pechugas de pollo",
        "1 cebolla picada",
        "2 dientes de ajo picados",
        "1 tomate picado",
        "1/2 morrón picado",
        "1 cucharada de aceite",
        "1/2 taza de caldo o agua",
        "Sal y pimienta al gusto",
        "Un poco de comino o orégano (opcional)"
    ],
    instructions: [
        "Cocinar las pechugas de pollo en agua con sal hasta que estén tiernas. Luego escurrir y desmenuzar con un tenedor.",
        "En una sartén, calentar el aceite y sofreír la cebolla, el ajo, el tomate y el morrón hasta que estén blandos.",
        "Agregar el pollo desmenuzado y mezclar bien.",
        "Incorporar el caldo o agua y condimentar con sal, pimienta y comino o orégano al gusto.",
        "Cocinar unos minutos más hasta que el líquido se reduzca y el pollo quede jugoso.",
        "Servir caliente o usar como relleno en empanadas, sándwiches o platos con arroz."
    ]
    },
    5: {
        title: "Wrap de pollo",
        image: "assets/images/wrap.jpg",
          description: "Un wrap fresco y sabroso con pollo desmechado, verduras crocantes y una salsa cremosa.",
        ingredients: [
        "2 pechugas de pollo cocidas y desmenuzadas",
        "4 tortillas de harina grandes",
        "1 tomate picado",
        "1/2 cebolla picada",
        "1 hoja de lechuga por wrap",
        "1/2 taza de mayonesa o crema",
        "Jugo de medio limón",
        "Sal y pimienta al gusto",
        "Un chorrito de aceite",
        "Queso rallado o en fetas (opcional)"
    ],
    instructions: [
        "Cocinar las pechugas de pollo en agua con sal hasta que estén tiernas, luego desmenuzar.",
        "En una sartén, calentar un poco de aceite y saltear la cebolla y el tomate por unos minutos.",
        "Agregar el pollo desmenuzado, salpimentar y cocinar 5 minutos más para que tome sabor.",
        "En un bowl pequeño, mezclar la mayonesa con el jugo de limón para hacer la salsa.",
        "Calentar las tortillas unos segundos en una sartén o microondas para que estén flexibles.",
        "Colocar una hoja de lechuga sobre cada tortilla, luego el pollo, el queso y un poco de salsa.",
        "Enrollar bien cada wrap, doblando los extremos para que no se salga el relleno.",
        "Servir tibios o fríos, acompañados con más salsa si se desea."
    ]
    },
    6: {
        title: "Onigiri de Salmón",
        image: "assets/images/onigirii.jpg",
        description: "Onigiri relleno de salmón a la plancha con un toque de salsa de soja y sésamo.",
        ingredients: [
            "2 tazas de arroz japonés de grano corto",
            "2 1/4 tazas de agua",
            "200g de filete de salmón fresco",
            "2 cucharadas de salsa de soja",
            "1 cucharada de mirin",
            "1 cucharadita de azúcar",
            "2 cucharadas de sésamo tostado",
            "Hojas de alga nori cortadas en tiras",
            "Sal para las manos"
        ],
        instructions: [
            "Cocinar el arroz según las instrucciones básicas para onigiri.",
            "Mientras se cocina el arroz, preparar el salmón.",
            "Mezclar la salsa de soja, mirin y azúcar en un bowl pequeño.",
            "Cocinar el salmón a la plancha o en el horno hasta que esté bien cocido.",
            "Desmenuzar el salmón y mezclar con la salsa de soja preparada.",
            "Una vez que el arroz esté cocido y sazonado, dejar enfriar a temperatura ambiente.",
            "Mojar las manos con agua ligeramente salada.",
            "Tomar una porción de arroz, hacer un hueco en el centro y colocar una cucharada de la mezcla de salmón.",
            "Cubrir con más arroz y formar triángulos compactos pero suaves.",
            "Envolver la base con una tira de alga nori.",
            "Espolvorear con sésamo tostado por encima.",
            "Servir inmediatamente o refrigerar para llevar."
        ]
    },
   
};

// Variables globales
let currentRecipeId = null;
let currentSlideIndex = 0;
let totalSlides = 0;
let bookTableSlider = null;

// Función para mostrar una receta
function showRecipe(recipeId) {
    const recipe = recipes[recipeId];
    if (!recipe) return;
    
    currentRecipeId = recipeId;
    
    // Actualizar el contenido del modal
    document.getElementById('recipeImage').src = recipe.image;
    document.getElementById('recipeImage').alt = recipe.title;
    document.getElementById('recipeTitle').textContent = recipe.title;
    document.getElementById('recipeDescription').textContent = recipe.description;
    
    // Actualizar ingredientes
    const ingredientsContainer = document.getElementById('recipeIngredients');
    ingredientsContainer.innerHTML = '';
    const ingredientsList = document.createElement('ul');
    recipe.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });
    ingredientsContainer.appendChild(ingredientsList);
    
    // Actualizar instrucciones
    const instructionsContainer = document.getElementById('recipeInstructions');
    instructionsContainer.innerHTML = '';
    const instructionsList = document.createElement('ol');
    recipe.instructions.forEach(instruction => {
        const li = document.createElement('li');
        li.textContent = instruction;
        instructionsList.appendChild(li);
    });
    instructionsContainer.appendChild(instructionsList);
    
    // Actualizar navegación
    updateNavigation();
    
    // Mostrar el modal
    document.getElementById('recipeModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Función para cerrar el modal
function closeRecipeModal() {
    document.getElementById('recipeModal').style.display = 'none';
    document.body.style.overflow = 'auto';
    currentRecipeId = null;
}

// Función para navegar entre recetas
function navigateRecipe(direction) {
    if (!currentRecipeId) return;
    
    const currentIndex = parseInt(currentRecipeId);
    let newIndex = currentIndex + direction;
    
    // Manejar los límites
    if (newIndex < 1) newIndex = 8;
    if (newIndex > 8) newIndex = 1;
    
    showRecipe(newIndex.toString());
    
    // Actualizar el slider para que coincida con la receta mostrada
    if (bookTableSlider) {
        const slideIndex = newIndex - 1; 
        bookTableSlider.slideTo(slideIndex);
    }
}

// Función para actualizar los botones de navegación
function updateNavigation() {
    const prevBtn = document.getElementById('recipePrev');
    const nextBtn = document.getElementById('recipeNext');
    
    prevBtn.disabled = false;
    nextBtn.disabled = false;
}

// Inicialización cuando el documento está listo
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar el slider de recetas
    bookTableSlider = new Swiper(".book-table-img-slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        speed: 600,
        effect: "coverflow",
        coverflowEffect: {
            rotate: 3,
            stretch: 2,
            depth: 100,
            modifier: 5,
            slideShadows: false,
        },
        loopAdditionSlides: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        on: {
            init: function() {
                totalSlides = this.slides.length;
            }
        }
    });
    
    // Agregar event listeners a las slides
    document.querySelectorAll('.recipe-slide').forEach(slide => {
        slide.addEventListener('click', function() {
            const recipeId = this.getAttribute('data-recipe-id');
            showRecipe(recipeId);
        });
    });
    
    // Event listeners para el modal
    document.getElementById('recipeClose').addEventListener('click', closeRecipeModal);
    document.getElementById('recipePrev').addEventListener('click', () => navigateRecipe(-1));
    document.getElementById('recipeNext').addEventListener('click', () => navigateRecipe(1));
    
    // Cerrar modal al hacer clic fuera del contenido
    document.getElementById('recipeModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeRecipeModal();
        }
    });
    
    // Cerrar modal con la tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && document.getElementById('recipeModal').style.display === 'flex') {
            closeRecipeModal();
        }
    });
    
    // Agregar efecto de hover mejorado a las slides
    document.querySelectorAll('.recipe-slide').forEach(slide => {
        slide.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        slide.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

function getCurrentRecipe() {
    return currentRecipeId ? recipes[currentRecipeId] : null;
}

function getAllRecipes() {
    return recipes;
}