(this["webpackJsonpreact_movies-list-filter"]=this["webpackJsonpreact_movies-list-filter"]||[]).push([[0],{14:function(e,t,i){},15:function(e,t,i){},16:function(e,t,i){},18:function(e,t,i){"use strict";i.r(t);var a=i(3),s=i.n(a),n=(i(13),i(4)),c=i(5),r=i(8),l=i(7),o=i(1),m=i.n(o),d=(i(14),i(15),i(16),i(0)),h=function(e){var t=e.movie,i=t.imdbUrl,a=t.imgUrl,s=t.description,n=t.title;return Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("div",{className:"card-image",children:Object(d.jsx)("figure",{className:"image is-4by3",children:Object(d.jsx)("img",{src:a,alt:"Film logo"})})}),Object(d.jsxs)("div",{className:"card-content",children:[Object(d.jsxs)("div",{className:"media",children:[Object(d.jsx)("div",{className:"media-left",children:Object(d.jsx)("figure",{className:"image is-48x48",children:Object(d.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(d.jsx)("div",{className:"media-content",children:Object(d.jsx)("p",{className:"title is-8",children:n})})]}),Object(d.jsxs)("div",{className:"content",children:[s,Object(d.jsx)("br",{}),Object(d.jsx)("a",{href:i,children:"IMDB"})]})]})]})},j=function(e){var t=e.movies;return Object(d.jsx)("div",{className:"movies",children:t.map((function(e){return Object(d.jsx)(h,{movie:e},e.imdbId)}))})},b=i(6),g=function(e){Object(r.a)(i,e);var t=Object(l.a)(i);function i(){var e;Object(n.a)(this,i);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={query:""},e.handleChange=function(t){e.setState({query:t.target.value})},e.visibleMovies=function(){return b.filter((function(t){var i=e.state.query.toLocaleLowerCase(),a=t.title.toLocaleLowerCase(),s=t.description.toLocaleLowerCase();return a.includes(i)||s.includes(i)}))},e}return Object(c.a)(i,[{key:"render",value:function(){var e=this.visibleMovies();return Object(d.jsxs)("div",{className:"page",children:[Object(d.jsxs)("div",{className:"page-content",children:[Object(d.jsx)("div",{className:"box",children:Object(d.jsx)("div",{className:"field",children:Object(d.jsxs)("label",{htmlFor:"search-query",className:"label",children:["Search movie",Object(d.jsx)("div",{className:"control",children:Object(d.jsx)("input",{onChange:this.handleChange,value:this.state.query,type:"text",id:"search-query",className:"input",placeholder:"Type search word"})})]})})}),Object(d.jsx)(j,{movies:e})]}),Object(d.jsx)("div",{className:"sidebar",children:"Sidebar goes here"})]})}}]),i}(m.a.Component);s.a.render(Object(d.jsx)(g,{}),document.getElementById("root"))},6:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')}},[[18,1,2]]]);
//# sourceMappingURL=main.af78afc3.chunk.js.map