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
            labels: ['React', 'JS', 'Sass', 'JavaScript', 'CSS'],
            img: [],
            data: [80, 70, 75, 85, 90],
            id: "type",
        },        
        '2': {
            labels: ['SQL', 'MariaDB', 'MySQL', 'MongoDB' , 'JavaScript'],
            img: [],
            data: [25, 30, 35, 10, 70],
            id: "database",
        },
        '3': {
            labels: ['VisualCode', 'GPT-4', 'Notion', 'StabilityIA', 'Terminal'],
            img: [],
            data: [20, 30, 40, 10, 80],
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
            skillGroup[group].labels.forEach(label => {

                let skillDiv = document.createElement("div");
                skillDiv.className = "skill";
                
                let p = document.createElement("p");
                p.innerText = label;
                
                skillDiv.append(document.createElement("div"), p);
                container.appendChild(skillDiv);
            });
        });
    }
        
    generateSkills()
    generateProjects()

    // Carruceles //////////////////////////////////////////////////////////////////////////////////////
    // Carrucel 1 Principal / 2 Carruceles anidados que al seleccionar un elemento se refleja en el otro

    function buttonSlick(idNext, idBack, slickSettings) {     // Funcion de creacion de los botones cuando se da click retroceden o avanzan
        $(idNext).click(() => slickSettings.slick("slickNext") )
        $(idBack).click(() => slickSettings.slick("slickPrev"))
    }
    
    // Funcion de los slicks de todos los proyectos
    function startSlick(selector, slides = 1 , autoplay = true, speed = 700, fade = false, draggable = true, cssEase = "ease" ){
        return $(selector).slick({
            slidesToShow: slides,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
            autoplaySpeed: 1500,
            autoplay: autoplay,
            speed: speed,
            fade: fade,
            draggable: draggable,
            cssEase: cssEase
        })
    }
    
    let galleryScroll = startSlick("#gallery-scroll" , 2); // Inicialización de Slick en 'gallery-scroll' con las propiedades por default
    buttonSlick("#button-after","#button-back" , galleryScroll); // Manejo de eventos de los botones

    // Funcion que al dar click al boton del proyecto te lleva al 2do carrucel en conjunto con las estadisticas
    $('.expand').on('click', function() {
        
        let expandContainer = $(this).data('id');  // Encontrar el índice del contenedor en el que se hizo click a partir del boton seleccionado con su atributo
        galleryScroll.slick('unslick');    // Destruir el carrusel 1

        // Mostrar y ocultar contenedores
        $('.gallery-proyects').hide();
        $('.container-projects').css('display', 'grid');

        // Inicialización de los Slick en 'proyect-expand' y estadisticas
        var proyectExpand = startSlick("#proyect-expand", 1, false, 500, true, true, "linear")
        var statistics = startSlick("#statistics", 1, false, 500, true, false, "linear")

        // Ir al slide seleccionado a partir del boton que se le dio click
        proyectExpand.slick('slickGoTo', expandContainer);
        statistics.slick('slickGoTo' , expandContainer);

        // Manejo de eventos de los botones, entonces el proyect expand controla el carrucel de las estadisticas
        $('#next-project').click(function() {
            proyectExpand.slick('slickNext');
            statistics.slick('slickGoTo', proyectExpand.slick('slickCurrentSlide'));
        });
        $('#back-project').click(function() {
            proyectExpand.slick('slickPrev');
            statistics.slick('slickGoTo', proyectExpand.slick('slickCurrentSlide'));
        });

        // Vuelve a la vista previa / return
        $('#return').off('click').on('click', function(){

            let currentExpandSlide = proyectExpand.slick('slickCurrentSlide');  // Guardar el índice actual del proyectExpand
            
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

            // Comprobar si los elementos existen antes de reinicializar
            if ($.contains(document, $('#gallery-scroll')[0])) {
                let galleryScroll = startSlick("#gallery-scroll" , 2);  // Reconstruccion del galleryScroll original
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
        var ctx = document.getElementById('myChart' + projectID).getContext('2d');

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

    // Crear el dashboard para las skills
    for (var element in skillGroup)
    {
        createDashboard(`Skills${element}`, skillGroup[`${element}`]);
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