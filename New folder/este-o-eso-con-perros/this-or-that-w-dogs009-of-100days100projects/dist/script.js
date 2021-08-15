function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      dogs: [],
      database: undefined,
      idx1: undefined,
      idx2: undefined });_defineProperty(this, "componentDidMount",


    () => {
      const database = firebase.database().ref('/dogs');

      this.setState(
      {
        database },

      () => {
        this.getDogs();
      });


      setTimeout(() => {
        this.getRandomDogs();
      }, 2000);
    });_defineProperty(this, "getDogs",

    () => {
      const { database } = this.state;

      database.on('value', snapshot => {
        const dogs = [];
        const dogsObj = snapshot.val();
        Object.keys(dogsObj).forEach(key => {
          dogs.push(dogsObj[key]);
        });

        this.setState({
          dogs });

      });
    });_defineProperty(this, "favoriteDog",

    id => {
      const { database, dogs } = this.state;
      const dog = dogs.find(d => d.id === id);

      // increase the likes
      database.child(id).update({ likes: dog.likes + 1 });
      this.getRandomDogs();
      this.getDogs();
    });_defineProperty(this, "getRandomDogs",

    () => {
      const { dogs } = this.state;

      if (!dogs) {
        return;
      }

      const idx1 = Math.floor(Math.random() * dogs.length);
      const idx2 = Math.floor(Math.random() * dogs.length);

      this.setState({ idx1, idx2 });
    });_defineProperty(this, "getMedal",

    idx => {
      switch (idx) {
        case 0:
          return /*#__PURE__*/(
            React.createElement("p", { className: "place place-1" }, /*#__PURE__*/
            React.createElement("i", { className: "fas fa-medal" })));


        case 1:
          return /*#__PURE__*/(
            React.createElement("p", { className: "place place-2" }, /*#__PURE__*/
            React.createElement("i", { className: "fas fa-medal" })));


        case 2:
          return /*#__PURE__*/(
            React.createElement("p", { className: "place place-3" }, /*#__PURE__*/
            React.createElement("i", { className: "fas fa-medal" })));


        default:
          return /*#__PURE__*/React.createElement("p", { className: "place" }, idx + 1);}

    });}

  render() {
    const { dogs, idx1, idx2 } = this.state;
    const dog1 = dogs[idx1];
    const dog2 = dogs[idx2];

    if (dogs.length === 0 || !idx1 || !idx2) return /*#__PURE__*/React.createElement("h1", null, "Loading data...");

    return /*#__PURE__*/(
      React.createElement("div", { className: "main" }, /*#__PURE__*/
      React.createElement("h1", { className: "text-center" }, "Which one is your favorite?"), /*#__PURE__*/
      React.createElement("div", { className: "container text-center" }, /*#__PURE__*/
      React.createElement("div", { className: "img-container" }, /*#__PURE__*/
      React.createElement("img", { src: dog1.image, alt: "" }), /*#__PURE__*/
      React.createElement("h3", { className: "name" }, dog1.name), /*#__PURE__*/
      React.createElement("button", {
        className: "choose-btn",
        onClick: () => this.favoriteDog(dog1.id) }, "This!")), /*#__PURE__*/



      React.createElement("h3", { className: "or" }, "OR"), /*#__PURE__*/
      React.createElement("div", { className: "img-container" }, /*#__PURE__*/
      React.createElement("img", { src: dog2.image, alt: "" }), /*#__PURE__*/
      React.createElement("h3", { className: "name" }, dog2.name), /*#__PURE__*/
      React.createElement("button", {
        className: "choose-btn",
        onClick: () => this.favoriteDog(dog2.id) }, "That!"))), /*#__PURE__*/




      React.createElement("h2", null, "Leaderboard - Top 10"), /*#__PURE__*/
      React.createElement("table", { class: "leaderboard" }, /*#__PURE__*/
      React.createElement("tbody", null,
      dogs.
      sort((a, b) => b.likes - a.likes).
      slice(0, 10).
      map((dog, idx) => /*#__PURE__*/
      React.createElement("tr", { key: dog.id }, /*#__PURE__*/
      React.createElement("td", null, this.getMedal(idx)), /*#__PURE__*/
      React.createElement("td", null, /*#__PURE__*/
      React.createElement("img", { src: dog.image, alt: dog.id })), /*#__PURE__*/

      React.createElement("td", { className: "name" }, dog.name), /*#__PURE__*/
      React.createElement("td", null, dog.likes)))))));






  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));

// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
  social_panel_container.classList.toggle('visible');
});

close_btn.addEventListener('click', () => {
  social_panel_container.classList.remove('visible');
});