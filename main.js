/*Obiettivo:
Ricreare lo slider già fatto in jquery con Vue.js.
Scaricate da qui la repository: https://bitbucket.org/booleancareers/lc-ex-slider-layout/downloads/
In questo caso dovete modificare l'html (semplificarlo di molto!) perché ora ci penserà vue.js!
Consigli:
Sdraticate da tutte le sinapsi ( :smile: ) ciò che jquery ci aveva insegnato. Ricordiamoci che con Vue.js comanda il dato.
I dati infatti non li prendiamo più dall'HTML ma li creiamo e gestiamo noi. Poi l'html andrà a recuperarli dal dato stesso.*/

// INSTANZIAMENTO DI VUE:
new Vue({
 el: '#root',
 data: {
    imgIndex: 0,
    images : [
      'https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg',
      'https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg',
      'https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg'
    ],
  },
  methods : {
  next: function() {
  this.imgIndex += 1;
  if (this.imgIndex > (this.images.length - 1)) {
    this.imgIndex = 0;
  }
  },
  prev: function() {
  this.imgIndex -= 1;
  if (this.imgIndex < 0) {
    this.imgIndex = this.images.length - 1;
  }
  }
}
});

Vue.config.devtools = true;
