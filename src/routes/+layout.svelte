<script>import "../app.css";
import favicon from '$lib/assets/favicon.png';

let { children } = $props();</script>

<svelte:head>
	<title>Kilo 4 Consulting</title> <link rel="icon" href="{favicon}" />
	<meta name="description" content="We help founders install the systems, remote talent, and benefits that make growth predictable. Schedule a consultation today." />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Kilo 4 Consulting" />
	<meta property="og:title" content="Kilo 4 Consulting | Better Talent. Better Systems." />
	<meta property="og:description" content="We help founders regain control of their business with elite remote talent and systems consulting." />
	<meta property="og:image" content="https://www.kilo4consulting.com/assets/k4Logo.png" />
	<meta property="og:url" content="https://www.kilo4consulting.com" />
</svelte:head>

{@render children()}
