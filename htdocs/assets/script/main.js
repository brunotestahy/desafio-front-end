var GloboLibrary = (function () {
   console.log('Library started');


   // When click in every anchor link, it closes the menu
   function binUIEvents() {
      const destaquesAnchor = document.getElementById('destaques-link');
      const brasilAnchor = document.getElementById('brasil-link');
      const brasilMoreLink = document.getElementById('brasil-more-link');
      const mundoAnchor = document.getElementById('mundo-link');
      const mundoMoreLink = document.getElementById('mundo-more-link');
      const menuCheckbox = document.getElementById('navigation-check');

      destaquesAnchor.addEventListener('click', function () {
         menuCheckbox.checked = !menuCheckbox.checked;
      });

      brasilAnchor.addEventListener('click', function () {
         menuCheckbox.checked = !menuCheckbox.checked;
      });

      brasilMoreLink.addEventListener('click', function () {
         showMoreBrasilContent();
      });

      mundoAnchor.addEventListener('click', function () {
         menuCheckbox.checked = !menuCheckbox.checked;
      });

      mundoMoreLink.addEventListener('click', function () {
         showMoreMundoContent();
      });
   }

   // Fetch the data from the file by ajax request
   function loadDataFromAPI() {
      const endPointApi = '../data.json?t=' + Math.random();
      const httpMethod = 'GET';
      const xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
         if (this.readyState === 4) {
            if (this.status === 200) {
               console.log(JSON.parse(this.responseText));
               var result = JSON.parse(this.responseText);
               buildDestaquesContent(result['section'][0]['data']);
               buildBrasilContent(result['section'][1]['data']);
               buildMundoContent(result['section'][2]['data']);
            } else {
               console.log('Erro => Code: ', this.status);
            }
         }
      };
      xhttp.open(httpMethod, endPointApi, true);
      xhttp.send();
   }

   // Build the first section of the page: Destaques
   function buildDestaquesContent(content) {
      if (!content) {
         return;
      }

      var destaqueImages = document.getElementsByClassName('destaque-image');
      var destaqueSection = document.getElementsByClassName('destaque-section');
      var destaqueTitle = document.getElementsByClassName('destaque-title');
      var destaqueDescription = document.getElementsByClassName('destaque-description');
      var destaqueSectionMobile = document.getElementsByClassName('destaque-mobile-section');
      var destaqueTitleMobile = document.getElementsByClassName('destaque-mobile-title');
      var destaqueDescriptionMobile = document.getElementsByClassName('destaque-mobile-description');
      var length = destaqueImages.length;

      for (var i = 0; i < length; i++) {
         destaqueImages[i].style.backgroundImage = 'url(./assets/media/' + content[i]['image'] + ')';
         destaqueSection[i].innerHTML = content[i]['label'];
         destaqueTitle[i].innerHTML = content[i]['title'];
         destaqueDescription[i].innerHTML = content[i]['description'];

         // Just the mobile elements of destaques
         if (destaqueSectionMobile[i]) {
            destaqueSectionMobile[i].innerHTML = content[i]['label'];
            destaqueTitleMobile[i].innerHTML = content[i]['title'];
            destaqueDescriptionMobile[i].innerHTML = content[i]['description'];
         }
      }
   }

   // Build the second section of the page: Brasil
   function buildBrasilContent(content) {
      if (!content) {
         return;
      }

      var firstRowElement = document.getElementById('brasil-row');
      var secondRowElement = document.getElementById('brasil-row2');
      var baseElement = document.getElementById('brasil-base-element');
      var length = content.length;

      // Create all the elements
      for (var i = 1; i < length; i++) {
         var copyElement = baseElement.cloneNode(true);
         if (i < (length/2)) {
            firstRowElement.appendChild(copyElement);
         } else {
            secondRowElement.appendChild(copyElement);
         }
      }

      var brasilImages = document.getElementsByClassName('brasil-image');
      var brasilSection = document.getElementsByClassName('brasil-section');
      var brasilTitle = document.getElementsByClassName('brasil-title');
      var brasilDescription = document.getElementsByClassName('brasil-description');
      var brasilSectionMobile = document.getElementsByClassName('brasil-mobile-section');
      var brasilTitleMobile = document.getElementsByClassName('brasil-mobile-title');
      var brasilDescriptionMobile = document.getElementsByClassName('brasil-mobile-description');

      // Set the value in every element
      for (var j = 0; j < length; j++) {
         brasilImages[j].style.backgroundImage = 'url(./assets/media/' + content[j]['image'] + ')';
         brasilSection[j].innerHTML = content[j]['label'];
         brasilTitle[j].innerHTML = content[j]['title'];
         brasilDescription[j].innerHTML = content[j]['description'];

         // Just the mobile elements of brasil
         if (brasilSectionMobile[j]) {
            console.log('Entrei MOBILE');
            brasilSectionMobile[j].innerHTML = content[j]['label'];
            brasilTitleMobile[j].innerHTML = content[j]['title'];
            brasilDescriptionMobile[j].innerHTML = content[j]['description'];
         }

      }
      // Hide the second array of items
      secondRowElement.style.display = 'none';
   }

   // Show additional Brasil content throughout the click
   function showMoreBrasilContent() {
      var firstRowElement = document.getElementById('brasil-row');
      var secondRowElement = document.getElementById('brasil-row2');

      if (secondRowElement.style.display === 'none') {
         firstRowElement.style.display = 'none';
         secondRowElement.style.display = '';
      } else {
         firstRowElement.style.display = '';
         secondRowElement.style.display = 'none';
      }
   }

   // Build the second section of the page: Mundo
   function buildMundoContent(content) {
      if (!content) {
         return;
      }

      var firstRowElement = document.getElementById('mundo-row');
      var secondRowElement = document.getElementById('mundo-row2');
      var baseElement = document.getElementById('mundo-base-element');
      var length = content.length;

      // Create all the elements
      for (var i = 1; i < length; i++) {
         var copyElement = baseElement.cloneNode(true);
         if (i < (length/2)) {
            firstRowElement.appendChild(copyElement);
         } else {
            secondRowElement.appendChild(copyElement);
         }
      }

      var mundoImages = document.getElementsByClassName('mundo-image');
      var mundoSection = document.getElementsByClassName('mundo-section');
      var mundoTitle = document.getElementsByClassName('mundo-title');
      var mundoDescription = document.getElementsByClassName('mundo-description');
      var mundoSectionMobile = document.getElementsByClassName('mundo-mobile-section');
      var mundoTitleMobile = document.getElementsByClassName('mundo-mobile-title');
      var mundoDescriptionMobile = document.getElementsByClassName('mundo-mobile-description');

      // Set the value in every element
      for (var j = 0; j < length; j++) {
         mundoImages[j].style.backgroundImage = 'url(./assets/media/' + content[j]['image'] + ')';
         mundoSection[j].innerHTML = content[j]['label'];
         mundoTitle[j].innerHTML = content[j]['title'];
         mundoDescription[j].innerHTML = content[j]['description'];

         // Just the mobile elements of brasil
         if (mundoSectionMobile[j]) {
            console.log('Entrei MOBILE');
            mundoSectionMobile[j].innerHTML = content[j]['label'];
            mundoTitleMobile[j].innerHTML = content[j]['title'];
            mundoDescriptionMobile[j].innerHTML = content[j]['description'];
         }
      }
      secondRowElement.style.display = 'none';
   }

   // Show additional Mundo content throughout the click
   function showMoreMundoContent() {
      var firstRowElement = document.getElementById('mundo-row');
      var secondRowElement = document.getElementById('mundo-row2');

      if (secondRowElement.style.display === 'none') {
         firstRowElement.style.display = 'none';
         secondRowElement.style.display = '';
      } else {
         firstRowElement.style.display = '';
         secondRowElement.style.display = 'none';
      }
   }

   // Init calling the needed functions
   function initCalls() {
      binUIEvents();
      loadDataFromAPI();
   }

   return {
      initCalls: initCalls
   };
})();
GloboLibrary.initCalls();
