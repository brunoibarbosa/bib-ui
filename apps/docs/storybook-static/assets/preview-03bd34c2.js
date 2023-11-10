import{C as o,l as f,a as s,j as d,X as l,b as i}from"./index-7d298888.js";import"./index-1b03fe98.js";import"./index-4b095e7f.js";const h={orange:{DEFAULT:"#ffa31c",50:"#fff8eb",100:"#ffedc6",200:"#ffd888",300:"#ffbe4a",400:"#ffa31c",500:"#f98007",600:"#dd5b02",700:"#b73d06",800:"#942e0c",900:"#7a260d",950:"#461102"},red:{DEFAULT:"#e74c3c",50:"#fef3f2",100:"#fde5e3",200:"#fcd0cc",300:"#f9b0a8",400:"#f38276",500:"#e74c3c",600:"#d53d2d",700:"#b33022",800:"#942b20",900:"#7b2921",950:"#43110c"},yellow:{DEFAULT:"#f1c40f",50:"#fdfde9",100:"#fdfbc4",200:"#fbf38d",300:"#f9e54b",400:"#f5d31a",500:"#f1c40f",600:"#c59009",700:"#9d670b",800:"#825211",900:"#6f4314",950:"#412307"},green:{DEFAULT:"#2ecc71",50:"#f1fcf5",100:"#defaea",200:"#bef4d4",300:"#8beab3",400:"#52d689",500:"#2ecc71",600:"#1d9c53",700:"#1b7a43",800:"#1a6139",900:"#175031",950:"#072c18"},violet:{DEFAULT:"#874dff",50:"#f4f2ff",100:"#ece7ff",200:"#dcd2ff",300:"#c1aeff",400:"#a480ff",500:"#874dff",600:"#7e2ffe",700:"#6c17ea",800:"#5a13c4",900:"#4c12a0",950:"#2d086d"},blue:{DEFAULT:"#2f80ed",50:"#eff8ff",100:"#dbeefe",200:"#bfe2fe",300:"#92d1fe",400:"#5fb7fb",500:"#3a97f7",600:"#2f80ed",700:"#1c63d9",800:"#1d51b0",900:"#1d468b",950:"#172c54"},gray:{DEFAULT:"#a2acb0",50:"#f8f9fa",100:"#f3f4f4",200:"#e8ebec",300:"#d6dbdc",400:"#bdc5c8",500:"#a2acb0",600:"#848f96",700:"#788289",800:"#646d73",900:"#535a5f",950:"#363c3f"},black:{DEFAULT:"#1c1c1c",50:"#f6f6f6",100:"#e7e7e7",200:"#d1d1d1",300:"#b0b0b0",400:"#888888",500:"#6d6d6d",600:"#5d5d5d",700:"#4f4f4f",800:"#454545",900:"#3d3d3d",950:"#1c1c1c"},transparent:"transparent",current:"currentColor",white:"#fefefe",disabled:{main:"#bfbfbf",dark:"#878787",light:"#d3d3d3",contrastText:"#3a3a3a"}},u={variant:"default",color:"orange",size:"default",shape:"default",asChild:!1,asIcon:!1,fullWidth:!1,isLoading:!1},b={colors:h,typography:{fontSize:16},spacing:a=>`${.25*a}rem`,components:{Button:{defaultProps:u}}};class p{constructor(n){this.DEFAULT_SCALE=500,this.colors=n.colors,this.components=n.components,this.baseSpacing=n.spacing,this.typography=n.typography}color(n,t){const r=this.colors[n];if(t)if(typeof r=="object")if("DEFAULT"in r){if(t==="DEFAULT"||typeof t=="number")return r[t];switch(t){case"light":return r[300];case"main":return r[500];case"dark":return r[600];case"contrastText":return r[950]}}else{if(t!=="DEFAULT"&&typeof t!="number")return r[t];{const e=o(r.main);switch(t){case"DEFAULT":return e.hex();case 50:return e.lighten(.75).hex();case 100:return e.lighten(.6).hex();case 200:return e.lighten(.45).hex();case 300:return e.lighten(.3).hex();case 400:return e.lighten(.15).hex();case 500:return e.hex();case 600:return e.darken(.15).hex();case 700:return e.darken(.3).hex();case 800:return e.darken(.45).hex();case 900:return e.darken(.6).hex();case 950:return e.darken(.75).hex()}}}else if(t==="DEFAULT"||typeof t=="number"){const e=o(r);return t==="DEFAULT"||t===this.DEFAULT_SCALE?e.hex():t>this.DEFAULT_SCALE?e.darken((t-this.DEFAULT_SCALE)*2/2e3).hex():e.lighten((this.DEFAULT_SCALE-t)*2/2e3).hex()}else{const e=o(r);switch(t){case"light":return e.lighten(.3).hex();case"main":return e.hex();case"dark":return e.darken(.3).hex();case"contrastText":return e.darken(.6).hex()}}else return typeof r=="object"?"DEFAULT"in r?r[400]:r.main:r}calculateSpacing(n){return typeof n>"u"?"":n==="auto"?n:typeof this.baseSpacing=="number"?(n*this.baseSpacing).toString():this.baseSpacing(n).toString()}spacing(n,t,r,e){return[this.calculateSpacing(n),this.calculateSpacing(t),this.calculateSpacing(r),this.calculateSpacing(e)].filter(c=>c.trim()!=="").join(" ")}}function g(a){const n=new p(f.merge(b,a));return Object.create(n)}const m=s`
  *,
  ::before,
  ::after {
    box-sizing: border-box; /* 1 */
    border-width: 0; /* 2 */
    border-style: solid; /* 2 */
    border-color: theme('borderColor.DEFAULT', currentColor); /* 2 */
  }

  ::before,
  ::after {
    --tw-content: '';
  }

  html {
    line-height: 1.5; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
    -moz-tab-size: 4; /* 3 */
    tab-size: 4; /* 3 */
  }

  body {
    margin: 0; /* 1 */
    line-height: inherit; /* 2 */
  }

  hr {
    height: 0; /* 1 */
    color: inherit; /* 2 */
    border-top-width: 1px; /* 3 */
  }

  abbr:where([title]) {
    text-decoration: underline dotted;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
  }
  a {
    color: inherit;
    text-decoration: inherit;
  }

  b,
  strong {
    font-weight: bolder;
  }

  code,
  kbd,
  samp,
  pre {
    font-family: theme('fontFamily.mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace); /* 1 */
    font-size: 1em; /* 2 */
  }
  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  table {
    text-indent: 0; /* 1 */
    border-color: inherit; /* 2 */
    border-collapse: collapse; /* 3 */
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; /* 1 */
    font-feature-settings: inherit; /* 1 */
    font-variation-settings: inherit; /* 1 */
    font-size: 100%; /* 1 */
    font-weight: inherit; /* 1 */
    line-height: inherit; /* 1 */
    color: inherit; /* 1 */
    margin: 0; /* 2 */
    padding: 0; /* 3 */
  }

  button,
  select {
    text-transform: none;
  }

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button; /* 1 */
    background-color: transparent; /* 2 */
    background-image: none; /* 2 */
  }

  :-moz-focusring {
    outline: auto;
  }

  :-moz-ui-invalid {
    box-shadow: none;
  }

  progress {
    vertical-align: baseline;
  }

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    height: auto;
  }

  [type='search'] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }

  summary {
    display: list-item;
  }

  blockquote,
  dl,
  dd,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  figure,
  p,
  pre {
    margin: 0;
  }

  fieldset {
    margin: 0;
    padding: 0;
  }

  legend {
    padding: 0;
  }

  ol,
  ul,
  menu {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  dialog {
    padding: 0;
  }

  textarea {
    resize: vertical;
  }

  input::placeholder,
  textarea::placeholder {
    opacity: 1; /* 1 */
  }

  button,
  [role="button"] {
    cursor: pointer;
  }

  :disabled {
    cursor: default;
  }

  img,
  svg,
  video,
  canvas,
  audio,
  iframe,
  embed,
  object {
    display: block; /* 1 */
    vertical-align: middle; /* 2 */
  }

  img,
  video {
    max-width: 100%;
    height: auto;
  }

  [hidden] {
    display: none;
  }
`,x=({theme:a,children:n})=>d(l,{theme:a,children:[i(m,{}),n]}),y=g({}),A={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}},layout:"fullscreen"},decorators:[a=>i(x,{theme:y,children:i("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%"},children:i(a,{})})})]};export{A as default};
//# sourceMappingURL=preview-03bd34c2.js.map
