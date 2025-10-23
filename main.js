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

// <!-- Script del buscador -->
class ProductSearch {
    constructor() {
        this.products = [];
        this.init();
    }

    init() {
        this.loadProducts();
        this.setupEventListeners();
    }

    // NUEVA FUNCIÓN: Cerrar resultados de búsqueda
closeSearchResults() {
    this.hideResults();
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.value = ''; // Opcional: limpiar el input
    }
}

    loadProducts() {
        // Obtener todos los productos de la página
        const dishBoxes = document.querySelectorAll('.dish-box-wp');
        this.products = Array.from(dishBoxes).map(dishBox => {
            const category = dishBox.getAttribute('data-cat');
            const name = dishBox.querySelector('.h3-title').textContent;
            const price = dishBox.querySelector('.dist-bottom-row b').textContent;
            const image = dishBox.querySelector('.dist-img img').src;
            const description = dishBox.querySelector('.dish-title p').textContent;
            
            return {
                element: dishBox,
                category: category,
                name: name,
                price: price,
                image: image,
                description: description,
                categoryName: this.getCategoryName(category)
            };
        });
    }

    getCategoryName(category) {
        const categoryMap = {
            'breakfast': 'Salados',
            'lunch': 'Dulces', 
            'dinner': 'Bebidas'
        };
        return categoryMap[category] || 'Todos';
    }

    // NUEVA FUNCIÓN: Extraer precio igual que en el carrito
    extractPrice(priceText) {
        console.log('Buscador - Texto del precio a extraer:', priceText);
        
        // Método simple: extraer todos los números y tomar el resultado
        const numbers = priceText.match(/\d+/g);
        if (numbers && numbers.length > 0) {
            // Unir todos los números encontrados (para manejar "50.000" -> "50000")
            const priceString = numbers.join('');
            const price = parseInt(priceString);
            console.log('Buscador - Precio extraído:', price);
            return price;
        }
        
        console.log('Buscador - No se pudo extraer precio, usando 0');
        return 0;
    }

    setupEventListeners() {
        const searchInput = document.getElementById('search-input');
        const searchForm = document.getElementById('search-form');

        // Búsqueda en tiempo real con debounce
        let searchTimeout;
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                this.handleSearch(e.target.value);
            }, 300);
        });

        // Prevenir envío del formulario
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSearch(searchInput.value);
        });

        // Cerrar resultados al hacer click fuera
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.header-search-form')) {
                this.hideResults();
            }
        });

        // Manejar tecla Escape
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.hideResults();
                searchInput.blur();
            }
        });
    }

    handleSearch(searchTerm) {
        const term = searchTerm.toLowerCase().trim();
        
        if (term.length === 0) {
            this.hideResults();
            this.showAllProducts();
            return;
        }

        if (term.length < 2) {
            this.hideResults();
            return;
        }

        const results = this.searchProducts(term);
        this.displayResults(results, term);
        this.filterProducts(results);
    }

    searchProducts(term) {
        return this.products.filter(product => {
            const searchableText = `
                ${product.name.toLowerCase()}
                ${product.description.toLowerCase()}
                ${product.categoryName.toLowerCase()}
                ${product.category.toLowerCase()}
            `;
            
            return searchableText.includes(term);
        });
    }

    displayResults(results, searchTerm) {
        let resultsContainer = document.getElementById('search-results');
        
        if (!resultsContainer) {
            resultsContainer = document.createElement('div');
            resultsContainer.id = 'search-results';
            resultsContainer.className = 'search-results';
            document.querySelector('.header-search-form').appendChild(resultsContainer);
        }

        // Limpiar resultados anteriores
        resultsContainer.innerHTML = '';

        if (results.length === 0 && searchTerm.length >= 2) {
            resultsContainer.innerHTML = `
                <div class="no-results">
                    <i class="uil uil-search"></i>
                    <p>No se encontraron productos para "${searchTerm}"</p>
                    <small>Intenta con otros términos</small>
                </div>
            `;
        } else if (results.length > 0) {
            resultsContainer.innerHTML = results.map(product => {
                const highlightedName = this.highlightText(product.name, searchTerm);
                // USAR EXTRACTPRICE PARA OBTENER EL VALOR NUMÉRICO CORRECTO
                const priceValue = this.extractPrice(product.price);
                return `
                    <div class="search-result-item" data-product-id="${product.category}">
                        <img src="${product.image}" alt="${product.name}" class="search-result-img">
                        <div class="search-result-info">
                            <div class="search-result-name">${highlightedName}</div>
                            <div class="search-result-price">${product.price}</div>
                            <span class="search-result-category">${product.categoryName}</span>
                        </div>
                        <div class="search-result-actions">
                            <button class="add-to-cart-search-btn" 
                                    data-product-name="${product.name}"
                                     data-product-price="${priceValue}"
                                    data-product-image="${product.image}"
                                    data-product-category="${product.category}"
                                    title="Añadir al carrito">
                                <i class="uil uil-plus"></i>
                            </button>
                        </div>
                    </div>
                `;
            }).join('');

            // Agregar event listeners para navegación
            resultsContainer.querySelectorAll('.search-result-item').forEach(item => {
                item.addEventListener('click', (e) => {
                    // No navegar si se hizo click en el botón de añadir
                    if (!e.target.closest('.add-to-cart-search-btn')) {
                        const category = item.getAttribute('data-product-id');
                        this.navigateToProduct(category);
                        this.hideResults();
                        document.getElementById('search-input').value = '';
                    }
                });
            });

            // Agregar event listeners para los botones de añadir al carrito
            this.setupSearchAddToCartButtons();
        }

        // Mostrar/ocultar resultados
        if (searchTerm.length >= 2) {
            resultsContainer.classList.add('active');
        } else {
            resultsContainer.classList.remove('active');
        }
    }

    // Nueva función para manejar los botones de añadir desde la búsqueda
    setupSearchAddToCartButtons() {
        const addButtons = document.querySelectorAll('.add-to-cart-search-btn');
        
        addButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevenir que se active el click del item
                
                const productName = button.getAttribute('data-product-name');
                const productPrice = parseInt(button.getAttribute('data-product-price'));
                const productImage = button.getAttribute('data-product-image');
                const productCategory = button.getAttribute('data-product-category');
                
                // Añadir al carrito
                this.addProductToCartFromSearch({
                    name: productName,
                    price: productPrice,
                    image: productImage,
                    category: productCategory
                }, button);
            });
        });
    }

    // Función para añadir productos desde la búsqueda
    addProductToCartFromSearch(productData, button) {
        if (window.cart) {
            // Crear un ID único para el producto
            const productId = productData.category + '-' + Date.now();
            
            // Buscar si el producto ya existe en el carrito
            const existingItem = window.cart.cart.find(item => item.name === productData.name);
            
            if (existingItem) {
                existingItem.quantity++;
            } else {
                window.cart.cart.push({
                    id: productId,
                    name: productData.name,
                    price: productData.price,
                    image: productData.image,
                    quantity: 1
                });
            }
            
            // Actualizar el carrito
            window.cart.saveCart();
            window.cart.updateCartUI();
            
            // Mostrar feedback visual en el botón
            this.showAddToCartFeedback(button);
            
            // Mostrar notificación
            window.cart.showNotification(`${productData.name} añadido al carrito`);
        }
    }

    // Función para mostrar feedback visual al añadir - CORREGIDA
    showAddToCartFeedback(button) {
        const originalHTML = button.innerHTML;
        
        // Cambiar a estado "añadido" - aplicando todos los estilos necesarios
        button.classList.add('added');
        button.innerHTML = '<i class="uil uil-check"></i>';
        
        // Deshabilitar interacciones temporalmente
        button.style.pointerEvents = 'none';
        button.disabled = true;
        
        // Forzar la aplicación de estilos para prevenir cambios de layout
        button.style.transform = 'none';
        button.style.margin = '0';
        button.style.border = 'none';
        button.style.boxShadow = 'none';
        button.style.width = '26px';
        button.style.height = '26px';
        
        // Restaurar después de 1.5 segundos
        setTimeout(() => {
            button.classList.remove('added');
            button.innerHTML = originalHTML;
            button.style.pointerEvents = 'auto';
            button.disabled = false;
            
            // Remover estilos forzados
            button.style.transform = '';
            button.style.margin = '';
            button.style.border = '';
            button.style.boxShadow = '';
            button.style.width = '';
            button.style.height = '';
        }, 1500);
    }

    highlightText(text, term) {
        const regex = new RegExp(`(${term})`, 'gi');
        return text.replace(regex, '<span class="highlight">$1</span>');
    }

    hideResults() {
        const resultsContainer = document.querySelector('.search-results');
        if (resultsContainer) {
            resultsContainer.classList.remove('active');
        }
    }

    filterProducts(results) {
        // Ocultar todos los productos primero
        this.products.forEach(product => {
            product.element.style.display = 'none';
        });

        // Mostrar solo los productos que coinciden
        results.forEach(result => {
            result.element.style.display = 'block';
        });

        // Mostrar mensaje si no hay resultados en la sección principal
        this.handleNoResults(results.length === 0);
    }

    showAllProducts() {
        this.products.forEach(product => {
            product.element.style.display = 'block';
        });
        this.hideNoResultsMessage();
    }

    handleNoResults(noResults) {
        let noResultsMessage = document.getElementById('no-search-results');
        
        if (noResults && !noResultsMessage) {
            noResultsMessage = document.createElement('div');
            noResultsMessage.id = 'no-search-results';
            noResultsMessage.className = 'col-lg-12 text-center';
            noResultsMessage.innerHTML = `
                <div class="no-results" style="padding: 40px 20px;">
                    <i class="uil uil-search" style="font-size: 48px; margin-bottom: 15px;"></i>
                    <h3>No se encontraron productos</h3>
                    <p>Intenta con otros términos de búsqueda</p>
                </div>
            `;
            document.getElementById('menu-dish').appendChild(noResultsMessage);
        } else if (!noResults && noResultsMessage) {
            noResultsMessage.remove();
        }
    }

    hideNoResultsMessage() {
        const noResultsMessage = document.getElementById('no-search-results');
        if (noResultsMessage) {
            noResultsMessage.remove();
        }
    }

    navigateToProduct(category) {
        // Activar el filtro correspondiente
        const filterButton = document.querySelector(`.filter[data-filter=".${category}"]`);
        if (filterButton) {
            filterButton.click();
            
            // Pequeño delay para que se aplique el filtro
            setTimeout(() => {
                // Scroll suave a la sección de menú
                const menuSection = document.getElementById('menu');
                if (menuSection) {
                    menuSection.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }, 100);
        }
    }
}

// Inicializar el buscador cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    window.productSearch = new ProductSearch();
});

 // </script><!-- FIN SCRIPT DEL BUSCADOR -->

 // <!-- Script del carrito -->

// Sistema de Carrito de Compras
class ShoppingCart {
    constructor() {
        this.cart = [];
        this.init();
    }

    init() {
        this.loadCart();
        this.setupEventListeners();
        this.updateCartUI();
    }

    // NUEVA FUNCIÓN: Extraer precio en guaraníes
    extractPrice(priceText) {
        // Limpiar el texto y convertir a número (para guaraníes)
        let cleanPrice = priceText.replace(/[^\d,]/g, '').replace(',', '');
        return parseInt(cleanPrice) || 0;
    }

    setupEventListeners() {
        // Botones "Añadir al carrito"
        document.addEventListener('click', (e) => {
            if (e.target.closest('.dish-add-btn')) {
                const dishBox = e.target.closest('.dish-box-wp');
                this.addToCart(dishBox);
            }
        });

        // Botón "Limpiar Carrito"
        document.getElementById('clear-cart').addEventListener('click', () => {
            this.clearCart();
        });

        // Toggle del dropdown del carrito
        document.querySelector('.header-cart').addEventListener('click', (e) => {
            e.stopPropagation();
            if (window.productSearch) {
            window.productSearch.closeSearchResults();
        }
            document.querySelector('.cart-dropdown').classList.toggle('active');
        });

        // Cerrar dropdown al hacer click fuera
        document.addEventListener('click', () => {
            document.querySelector('.cart-dropdown').classList.remove('active');
        });

        // Prevenir que el dropdown se cierre al hacer click dentro
        document.querySelector('.cart-dropdown').addEventListener('click', (e) => {
            e.stopPropagation();
        });

        // Botón de WhatsApp
        document.getElementById('checkout-whatsapp').addEventListener('click', () => {
            this.checkoutWithWhatsApp();
        });
    }

    addToCart(dishBox) {
        const dishId = dishBox.getAttribute('data-cat') + '-' + Date.now();
        const dishName = dishBox.querySelector('.h3-title').textContent;
        const dishPriceText = dishBox.querySelector('.dist-bottom-row b').textContent;
        // USAR EXTRACTPRICE EN LUGAR DE REPLACE SIMPLE
        const dishPrice = this.extractPrice(dishPriceText);
        const dishImage = dishBox.querySelector('.dist-img img').src;

        console.log('Precio extraído:', dishPrice, 'de texto:', dishPriceText); // Para debug

        const existingItem = this.cart.find(item => item.name === dishName);

        if (existingItem) {
            existingItem.quantity++;
        } else {
            this.cart.push({
                id: dishId,
                name: dishName,
                price: dishPrice,
                image: dishImage,
                quantity: 1
            });
        }

        this.saveCart();
        this.updateCartUI();
        this.showNotification(`${dishName} añadido al carrito`);
    }

    removeFromCart(itemId) {
        this.cart = this.cart.filter(item => item.id !== itemId);
        this.saveCart();
        this.updateCartUI();
    }

    updateQuantity(itemId, change) {
        const item = this.cart.find(item => item.id === itemId);
        if (item) {
            item.quantity += change;
            if (item.quantity <= 0) {
                this.removeFromCart(itemId);
            } else {
                this.saveCart();
                this.updateCartUI();
            }
        }
    }

    // NUEVA FUNCIÓN: Limpiar todo el carrito
    clearCart() {
        if (this.cart.length === 0) {
            this.showNotification('El carrito ya está vacío');
            return;
        }

        // Confirmación antes de limpiar
        if (confirm('¿Estás seguro de que quieres vaciar el carrito? Se eliminarán todos los productos.')) {
            this.cart = [];
            this.saveCart();
            this.updateCartUI();
            this.showNotification('Carrito limpiado correctamente');
            
            // Cerrar el dropdown después de limpiar
            setTimeout(() => {
                document.querySelector('.cart-dropdown').classList.remove('active');
            }, 1500);
        }
    }

    getTotal() {
        return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    getTotalItems() {
        return this.cart.reduce((total, item) => total + item.quantity, 0);
    }

    saveCart() {
        localStorage.setItem('puntoG-cart', JSON.stringify(this.cart));
    }

    loadCart() {
        const savedCart = localStorage.getItem('puntoG-cart');
        if (savedCart) {
            this.cart = JSON.parse(savedCart);
        }
    }

    updateCartUI() {
        const cartNumber = document.querySelector('.cart-number');
        const cartItems = document.querySelector('.cart-items');
        const totalAmount = document.querySelector('.total-amount');
        const whatsappBtn = document.getElementById('checkout-whatsapp');
        const clearCartBtn = document.getElementById('clear-cart');

        // Actualizar número del carrito
        cartNumber.textContent = this.getTotalItems();

        // Actualizar items del carrito
        if (this.cart.length === 0) {
            cartItems.innerHTML = `
                <div class="empty-cart">
                    <i class="uil uil-shopping-bag"></i>
                    <p>Tu carrito está vacío</p>
                </div>
            `;
            whatsappBtn.disabled = true;
            clearCartBtn.disabled = true;
        } else {
            cartItems.innerHTML = this.cart.map(item => `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                    <div class="cart-item-info">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">$${item.price}</div>
                    </div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn" onclick="cart.updateQuantity('${item.id}', -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="cart.updateQuantity('${item.id}', 1)">+</button>
                    </div>
                    <button class="remove-item" onclick="cart.removeFromCart('${item.id}')">
                        <i class="uil uil-trash-alt"></i>
                    </button>
                </div>
            `).join('');
            whatsappBtn.disabled = false;
            clearCartBtn.disabled = false;
        }

        // Actualizar total
        totalAmount.textContent = this.getTotal().toLocaleString('es-PY');
    }

    showNotification(message) {
        let notification = document.querySelector('.cart-notification');
        if (!notification) {
            notification = document.createElement('div');
            notification.className = 'cart-notification';
            document.body.appendChild(notification);
        }

        notification.innerHTML = `
            <i class="uil uil-check-circle"></i>
            ${message}
        `;
        notification.style.display = 'block';

        setTimeout(() => {
            notification.style.display = 'none';
        }, 3000);
    }

    checkoutWithWhatsApp() {
        if (this.cart.length === 0) return;

        const phoneNumber = "+595972983177"; // Número de WhatsApp de Punto G
        let message = "¡Hola! Quiero hacer un pedido de *Punto G* \n\n";
        message += "* MI PEDIDO:*\n";

        this.cart.forEach((item, index) => {
            const subtotal = item.price * item.quantity;
            message += `\n${index + 1}. ${item.name}`;
            message += `\n   Cantidad: ${item.quantity}`;
             message += `\n   Subtotal: ₲ ${subtotal.toLocaleString('es-PY')}`;
        });

         message += `\n\n *TOTAL A PAGAR: ₲ ${this.getTotal().toLocaleString('es-PY')}*`;
        message += `\n\n *MI INFORMACIÓN:*`;
        message += `\n Nombre: `;
        message += `\n Dirección: `;
        message += `\n Teléfono: `;
        message += `\n Notas adicionales: `;
        message += `\n\n¡Gracias! `;

        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window.open(whatsappURL, '_blank');
        this.showNotification('¡Redirigiendo a WhatsApp!');
        
        // Opcional: Descomenta estas líneas si quieres limpiar el carrito después del pedido
        // this.cart = [];
        // this.saveCart();
        // this.updateCartUI();
    }
}

// Inicializar el carrito cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    window.cart = new ShoppingCart();
    window.search = new ProductSearch();
});

// Agregar el elemento de notificación al DOM
const notificationElement = document.createElement('div');
notificationElement.className = 'cart-notification';
document.body.appendChild(notificationElement);


//<!-- Fin script del carrito -->