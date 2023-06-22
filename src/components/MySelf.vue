<template>
	<div
		data-myself
		class="w-full h-full flex justify-center items-center">
		<div class="card">
			<div class="box">
				<div class="imgBx">
					<!-- <video
						src="https://webstatic.mihoyo.com/upload/op-public/2023/04/23/645dbed803b3e11a2ac68ebaac69e4d0_8971486687727186962.mp4"
						typeof="video/mp4"
						autoplay
						loop
						muted
						class="videoorimg"></video> -->
					<img
						src="../assets/pic/selfBg.jpg"
						class="videoorimg" />
				</div>
			</div>
			<div class="box">
				<div class="content">
					<h2>Naihe<br /><span>A handsome man</span></h2>
					<ul>
						<li>Head<span>1</span></li>
						<li>Hand<span>2</span></li>
						<li>Foot<span>2</span></li>
					</ul>
					<button type="button">
						<a href="mailto:naiheemail@yeah.net">Tel Me</a>
					</button>
				</div>
			</div>
			<div class="circle">
				<div class="imgBx">
					<img src="@/assets/pic/self.jpeg" />
				</div>
			</div>
		</div>
	</div>
</template>

<script></script>

<style scoped>
div[data-myself] {
	background: var(--self-bg-color);
}

* {
	user-select: none;
}
</style>
