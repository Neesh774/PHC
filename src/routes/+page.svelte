<script lang="ts">
	import Particles from '../components/particles.svelte';
</script>

<div class="hero">
	<Particles />
	<a href="https://hackclub.com/"
		><img
			style="position: fixed; top: -2px; left: 10px; border: 0; width: 128px; z-index: 999;"
			class="logo"
			src="https://assets.hackclub.com/flag-orpheus-top.svg"
			alt="Hack Club"
		/></a
	>
	<a
		href="https://github.com/Neesh774/PHC/"
		class="github-corner"
		aria-label="View source on GitHub"
		style="z-index: 999;"
		><svg
			width="80"
			height="80"
			viewBox="0 0 250 250"
			style="fill:#FD6C6C; color:#fff; position: fixed; top: 0; border: 0; right: 0;"
			aria-hidden="true"
			><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" /><path
				d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
				fill="currentColor"
				style="transform-origin: 130px 106px;"
				class="octo-arm"
			/><path
				d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
				fill="currentColor"
				class="octo-body"
			/></svg
		></a
	><style>
		.github-corner:hover .octo-arm {
			animation: octocat-wave 560ms ease-in-out;
		}
		@keyframes octocat-wave {
			0%,
			100% {
				transform: rotate(0);
			}
			20%,
			60% {
				transform: rotate(-25deg);
			}
			40%,
			80% {
				transform: rotate(10deg);
			}
		}
		@media (max-width: 500px) {
			.github-corner:hover .octo-arm {
				animation: none;
			}
			.github-corner .octo-arm {
				animation: octocat-wave 560ms ease-in-out;
			}
		}
	</style>
	<div class="content">
		<div>
			<h1 class="title">Pomperaug Hack Club</h1>
			<h3>Meetings on Wednesdays until 3:30</h3>
		</div>
		<button class="join cta lg">Join</button>
	</div>
</div>
<div class="sections">
	<section>
		<div class="text">
			<h1>What's This?</h1>
			<p>
				The Pomperaug Hack Club is an upcoming club of coders interested in making the world a
				better place using code, whether that's using websites, apps, or even games. We're also a
				chapter of the international non-profit <a href="https://hackcclub.com">Hack Club</a>. We
				don't
				<a href="https://en.wikipedia.org/wiki/Hacker_culture">"hack"</a>, but we're gonna make
				awesome projects like this website!
			</p>
		</div>
		<div class="media">
			<iframe
				width="100%"
				height="100%"
				src="https://www.youtube.com/embed/-sxRdKtKNa0"
				title="Welcome to Hack Club"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			/>
		</div>
	</section>
	<section>
		<div class="media inclusion">
			<h1>You're <br /> <span class="highlight">invited.</span></h1>
		</div>
		<div class="text">
			<h1>Can I Join?</h1>
			<p>
				<i> This club is only for coders with more than 6 years of experience.</i>
				<br /> <br />
				Just kidding. We're open to <b>all</b> students, regardless of experience or grade. You can come
				around to any meetings and hang around, and we'll makes sure that everyone new to hacking gets
				a fun introduction.
			</p>
		</div>
	</section>
	<section class="cta">
		<div class="content">
			<h1>We can't wait to see <br /> what you'll make.</h1>
			<button class="outline lg">JOIN NOW</button>
		</div>
	</section>
</div>

<style>
	@keyframes logoWave {
		50% {
			transform: rotate(-5deg);
		}
	}

	@keyframes fadeIn {
		0% {
			transform: translateY(-40px);
		}
		80% {
			opacity: 1;
		}
		100% {
			transform: translateY(0);
			opacity: 1;
		}
	}
	.logo {
		transform-origin: 0% 0%;
	}
	.logo:hover {
		animation: logoWave 1s linear infinite alternate;
	}
	.hero {
		width: 100%;
		height: 90%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 2rem;
	}

	.hero .content {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 2rem;
		opacity: 0;
		animation: fadeIn 1s ease-out;
		animation-fill-mode: forwards;
	}

	.hero .content div {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 1rem;
		color: #e5e5e5;
	}

	.title {
		z-index: 10;
		font-size: 3rem;
		text-align: center;
		font-family: 'Secular One', sans-serif;
	}

	.join {
		z-index: 10;
		display: inline-block;
		outline: 0;
		border: 0;
		cursor: pointer;
		color: #fff;
		font-weight: 900;
		font-size: 20px;
		height: 3rem;
		padding: 0px 2.6rem;
		text-shadow: rgb(0 0 0 / 25%) 0px 3px 8px;
		transition: all 0.12s ease 0s;
	}

	.join:hover {
		box-shadow: -4px 6px 0 1px var(--orange);
		transform: translate(4px, -6px);
	}

	.sections {
		z-index: 10;
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	.sections section {
		z-index: 10;
		width: 100%;
		min-height: 20rem;
		display: flex;
		flex-direction: row;
		background-color: var(--snow);
	}

	.sections section div.text {
		width: 50%;
		padding: 6rem 6rem;
	}

	.sections section div.media {
		min-width: 50%;
		padding: 2rem 4rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.sections section .inclusion {
		font-family: 'Cabin';
		font-weight: bold;
		font-size: 2rem;
		color: var(--red);
	}

	.highlight {
		box-sizing: border-box;
		margin: 0;
		min-width: 0;
		background-color: var(--primary);
		-webkit-clip-path: polygon(4% 0%, 100% 0%, 96% 100%, 0% 100%);
		clip-path: polygon(4% 0%, 100% 0%, 96% 100%, 0% 100%);
		color: rgb(255, 255, 255);
		display: inline-block;
		padding-bottom: 12px;
		padding-left: 18px;
		padding-right: 18px;
		margin-left: 2rem;
	}

	.sections .cta {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: auto;
	}

	.cta .content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: radial-gradient(at left top, rgb(255, 140, 55), rgb(236, 55, 80));
		border-radius: 16px;
		max-width: 90%;
		padding: 2rem 4rem;
		gap: 2rem;
		color: var(--white);
	}

	.cta h1 {
		font-size: 3em;
		text-align: center;
	}

	.cta button {
		background-color: white;
	}

	@media (max-width: 1024px) {
		.sections section div.text {
			padding: 2rem 2rem;
		}
	}

	@media (max-width: 768px) {
		.sections section {
			flex-direction: column;
		}

		.sections section div.text {
			width: 100%;
			padding: 2rem 2rem;
		}

		.sections section div.media {
			width: 100%;
			padding: 4rem 2rem;
		}

		iframe {
			height: 14rem;
		}

		.cta h1 {
			font-size: 2em;
		}
	}
</style>
