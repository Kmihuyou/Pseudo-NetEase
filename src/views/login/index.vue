<template>

    <!-- <Subass></Subass> -->
    <!-- <Captcha ></Captcha> -->
    <!-- <input type="tel" v-model="phone">
    <button @click="sendCode">发送验证码</button> -->
    <!-- <input type="number" maxlength="4" minlength="4" v-model="captcha">
    <button @click="login">登录</button> -->
    <div>
        <div v-if="!hide">
            <div class="flex h-[19vw] items-center justify-between px-[5.5vw]">
                <Icon icon="mdi:keyboard-arrow-left" />
                <span>游客登录</span>
            </div>
            <div class="flex justify-center items-center mb-[3vw]">
                <div class="flex p-[2vw] rounded-full  bg-red-500">
                    <Icon class="w-[20vw]" icon="mingcute:music-3-line" color="white"   width="20vw" height="20vw"/>
                </div>
            </div>
            <div class="flex justify-center flex-wrap align-between p-[1vw] h-[26vw]">
                <div class="flex h-[10vw]">
                    <div class="flex justify-center items-center bg-gray-100 w-[20vw] h-[10vw] outline-none rounded-l-lg"><span class="flex items-center border-r border-indigo-500">+86<Icon icon="mdi:arrow-down-drop" /></span></div>
                    <input type="tel" v-model="phone" class="bg-gray-100 w-[50vw] h-[10vw] outline-none  rounded-r-lg px-[3vw]">
                </div>
                
                <button @click="sendCode" class=" bg-red-500 w-[70vw] h-[10vw] rounded-full text-slate-50 text-2xl">获取验证码</button>
            </div>
            <div class="flex justify-center flex-wrap align-baseline p-[1vw] w-[70vw] mx-auto">
                <input type="checkbox" v-model="checkbox">
                <span class=" text-xs">我已阅读并同意<a href="#">《服务条款》</a>、<a href="#">《隐私政策》</a></span>
            </div>
        </div>
        <!--  -->
        <!-- <input type="number" maxlength="4" minlength="4" v-model="captcha">
    <button @click="login">登录</button> -->
        <div v-else-if="hide">
            <div class="flex h-[19vw] items-center justify-between px-[5.5vw]">
                <Icon icon="mdi:keyboard-arrow-left" />
                <span>游客登录</span>
            </div>
            <div class="flex h-[19vw] items-center justify-between px-[5.5vw]">
                <div>
                    <p class="text-2xl">输入验证码</p>
                    <p>手机号发送至{{phone}}</p>
                </div>
                
            </div>
            <div class="mx-auto w-[91vw]">
                <input
                    maxlength="4"
                    minlength="4"
                    style="width: 0px; height: 0px"
                    :focus="focused"
                    type="tel"
                    ref="input"
                    v-model="captcha"
                    
                    />
                <van-password-input
                    class=" border-0 "
                    @click="focusInput"
                    :value='captcha'
                    :mask="false"
                    :length="4"
                    :focused="focused"
                    />
            </div>
            
        </div>
    </div>
    
</template>

<script>
import { getCaptcha,} from "@/service"
// import { Icon } from '@iconify/vue2';


// import Subass from "./Subassembly.vue"
// import Captcha from "./Captcha.vue"
export default {
    // components:{Icon},
    data(){
        return{
            phone:"",
            captcha:"",
            // value:'',
            checkbox:false,
            focused:false,
            hide:false,
            // captcha:""
            
        }
    },
    watch:{
        captcha(){
            console.log(this.captcha.length);
            console.log(this.captcha);
            this.captcha.length==4? this.loginHandler():''
        }
    },
    methods:{
        focusInput() {
        this.$refs.input.focus();
        this.focused = true;
        },
        async sendCode(){
            if(!/^1[356789]\d{9}$/.test(this.phone)) return alert("手机号码格式错误")
            if(!this.checkbox) return alert("请阅读并同意条款")
            const [err,res] = await getCaptcha({phone:this.phone})
            if(err) return alert('错误')
            alert('ok')
            // this.$router.push('/captcha')//
            this.hide = true
            console.log(res);
        },
        // async loginHandler(){
        //     if(!/^\d{4}$/.test(this.captcha)) return alert('验证码不正确');
        //     const[err,res] =  await getLoginCellphone({phone:this.phone,captcha:this.captcha})
        //     if(err) return alert('登录错误请稍后再试')
        //     alert("登录成功")
        //     console.log(res);
        // }
        loginHandler() {
            if (!/^\d{4}$/.test(this.captcha)) return alert("验证码不合法");
            this.$store.dispatch("requestLoginCellphone", {
                phone: this.phone,
                captcha: this.captcha,
            });
        },
    },
    
}
</script>

<style>

</style>