function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      nr1: undefined,
      nr2: undefined,
      sign: undefined,
      correct_answer: undefined,
      answer: undefined,
      score: 0,
      isWrong: false,
      database: undefined,
      users: [],
      user: undefined });_defineProperty(this, "componentWillMount",


    () => {
      const database = firebase.database().ref('/users');
      this.setState(
      {
        database },

      () => {
        this.getUsers();
        this.createCalculation();
      });

    });_defineProperty(this, "getUsers",

    () => {
      const { database } = this.state;

      database.on('value', snapshot => {
        const users = [];
        const usersObj = snapshot.val();
        if (usersObj) {
          Object.keys(usersObj).forEach(key => {
            users.push(usersObj[key]);
          });

          this.setState({
            users });

        }
      });
    });_defineProperty(this, "getRandomNumber",

    (size = 1) => {
      const minNr = 1; // +'1'.padEnd(size, '0'); <- this for more complex calculations
      const maxNr = +Array(size).
      fill(9).
      join('');
      const nr = Math.floor(Math.random() * (maxNr - minNr + 1) + minNr);
      return nr;
    });_defineProperty(this, "getRandomSign",

    () => {
      const signs = ['+', '-', '*', '/'];
      const idx = Math.floor(Math.random() * signs.length);
      return signs[idx];
    });_defineProperty(this, "createCalculation",

    (size = 1) => {
      const nr1 = this.getRandomNumber(size);
      const nr2 = this.getRandomNumber(size);
      const sign = this.getRandomSign();
      const correct_answer = eval(`${nr1} ${sign} ${nr2}`);

      // Don't allow floating point answers nor Infinity
      if (
      Math.floor(correct_answer) !== correct_answer ||
      correct_answer === Infinity)
      {
        return this.createCalculation(size);
      } else {
        this.setState({
          nr1,
          nr2,
          sign,
          correct_answer });

      }
    });_defineProperty(this, "handleChange",

    e => {
      this.setState({
        // convert it to number
        answer: +e.target.value });

    });_defineProperty(this, "handleSubmit",

    e => {
      e.preventDefault();
      const { correct_answer, answer, score } = this.state;

      // increasing/decreasing the score & difficulty based on how far the user goes
      // score increment = how many digits does his score has <- old one
      // score increment = every 20 points
      const score_increment = Math.floor(Math.abs(score) / 25) + 1; // score.toString().split('').length; <- old
      let newScore = undefined;

      if (correct_answer === answer) {
        newScore = score + score_increment;
        e.target.reset();
        this.createCalculation(score_increment);
        this.setState({
          score: newScore,
          isWrong: false });

      } else {
        newScore = score - 1;
        this.setState({
          isWrong: true,
          score: newScore });

      }

      this.updateScoreInDB(newScore);
    });_defineProperty(this, "updateScoreInDB",

    score => {
      const { database, user } = this.state;

      database.child(user.id).update({
        score });

    });_defineProperty(this, "handleNameChange",

    e => {
      this.setState({
        // convert it to number
        name: e.target.value });

    });_defineProperty(this, "handleNameSubmit",

    e => {
      const { name, database } = this.state;

      if (!name) return;

      const newUser = {
        score: 0,
        name,
        lastUpdated: Date.now(),
        // generating a random id
        id: Math.random().
        toString().
        substr(2) };


      database.child(newUser.id).set(newUser);

      this.setState({
        user: newUser });

    });}

  render() {
    const { nr1, nr2, sign, score, isWrong, user, users } = this.state;

    return /*#__PURE__*/(
      React.createElement(React.Fragment, null, /*#__PURE__*/
      React.createElement("h1", null, "Math Wizz"),
      user && /*#__PURE__*/React.createElement("small", { className: "name" }, "Hello, ", user.name),
      user ? /*#__PURE__*/
      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("div", { className: "col-1" }, /*#__PURE__*/
      React.createElement("form", { className: "form", onSubmit: this.handleSubmit }, /*#__PURE__*/
      React.createElement("h3", null, "Calculate:"), /*#__PURE__*/
      React.createElement("div", { className: "calculation" }, /*#__PURE__*/
      React.createElement("p", { className: "op" }, nr1), /*#__PURE__*/
      React.createElement("p", { className: "op" }, sign), /*#__PURE__*/
      React.createElement("p", { className: "op" }, nr2), /*#__PURE__*/
      React.createElement("p", { className: "op" }, "="), /*#__PURE__*/
      React.createElement("input", {
        type: "number",
        className: `answer ${isWrong && 'wrong'}`,
        onChange: this.handleChange })), /*#__PURE__*/


      React.createElement("div", { className: "score" }, "Score: ", score))), /*#__PURE__*/


      React.createElement("div", { className: "col-2" }, /*#__PURE__*/
      React.createElement("div", { className: "leaderboard" }, /*#__PURE__*/
      React.createElement("h3", null, "Leaderboard"), /*#__PURE__*/
      React.createElement("ul", null,
      users.length > 0 &&
      users.
      sort((a, b) => b.score - a.score).
      slice(0, 10).
      map((user, idx) => /*#__PURE__*/
      React.createElement("li", { key: idx }, /*#__PURE__*/
      React.createElement("span", null, user.name), " ", user.score)))))) : /*#__PURE__*/







      React.createElement("div", { className: "text-center" }, /*#__PURE__*/
      React.createElement("p", null, "Welcome to the Math Wizz game. ", /*#__PURE__*/
      React.createElement("br", null), "Let's test your math skills! \uD83D\uDE03 ", /*#__PURE__*/
      React.createElement("br", null), /*#__PURE__*/
      React.createElement("br", null), "You'll be given random math questions that you'll have to answer.", /*#__PURE__*/

      React.createElement("br", null), "Level changes when you reach the score of: 25, 50, 75..."), /*#__PURE__*/


      React.createElement("p", null, "Please enter your username to start:"), /*#__PURE__*/
      React.createElement("input", { type: "text", onChange: this.handleNameChange }), /*#__PURE__*/
      React.createElement("button", { className: "btn", onClick: this.handleNameSubmit }, "Submit"))));




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