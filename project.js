let url = window.location.toString().split('=')[1]

fetch('data.json')
    .then((response) => response.json())
    .then((json) => {
        let data = json;
        data = data[url]
        console.log(data)
        
        document.title = data["title"];
        document.querySelector('.title-project').innerHTML += "<h1 class='projet-titre'>" + data["title"] + "</h1>";
        document.querySelector('.content-project .img-project').innerHTML += "<img class='img-shadow'src='" + data["image"] + "' alt='[alt]'></img>"
        document.querySelector('.content-project .text-project').innerHTML += "<p>" + data["description"] + "</p>" + "<p class='date'>" + data["year"] + "</p>" 
        const linkPage = data["links"]["page"];
        const linkGithub = data["links"]["github"];
        
        if (linkPage) {
            const linkProjectHTML = `<a href="${linkPage}">Lien vers le projet</a>${linkGithub ? `<a href="${linkGithub}">Lien vers GitHub</a>` : ''}`;
            document.querySelector('.link-project').innerHTML += linkProjectHTML;
        }
        

        const toolsContainer = document.querySelector('.tools .container-tools');
        const toolsData = data["tools"];
        
        // Vérification existance de toolsdata
        if (toolsData) {
          // Vérification propriété 
          for (let i = 1; i <= 4; i++) {
            const toolKey = "tool" + i;
        
            // Vérification si la propriété existe avant de l'ajouter à la chaîne HTML
            if (toolsData[toolKey]) {
                    toolsContainer.innerHTML += "<p>" + toolsData[toolKey] + "</p>";
            }
          }
        }

        let members = "<p class='name'>";

          // Boucle sur les membres
          for (let i = 1; i <= 5; i++) {
              const memberKey = "mb" + i;

              // Vérification si le membre existe avant de l'ajouter
              if (data["member"][memberKey]) {
                  members += data["member"][memberKey];

                  // Ajouter virgule si ce n'est pas le dernier membre
                  if (i < 5 && data["member"]["mb" + (i + 1)]) {
                      members += ", ";
                  }
              }
          }

          members += "</p>";
          // Ajouter le contenu à la div
          document.querySelector('.member').innerHTML += members;


        
        document.querySelector('.gallery').innerHTML += "<img class='img-gallery' src=" + data["gallery"]["img1"] + " alt='image projet'></img>" +  "<img class='img-gallery' src=" + data["gallery"]["img2"] + " alt='image projet'></img>" +  "<img class='img-gallery' src=" + data["gallery"]["img3"] + " alt='image projet'></img>"
        
        
        
    });