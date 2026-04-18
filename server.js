/**
 * search.js — TrendLilly Universal Search
 * Works on index.html, variety.html, product.html, product1.html … prodct11.html
 * Add  <script src="search.js"></script>  before </body> on every page.
 */
(function () {
  "use strict";

  /* ── PRODUCT DATABASE ─────────────────────────────────────────── */
  const products = [
    {name:"Light Steel Blue Salwar Suit",category:"Salwar Suit",img:"img/sast1.png",color:"Light Steel Blue",price:"₹5,087",priceOld:"₹6,900",discount:"27% OFF",fabric:"Georgette",occasion:"Festive / Party",work:"Embroidery",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"product.html"},
    {name:"Mint Green Salwar Suit",category:"Salwar Suit",img:"img/sast2.png",color:"Mint Green",price:"₹6,004",priceOld:"₹8,000",discount:"25% OFF",fabric:"Cotton",occasion:"Casual / Day",work:"Chikankari",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"product.html"},
    {name:"Soft Coral Salwar Suit",category:"Salwar Suit",img:"img/sast3.png",color:"Soft Coral Pink",price:"₹4,899",priceOld:"₹6,500",discount:"25% OFF",fabric:"Silk Blend",occasion:"Wedding / Party",work:"Zari Work",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"product.html"},
    {name:"Deep Pink Salwar Suit",category:"Salwar Suit",img:"img/sast4.png",color:"Deep Pink",price:"₹4,077",priceOld:"₹5,500",discount:"26% OFF",fabric:"Crepe",occasion:"Casual / Puja",work:"Digital Print",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"product.html"},
    {name:"Mustard Yellow Salwar Suit",category:"Salwar Suit",img:"img/sast5.png",color:"Mustard Yellow",price:"₹4,266",priceOld:"₹5,800",discount:"26% OFF",fabric:"Art Silk",occasion:"Office / Casual",work:"Embroidery",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"product.html"},
    {name:"Cream Color Salwar Suit",category:"Salwar Suit",img:"img/sast6.png",color:"Offwhite/Cream",price:"₹5,589",priceOld:"₹7,400",discount:"24% OFF",fabric:"Banarasi",occasion:"Festive",work:"Woven",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"product.html"},
    {name:"Hot Pink Salwar Suit",category:"Salwar Suit",img:"img/sast7.png",color:"Hot Pink",price:"₹999",priceOld:"₹1,499",discount:"33% OFF",fabric:"Cotton Silk",occasion:"Puja / Casual",work:"Block Print",sizes:["S","M","L","XL","XXL"],pageUrl:"product.html"},
    {name:"Royal Blue Salwar Suit",category:"Salwar Suit",img:"img/sast8.png",color:"Royal Blue",price:"₹3,199",priceOld:"₹4,299",discount:"25% OFF",fabric:"Poly Crepe",occasion:"Daily Wear",work:"Digital Print",sizes:["S","M","L","XL","XXL"],pageUrl:"product.html"},
    {name:"Blush Pink Salwar Suit",category:"Salwar Suit",img:"img/sast9.png",color:"Blush Pink",price:"₹1,099",priceOld:"₹1,499",discount:"27% OFF",fabric:"Organza",occasion:"Wedding / Party",work:"Embroidery",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"product.html"},
    {name:"Bright Blue Salwar Suit",category:"Salwar Suit",img:"img/sast10.png",color:"Bright Blue",price:"₹2,000",priceOld:"₹2,700",discount:"26% OFF",fabric:"Heavy Silk",occasion:"Wedding / Bridal",work:"Heavy Zari",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"product.html"},
    {name:"Ash Grey Salwar Suit",category:"Salwar Suit",img:"img/sast11.png",color:"Ash Grey",price:"₹1,199",priceOld:"₹1,699",discount:"29% OFF",fabric:"Cotton",occasion:"Casual / Puja",work:"Block Print",sizes:["S","M","L","XL","XXL"],pageUrl:"product.html"},
    {name:"Burnt Orange Salwar Suit",category:"Salwar Suit",img:"img/sast12.png",color:"Burnt Orange",price:"₹1,399",priceOld:"₹1,899",discount:"26% OFF",fabric:"Silk Blend",occasion:"Party / Festive",work:"Embroidery",sizes:["S","M","L","XL","XXL"],pageUrl:"product.html"},
    {name:"Taupe Brown Salwar Suit",category:"Salwar Suit",img:"img/sast13.png",color:"Taupe Brown",price:"₹1,099",priceOld:"₹1,499",discount:"27% OFF",fabric:"Georgette",occasion:"Casual / Office",work:"Printed",sizes:["S","M","L","XL","XXL"],pageUrl:"product.html"},
    {name:"Black & White Salwar Suit",category:"Salwar Suit",img:"img/sast14.png",color:"Black & White",price:"₹1,249",priceOld:"₹1,699",discount:"26% OFF",fabric:"Crepe",occasion:"Festive",work:"Embroidery",sizes:["S","M","L","XL","XXL"],pageUrl:"product.html"},
    {name:"Golden Yellow Salwar Suit",category:"Salwar Suit",img:"img/sast15.png",color:"Golden Yellow",price:"₹949",priceOld:"₹1,299",discount:"27% OFF",fabric:"Cotton Silk",occasion:"Casual / Daily",work:"Thread Work",sizes:["S","M","L","XL","XXL"],pageUrl:"product.html"},
    {name:"Indigo Blue Salwar Suit",category:"Salwar Suit",img:"img/sast16.png",color:"Indigo Blue",price:"₹1,149",priceOld:"₹1,599",discount:"28% OFF",fabric:"Art Silk",occasion:"Festive / Puja",work:"Block Print",sizes:["S","M","L","XL","XXL"],pageUrl:"product.html"},
    {name:"Crimson Salwar Suit",category:"Salwar Suit",img:"img/sast17.png",color:"Crimson Red",price:"₹1,299",priceOld:"₹1,799",discount:"28% OFF",fabric:"Georgette",occasion:"Party / Festive",work:"Embroidery",sizes:["S","M","L","XL","XXL"],pageUrl:"product.html"},
    {name:"Violet Blue Salwar Suit",category:"Salwar Suit",img:"img/sast18.png",color:"Violet Blue",price:"₹1,499",priceOld:"₹1,999",discount:"25% OFF",fabric:"Banarasi",occasion:"Wedding / Party",work:"Woven Zari",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"product.html"},
    // Sarees
    {name:"Powder Blue Saree",category:"Saree",img:"img/sar1.png",color:"Powder Blue",price:"₹1,300",priceOld:"₹2,000",discount:"35% OFF",fabric:"Georgette",occasion:"Casual / Office",work:"Digital Print",sizes:["Free Size"],pageUrl:"product1.html"},
    {name:"Ivory Cream Floral Saree",category:"Saree",img:"img/sar2.png",color:"Ivory / Cream",price:"₹1,300",priceOld:"₹2,200",discount:"41% OFF",fabric:"Cotton Silk",occasion:"Puja / Festive",work:"Floral Print",sizes:["Free Size"],pageUrl:"product1.html"},
    {name:"Pastel Multicolor Saree",category:"Saree",img:"img/sar3.png",color:"Soft Pink–Blue Mix",price:"₹1,300",priceOld:"₹2,500",discount:"48% OFF",fabric:"Organza",occasion:"Wedding / Party",work:"Embroidery",sizes:["Free Size"],pageUrl:"product1.html"},
    {name:"Dusty Rose Pink Saree",category:"Saree",img:"img/sar4.png",color:"Dusty Rose Pink",price:"₹1,300",priceOld:"₹2,000",discount:"35% OFF",fabric:"Crepe",occasion:"Casual / Festive",work:"Thread Work",sizes:["Free Size"],pageUrl:"product1.html"},
    {name:"Navy Blue Saree",category:"Saree",img:"img/sar5.png",color:"Navy Blue",price:"₹1,300",priceOld:"₹2,500",discount:"48% OFF",fabric:"Banarasi Silk",occasion:"Wedding / Party",work:"Woven Zari",sizes:["Free Size"],pageUrl:"product1.html"},
    {name:"Peach Apricot Saree",category:"Saree",img:"img/sar6.png",color:"Peach / Apricot",price:"₹1,300",priceOld:"₹2,200",discount:"41% OFF",fabric:"Cotton Silk",occasion:"Casual / Day",work:"Block Print",sizes:["Free Size"],pageUrl:"product1.html"},
    {name:"Beige Printed Saree",category:"Saree",img:"img/sar7.png",color:"Beige with Print",price:"₹1,300",priceOld:"₹2,000",discount:"35% OFF",fabric:"Art Silk",occasion:"Casual / Office",work:"Digital Print",sizes:["Free Size"],pageUrl:"product1.html"},
    {name:"Soft Blush Pink Saree",category:"Saree",img:"img/sar8.png",color:"Soft Blush Pink",price:"₹1,300",priceOld:"₹2,200",discount:"41% OFF",fabric:"Georgette",occasion:"Engagement / Party",work:"Embroidery",sizes:["Free Size"],pageUrl:"product1.html"},
    {name:"Bright Yellow Saree",category:"Saree",img:"img/sar9.png",color:"Bright Yellow",price:"₹1,300",priceOld:"₹2,000",discount:"35% OFF",fabric:"Cotton",occasion:"Haldi / Festive",work:"Block Print",sizes:["Free Size"],pageUrl:"product1.html"},
    {name:"Rose Pink Saree",category:"Saree",img:"img/sar10.png",color:"Rose Pink",price:"₹1,300",priceOld:"₹2,500",discount:"48% OFF",fabric:"Silk Blend",occasion:"Wedding / Party",work:"Zari Work",sizes:["Free Size"],pageUrl:"product1.html"},
    {name:"Seafoam Green Saree",category:"Saree",img:"img/sar11.png",color:"Seafoam Green",price:"₹1,300",priceOld:"₹2,000",discount:"35% OFF",fabric:"Cotton Silk",occasion:"Casual / Puja",work:"Thread Work",sizes:["Free Size"],pageUrl:"product1.html"},
    {name:"Mauve Brown Saree",category:"Saree",img:"img/sar12.png",color:"Mauve Brown",price:"₹1,300",priceOld:"₹2,200",discount:"41% OFF",fabric:"Banarasi",occasion:"Festive / Party",work:"Woven",sizes:["Free Size"],pageUrl:"product1.html"},
    {name:"Muted Purple Saree",category:"Saree",img:"img/sar13.png",color:"Muted Purple",price:"₹1,300",priceOld:"₹2,000",discount:"35% OFF",fabric:"Georgette",occasion:"Party / Evening",work:"Embroidery",sizes:["Free Size"],pageUrl:"product1.html"},
    {name:"Aqua Green Saree",category:"Saree",img:"img/sar14.png",color:"Aqua Green",price:"₹1,300",priceOld:"₹2,500",discount:"48% OFF",fabric:"Art Silk",occasion:"Festive / Party",work:"Digital Print",sizes:["Free Size"],pageUrl:"product1.html"},
    {name:"Taupe Grey Saree",category:"Saree",img:"img/sar15.png",color:"Taupe Grey",price:"₹1,300",priceOld:"₹2,000",discount:"35% OFF",fabric:"Crepe",occasion:"Office / Casual",work:"Printed",sizes:["Free Size"],pageUrl:"product1.html"},
    {name:"Deep Purple Saree",category:"Saree",img:"img/sar16.png",color:"Deep Purple",price:"₹1,300",priceOld:"₹2,500",discount:"48% OFF",fabric:"Heavy Silk",occasion:"Wedding / Bridal",work:"Heavy Zari",sizes:["Free Size"],pageUrl:"product1.html"},
    {name:"Teal Blue Saree",category:"Saree",img:"img/sar17.png",color:"Teal Blue",price:"₹1,300",priceOld:"₹2,200",discount:"41% OFF",fabric:"Georgette",occasion:"Party / Festive",work:"Embroidery",sizes:["Free Size"],pageUrl:"product1.html"},
    {name:"Maroon Red Saree",category:"Saree",img:"img/sar18.png",color:"Maroon Red",price:"₹1,300",priceOld:"₹2,500",discount:"48% OFF",fabric:"Banarasi Silk",occasion:"Wedding / Bridal",work:"Woven Zari",sizes:["Free Size"],pageUrl:"product1.html"},
    // Gowns
    {name:"Black Flared Gown",category:"Gown",img:"img/gown1.png",color:"Black",price:"₹1,300",priceOld:"₹2,500",discount:"48% OFF",fabric:"Georgette / Silk",occasion:"Evening / Party",work:"Minimal Embellishment",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"product2.html"},
    {name:"Deep Wine Purple Gown",category:"Gown",img:"img/gown2.png",color:"Wine Purple",price:"₹1,300",priceOld:"₹2,500",discount:"48% OFF",fabric:"Velvet",occasion:"Wedding",work:"Embroidery",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"product2.html"},
    {name:"Steel Blue Gown",category:"Gown",img:"img/gown3.png",color:"Steel Blue",price:"₹1,300",priceOld:"₹2,200",discount:"41% OFF",fabric:"Satin / Silk",occasion:"Formal",work:"Plain / Minimal",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"product2.html"},
    {name:"Maroon Red Gown",category:"Gown",img:"img/gown4.png",color:"Maroon",price:"₹1,300",priceOld:"₹2,500",discount:"48% OFF",fabric:"Silk",occasion:"Wedding",work:"Zari Work",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"product2.html"},
    {name:"Champagne Beige Gown",category:"Gown",img:"img/gown5.png",color:"Champagne",price:"₹1,300",priceOld:"₹2,000",discount:"35% OFF",fabric:"Net / Organza",occasion:"Festive",work:"Sequin Work",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"product2.html"},
    {name:"Sage Green Gown",category:"Gown",img:"img/gown6.png",color:"Sage Green",price:"₹1,300",priceOld:"₹2,000",discount:"35% OFF",fabric:"Cotton Silk",occasion:"Casual / Festive",work:"Block Print",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"product2.html"},
    {name:"Royal Blue Gown",category:"Gown",img:"img/gown7.png",color:"Royal Blue",price:"₹1,300",priceOld:"₹2,500",discount:"48% OFF",fabric:"Silk",occasion:"Party",work:"Embroidery",sizes:["S","M","L","XL","XXL"],pageUrl:"product2.html"},
    {name:"Dusty Pink Embroidered Gown",category:"Gown",img:"img/gown8.png",color:"Dusty Pink",price:"₹1,300",priceOld:"₹2,500",discount:"48% OFF",fabric:"Net",occasion:"Wedding",work:"Heavy Embroidery",sizes:["S","M","L","XL","XXL"],pageUrl:"product2.html"},
    {name:"Mauve Pink Gown",category:"Gown",img:"img/gown19.png",color:"Mauve",price:"₹1,300",priceOld:"₹2,200",discount:"41% OFF",fabric:"Georgette",occasion:"Formal",work:"Thread Work",sizes:["S","M","L","XL","XXL"],pageUrl:"product2.html"},
    {name:"Teal Green Gown",category:"Gown",img:"img/gown21.png",color:"Teal",price:"₹1,300",priceOld:"₹2,500",discount:"48% OFF",fabric:"Silk",occasion:"Festive",work:"Zari Border",sizes:["S","M","L","XL","XXL"],pageUrl:"product2.html"},
    {name:"Jet Black Gown",category:"Gown",img:"img/gown11.png",color:"Jet Black",price:"₹1,300",priceOld:"₹2,000",discount:"35% OFF",fabric:"Satin",occasion:"Evening",work:"Plain",sizes:["S","M","L","XL","XXL"],pageUrl:"product2.html"},
    {name:"Coffee Brown Gown",category:"Gown",img:"img/gown12.png",color:"Coffee Brown",price:"₹1,300",priceOld:"₹2,000",discount:"35% OFF",fabric:"Cotton",occasion:"Daily Wear",work:"Digital Print",sizes:["S","M","L","XL","XXL"],pageUrl:"product2.html"},
    {name:"Lavender Purple Gown",category:"Gown",img:"img/gown13.png",color:"Lavender",price:"₹1,300",priceOld:"₹2,200",discount:"41% OFF",fabric:"Net / Organza",occasion:"Festive",work:"Embroidery",sizes:["S","M","L","XL","XXL"],pageUrl:"product2.html"},
    {name:"Dark Plum Gown",category:"Gown",img:"img/gown14.png",color:"Dark Plum",price:"₹1,300",priceOld:"₹2,500",discount:"48% OFF",fabric:"Velvet",occasion:"Wedding",work:"Heavy Embroidery",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"product2.html"},
    {name:"Ice Blue Gown",category:"Gown",img:"img/gown15.png",color:"Ice Blue",price:"₹1,300",priceOld:"₹2,200",discount:"41% OFF",fabric:"Net",occasion:"Party",work:"Sequin & Thread Work",sizes:["S","M","L","XL","XXL"],pageUrl:"product2.html"},
    {name:"Navy Blue Gown",category:"Gown",img:"img/gown16.png",color:"Navy Blue",price:"₹1,300",priceOld:"₹2,500",discount:"48% OFF",fabric:"Silk",occasion:"Formal",work:"Woven Border",sizes:["S","M","L","XL","XXL"],pageUrl:"product2.html"},
    {name:"Mocha Brown Gown",category:"Gown",img:"img/gown17.png",color:"Mocha Brown",price:"₹1,300",priceOld:"₹2,000",discount:"35% OFF",fabric:"Cotton Silk",occasion:"Casual",work:"Block Print",sizes:["S","M","L","XL","XXL"],pageUrl:"product2.html"},
    {name:"Soft Baby Pink Gown",category:"Gown",img:"img/gown20.png",color:"Baby Pink",price:"₹1,300",priceOld:"₹2,000",discount:"35% OFF",fabric:"Organza",occasion:"Day Wear",work:"Thread Work",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"product2.html"},
    // Pant Suits
    {name:"Peach Net Suit",category:"Pant Suit",img:"img/pent1.png",color:"Peach",price:"₹3,899",priceOld:"₹5,299",discount:"27% OFF",fabric:"Net / Organza",occasion:"Wedding / Festive",work:"Anarkali",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"product3.html"},
    {name:"Mint White Suit",category:"Pant Suit",img:"img/pent2.png",color:"Mint White",price:"₹4,599",priceOld:"₹6,099",discount:"25% OFF",fabric:"Cotton",occasion:"Daily / Summer",work:"Straight Suit",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"product3.html"},
    {name:"Pistachio Green Suit",category:"Pant Suit",img:"img/pent3.png",color:"Pistachio",price:"₹3,749",priceOld:"₹4,999",discount:"25% OFF",fabric:"Georgette",occasion:"Festive",work:"A-line Suit",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"product3.html"},
    {name:"Ice Blue Suit",category:"Pant Suit",img:"img/pent4.png",color:"Ice Blue",price:"₹3,129",priceOld:"₹4,199",discount:"26% OFF",fabric:"Silk Blend",occasion:"Formal",work:"Straight Suit",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"product3.html"},
    {name:"Cream Ivory Suit",category:"Pant Suit",img:"img/pent5.png",color:"Ivory",price:"₹3,269",priceOld:"₹4,449",discount:"26% OFF",fabric:"Cotton Silk",occasion:"Traditional",work:"Classic Suit",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"product3.html"},
    {name:"Lavender Purple Suit",category:"Pant Suit",img:"img/pent6.png",color:"Lavender",price:"₹4,289",priceOld:"₹5,699",discount:"24% OFF",fabric:"Georgette",occasion:"Party",work:"Flared Suit",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"product3.html"},
    {name:"Aqua Green Suit",category:"Pant Suit",img:"img/pent7.png",color:"Aqua",price:"₹999",priceOld:"₹1,499",discount:"33% OFF",fabric:"Cotton",occasion:"Casual",work:"Straight Suit",sizes:["S","M","L","XL","XXL"],pageUrl:"product3.html"},
    {name:"Powder Blue Suit",category:"Pant Suit",img:"img/pent8.png",color:"Powder Blue",price:"₹2,989",priceOld:"₹3,999",discount:"26% OFF",fabric:"Chiffon",occasion:"Festive",work:"Embroidered Suit",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"product3.html"},
    {name:"Champagne Gold Suit",category:"Pant Suit",img:"img/pent9.png",color:"Champagne",price:"₹5,219",priceOld:"₹6,899",discount:"25% OFF",fabric:"Silk",occasion:"Wedding",work:"Elegant Suit",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"product3.html"},
    {name:"Soft Pink Suit",category:"Pant Suit",img:"img/pent10.png",color:"Baby Pink",price:"₹7,319",priceOld:"₹9,999",discount:"27% OFF",fabric:"Georgette",occasion:"Day Wear",work:"Straight Suit",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"product3.html"},
    {name:"Blush Pink Suit",category:"Pant Suit",img:"img/pent11.png",color:"Blush",price:"₹1,199",priceOld:"₹1,699",discount:"29% OFF",fabric:"Cotton",occasion:"Casual",work:"Printed Suit",sizes:["S","M","L","XL","XXL"],pageUrl:"product3.html"},
    {name:"Sky Blue Suit",category:"Pant Suit",img:"img/pent12.png",color:"Sky Blue",price:"₹1,399",priceOld:"₹1,899",discount:"26% OFF",fabric:"Chiffon",occasion:"Party",work:"Flowing Suit",sizes:["S","M","L","XL","XXL"],pageUrl:"product3.html"},
    {name:"White Floral Suit",category:"Pant Suit",img:"img/pent13.png",color:"White",price:"₹1,099",priceOld:"₹1,499",discount:"27% OFF",fabric:"Cotton",occasion:"Daily",work:"Floral Suit",sizes:["S","M","L","XL","XXL"],pageUrl:"product3.html"},
    {name:"Beige Printed Suit",category:"Pant Suit",img:"img/pent14.png",color:"Beige",price:"₹1,249",priceOld:"₹1,699",discount:"26% OFF",fabric:"Cotton",occasion:"Casual",work:"Straight Suit",sizes:["S","M","L","XL","XXL"],pageUrl:"product3.html"},
    {name:"Off White Suit",category:"Pant Suit",img:"img/pent15.png",color:"Off White",price:"₹949",priceOld:"₹1,299",discount:"27% OFF",fabric:"Net",occasion:"Wedding",work:"Designer Suit",sizes:["S","M","L","XL","XXL"],pageUrl:"product3.html"},
    {name:"Cream Minimal Suit",category:"Pant Suit",img:"img/pent16.png",color:"Cream",price:"₹1,149",priceOld:"₹1,599",discount:"28% OFF",fabric:"Cotton Silk",occasion:"Office",work:"Minimal Suit",sizes:["S","M","L","XL","XXL"],pageUrl:"product3.html"},
    {name:"Floral Organza Suit",category:"Pant Suit",img:"img/pent17.png",color:"Light Pink Floral",price:"₹1,299",priceOld:"₹1,799",discount:"28% OFF",fabric:"Organza",occasion:"Festive",work:"Designer Suit",sizes:["S","M","L","XL","XXL"],pageUrl:"product3.html"},
    {name:"Teal Embroidered Suit",category:"Pant Suit",img:"img/pent18.png",color:"Teal",price:"₹1,499",priceOld:"₹1,999",discount:"25% OFF",fabric:"Silk",occasion:"Party",work:"Designer Suit",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"product3.html"},
    // Lehenga
    {name:"Black Blouse with Cream Skirt",category:"Lehenga",img:"img/lah1.png",color:"Off White",price:"₹4,399",priceOld:"₹6,026",discount:"27% OFF",fabric:"Georgette",occasion:"Festive / Party",work:"Embroidery",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"product4.html"},
    {name:"Red Lehenga",category:"Lehenga",img:"img/lah2.png",color:"Red",price:"₹4,899",priceOld:"₹6,532",discount:"25% OFF",fabric:"Cotton",occasion:"Casual / Day",work:"Chikankari",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"product4.html"},
    {name:"Mustard Yellow Lehenga",category:"Lehenga",img:"img/lah3.png",color:"Mustard Yellow",price:"₹6,265",priceOld:"₹8,300",discount:"25% OFF",fabric:"Silk Blend",occasion:"Wedding / Party",work:"Zari Work",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"product4.html"},
    {name:"Floral Printed Lehenga",category:"Lehenga",img:"img/lah9.png",color:"Floral Print",price:"₹6,215",priceOld:"₹8,399",discount:"26% OFF",fabric:"Crepe",occasion:"Casual / Puja",work:"Digital Print",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"product4.html"},
    {name:"Pink Lehenga",category:"Lehenga",img:"img/lah5.png",color:"Pink",price:"₹4,799",priceOld:"₹6,485",discount:"26% OFF",fabric:"Art Silk",occasion:"Office / Casual",work:"Embroidery",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"product4.html"},
    {name:"Beige Lehenga",category:"Lehenga",img:"img/lah6.png",color:"Beige",price:"₹4,999",priceOld:"₹6,578",discount:"24% OFF",fabric:"Banarasi",occasion:"Festive",work:"Woven",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"product4.html"},
    {name:"Peach Floral Lehenga",category:"Lehenga",img:"img/lahim1.png",color:"Peach Floral",price:"₹4,999",priceOld:"₹7,461",discount:"33% OFF",fabric:"Cotton Silk",occasion:"Puja / Casual",work:"Block Print",sizes:["S","M","L","XL","XXL"],pageUrl:"product4.html"},
    {name:"Soft Pink Floral Lehenga",category:"Lehenga",img:"img/lahim2.png",color:"Soft Pink Floral",price:"₹5,599",priceOld:"₹7,465",discount:"25% OFF",fabric:"Poly Crepe",occasion:"Daily Wear",work:"Digital Print",sizes:["S","M","L","XL","XXL"],pageUrl:"product4.html"},
    {name:"Aqua Blue Lehenga",category:"Lehenga",img:"img/lahim3.png",color:"Aqua Blue",price:"₹5,699",priceOld:"₹7,599",discount:"25% OFF",fabric:"Organza",occasion:"Wedding / Party",work:"Embroidery",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"product4.html"},
    {name:"Sage Green Lehenga",category:"Lehenga",img:"img/lahim4.png",color:"Sage Green",price:"₹4,866",priceOld:"₹6,711",discount:"27% OFF",fabric:"Heavy Silk",occasion:"Wedding / Bridal",work:"Heavy Zari",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"product4.html"},
    {name:"Purple Lehenga",category:"Lehenga",img:"img/lahim6.png",color:"Purple",price:"₹5,999",priceOld:"₹8,107",discount:"26% OFF",fabric:"Silk Blend",occasion:"Party / Festive",work:"Embroidery",sizes:["S","M","L","XL","XXL"],pageUrl:"product4.html"},
    {name:"Mauve Lehenga",category:"Lehenga",img:"img/lahim7.png",color:"Mauve",price:"₹4,899",priceOld:"₹6,711",discount:"27% OFF",fabric:"Georgette",occasion:"Casual / Office",work:"Printed",sizes:["S","M","L","XL","XXL"],pageUrl:"product4.html"},
    {name:"Floral Pink Lehenga",category:"Lehenga",img:"img/lahim8.png",color:"Floral Pink",price:"₹6,699",priceOld:"₹9,053",discount:"26% OFF",fabric:"Crepe",occasion:"Festive",work:"Embroidery",sizes:["S","M","L","XL","XXL"],pageUrl:"product4.html"},
    {name:"Light Pink Lehenga",category:"Lehenga",img:"img/lahim9.png",color:"Light Pink",price:"₹4,599",priceOld:"₹6,300",discount:"27% OFF",fabric:"Cotton Silk",occasion:"Casual / Daily",work:"Thread Work",sizes:["S","M","L","XL","XXL"],pageUrl:"product4.html"},
    {name:"Dusty Green Sage Lehenga",category:"Lehenga",img:"img/lahim10.png",color:"Dusty Green Sage",price:"₹5,899",priceOld:"₹8,193",discount:"28% OFF",fabric:"Art Silk",occasion:"Festive / Puja",work:"Block Print",sizes:["S","M","L","XL","XXL"],pageUrl:"product4.html"},
    {name:"Maroon Lehenga",category:"Lehenga",img:"img/lahim11.png",color:"Maroon",price:"₹4,899",priceOld:"₹6,804",discount:"28% OFF",fabric:"Georgette",occasion:"Party / Festive",work:"Embroidery",sizes:["S","M","L","XL","XXL"],pageUrl:"product4.html"},
    {name:"Deep Purple Lehenga",category:"Lehenga",img:"img/lahim12.png",color:"Deep Purple",price:"₹4,999",priceOld:"₹6,665",discount:"25% OFF",fabric:"Banarasi",occasion:"Wedding / Party",work:"Woven Zari",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"product4.html"},
    // Peplum
    {name:"Light Grey Embroidered Peplum",category:"Peplum",img:"img/pap1.png",color:"Pink",price:"₹2,500",priceOld:"₹3,125",discount:"25% OFF",fabric:"Net",occasion:"Party / Festive",work:"Embroidery",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"product5.html"},
    {name:"Mustard Yellow Peplum",category:"Peplum",img:"img/pap2.png",color:"Mustard Yellow",price:"₹2,800",priceOld:"₹3,500",discount:"28% OFF",fabric:"Georgette",occasion:"Wedding / Party",work:"Embroidery",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"product5.html"},
    {name:"Sea Green Designer Peplum",category:"Peplum",img:"img/pap3.png",color:"Sea Green",price:"₹3,200",priceOld:"₹4,000",discount:"30% OFF",fabric:"Silk Blend",occasion:"Wedding / Festive",work:"Zari Work",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"product5.html"},
    {name:"Olive Green Peplum Suit",category:"Peplum",img:"img/pap4.png",color:"Olive Green",price:"₹3,000",priceOld:"₹3,750",discount:"26% OFF",fabric:"Organza",occasion:"Party / Casual",work:"Printed",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"product5.html"},
    {name:"Bright Yellow Peplum",category:"Peplum",img:"img/pap5.png",color:"Bright Yellow",price:"₹2,700",priceOld:"₹3,375",discount:"27% OFF",fabric:"Chiffon",occasion:"Party / Festive",work:"Embroidery",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"product5.html"},
    {name:"Peach Designer Peplum",category:"Peplum",img:"img/pap6.png",color:"Peach",price:"₹3,100",priceOld:"₹3,875",discount:"32% OFF",fabric:"Net",occasion:"Wedding / Party",work:"Thread Work",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"product5.html"},
    // Frock Suits
    {name:"Blue & White Frock Suit",category:"Frock Suit",img:"img/fr1.png",color:"Blue & White",price:"₹2,799",priceOld:"₹3,499",discount:"20% OFF",fabric:"Cotton Blend",occasion:"Casual / Party",work:"Printed",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"prodct6.html"},
    {name:"Royal Blue Anarkali Suit",category:"Frock Suit",img:"img/fr2.png",color:"Royal Blue",price:"₹3,199",priceOld:"₹3,999",discount:"20% OFF",fabric:"Chiffon",occasion:"Wedding / Party",work:"Embroidery",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"prodct6.html"},
    {name:"Magenta Pink Frock Suit",category:"Frock Suit",img:"img/fr3.png",color:"Magenta Pink",price:"₹3,299",priceOld:"₹4,199",discount:"21% OFF",fabric:"Georgette",occasion:"Party / Festive",work:"Zari Work",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"prodct6.html"},
    // Pakistani Suits
    {name:"Sea Green Embroidered Lawn Suit",category:"Pakistani Suit",img:"img/pak1.png",color:"Sea Green",price:"₹3,199",priceOld:"₹4,499",discount:"29% OFF",fabric:"Lawn",occasion:"Light Festive / Summer",work:"Embroidery",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"prodct7.html"},
    {name:"Peach Printed Lawn Suit",category:"Pakistani Suit",img:"img/pak2.png",color:"Peach",price:"₹3,049",priceOld:"₹4,199",discount:"27% OFF",fabric:"Lawn",occasion:"Casual / Daily Wear",work:"Digital Print",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"prodct7.html"},
    {name:"Black Embroidered Formal Suit",category:"Pakistani Suit",img:"img/pak3.png",color:"Black (Gold Dots)",price:"₹3,599",priceOld:"₹4,799",discount:"25% OFF",fabric:"Chiffon / Net",occasion:"Party Wear",work:"Embroidery",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"prodct7.html"},
    // Sharara
    {name:"White Sharara Suit",category:"Sharara Suit",img:"img/shar1.png",color:"White",price:"₹3,000",priceOld:"₹4,000",discount:"25% OFF",fabric:"Net",occasion:"Festive / Party",work:"Embroidery",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"prodct8.html"},
    {name:"Sky Blue Sharara Suit",category:"Sharara Suit",img:"img/shar19.png",color:"Sky Blue",price:"₹3,002",priceOld:"₹3,950",discount:"24% OFF",fabric:"Georgette",occasion:"Casual / Day",work:"Chikankari",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"prodct8.html"},
    {name:"Yellow Sharara Suit",category:"Sharara Suit",img:"img/shaar16.png",color:"Yellow",price:"₹3,003",priceOld:"₹3,900",discount:"23% OFF",fabric:"Silk Blend",occasion:"Wedding / Party",work:"Zari Work",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"prodct8.html"},
    {name:"Black Sharara Suit",category:"Sharara Suit",img:"img/shar4.png",color:"Black",price:"₹3,000",priceOld:"₹4,000",discount:"25% OFF",fabric:"Crepe",occasion:"Casual / Puja",work:"Digital Print",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"prodct8.html"},
    {name:"Light Peach Sharara Suit",category:"Sharara Suit",img:"img/shar5.png",color:"Light Peach",price:"₹3,002",priceOld:"₹3,950",discount:"24% OFF",fabric:"Organza",occasion:"Office / Casual",work:"Embroidery",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"prodct8.html"},
    {name:"Maroon Sharara Suit",category:"Sharara Suit",img:"img/shar20.png",color:"Maroon",price:"₹3,000",priceOld:"₹4,000",discount:"25% OFF",fabric:"Banarasi",occasion:"Festive",work:"Woven",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"prodct8.html"},
    // Plazo
    {name:"Mint Green Plazo Suit",category:"Plazo Suit",img:"img/pal1.png",color:"Mint Green",price:"₹3,000",priceOld:"₹4,000",discount:"25% OFF",fabric:"Silk",occasion:"Festive / Party",work:"Embroidery",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"prodct9.html"},
    {name:"Bright Red Plazo Suit",category:"Plazo Suit",img:"img/pal2.png",color:"Bright Red",price:"₹3,002",priceOld:"₹3,950",discount:"24% OFF",fabric:"Net",occasion:"Casual / Day",work:"Chikankari",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"prodct9.html"},
    {name:"Light Pink Cotton Plazo Suit",category:"Plazo Suit",img:"img/pal3.png",color:"Light Pink",price:"₹3,003",priceOld:"₹3,900",discount:"23% OFF",fabric:"Cotton",occasion:"Wedding / Party",work:"Zari Work",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"prodct9.html"},
    // Indo-Western
    {name:"White with Blue Embroidery Dress",category:"Indo-Western",img:"img/ind1.png",color:"Off White",price:"₹5,087",priceOld:"₹6,899",discount:"27% OFF",fabric:"Georgette",occasion:"Festive / Party",work:"Embroidery",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"prodct10.html"},
    {name:"White Chikan Salwar Suit",category:"Indo-Western",img:"img/ind2.png",color:"White",price:"₹6,004",priceOld:"₹7,999",discount:"25% OFF",fabric:"Cotton",occasion:"Casual / Day",work:"Chikankari",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"prodct10.html"},
    {name:"Magenta Anarkali Suit",category:"Indo-Western",img:"img/ind3.png",color:"Magenta",price:"₹4,899",priceOld:"₹6,499",discount:"25% OFF",fabric:"Silk Blend",occasion:"Wedding / Party",work:"Zari Work",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"prodct10.html"},
    // Pazami Suits
    {name:"Peach/Blush Pink Pazami Suit",category:"Pazami Suit",img:"img/paz1.png",color:"Peach",price:"₹3,500",priceOld:"₹5,000",discount:"27% OFF",fabric:"Georgette",occasion:"Festive / Party",work:"Embroidery",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"prodct11.html"},
    {name:"Black Chikan Pazami Suit",category:"Pazami Suit",img:"img/paz2.png",color:"Black",price:"₹4,000",priceOld:"₹5,000",discount:"25% OFF",fabric:"Cotton",occasion:"Casual / Day",work:"Chikankari",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"prodct11.html"},
    {name:"Off White/Cream Pazami Suit",category:"Pazami Suit",img:"img/paz3.png",color:"Off White",price:"₹4,899",priceOld:"₹6,500",discount:"25% OFF",fabric:"Silk Blend",occasion:"Wedding / Party",work:"Zari Work",sizes:["XS","S","M","L","XL","XXL"],pageUrl:"prodct11.html"},
  ];

  /* ── CART KEY — used by search.js AND mycart.html ─────────────── */
  var CART_KEY = 'cart';

  /* ── CART HELPERS ─────────────────────────────────────────────── */
  function getCart() {
    try { return JSON.parse(localStorage.getItem(CART_KEY) || '[]'); }
    catch(e) { return []; }
  }
  function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }
  function addToCart(product, selectedSize) {
    var cart = getCart();
    /* Unique key = name + size */
    var cartKey = product.name + '||' + selectedSize;
    var existing = cart.find(function(i){ return i.id === cartKey; });
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({
        id:       cartKey,          // unique key
        name:     product.name,
        category: product.category,
        image:    product.img,      // mycart.html uses item.image
        price:    product.price,
        priceOld: product.priceOld,
        discount: product.discount,
        color:    product.color,
        size:     selectedSize,
        quantity: 1                 // mycart.html uses item.quantity
      });
    }
    saveCart(cart);
  }

  /* ── SEARCH ───────────────────────────────────────────────────── */
  function searchProducts(query) {
    if (!query || !query.trim()) return [];
    var q = query.toLowerCase().trim();
    return products.filter(function(p){
      return p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.color.toLowerCase().includes(q) ||
        (p.fabric && p.fabric.toLowerCase().includes(q)) ||
        (p.occasion && p.occasion.toLowerCase().includes(q)) ||
        (p.work && p.work.toLowerCase().includes(q));
    });
  }

  /* ── FIND ALL INPUTS ──────────────────────────────────────────── */
  function findAllSearchInputs() {
    var seen = new Set(), inputs = [];
    ['[data-search-input]','#searchInput','#search','#searchBar',
     '.search-input','.searchBar','.search-bar input',
     'input[name="q"]','input[type="search"]',
     'input[placeholder*="search" i]'].forEach(function(sel){
      document.querySelectorAll(sel).forEach(function(el){
        if (!seen.has(el)){ seen.add(el); inputs.push(el); }
      });
    });
    return inputs;
  }

  /* ── INJECT STYLES ────────────────────────────────────────────── */
  function injectStyles() {
    if (document.getElementById('__tl-search-styles')) return;
    var s = document.createElement('style');
    s.id = '__tl-search-styles';
    s.textContent = `
      /* ─ DROPDOWN ─ */
      #__tl-dropdown {
        position:fixed; z-index:999999;
        background:#fff; border:1px solid #e0c9d8;
        border-radius:14px;
        box-shadow:0 12px 40px rgba(122,45,82,.18);
        max-height:440px; overflow-y:auto;
        font-family:inherit;
        scrollbar-width:thin; scrollbar-color:#c595b0 #f8eaf4;
      }
      #__tl-dropdown::-webkit-scrollbar{width:5px}
      #__tl-dropdown::-webkit-scrollbar-thumb{background:#c595b0;border-radius:4px}
      #__tl-dropdown .sd-hdr{
        padding:10px 16px 8px; font-size:10px; font-weight:700;
        letter-spacing:.12em; text-transform:uppercase;
        color:#b06090; border-bottom:1px solid #f0dcea; background:#fdf8fb;
      }
      #__tl-dropdown .sd-item{
        display:flex; align-items:center; gap:12px;
        padding:10px 14px; cursor:pointer; transition:background .15s;
        border-bottom:1px solid #faf0f6;
      }
      #__tl-dropdown .sd-item:last-child{border-bottom:none}
      #__tl-dropdown .sd-item:hover,
      #__tl-dropdown .sd-item.active{background:#fdf0f8}
      #__tl-dropdown .sd-item img{
        width:50px;height:58px;object-fit:cover;
        border-radius:8px;flex-shrink:0;border:1px solid #eeddef;
      }
      #__tl-dropdown .sd-info{flex:1;min-width:0}
      #__tl-dropdown .sd-name{
        font-size:13px;font-weight:700;color:#2d1a24;
        white-space:nowrap;overflow:hidden;text-overflow:ellipsis;
      }
      #__tl-dropdown .sd-meta{
        font-size:11px;color:#9c6b8a;margin-top:2px;
        white-space:nowrap;overflow:hidden;text-overflow:ellipsis;
      }
      #__tl-dropdown .sd-right{text-align:right;flex-shrink:0}
      #__tl-dropdown .sd-price{font-size:13px;font-weight:700;color:#c0166a}
      #__tl-dropdown .sd-old{font-size:10px;color:#bbb;text-decoration:line-through;margin-top:1px}
      #__tl-dropdown .sd-disc{
        font-size:9px;color:#27ae60;font-weight:700;
        background:#eafaf1;padding:1px 5px;border-radius:4px;
        margin-top:2px;display:inline-block;
      }
      #__tl-dropdown .sd-empty{padding:22px 16px;text-align:center;color:#b06090;font-size:13px}
      #__tl-dropdown .sd-viewall{
        display:block;text-align:center;padding:12px;
        font-size:12px;font-weight:700;color:#7a2d52;
        background:#fdf5fb;border-top:1px solid #f0dcea;
        cursor:pointer;border-radius:0 0 14px 14px;letter-spacing:.5px;
        transition:background .15s,color .15s;
      }
      #__tl-dropdown .sd-viewall:hover{background:#f0dcea;color:#4a1a32}

      /* ─ RESULTS PAGE ─ */
      #__tl-results{
        max-width:1140px;margin:28px auto 40px;padding:0 20px;font-family:inherit;
      }
      #__tl-results .sr-topbar{
        display:flex;align-items:center;justify-content:space-between;
        margin-bottom:20px;flex-wrap:wrap;gap:10px;
      }
      #__tl-results h2{
        font-size:20px;color:#2d1a24;
        font-family:'Playfair Display',Georgia,serif;font-style:italic;
      }
      #__tl-results h2 em{color:#c595b0;font-style:normal}
      #__tl-results .sr-close{
        border:none;background:none;font-size:20px;cursor:pointer;
        color:#c595b0;padding:4px 8px;border-radius:50%;transition:background .15s;
      }
      #__tl-results .sr-close:hover{background:#fde8f4;color:#7a2d52}

      /* Grid */
      .tl-sr-grid{
        display:grid;
        grid-template-columns:repeat(auto-fill,minmax(200px,1fr));
        gap:20px;
      }
      @media(max-width:600px){.tl-sr-grid{grid-template-columns:repeat(2,1fr);gap:12px}}
      @media(max-width:360px){.tl-sr-grid{grid-template-columns:1fr}}

      /* Card */
      .tl-sr-card{
        background:#fff;border:1px solid #eeddef;border-radius:14px;
        overflow:hidden;transition:box-shadow .25s,transform .25s;
        display:flex;flex-direction:column;
      }
      .tl-sr-card:hover{box-shadow:0 8px 30px rgba(122,45,82,.18);transform:translateY(-4px)}
      .tl-img-wrap{position:relative;overflow:hidden;cursor:pointer}
      .tl-img-wrap img{width:100%;height:220px;object-fit:cover;display:block;transition:transform .4s}
      .tl-sr-card:hover .tl-img-wrap img{transform:scale(1.05)}
      .tl-badge{
        position:absolute;top:10px;left:10px;
        background:rgba(255,255,255,.9);color:#27ae60;
        font-size:9px;font-weight:700;letter-spacing:1px;
        text-transform:uppercase;padding:3px 8px;border-radius:10px;
      }
      .tl-body{padding:12px 13px;flex:1;display:flex;flex-direction:column}
      .tl-pname{
        font-size:13px;font-weight:700;color:#2d1a24;margin-bottom:3px;
        display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;
        overflow:hidden;line-height:1.4;cursor:pointer;
      }
      .tl-pname:hover{color:#7a2d52}
      .tl-cat{font-size:10px;color:#9c6b8a;margin-bottom:8px;font-weight:600;text-transform:uppercase;letter-spacing:.5px}
      .tl-pricing{display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin-bottom:10px}
      .tl-price{font-size:14px;font-weight:700;color:#c0166a}
      .tl-pold{font-size:11px;color:#aaa;text-decoration:line-through}
      .tl-pdisc{font-size:10px;color:#27ae60;font-weight:700;background:#eafaf1;padding:2px 6px;border-radius:4px}

      /* Sizes */
      .tl-sizes{display:flex;gap:5px;flex-wrap:wrap;margin-bottom:10px}
      .tl-sz{
        border:1.5px solid #e0c9d8;background:#fff;color:#4a1a32;
        font-size:10px;font-weight:700;padding:3px 7px;border-radius:5px;
        cursor:pointer;transition:all .15s;font-family:inherit;
      }
      .tl-sz:hover{border-color:#c595b0;color:#7a2d52}
      .tl-sz.sel{background:#7a2d52;color:white;border-color:#7a2d52}

      /* ATC button */
      .tl-atc{
        width:100%;padding:10px;margin-top:auto;
        background:linear-gradient(135deg,#c595b0,#7a2d52);
        color:white;border:none;border-radius:8px;
        font-size:12px;font-weight:700;letter-spacing:1px;
        text-transform:uppercase;cursor:pointer;font-family:inherit;
        transition:opacity .2s,transform .1s;
      }
      .tl-atc:hover{opacity:.88}
      .tl-atc:active{transform:scale(.97)}
      .tl-atc.ok{background:linear-gradient(135deg,#27ae60,#1e8449)}
      .tl-atc.warn{background:linear-gradient(135deg,#e67e22,#c0392b);animation:tlshake .3s}
      @keyframes tlshake{0%,100%{transform:translateX(0)}25%{transform:translateX(-4px)}75%{transform:translateX(4px)}}

      /* View collection */
      .tl-viewcol{
        display:block;text-align:center;margin-top:10px;padding:8px;
        color:#7a2d52;font-size:12px;font-weight:700;letter-spacing:1px;
        text-transform:uppercase;border-top:1px solid #f0dcea;cursor:pointer;
        transition:color .15s;
      }
      .tl-viewcol:hover{color:#c595b0}

      /* No results */
      .tl-nores{grid-column:1/-1;text-align:center;padding:40px 20px;color:#9c6b8a;font-size:15px}
      .tl-nores strong{color:#7a2d52}
    `;
    document.head.appendChild(s);
  }

  /* ── DROPDOWN STATE ───────────────────────────────────────────── */
  var dropdown = null, activeIdx = -1, activeInput = null;

  function positionDropdown(input) {
    if (!dropdown) return;
    var r = input.getBoundingClientRect();
    dropdown.style.top   = (r.bottom + 5) + 'px';
    dropdown.style.left  = r.left + 'px';
    dropdown.style.width = Math.max(r.width, 300) + 'px';
  }

  function removeDropdown() {
    if (dropdown) { dropdown.remove(); dropdown = null; }
    activeIdx = -1; activeInput = null;
  }

  function showDropdown(input, results, query) {
    removeDropdown();
    activeInput = input; activeIdx = -1;
    dropdown = document.createElement('div');
    dropdown.id = '__tl-dropdown';

    if (!results.length) {
      dropdown.innerHTML = '<div class="sd-empty">No results for "<strong>' + esc(query) + '</strong>"</div>';
    } else {
      var hdr = document.createElement('div');
      hdr.className = 'sd-hdr';
      hdr.textContent = results.length + ' product' + (results.length !== 1 ? 's' : '') + ' found';
      dropdown.appendChild(hdr);

      results.slice(0, 6).forEach(function(p, i) {
        var item = document.createElement('div');
        item.className = 'sd-item';
        item.innerHTML =
          '<img src="' + p.img + '" alt="' + esc(p.name) + '" onerror="this.style.background=\'#f5dde8\'">' +
          '<div class="sd-info">' +
            '<div class="sd-name">' + hilite(p.name, query) + '</div>' +
            '<div class="sd-meta">' + esc(p.category) + ' · ' + esc(p.fabric || '') + '</div>' +
            '<div class="sd-meta">' + esc(p.occasion || '') + '</div>' +
          '</div>' +
          '<div class="sd-right">' +
            '<div class="sd-price">' + esc(p.price) + '</div>' +
            '<div class="sd-old">' + esc(p.priceOld) + '</div>' +
            '<div class="sd-disc">' + esc(p.discount) + '</div>' +
          '</div>';
        item.addEventListener('mousedown', function(e){ e.preventDefault(); window.location.href = p.pageUrl; });
        item.addEventListener('touchend',  function(e){ e.preventDefault(); window.location.href = p.pageUrl; });
        dropdown.appendChild(item);
      });

      var va = document.createElement('div');
      va.className = 'sd-viewall';
      va.textContent = (results.length > 6 ? 'View all ' + results.length + ' results' : 'View results') + ' & Add to Cart →';
      va.addEventListener('mousedown', function(e){ e.preventDefault(); showResultsPage(activeInput ? activeInput.value.trim() : query, results); });
      va.addEventListener('touchend',  function(e){ e.preventDefault(); showResultsPage(activeInput ? activeInput.value.trim() : query, results); });
      dropdown.appendChild(va);
    }

    positionDropdown(input);
    document.body.appendChild(dropdown);
  }

  /* ── RESULTS PAGE with Add to Cart ───────────────────────────── */
  function showResultsPage(query, results) {
    removeDropdown();
    var old = document.getElementById('__tl-results');
    if (old) old.remove();

    var wrap = document.querySelector('main') ||
               document.querySelector('.product-grid-wrap') ||
               document.querySelector('.container') ||
               document.querySelector('section') ||
               document.body;

    var page = document.createElement('div');
    page.id = '__tl-results';

    /* ── top bar ── */
    var topbar = document.createElement('div');
    topbar.className = 'sr-topbar';

    var h2 = document.createElement('h2');
    h2.innerHTML = results.length
      ? 'Results for <em>"' + esc(query) + '"</em> — ' + results.length + ' item' + (results.length !== 1 ? 's' : '') + ' found'
      : 'No results for <em>"' + esc(query) + '"</em>';

    var closeBtn = document.createElement('button');
    closeBtn.className = 'sr-close';
    closeBtn.innerHTML = '✕';
    closeBtn.title = 'Close';
    closeBtn.addEventListener('click', function(){ page.remove(); });

    topbar.appendChild(h2);
    topbar.appendChild(closeBtn);
    page.appendChild(topbar);

    /* ── grid ── */
    var grid = document.createElement('div');
    grid.className = 'tl-sr-grid';

    if (!results.length) {
      var nr = document.createElement('div');
      nr.className = 'tl-nores';
      nr.innerHTML = 'Nothing found for <strong>"' + esc(query) + '"</strong>.<br>Try "saree", "gown", "pink", "wedding"…';
      grid.appendChild(nr);
    } else {
      results.forEach(function(p) {
        var card = document.createElement('div');
        card.className = 'tl-sr-card';

        /* image */
        var imgWrap = document.createElement('div');
        imgWrap.className = 'tl-img-wrap';
        var img = document.createElement('img');
        img.src = p.img; img.alt = p.name;
        img.onerror = function(){ this.style.background = '#f5dde8'; this.src = ''; };
        imgWrap.appendChild(img);
        if (p.discount) {
          var badge = document.createElement('div');
          badge.className = 'tl-badge';
          badge.textContent = p.discount;
          imgWrap.appendChild(badge);
        }
        imgWrap.addEventListener('click', function(){ window.location.href = p.pageUrl; });
        card.appendChild(imgWrap);

        /* body */
        var body = document.createElement('div');
        body.className = 'tl-body';

        var pname = document.createElement('div');
        pname.className = 'tl-pname';
        pname.innerHTML = hilite(p.name, query);
        pname.addEventListener('click', function(){ window.location.href = p.pageUrl; });
        body.appendChild(pname);

        var cat = document.createElement('div');
        cat.className = 'tl-cat';
        cat.textContent = p.category + (p.fabric ? ' · ' + p.fabric : '');
        body.appendChild(cat);

        var pricing = document.createElement('div');
        pricing.className = 'tl-pricing';
        pricing.innerHTML =
          '<span class="tl-price">' + esc(p.price) + '</span>' +
          '<span class="tl-pold">'  + esc(p.priceOld) + '</span>' +
          '<span class="tl-pdisc">' + esc(p.discount) + '</span>';
        body.appendChild(pricing);

        /* sizes */
        var selectedSize = (p.sizes.length === 1) ? p.sizes[0] : null;
        if (p.sizes.length === 1 && p.sizes[0] === 'Free Size') {
          selectedSize = 'Free Size';
          var ft = document.createElement('div');
          ft.className = 'tl-cat'; ft.textContent = 'Free Size';
          ft.style.marginBottom = '10px';
          body.appendChild(ft);
        } else {
          var szWrap = document.createElement('div');
          szWrap.className = 'tl-sizes';
          p.sizes.forEach(function(sz){
            var btn = document.createElement('button');
            btn.className = 'tl-sz'; btn.textContent = sz;
            btn.addEventListener('click', function(){
              szWrap.querySelectorAll('.tl-sz').forEach(function(b){ b.classList.remove('sel'); });
              btn.classList.add('sel');
              selectedSize = sz;
            });
            szWrap.appendChild(btn);
          });
          body.appendChild(szWrap);
        }

        /* add to cart */
        var atcBtn = document.createElement('button');
        atcBtn.className = 'tl-atc';
        atcBtn.textContent = '🛒 Add to Cart';
        atcBtn.addEventListener('click', function(){
          if (!selectedSize) {
            atcBtn.textContent = '⚠ Select a Size First';
            atcBtn.classList.add('warn');
            setTimeout(function(){ atcBtn.textContent = '🛒 Add to Cart'; atcBtn.classList.remove('warn'); }, 1500);
            return;
          }
          addToCart(p, selectedSize);
          atcBtn.textContent = '✓ Added to Cart!';
          atcBtn.classList.add('ok');
          setTimeout(function(){ atcBtn.textContent = '🛒 Add to Cart'; atcBtn.classList.remove('ok'); }, 1800);
        });
        body.appendChild(atcBtn);

        /* view collection */
        var vc = document.createElement('div');
        vc.className = 'tl-viewcol';
        vc.textContent = 'View Full Collection →';
        vc.addEventListener('click', function(){ window.location.href = p.pageUrl; });
        body.appendChild(vc);

        card.appendChild(body);
        grid.appendChild(card);
      });
    }

    page.appendChild(grid);
    wrap.prepend(page);
    page.scrollIntoView({ behavior:'smooth', block:'start' });
  }

  /* ── KEYBOARD NAV ─────────────────────────────────────────────── */
  function navDropdown(dir) {
    if (!dropdown) return;
    var items = dropdown.querySelectorAll('.sd-item');
    if (!items.length) return;
    if (activeIdx >= 0) items[activeIdx].classList.remove('active');
    activeIdx = (activeIdx + dir + items.length) % items.length;
    items[activeIdx].classList.add('active');
    items[activeIdx].scrollIntoView({ block:'nearest' });
  }

  /* ── HELPERS ──────────────────────────────────────────────────── */
  function esc(str) {
    return String(str || '')
      .replace(/&/g,'&amp;').replace(/</g,'&lt;')
      .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }
  function hilite(text, q) {
    if (!q) return esc(text);
    return esc(text).replace(
      new RegExp('(' + q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&') + ')', 'gi'),
      '<mark style="background:#fce4f0;color:#a0107a;border-radius:2px;padding:0 1px">$1</mark>'
    );
  }

  /* ── WIRE INPUT ───────────────────────────────────────────────── */
  function wireInput(input) {
    var t;
    input.addEventListener('input', function(){
      clearTimeout(t);
      var q = this.value.trim();
      if (!q) { removeDropdown(); return; }
      var self = this;
      t = setTimeout(function(){ showDropdown(self, searchProducts(q), q); }, 160);
    });
    input.addEventListener('keydown', function(e){
      if (e.key === 'ArrowDown') { e.preventDefault(); navDropdown(1); }
      if (e.key === 'ArrowUp')   { e.preventDefault(); navDropdown(-1); }
      if (e.key === 'Escape')    { removeDropdown(); }
      if (e.key === 'Enter') {
        e.preventDefault();
        var items = dropdown && dropdown.querySelectorAll('.sd-item');
        if (items && activeIdx >= 0 && items[activeIdx]) {
          items[activeIdx].dispatchEvent(new MouseEvent('mousedown'));
        } else {
          var q = this.value.trim();
          if (q) showResultsPage(q, searchProducts(q));
        }
      }
    });
    input.addEventListener('focus', function(){
      var q = this.value.trim();
      if (q) showDropdown(this, searchProducts(q), q);
    });
  }

  /* ── INIT ─────────────────────────────────────────────────────── */
  function init() {
    injectStyles();
    findAllSearchInputs().forEach(wireInput);
    document.addEventListener('mousedown', function(e){
      if (!dropdown) return;
      if (!dropdown.contains(e.target) && e.target !== activeInput) removeDropdown();
    });
    document.addEventListener('touchstart', function(e){
      if (!dropdown) return;
      if (!dropdown.contains(e.target) && e.target !== activeInput) removeDropdown();
    }, { passive:true });
    window.addEventListener('resize',  function(){ if (dropdown && activeInput) positionDropdown(activeInput); });
    window.addEventListener('scroll',  function(){ if (dropdown && activeInput) positionDropdown(activeInput); }, { passive:true });
  }

  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', init)
    : init();

})();

localStorage.setItem('lastPage', window.location.href);