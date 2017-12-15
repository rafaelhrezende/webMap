Vue.component('list-message', {
  props: ['content'],
  template: '<li>{{content.id}} - {{ content.location}} |{{content.status}} | {{content.message}}</li>'
})
