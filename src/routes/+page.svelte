<script lang="ts">
	import Particles from 'svelte-particles';
	import { loadFull } from 'tsparticles';

	let particlesUrl = 'http://foo.bar/particles.json';

	let particlesConfig = {
		fps_limit: 60,
		particles: {
			color: { value: '#ffffff' },
			line_linked: {
				color: '#ffffff',
				distance: 150,
				enable: true,
				opacity: 0.35,
				width: 1
			},
			move: {
				attract: { enable: false, rotateX: 600, rotateY: 1200 },
				bounce: false,
				direction: 'none',
				enable: true,
				out_mode: 'out',
				random: false,
				speed: 2,
				straight: false
			},
			number: { density: { enable: true, value_area: 800 }, value: 80 },
			opacity: {
				anim: { enable: true, opacity_min: 0.1, speed: 1, sync: false },
				random: false,
				value: 0.35
			},
			shape: {
				character: {
					fill: false,
					font: 'Verdana',
					style: '',
					value: '*',
					weight: '400'
				},
				polygon: { nb_sides: 5 },
				stroke: { color: '#000000', width: 0 },
				type: 'circle'
			},
			size: {
				anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
				random: true,
				value: 5
			}
		},
		polygon: {
			draw: { enable: false, lineColor: '#ffffff', lineWidth: 0.5 },
			move: { radius: 10 },
			scale: 1,
			type: 'none',
			url: ''
		},
		retina_detect: true
	} as any;

	// @ts-ignore
	let onParticlesLoaded = (event) => {
		const particlesContainer = event.detail.particles;

		// you can use particlesContainer to call all the Container class
		// (from the core library) methods like play, pause, refresh, start, stop
	};

	// @ts-ignore
	let particlesInit = async (engine) => {
		// you can use main to customize the tsParticles instance adding presets or custom shapes
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(engine);
	};
</script>

<div class="background">
	<h1 class="title">Pomperaug Hack Club</h1>
	<button class="join">Join Now</button>
	<Particles
		id="tsparticles"
		options={particlesConfig}
		on:particlesLoaded={onParticlesLoaded}
		{particlesInit}
	/>
</div>

<style>
	.background {
		width: 100%;
		height: 100%;
		background: rgb(var(--background));
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 2rem;
	}
	* {
		color: #e5e5e5;
	}

	.title {
		font-size: 3rem;
		text-align: center;
	}

	.join {
		--distance: 4px;
		display: inline-block;
		outline: 0;
		border: 0;
		cursor: pointer;
		color: #fff;
		font-weight: 900;
		font-size: 14px;
		height: 2.4rem;
		padding: 0px 1.4rem;
		text-shadow: rgb(0 0 0 / 25%) 0px 3px 8px;
		transition: all 0.12s ease 0s;
		background: linear-gradient(90.99deg, #59a5ff 7.06%, #7847ff 56.44%, #8961ff);
	}

	.join:hover {
		box-shadow: rgb(80 63 205 / 80%) 0px 1px 80px, -4px 6px 0 1px rgb(153, 0, 255);
		transform: translate(4px, -6px);
	}
</style>
