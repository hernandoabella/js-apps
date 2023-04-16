function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      text: '',
      inputValue: '',
      lastLetter: '',
      words: [],
      completedWords: [],
      completed: false,
      startTime: undefined,
      timeElapsed: 0,
      wpm: 0,
      started: false,
      progress: 0 });_defineProperty(this, "setText",


    () => {
      const texts = [
      `You never read a book on psychology, Tippy. You didn\'t need to. You knew by some divine instinct that you can make more friends in two months by becoming genuinely interested in other people than you can in two years by trying to get other people interested in you.`,
      `I know more about the private lives of celebrities than I do about any governmental policy that will actually affect me. I'm interested in things that are none of my business, and I'm bored by things that are important to know.`,
      `A spider's body consists of two main parts: an anterior portion, the prosoma (or cephalothorax), and a posterior part, the opisthosoma (or abdomen).`,
      `As customers of all races, nationalities, and cultures visit the Dekalb Farmers Market by the thousands, I doubt that many stand in awe and contemplate the meaning of its existence. But in the capital of the Sunbelt South, the quiet revolution of immigration and food continues to upset and redefine the meanings of local, regional, and global identity.`,
      `Outside of two men on a train platform there's nothing in sight. They're waiting for spring to come, smoking down the track. The world could come to an end tonight, but that's alright. She could still be there sleeping when I get back.`,
      `I'm a broke-nose fighter. I'm a loose-lipped liar. Searching for the edge of darkness. But all I get is just tired. I went looking for attention. In all the wrong places. I was needing a redemption. And all I got was just cages.`];

      const text = texts[Math.floor(Math.random() * texts.length)];
      const words = text.split(' ');

      this.setState({
        text,
        words,
        completedWords: [] });

    });_defineProperty(this, "startGame",

    () => {
      this.setText();

      this.setState({
        started: true,
        startTime: Date.now(),
        completed: false,
        progress: 0 });

    });_defineProperty(this, "handleChange",

    e => {
      const { words, completedWords } = this.state;
      const inputValue = e.target.value;
      const lastLetter = inputValue[inputValue.length - 1];

      const currentWord = words[0];

      // if space or '.', check the word
      if (lastLetter === ' ' || lastLetter === '.') {
        // check to see if it matches to the currentWord
        // trim because it has the space
        if (inputValue.trim() === currentWord) {
          // remove the word from the wordsArray
          // cleanUp the input
          const newWords = [...words.slice(1)];
          const newCompletedWords = [...completedWords, currentWord];

          // Get the total progress by checking how much words are left
          const progress =
          newCompletedWords.length / (
          newWords.length + newCompletedWords.length) *
          100;
          this.setState({
            words: newWords,
            completedWords: newCompletedWords,
            inputValue: '',
            completed: newWords.length === 0,
            progress });

        }
      } else {
        this.setState({
          inputValue,
          lastLetter });

      }

      this.calculateWPM();
    });_defineProperty(this, "calculateWPM",

    () => {
      const { startTime, completedWords } = this.state;
      const now = Date.now();
      const diff = (now - startTime) / 1000 / 60; // 1000 ms / 60 s

      // every word is considered to have 5 letters
      // so here we are getting all the letters in the words and divide them by 5
      // "my" shouldn't be counted as same as "deinstitutionalization"
      const wordsTyped = Math.ceil(
      completedWords.reduce((acc, word) => acc += word.length, 0) / 5);


      // calculating the wpm
      const wpm = Math.ceil(wordsTyped / diff);

      this.setState({
        wpm,
        timeElapsed: diff });

    });}

  render() {
    const {
      text,
      inputValue,
      completedWords,
      wpm,
      timeElapsed,
      started,
      completed,
      progress } =
    this.state;

    if (!started)
    return /*#__PURE__*/(
      React.createElement("div", { className: "container" }, /*#__PURE__*/
      React.createElement("h2", null, "Welcome to the Typing game"), /*#__PURE__*/
      React.createElement("p", null, /*#__PURE__*/
      React.createElement("strong", null, "Rules:"), " ", /*#__PURE__*/React.createElement("br", null), "Type in the input field the highlighted word. ", /*#__PURE__*/
      React.createElement("br", null), "The correct words will turn ", /*#__PURE__*/
      React.createElement("span", { className: "green" }, "green"), ".", /*#__PURE__*/
      React.createElement("br", null), "Incorrect letters will turn ", /*#__PURE__*/
      React.createElement("span", { className: "red" }, "red"), ".", /*#__PURE__*/
      React.createElement("br", null), /*#__PURE__*/
      React.createElement("br", null), "Have fun! \uD83D\uDE03"), /*#__PURE__*/


      React.createElement("button", { className: "start-btn", onClick: this.startGame }, "Start game")));





    if (!text) return /*#__PURE__*/React.createElement("p", null, "Loading...");

    if (completed) {
      return /*#__PURE__*/(
        React.createElement("div", { className: "container" }, /*#__PURE__*/
        React.createElement("h2", null, "Your WPM is ", /*#__PURE__*/
        React.createElement("strong", null, wpm)), /*#__PURE__*/

        React.createElement("button", { className: "start-btn", onClick: this.startGame }, "Play again"), /*#__PURE__*/


        React.createElement("p", null, "or"), /*#__PURE__*/
        React.createElement("p", null, "Share your score on",
        ' ', /*#__PURE__*/
        React.createElement("a", {
          href: `https://twitter.com/intent/tweet?text=My typing speed is ${wpm}. Let's see how fast you are! 😃 - created by @florinpop1705 https://codepen.io/FlorinPop17/full/ExxYJdE`,
          target: "_blank",
          className: "share" }, "Twitter"))));





    }

    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { className: "wpm" }, /*#__PURE__*/
      React.createElement("strong", null, "WPM: "),
      wpm, /*#__PURE__*/
      React.createElement("br", null), /*#__PURE__*/
      React.createElement("strong", null, "Time: "),
      Math.floor(timeElapsed * 60), "s"), /*#__PURE__*/

      React.createElement("div", { className: "container" }, /*#__PURE__*/
      React.createElement("h4", null, "Type the text below"), /*#__PURE__*/
      React.createElement("progress", { value: progress, max: "100" }), /*#__PURE__*/
      React.createElement("p", { className: "text" },
      text.split(' ').map((word, w_idx) => {
        let highlight = false;
        let currentWord = false;

        // this means that the word is completed, so turn it green
        if (completedWords.length > w_idx) {
          highlight = true;
        }

        if (completedWords.length === w_idx) {
          currentWord = true;
        }

        return /*#__PURE__*/(
          React.createElement("span", {
            className: `word 
                                ${highlight && 'green'} 
                                ${currentWord && 'underline'}`,
            key: w_idx },
          word.split('').map((letter, l_idx) => {
            const isCurrentWord = w_idx === completedWords.length;
            const isWronglyTyped = letter !== inputValue[l_idx];
            const shouldBeHighlighted = l_idx < inputValue.length;

            return /*#__PURE__*/(
              React.createElement("span", {
                className: `letter ${
                isCurrentWord && shouldBeHighlighted ?
                isWronglyTyped ?
                'red' :
                'green' :
                ''
                }`,
                key: l_idx },
              letter));


          })));


      })), /*#__PURE__*/

      React.createElement("input", {
        type: "text",
        onChange: this.handleChange,
        value: inputValue,
        autofocus: started ? 'true' : 'false' }))));




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