$(document).ready(function(){
    
    //Datos de los projectos trabajadados
    const projectsData = {
        '1': {
            labels: ['HTML5', 'CSS', 'JavaScript', 'Python', 'SQL1'],
            data: [20, 15, 30, 25, 10],
            detail: "Proyecto 1"
        },
        '2': {
            labels: ['HTML', 'CSS', 'JavaScript', 'Python2'],
            data: [10, 20, 30, 20],
            detail: "Proyecto 2"
        },
        '3': {
            labels: ['HTML', 'JavaScript', 'Python', 'SQL3'],
            data: [20, 30, 25, 10],
            detail: "Proyecto 3"
        },
        '4': {
            labels: ['HTML', 'CSS', 'JavaScript', 'Python4'],
            data: [10, 50, 20, 20],
            detail: "Proyecto 4"
    }};
    // Datos de las habilidades
    const skillGroup = {
        '1': {
            labels: ['HTML', 'CSS', 'JavaScript', 'Sass' , 'TypeScript'],
            imgData : ['./assets/IconsType/HTML.svg', './assets/IconsType/CSS.svg', './assets/IconsType/JS.svg', './assets/IconsType/SASS.svg', './assets/IconsType/CSS.svg'],
            img : ['./assets/LogoType/HTML.png','./assets/LogoType/CSS.png', './assets/LogoType/JS.png', './assets/LogoType/JS.png' , './assets/LogoType/CSS.png'],
            id: "type",
        },        
        '2': {
            labels: ['SQL', 'MariaDB', 'MySQL', 'MongoDB' , 'JavaScript'],
            imgData : ['./assets/IconsType/HTML.svg', './assets/IconsType/CSS.svg', './assets/IconsType/JS.svg', './assets/IconsType/SASS.svg', './assets/IconsType/SASS.svg'],
            img : ['./assets/LogoType/HTML.png','./assets/LogoType/CSS.png', './assets/LogoType/JS.png', './assets/LogoType/CSS.png', './assets/LogoType/JS.png'],
            id: "dataBase",
        },
        '3': {
            labels: ['VisualCode', 'GPT-4', 'Notion', 'StabilityIA', 'Terminal'],
            imgData : ['./assets/IconsType/HTML.svg', './assets/IconsType/CSS.svg', './assets/IconsType/JS.svg', './assets/IconsType/SASS.svg', './assets/IconsType/SASS.svg'],
            img : ['./assets/LogoType/HTML.png','./assets/LogoType/CSS.png', './assets/LogoType/JS.png', './assets/LogoType/JS.png', './assets/LogoType/JS.png'],
            id: "tools",
    }};
    // Creacion de los elementos del proyecto principal en su vista mas grande
    function generateProjects(){
        const galleryScrollProjects = document.querySelector("#gallery-scroll");
        Object.keys(projectsData).forEach(i => {

            let containerGallery = document.createElement("div");
            containerGallery.className = "container-gallery";

            let expand = document.createElement("button");
            expand.className = "expand";
            expand.setAttribute('data-id', (i - 1)); // Los slick comienzan en 0 y el ciclo inicia en 1
            expand.innerText = projectsData[i].detail;

            containerGallery.appendChild(expand);
            galleryScrollProjects.appendChild(containerGallery);
        })
    }
      
    // Creacion de las habilidades del proyecto
    function generateSkills() {
        Object.keys(skillGroup).forEach(group => {
            const container = document.querySelector(`#${skillGroup[group].id}`);
            const skillsData = document.querySelector(`#statistics-${skillGroup[group].id}`);
            let containerDataDiv = document.createElement("div"); // Crear el contenedor aquí
            containerDataDiv.className = "container-data";
            
            skillGroup[group].labels.forEach((label, index) => {
                let skillDiv = document.createElement("div");
                skillDiv.className = "skill";
    
                let imgContainer = document.createElement("img");
                imgContainer.src = skillGroup[group].img[index]; 
                imgContainer.alt = label;
    
                let dataDiv = document.createElement("div");
                dataDiv.className = "data";
                let imgSkillsData = document.createElement("img");
                imgSkillsData.src = skillGroup[group].imgData[index]; 
                imgSkillsData.alt = label; 
                let pSkillsData = document.createElement("p");
                pSkillsData.innerHTML = label;
    
                skillDiv.append(imgContainer);
                container.appendChild(skillDiv);
                
                dataDiv.append(imgSkillsData, pSkillsData);
                containerDataDiv.append(dataDiv); // Añadir dataDiv a containerDataDiv
            });
            
            skillsData.append(containerDataDiv); // Añadir containerDataDiv a skillsData después del bucle
        });
    }
    
    
        
    generateSkills()
    generateProjects()

    ///////////////////////////////////////CSS ANIMATION
    $('.animation-element').click(function(){
        $('.icons').addClass('animated');
        setTimeout(function() {
            $('.icons').removeClass('animated');
          }, 1000);
    })
    // Carruceles //////////////////////////////////////////////////////////////////////////////////////
    // Carrucel 1 Principal / 2 Carruceles anidados que al seleccionar un elemento se refleja en el otro

    function buttonSlick(classNext, classBack, slickSettings) {     // Funcion de creacion de los botones cuando se da click retroceden o avanzan
        $(classNext).click(() => slickSettings.slick("slickNext"))
        $(classBack).click(() => slickSettings.slick("slickPrev"))
    }
    
    let nav = window.matchMedia('(max-width: 700px)');
    
    ////////////////////////////Funcionalidad del navbar
    function screenSizeChange(e) {
        if (e.matches) {
            /* la anchura de la ventana es 700px o menos */
            $('.container-bar').css('display', 'none');  // Establecer display a 'none'
            $('#nav-section').on('click', function() {
                event.stopPropagation(); // Para evitar la propagación del evento.
                $('.container-bar').toggle();  // Cambiar entre 'flex' y 'none' en cada clic
            });

            $(document).on('click', function() {
                // Comprueba si el contenedor está visible.
                if ($('.container-bar').css('display') === 'grid' && !$(event.target).closest('.container-bar').length)   {
                    
                    $('.container-bar').css('display', 'none'); // Cambia a 'none'.
                    
                }
            });
    
        } else {
            /* la anchura de la ventana es más de 700px */
            $('#nav-section').off('click');
            $(document).off('click');
            $('.container-bar').css('display', 'grid');  // Establecer display a 'flex'
        }
    }
    
    
    
    nav.addListener(screenSizeChange);
    screenSizeChange(nav);  
    
    
    // Funcion de los slicks de todos los proyectos
    function startSlick(selector, slides = 1 , autoplay = true, speed = 700, fade = false, draggable = true, cssEase = "ease" ){
        let slickInstance = $(selector).slick({
            slidesToShow: slides,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
            autoplaySpeed: 1500,
            autoplay: autoplay,
            speed: speed,
            fade: fade,
            draggable: draggable,
            cssEase: cssEase,
            accessibility: true,
        })

        return slickInstance;
    }
    
    let galleryScroll;
    let statistics;

    function updateSlick(slidesToShow) {
        if (galleryScroll) {
            galleryScroll.slick('unslick');
        }
        galleryScroll = startSlick("#gallery-scroll", slidesToShow);
    }

    let mql = window.matchMedia('(max-width: 1400px)');
    function screenTest(e) {
        if (e.matches) {
            /* la anchura de la ventana es 1400px o menos */
            updateSlick(1);
        } else {
            /* la anchura de la ventana es más de 1400px */
            updateSlick(2);
        }
    }
    mql.addListener(screenTest);
    screenTest(mql); // para inicializar correctamente

    buttonSlick("#button-after","#button-back" , galleryScroll); // Manejo de eventos de los botones

    // Funcion que al dar click al boton del proyecto te lleva al 2do carrucel en conjunto con las estadisticas
    $('.expand').on('click', function() {
        
        let expandContainer = $(this).data('id');  // Encontrar el índice del contenedor en el que se hizo click a partir del boton seleccionado con su atributo
        galleryScroll.slick('unslick');    // Destruir el carrusel 1

        // Mostrar y ocultar contenedores
        $('.gallery-proyects').hide();

        ///////////////////////////////////////////////////////////////////////////////////////////////////

// Observar los cambios en el carrusel

        let mql = window.matchMedia('(max-width: 1400px)');
        let isHidden = false;
        
        function screenTestDisplay(e) {
            if (isHidden) {
                return;
            }
            if (e.matches) {
                /* la anchura de la ventana es 1400px o menos */
                $('.container-projects').css('display', 'flex');
                $('.projects .containers-projects').addClass('containerStadistics');
                updateStatistics();

            } else {
                /* la anchura de la ventana es más de 1400px */
                $('.container-projects').css('display', 'grid');
                $('.projects .containers-projects').removeClass('containerStadistics');
                updateStatistics();
            }
        }
        
        mql.addListener(screenTestDisplay);
        screenTestDisplay(mql); // para inicializar correctamente



        // Inicialización de los Slick en 'proyect-expand' y estadisticas , guarda el dato de los slides 
        var proyectExpand = startSlick("#proyect-expand", 1, false, 500, true, true, "linear")
        proyectExpand.on('afterChange', function(event, slick, currentSlide){
            //console.log(`Estás en el slide ${currentSlide} del carrusel ${slick.$slider[0].id}`);
            statistics.slick('slickGoTo', currentSlide);
        });

        function updateStatistics() {
            if (statistics) {
                statistics.slick('unslick');
            }
            statistics = startSlick("#statistics", 1, false, 500, true, false, "linear");
            statistics.on('afterChange', function(event, slick, currentSlide){
                //console.log(`Estás en el slide ${currentSlide} del carrusel ${slick.$slider[0].id}`);
                proyectExpand.slick('slickGoTo', currentSlide);
            });
        }


        // Ir al slide seleccionado a partir del boton que se le dio click
        proyectExpand.slick('slickGoTo', expandContainer);
        statistics.slick('slickGoTo' , expandContainer);


        // Manejo de eventos de los botones, entonces el proyect expand controla el carrucel de las estadisticas
        $('#next-project').click(function() {
            proyectExpand.slick('slickNext');
            statistics.slick('slickGoTo', proyectExpand.slick('slickCurrentSlide'));
        }
        );
        $('#back-project').click(function() {
            proyectExpand.slick('slickPrev');
            statistics.slick('slickGoTo', proyectExpand.slick('slickCurrentSlide'));
        });

        // Vuelve a la vista previa / return
        $('#return').off('click').on('click', function(){

            let currentExpandSlide = proyectExpand.slick('slickCurrentSlide');  // Guardar el índice actual del proyectExpand
            $('.projects .containers-projects').removeClass('containerStadistics');

            // Comprobar si los elementos existen antes de destruir
            if ($.contains(document, proyectExpand[0])) {
                proyectExpand.slick('unslick');
            }
            if ($.contains(document, statistics[0])) {
                statistics.slick('unslick');
            }

            // Mostrar y ocultar contenedores
            $('.gallery-proyects').css('display', 'grid');
            $('.container-projects').hide();
            isHidden = true;

            // Comprobar si los elementos existen antes de reinicializar
            if ($.contains(document, $('#gallery-scroll')[0])) {
                screenTest(mql); // para inicializar correctamente el slick dependiendo el tamaño de pantalla
                galleryScroll.slick('slickGoTo', currentExpandSlide);   // Volver al slide correspondiente dependiendo el seleccionado
            }
        });
    });

    // Carruceles //////////////////////////////////////////////////////////////////////////////////////
    // Carrucel 2 Habilidades / 3 Carruceles que al seleccionar el tipo cambia de 1 al otro carrucel ///

    function initSlick(element) {
        const slickInstance = element.slick({
            centerMode: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            infinite: true,
            arrows: false,
            centerMode: true,    
            accessibility: true,
        });

        // Cuando el carrusel termine de cambiar, añade la clase 'slick-center' a la diapositiva del centro
        slickInstance.on('afterChange', function(event, slick, currentSlide) {
            $('.slick-slide').removeClass('slick-center');
            $('.slick-slide.slick-current').addClass('slick-center');
        });

        buttonSlick("#next-skill" , "#back-skill" , slickInstance )
        return slickInstance;
    }
    // Inicialización de Slick en 'typeSkills'
    $('.skills-btn').on('click', function() {
        // si el botón ya está activo, no hace nada
        if ($(this).hasClass('active')) {
            return;
        }

        const target = $(this).data('target'); // obtén el ID del target desde el atributo data-target

        $('.skills-section.active').slick('unslick'); // destruye la instancia slick actual
        $('.skills-section').toggleClass('active', false); // quita la clase 'active' de todas las secciones

        $('#' + target).toggleClass('active', true); // añade la clase 'active' a la sección target
        initSlick($('#' + target)); // inicializa una nueva instancia slick en el target

        // actualiza el botón activo
        $('.skills-btn').toggleClass('active', false);
        $(this).toggleClass('active', true);

        // Manejo de las estadísticas
        $('.statistics-section').toggleClass('active', false); // quita la clase 'active' de todas las secciones de estadísticas

        const statsTarget = 'statistics-' + target.split('-')[0]; // obtén el ID de la sección de estadísticas desde el target del botón
        $('#' + statsTarget).toggleClass('active', true); // añade la clase 'active' a la sección de estadísticas target
    });


    let currentSlick;

    $('.slick-skills').each(function() {
        const slickInstance = initSlick($(this));
        if ($(this).hasClass('active')) {
            currentSlick = slickInstance;
        }
    });
    $('.buttons-skills button').on('click', function() {
        const target = $(this).data('target'); // obtén el ID del target desde el atributo data-target
        $('.skills-section.active').removeClass('active'); // quita la clase 'active' de la sección actual
        $('#' + target).addClass('active'); // añade la clase 'active' a la sección target

        currentSlick = $('#' + target).slick('getSlick'); // obtén la instancia slick de la sección target
    });


    $('.skills-btn').on('click', function() {
        // si el botón ya está activo, no hace nada
        if ($(this).hasClass('active')) {
            return;
        }

        const target = $(this).data('target'); // obtén el ID del target desde el atributo data-target
        $('.skills-section.active').removeClass('active'); // quita la clase 'active' de la sección actual
        $('#' + target).addClass('active'); // añade la clase 'active' a la sección target

        currentSlick = $('#' + target).slick('getSlick'); // obtén la instancia slick de la sección target

        // actualiza el botón activo
        $('.skills-btn.active').removeClass('active');
        $(this).addClass('active');
    });

    /*////////////////////////////////////////ESTADISTICAS //////////////////*/
    function createDashboard(projectID, projectData) {
        let canvas = document.getElementById('myChart' + projectID);
        let container = canvas.parentElement;
        container.style.width = '99%';
        container.style.height = '99%';
        let ctx = canvas.getContext('2d');

            // Si ya existe un gráfico, destruirlo antes de crear uno nuevo


        // Obtener los datos del proyecto
        var labels = projectData.labels;
        var data = projectData.data;

        // Define 5 colores por defecto
        var defaultColors = [
            'rgba(255, 99, 132, 0.2)',  // rojo
            'rgba(54, 162, 235, 0.2)',  // azul
            'rgba(255, 206, 86, 0.2)',  // amarillo
            'rgba(75, 192, 192, 0.2)',  // verde
            'rgba(153, 102, 255, 0.2)'  // púrpura
        ];

        // Utiliza los colores por defecto si no se proporcionan colores personalizados
        var colors = projectData.colors || defaultColors;

        // Filtrar elementos con datos 0
        var filteredIndexes = data.reduce((arr, value, index) => {
            if (value !== 0) arr.push(index);
            return arr;
        }, []);

        var filteredLabels = filteredIndexes.map(index => labels[index]);
        var filteredData = filteredIndexes.map(index => data[index]);
        var filteredColors = filteredIndexes.map(index => colors[index]);

        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: filteredLabels,
                datasets: [{
                    data: filteredData,
                    backgroundColor: filteredColors,
                    borderColor: filteredColors.map(color => color.replace('0.2', '1')),
                    borderWidth: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false, // Añade esta línea
                cutout: '70%',
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });

        var technologiesContainer = document.getElementById('technologiesContainer' + projectID);
        for (let i = 0; i < filteredLabels.length; i++) {
            var technologyDiv = document.createElement('div');
            technologyDiv.className = 'technology';

            var technologyName = document.createElement('span');
            technologyName.textContent = filteredLabels[i];

            var barContainer = document.createElement('div');
            barContainer.className = 'bar-container';
            barContainer.style.backgroundColor = filteredColors[i];
            var bar = document.createElement('div');
            bar.className = 'bar';
            bar.style.width = filteredData[i] + '%';
            bar.style.backgroundColor = filteredColors.map(color => color.replace('0.2', '1'))[i];
            
            barContainer.appendChild(bar);
            technologyDiv.appendChild(technologyName);
            technologyDiv.appendChild(barContainer);
            technologiesContainer.appendChild(technologyDiv);
        }
    }

    // Crear los dashboards para cada proyecto
    for (var projectID in projectsData) {
        createDashboard(projectID, projectsData[projectID]);
    }


});

$('.buttons-skills button').on('click', function() {
    const target = $(this).data('target'); // obtén el ID del target desde el atributo data-target
    $('.skills-section.active').removeClass('active'); // quita la clase 'active' de la sección actual
    $('#' + target).addClass('active'); // añade la clase 'active' a la sección target
});

