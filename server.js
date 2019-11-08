const http = require("http");
const fs = require("fs");

const typesMIME = {
    "html": "text/html",
    "css": "text/css",
    "js": "text/javascript",
    "png": "image/png",
    "jpeg": "image/jpeg",
    "jpg": "image/jpg",
    "ico": "image/x-icon",
    "ogg": "audio/ogg"
};

const serveur = http.createServer((requête, réponse) => {
    // Déterminer le type MIME du contenu à charger d'après une éventuelle extension dans l'URI
    const uri = requête.url;
    console.log(uri)
    if (uri.startsWith("/public/")) {
        const indexDeLExtension = uri.lastIndexOf(".") + 1;
        if (indexDeLExtension) {
            const extension = uri.substring(indexDeLExtension);
            fs.readFile("." + uri, (erreur, contenu) => {
                réponse.writeHead(200, {"Content-Type": typesMIME[extension]});
                réponse.end(contenu);
            });
        }
    }
    // Si pas d'extension, c'est une page => charger la page
    else if (uri === "/") {
		fs.readFile("./public/index.html", "UTF-8", (erreur, contenu) => {
            réponse.writeHead(200, {"Content-Type": "text/html"});
            réponse.end(contenu);
        });
    } else if (uri === "/contact") {
        fs.readFile("./public/assets/html/contact.html", "UTF-8", (erreur, contenu) => {
            réponse.writeHead(200, {"Content-Type": "text/html"});
            réponse.end(contenu);
        });
    } else if (uri === "/menu") {
        fs.readFile("./public/assets/html/menu.html", "UTF-8", (erreur, contenu) => {
            réponse.writeHead(200, {"Content-Type": "text/html"});
            réponse.end(contenu);
        });
    } else if (uri === "/photos") {
        fs.readFile("./public/assets/html/photos.html", "UTF-8", (erreur, contenu) => {
            réponse.writeHead(200, {"Content-Type": "text/html"});
            réponse.end(contenu);
        });
    } 
    else if (uri === "/restaurant") {
        fs.readFile("./public/assets/html/restaurant.html", "UTF-8", (erreur, contenu) => {
            réponse.writeHead(200, {"Content-Type": "text/html"});
            réponse.end(contenu);
        });
    } 
    
    else fs.readFile("./public/assets/html/404.html", "UTF-8", (erreur, contenu) => {
		réponse.writeHead(404, {"Content-Type": "text/html"});
		réponse.end(contenu);
	});
});

serveur.listen(80);
console.log("serveur lancé");