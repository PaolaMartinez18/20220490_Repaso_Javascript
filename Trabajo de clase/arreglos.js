const basesMaquillaje = [
    { marca: "L'Oréal", nombre: "Infalible 24H Fresh Wear", tono: "Nude Rose", precio: 25.99 },
    { marca: "Maybelline", nombre: "Fit Me Dewy + Smooth", tono: "Ivory", precio: 14.99 },
    { marca: "MAC", nombre: "Studio Fix Fluid", tono: "NC20", precio: 32.00 },
    { marca: "Fenty Beauty", nombre: "Pro Filt'r Soft Matte Longwear Foundation", tono: "420", precio: 36.00 },
    { marca: "NARS", nombre: "Sheer Glow Foundation", tono: "Mont Blanc", precio: 39.00 },
];


const correctoresOjeras = [
    { marca: "Tarte", nombre: "Shape Tape Concealer", tono: "Light Medium", precio: 24.00 },
    { marca: "Too Faced", nombre: "Born This Way Super Concealer", tono: "Light Sand", precio: 22.00 },
    { marca: "Becca", nombre: "Under Eye Brightening Corrector", tono: "Medium", precio: 32.00 },
    { marca: "NYX Professional Makeup", nombre: "Can't Stop Won't Stop Concealer", tono: "Light", precio: 8.99 },
    { marca: "Maybelline", nombre: "Age Rewinder Concealer", tono: "Neutral Beige", precio: 6.99 },
];


const polvosSueltos = [
    { marca: "Laura Mercier", nombre: "Translucent Loose Setting Powder", precio: 34.00 },
    { marca: "MAC", nombre: "Mineralize Loose Powder", precio: 29.00 },
    { marca: "Maybelline", nombre: "Fit Me Loose Powder", tono: "Translucent", precio: 7.99 },
    { marca: "NYX Professional Makeup", nombre: "Mineral Veil Loose Setting Powder", precio: 8.49 },
    { marca: "Rimmel London", nombre: "Stay Matte Loose Powder", precio: 5.99 },
];

const polvosCompactos = [
    { marca: "Clinique", nombre: "Blended Powder Blush", tono: "Peach Pop", precio: 25.00 },
    { marca: "NARS", nombre: "Blush", tono: "Orgasm", precio: 30.00 },
    { marca: "Too Faced", nombre: "Sweet Peach Blush", tono: "Bellini", precio: 22.00 },
    { marca: "Milani", nombre: "Baked Blush", tono: "Luminoso", precio: 8.99 },
    { marca: "NYX Professional Makeup", nombre: "Sweet Cheeks Blush", tono: "Nude Peach", precio: 5.99 },
];


const bronceadores = [
    { marca: "Fenty Beauty", nombre: "Sun Stalk'r Instant Bronzer", tono: "Ambré", precio: 32.00 },
    { marca: "Benefit", nombre: "Hoola Bronzer", precio: 30.00 },
    { marca: "Too Faced", nombre: "Chocolate Soleil Bronzer", tono: "Medium", precio: 26.00 },
    { marca: "Physicians Formula", nombre: "Butter Bronzer", tono: "Murumuru", precio: 16.99 },
    { marca: "NYX Professional Makeup", nombre: "Matte Bronzer", tono: "Medium", precio: 6.99 },
];


const iluminadores = [
    { marca: "Becca", nombre: "Shimmering Skin Perfector Pressed Highlighter", tono: "Champagne Pop", precio: 38.00 },
    { marca: "Anastasia Beverly Hills", nombre: "Amrezy Highlighter", precio: 25.00 },
    { marca: "Fenty Beauty", nombre: "Killawatt Freestyle Highlighter", tono: "How Many Watts?", precio: 26.00 },
];

const sombrasOjos = [
    { marca: "Urban Decay", nombre: "Naked Heat Eyeshadow Palette", precio: 49.00, tipo: "Paleta" },
    { marca: "Too Faced", nombre: "Chocolate Bon Bons Eyeshadow Palette", precio: 25.00, tipo: "Paleta" },
    { marca: "Huda Beauty", nombre: "Obsessions Eyeshadow Palette - Rose Quartz", precio: 22.00, tipo: "Paleta" },
    { marca: "Anastasia Beverly Hills", nombre: "Soft Glam Eyeshadow Palette", precio: 45.00, tipo: "Paleta" },
    { marca: "NYX Professional Makeup", nombre: "Ultimate Eyeshadow Palette - Warm Neutrals", precio: 16.99, tipo: "Paleta" },
];

const delineadoresOjos = [
    { marca: "Kat Von D", nombre: "Tattoo Liner", color: "Trooper", precio: 20.00, tipo: "Líquido" },
    { marca: "Urban Decay", nombre: "24/7 Glide-On Eye Pencil", color: "Blackheart", precio: 22.00, tipo: "Lápiz" },
    { marca: "Stila", nombre: "Stay All Day Waterproof Liquid Eyeliner", color: "Raven", precio: 21.00, tipo: "Líquido" },
    { marca: "NYX Professional Makeup", nombre: "Epic Ink Liner", color: "Black", precio: 8.99, tipo: "Líquido" },
    { marca: "Maybelline", nombre: "Hyper Precise Eyeliner", color: "Blackest Black", precio: 7.99, tipo: "Líquido" },
];

const mascarasPestañas = [
    { marca: "Too Faced", nombre: "Better Than Sex Mascara", precio: 24.00 },
    { marca: "Benefit", nombre: "They're Real! Mascara", precio: 25.00 },
    { marca: "L'Oréal", nombre: "Voluminous Lash Paradise Mascara", precio: 14.99 },
    { marca: "Essence", nombre: "Lash Princess False Lash Effect Mascara", precio: 4.99 },
    { marca: "Maybelline", nombre: "The Colossal Big Shot Mascara", precio: 8.99 },
];

const labiales = [
    { marca: "MAC", nombre: "Retro Matte Lipstick", tono: "Ruby Woo", precio: 18.00, tipo: "Matiz" },
    { marca: "NARS", nombre: "Audacious Lipstick", tono: "Grace", precio: 32.00, tipo: "Matiz" },
    { marca: "Fenty Beauty", nombre: "Stunna Lip Paint", tono: "Uncensored", precio: 24.00, tipo: "Líquido" },
    { marca: "Maybelline", nombre: "Super Stay Ink Crayon Lipstick", tono: "Fighter", precio: 9.99, tipo: "Lápiz" },
    { marca: "Revlon", nombre: "Super Lustrous The Shine Lipstick", tono: "Black Cherry", precio: 6.99, tipo: "Barra" },
];


const arreglosMaquillaje = [
    basesMaquillaje,
    correctoresOjeras,
    polvosSueltos,
    polvosCompactos,
    bronceadores,
    iluminadores,
    sombrasOjos,
    delineadoresOjos,
    mascarasPestañas,
    labiales,
];

const informacionMaquillaje = arreglosMaquillaje.map(arreglo => {
    return arreglo.map(producto => {
        return {
            tipo: producto.tipo || "", // Se agrega tipo si existe, sino cadena vacía
            marca: producto.marca,
            nombre: producto.nombre,
            precio: producto.precio,
            tono: producto.tono || "" // Se agrega tono si existe, sino cadena vacía
        };
    });
});


const productosDiv = document.getElementById("productos");
        informacionMaquillaje.forEach(productos => {
            productos.forEach(producto => {
                const productoDiv = document.createElement("div");
                productoDiv.innerHTML = `
                    <p>Marca: ${producto.marca}</p>
                    <p>Nombre: ${producto.nombre}</p>
                    <p>Precio: $${producto.precio.toFixed(2)}</p>
                    ${producto.tipo ? `<p>Tipo: ${producto.tipo}</p>` : ''}
                    ${producto.tono ? `<p>Tono: ${producto.tono}</p>` : ''}
                    <hr>
                `;
                productosDiv.appendChild(productoDiv);
            });
        });

        document.addEventListener("DOMContentLoaded", async function() {
            try {
                const response = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json');
                const data = await response.json();
                const productosDiv = document.getElementById('productos');

                data.forEach(producto => {
                    const productoDiv = document.createElement('div');
                    productoDiv.innerHTML = `
                        <p>Marca: ${producto.brand}</p>
                        <p>Nombre: ${producto.name}</p>
                        <p>Precio: ${producto.price}</p>
                        ${producto.product_type ? `<p>Tipo de producto: ${producto.product_type}</p>` : ''}
                        ${producto.product_colors ? `<p>Colores disponibles: ${producto.product_colors.map(color => color.colour_name).join(', ')}</p>` : ''}
                        <hr>
                    `;
                    productosDiv.appendChild(productoDiv);
                });
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        });

 


