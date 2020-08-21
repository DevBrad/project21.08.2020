class Header {
    constructor(li1,li2,li3) {
      this.headerName1 = li1;
      this.headerName2 = li2;
      this.headerName3 = li3;
    }

    present() {

      return `
      <ul id="unordered_list">
        <li> <a href="#">${this.headerName1}</a></li>
        <li> <a href="#">${this.headerName2}</a></li>
        <li> <a href="#">${this.headerName3}</a></li>
      </ul>
      `;

    }

  }
  
  items = new Header("Home","About","Contact");
  
  document.getElementById("header").innerHTML = items.present();