var app = new Vue({ 
    el: '#app',
    data: {
        message: 'Hello My first Vue!'
    }
});

const example = new Vue({
    el: '#example',
    data: {
      greeting: 'Hello Vue.js!',
    },
});

const googleLink = new Vue({
    el: '#googleLink',
    data: {
      url: 'https://www.google.com/?hl=ja',
    },
});

const app3 = new Vue({
  el: '#app3',
  data: {
    members: ['俺', 'あいつ', 'こいつ', '貴様','俺'],
  },
});

const app4 = new Vue({
  el: '#app4',
  data: {
    characters: {
      hero: '桃太郎',
      friend: 'イヌ',
      enemy: '鬼',
    },
  },
});

const app5 = new Vue({
  el: '#app5',
  data: {
    message: 'HelloWorld!'
  },
  methods: {
    reverseMessage: function(){
      this.message = this.message.split('').reverse().join('')
    }
  }
})

const app6 = new Vue({
  el: '#app6',
  data: {
    name: 'Seiji',
  },
  methods: {
    sayHi: function(){
      return 'Hi!';
  }
}
})

const app7 = new Vue({
  el: '#app7',
  data: {
    number: 0
  }
})

const app8 = new Vue({
  el: '#app8',
  data: {
    number: 0,
    x: 0,
    y: 0
  },
  methods: {
    countUp: function(times){
      this.number += 1 *times
    },
    changeMousePosition: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    noEvent: function(event) {
      event.stopPropagation()
    }
  }
})

const app9 = new Vue({
  el: '#app9',
  data: {
    name: ''
  }
})
const app10 = new Vue({
   el: '#app10',
   data: {
     styleColor: {
       color: 'red',
       'background-color': 'blue'
     }
   }
 })

const app11 = new Vue({
  el: '#app11',
  data: {
    ok:true,
    maybeOk: false
  }
})

const app12 = new Vue({
  el: '#app12',
  data: {
    lastNames: ['yamda','tanaka','ikeda'],
    object: {
      lastName: ['yamda','tanaka','ikeda'],
      firstName: ['seiji','takeshi','kouki'],
      'age': ['21','22','23']
    }
  }
})

const app13 = new Vue({
  el: '#app13',
  data: {
    lastNames: ['yamda','tanaka','ikeda'],
  }
})

const app14 = new Vue({
  el: '#app14',
  data: {
    lastNames: ['yamda','tanaka','ikeda']
  },
  methods: {
    remove: function() {
      this.lastNames.shift()
    }
  }
})