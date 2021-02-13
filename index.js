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
