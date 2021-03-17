<template>
    <div>
        <h1>{{ msg }}</h1>
        <div class="root">
            <div class="xv">
                <div class="db">
                    <div class="yq">
                        <div class="dq">
                            <div class="zq" tabindex="0" style="user-select: none;-webkit-user-drag: none;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);touch-action: manipulation;">
                                <div class="dsg">
                                    <div class="zbg">

                                    </div>
                                </div>
                            </div>
                            <div style="position: absolute;top: 50px;left: 50px;width: 400px;height: 400px;"></div>
                            <div class="idg gmba" :style="{ width: content[0].width + 'px', height: content[0].height + 'px', transform: `translate(${content[0].x}px, ${content[0].y}px) rotate(${content[0].rotate}deg)` }">
                                <div class="hsa">
                                    <div class="dsg">
                                        <div class="jp">
                                            <div class="bcw dag">
                                                <div class="lvq" :style="{ width: content[0].width + 'px', height: content[0].height + 'px', transform: `translate(0px, 0px) rotate(0deg)` }">
                                                    <div class="va" v-html="svgCode"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="idg gmba" :style="{ width: content[1].width + 'px', height: content[1].height + 'px', transform: `translate(${content[1].x}px, ${content[1].y}px) rotate(${content[1].rotate}deg)` }">
                                <div class="hsa">
                                    <div class="dsg">
                                        <div class="zbg" :style="{ backgroundColor: `${content[1].color}` }"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="idg gmba" :style="{ width: content[2].width + 'px', height: content[2].height + 'px', transform: `translate(${content[2].x}px, ${content[2].y}px) rotate(${content[2].rotate}deg)` }">
                                <div class="gvg" :style="{ width: content[2].scaleWidth + 'px', height: content[2].scaleHeight + 'px', transform: `scaleX(${fontScale.scaleX}) scaleY(${fontScale.scaleY})` }">
                                    <div class="o8a">
                                        <div lang="zh-CN" class="iwg">
                                            <!-- <div class="ql-container" translate="no" :data-max-width="content[2].scaleWidth">
                                                <div class="ql-editor" data-gramm="false" contenteditable="false" style="transform: translate(1.72267px, -3.04px);">
                                                    <p >

                                                    </p>
                                                </div>
                                            </div> -->
                                            <p class="lha" :style="{ fontFamily: `'YACgEfb36U4 0', _fb_, auto`, fontSize: `${content[2].style.fontSize}px`, color: `${content[2].style.color}`, lineHeight: `${content[2].style.lineHeight}em`, letterSpacing: `${content[2].style.letterSpacing}`, textTransform: `${content[2].style.textTransform}`, listStyleType: 'none' }">
                                                <span class="gsw">b</span>
                                                <span class="gsw">eauty parlor</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
            <div class="mq">
                <div v-if="false" class="_5Azx_w"></div>
                <div class="eva" :style="{ '--rotation': `${focusContent.rotate}deg`, width: `${focusContent.width}px`, height: `${focusContent.height}px`, transform: `translate(${focusContent.x}px, ${focusContent.y}px) rotate(${focusContent.rotate}deg)` }">
                    <div class="uoq"></div>
                    <div class="cyq" tabindex="-1">
                        <div class="zeq" :style="{ '--outward-x': `${outwardX}px`, '--outward-y': `${outwardY}px` }">
                            <div class="lnw i1g">
                                <div class="o5q mng tig">
                                    <div class="o1a xhg"></div>
                                </div>
                            </div>
                            <div class="o5q b5pg">
                                <div class="zhg ung"></div>
                            </div>
                            <div class="o5q p_dq">
                                <div class="zhg zcq"></div>
                            </div>
                            <div class="o5q swg">
                                <div class="zhg zcq"></div>
                            </div>
                            <div class="o5q kya">
                                <div class="zhg ung"></div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Demo",
    props: {
        msg: String
    },
    data() {
        return {
            backgroundPage: {
                width: 500,
                height: 500,
                x: 0,
                y: 0,
                rotate: 0,
                color: '#c65f5e'
            },
            focusContent: '',
            outwardX: 0,
            outwardY: 0,
            content: [
                {
                    width: 100.192,
                    height: 175.496,
                    x: 195.904,
                    y: 110.436,
                    rotate: 0,
                    url: 'https://media-public.canva.cn/NT3Zo/MAEQYoNT3Zo/1/s.svg',
                    color: '#ffffff'
                },
                {
                    width: 27.0271,
                    height: 9.45949,
                    x: 238.486,
                    y: 240.541,
                    rotate: 0,
                    color: '#ffffff'
                },
                {
                    width: 187.451,
                    height: 81.1721,
                    x: 156.274,
                    y: 297.769,
                    rotate: 0,
                    scaleWidth: 570.984,
                    scaleHeight: 247.253,
                    character: 'beauty parlor\n',
                    style: {
                        color: '#fffff',
                        lineHeight: 1.26,
                        letterSpacing: 0.034,
                        fontSize: 101.333,
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        textAlign: 'center',
                        fontFamily: 'YACgEfb36U4,0',
                        textTransform: 'uppercase'
                    },
                }
            ],
            svgCode: ''
        }
    },
    created() {
        this.$http.get(this.content[0].url).then((res) => {
            console.log(res)
            this.svgCode = res.data
        })
        this.focusContent = this.content[0]
    },
    computed: {
        fontScale() {
            return {
                scaleX: this.content[2].width / this.content[2].scaleWidth,
                scaleY: this.content[2].height / this.content[2].scaleHeight
            }
        }
    }
}
</script>>
<style scoped>
.root {
    width: 500px;
    height: 500px;
    background-color: rgb(198, 95, 94);
    margin: 0 auto;
    position: relative;
}
.xv {
    background-color: #fff;
    box-shadow: 0 2px 8px rgb(14 19 24 / 7%);
    z-index: 0;
}
.db {
    width: 500px;
    height: 500px;
    margin: 0px;
}
.yq {
    width: 500px;
    height: 500px;
    transform: scale(1);
}
.dq {
    width: 500px;
    height: 500px;
    position: relative;
}
.zq {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
    outline: none;
}
.dsg, .jp, .bcw {
    width: 100%;
    height: 100%;
}
.zbg {
    background-color: rgb(198, 95, 94);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
.idg {
    position: absolute;
    outline: none;
}
.gmba {
    user-select: none;
    -webkit-user-drag: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    touch-action: auto;
    pointer-events: auto;
}
.hsa {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
}
.dag {
    transition: transform 0.3s ease 0s;
}
.gvg {
    transform-origin: 0px 0px;
    writing-mode: horizontal-tb;
    text-rendering: geometricPrecision;
    grid-area: canvas;
    display: flex;
    flex: 1;
    position: relative;
}
.o8a {
    width: 100%;
    height: 100%;
}
.iwg {
    position: relative;
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 1.4;
    padding: 0;
    direction: ltr;
    text-align: left;
    text-transform: none;

    font-kerning: none;
    font-variant-ligatures: none;
    font-feature-settings: "kern" 0,"calt" 0,"liga" 0,"clig" 0,"dlig" 0,"hlig" 0;
    font-family: unset;
    -webkit-font-smoothing: subpixel-antialiased;

    overflow: visible;
    overflow-wrap: break-word;
    height: auto;
    white-space: normal;
    cursor: default;
}
.ql-container {
    box-sizing: border-box;
    font-family: Helvetica,Arial,sans-serif;
    font-size: 13px;
    height: 100%;
    margin: 0;
    position: relative;
}
.iwg .ql-editor {
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 1.4;
    padding: 0;
    direction: ltr;
    text-align: left;
    text-transform: none;
    --vertical-metrics-adjustment: 0;
    --para-spacing: 0;
    overflow: visible;
    height: auto;
    white-space: normal;
}
.lha {
    margin: 0;
    text-align: center;
}
.gsw {
    font-weight: 400;
    font-style: normal;
    color: #ffffff;
    text-decoration: none;
}
.mq {
    width: 500px;
    height: 500px;
    margin: 0px;
    left: 0;
    direction: ltr;
    position: absolute;
    bottom: 0;
    pointer-events: none;
    z-index: 2;
}
._5Azx_w {
    contain: layout;
}
.eva {
    position: absolute;
    width: 100%;
    height: 100%;
}
.eva::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    opacity: 0;
    pointer-events: none;
    background-color: #00c4cc;
    transition: opacity 0.2s ease-in;
}
.uoq {
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    transition: opacity .3s ease;
    background-image: linear-gradient(90deg,#00d9e1 0,#00d9e1),
    linear-gradient(180deg,#00d9e1 0,#00d9e1),
    linear-gradient(90deg,#00d9e1 0,#00d9e1),
    linear-gradient(180deg,#00d9e1 0,#00d9e1);
    background-position: top,100%,bottom,0;
    background-size: 12px 2px,2px 12px,12px 2px,2px 12px;
    background-repeat: repeat-x,repeat-y,repeat-x,repeat-y;
}
.cyq {
    width: 100%;
    height: 100%;
    outline: none;
    transition: opacity 0.3s ease;
}
.zeq {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.lnw.i1g {
    top: 100%;
}
.lnw {
    display: flex;
    position: absolute;
    padding: 20px;
}
.o5q {
    position: absolute;
    width: 32px;
    height: 32px;
    pointer-events: auto;
}
.tig {
    position: relative;
    width: 20px;
    height: 20px;
    cursor: move;
    margin: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.tig:after {
    content: "";
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    background: #fff 2px no-repeat;
    background-size: 16px;
    box-shadow: 0 0 5px 1px rgb(57 76 96 / 15%), 0 0 0 1px rgb(57 76 96 / 15%);
    z-index: -1;    
    -webkit-transform: rotate(var(--rotation));
    transform: rotate(var(--rotation));
    cursor: -webkit-image-set(url(../assets/4d0e991d3ba4f5fc763640a966b6171a.png) 1x) 12 12,auto;
}
.tig:after {
    position: absolute;
    border-radius: 50%;
}
.mng:after {
    background-image: url("data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'><path fill='currentColor' d='M15.25 18.48V15a.75.75 0 1 0-1.5 0v4c0 .97.78 1.75 1.75 1.75h4a.75.75 0 1 0 0-1.5h-2.6a8.75 8.75 0 0 0-2.07-15.53.75.75 0 1 0-.49 1.42 7.25 7.25 0 0 1 .91 13.34zM8.75 5.52V9a.75.75 0 0 0 1.5 0V5c0-.97-.78-1.75-1.75-1.75h-4a.75.75 0 0 0 0 1.5h2.6a8.75 8.75 0 0 0 2.18 15.57.75.75 0 0 0 .47-1.43 7.25 7.25 0 0 1-1-13.37z'/></svg>");
}
.mng .o1a {
    width: 32px;
    height: 32px;
    border-radius: 50%;
}
.xhg {
    /* cursor: -webkit-image-set(url('https://static.canva.cn/web/images/4d0e991d3ba4f5fc763640a966b6171a.png') 1x) 12 12,auto; */
    /* -webkit-image-set(url(images/4d0e991d3ba4f5fc763640a966b6171a.png) 1x,url(images/c0013ec5969d2610c26794064d159d8c.png) 2x) 12 12,auto */
    cursor: url(../assets/4d0e991d3ba4f5fc763640a966b6171a.png) 12 12 auto;
    cursor: -webkit-image-set(url(../assets/4d0e991d3ba4f5fc763640a966b6171a.png) 1x) 12 12,auto;
}
.o1a {
    position: absolute;
    width: 50%;
    height: 50%;
}
.b5pg {
    top: -16px;
    left: -16px;
    transform: translate(calc(-1*var(--outward-x)),calc(-1*var(--outward-y)));
}
.zhg {
    width: 100%;
    height: 100%;
    min-width: 32px;
    min-height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.ung {
    cursor: -webkit-image-set(url(../assets/7ea01757f820a9fb828312d.png) 1x) 12 12, auto;
}
.zhg:after {
    content: "";
    width: 12px;
    height: 12px;
    border-radius: 6px;
    background: #fff;
    box-shadow: 0 0 5px 1px rgb(57 76 96 / 15%), 0 0 0 1px rgb(53 71 90 / 20%);
    position: relative;
}
.b5pg .zhg:after {
    transform: translate(var(--outward-x),var(--outward-y));
}
.p_dq {
    top: -16px;
    right: -16px;
    transform: translate(var(--outward-x),calc(-1*var(--outward-y)));
}
.zcq {
    cursor: -webkit-image-set(url(../assets/d78cdce65d153748ffd0fb1.png) 1x) 12 12, auto;
}
.p_dq .zhg:after {
    transform: translate(calc(-1*var(--outward-x)),var(--outward-y));
}
.swg {
    bottom: -16px;
    left: -16px;
    transform: translate(calc(-1*var(--outward-x)),var(--outward-y));
}
.swg .zhg:after {
    transform: translate(var(--outward-x),calc(-1*var(--outward-y)));
}
.kya {
    bottom: -16px;
    right: -16px;
    transform: translate(var(--outward-x),var(--outward-y));
}
.kya .zhg:after {
    transform: translate(calc(-1*var(--outward-x)),calc(-1*var(--outward-y)));
}
</style>
<style>
.va, .va svg {
    display: block;
    width: 100%;
    height: 100%;
}
.va svg path {
    fill: #ffffff;
}
.ql-editor {
    box-sizing: border-box;
    counter-reset: list-0;
    line-height: 1.42;
    height: 100%;
    outline: none;
    overflow-y: auto;
    padding: 12px 15px;
    tab-size: 4;
    -moz-tab-size: 4;
    text-align: left;
    white-space: pre-wrap;
    word-wrap: break-word;
}

@font-face {
    font-family: "YACgEfb36U4 0";
    src: url('https://font-public.canva.cn/YACgEfb36U4/0/BodoniFLF.a5c77dca0bba1293ef0ff6154925a6.97a0034f1e21c26d011f5862d182e7b4.woff2');
}
@font-face {
    font-family: "_fb_";
    src: url('https://font-public.canva.cn/_fb/0/05.woff');
}
</style>