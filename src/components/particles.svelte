<script lang="ts">
	import Particles from 'svelte-particles';
	import { loadFull } from 'tsparticles';

	const particlesConfig = {
		autoPlay: true,
		background: {
			color: {
				value: '#252429'
			},
			opacity: 1
		},
		fullScreen: {
			enable: true,
			zIndex: 0
		},
		detectRetina: true,
		duration: 0,
		fpsLimit: 120,
		interactivity: {
			detectsOn: 'window',
			events: {
				onHover: {
					enable: true,
					mode: 'grab',
					parallax: {
						enable: true,
						force: 140,
						smooth: 10
					}
				},
				resize: true
			},
			modes: {
				slow: {
					factor: 3,
					radius: 200
				},
				attract: {
					distance: 200,
					duration: 0.4,
					easing: 'ease-out-quad',
					factor: 1,
					maxSpeed: 50,
					speed: 1
				},
				bounce: {
					distance: 200
				},
				bubble: {
					distance: 400,
					duration: 2,
					mix: false,
					opacity: 0.8,
					size: 40,
					divs: {
						distance: 200,
						duration: 0.4,
						mix: false,
						selectors: []
					}
				},
				connect: {
					distance: 80,
					links: {
						opacity: 0.5
					},
					radius: 60
				},
				grab: {
					distance: 200,
					links: {
						blink: false,
						consent: false,
						opacity: 1
					}
				},
				remove: {
					quantity: 2
				},
				repulse: {
					distance: 200,
					duration: 0.4,
					factor: 100,
					speed: 1,
					maxSpeed: 50,
					easing: 'ease-out-quad',
					divs: {
						distance: 200,
						duration: 0.4,
						factor: 100,
						speed: 1,
						maxSpeed: 50,
						easing: 'ease-out-quad',
						selectors: []
					}
				},
				trail: {
					delay: 1,
					pauseOnStop: false,
					quantity: 1
				},
				light: {
					area: {
						gradient: {
							start: {
								value: '#ffffff'
							},
							stop: {
								value: '#000000'
							}
						},
						radius: 1000
					},
					shadow: {
						color: {
							value: '#000000'
						},
						length: 2000
					}
				}
			}
		},
		manualParticles: [],
		motion: {
			disable: false,
			reduce: {
				factor: 4,
				value: true
			}
		},
		particles: {
			color: {
				value: '#ffffff'
			},
			groups: {},
			move: {
				angle: {
					offset: 0,
					value: 90
				},
				center: {
					x: 50,
					y: 50,
					radius: 0
				},
				decay: 0,
				distance: {},
				direction: 'none',
				drift: 0,
				enable: true,
				outModes: {
					default: 'out',
					bottom: 'out',
					left: 'out',
					right: 'out',
					top: 'out'
				},
				random: false,
				size: false,
				speed: 0.2,
				straight: false,
				vibrate: false,
				warp: false
			},
			number: {
				density: {
					enable: true,
					area: 800,
					factor: 1000
				},
				limit: 0,
				value: 100
			},
			opacity: {
				random: {
					enable: true,
					minimumValue: 0.1
				},
				value: {
					min: 0.1,
					max: 0.4
				},
				animation: {
					count: 0,
					enable: true,
					speed: 1,
					decay: 0,
					sync: false,
					destroy: 'none',
					startValue: 'random',
					minimumValue: 0.1
				}
			},
			reduceDuplicates: false,
			shape: {
				options: {},
				type: 'circle'
			},
			size: {
				random: {
					enable: true,
					minimumValue: 1
				},
				value: {
					min: 0.1,
					max: 10
				},
				animation: {
					count: 0,
					enable: true,
					speed: 20,
					decay: 0,
					sync: false,
					destroy: 'none',
					startValue: 'random',
					minimumValue: 0.1
				}
			},
			stroke: {
				width: 0
			},
			zIndex: {
				random: {
					enable: false,
					minimumValue: 0
				},
				value: 0,
				opacityRate: 1,
				sizeRate: 1,
				velocityRate: 1
			},
			life: {
				count: 0,
				delay: {
					value: 0,
					sync: false
				},
				duration: {
					random: {
						enable: false,
						minimumValue: 0.0001
					},
					value: 0,
					sync: false
				}
			},
			links: {
				blink: false,
				color: {
					value: '#ffffff'
				},
				consent: false,
				distance: 150,
				enable: true,
				frequency: 1,
				opacity: 0.4,
				shadow: {
					blur: 5,
					color: {
						value: '#000'
					},
					enable: false
				},
				triangles: {
					enable: false,
					frequency: 1
				},
				width: 1,
				warp: false
			}
		},
		pauseOnBlur: true,
		pauseOnOutsideViewport: true,
		responsive: [],
		style: {},
		themes: [],
		zLayers: 100
	} as any;

	// @ts-ignore
	const init = async (engine) => {
		// you can use main to customize the tsParticles instance adding presets or custom shapes
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(engine);
	};
</script>

<Particles
	id="tsparticles"
	options={particlesConfig}
	particlesInit={async (engine) => {
		// you can use main to customize the tsParticles instance adding presets or custom shapes
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(engine);
	}}
/>
