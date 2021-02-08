var app = new Vue ({
  el: '#root',
  data : {
    counter: 0,
    searchInput: '',
    messageInput: '',
    active : false,
    messageCounter : -1,
    src: 'img/avatar_',
    ext: '.jpg',
    user: {
      name: 'User',
      avatar: 'io'
    },
    contacts : [
      {
        name: 'Roberto',
        avatar: '1',
        visible: true,
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
        name: 'Vanessa',
        avatar: '2',
        visible: true,
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
        name: 'Andrea',
        avatar: '3',
        visible: true,
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
        name: 'Giancarlo',
        avatar: '4',
        visible: true,
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
        name: 'Diego',
        avatar: '5',
        visible: true,
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
        name: 'Viviana',
        avatar: '6',
        visible: true,
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
        name: 'Pippo',
        avatar: '7',
        visible: true,
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
        name: 'Rosario',
        avatar: '8',
        visible: true,
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
    scrollDown() {
      document.getElementById('conv').scrollTo(0,9999)
    },
    openConv(i){
      this.counter = i;
      setTimeout(this.scrollDown, 0);
    },
    searchContact(){
      const lowerCaseInput = this.searchInput.toLowerCase();
      this.contacts.forEach((e, i) => {
        const lowerCaseName = e.name.toLowerCase();
        if (!lowerCaseName.includes(lowerCaseInput)) {
          e.visible = false;
        } else if (lowerCaseName.includes(lowerCaseInput)) {
          e.visible = true;
        }
      });
    },
    sendMessage(){
      if (this.messageInput != '') {
        const message = {
          date : dayjs().format('DD/MM/YYYY HH:mm:ss'),
          text : this.messageInput,
          status : 'sent'
        }
        this.contacts[this.counter].messages.push(message);
        setTimeout(this.scrollDown, 0);
        this.messageInput = '';
        setTimeout(() => {
          const reply = {
            date : dayjs().format('DD/MM/YYYY HH:mm:ss'),
            text : 'ok',
            status : 'received'
          }
          this.contacts[this.counter].messages.push(reply);
          setTimeout(this.scrollDown, 0);
        }, 1000);
      }
    },
    messageMenu(i) {
      this.messageCounter = i;
      this.active = !this.active;
    },
    deleteMessage(i) {
      this.contacts[this.counter].messages.splice(i, 1);
    }
  }
});
