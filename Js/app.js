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
        description:"El suspiro es un tipo de postre, hecho con clara de huevo batida y azúcar, preferiblemente glas, a los que se les puede añadir aromatizantes, o vainilla, avellana o almendras. Son muy ligeros y dulces y una vez hechos suelen ser usados como relleno de pasteles o, en su versión italiana, de tartas. Pueden ser blandos si se prepararan de la manera clásica o francesa, semiduros en la versión italiana, o duros si los merengues así preparados se cocinan en horno bajísimo hasta que se evapore la mayoría del agua, ya que los de mayor tamaño tienen un centro suave. "
    },
    {
        title: "Dulce de leche",
        image: "../src/img/dulce-leche.png",
        description:"El dulce de leche,es un producto lácteo (leche concentrada azucarada),producido por la cocción de leche con azúcar y que generalmente se utiliza como cobertura de postres o para untar o jaspear. Su consumo se extiende a todos los países de América Latina, a Francia y a aquellos lugares con minorías de esas nacionalidades, como España o Estados Unidos."
    },
    {
        title: "Alfajores",
        image: "../src/img/Alfajor.jpeg",
        description:"El alfajor es un postre dulce que comparte el origen con su homónimo español, una golosina tradicional de la gastronomía del Al-Ándalus, aunque guarde más similitudes con el alajú, en cuanto a su elaboración. Fue difundido en América durante el periodo colonial. Su nombre proviene del hispanoárabe al-hasú que significa 'el relleno'. El alfajor, en distintas variedades, es un postre difundido en muchos países hispanoamericanos como Argentina, Bolivia, Chile, Colombia, Costa Rica, Ecuador, México, Paraguay, Perú, Uruguay y Venezuela y El Salvador. "
    },
    {
        title: "Huevos mollos",
        image: "../src/img/mollos2.jpeg",
        description:"Los Huevos Mollos son un dulce típico de la provincia de Manabi, donde se preparan para ocasiones especiales como días festivos, celebraciones, y hasta para los funerales, existen distintas formas de prepararlos, hay quienes en lugar de espesar la masa con harina lo hacen con galletas de dulce e inclusive quienes agregan una mínima dosis de aguardiente a la mezcla, espero que disfruten de esta receta."
    },
    {
        title: "Rompope",
        image: "../src/img/rompope.jpeg",
        description:"Es una bebida tradicional conocida como tal en Belice, Costa Rica, Ecuador, El Salvador, Guatemala, Honduras, Nicaragua y México, donde fue elaborado originalmente en los conventos de la ciudad de Puebla. La palabra rompope es una derivación de la palabra rompon, que se usa para describir la versión española del ponche de huevo que llegó a México. La versión en español utiliza el ron como ingrediente principal, de ahí la raíz de rom-pon y rom-pope. En Centroamérica —especialmente en El Salvador, Guatemala y Honduras—, también existe una bebida similar conocida como rompopo."
    },
    {
        title: "Arroz con leche",
        image: "../src/img/arroz.jpeg",
        description:"El arroz con leche es un postre típico de la gastronomía de múltiples países hecho cociendo lentamente arroz con leche y azúcar. Se sirve frío o caliente y se le suele espolvorear canela, vainilla o cáscara de limón para aromatizarlo.El arroz con leche tiene orígenes muy antiguos en Asia y luego se difundió a través de Europa y África. A partir del siglo XVI tras la colonización se exportó a América debido al comercio y población europea que emigraba al territorio americano."
    },
    {
        title: "Buñuelos",
        image: "../src/img/buñuelo.jpeg",
        description:"El buñuelo es un tipo de fruta de sartén de origen español que consiste en una masa de harina frita con forma esférica. La masa puede mezclarse con agua, leche, huevo o levadura. Puede llevar un relleno que generalmente es dulce. Igualmente, en algunas regiones se utiliza tanta para dulce como para salado; por ejemplo, buñuelos de manzana o de pescado."
    },
    {
        title: "Dulce de zapallo",
        image: "../src/img/zapallo.jpeg",
        description:"El dulce de zapallo también se conoce como zapallo con miel de panela y es un postre tradicional latino preparado en Ecuador y varios paises latinos. Se prepara con zapallo o calabaza (auyama), panela (piloncillo) y especias. Este delicioso postre usa ingredientes sencillos y es muy fácil de preparar."
    },
    {
        title: "Empanada de Guayaba",
        image: "../src/img/empanada.jpeg",
        description:"Las Empanadas de guayaba (conocidos en español como pasteles o pastelitos (también el nombre de los pasteles venezolanos hechos en región de los Andes) son pasteles de puff al horno - pasteles de tipo relleno dulce o salado. Los rellenos tradicionales incluyen quesitos de queso crema, guayaba (pastelito de guayaba) y queso, piña y coco. Los dulces rellenos se elaboran con pulpas de fruta endulzadas. El relleno de queso crema también es una versión ligeramente endulzada de queso crema, que se asemeja al sabor y textura de un pastel de queso."
    },
    {
        title: "Dulce de guayaba",
        image: "../src/img/guayaba.jpeg",
        description:"Es una pasta o conserva resultante de la mezcla de guayabas maduras y panela o azúcar, la cual mediante cocción logra una contextura dura y un color rojo brillante. El producto tradicional tiene forma de bloques pequeños con dos bandas delgadas de pasta clara elaboradas con guayaba blanca, y una banda gruesa central de pasta roja, elaborada con guayaba roja. El bocadillo veleño tradicional es empacado individualmente en hojas de bijao, las cuales conservan el producto y le dan un aroma y un gusto característicos."
    },
    {
        title: "Membrillo",
        image: "../src/img/membrillo.jpeg",
        description:" El dulce de membrillo es un dulce preparado a partir de la fruta del membrillo. Es originario de España (donde se encuentran zonas de producción típicas como en el máximo exportador de dulce de membrillo mundial, Puente Genil) y de Portugal. El dulce de membrillo se emplea en la gastronomía hispanoamericana, principalmente Ecuador, argentina, costarricense, uruguaya, chilena, mexicana, peruana y puertorriqueña. En Argentina, se produce un dulce de membrillo denominado dulce de membrillo rubio de San Juan que, por sus características, ha obtenido la calificación D.O.P."
    },
    {
        title: "Guaguas de pan",
        image: "../src/img/guaguas.jpeg",
        description:"Las guaguas de pan, muñecas de pan, wawas de pan o tantawawas, son dulces que consisten en panes grandes usualmente de trigo, moldeados y adornados con forma de niño pequeño o bebé, y decorados con pasta de azúcar o caritas hechas de yeso. A veces rellenas de dulce, se elaboran y consumen junto a la colada morada y se usan como parte de ritos ancestrales en regiones andinas de Argentina, Bolivia, Ecuador, Perú y sur de Colombia, principalmente el 2 de noviembre en conmemoración de los fieles difuntos, pero también en fiestas agrarias, carnavales y Navidad como elemento simbólico de alianzas y compromisos sociales.."
    },
    {
        title: "Torta de yuca",
        image: "../src/img/torta.jpeg",
        description:"La torta de yuca es un plato muy querido y degustado en países de América del Sur, tales como Venezuela, Colombia, Bolivia y Ecuador. Con la yuca, también conocida como mandioca o guacamota, podemos sustituir las harinas y preparar una torta que es tan deliciosa como saludable. ¡En esta ocasión, te enseñaremos cómo hacer torta de yuca!."
    },
    {
        title: "Dulce de piña",
        image: "../src/img/piña.jpeg",
        description:"Esta mermelada o dulce se puede preparar de diferentes formas, según la textura que usted desea. Lo puede hacer al estilo de una mermelada, usando piña licuada. O si lo desea más al estilo del dulce con trozos de piña caramelizada, se usa piña picada en cuadritos. O puede hacer una combinación de ambas opciones. Un postre muy común en Ecuador es queso acompañado con dulces de frutas. Se utiliza un queso muy fresco y tierno llamado quesillo. Cuando mi esposo prepara crepas  , su especialidad, para el postre utilizamos la mermelada de piña como relleno y quedan deliciosas."
    },
    {
        title: "Mantequilla de copoazu",
        image: "../src/img/mantequilla.JPG",
        description:"La mantequilla de copuazú tiene grandes propiedades humectantes, ya que al tener la capacidad de retener la hidratación en piel y cabello 240% mas que la lanolina y su alto contenido en proteínas, calcio, fósforo, hierro, vitaminas B y C, así como ácidos grasos insaturados, resulta ser una potentente aliada para el cuidado de los cabellos secos. Use este producto en el cabello después de su crema de peinar favorita. Concéntrese específicamente en puntas y medios si lo que desea es moldear sus rizos. En la piel, se recomienda aplicarla después del baño."
    },
    {
        title: "Casabe de yuca",
        image: "../src/img/casabe.jpg",
        description:"El casabe de yuca es un pan ácimo, crujiente, delgado y circular hecho de harina de yuca. Este se asa en un budare, comal o a la plancha. Su producción y consumo se remonta a tiempos prehispánicos; se elabora a partir de la yuca o mandioca. La yuca o mandioca era, junto al maíz, uno de los principales cultivos de la época precolombina. Debido a las posibilidades de conservación, el casabe era una de las fuentes fundamentales de alimentación de los indígenas del norte del subcontinente."
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