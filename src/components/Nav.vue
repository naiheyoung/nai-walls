<template>
	<header class="sticky top-0 shadow-lg w-full z-10 h-16">
		<nav
			class="container flex flex-col sm:flex-row items-center gap-4 py-6 h-16">
			<div class="flex flex-2">
				<p class="text-2xl cursor-pointer hover:text-green-300">奈「壁纸」</p>
			</div>
			<div class="flex flex-1 menu-box">
				<ul class="w-full flex menu cursor-pointer">
					<li>
						<RouterLink
							to="/anime"
							active-class="active-color"
							>动漫</RouterLink
						>
					</li>
					<li>
						<RouterLink
							to="/yuanshen"
							active-class="active-color"
							>原神</RouterLink
						>
					</li>
					<li>
						<RouterLink
							to="/wz"
							active-class="active-color"
							>王者荣耀</RouterLink
						>
					</li>
					<li>
						<RouterLink
							to="/slef"
							active-class="active-color"
							>关于作者</RouterLink
						>
					</li>
				</ul>
			</div>
		</nav>
	</header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.menu-box > .menu li:not(:last-child) {
	border-right: 2px solid #ffffff64;
}

@media screen and (max-width: 640px) {
	header {
		height: unset;
	}
	header nav {
		height: unset;
	}
}

.menu {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
}

.menu li {
	display: flex;
	flex-direction: column;
	text-align: center;
}

header {
	background: #36366366;
	background-image: radial-gradient(transparent 1px, var(--bg-draw-color) 1px);
	background-size: 4px 4px;
	backdrop-filter: saturate(50%) blur(4px);
}

header nav {
	color: var(--theme-text-color);
}
</style>
