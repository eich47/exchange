<template>
  <div class="currency-select"
       :class="{ open: isOpen}"
  >
    <button class="title btn btn-block position-relative px-3"
            @click.prevent="onClick"
    >
      <div class="d-flex wrapper-option align-items-center">
        <span class="mr-3"><img
          :src="select.img"
          class="img-fluid img-size"
          :alt="select.text"></span>
        <span class="text-options">{{select.text}}</span>
      </div>
    </button>
    <ul class="list-group">
      <li class="list-group-item"
          v-for="option in options"
          :key="option.id"
          :data-id="option.id"
          @click="onClickItem">
        <div class="d-flex wrapper-option align-items-center">
          <span class="mr-3"><img
            :src="option.img"
            class="img-fluid img-size"
            :alt="option.text"></span>
          <span class="text-options">{{option.text}}</span>
        </div>
      </li>

    </ul>
  </div>
</template>

<script>
  export default {
    name: "CalculatorSelect",
    data(){
      return {
        isOpen: false,
      }
    },
    props: {
      options: {
        type: Array,
        required: true,
      },
      selected: {
        type: Number,
        required: true,
      },
    },
    computed: {
      select(){
        console.log(this.selected);
        return this.options.find((o)=>{
          return  o.id === this.selected
        })
      },
    },
    methods: {
      onClick(){
        this.isOpen = !this.isOpen
      },
      onClickItem(event){
        this.isOpen = !this.isOpen
        console.log(event);
        const element = event.target.closest('li')
        const id = element.dataset.id
        this.selected = Number(id)

      },
    },
  }
</script>

<style scoped>
    ul{
        display: none;
    }
    li{
        cursor: pointer;
    }
    .open ul{
        display: block;
        position: absolute;
        width: 140px;
    }

    .img-size{
        width: 30px;
    }
    .title{
        width: 140px;
    }
    .title::after {
        border: medium solid transparent;
        content: "";
        top: 39%;
        left: 50%;
        position: absolute;
        height: 0;
        width: 0;
        border-top-color: #000000;
        border-width: 9px;
        margin-left: 44px;
    }

</style>