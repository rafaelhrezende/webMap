Vue.component('list-message', {
  props: ['content'],
  template: '<div v-on:mouseover="content.showInput = true" v-on:mouseout="content.showInput = false">'+
              '<input type="checkbox" v-model="content.active" >'+
              '{{content.id}} - {{ content.location}}  {{content.message}}'+
                '<input class="form__input--short" v-model="content.color" type="color"  >'+
                '<input class="form__input--large" v-show="content.showInput" v-model="content.location"/>' +
            '</div>'
})

Vue.component('add-location', {
  props: ['content'],
  template:
  '<section>'+
      '<div class="input-group input-group-justified">'+
          '<input class="form__input--large" v-model="content.data.location" @keyup.enter="content.actionAdd"/> '+
          '<button v-bind:class="content.css.class_button" v-on:click="content.actionAdd" >Add</button>'+
       '</div>'+
       '<div class="btn-group btn-group-justified">'+
          '<button v-bind:class="content.css.class_button" v-on:click="content.actionCheckAll(true)" >Check</button> '+
          '<button v-bind:class="content.css.class_button" v-on:click="content.actionCheckAll(false)" >Uncheck</button>'+
          '<button class="btn btn-sm btn-warning" v-on:click="content.actionClear" >Clear</button>'+
       '</div>'+
  '</section>'
})
