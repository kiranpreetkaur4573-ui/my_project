
// ═══════════════════════════════════════════════════════════
//  TrendLilly — Global Search Utility (search.js)
//  Drop this file in your frontend/ folder.
//  Add <script src="search.js"></script> before </body> on
//  every page that has a search bar.
// ═══════════════════════════════════════════════════════════

(function () {
  "use strict";

  // ── 1.  PRODUCT DATA (mirrors your server-side array) ──────
  // Keeping it here means search works even without the backend.
  const products = [
  {id:1,  name:"black blouse with cream skirt",         category:"Salwar Suits",  img:"img/sast1.png",  color:"Black & Cream",     price:"$50.87",  discount:"27% OFF", fabric:"Georgette",   occasion:"Festive / Party",   work:"Embroidery",   page:"product.html"},
  {id:2,  name:"White Chikan Salwar Suit",              category:"Salwar Suits",  img:"img/sast2.png",  color:"White",             price:"$60.04",  discount:"25% OFF", fabric:"Cotton",      occasion:"Casual / Day",      work:"Chikankari",   page:"product.html"},
  {id:3,  name:"Magenta Anarkali Suit",                 category:"Salwar Suits",  img:"img/sast3.png",  color:"Magenta",           price:"$48.99",  discount:"25% OFF", fabric:"Silk Blend",  occasion:"Wedding / Party",   work:"Zari Work",    page:"product.html"},
  {id:4,  name:"Baby Pink Salwar Suit",                 category:"Salwar Suits",  img:"img/sast4.png",  color:"Baby Pink",         price:"$40.77",  discount:"26% OFF", fabric:"Crepe",       occasion:"Casual / Puja",     work:"Digital Print",page:"product.html"},
  {id:5,  name:"Grey Straight Cut Suit",                category:"Salwar Suits",  img:"img/sast5.png",  color:"Charcoal Grey",     price:"$42.66",  discount:"26% OFF", fabric:"Art Silk",    occasion:"Office / Casual",   work:"Embroidery",   page:"product.html"},
  {id:6,  name:"Brown Woven Salwar Suit",               category:"Salwar Suits",  img:"img/sast6.png",  color:"Earthy Brown",      price:"$55.89",  discount:"24% OFF", fabric:"Banarasi",    occasion:"Festive",           work:"Woven",        page:"product.html"},
  {id:7,  name:"Lavender Salwar Suit",                  category:"Salwar Suits",  img:"img/sast7.png",  color:"Lavender",          price:"₹999",    discount:"33% OFF", fabric:"Cotton Silk", occasion:"Puja / Casual",     work:"Block Print",  page:"product.html"},
  {id:8,  name:"Navy Printed Salwar Suit",              category:"Salwar Suits",  img:"img/sast8.png",  color:"Navy",              price:"$38.96",  discount:"25% OFF", fabric:"Poly Crepe",  occasion:"Daily Wear",        work:"Digital Print",page:"product.html"},
  {id:9,  name:"Pink Floral Salwar Suit",               category:"Salwar Suits",  img:"img/sast9.png",  color:"Pink",              price:"₹2,000",  discount:"25% OFF", fabric:"Organza",     occasion:"Wedding / Party",   work:"Embroidery",   page:"product.html"},
  {id:10, name:"Red Bridal Salwar Suit",                category:"Salwar Suits",  img:"img/sast10.png", color:"Red",               price:"₹2000",   discount:"27% OFF", fabric:"Heavy Silk",  occasion:"Wedding / Bridal",  work:"Heavy Zari",   page:"product.html"},
  {id:11, name:"Yellow Salwar Suit",                    category:"Salwar Suits",  img:"img/sast11.png", color:"Yellow",            price:"₹1,199",  discount:"29% OFF", fabric:"Cotton",      occasion:"Casual / Puja",     work:"Block Print",  page:"product.html"},
  {id:12, name:"Green Anarkali Suit",                   category:"Salwar Suits",  img:"img/sast12.png", color:"Bottle Green",      price:"₹1,399",  discount:"26% OFF", fabric:"Silk Blend",  occasion:"Party / Festive",   work:"Embroidery",   page:"product.html"},
  {id:13, name:"Blue Salwar Suit",                      category:"Salwar Suits",  img:"img/sast13.png", color:"Royal Blue",        price:"₹1,099",  discount:"27% OFF", fabric:"Georgette",   occasion:"Casual / Office",   work:"Printed",      page:"product.html"},
  {id:14, name:"Orange Salwar Suit",                    category:"Salwar Suits",  img:"img/sast14.png", color:"Burnt Orange",      price:"₹1,249",  discount:"26% OFF", fabric:"Crepe",       occasion:"Festive",           work:"Embroidery",   page:"product.html"},
  {id:15, name:"Peach Salwar Suit",                     category:"Salwar Suits",  img:"img/sast15.png", color:"Peach",             price:"₹949",    discount:"27% OFF", fabric:"Cotton Silk", occasion:"Casual / Daily",    work:"Thread Work",  page:"product.html"},
  {id:16, name:"Mustard Salwar Suit",                   category:"Salwar Suits",  img:"img/sast16.png", color:"Mustard",           price:"₹1,149",  discount:"28% OFF", fabric:"Art Silk",    occasion:"Festive / Puja",    work:"Block Print",  page:"product.html"},
  {id:17, name:"Teal Salwar Suit",                      category:"Salwar Suits",  img:"img/sast17.png", color:"Teal",              price:"₹1,299",  discount:"28% OFF", fabric:"Georgette",   occasion:"Party / Festive",   work:"Embroidery",   page:"product.html"},
  {id:18, name:"Maroon Salwar Suit",                    category:"Salwar Suits",  img:"img/sast18.png", color:"Maroon",            price:"₹1,499",  discount:"25% OFF", fabric:"Banarasi",    occasion:"Wedding / Party",   work:"Woven Zari",   page:"product.html"},

  {id:19, name:"Powder Blue Saree",                     category:"Sarees",        img:"img/sar1.png",   color:"Powder Blue",       price:"₹1,300",  discount:"35% OFF", fabric:"Georgette",   occasion:"Casual / Office",   work:"Digital Print",page:"product1.html"},
  {id:20, name:"Ivory Cream Floral Saree",              category:"Sarees",        img:"img/sar2.png",   color:"Ivory / Cream",     price:"₹1,300",  discount:"41% OFF", fabric:"Cotton Silk", occasion:"Puja / Festive",    work:"Floral Print", page:"product1.html"},
  {id:21, name:"Pastel Multicolor Saree",               category:"Sarees",        img:"img/sar3.png",   color:"Soft Pink–Blue Mix", price:"₹1,300", discount:"48% OFF", fabric:"Organza",     occasion:"Wedding / Party",   work:"Embroidery",   page:"product1.html"},
  {id:22, name:"Dusty Rose Pink Saree",                 category:"Sarees",        img:"img/sar4.png",   color:"Dusty Rose Pink",   price:"₹1,300",  discount:"35% OFF", fabric:"Crepe",       occasion:"Casual / Festive",  work:"Thread Work",  page:"product1.html"},
  {id:23, name:"Navy Blue Saree",                       category:"Sarees",        img:"img/sar5.png",   color:"Navy Blue",         price:"₹1,300",  discount:"48% OFF", fabric:"Banarasi Silk",occasion:"Wedding / Party",  work:"Woven Zari",   page:"product1.html"},
  {id:24, name:"Peach Apricot Saree",                   category:"Sarees",        img:"img/sar6.png",   color:"Peach / Apricot",   price:"₹1,300",  discount:"41% OFF", fabric:"Cotton Silk", occasion:"Casual / Day",      work:"Block Print",  page:"product1.html"},
  {id:25, name:"Beige Printed Saree",                   category:"Sarees",        img:"img/sar7.png",   color:"Beige with Print",  price:"₹1,300",  discount:"35% OFF", fabric:"Art Silk",    occasion:"Casual / Office",   work:"Digital Print",page:"product1.html"},
  {id:26, name:"Soft Blush Pink Saree",                 category:"Sarees",        img:"img/sar8.png",   color:"Soft Blush Pink",   price:"₹1,300",  discount:"41% OFF", fabric:"Georgette",   occasion:"Engagement / Party",work:"Embroidery",   page:"product1.html"},
  {id:27, name:"Bright Yellow Saree",                   category:"Sarees",        img:"img/sar9.png",   color:"Bright Yellow",     price:"₹1,300",  discount:"35% OFF", fabric:"Cotton",      occasion:"Haldi / Festive",   work:"Block Print",  page:"product1.html"},
  {id:28, name:"Rose Pink Saree",                       category:"Sarees",        img:"img/sar10.png",  color:"Rose Pink",         price:"₹1,300",  discount:"48% OFF", fabric:"Silk Blend",  occasion:"Wedding / Party",   work:"Zari Work",    page:"product1.html"},
  {id:29, name:"Seafoam Green Saree",                   category:"Sarees",        img:"img/sar11.png",  color:"Seafoam Green",     price:"₹1,300",  discount:"35% OFF", fabric:"Cotton Silk", occasion:"Casual / Puja",     work:"Thread Work",  page:"product1.html"},
  {id:30, name:"Mauve Brown Saree",                     category:"Sarees",        img:"img/sar12.png",  color:"Mauve Brown",       price:"₹1,300",  discount:"41% OFF", fabric:"Banarasi",    occasion:"Festive / Party",   work:"Woven",        page:"product1.html"},
  {id:31, name:"Muted Purple Saree",                    category:"Sarees",        img:"img/sar13.png",  color:"Muted Purple",      price:"₹1,300",  discount:"35% OFF", fabric:"Georgette",   occasion:"Party / Evening",   work:"Embroidery",   page:"product1.html"},
  {id:32, name:"Aqua Green Saree",                      category:"Sarees",        img:"img/sar14.png",  color:"Aqua Green",        price:"₹1,300",  discount:"48% OFF", fabric:"Art Silk",    occasion:"Festive / Party",   work:"Digital Print",page:"product1.html"},
  {id:33, name:"Taupe Grey Saree",                      category:"Sarees",        img:"img/sar15.png",  color:"Taupe Grey",        price:"₹1,300",  discount:"35% OFF", fabric:"Crepe",       occasion:"Office / Casual",   work:"Printed",      page:"product1.html"},
  {id:34, name:"Deep Purple Saree",                     category:"Sarees",        img:"img/sar16.png",  color:"Deep Purple",       price:"₹1,300",  discount:"48% OFF", fabric:"Heavy Silk",  occasion:"Wedding / Bridal",  work:"Heavy Zari",   page:"product1.html"},
  {id:35, name:"Teal Blue Saree",                       category:"Sarees",        img:"img/sar17.png",  color:"Teal Blue",         price:"₹1,300",  discount:"41% OFF", fabric:"Georgette",   occasion:"Party / Festive",   work:"Embroidery",   page:"product1.html"},
  {id:36, name:"Maroon Red Saree",                      category:"Sarees",        img:"img/sar18.png",  color:"Maroon Red",        price:"₹1,300",  discount:"48% OFF", fabric:"Banarasi Silk",occasion:"Wedding / Bridal", work:"Woven Zari",   page:"product1.html"},

  {id:37, name:"Black Flared Gown",                     category:"Gowns",         img:"img/gown1.png",  color:"Black",             price:"₹1,300",  discount:"48% OFF", fabric:"Georgette / Silk",occasion:"Evening / Party",work:"Minimal Embellishment",page:"product2.html"},
  {id:38, name:"Deep Wine Purple Gown",                 category:"Gowns",         img:"img/gown2.png",  color:"Wine Purple",       price:"₹1,300",  discount:"48% OFF", fabric:"Velvet",      occasion:"Wedding",           work:"Embroidery",   page:"product2.html"},
  {id:39, name:"Steel Blue Gown",                       category:"Gowns",         img:"img/gown3.png",  color:"Steel Blue",        price:"₹1,300",  discount:"41% OFF", fabric:"Satin / Silk",occasion:"Formal",            work:"Plain / Minimal",page:"product2.html"},
  {id:40, name:"Maroon Red Gown",                       category:"Gowns",         img:"img/gown4.png",  color:"Maroon",            price:"₹1,300",  discount:"48% OFF", fabric:"Silk",        occasion:"Wedding",           work:"Zari Work",    page:"product2.html"},
  {id:41, name:"Champagne Beige Gown",                  category:"Gowns",         img:"img/gown5.png",  color:"Champagne",         price:"₹1,300",  discount:"35% OFF", fabric:"Net / Organza",occasion:"Festive",          work:"Sequin Work",  page:"product2.html"},
  {id:42, name:"Sage Green Gown",                       category:"Gowns",         img:"img/gown6.png",  color:"Sage Green",        price:"₹1,300",  discount:"35% OFF", fabric:"Cotton Silk", occasion:"Casual / Festive",  work:"Block Print",  page:"product2.html"},
  {id:43, name:"Royal Blue Gown",                       category:"Gowns",         img:"img/gown7.png",  color:"Royal Blue",        price:"₹1,300",  discount:"48% OFF", fabric:"Silk",        occasion:"Party",             work:"Embroidery",   page:"product2.html"},
  {id:44, name:"Dusty Pink Embroidered Gown",           category:"Gowns",         img:"img/gown8.png",  color:"Dusty Pink",        price:"₹1,300",  discount:"48% OFF", fabric:"Net",         occasion:"Wedding",           work:"Heavy Embroidery",page:"product2.html"},
  {id:45, name:"Mauve Pink Gown",                       category:"Gowns",         img:"img/gown19.png", color:"Mauve",             price:"₹1,300",  discount:"41% OFF", fabric:"Georgette",   occasion:"Formal",            work:"Thread Work",  page:"product2.html"},
  {id:46, name:"Teal Green Gown",                       category:"Gowns",         img:"img/gown21.png", color:"Teal",              price:"₹1,300",  discount:"48% OFF", fabric:"Silk",        occasion:"Festive",           work:"Zari Border",  page:"product2.html"},
  {id:47, name:"Jet Black Gown",                        category:"Gowns",         img:"img/gown11.png", color:"Jet Black",         price:"₹1,300",  discount:"35% OFF", fabric:"Satin",       occasion:"Evening",           work:"Plain",        page:"product2.html"},
  {id:48, name:"Coffee Brown Gown",                     category:"Gowns",         img:"img/gown12.png", color:"Coffee Brown",      price:"₹1,300",  discount:"35% OFF", fabric:"Cotton",      occasion:"Daily Wear",        work:"Digital Print",page:"product2.html"},
  {id:49, name:"Lavender Purple Gown",                  category:"Gowns",         img:"img/gown13.png", color:"Lavender",          price:"₹1,300",  discount:"41% OFF", fabric:"Net / Organza",occasion:"Festive",          work:"Embroidery",   page:"product2.html"},
  {id:50, name:"Dark Plum Gown",                        category:"Gowns",         img:"img/gown14.png", color:"Dark Plum",         price:"₹1,300",  discount:"48% OFF", fabric:"Velvet",      occasion:"Wedding",           work:"Heavy Embroidery",page:"product2.html"},
  {id:51, name:"Ice Blue Gown",                         category:"Gowns",         img:"img/gown15.png", color:"Ice Blue",          price:"₹1,300",  discount:"41% OFF", fabric:"Net",         occasion:"Party",             work:"Sequin & Thread Work",page:"product2.html"},
  {id:52, name:"Navy Blue Gown",                        category:"Gowns",         img:"img/gown16.png", color:"Navy Blue",         price:"₹1,300",  discount:"48% OFF", fabric:"Silk",        occasion:"Formal",            work:"Woven Border", page:"product2.html"},
  {id:53, name:"Mocha Brown Gown",                      category:"Gowns",         img:"img/gown17.png", color:"Mocha Brown",       price:"₹1,300",  discount:"35% OFF", fabric:"Cotton Silk", occasion:"Casual",            work:"Block Print",  page:"product2.html"},
  {id:54, name:"Soft Baby Pink Gown",                   category:"Gowns",         img:"img/gown20.png", color:"Baby Pink",         price:"₹1,300",  discount:"35% OFF", fabric:"Organza",     occasion:"Day Wear",          work:"Thread Work",  page:"product2.html"},

  {id:55, name:"Peach Net Suit",                        category:"Pent-Plazo",    img:"img/pent1.png",  color:"Peach",             price:"$50.87",  discount:"27% OFF", fabric:"Net / Organza",occasion:"Wedding / Festive", work:"Anarkali",     page:"product3.html"},
  {id:56, name:"Mint White Suit",                       category:"Pent-Plazo",    img:"img/pent2.png",  color:"Mint White",        price:"$60.04",  discount:"25% OFF", fabric:"Cotton",      occasion:"Daily / Summer",    work:"Straight Suit",page:"product3.html"},
  {id:57, name:"Pistachio Green Suit",                  category:"Pent-Plazo",    img:"img/pent3.png",  color:"Pistachio",         price:"$48.99",  discount:"25% OFF", fabric:"Georgette",   occasion:"Festive",           work:"A-line Suit",  page:"product3.html"},
  {id:58, name:"Ice Blue Suit",                         category:"Pent-Plazo",    img:"img/pent4.png",  color:"Ice Blue",          price:"$40.77",  discount:"26% OFF", fabric:"Silk Blend",  occasion:"Formal",            work:"Straight Suit",page:"product3.html"},
  {id:59, name:"Cream Ivory Suit",                      category:"Pent-Plazo",    img:"img/pent5.png",  color:"Ivory",             price:"$42.66",  discount:"26% OFF", fabric:"Cotton Silk", occasion:"Traditional",       work:"Classic Suit", page:"product3.html"},
  {id:60, name:"Lavender Purple Suit",                  category:"Pent-Plazo",    img:"img/pent6.png",  color:"Lavender",          price:"$55.89",  discount:"24% OFF", fabric:"Georgette",   occasion:"Party",             work:"Flared Suit",  page:"product3.html"},
  {id:61, name:"Aqua Green Suit",                       category:"Pent-Plazo",    img:"img/pent7.png",  color:"Aqua",              price:"₹999",    discount:"33% OFF", fabric:"Cotton",      occasion:"Casual",            work:"Straight Suit",page:"product3.html"},
  {id:62, name:"Powder Blue Suit",                      category:"Pent-Plazo",    img:"img/pent8.png",  color:"Powder Blue",       price:"$38.96",  discount:"26% OFF", fabric:"Chiffon",     occasion:"Festive",           work:"Embroidered Suit",page:"product3.html"},
  {id:63, name:"Champagne Gold Suit",                   category:"Pent-Plazo",    img:"img/pent9.png",  color:"Champagne",         price:"$67.87",  discount:"25% OFF", fabric:"Silk",        occasion:"Wedding",           work:"Elegant Suit", page:"product3.html"},
  {id:64, name:"Soft Pink Suit",                        category:"Pent-Plazo",    img:"img/pent10.png", color:"Baby Pink",         price:"$95.34",  discount:"27% OFF", fabric:"Georgette",   occasion:"Day Wear",          work:"Straight Suit",page:"product3.html"},
  {id:65, name:"Blush Pink Suit",                       category:"Pent-Plazo",    img:"img/pent11.png", color:"Blush",             price:"₹1,199",  discount:"29% OFF", fabric:"Cotton",      occasion:"Casual",            work:"Printed Suit", page:"product3.html"},
  {id:66, name:"Sky Blue Suit",                         category:"Pent-Plazo",    img:"img/pent12.png", color:"Sky Blue",          price:"₹1,399",  discount:"26% OFF", fabric:"Chiffon",     occasion:"Party",             work:"Flowing Suit", page:"product3.html"},
  {id:67, name:"White Floral Suit",                     category:"Pent-Plazo",    img:"img/pent13.png", color:"White",             price:"₹1,099",  discount:"27% OFF", fabric:"Cotton",      occasion:"Daily",             work:"Floral Suit",  page:"product3.html"},
  {id:68, name:"Beige Printed Suit",                    category:"Pent-Plazo",    img:"img/pent14.png", color:"Beige",             price:"₹1,249",  discount:"26% OFF", fabric:"Cotton",      occasion:"Casual",            work:"Straight Suit",page:"product3.html"},
  {id:69, name:"Off White Suit",                        category:"Pent-Plazo",    img:"img/pent15.png", color:"Off White",         price:"₹949",    discount:"27% OFF", fabric:"Net",         occasion:"Wedding",           work:"Designer Suit",page:"product3.html"},
  {id:70, name:"Cream Minimal Suit",                    category:"Pent-Plazo",    img:"img/pent16.png", color:"Cream",             price:"₹1,149",  discount:"28% OFF", fabric:"Cotton Silk", occasion:"Office",            work:"Minimal Suit", page:"product3.html"},
  {id:71, name:"Floral Organza Suit",                   category:"Pent-Plazo",    img:"img/pent17.png", color:"Light Pink Floral", price:"₹1,299",  discount:"28% OFF", fabric:"Organza",     occasion:"Festive",           work:"Designer Suit",page:"product3.html"},
  {id:72, name:"Teal Embroidered Suit",                 category:"Pent-Plazo",    img:"img/pent18.png", color:"Teal",              price:"₹1,499",  discount:"25% OFF", fabric:"Silk",        occasion:"Party",             work:"Designer Suit",page:"product3.html"},

  {id:73, name:"Off White Lehenga",                     category:"Lehenga",       img:"img/lah1.png",   color:"Off White",         price:"₹4,399",  discount:"27% OFF", fabric:"Georgette",   occasion:"Festive / Party",   work:"Embroidery",   page:"product4.html"},
  {id:74, name:"Red Lehenga",                           category:"Lehenga",       img:"img/lah2.png",   color:"Red",               price:"₹4,899",  discount:"25% OFF", fabric:"Cotton",      occasion:"Casual / Day",      work:"Chikankari",   page:"product4.html"},
  {id:75, name:"Mustard Yellow Lehenga",                category:"Lehenga",       img:"img/lah3.png",   color:"Mustard Yellow",    price:"₹6,265",  discount:"25% OFF", fabric:"Silk Blend",  occasion:"Wedding / Party",   work:"Zari Work",    page:"product4.html"},
  {id:76, name:"Floral Printed Lehenga",                category:"Lehenga",       img:"img/lah9.png",   color:"Floral Printed",    price:"₹6,215",  discount:"26% OFF", fabric:"Crepe",       occasion:"Casual / Puja",     work:"Digital Print",page:"product4.html"},
  {id:77, name:"Pink Lehenga",                          category:"Lehenga",       img:"img/lah5.png",   color:"Pink",              price:"₹4,799",  discount:"26% OFF", fabric:"Art Silk",    occasion:"Office / Casual",   work:"Embroidery",   page:"product4.html"},
  {id:78, name:"Beige Lehenga",                         category:"Lehenga",       img:"img/lah6.png",   color:"Beige",             price:"₹4,999",  discount:"24% OFF", fabric:"Banarasi",    occasion:"Festive",           work:"Woven",        page:"product4.html"},
  {id:79, name:"Peach Floral Lehenga",                  category:"Lehenga",       img:"img/lahim1.png", color:"Peach Floral",      price:"₹4,999",  discount:"33% OFF", fabric:"Cotton Silk", occasion:"Puja / Casual",     work:"Block Print",  page:"product4.html"},
  {id:80, name:"Soft Pink Floral Lehenga",              category:"Lehenga",       img:"img/lahim2.png", color:"Soft Pink Floral",  price:"₹5,599",  discount:"25% OFF", fabric:"Poly Crepe",  occasion:"Daily Wear",        work:"Digital Print",page:"product4.html"},
  {id:81, name:"Aqua Blue Lehenga",                     category:"Lehenga",       img:"img/lahim3.png", color:"Aqua Blue",         price:"₹5,699",  discount:"25% OFF", fabric:"Organza",     occasion:"Wedding / Party",   work:"Embroidery",   page:"product4.html"},
  {id:82, name:"Sage Green Lehenga",                    category:"Lehenga",       img:"img/lahim4.png", color:"Sage Green",        price:"₹4,866",  discount:"27% OFF", fabric:"Heavy Silk",  occasion:"Wedding / Bridal",  work:"Heavy Zari",   page:"product4.html"},
  {id:83, name:"Purple Lehenga",                        category:"Lehenga",       img:"img/lahim6.png", color:"Purple",            price:"₹5,999",  discount:"26% OFF", fabric:"Silk Blend",  occasion:"Party / Festive",   work:"Embroidery",   page:"product4.html"},
  {id:84, name:"Mauve Lehenga",                         category:"Lehenga",       img:"img/lahim7.png", color:"Mauve",             price:"₹4,899",  discount:"27% OFF", fabric:"Georgette",   occasion:"Casual / Office",   work:"Printed",      page:"product4.html"},
  {id:85, name:"Floral Pink Lehenga",                   category:"Lehenga",       img:"img/lahim8.png", color:"Floral Pink",       price:"₹6,699",  discount:"26% OFF", fabric:"Crepe",       occasion:"Festive",           work:"Embroidery",   page:"product4.html"},
  {id:86, name:"Light Pink Lehenga",                    category:"Lehenga",       img:"img/lahim9.png", color:"Light Pink",        price:"₹4,599",  discount:"27% OFF", fabric:"Cotton Silk", occasion:"Casual / Daily",    work:"Thread Work",  page:"product4.html"},
  {id:87, name:"Dusty Green Sage Lehenga",              category:"Lehenga",       img:"img/lahim10.png",color:"Dusty Green Sage",  price:"₹5,899",  discount:"28% OFF", fabric:"Art Silk",    occasion:"Festive / Puja",    work:"Block Print",  page:"product4.html"},
  {id:88, name:"Maroon Lehenga",                        category:"Lehenga",       img:"img/lahim11.png",color:"Maroon",            price:"₹4,899",  discount:"28% OFF", fabric:"Georgette",   occasion:"Party / Festive",   work:"Embroidery",   page:"product4.html"},
  {id:89, name:"Deep Purple Lehenga",                   category:"Lehenga",       img:"img/lahim12.png",color:"Deep Purple",       price:"₹4,999",  discount:"25% OFF", fabric:"Banarasi",    occasion:"Wedding / Party",   work:"Woven Zari",   page:"product4.html"},

  {id:90,  name:"Pink Embroidered Net Suit",            category:"Peplum",        img:"img/pap1.png",   color:"Pink",              price:"₹2,500",  discount:"25% OFF", fabric:"Net",         occasion:"Party / Festive",   work:"Embroidery",   page:"product5.html"},
  {id:91,  name:"Mustard Yellow Anarkali Suit",         category:"Peplum",        img:"img/pap2.png",   color:"Mustard Yellow",    price:"₹2,800",  discount:"28% OFF", fabric:"Georgette",   occasion:"Wedding / Party",   work:"Embroidery",   page:"product5.html"},
  {id:92,  name:"Sea Green Designer Lehenga Suit",      category:"Peplum",        img:"img/pap3.png",   color:"Sea Green",         price:"₹3,200",  discount:"30% OFF", fabric:"Silk Blend",  occasion:"Wedding / Festive", work:"Zari Work",    page:"product5.html"},
  {id:93,  name:"Olive Green Peplum Suit",              category:"Peplum",        img:"img/pap4.png",   color:"Olive Green",       price:"₹3,000",  discount:"26% OFF", fabric:"Organza",     occasion:"Party / Casual",    work:"Printed",      page:"product5.html"},
  {id:94,  name:"Bright Yellow Party Wear Suit",        category:"Peplum",        img:"img/pap5.png",   color:"Bright Yellow",     price:"₹2,700",  discount:"27% OFF", fabric:"Chiffon",     occasion:"Party / Festive",   work:"Embroidery",   page:"product5.html"},
  {id:95,  name:"Peach Designer Sharara Suit",          category:"Peplum",        img:"img/pap6.png",   color:"Peach",             price:"₹3,100",  discount:"32% OFF", fabric:"Net",         occasion:"Wedding / Party",   work:"Thread Work",  page:"product5.html"},
  {id:96,  name:"Lavender Floral Lehenga Suit",         category:"Peplum",        img:"img/pap7.png",   color:"Lavender",          price:"₹3,300",  discount:"30% OFF", fabric:"Silk",        occasion:"Wedding / Party",   work:"Embroidery",   page:"product5.html"},
  {id:97,  name:"Powder Blue Embroidered Suit",         category:"Peplum",        img:"img/pap8.png",   color:"Powder Blue",       price:"₹2,900",  discount:"25% OFF", fabric:"Organza",     occasion:"Casual / Party",    work:"Embroidery",   page:"product5.html"},
  {id:98,  name:"Steel Grey Layered Gown Suit",         category:"Peplum",        img:"img/pap9.png",   color:"Steel Grey",        price:"₹3,400",  discount:"29% OFF", fabric:"Crepe",       occasion:"Party / Festive",   work:"Layered",      page:"product5.html"},
  {id:99,  name:"Soft Peach Net Anarkali Suit",         category:"Peplum",        img:"img/pap10.png",  color:"Soft Peach",        price:"₹2,600",  discount:"26% OFF", fabric:"Net",         occasion:"Wedding / Party",   work:"Embroidery",   page:"product5.html"},
  {id:100, name:"Baby Pink Designer Suit",              category:"Peplum",        img:"img/pap11.png",  color:"Baby Pink",         price:"₹2,750",  discount:"25% OFF", fabric:"Chiffon",     occasion:"Casual / Party",    work:"Printed",      page:"product5.html"},
  {id:101, name:"Blush Pink Flared Sharara Suit",       category:"Peplum",        img:"img/pap12.png",  color:"Blush Pink",        price:"₹3,150",  discount:"28% OFF", fabric:"Georgette",   occasion:"Wedding / Party",   work:"Embroidery",   page:"product5.html"},
  {id:102, name:"Wine Printed Ethnic Suit",             category:"Peplum",        img:"img/pap13.png",  color:"Wine",              price:"₹2,650",  discount:"27% OFF", fabric:"Cotton Blend", occasion:"Casual / Festive", work:"Printed",      page:"product5.html"},
  {id:103, name:"Light Pink Flowing Anarkali Suit",     category:"Peplum",        img:"img/pap14.png",  color:"Light Pink",        price:"₹2,850",  discount:"25% OFF", fabric:"Chiffon",     occasion:"Party / Festive",   work:"Embroidery",   page:"product5.html"},
  {id:104, name:"Hot Pink Festive Lehenga Suit",        category:"Peplum",        img:"img/pap15.png",  color:"Hot Pink",          price:"₹3,350",  discount:"32% OFF", fabric:"Silk",        occasion:"Wedding / Festive", work:"Zari Work",    page:"product5.html"},
  {id:105, name:"Rust Orange Straight Suit",            category:"Peplum",        img:"img/pap16.png",  color:"Rust Orange",       price:"₹2,700",  discount:"26% OFF", fabric:"Cotton",      occasion:"Casual / Daily",    work:"Block Print",  page:"product5.html"},
  {id:106, name:"Mint Blue Layered Party Suit",         category:"Peplum",        img:"img/pap17.png",  color:"Mint Blue",         price:"₹3,200",  discount:"30% OFF", fabric:"Organza",     occasion:"Party / Festive",   work:"Layered",      page:"product5.html"},
  {id:107, name:"Pastel Aqua Designer Suit",            category:"Peplum",        img:"img/pap18.png",  color:"Pastel Aqua",       price:"₹3,100",  discount:"28% OFF", fabric:"Net",         occasion:"Casual / Party",    work:"Printed",      page:"product5.html"},

  {id:108, name:"Blue & White Frock Suit",              category:"Frock Suits",   img:"img/fr1.png",    color:"Blue & White",      price:"₹2,799",  discount:"20% OFF", fabric:"Cotton Blend", occasion:"Casual / Party",  work:"Printed",      page:"prodct6.html"},
  {id:109, name:"Royal Blue Anarkali Suit",             category:"Frock Suits",   img:"img/fr2.png",    color:"Royal Blue",        price:"₹3,199",  discount:"20% OFF", fabric:"Chiffon",     occasion:"Wedding / Party",   work:"Embroidery",   page:"prodct6.html"},
  {id:110, name:"Magenta Pink Frock Suit",              category:"Frock Suits",   img:"img/fr3.png",    color:"Magenta Pink",      price:"₹3,299",  discount:"21% OFF", fabric:"Georgette",   occasion:"Party / Festive",   work:"Zari Work",    page:"prodct6.html"},
  {id:111, name:"Deep Red Bridal Suit",                 category:"Frock Suits",   img:"img/fr4.png",    color:"Deep Red",          price:"₹3,499",  discount:"20% OFF", fabric:"Silk Blend",  occasion:"Wedding / Bridal",  work:"Heavy Zari",   page:"prodct6.html"},
  {id:112, name:"Lavender Designer Suit",               category:"Frock Suits",   img:"img/fr5.png",    color:"Lavender",          price:"₹2,899",  discount:"22% OFF", fabric:"Net",         occasion:"Party / Festive",   work:"Embroidery",   page:"prodct6.html"},
  {id:113, name:"Sky Blue Ethnic Suit",                 category:"Frock Suits",   img:"img/fr6.png",    color:"Sky Blue",          price:"₹2,699",  discount:"21% OFF", fabric:"Chiffon",     occasion:"Casual / Daily",    work:"Digital Print",page:"prodct6.html"},
  {id:114, name:"Black Party Wear Frock Suit",          category:"Frock Suits",   img:"img/fr7.png",    color:"Black",             price:"₹3,099",  discount:"21% OFF", fabric:"Georgette",   occasion:"Party / Festive",   work:"Embroidery",   page:"prodct6.html"},
  {id:115, name:"Pink & Mint Anarkali Suit",            category:"Frock Suits",   img:"img/fr8.png",    color:"Pink & Mint",       price:"₹2,799",  discount:"22% OFF", fabric:"Chiffon",     occasion:"Casual / Party",    work:"Printed",      page:"prodct6.html"},
  {id:116, name:"Cream Elegant Frock Suit",             category:"Frock Suits",   img:"img/fr9.png",    color:"Cream",             price:"₹2,999",  discount:"21% OFF", fabric:"Silk",        occasion:"Wedding / Party",   work:"Embroidery",   page:"prodct6.html"},
  {id:117, name:"Baby Pink Designer Suit",              category:"Frock Suits",   img:"img/fr10.png",   color:"Baby Pink",         price:"₹2,699",  discount:"21% OFF", fabric:"Net",         occasion:"Casual / Puja",     work:"Thread Work",  page:"prodct6.html"},
  {id:118, name:"Beige Traditional Suit",               category:"Frock Suits",   img:"img/fr11.png",   color:"Beige",             price:"₹2,599",  discount:"21% OFF", fabric:"Cotton Silk", occasion:"Casual / Daily",    work:"Block Print",  page:"prodct6.html"},
  {id:119, name:"Wine Red Frock Suit",                  category:"Frock Suits",   img:"img/fr12.png",   color:"Wine Red",          price:"₹3,399",  discount:"21% OFF", fabric:"Velvet Blend", occasion:"Party / Festive", work:"Embroidery",   page:"prodct6.html"},
  {id:120, name:"Lime Green Anarkali Suit",             category:"Frock Suits",   img:"img/fr13.png",   color:"Lime Green",        price:"₹2,799",  discount:"22% OFF", fabric:"Georgette",   occasion:"Casual / Office",   work:"Printed",      page:"prodct6.html"},
  {id:121, name:"Purple Designer Suit",                 category:"Frock Suits",   img:"img/fr14.png",   color:"Purple",            price:"₹3,099",  discount:"21% OFF", fabric:"Chiffon",     occasion:"Festive",           work:"Embroidery",   page:"prodct6.html"},
  {id:122, name:"Red Festive Frock Suit",               category:"Frock Suits",   img:"img/fr15.png",   color:"Red",               price:"₹3,299",  discount:"21% OFF", fabric:"Silk",        occasion:"Festive",           work:"Heavy Zari",   page:"prodct6.html"},
  {id:123, name:"Teal Blue Party Wear Suit",            category:"Frock Suits",   img:"img/fr16.png",   color:"Teal Blue",         price:"₹2,899",  discount:"22% OFF", fabric:"Georgette",   occasion:"Party / Festive",   work:"Embroidery",   page:"prodct6.html"},
  {id:124, name:"Brown Elegant Suit",                   category:"Frock Suits",   img:"img/fr17.png",   color:"Brown",             price:"₹2,599",  discount:"21% OFF", fabric:"Cotton",      occasion:"Casual / Daily",    work:"Block Print",  page:"prodct6.html"},
  {id:125, name:"Multicolor Designer Frock Suit",       category:"Frock Suits",   img:"img/fr18.png",   color:"Multicolor",        price:"₹3,199",  discount:"20% OFF", fabric:"Chiffon",     occasion:"Party / Festive",   work:"Printed",      page:"prodct6.html"},

  {id:126, name:"Sea Green Embroidered Lawn Suit",      category:"Pakistani Suits",img:"img/pak1.png",  color:"Sea Green",         price:"₹3,199",  discount:"29% OFF", fabric:"Lawn + Chiffon Dupatta",occasion:"Light Festive / Summer",work:"Embroidery",page:"prodct7.html"},
  {id:127, name:"Peach Printed Lawn Suit",              category:"Pakistani Suits",img:"img/pak2.png",  color:"Peach",             price:"₹3,049",  discount:"27% OFF", fabric:"Lawn",        occasion:"Casual / Daily Wear",work:"Digital Print",page:"prodct7.html"},
  {id:128, name:"Black Embroidered Formal Suit",        category:"Pakistani Suits",img:"img/pak3.png",  color:"Black (Gold Dots)", price:"₹3,599",  discount:"25% OFF", fabric:"Chiffon / Net",occasion:"Party Wear",        work:"Embroidery (Golden)",page:"prodct7.html"},
  {id:129, name:"Navy Blue Embroidered Suit",           category:"Pakistani Suits",img:"img/pak4.png",  color:"Navy Blue",         price:"₹3,299",  discount:"27% OFF", fabric:"Lawn / Silk Mix",occasion:"Semi-Formal",     work:"Embroidery",   page:"prodct7.html"},
  {id:130, name:"Cream Heavy Embroidered Suit",         category:"Pakistani Suits",img:"img/pak5.png",  color:"Off-White / Cream", price:"₹3,999",  discount:"27% OFF", fabric:"Organza / Net",occasion:"Wedding Wear",     work:"Heavy Embroidery",page:"prodct7.html"},
  {id:131, name:"Mint Green Printed Lawn Suit",         category:"Pakistani Suits",img:"img/pak6.png",  color:"Mint Green",        price:"₹3,099",  discount:"26% OFF", fabric:"Lawn",        occasion:"Casual",            work:"Digital Print",page:"prodct7.html"},
  {id:132, name:"Olive Green Printed Lawn Suit",        category:"Pakistani Suits",img:"img/pak7.png",  color:"Olive Green",       price:"₹3,149",  discount:"27% OFF", fabric:"Lawn",        occasion:"Daily Wear",        work:"Printed + Embroidered",page:"prodct7.html"},
  {id:133, name:"Dusty Pink Embroidered Suit",          category:"Pakistani Suits",img:"img/pak8.png",  color:"Dusty Pink",        price:"₹3,399",  discount:"26% OFF", fabric:"Lawn",        occasion:"Semi-Formal",       work:"Embroidery",   page:"prodct7.html"},
  {id:134, name:"Lavender Grey Embroidered Suit",       category:"Pakistani Suits",img:"img/pak9.png",  color:"Lavender Grey",     price:"₹3,699",  discount:"26% OFF", fabric:"Chiffon / Net",occasion:"Formal",           work:"Heavy Embroidery",page:"prodct7.html"},
  {id:135, name:"Royal Blue Embroidered Suit",          category:"Pakistani Suits",img:"img/pak10.png", color:"Royal Blue",        price:"₹3,299",  discount:"27% OFF", fabric:"Lawn",        occasion:"Festive",           work:"Embroidery",   page:"prodct7.html"},
  {id:136, name:"Light Pink Printed Lawn Suit",         category:"Pakistani Suits",img:"img/pak11.png", color:"Light Pink",        price:"₹3,049",  discount:"27% OFF", fabric:"Lawn",        occasion:"Casual",            work:"Digital Print",page:"prodct7.html"},
  {id:137, name:"Teal Multicolor Embroidered Suit",     category:"Pakistani Suits",img:"img/pak12.png", color:"Teal + Multicolor", price:"₹3,449",  discount:"27% OFF", fabric:"Lawn",        occasion:"Festive",           work:"Embroidery",   page:"prodct7.html"},
  {id:138, name:"Sky Blue Embroidered Lawn Suit",       category:"Pakistani Suits",img:"img/pak13.png", color:"Sky Blue",          price:"₹3,099",  discount:"26% OFF", fabric:"Lawn / Cotton",occasion:"Casual",           work:"Embroidery",   page:"prodct7.html"},
  {id:139, name:"Maroon Bridal Heavy Embroidered Suit", category:"Pakistani Suits",img:"img/pak14.png", color:"Maroon",            price:"₹3,999",  discount:"27% OFF", fabric:"Velvet / Silk",occasion:"Wedding",          work:"Heavy Bridal Embroidery",page:"prodct7.html"},
  {id:140, name:"Chocolate Brown Lawn Suit",            category:"Pakistani Suits",img:"img/pak15.png", color:"Chocolate Brown",   price:"₹3,049",  discount:"27% OFF", fabric:"Lawn",        occasion:"Casual / Daily Wear",work:"Minimal Embroidery",page:"prodct7.html"},
  {id:141, name:"Beige & Red Embroidered Suit",         category:"Pakistani Suits",img:"img/pak16.png", color:"Beige + Red",       price:"₹3,349",  discount:"27% OFF", fabric:"Silk / Lawn Mix",occasion:"Semi-Formal",   work:"Embroidery",   page:"prodct7.html"},
  {id:142, name:"Pastel Grey Formal Suit",              category:"Pakistani Suits",img:"img/pak17.png", color:"Pastel Grey",       price:"₹3,699",  discount:"26% OFF", fabric:"Net / Organza", occasion:"Formal",         work:"Embroidery",   page:"prodct7.html"},
  {id:143, name:"Baby Blue Printed Lawn Suit",          category:"Pakistani Suits",img:"img/pak18.png", color:"Baby Blue",         price:"₹3,049",  discount:"27% OFF", fabric:"Lawn",        occasion:"Casual",            work:"Digital Print",page:"prodct7.html"},

  {id:144, name:"White Sharara Suit",                   category:"Sharara Suits", img:"img/shar1.png",  color:"White",             price:"₹3,000",  discount:"25% OFF", fabric:"Net",         occasion:"Festive / Party",   work:"Embroidery",   page:"prodct8.html"},
  {id:145, name:"Sky Blue Sharara Suit",                category:"Sharara Suits", img:"img/shar19.png", color:"Sky Blue",          price:"₹3,002",  discount:"24% OFF", fabric:"Georgette",   occasion:"Casual / Day",      work:"Chikankari",   page:"prodct8.html"},
  {id:146, name:"Yellow Sharara Suit",                  category:"Sharara Suits", img:"img/shaar16.png",color:"Yellow",            price:"₹3,003",  discount:"23% OFF", fabric:"Silk Blend",  occasion:"Wedding / Party",   work:"Zari Work",    page:"prodct8.html"},
  {id:147, name:"Black Sharara Suit",                   category:"Sharara Suits", img:"img/shar4.png",  color:"Black",             price:"₹3,000",  discount:"25% OFF", fabric:"Crepe",       occasion:"Casual / Puja",     work:"Digital Print",page:"prodct8.html"},
  {id:148, name:"Light Peach Sharara Suit",             category:"Sharara Suits", img:"img/shar5.png",  color:"Light Peach",       price:"₹3,002",  discount:"24% OFF", fabric:"Organza",     occasion:"Office / Casual",   work:"Embroidery",   page:"prodct8.html"},
  {id:149, name:"Maroon Sharara Suit",                  category:"Sharara Suits", img:"img/shar20.png", color:"Maroon",            price:"₹3,000",  discount:"25% OFF", fabric:"Banarasi",    occasion:"Festive",           work:"Woven",        page:"prodct8.html"},
  {id:150, name:"Peach Sharara Suit",                   category:"Sharara Suits", img:"img/shar7.png",  color:"Peach",             price:"₹3,003",  discount:"23% OFF", fabric:"Net",         occasion:"Puja / Casual",     work:"Block Print",  page:"prodct8.html"},
  {id:151, name:"Red Sharara Suit",                     category:"Sharara Suits", img:"img/shar8.png",  color:"Red",               price:"₹3,000",  discount:"25% OFF", fabric:"Silk",        occasion:"Daily Wear",        work:"Embroidery",   page:"prodct8.html"},
  {id:152, name:"Baby Pink Sharara Suit",               category:"Sharara Suits", img:"img/shar9.png",  color:"Pink",              price:"₹3,002",  discount:"24% OFF", fabric:"Net",         occasion:"Wedding / Party",   work:"Embroidery",   page:"prodct8.html"},
  {id:153, name:"Yellow Bridal Sharara Suit",           category:"Sharara Suits", img:"img/shar10.png", color:"Yellow",            price:"₹3,003",  discount:"23% OFF", fabric:"Silk",        occasion:"Wedding / Bridal",  work:"Heavy Zari",   page:"prodct8.html"},
  {id:154, name:"Lush Green Sharara Suit",              category:"Sharara Suits", img:"img/shar11.png", color:"Green",             price:"₹3,000",  discount:"25% OFF", fabric:"Georgette",   occasion:"Party / Festive",   work:"Embroidery",   page:"prodct8.html"},
  {id:155, name:"Off White Sharara Suit",               category:"Sharara Suits", img:"img/shar12.png", color:"Off White",         price:"₹3,002",  discount:"24% OFF", fabric:"Silk",        occasion:"Casual / Office",   work:"Printed",      page:"prodct8.html"},
  {id:156, name:"Rani Pink Sharara Suit",               category:"Sharara Suits", img:"img/shar13.png", color:"Rani Pink",         price:"₹3,003",  discount:"23% OFF", fabric:"Lawn",        occasion:"Festive",           work:"Embroidery",   page:"prodct8.html"},
  {id:157, name:"Orange Sharara Suit",                  category:"Sharara Suits", img:"img/shar14.png", color:"Orange",            price:"₹3,000",  discount:"25% OFF", fabric:"Chiffon",     occasion:"Casual / Daily",    work:"Thread Work",  page:"prodct8.html"},
  {id:158, name:"Black Printed Sharara Suit",           category:"Sharara Suits", img:"img/shar15.png", color:"Black",             price:"₹3,002",  discount:"24% OFF", fabric:"Chiffon",     occasion:"Festive / Puja",    work:"Block Print",  page:"prodct8.html"},
  {id:159, name:"Grey Sharara Suit",                    category:"Sharara Suits", img:"img/shar16.png", color:"Grey",              price:"₹3,003",  discount:"23% OFF", fabric:"Art Silk",    occasion:"Party / Festive",   work:"Embroidery",   page:"prodct8.html"},
  {id:160, name:"Pink Net Sharara Suit",                category:"Sharara Suits", img:"img/shar17.png", color:"Pink",              price:"₹3,000",  discount:"25% OFF", fabric:"Net",         occasion:"Wedding / Party",   work:"Woven Zari",   page:"prodct8.html"},
  {id:161, name:"Red Printed Sharara Suit",             category:"Sharara Suits", img:"img/shar18.png", color:"Red",               price:"₹3,002",  discount:"24% OFF", fabric:"Cotton",      occasion:"Casual",            work:"Digital Print",page:"prodct8.html"},

  {id:162, name:"Mint Green Plazo Suit",                category:"Plazo Suits",   img:"img/pal1.png",   color:"Mint Green",        price:"₹3,000",  discount:"25% OFF", fabric:"Silk",        occasion:"Festive / Party",   work:"Embroidery",   page:"prodct9.html"},
  {id:163, name:"Bright Red Plazo Suit",                category:"Plazo Suits",   img:"img/pal2.png",   color:"Bright Red",        price:"₹3,002",  discount:"24% OFF", fabric:"Net",         occasion:"Casual / Day",      work:"Chikankari",   page:"prodct9.html"},
  {id:164, name:"Light Pink Cotton Plazo Suit",         category:"Plazo Suits",   img:"img/pal3.png",   color:"Light Pink",        price:"₹3,003",  discount:"23% OFF", fabric:"Cotton",      occasion:"Wedding / Party",   work:"Zari Work",    page:"prodct9.html"},
  {id:165, name:"Beige Gold Plazo Suit",                category:"Plazo Suits",   img:"img/pal4.png",   color:"Beige Gold",        price:"₹3,000",  discount:"25% OFF", fabric:"Organza",     occasion:"Casual / Puja",     work:"Digital Print",page:"prodct9.html"},
  {id:166, name:"Hot Pink Plazo Suit",                  category:"Plazo Suits",   img:"img/pal5.png",   color:"Hot Pink",          price:"₹3,002",  discount:"24% OFF", fabric:"Net",         occasion:"Office / Casual",   work:"Embroidery",   page:"prodct9.html"},
  {id:167, name:"Maroon Embroidered Plazo Suit",        category:"Plazo Suits",   img:"img/pal6.png",   color:"Maroon",            price:"₹3,003",  discount:"23% OFF", fabric:"Georgette",   occasion:"Festive",           work:"Embroidery",   page:"prodct9.html"},
  {id:168, name:"Olive Green Net Plazo Suit",           category:"Plazo Suits",   img:"img/pal7.png",   color:"Olive Green",       price:"₹3,000",  discount:"25% OFF", fabric:"Net",         occasion:"Puja / Casual",     work:"Block Print",  page:"prodct9.html"},
  {id:169, name:"Rose Pink Embroidered Plazo Suit",     category:"Plazo Suits",   img:"img/pal8.png",   color:"Rose Pink",         price:"₹3,002",  discount:"24% OFF", fabric:"Lawn",        occasion:"Daily Wear",        work:"Embroidery",   page:"prodct9.html"},
  {id:170, name:"Cream Silk Plazo Suit",                category:"Plazo Suits",   img:"img/pal9.png",   color:"Cream",             price:"₹3,003",  discount:"23% OFF", fabric:"Net",         occasion:"Wedding / Party",   work:"Embroidery",   page:"prodct9.html"},
  {id:171, name:"Wine Red Plazo Suit",                  category:"Plazo Suits",   img:"img/pal10.png",  color:"Wine Red",          price:"₹3,000",  discount:"25% OFF", fabric:"Silk",        occasion:"Wedding / Bridal",  work:"Heavy Zari",   page:"prodct9.html"},
  {id:172, name:"Mustard Yellow Plazo Suit",            category:"Plazo Suits",   img:"img/pal11.png",  color:"Mustard Yellow",    price:"₹3,002",  discount:"24% OFF", fabric:"Georgette",   occasion:"Party / Festive",   work:"Embroidery",   page:"prodct9.html"},
  {id:173, name:"Magenta Pink Silk Plazo Suit",         category:"Plazo Suits",   img:"img/pal12.png",  color:"Magenta Pink",      price:"₹3,003",  discount:"23% OFF", fabric:"Silk",        occasion:"Casual / Office",   work:"Printed",      page:"prodct9.html"},
  {id:174, name:"Peach Plazo Suit",                     category:"Plazo Suits",   img:"img/pal13.png",  color:"Peach",             price:"₹3,000",  discount:"25% OFF", fabric:"Net",         occasion:"Festive",           work:"Embroidery",   page:"prodct9.html"},
  {id:175, name:"Golden Yellow Festive Plazo Suit",     category:"Plazo Suits",   img:"img/pal14.png",  color:"Golden Yellow",     price:"₹3,002",  discount:"24% OFF", fabric:"Cotton",      occasion:"Casual / Daily",    work:"Thread Work",  page:"prodct9.html"},
  {id:176, name:"Orange Plazo Suit",                    category:"Plazo Suits",   img:"img/pal15.png",  color:"Orange",            price:"₹3,003",  discount:"23% OFF", fabric:"Chiffon",     occasion:"Festive / Puja",    work:"Block Print",  page:"prodct9.html"},
  {id:177, name:"Dark Green Chiffon Plazo Suit",        category:"Plazo Suits",   img:"img/pal16.png",  color:"Dark Green",        price:"₹3,000",  discount:"25% OFF", fabric:"Chiffon",     occasion:"Party / Festive",   work:"Embroidery",   page:"prodct9.html"},
  {id:178, name:"Lavender Grey Net Plazo Suit",         category:"Plazo Suits",   img:"img/pal17.png",  color:"Pastel Grey",       price:"₹3,002",  discount:"24% OFF", fabric:"Net",         occasion:"Wedding / Party",   work:"Woven Zari",   page:"prodct9.html"},
  {id:179, name:"Soft Brown Cotton Plazo Suit",         category:"Plazo Suits",   img:"img/pal18.png",  color:"Sky Blue",          price:"₹3,003",  discount:"23% OFF", fabric:"Cotton",      occasion:"Casual",            work:"Digital Print",page:"prodct9.html"},

  {id:180, name:"White with Blue Embroidery Dress",    category:"Indo-Western",   img:"img/ind1.png",   color:"Off White",         price:"₹5,087",  discount:"27% OFF", fabric:"Georgette",   occasion:"Festive / Party",   work:"Embroidery",   page:"prodct10.html"},
  {id:181, name:"White Chikan Suit",                   category:"Indo-Western",   img:"img/ind2.png",   color:"White",             price:"₹6,004",  discount:"25% OFF", fabric:"Cotton",      occasion:"Casual / Day",      work:"Chikankari",   page:"prodct10.html"},
  {id:182, name:"Magenta Anarkali",                    category:"Indo-Western",   img:"img/ind3.png",   color:"Magenta",           price:"₹4,899",  discount:"25% OFF", fabric:"Silk Blend",  occasion:"Wedding / Party",   work:"Zari Work",    page:"prodct10.html"},
  {id:183, name:"Baby Pink Indo-Western Suit",         category:"Indo-Western",   img:"img/ind4.png",   color:"Baby Pink",         price:"₹4,077",  discount:"26% OFF", fabric:"Crepe",       occasion:"Casual / Puja",     work:"Digital Print",page:"prodct10.html"},
  {id:184, name:"Grey Straight Cut Indo-Western",      category:"Indo-Western",   img:"img/ind5.png",   color:"Charcoal Grey",     price:"₹4,266",  discount:"26% OFF", fabric:"Art Silk",    occasion:"Office / Casual",   work:"Embroidery",   page:"prodct10.html"},
  {id:185, name:"Brown Woven Indo-Western",            category:"Indo-Western",   img:"img/ind6.png",   color:"Earthy Brown",      price:"₹5,589",  discount:"24% OFF", fabric:"Banarasi",    occasion:"Festive",           work:"Woven",        page:"prodct10.html"},
  {id:186, name:"Light Blue Indo-Western Gown",        category:"Indo-Western",   img:"img/ind7.png",   color:"Pastel Sky Blue",   price:"₹1,999",  discount:"33% OFF", fabric:"Cotton Silk", occasion:"Puja / Casual",     work:"Block Print",  page:"prodct10.html"},
  {id:187, name:"Party Embellished Bodycon Suit",      category:"Indo-Western",   img:"img/ind8.png",   color:"Red",               price:"₹3,896",  discount:"25% OFF", fabric:"Poly Crepe",  occasion:"Daily Wear",        work:"Digital Print",page:"prodct10.html"},
  {id:188, name:"Blush Pink Saree Style Dress",        category:"Indo-Western",   img:"img/ind9.png",   color:"Pink",              price:"₹6,787",  discount:"25% OFF", fabric:"Organza",     occasion:"Wedding / Party",   work:"Embroidery",   page:"prodct10.html"},
  {id:189, name:"Ivory Beige Bridal Suit",             category:"Indo-Western",   img:"img/ind10.png",  color:"Beige",             price:"₹9,534",  discount:"27% OFF", fabric:"Heavy Silk",  occasion:"Wedding / Bridal",  work:"Heavy Zari",   page:"prodct10.html"},
  {id:190, name:"Brown Off White Gown",                category:"Indo-Western",   img:"img/ind11.png",  color:"Brown / Off White",  price:"₹1,199",  discount:"29% OFF", fabric:"Cotton",     occasion:"Casual / Puja",     work:"Block Print",  page:"prodct10.html"},
  {id:191, name:"Mint Blue Peplum",                    category:"Indo-Western",   img:"img/ind12.png",  color:"Mint Blue",         price:"₹1,399",  discount:"26% OFF", fabric:"Silk Blend",  occasion:"Party / Festive",   work:"Embroidery",   page:"prodct10.html"},
  {id:192, name:"Powder Blue Indo-Western Dress",      category:"Indo-Western",   img:"img/ind13.png",  color:"Powder Blue",       price:"₹1,099",  discount:"27% OFF", fabric:"Georgette",   occasion:"Casual / Office",   work:"Printed",      page:"prodct10.html"},
  {id:193, name:"Sage Green Indo-Western Gown",        category:"Indo-Western",   img:"img/ind14.png",  color:"Sage Green",        price:"₹1,249",  discount:"26% OFF", fabric:"Crepe",       occasion:"Festive",           work:"Embroidery",   page:"prodct10.html"},
  {id:194, name:"Floral Pink Skirt Top Suit",          category:"Indo-Western",   img:"img/ind15.png",  color:"Floral Pink",       price:"₹1,949",  discount:"27% OFF", fabric:"Cotton Silk", occasion:"Casual / Daily",    work:"Thread Work",  page:"prodct10.html"},
  {id:195, name:"Mint Green Embroidered Indo-Western", category:"Indo-Western",   img:"img/ind16.png",  color:"Mint Green",        price:"₹1,149",  discount:"28% OFF", fabric:"Art Silk",    occasion:"Festive / Puja",    work:"Block Print",  page:"prodct10.html"},
  {id:196, name:"Rani Pink Indo-Western Lehenga",      category:"Indo-Western",   img:"img/ind17.png",  color:"Rani Pink",         price:"₹1,299",  discount:"28% OFF", fabric:"Georgette",   occasion:"Party / Festive",   work:"Embroidery",   page:"prodct10.html"},
  {id:197, name:"Champagne Suit",                      category:"Indo-Western",   img:"img/ind18.png",  color:"Champagne",         price:"₹1,999",  discount:"25% OFF", fabric:"Banarasi",    occasion:"Wedding / Party",   work:"Woven Zari",   page:"prodct10.html"},

  {id:198, name:"Peach Blush Pink Pazami Suit",        category:"Pazami Suits",   img:"img/paz1.png",   color:"Peach",             price:"₹3,500",  discount:"27% OFF", fabric:"Georgette",   occasion:"Festive / Party",   work:"Embroidery",   page:"prodct11.html"},
  {id:199, name:"Black Chikan Pazami Suit",            category:"Pazami Suits",   img:"img/paz2.png",   color:"Black",             price:"₹4,000",  discount:"25% OFF", fabric:"Cotton",      occasion:"Casual / Day",      work:"Chikankari",   page:"prodct11.html"},
  {id:200, name:"Off White Cream Pazami Suit",         category:"Pazami Suits",   img:"img/paz3.png",   color:"Off White / Cream", price:"₹4,899",  discount:"25% OFF", fabric:"Silk Blend",  occasion:"Wedding / Party",   work:"Zari Work",    page:"prodct11.html"},
  {id:201, name:"Dark Green Pazami Suit",              category:"Pazami Suits",   img:"img/paz4.png",   color:"Dark Green",        price:"₹4,077",  discount:"26% OFF", fabric:"Crepe",       occasion:"Casual / Puja",     work:"Digital Print",page:"prodct11.html"},
  {id:202, name:"Teal Blue Pazami Suit",               category:"Pazami Suits",   img:"img/paz5.png",   color:"Teal Blue",         price:"₹4,266",  discount:"26% OFF", fabric:"Art Silk",    occasion:"Office / Casual",   work:"Embroidery",   page:"prodct11.html"},
  {id:203, name:"White Woven Pazami Suit",             category:"Pazami Suits",   img:"img/paz6.png",   color:"White",             price:"₹5,589",  discount:"24% OFF", fabric:"Banarasi",    occasion:"Festive",           work:"Woven",        page:"prodct11.html"},
  {id:204, name:"Dusty Pink Pazami Suit",              category:"Pazami Suits",   img:"img/paz7.png",   color:"Dusty Pink",        price:"₹1,999",  discount:"33% OFF", fabric:"Cotton Silk", occasion:"Puja / Casual",     work:"Block Print",  page:"prodct11.html"},
  {id:205, name:"Light Beige Printed Pazami Suit",     category:"Pazami Suits",   img:"img/paz8.png",   color:"Light Beige",       price:"₹3,896",  discount:"25% OFF", fabric:"Poly Crepe",  occasion:"Daily Wear",        work:"Digital Print",page:"prodct11.html"},
  {id:206, name:"Olive Green Pazami Suit",             category:"Pazami Suits",   img:"img/paz9.png",   color:"Olive Green",       price:"₹6,787",  discount:"25% OFF", fabric:"Organza",     occasion:"Wedding / Party",   work:"Embroidery",   page:"prodct11.html"},
  {id:207, name:"Coral Peach Pazami Suit",             category:"Pazami Suits",   img:"img/paz10.png",  color:"Coral / Peach",     price:"₹4,077",  discount:"27% OFF", fabric:"Heavy Silk",  occasion:"Wedding / Bridal",  work:"Heavy Zari",   page:"prodct11.html"},
  {id:208, name:"Light Olive Green Pazami Suit",       category:"Pazami Suits",   img:"img/paz11.png",  color:"Light Olive Green", price:"₹1,199",  discount:"29% OFF", fabric:"Cotton",      occasion:"Casual / Puja",     work:"Block Print",  page:"prodct11.html"},
  {id:209, name:"Deep Pink Magenta Pazami Suit",       category:"Pazami Suits",   img:"img/paz12.png",  color:"Deep Pink / Magenta",price:"₹1,399", discount:"26% OFF", fabric:"Silk Blend",  occasion:"Party / Festive",   work:"Embroidery",   page:"prodct11.html"},
  {id:210, name:"Cream Brown Combo Pazami Suit",       category:"Pazami Suits",   img:"img/paz13.png",  color:"Cream + Brown",     price:"₹1,099",  discount:"27% OFF", fabric:"Georgette",   occasion:"Casual / Office",   work:"Printed",      page:"prodct11.html"},
  {id:211, name:"Mint Pazami Suit",                    category:"Pazami Suits",   img:"img/paz14.png",  color:"Mint",              price:"₹1,249",  discount:"26% OFF", fabric:"Crepe",       occasion:"Festive",           work:"Embroidery",   page:"prodct11.html"},
  {id:212, name:"Black Floral Pazami Suit",            category:"Pazami Suits",   img:"img/paz15.png",  color:"Black Floral",      price:"₹949",    discount:"27% OFF", fabric:"Cotton Silk", occasion:"Casual / Daily",    work:"Thread Work",  page:"prodct11.html"},
  {id:213, name:"Light Grey Pazami Suit",              category:"Pazami Suits",   img:"img/paz16.png",  color:"Light Grey",        price:"₹1,149",  discount:"28% OFF", fabric:"Art Silk",    occasion:"Festive / Puja",    work:"Block Print",  page:"prodct11.html"},
  {id:214, name:"Navy Blue Pazami Suit",               category:"Pazami Suits",   img:"img/paz17.png",  color:"Navy Blue",         price:"₹1,299",  discount:"28% OFF", fabric:"Georgette",   occasion:"Party / Festive",   work:"Embroidery",   page:"prodct11.html"},
  {id:215, name:"Bright Pink Pazami Suit",             category:"Pazami Suits",   img:"img/paz18.png",  color:"Bright Pink",       price:"₹1,499",  discount:"25% OFF", fabric:"Banarasi",    occasion:"Wedding / Party",   work:"Woven Zari",   page:"prodct11.html"},
  ];

  // ── 2.  SEARCH FUNCTION ────────────────────────────────────
  function searchProducts(query) {
    query = query.trim().toLowerCase();
    if (!query) return [];
    const terms = query.split(/\s+/);
    return products.filter(p => {
      const hay = [p.name, p.category, p.color, p.fabric, p.occasion, p.work]
                    .join(" ").toLowerCase();
      return terms.every(t => hay.includes(t));
    });
  }

  // ── 3.  AUTOCOMPLETE DROPDOWN ──────────────────────────────
  function buildDropdown(input, resultsCount) {
    const wrap = input.closest(".nav-search") || input.parentElement;
    wrap.style.position = "relative";

    let drop = wrap.querySelector(".tl-drop");
    if (!drop) {
      drop = document.createElement("div");
      drop.className = "tl-drop";
      drop.style.cssText = `
        position:absolute; top:calc(100% + 4px); left:0; right:0;
        background:#fff; border:1.5px solid #ddb8cc;
        border-radius:12px; box-shadow:0 8px 32px rgba(122,45,82,.18);
        z-index:9999; max-height:340px; overflow-y:auto;
        font-family:'Lato',sans-serif; font-size:12px;
      `;
      wrap.appendChild(drop);
    }
    return drop;
  }

  function attachAutocomplete(input) {
    if (!input || input._tlBound) return;
    input._tlBound = true;

    let drop;
    let currentIdx = -1;
    let items = [];

    input.addEventListener("input", function () {
      const q = this.value.trim();
      currentIdx = -1;
      if (!q) { if (drop) drop.innerHTML = ""; return; }

      const results = searchProducts(q).slice(0, 8);
      drop = buildDropdown(input);
      drop.innerHTML = "";
      items = [];

      if (!results.length) {
        drop.innerHTML = `<div style="padding:14px 16px;color:#b89aaa;">No results for "<strong>${q}</strong>"</div>`;
        return;
      }

      results.forEach((p, i) => {
        const el = document.createElement("a");
        el.href = p.page + "?id=" + p.id;
        el.className = "tl-drop-item";
        el.style.cssText = `
          display:flex; align-items:center; gap:12px;
          padding:10px 14px; text-decoration:none; color:#3d1a28;
          transition:background .15s; border-bottom:1px solid #fdf0f6;
        `;
        el.innerHTML = `
          <img src="${p.img}" alt="${p.name}"
               onerror="this.style.display='none'"
               style="width:44px;height:52px;object-fit:cover;border-radius:6px;flex-shrink:0;">
          <div>
            <div style="font-weight:700;font-size:12px;letter-spacing:.5px;">${p.name}</div>
            <div style="font-size:11px;color:#9a7080;margin-top:2px;">${p.category} · ${p.color}</div>
            <div style="font-size:11px;color:#7a2d52;font-weight:700;margin-top:1px;">${p.price} <span style="color:#c595b0;font-weight:400;">${p.discount}</span></div>
          </div>
        `;
        el.addEventListener("mouseenter", () => {
          items.forEach(x => x.style.background = "");
          el.style.background = "#fdf0f6";
          currentIdx = i;
        });
        el.addEventListener("mouseleave", () => el.style.background = "");
        drop.appendChild(el);
        items.push(el);
      });

      // "See all results" link
      const all = document.createElement("a");
      all.href = `search-results.html?q=${encodeURIComponent(q)}`;
      all.style.cssText = `
        display:block; padding:11px 14px; text-align:center;
        font-weight:700; font-size:11px; letter-spacing:1.5px;
        color:#7a2d52; text-decoration:none; text-transform:uppercase;
        background:#fdf6f9; border-top:1px solid #f2e0ea;
      `;
      all.textContent = `See all results for "${q}"`;
      drop.appendChild(all);
    });

    // Keyboard navigation
    input.addEventListener("keydown", function (e) {
      if (!drop) return;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        currentIdx = Math.min(currentIdx + 1, items.length - 1);
        items.forEach((x, i) => x.style.background = i === currentIdx ? "#fdf0f6" : "");
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        currentIdx = Math.max(currentIdx - 1, -1);
        items.forEach((x, i) => x.style.background = i === currentIdx ? "#fdf0f6" : "");
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (currentIdx >= 0 && items[currentIdx]) {
          items[currentIdx].click();
        } else {
          const q = this.value.trim();
          if (q) window.location.href = `search-results.html?q=${encodeURIComponent(q)}`;
        }
      } else if (e.key === "Escape") {
        drop.innerHTML = "";
      }
    });

    document.addEventListener("click", (e) => {
      if (drop && !e.target.closest(".tl-drop") && e.target !== input) {
        drop.innerHTML = "";
      }
    });
  }

  // ── 4.  SEARCH BUTTON HANDLER ──────────────────────────────
  function attachButton(btn, input) {
    if (!btn || btn._tlBound) return;
    btn._tlBound = true;
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const q = input ? input.value.trim() : "";
      if (q) window.location.href = `search-results.html?q=${encodeURIComponent(q)}`;
    });
  }

  // ── 5.  INIT: wire up all search inputs on the page ────────
  function init() {
    // Desktop search bar
    const desktopInput  = document.querySelector(".nav-search input");
    const desktopButton = document.querySelector(".nav-search button");
    attachAutocomplete(desktopInput);
    attachButton(desktopButton, desktopInput);

    // Mobile search row
    const mobileInput  = document.querySelector(".mobile-nav .search-row input");
    const mobileButton = document.querySelector(".mobile-nav .search-row button");
    attachAutocomplete(mobileInput);
    attachButton(mobileButton, mobileInput);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // ── 6.  EXPORT for use by search-results.html ──────────────
  window.TLSearch = { search: searchProducts, products };

})();


