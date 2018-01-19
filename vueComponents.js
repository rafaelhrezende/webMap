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
  template: '<section>'+
                '<input class="form__input--large" v-model="content.data.location" @keyup.enter="content.actionAdd"/> '+
                 '<button v-bind:class="content.css.class_button" v-on:click="content.actionAdd" >Add</button>'+
                 '<button v-bind:class="content.css.class_button" v-on:click="content.actionCheckAll(true)" >Check All</button> '+
                 '<button v-bind:class="content.css.class_button" v-on:click="content.actionCheckAll(false)" >Uncheck All</button>'+

            '</section>'
})
