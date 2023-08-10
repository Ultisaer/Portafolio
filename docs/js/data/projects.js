export function dataProject() {
  // Datos de los proyectos trabajados junto a que tecnologias se usaron ademas de las imagenes de los conetendores
  const projectData = [
    {
      name: "Proyecto 1",
      imgProyects: {
        imgPreview: "https://www.gamespot.com/a/uploads/original/1587/15875866/3874338-lir-screenshot-1.jpg",
        imgExpand: "https://www.gamereactor.es/media/71/_3557163b.jpg"
      },
      estadistic: {
        HTML: 40,
        CSS: 30,
        JS: 20,
        Python: 5,
        SQL: 5
      },
      sources: {
        appName: "App 1",
        appLink: "#",
        githubName: "Github",
        githubLink: "#",
      } 
    },

    { 
      name: "Proyecto 2",
      imgProyects: {
        imgPreview: "https://cdn.mos.cms.futurecdn.net/SUVNZeyirWNJ6Hc7ku8zUH.jpg",
        imgExpand: "https://images3.alphacoders.com/108/1082567.jpg"
      },
      estadistic: {
        HTML: 25,
        CSS: 25,
        Ruby: 20,
        Java: 15,
        Swift: 15
      } ,
      sources: {
        appName: "App 2",
        appLink: "#",
        githubName: "Github",
        githubLink: "#",
      } 
    },

    {
      name: "Proyecto 3",
      imgProyects: {
        imgPreview: "https://lvdneng.rosselcdn.net/sites/default/files/dpistyles_v2/vdn_864w/2021/11/10/node_1097144/53984550/public/2021/11/10/B9728950184Z.1_20211110170156_000%2BGU9JAEKIH.2-0.jpg?itok=S3u1Dxj_1636561654",
        imgExpand: "https://images7.alphacoders.com/115/1153512.jpg"
      },
      estadistic: {
        HTML: 30,
        CSS: 20,
        JS: 10,
        CSharp: 25,
        Kotlin: 15
      }, 
      sources: {
        appName: "App 3",
        appLink: "#",
        githubName: "Github",
        githubLink: "#",
      } 
    },

    {
      name: "Proyecto 4",
      imgProyects: {
        imgPreview: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNyKShPrWBlpXdpeFMirIpPwK-nM9aHVWHajksKjzBAeEgHWZkLBnpFx0wNjb0FUWQqOw&usqp=CAU",
        imgExpand: "https://ixbt.online/gametech/covers/2021/09/13/0QdIciPUY9dykEHio6JKane5UvpPJt4Nu9vmAfxJ.jpg"
      },
      estadistic: {
        HTML: 10,
        CSS: 30,
        JS: 30,
        PHP: 20,
        TypeScript: 10
      },
      sources: {
        appName: "App 4",
        appLink: "#",
        githubName: "Github",
        githubLink: "#",
      } 
    }
  ];

  return projectData; // Devuelve el objeto

}

