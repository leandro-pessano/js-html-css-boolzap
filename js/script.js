var app = new Vue ({
  el: '#root',
  data : {
    counter: 0,
    src: 'img/avatar_',
    ext: '.jpg',
    user: {
      name: 'User',
      avatar: 'io'
    },
    contacts : [
      {
        name: 'Pippo1',
        avatar: '1',
        visible: false,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Antani, blinda la supercazzola prematurata con doppio scappellamento a destra?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Come?',
            status: 'received'
          },
          {
            date: '10/01/2020 16:15:22',
            text: 'A destra, per due!',
            status: 'sent'
          }
        ]
      },
      {
        name: 'Pippo2',
        avatar: '2',
        visible: false,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Ciao',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Come stai?',
            status: 'sent'
          },
          {
            date: '10/01/2020 16:15:22',
            text: 'Bene, grazie. E tu?',
            status: 'received'
          }
        ]
      },
      {
        name: 'Pippo3',
        avatar: '3',
        visible: false,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Che ha fatto ieri la Juve?',
            status: 'sent'
          },
          {
            date: '10/01/2020 16:15:22',
            text: 'Ha vinto!',
            status: 'received'
          }
        ]
      },
      {
        name: 'Pippo4',
        avatar: '4',
        visible: false,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Hey, com\'è andato il colloquio?',
            status: 'sent'
          },
          {
            date: '10/01/2020 16:15:22',
            text: 'Bene, dopo ti racconto',
            status: 'received'
          }
        ]
      },
      {
        name: 'Pippo5',
        avatar: '5',
        visible: false,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Hai fatto la spesa?',
            status: 'received'
          },
          {
            date: '10/01/2020 16:15:22',
            text: 'No. Falla tu!',
            status: 'sent'
          }
        ]
      },
      {
        name: 'Pippo6',
        avatar: '6',
        visible: false,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Da McDonald ci sono i BigMac a 2 euro, ci andiamo?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Va bene! Passo a prenderti tra 10 minuti',
            status: 'received'
          },
          {
            date: '10/01/2020 16:15:22',
            text: 'Ok, a dopo',
            status: 'sent'
          }
        ]
      },
      {
        name: 'Pippo7',
        avatar: '7',
        visible: false,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaah',
            status: 'received'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Ho perso le chiavi! Non posso entrare a casa',
            status: 'received'
          },
          {
            date: '10/01/2020 16:15:22',
            text: '...Arrivo',
            status: 'sent'
          }
        ]
      },
      {
        name: 'Pippo8',
        avatar: '8',
        visible: false,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Ricordati di dargli da mangiare',
            status: 'sent'
          },
          {
            date: '10/01/2020 16:15:22',
            text: 'Tutto fatto!',
            status: 'received'
          }
        ]
      }
    ]
  },
  methods: {
    openConv(i){
      this.counter = i;
    }
  }
});
