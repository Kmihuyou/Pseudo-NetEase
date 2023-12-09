<template>
    <div>
        <div class="flex h-[19vw] items-center justify-between px-[5.5vw]">
            <Icon icon="mdi:keyboard-arrow-left" />
            <span>游客登录</span>
        </div>
        <div class="flex justify-center items-center mb-[3vw]">
            <div class="flex p-[2vw] rounded-full  bg-red-500">
                <Icon class="w-[20vw]" icon="mingcute:music-3-line" color="white"   width="20vw" height="20vw"/>
            </div>
        </div>
        <div class="flex justify-center flex-wrap align-baseline p-[1vw] h-[26vw]">
            <input type="tel" v-model="phone" class="bg-gray-100 w-[70vw] h-[10vw] outline-none  rounded-2xl pl-[3vw]">
            <button @click="sendCode" class=" bg-red-500 w-[70vw] h-[10vw] rounded-full text-slate-50 text-2xl">获取验证码</button>
        </div>
        <div class="flex justify-center flex-wrap align-baseline p-[1vw] w-[70vw] mx-auto">
            <input type="checkbox" v-model="checkbox">
            <span class=" text-xs">我已阅读并同意<a href="#">《服务条款》</a>、<a href="#">《隐私政策》</a></span>
        </div>
    </div>
</template>

<script>
import { Icon } from '@iconify/vue2';
import { getCaptcha,} from "@/service"
export default {
    components: {
		Icon,
	},
    data(){
        return{
            phone:"",
            checkbox:false
        }
    },
    methods:{
        async sendCode(){
            if(!/^1[356789]\d{9}$/.test(this.phone)) return alert("手机号码格式错误")
            if(!this.checkbox) return alert("请阅读并同意条款")
            const [err,res] = await getCaptcha({phone:this.phone})
            if(err) return alert('错误')
            alert('ok')
            this.$router.push('/login')
            console.log(res);
        },
        // async login(){
        //     if(!/^\d{4}$/.test(this.captcha)) return alert('验证码不正确');
        //     const[err,res] =  await getLoginCellphone({phone:this.phone,captcha:this.captcha})
        //     if(err) return alert('登录错误请稍后再试')
        //     alert("登录成功")
        //     console.log(res);
        // }
    }
}
</script>

<style>

</style>