@import url("https://fonts.googleapis.com/css?family=Bree+Serif");
body {
  font-family: "Bree Serif";
  margin: 0;
  text-align: center;
  color: #fff; /* remove this later */
  background-color: #1d1e22;
}
.keys {
  margin: 0 auto;
  max-width: 600px;
  overflow: hidden;
  cursor: pointer;
}
.key {
  width: 160px;
  height: 160px;
  margin: 20px;
  float: left;
  transition: all 0.07s;
  border-radius: 5px;
  background: rgb(240, 249, 255);
  background: radial-gradient(
    ellipse at center,
    rgba(240, 249, 255, 1) 0%,
    rgba(99, 99, 99, 1) 100%
  );
}
.playing {
  box-shadow: 0 0 30px 0 rgba(255, 255, 255, 0.3);
  background: rgb(240, 249, 255);
  background: radial-gradient(
    ellipse at center,
    rgba(240, 249, 255, 1) 0%,
    rgba(0, 180, 227, 1) 100%
  );
}

kbd {
  display: block;
  padding-top: 30px;
  font-size: 60px;
  color: transparent;
  text-shadow: 1px 1px 2px #fff;
}