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
            text: 'Bene',
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
      },
      {
        name: 'Pippo4',
        avatar: '4',
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
      },
      {
        name: 'Pippo5',
        avatar: '5',
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
      },
      {
        name: 'Pippo6',
        avatar: '6',
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
      },
      {
        name: 'Pippo7',
        avatar: '7',
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
      this.contacts[i].visible = true;
      this.counter = i;
    }
  }
});
