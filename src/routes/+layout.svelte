<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	// Skeleton Imports
	import { AppBar } from '@skeletonlabs/skeleton';
</script>

<AppBar background="bg-primary-500">
	<a
		href="/"
		class="font-bold text-4xl text-slate-100 hover:btn hover:variant-filled-secondary hover:margin-0"
		>Flash.it</a
	>
</AppBar>
<div class="w-full h-full p-8">
	<slot />
</div>
