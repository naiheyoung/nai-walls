<template>
	<div
		class="w-full h-full"
		data-box>
		<div
			class="pic-box"
			style="
				background-image: url('https://backiee.com/static/wpdb/wallpapers/1000x563/177454.jpg');
			"></div>
		<div
			class="pic-box"
			style="
				background-image: url('https://backiee.com/static/wpdb/wallpapers/1000x563/142977.jpg');
			"></div>
		<div
			class="pic-box"
			style="
				background-image: url('https://backiee.com/static/wpdb/wallpapers/1000x563/317832.jpg');
			"></div>
		<div
			class="pic-box"
			style="
				background-image: url('https://backiee.com/static/wpdb/wallpapers/1000x563/162415.jpg');
			"></div>
		<div
			class="pic-box"
			style="
				background-image: url('https://backiee.com/static/wpdb/wallpapers/1000x563/218224.jpg');
			"></div>
		<div
			class="pic-box"
			style="
				background-image: url('https://backiee.com/static/wpdb/wallpapers/1000x563/150342.jpg');
			"></div>
		<div
			class="pic-box"
			style="
				background-image: url('https://backiee.com/static/wpdb/wallpapers/1000x563/135577.jpg');
			"></div>
		<div
			class="pic-box"
			style="
				background-image: url('https://backiee.com/static/wpdb/wallpapers/1000x563/278804.jpg');
			"></div>
		<div
			class="pic-box"
			style="
				background-image: url('https://backiee.com/static/wpdb/wallpapers/1000x563/175215.jpg');
			"></div>
	</div>
	<teleport to="[data-box]">
		<div
			class="tool"
			id="picMenu">
			<button
				type="button"
				class="w-full h-full text-navBg hover:text-activeColor"
				@click="setWallpaper($event)">
				设置壁纸</button
			><button
				type="button"
				class="w-full h-full text-navBg hover:text-activeColor"
				@click="downloadWallpaper($event)">
				下载壁纸
			</button>
		</div>
	</teleport>
</template>

<script setup>
import { onMounted } from 'vue';

const getPics = () => {
	// 获取壁纸
};

let wallpaperUrl = null;
// 壁纸默认保存
let savePath = 'C:/Users/naihe/Pictures/';

/**
 * 提取壁纸url
 * @param {Element} el 目标元素
 * @return {string} 壁纸url
 */
const getWallpaperUrl = (el) => {
	return el.target.style.backgroundImage.replace('url("', '').replace('")', '');
};

const hiddenMenu = () => {
	const picMenu = document.querySelector('#picMenu');
	picMenu.style.display = 'none';
};

// 壁纸盒子菜单
const picBoxMenu = () => {
	const picBox = document.querySelectorAll('.pic-box');
	picBox.forEach((item) => {
		// 显示菜单
		item.addEventListener('contextmenu', (e) => {
			e.preventDefault();

			const picMenu = document.querySelector('#picMenu');
			picMenu.style.display = 'flex';
			picMenu.style.top = `${e.clientY}px`;
			picMenu.style.left = `${e.clientX}px`;

			// 获取壁纸url
			wallpaperUrl = getWallpaperUrl(e);
		});

		// 隐藏菜单
		item.addEventListener('click', (e) => {
			e.preventDefault();

			const picMenu = document.querySelector('#picMenu');
			picMenu.style.display = 'none';

			wallpaperUrl = null;
		});
	});
};

const setWallpaper = (target) => {
	hiddenMenu();
	console.log(wallpaperUrl);
};

const downloadWallpaper = () => {
	hiddenMenu();
	console.log(wallpaperUrl);
};

// 对壁纸进行懒加载处理
const lazyShowWallpaper = () => {
	const ob = new IntersectionObserver(
		(entries) => {
			entries.forEach((item) => {
				if (item.isIntersecting) {
					console.log(item.target.backgroundImage);
					ob.unobserve(item.target);
				}
			});
		},
		{
			threshold: 0.5,
		}
	);

	const pics = document.querySelectorAll('.pic');
	pics.forEach((item) => ob.observe(item));
};

onMounted(() => {
	picBoxMenu();
	lazyShowWallpaper();
});
</script>

<style scoped>
.pic-box {
	width: 400px;
	height: 224px;
	box-shadow: 0px 0px 15px #ffffff;
	transform-origin: center;
	background-position: 100% 100%;
	background-size: cover;
	border-radius: 3px;
}

[data-box] {
	display: grid;
	grid-template-rows: repeat(3, 1fr);
	grid-template-columns: repeat(3, 1fr);
	gap: 40px;
	grid-auto-flow: row dense;
}

.pic {
	width: inherit;
	height: 80%;
	background-position: 100% 100%;
	background-size: cover;
	border-top-left-radius: inherit;
	border-top-right-radius: inherit;
}

.tool {
	display: none;
	flex-direction: column;
	width: 100px;
	height: 80px;
	border-radius: 8px;
	background: #ffffff;
	box-shadow: 0px 0px 10px #ffffff;
	position: absolute;
}

.tool button {
	background-color: transparent;
	letter-spacing: 0.3em;
	font-family: 'yy';
	transition: 0.3s;
	border-radius: 8px;
}

.tool button:first-child {
	border-bottom-left-radius: unset;
	border-bottom-right-radius: unset;
}

.tool button:not(:last-child) {
	border-bottom: 1px solid #ccc;
}
</style>
