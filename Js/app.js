const d = document;

const $template = d.querySelector('template').content;
const $fragment = d.createDocumentFragment();
const cardCosta = d.querySelector('.card-costa');
const cardSierra = d.querySelector('.card-sierra');
const cardOriente = d.querySelector('.card-oriente');
const $container = d.querySelector('.container');
const $itemsCard = [
    {
        title: "Suspiros",
        image: "../src/img/suspiro.jpeg",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus delectus ut aspernatur quas similique quam aliquam incidunt nisi, voluptatem molestiae, nostrum reprehenderit laboriosam placeat velit labore assumenda magnam ipsa sit."
    },
    {
        title: "Dulce de leche",
        image: "../src/img/dulce-leche.png",
        description:"Lorem dulce de leche dolor sit amet consectetur adipisicing elit. Temporibus delectus ut aspernatur quas similique quam aliquam incidunt nisi, voluptatem molestiae, nostrum reprehenderit laboriosam placeat velit labore assumenda magnam ipsa sit."
    },
    {
        title: "Alfajores",
        image: "../src/img/Alfajor.jpeg",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus delectus ut aspernatur quas similique quam aliquam incidunt nisi, voluptatem molestiae, nostrum reprehenderit laboriosam placeat velit labore assumenda magnam ipsa sit."
    },
    {
        title: "Huevos mollos",
        image: "../src/img/mollos2.jpeg",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus delectus ut aspernatur quas similique quam aliquam incidunt nisi, voluptatem molestiae, nostrum reprehenderit laboriosam placeat velit labore assumenda magnam ipsa sit."
    },
    {
        title: "Rompope",
        image: "../src/img/rompope.jpeg",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus delectus ut aspernatur quas similique quam aliquam incidunt nisi, voluptatem molestiae, nostrum reprehenderit laboriosam placeat velit labore assumenda magnam ipsa sit."
    },
    {
        title: "Arroz con leche",
        image: "../src/img/arroz.jpeg",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus delectus ut aspernatur quas similique quam aliquam incidunt nisi, voluptatem molestiae, nostrum reprehenderit laboriosam placeat velit labore assumenda magnam ipsa sit."
    },
    {
        title: "Buñuelos",
        image: "../src/img/buñuelo.jpeg",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus delectus ut aspernatur quas similique quam aliquam incidunt nisi, voluptatem molestiae, nostrum reprehenderit laboriosam placeat velit labore assumenda magnam ipsa sit."
    },
    {
        title: "Dulce de zapallo",
        image: "../src/img/zapallo.jpeg",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus delectus ut aspernatur quas similique quam aliquam incidunt nisi, voluptatem molestiae, nostrum reprehenderit laboriosam placeat velit labore assumenda magnam ipsa sit."
    },
    {
        title: "Empanada de Guayaba",
        image: "../src/img/empanada.jpeg",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus delectus ut aspernatur quas similique quam aliquam incidunt nisi, voluptatem molestiae, nostrum reprehenderit laboriosam placeat velit labore assumenda magnam ipsa sit."
    },
    {
        title: "Dulce de guayaba",
        image: "../src/img/guayaba.jpeg",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus delectus ut aspernatur quas similique quam aliquam incidunt nisi, voluptatem molestiae, nostrum reprehenderit laboriosam placeat velit labore assumenda magnam ipsa sit."
    },
    {
        title: "Membrillo",
        image: "../src/img/membrillo.jpeg",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus delectus ut aspernatur quas similique quam aliquam incidunt nisi, voluptatem molestiae, nostrum reprehenderit laboriosam placeat velit labore assumenda magnam ipsa sit."
    },
    {
        title: "Guaguas de pan",
        image: "../src/img/guaguas.jpeg",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus delectus ut aspernatur quas similique quam aliquam incidunt nisi, voluptatem molestiae, nostrum reprehenderit laboriosam placeat velit labore assumenda magnam ipsa sit."
    },
    {
        title: "Torta de yuca",
        image: "../src/img/torta.jpeg",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus delectus ut aspernatur quas similique quam aliquam incidunt nisi, voluptatem molestiae, nostrum reprehenderit laboriosam placeat velit labore assumenda magnam ipsa sit."
    },
    {
        title: "Dulce de piña",
        image: "../src/img/piña.jpeg",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus delectus ut aspernatur quas similique quam aliquam incidunt nisi, voluptatem molestiae, nostrum reprehenderit laboriosam placeat velit labore assumenda magnam ipsa sit."
    },
    {
        title: "Mantequilla de copoasu",
        image: "../src/img/mantequilla.JPG",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus delectus ut aspernatur quas similique quam aliquam incidunt nisi, voluptatem molestiae, nostrum reprehenderit laboriosam placeat velit labore assumenda magnam ipsa sit."
    },
    {
        title: "Casabe de yuca",
        image: "../src/img/casabe.jpg",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus delectus ut aspernatur quas similique quam aliquam incidunt nisi, voluptatem molestiae, nostrum reprehenderit laboriosam placeat velit labore assumenda magnam ipsa sit."
    }
];

//Selector the modal
const $modal = d.querySelector('.modal');
const $dataImg = d.querySelector('.data-img');
const $dataTitle = d.querySelector('.data-title');
const $dataDescription = d.querySelector('.data-description');


const CreateCard = ()=>{
    $itemsCard.forEach((el,i)=>{
       $template.querySelector('.card-img').src = el.image;
       $template.querySelector('.card-img__title').textContent = el.title;
       $template.querySelector('.description').textContent = el.description;
    
       $clone = d.importNode($template, true);
    
       $fragment.appendChild($clone);

       AddCard(i);
    });
}

const AddCard = (i)=>{
    if(i < 6){
        cardCosta.append($fragment);
    }
    if(i > 6 && i < 12){
        cardSierra.append($fragment);
    }
    if(i > 12 && i < 16){
        cardOriente.append($fragment);
    }
}


d.addEventListener('DOMContentLoaded', ()=>{
    CreateCard();
});


d.addEventListener('click', e=>{
    if(e.target.matches('.card-dulces') || e.target.matches(`.card-dulces *`)){
        
        d.documentElement.style.overflowY = "hidden";

        $contenedor = e.target.closest('.card-dulces');

        $modal.style.visibility = 'visible';

        $dataImg.src = $contenedor.querySelector('.card-img').src;
        $dataTitle.textContent = $contenedor.querySelector('.card-img__title').textContent;
        $dataDescription.textContent = $contenedor.querySelector('.description').textContent;

    }

    if(e.target.matches('.btn-close')){
        $modal.style.visibility = 'hidden';
        d.documentElement.style.overflowY = "scroll";
    }
})