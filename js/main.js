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
        }
    };
// Datos de las habilidades
    // Crear el dashboard para las habilidades


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
        }
    };

    // Creacion de los elementos
    function generateSkills(){
        for(let group in skillGroup) {
            let container = document.querySelector(`#${skillGroup[group].id}`)

            for (let label of skillGroup[group].labels)
            {
                let skillDiv = document.createElement("div")
                skillDiv.className = "skill"

                let divs = document.createElement("div")
                let p = document.createElement("p")
                p.innerText = label
                skillDiv.appendChild(divs)
                skillDiv.appendChild(p)
                container.appendChild(skillDiv)
            }
        }
    }
    generateSkills()


    for (let i = 1; i <= Object.keys(projectsData).length; i++ )
    {
        let galleryScrollProyects = document.querySelector("#gallery-scroll")

        let containerGallery = document.createElement("div")
        containerGallery.className = "container-gallery"

        let expand = document.createElement("button")
        expand.className = "expand"
        expand.innerText = projectsData[i].detail

        containerGallery.appendChild(expand)
        galleryScrollProyects.appendChild(containerGallery)
    }

    /*///////////////////////////////////CARRUCEL 1 ///////////////////*/
    // Inicialización de Slick en 'gallery-scroll'
    var galleryScroll = $('#gallery-scroll').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        infinite: true,
        arrows: false, // oculta las flechas predeterminadas de Slick
    });

    // Manejo de eventos de los botones
    $('#button-after').click(function() {
        galleryScroll.slick('slickNext');
    });

    $('#button-back').click(function() {
        galleryScroll.slick('slickPrev');
    });

    $('.expand').on('click', function() {
        // Encontrar el índice del contenedor en el que se hizo clic
        var container = $(this).closest('.container-gallery');
        var currentSlide = $('.container-gallery').index(container);

        var expandContainer = currentSlide - 2 ;

        // Destruir el carrusel 1
        galleryScroll.slick('unslick');

        // Mostrar y ocultar contenedores
        $('.gallery-proyects').hide();
        $('.container-projects').css('display', 'grid');

        // Inicialización de Slick en 'proyect-expand'
        var proyectExpand = $('#proyect-expand').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
            speed: 500,
            fade: true,
            draggable: false, // desactiva el arrastre con el mouse
            cssEase: 'linear' // oculta las flechas predeterminadas de Slick
        });

        var statistics = $('#statistics').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
            speed: 500,
            fade: true,
            draggable: false, // desactiva el arrastre con el mouse
            cssEase: 'linear' // oculta las flechas predeterminadas de Slick
        })

        // Ir al slide seleccionado
        proyectExpand.slick('slickGoTo', expandContainer);
        statistics.slick('slickGoTo' , expandContainer);

        // Manejo de eventos de los botones
        $('#next-project').click(function() {
            proyectExpand.slick('slickNext');
            statistics.slick('slickGoTo', proyectExpand.slick('slickCurrentSlide'));
        });
        
        $('#back-project').click(function() {
            proyectExpand.slick('slickPrev');
            statistics.slick('slickGoTo', proyectExpand.slick('slickCurrentSlide'));
        });

        $('#return').click(function(){
            // Guardar el índice actual del proyectExpand
            var currentExpandSlide1 = proyectExpand.slick('slickCurrentSlide');
            var currentExpandSlide2 = statistics.slick('slickCurrentSlide')
            // Comprobar si los elementos existen antes de destruir
            if ($.contains(document, proyectExpand[0])) {
                proyectExpand.slick('unslick');
            }
            if ($.contains(document, statistics[0])) {
                statistics.slick('unslick');
            }
            $('.gallery-proyects').css('display', 'grid');
            $('.container-projects').hide();

            // Comprobar si los elementos existen antes de reinicializar
            if ($.contains(document, $('#gallery-scroll')[0])) {
                galleryScroll = $('#gallery-scroll').slick({
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 1000,
                    infinite: true,
                    arrows: false, // oculta las flechas predeterminadas de Slick
                });

                // Volver al slide correspondiente
                galleryScroll.slick('slickGoTo', proyectExpand.slick('slickCurrentSlide'));

            }
        });
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


    /*///////////////////////////////////CARRUCEL 2 ///////////////////*/

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

        $('#next-skill').click(function() {
            slickInstance.slick('slickNext');
        });
        
        $('#back-skill').click(function() {
            slickInstance.slick('slickPrev');
        });
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
});

$('.buttons-skills button').on('click', function() {
    const target = $(this).data('target'); // obtén el ID del target desde el atributo data-target
    $('.skills-section.active').removeClass('active'); // quita la clase 'active' de la sección actual
    $('#' + target).addClass('active'); // añade la clase 'active' a la sección target
});
