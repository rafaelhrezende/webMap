Vue.component('list-message', {
  props: ['content'],
  template: '<li v-on:mouseover="content.showInput = true" v-on:mouseout="content.showInput = false">'+
              '{{content.id}} - {{ content.location}}  {{content.message}}'+
                '<input class="form__input--short" v-model="content.color" type="color"  >'+
              '<input class="form__input--large" v-show="content.showInput" v-model="content.location"/>' +

            '</li>'
})

Vue.component('add-location', {
  props: ['content'],
  template: '<section>'+
                '<input class="form__input--large" v-model="content.data.location" @keyup.enter="content.actionAdd"/> '+
                 '<button v-bind:class="content.css.class_button" v-on:click="content.actionAdd" >Add</button>'+
            '</section>'
})
