(this["webpackJsonpbestpractices-klimaschutz"]=this["webpackJsonpbestpractices-klimaschutz"]||[]).push([[0],{382:function(e,t,n){},384:function(e,t,n){},697:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),o=n(15),a=n.n(o),l=(n(382),n(14)),d=n(19),s=n.n(d),c=n(43),u=(n(384),n(385),n(386),n(387),n(388),n(52)),v=n(229),b=n(32),j=n(42),h=n(374),m=n(230),f=n(376),p=n(372),g=n(157),O=n(7),x=function(){var e=Object(c.a)(s.a.mark((function e(t){var n,i,r,o,a,l,d,c,u,v,b;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.b)(t,(function(e){return e.thema.icon}));case 2:return c=e.sent,u=(null===c||void 0===c||null===(n=c.standort)||void 0===n?void 0:n.name)||"Kein Standort","Feature",!1,v=null===c||void 0===c||null===(i=c.standort)||void 0===i?void 0:i.geojson,null===c||void 0===c||null===(r=c.thema)||void 0===r?void 0:r.farbe,c.color=null===c||void 0===c?void 0:c.thema.farbe,b={header:c.thema.name,title:u,additionalInfo:null===c||void 0===c?void 0:c.beschreibung,subtitle:Object(O.jsxs)("span",{children:[null===c||void 0===c||null===(o=c.standort)||void 0===o?void 0:o.strasse," ",null===c||void 0===c||null===(a=c.standort)||void 0===a?void 0:a.hausnummer,Object(O.jsx)("br",{}),null===c||void 0===c||null===(l=c.standort)||void 0===l?void 0:l.plz," ",null===c||void 0===c||null===(d=c.standort)||void 0===d?void 0:d.stadt]})},c.info=b,c.url=null===c||void 0===c?void 0:c.website,c.bild&&(c.foto="https://www.wuppertal.de/geoportal/standort_klima/fotos/"+c.bild),e.abrupt("return",{text:u,type:"Feature",selected:false,geometry:v,crs:{type:"name",properties:{name:"urn:ogc:def:crs:EPSG::25832"}},properties:c});case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=n(9),y=n(22),S=n(273),w=n(377),C=function(){var e=Object(i.useContext)(y.a),t=e.selectedFeature,n=e.items,r=null===t||void 0===t?void 0:t.properties;if(void 0!==r){var o,a,l,d,s,c,u,v,b,j,h,m;void 0!==r.bild&&(m="https://www.wuppertal.de/geoportal/standort_klima/fotos/"+r.bild);var f,p=n.filter((function(e){return(null===e||void 0===e?void 0:e.standort.id)===r.standort.id&&e.id!==r.id})),g={},x=Object(k.a)(p);try{for(x.s();!(f=x.n()).done;){var C=f.value;void 0===g[C.thema.name]&&(g[C.thema.name]=[]),g[C.thema.name].push(C.kategorien)}}catch(F){x.e(F)}finally{x.f()}var K=[Object(O.jsx)(S.a,{bsStyle:"info",header:"Standort: "+(null===r||void 0===r||null===(o=r.standort)||void 0===o?void 0:o.name),children:Object(O.jsxs)("div",{style:{fontSize:"115%",padding:"10px",paddingTop:"0px"},children:[(null===r||void 0===r?void 0:r.standort)&&Object(O.jsxs)("b",{children:[null===r||void 0===r||null===(a=r.standort)||void 0===a?void 0:a.strasse," ",null===r||void 0===r||null===(l=r.standort)||void 0===l?void 0:l.hausnummer,Object(O.jsx)("br",{}),null===r||void 0===r||null===(d=r.standort)||void 0===d?void 0:d.plz," ",null===r||void 0===r||null===(s=r.standort)||void 0===s?void 0:s.stadt,Object(O.jsx)("br",{})]}),(null===r||void 0===r||null===(c=r.standort)||void 0===c?void 0:c.beschreibung)&&Object(O.jsxs)("div",{children:[null===r||void 0===r||null===(u=r.standort)||void 0===u?void 0:u.beschreibung,Object(O.jsx)("br",{})]}),(null===r||void 0===r||null===(v=r.standort)||void 0===v?void 0:v.bemerkung)&&Object(O.jsxs)("div",{children:[null===r||void 0===r||null===(b=r.standort)||void 0===b?void 0:b.bemerkung," ",Object(O.jsx)("br",{})]}),(null===r||void 0===r||null===(j=r.standort)||void 0===j?void 0:j.kommentar)&&Object(O.jsxs)("div",{children:[null===r||void 0===r||null===(h=r.standort)||void 0===h?void 0:h.kommentar," ",Object(O.jsx)("br",{})]})]})},"standort")];p.length>0&&K.push(Object(O.jsx)(S.a,{header:"Weitere Angebote an diesem Standort:",bsStyle:"success",children:Object(O.jsx)("div",{style:{fontSize:"115%",padding:"10px",paddingTop:"0px"},children:Object(O.jsx)("table",{border:0,style:{xwidth:"100%"},children:Object(O.jsx)("tbody",{children:Object.keys(g).map((function(e,t){return Object(O.jsxs)("tr",{style:{paddingBottom:10},children:[Object(O.jsxs)("td",{style:{verticalAlign:"top",padding:5},children:[e,":"]},"addAng.L."+t),Object(O.jsx)("td",{style:{verticalAlign:"top",padding:5},children:g[e].map((function(e,t){return Object(O.jsx)("div",{children:e.join(", ")},"kategorien."+t)}))},"addAng.R."+t)]},"addAng"+t)}))})})})},"weitereAngebote"));var z=void 0;return void 0!==m&&(z=250),Object(O.jsx)(w.a,{titleIconName:"info-circle",title:"Datenblatt: "+r.kategorien.join(", "),mainSection:Object(O.jsxs)("div",{style:{width:"100%",minHeight:z},children:[void 0!==m&&Object(O.jsx)("img",{alt:"Bild",style:{paddingLeft:10,paddingRight:10,float:"right",paddingBottom:"5px"},src:m,width:"250"}),Object(O.jsxs)("div",{style:{fontSize:"115%",padding:"10px",paddingTop:"0px"},children:[r.beschreibung&&Object(O.jsxs)("b",{children:[r.beschreibung,Object(O.jsx)("br",{})]}),r.bemerkung&&Object(O.jsxs)("div",{children:[r.bemerkung," ",Object(O.jsx)("br",{})]}),r.kommentar&&Object(O.jsxs)("div",{children:[r.kommentar," ",Object(O.jsx)("br",{})]})]})]}),subSections:K})}return null},K=n(6),z=n(21),F=n(116),T=n(216),I=n(114),A=n(375),M=n(226),B=n(222),L=function(){var e,t=Object(i.useContext)(z.b).setAppMenuActiveMenuSection,n=Object(i.useContext)(y.a),r=n.filterState,o=n.filterMode,a=n.filteredItems,l=n.shownFeatures,d=Object(i.useContext)(y.b),s=d.setFilterState,c=d.setFilterMode,u=Object(i.useContext)(y.a).items,v=[],b=[],h=[],m=[],f=Object(k.a)(u||[]);try{for(f.s();!(e=f.n()).done;){var p,g=e.value,x=Object(k.a)(g.kategorien);try{for(x.s();!(p=x.n()).done;){var S=p.value;v.includes(S)||(b.push({key:S}),v.push(S))}}catch(C){x.e(C)}finally{x.f()}h.includes(g.thema.id)||(h.push(g.thema.id),m.push({key:g.thema.id,title:g.thema.name,color:g.thema.farbe}))}}catch(C){f.e(C)}finally{f.f()}var w={mode:"tabs",filters:[{title:"Themen",key:"themen",icon:"folder",type:"tags",values:m,setAll:function(){s(Object(K.a)(Object(K.a)({},r),{},{themen:h}))},setNone:function(){s(Object(K.a)(Object(K.a)({},r),{},{themen:[]}))},colorizer:function(e,t){return t?e.color:"#eeeeee"}},{title:"Kategorien",key:"kategorien",icon:"tags",type:"tags",values:b,setAll:function(){s(Object(K.a)(Object(K.a)({},r),{},{kategorien:v}))},setNone:function(){s(Object(K.a)(Object(K.a)({},r),{},{kategorien:[]}))}}]};void 0===r&void 0!==u&&s({kategorien:v,themen:h}),void 0===o&void 0!==u&&c("themen");return Object(O.jsx)(T.a,{menuIcon:"bars",menuTitle:"Meine Klimaschutzstandorte, Einstellungen und Kompaktanleitung",menuIntroduction:Object(O.jsxs)("span",{children:["Benutzen Sie die Auswahlm\xf6glichkeiten unter"," ",Object(O.jsx)(F.Link,{className:"useAClassNameToRenderProperLink",to:"filter",containerId:"myMenu",smooth:!0,delay:100,onClick:function(){return t("filter")},children:"Meine Klimaschutzstandorte"}),", um die in der Karte angezeigten vorbildlichen Klimaschutzstandorte auf die f\xfcr Sie relevanten Themen zu beschr\xe4nken. \xdcber"," ",Object(O.jsx)(F.Link,{className:"useAClassNameToRenderProperLink",to:"settings",containerId:"myMenu",smooth:!0,delay:100,onClick:function(){return t("settings")},children:"Einstellungen"})," ","k\xf6nnen Sie die Darstellung der Hintergrundkarte und der klimarelevanten Themen an Ihre Interesse anpassen. W\xe4hlen Sie die"," ",Object(O.jsx)(F.Link,{className:"useAClassNameToRenderProperLink",to:"help",containerId:"myMenu",smooth:!0,delay:100,onClick:function(){return t("help")},children:"Kompaktanleitung"})," ","f\xfcr detailliertere Bedienungsinformationen."]}),menuSections:[Object(O.jsx)(I.a,{sectionKey:"filter",sectionTitle:function(){var e,t=(null===a||void 0===a?void 0:a.length)||0;return e=1===t?"Standort":"Standorte","Meine Klimaschutzstandorte (".concat(t," ").concat(e," gefunden, davon ").concat((null===l||void 0===l?void 0:l.length)||"0"," in der Karte)")}(),sectionBsStyle:"primary",sectionContent:Object(O.jsx)(A.a,{filterConfiguration:w})},"filter"),Object(O.jsx)(M.a,{},"settings"),Object(O.jsx)(I.a,{sectionKey:"help",sectionTitle:"Kompaktanleitung",sectionBsStyle:"default",sectionContent:Object(O.jsx)(B.a,{configs:Object(j.d)("Best Practice Klimaschutz",undefined)})},"help")]})},P=function(e){var t=e.filterState,n=e.filterMode;return function(e){var i;if("themen"===n)return null===t||void 0===t||null===(i=t.themen)||void 0===i?void 0:i.includes(e.thema.id);if("kategorien"===n){var r,o=Object(k.a)(e.kategorien);try{for(o.s();!(r=o.n()).done;){var a,l=r.value;if(null===t||void 0===t||null===(a=t.kategorien)||void 0===a?void 0:a.includes(l))return!0}}catch(d){o.e(d)}finally{o.f()}return!1}return!0}},E=n(10),N=n(155),R=function(e){var t,n,i,r=e.featureCollectionContext,o=function(e){var t,n,i=null===r||void 0===r||null===(t=r.items)||void 0===t?void 0:t.find((function(t){var n;return(null===t||void 0===t||null===(n=t.thema)||void 0===n?void 0:n.id)===e}));return null===i||void 0===i||null===(n=i.thema)||void 0===n?void 0:n.name},a="?";if((null===r||void 0===r||null===(t=r.filteredItems)||void 0===t?void 0:t.length)===(null===r||void 0===r||null===(n=r.items)||void 0===n?void 0:n.length))a=void 0;else if("themen"===(null===r||void 0===r?void 0:r.filterMode)){var l,d;if((null===r||void 0===r||null===(l=r.filterState)||void 0===l||null===(d=l.themen)||void 0===d?void 0:d.length)<=2){var s,c,u=null===r||void 0===r||null===(s=r.filterState)||void 0===s?void 0:s.themen,v=[],b=Object(k.a)(u);try{for(b.s();!(c=b.n()).done;){var j=c.value;v.push(o(j))}}catch(w){b.e(w)}finally{b.f()}a="nach Themen gefiltert (nur "+v.join(", ")+")"}else{var h,m;a="nach Themen gefiltert ("+(null===r||void 0===r||null===(h=r.filterState)||void 0===h||null===(m=h.themen)||void 0===m?void 0:m.length)+" Themen)"}}else if("kategorien"===(null===r||void 0===r?void 0:r.filterMode)){var f,p,g,x,y,S;if((null===r||void 0===r||null===(f=r.filterState)||void 0===f||null===(p=f.kategorien)||void 0===p?void 0:p.length)<=3)a="nach Kategorien gefiltert (nur "+(null===r||void 0===r||null===(g=r.filterState)||void 0===g||null===(x=g.kategorien)||void 0===x?void 0:x.join(", "))+")";else a="nach Kategorien gefiltert ("+(null===r||void 0===r||null===(y=r.filterState)||void 0===y||null===(S=y.kategorien)||void 0===S?void 0:S.length)+" Kategorien)"}return 0===(null===r||void 0===r||null===(i=r.filteredItems)||void 0===i?void 0:i.length)?Object(O.jsxs)("div",{children:[Object(O.jsx)("b",{children:"Keine Klimastandorte gefunden!"})," Bitte \xfcberpr\xfcfen Sie Ihre Filtereinstellungen."]}):a?Object(O.jsxs)("div",{children:[Object(O.jsx)("b",{children:"Meine Klimastandorte:"})," ",a]}):void 0},D="https://wupp-topicmaps-data.cismet.de",W=function(){var e=Object(c.a)(s.a.mark((function e(t){var n,i,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="GazDataForStories",i={},e.next=4,Object(u.c)(n,D+"/data/adressen.json");case 4:return i.adressen=e.sent,e.next=7,Object(u.c)(n,D+"/data/bezirke.json");case 7:return i.bezirke=e.sent,e.next=10,Object(u.c)(n,D+"/data/quartiere.json");case 10:return i.quartiere=e.sent,e.next=13,Object(u.c)(n,D+"/data/pois.json");case 13:return i.pois=e.sent,e.next=16,Object(u.c)(n,D+"/data/kitas.json");case 16:return i.kitas=e.sent,e.next=19,Object(u.c)(n,D+"/data/bpklimastandorte.json");case 19:i.bpklimastandorte=e.sent,r=Object(v.b)(i,["bpklimastandorte","pois","kitas","bezirke","quartiere","adressen"]),t(r);case 22:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var q=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(i.useEffect)((function(){W(r)}),[]),Object(O.jsx)(b.c,{appKey:"BestPracticeKlimaschutzWuppertal.TopicMap",featureItemsURL:D+"/data/bpklima.data.json",getFeatureStyler:p.a,convertItemToFeature:x,clusteringOptions:{iconCreateFunction:Object(j.c)(30,(function(e){return e.color}))},clusteringEnabled:!0,itemFilterFunction:P,titleFactory:R,additionalLayerConfiguration:{fernwaerme:{title:Object(O.jsxs)("span",{children:["Fernw\xe4rme"," ",Object(O.jsx)(E.a,{style:{color:"#EEB48C",width:"30px",textAlign:"center"},name:"circle"})]}),initialActive:!0,layer:Object(O.jsx)(N.a,{url:"https://maps.wuppertal.de/deegree/wms",layers:"fernwaermewsw ",format:"image/png",tiled:"true",transparent:"true",maxZoom:19,opacity:.7},"fernwaermewsw")}},children:Object(O.jsx)(h.a,{applicationMenuTooltipString:"Filtern | Einstellungen | Kompaktanleitung",modalMenu:Object(O.jsx)(L,{}),gazData:n,gazetteerSearchPlaceholder:"Standort | Stadtteil | Adresse | POI",infoBox:Object(O.jsx)(f.a,{pixelwidth:400,config:{displaySecondaryInfoAction:!0,city:"Wuppertal",navigator:{noun:{singular:"Standort",plural:"Standorte"}},noCurrentFeatureTitle:"Keine Standorte gefunden",noCurrentFeatureContent:""}}),secondaryInfo:Object(O.jsx)(C,{}),children:Object(O.jsx)(m.a,{})})})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,703)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),i(e),r(e),o(e),a(e)}))};a.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(q,{})}),document.getElementById("root")),G()}},[[697,1,2]]]);
//# sourceMappingURL=main.a3cebc96.chunk.js.map