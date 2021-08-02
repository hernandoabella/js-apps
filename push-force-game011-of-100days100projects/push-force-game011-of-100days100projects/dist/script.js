const scoreEl = document.getElementById('score');
const share_container = document.getElementById('share_container');
const instructions = document.querySelector('.instructions');
const DEFAULT_MAX_SPEED = 3;
const DEFAULT_MAX_FORCE = 0.2;
const VEHICLE_SIZE = 15;
const CONSUMABLES_SIZE = 7;
const FOOD_COUNT = 100;
const POISON_COUNT = 30;
const consumables = [];
let vehicle = undefined;
let score = 0;

function startGame() {
	instructions.style.display = 'none';
	share_container.style.display = 'block';
	loop();
}

function share() {
	window.open(
		`https://www.twitter.com/share?text=I made ${score} points in the Push Force game created by @florinpop1705. Check it out here! 😃&hashtags=100Days100Projects&url=https://codepen.io/FlorinPop17/full/JjPVBwx`,
		'_blank'
	);
}

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	vehicle = new Vehicle(width / 2, height / 2);

	for (let i = 0; i < FOOD_COUNT; i++) {
		consumables.push(new Consumable('food'));
	}

	for (let i = 0; i < POISON_COUNT; i++) {
		consumables.push(new Consumable('poison'));
	}

	share_container.style.display = 'none';
	noLoop();
}

function draw() {
	background(0);

	for (let i = consumables.length - 1; i >= 0; i--) {
		const consumable = consumables[i];
		consumable.draw();
		if (vehicle.checkConsumableCollision(consumable)) {
			if (consumable.type === 'food') {
				score++;
			} else {
				score -= 5;
			}

			updateScore();

			const newConsumable = new Consumable(consumable.type);
			consumables.splice(i, 1, newConsumable);
		}
	}

	createMouseEl();
	vehicle.update();
	vehicle.checkEdges();
	vehicle.draw();
}

function updateScore() {
	scoreEl.innerHTML = `Score: ${score}`;
}

function createMouseEl() {
	const mouse = createVector(mouseX, mouseY);
	fill('rgba(255, 255, 255, 0.5)');
	circle(mouseX, mouseY, 30);
	vehicle.flee(mouse);
}

class Consumable {
	constructor(food, size) {
		this.type = food;
		this.position = createVector(random(width), random(height));
		this.size = size || CONSUMABLES_SIZE;
	}

	draw() {
		if (this.type === 'food') {
			fill('green');
		} else {
			fill('red');
		}
		circle(this.position.x, this.position.y, this.size * 2);
	}
}

class Vehicle {
	constructor(x, y, max_speed, max_force) {
		this.position = createVector(x, y);
		this.velocity = createVector(random(-1, 1), random(-1, 1));
		this.acceleration = createVector(0, 0);
		this.size = VEHICLE_SIZE;
		this.max_speed = max_speed || DEFAULT_MAX_SPEED;
		this.max_force = max_force || DEFAULT_MAX_FORCE;
	}

	update() {
		this.velocity.add(this.acceleration);
		this.velocity.limit(this.max_speed);
		this.position.add(this.velocity);
		this.acceleration.mult(0);
	}

	draw() {
		stroke(0);
		fill(175);
		let angle = this.velocity.heading() + radians(90);

		push();
		translate(this.position.x, this.position.y);
		rotate(angle);

		beginShape(TRIANGLES);
		vertex(0, -this.size);
		vertex(-this.size / 2, this.size);
		vertex(this.size / 2, this.size);
		endShape();

		pop();
	}

	checkEdges() {
		// Check edges of the canvas on the X Axis
		if (this.position.x < 0) {
			this.position.x = width - this.size;
		}
		if (this.position.x > width) {
			this.position.x = this.size;
		}

		// Check edges of the canvas on the Y Axis
		if (this.position.y < 0) {
			this.position.y = height - this.size;
		}
		if (this.position.y > height) {
			this.position.y = this.size;
		}
	}

	checkConsumableCollision(consumable) {
		const d = dist(
			this.position.x,
			this.position.y,
			consumable.position.x,
			consumable.position.y
		);
		if (d < consumable.size * 2) {
			return true;
		} else {
			return false;
		}
	}

	applyForce(force) {
		this.acceleration.add(force);
	}

	flee(target) {
		// only apply the force when it's within a distance
		if (dist(target.x, target.y, this.position.x, this.position.y) < 100) {
			let desired = p5.Vector.sub(target, this.position);
			// let distance = desired.mag();

			desired.setMag(this.max_speed);

			let steering = p5.Vector.sub(desired, this.velocity);
			steering.limit(this.max_force);

			// Multiply by -1 to get inverse of seek behavior
			steering.mult(-1);
			this.applyForce(steering);
		}
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