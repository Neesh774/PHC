<script lang="ts">
	import Particles from '../components/particles.svelte';

	// meetings on first and third wednesday of the month
	const nextMeeting = new Date();
	nextMeeting.setDate(1);
	while (nextMeeting.getDay() !== 3) {
		nextMeeting.setDate(nextMeeting.getDate() + 1);
	}
	if (nextMeeting.getDate() > 15) {
		nextMeeting.setDate(15);
		nextMeeting.setMonth(nextMeeting.getMonth() + 1);
		while (nextMeeting.getDay() !== 3) {
			nextMeeting.setDate(nextMeeting.getDate() + 1);
		}
	}
	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	var nextMeetingString =
		days[nextMeeting.getDay()] +
		', ' +
		months[nextMeeting.getMonth()] +
		' ' +
		nextMeeting.getDate();
</script>

<div class="hero">
	<Particles />
	<div class="content">
		<div>
			<h1 class="title">Pomperaug Hack Club</h1>
			<div>
				<span style="color: var(--muted); font-size: 1.3rem;" class="eyebrow">Next Meeting </span>
				<h2>
					<span style="color: var(--primary)">{nextMeetingString}</span>
				</h2>
			</div>
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
				chapter of the international non-profit <a href="https://hackclub.com">Hack Club</a>. We
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
				<i> This club is only for coders with more than 10 years of experience.</i>
				<br />
				<br />
				<span class="highlight-secondary">Just kidding.</span> We're open to
				<b>all</b> students, regardless of experience or grade. You can come around to any meetings and
				hang around, and we'll makes sure that everyone new to coding gets a fun introduction.
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

	.hero .content > div {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 2rem;
		color: #e5e5e5;
	}

	.hero .content > div > div {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 0.2rem;
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
		pointer-events: none;
		user-select: none;
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

	.highlight-secondary {
		color: var(--orange);
		font-weight: var(--font-weight-heading);
		letter-spacing: var(--letter-spacing-headline);
		margin-top: var(--spacing-0);
		margin-bottom: var(--spacing-2);
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
