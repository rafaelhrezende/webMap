Vue.component('list-message', {
  props: ['content'],
  template: '<li v-on:mouseover="content.showInput = true" v-on:mouseout="content.showInput = false">'+
              '{{content.id}} - {{ content.location}}  {{content.message}}'+
              '<input class="form__input--large" v-show="content.showInput" v-model="content.location"/>' +
            '</li>'
})
