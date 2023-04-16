const colors = {
	red: '#E53E3E',
	blue: '#4299E1'
}

let ballSpeed = 2;
let score = 0;

// used to place the middle balls
let topPosition;
let bottomPosition;
const middleOffset = 20;

let ballTop;
let ballBottom;
let enemyBalls = [];

function setup() {
	createCanvas(350, 600);
	
	// set positions
	topPosition = height / 2 - middleOffset;
	bottomPosition = height / 2 + middleOffset;
	
	// create middle balls
	ballTop = new Ball({ x: width / 2, y: topPosition, col: colors.red });
	ballBottom = new Ball({ x: width / 2, y: bottomPosition, col: colors.blue });
	
	createRandomFallingBall();
}

function draw() {
	background(51);
	
	ballTop.draw();
	ballBottom.draw();
	
	enemyBalls.forEach(ball => {
		ball.checkHit(ballTop);
		ball.checkHit(ballBottom);
		ball.update();
		ball.draw();
	});
	
	fill(255);
	textSize(16);
	text(`Score: ${score}`, width - 75, 25);
}

function createRandomFallingBall() {
	const ballCommonOptions = {
		x: width / 2,
		col: Math.random() < 0.5 ? colors.red : colors.blue
		
	}
	const ballTopOptions = {
		y: 0,
		dy: ballSpeed,
		...ballCommonOptions
	}
	
	const ballBottomOptions = {
		y: height,
		dy: -ballSpeed,
		...ballCommonOptions
	}
	
	const ball = new Ball(Math.random() < 0.5 ? ballTopOptions : ballBottomOptions);
	enemyBalls.push(ball);
}

function removeBall(ball) {
	enemyBalls = enemyBalls.filter(b => b !== b);
}

function mousePressed() {
	let temp = ballTop.pos.y;
	ballTop.pos.y = ballBottom.pos.y;
	ballBottom.pos.y = temp;
}

class Ball {
	constructor(options) {
		this.pos = createVector(options.x, options.y);
		this.vel = createVector(0, options.dy || 0);
		this.size = 15;
		this.col = options.col || colors.red;
	}
	
	update() {
		this.pos.add(this.vel);
	}
	
	checkHit(ball) {
		const d = dist(ball.pos.x, ball.pos.y, this.pos.x, this.pos.y); 
		if(d < this.size * 2) {
			if(this.col === ball.col) {
				score++;
				ballSpeed += 0.2;
			} else {
				score = 0;
				ballSpeed = 2;
			}
			
			removeBall(this);
			createRandomFallingBall();
		}
	}
	
	draw() {
		fill(this.col);
		noStroke();
		circle(this.pos.x, this.pos.y, this.size * 2)
	}
}

// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});