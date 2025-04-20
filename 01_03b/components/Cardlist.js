import Card from "./Card.js";

const CardlistItem = (imgData) => {
  return `
    <li class= "cardlist__item">
      ${Card(imgData)}
    </li>
  `;
};

const Cardlist = (data) => {
  return `
  <link href="components/cardlist.css" rel="stylesheet"/>
  <section class="cardlist">
    <ul class= "cardlist__list">
      ${data.map((imgData) => CardlistItem(imgData)).join("")}
    </ul>
  </section>
  `;
};

export default Cardlist;
