var app = new Vue({
  el: '#app',
  data: {
    nameshop: 'Магазин Коробок',
    bckcolor: "#5d476b",
    textcolor: "white",
    content:[{name: "Обычные", link: "box.png", sale: 120},
    {name: "Подарочные", link: "box_present.png", sale: 200},
    {name: "Много разных", link: "box_lot.png", sale: 1000},
    {name: "Контейнер", link: "box_cargo.png", sale: 12000}],
    quantity: 0,
    boughtItems: [],
  },
  methods: {
    buyBox(num){
      class makeItems{
        constructor(name){
          this.name = name;
          this.x = 1;
        }
      }
      this.quantity += num.sale;
      if(this.boughtItems.length > 0){
        for(let y of this.boughtItems){
          if(y.name == num.name){
            y.x += 1;
          }
          else if(y.name != num.name){
            let merchandise = new makeItems(num.name);
            this.boughtItems.push(merchandise);
          }
        }
      }
      else if (this.boughtItems.length === 0){
        let merchandise = new makeItems(num.name);
        this.boughtItems.push(merchandise);
      }
    },
    clear(){
      this.quantity = 0;
      this.boughtItems = [];
    }
  }
})