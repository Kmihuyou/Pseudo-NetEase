<template>
    <div class="w-[100vw] px-[4vw] dark:text-[#e9ebf2]">
            <!-- 标题 -->
            <div class="flex justify-between items-center h-[12vw]">
                <div class="flex items-center">
                    <span class="dark:text-[#e9ebf2] text-[#374d5b] text-[4vw] font-[800]"><slot>未定义</slot></span>
                    <Icon icon="material-symbols:keyboard-arrow-right" />
                </div>
                <Icon icon="ri:more-2-fill"  class="dark:text-[#e9ebf2] text-[#3d475b] w-[4vw] h-[6vw] iconify iconify--ri"/>
            </div>
            <!-- 更多按钮隐藏 -->
            <!-- <div>
                蒙版 
                <div></div>
                <div></div>
            </div> -->
    </div>
</template>

<script>
// import { Icon } from '@iconify/vue2';
export default {
    // components: {
	// 	Icon,
	// },
}
</script>

<style>

</style>