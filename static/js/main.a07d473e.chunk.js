(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),c=n(4),r=n.n(c),o=(n(9),n(2)),s=[{menuItem:"Salmon Rice",isVegetarian:!1,menuIngredients:[{item:"salmon",quantity:1},{item:"frozen brocolli",quantity:"1"},{item:"onion",quantity:1}]},{menuItem:"Vegitarian Risotto",isVegetarian:!0,menuIngredients:[{item:"risotto rice",quantity:1},{item:"vine plum tomato",quantity:1},{item:"cherry tomato",quantity:1},{item:"courgette",quantity:1},{item:"white wine",quantity:1},{item:"parmesan cheese",quantity:1}]},{menuItem:"Vegi Chili Con-carne",isVegetarian:!0,menuIngredients:[{item:"tinned kidney beans",quantity:1},{item:"onion",quantity:1},{item:"courgette",quantity:1}]},{menuItem:"Japanese Chicken Curry",isVegetarian:!1,menuIngredients:[{item:"chicken breast",quantity:2},{item:"onion",quantity:4},{item:"carrot",quantity:2},{item:"potato",quantity:1},{item:"red pepper",quantity:1},{item:"courgette",quantity:1},{item:"tinned tomato",quantity:1}]},{menuItem:"Chicken Korma",isVegetarian:!1,menuIngredients:[{item:"chicken breast",quantity:2},{item:"ginger",quantity:1},{item:"single cream",quantity:1},{item:"oninon",quantity:1},{item:"lentil",quantity:1},{item:"mango chutney",quantity:1}]},{menuItem:"Haddock Couscous",isVegetarian:!1,menuIngredients:[{item:"haddock",quantity:1},{item:"spring oninon",quantity:1},{item:"red pepper",quantity:1}]},{menuItem:"Prawn Linguine",isVegetarian:!1,menuIngredients:[{item:"king prawn",quantity:1},{item:"basil leaves",quantity:1},{item:"lemon",quantity:1},{item:"courgette",quantity:1}]},{menuItem:"Haddock Mash",isVegetarian:!1,menuIngredients:[{item:"haddock",quantity:1},{item:"red oninon",quantity:1},{item:"tomato",quantity:3},{item:"potato",quantity:2}]},{menuItem:"Veg Tagine",isVegetarian:!0,menuIngredients:[{item:"orange",quantity:1},{item:"courgette",quantity:1},{item:"carrot",quantity:2},{item:"leek",quantity:1},{item:"tinned tomato",quantity:1}]}],m=[{category:"fruit & veg",items:["carrot","onion","spring onion","ginger","garlic","lemon","basil leaves","potato","red pepper","vine plum tomato","yellow pepper","tomato","vined plum tomato","cherry tomato","mango","avocado","courgette"]},{category:"meat & fish",items:["haddock","salmon","chicken breast","chicken thigh","beef mince","king prawn"]},{category:"dairy",items:["cheddar cheese","parmesan cheese","single cream","butter"]},{category:"pantry",items:["plain flour","bread flour","basamati rice","risotto rice","couscous","dried prunes","dried figs","dried apricots","linguine","pasta","macaroni","mango chutney"]},{category:"canned food",items:["tinned tomato","tinned tuna","tinned kidney beans","tinned pineapple","cannellini beans"]},{category:"frozen food",items:["frozen brocolli","frozen peas","frozen cauliflower"]}],u=(n(10),n(0));function l(){var e=Object(i.useState)(new Array(s.length).fill(!1)),t=Object(o.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)(new Object),r=Object(o.a)(c,2),l=r[0],d=r[1],g=Object(i.useState)(0),y=Object(o.a)(g,2),h=y[0],p=y[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h2",{children:"Select Menu Items"}),Object(u.jsxs)("h3",{children:[" number of items selected ",h]}),Object(u.jsx)("div",{className:"scrollable-div",children:Object(u.jsx)("ul",{className:"toppings-list",children:s.map((function(e,t){var i=e.menuItem,c=e.isVegetarian;return Object(u.jsx)("li",{children:Object(u.jsxs)("div",{className:"toppings-list-item",children:[Object(u.jsxs)("div",{className:"left-section",children:[Object(u.jsx)("input",{type:"checkbox",id:"custom-checkbox-".concat(t),name:i,value:i,checked:n[t],onChange:function(){return function(e){var t=n.map((function(t,n){return n===e?!t:t}));a(t),p(t[e]?h+1:h-1);var i=new Object(l);s[e].menuIngredients.forEach((function(t,a){if(i[t.item]>=0){var c=i[t.item];console.log("preVal = "+c),console.log("checked = "+!n[e]);var r=n[e]?c-t.quantity:c+t.quantity;0===r?delete i[t.item]:i[t.item]=r}else i[t.item]=t.quantity})),console.log(i),d(i)}(t)}}),Object(u.jsx)("label",{htmlFor:"custom-checkbox-".concat(t),children:i})]}),Object(u.jsxs)("div",{className:"right-section",children:[" ",c?"(V)":""]})]})},t)}))})}),Object(u.jsx)("h2",{children:"Ingredients List"}),Object(u.jsx)("div",{className:"scrollable-div-ingredients",children:m.map((function(e){var t=e.category,n=e.items;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:t}),Object(u.jsx)("ul",{className:"toppings-list",children:Object.entries(l).filter((function(e){return n.indexOf(e[0])>=0})).map((function(e,t){return Object(u.jsx)("div",{className:"toppings-list-item",children:Object(u.jsx)("div",{className:"left-section",children:Object(u.jsxs)("li",{children:[e[0],"  ",e[1]]},t)})})}))})]})}))})]})}var d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),i(e),a(e),c(e),r(e)}))};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(l,{})}),document.getElementById("root")),d()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.a07d473e.chunk.js.map