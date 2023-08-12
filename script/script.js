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
        let number = "";
        let y = 0;
        while (y < this.boughtItems.length) {
          if(this.boughtItems[y].name === num){
            number += "1";
          }
          else{
            number += "0";
          }
          y += 1;
        }
        if(number.indexOf('1') > -0.1){
            this.boughtItems[number.indexOf('1')].x += 1;
        }
        else{
          this.boughtItems.push(new makeItems(num));
        }
      }
      else{
        this.boughtItems.push(new makeItems(num))
      }
    },
    clear(){
      this.quantity = 0;
      this.boughtItems = [];
    },
    activeMenu(){
      let btn = document.querySelectorAll('.menubuy');
      btn[0].classList.toggle('active');
    },
    addContent(){
      let name = document.querySelectorAll('.namecontent')[0].value;
      let cost = document.querySelectorAll('.costcontent')[0].value;
      let link = document.querySelectorAll('.linkcontent')[0].value;
      class addContent{
        constructor(name, link, cost){
          this.name = name;
          this.link = link;
          this.sale = cost;
        }
      };
      this.content.push(new addContent(name, link, parseInt(cost)));
      let btn = document.querySelectorAll('.menubuy');
      btn[0].classList.toggle('active');
    }
  }
})