// Funkcija za prikazivanje slike prije i poslije
function showBeforeAfterImage(imageUrl) {
    // Kreiraj novi prozor za prikaz slike prije i poslije
    var popup = window.open("", "BeforeAfterImage", "width=600,height=400");
  
    // Kreiraj HTML sadržaj za prikaz slike prije i poslije
    var htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Before and After</title>
        <style>
          body {
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f0f0f0;
          }
          img {
            max-width: 100%;
            height: auto;
          }
        </style>
      </head>
      <body>
        <img src="${imageUrl}" alt="Before and After">
      </body>
      </html>
    `;
  
    // Postavi HTML sadržaj u novi prozor
    popup.document.write(htmlContent);
  }
  
  // Selektuj sve dugmadi za prikaz slika prije i poslije
  var beforeAfterButtons = document.querySelectorAll(".before-after-button");
  
  // Dodaj event listener na svako dugme za prikaz slike prije i poslije
  beforeAfterButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      // Dobavi URL slike prije i poslije iz atributa 'data-before-after' na dugmetu
      var imageUrl = this.getAttribute("data-before-after");
      // Pozovi funkciju za prikaz slike prije i poslije sa dobivenim URL-om slike
      showBeforeAfterImage(imageUrl);
    });
  });