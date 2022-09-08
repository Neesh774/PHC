<script lang="ts">
	import Particles from '../components/particles.svelte';
</script>

<div class="hero">
	<Particles />
	<a href="https://hackclub.com/"
		><img
			style="position: absolute; top: -2px; left: 10px; border: 0; width: 128px; z-index: 999;"
			class="logo"
			src="https://assets.hackclub.com/flag-orpheus-top.svg"
			alt="Hack Club"
		/></a
	>
	<h1 class="title">Pomperaug Hack Club</h1>
	<button class="join cta">Join Now</button>
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
	<div class="cta">
		<h1 />
	</div>
</div>

<style>
	@keyframes logoWave {
		50% {
			transform: rotate(-5deg);
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
		height: 80%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 2rem;
	}

	.title {
		z-index: 10;
		font-size: 3rem;
		text-align: center;
		font-family: 'Secular One', sans-serif;
		color: #e5e5e5;
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
		color: rgb(228, 45, 66);
	}

	.highlight {
		box-sizing: border-box;
		margin: 0;
		min-width: 0;
		background-color: rgb(228, 115, 45);
		-webkit-clip-path: polygon(4% 0%, 100% 0%, 96% 100%, 0% 100%);
		clip-path: polygon(4% 0%, 100% 0%, 96% 100%, 0% 100%);
		color: rgb(255, 255, 255);
		display: inline-block;
		padding-bottom: 12px;
		padding-left: 18px;
		padding-right: 18px;
		margin-left: 2rem;
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
			padding: 0 2rem;
		}

		iframe {
			height: 14rem;
		}
	}
</style>
