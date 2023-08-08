export function dataProject() {
  // Datos de los proyectos trabajados junto a que tecnologias se usaron ademas de las imagenes de los conetendores
  const projectData = {
    "Proyecto 1": {
      sources: {
        imgPreview: "https://hatrabbits.com/wp-content/uploads/2017/01/tafel-1.jpg",
        imgExpand: ""
      },
      estadistic: {
        HTML: 40,
        CSS: 30,
        JS: 20,
        Python: 5,
        SQL: 5
      }
    },

    "Proyecto 2": {
      sources: {
        imgPreview: "",
        imgExpand: ""
      },
      estadistic: {
        HTML: 25,
        CSS: 25,
        Ruby: 20,
        Java: 15,
        Swift: 15
      }
    },

    "Proyecto 3": {
      sources: {
        imgPreview: "",
        imgExpand: ""
      },
      estadistic: {
        HTML: 30,
        CSS: 20,
        JS: 10,
        CSharp: 25,
        Kotlin: 15
      }
    },

    "Proyecto 4": {
      sources: {
        imgPreview: "",
        imgExpand: ""
      },
      estadistic: {
        HTML: 10,
        CSS: 30,
        JS: 30,
        PHP: 20,
        TypeScript: 10
      }
    }
  };

  return projectData; // Devuelve el objeto

}
