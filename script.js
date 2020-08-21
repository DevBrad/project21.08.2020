class Header {
    constructor(li1,li2,li3) {
      this.headerName1 = li1;
      this.headerName2 = li2;
      this.headerName3 = li3;
    }

    showHeader() {

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
  
  document.getElementById("header").innerHTML = items.showHeader();

  class Presentation {
      constructor(header){
          this.header = header;


      }

      showContainerPresentation(){
          return `
          <div id="container">
          <h1 id="header_container">${this.header}</h1>
          <img src="images/me.jpg">
          
          </div>
          `
      }
  }

  header = new Presentation('Hello')

  document.getElementById('section_presentation').innerHTML = header.showContainerPresentation()