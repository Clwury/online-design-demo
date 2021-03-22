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
                                    <div class="zbg" @mouseover="mouseover('backPg')" @mouseout="mouseout('backPg')" @click="mouseClick('backPg')">

                                    </div>
                                </div>
                            </div>
                            <!-- <div style="position: absolute;top: 50px;left: 50px;width: 400px;height: 400px;"></div> -->
                            <div class="idg gmba" :style="{ width: content[0].width + 'px', height: content[0].height + 'px', transform: `translate(${content[0].x}px, ${content[0].y}px) rotate(${content[0].rotate}deg)`, cursor: mousePressed ? 'move' : '' }" @mouseover="mouseover('content0')" @mouseout="mouseout('content0')" @click="mouseClick('content0')" @mousedown="mousedown($event, 'content0')">
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
                            <div class="idg gmba" :style="{ width: content[1].width + 'px', height: content[1].height + 'px', transform: `translate(${content[1].x}px, ${content[1].y}px) rotate(${content[1].rotate}deg)`, cursor: mousePressed ? 'move' : '' }" @mouseover="mouseover('content1')" @mouseout="mouseout('content1')"  @click="mouseClick('content1')" @mousedown="mousedown($event, 'content1')">
                                <div class="hsa">
                                    <div class="dsg">
                                        <div class="zbg" :style="{ backgroundColor: `${content[1].color}` }"></div>
                                    </div>
                                </div>
                            </div>
                            <div :contenteditable="contenteditable" class="idg gmba" :style="{ width: content[2].width + 'px', height: content[2].height + 'px', transform: `translate(${content[2].x}px, ${content[2].y}px) rotate(${content[2].rotate}deg)`, cursor: mousePressed ? 'move' : '' }" @mouseover="mouseover('content2')" @mouseout="mouseout('content2')"  @click="mouseClick('content2')" @mousedown="mousedown($event, 'content2')">
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
                                                <span class="gsw">eauty flower</span>
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
                <div v-if="mouseOverObj" class="_5Azx_w">
                    <div class="xY4chA" :style="{ height: `${mouseOverObj.height}px`, width: `${mouseOverObj.width}px`, transform: `translate(${mouseOverObj.x}px, ${mouseOverObj.y}px) rotate(${mouseOverObj.rotate}deg)` }"></div>
                </div>
                <div v-if="mouseClickObj && !mouseClickObj.root" class="eva" :style="{ '--rotation': `${mouseClickObj.rotate}deg`, width: `${mouseClickObj.width}px`, height: `${mouseClickObj.height}px`, transform: `translate(${mouseClickObj.x}px, ${mouseClickObj.y}px) rotate(${mouseClickObj.rotate}deg)` }">
                    <div class="uoq"></div>
                    <div class="cyq" tabindex="-1">
                        <div class="zeq" :style="{ '--outward-x': `${outwardX}px`, '--outward-y': `${outwardY}px` }">
                            <div class="lnw i1g">
                                <div class="o5q mng tig" @mousedown="mousedownRotate($event)">
                                    <div class="o1a xhg"></div>
                                </div>
                            </div>
                            <div class="o5q b5pg" @mousedown="mousedownScale($event, 'leftTop')">
                                <div class="zhg ung"></div>
                            </div>
                            <div class="o5q p_dq" @mousedown="mousedownScale($event, 'rightTop')">
                                <div class="zhg zcq"></div>
                            </div>
                            <div class="o5q swg" @mousedown="mousedownScale($event, 'leftBottom')">
                                <div class="zhg zcq"></div>
                            </div>
                            <div class="o5q kya" @mousedown="mousedownScale($event, 'rightBottom')">
                                <div class="zhg ung"></div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>参考项目<a href="https://github.com/shenhudong/snapping-demo">https://github.com/shenhudong/snapping-demo</a></div>
    </div>
</template>
<script>
import Util from '../util'

export default {
    name: "Demo",
    props: {
        msg: String
    },
    data() {
        return {
            backgroundPage: {
                root: true,
                width: 500,
                height: 500,
                x: 0,
                y: 0,
                rotate: 0,
                color: '#c65f5e'
            },
            mousePressed: false,
            mouseRotated: false,
            mouseScaled: false,
            mouseScalePosition: '',
            mouseOverObj: '',
            mouseClickObj: '',
            focusIndex: '',
            mousePosition: {
                x: 0,
                y: 0
            },
            contenteditable: false,
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
                    color: '#ffffff',
                    lockProportions: true
                },
                {
                    width: 27.0271,
                    height: 9.45949,
                    x: 238.486,
                    y: 240.541,
                    rotate: 0,
                    color: '#ffffff',
                    lockProportions: false
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
                    lockProportions: true,
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
                    }
                }
            ],
            svgCode: '',
            MININUM_SIZE: 4,
            THROTTLE_DELAY_TIME: 30
        }
    },
    created() {
        this.$http.get(this.content[0].url).then((res) => {
            console.log(res)
            this.svgCode = res.data
        })
    },
    computed: {
        fontScale() {
            return {
                scaleX: this.content[2].width / this.content[2].scaleWidth,
                scaleY: this.content[2].height / this.content[2].scaleHeight
            }
        }
    },
    mounted() {
        document.onmousemove = Util.throttle((event) => {
            if (this.mousePressed && this.mouseRotated) {
                this.dragRotateHandle(event)
            } else if (this.mousePressed && this.mouseScaled && this.mouseScalePosition !== '') {
                switch (this.mouseScalePosition) {
                    case 'leftTop':
                        this.dragLeftTopHandle(event)
                        break;
                    case 'rightTop':
                        this.dragRightTopHandle(event)
                        break;
                    case 'leftBottom':
                        this.dragLeftBottomHandle(event)
                        break;
                    case 'rightBottom':
                        this.dragRightBottomHandle(event)
                        break;
                }
            } else if (this.mousePressed && !this.contenteditable) {
                console.log('鼠标移动', event)
                this.mouseClickObj.x = event.pageX - this.mousePosition.x + this.mouseClickObj.x
                this.mouseClickObj.y = event.pageY - this.mousePosition.y + this.mouseClickObj.y
                this.mousePosition.x = event.pageX
                this.mousePosition.y = event.pageY
            }
        }, this.THROTTLE_DELAY_TIME, true)
        document.onmouseup = (event) => {
            console.log('鼠标松开', event)
            this.mousePressed = false
            this.mouseRotated = false
            this.mouseScaled = false
            this.mouseScalePosition = ''
        }
        document.ondblclick = (event) => {
            console.log('鼠标双击', event)
            if (this.mouseOverObj == this.content[2]) {
                this.contenteditable = true
            }
        }
    },
    methods: {
        mouseover(arg) {
            console.log(arg)
            if (arg === 'backPg') {
                this.mouseOverObj = this.backgroundPage
            }
            arg === 'content0' && (this.mouseOverObj = this.content[0])
            arg === 'content1' && (this.mouseOverObj = this.content[1])
            arg === 'content2' && (this.mouseOverObj = this.content[2])
        },
        mouseout(arg) {
            if (arg === 'backPg') {
                this.mouseOverObj = ''
            }
        },
        mouseClick(arg) {
            console.log(arg)
            arg === 'backPg' && (this.mouseClickObj = this.backgroundPage)
            if (arg === 'content0') {
                this.mouseClickObj = this.content[0]
                this.focusIndex = 0
            }
            if (arg === 'content1') {
                this.mouseClickObj = this.content[1]
                this.focusIndex = 1
            }
            if (arg === 'content2') {
                this.mouseClickObj = this.content[2]
                this.focusIndex = 2
            }
            arg !== 'content2' && (this.contenteditable = false)
        },
        mousedown(e, arg) {
            if (e.which !== 1) {
                return
            }
            this.mousePressed = true
            console.log('鼠标按下', e, arg)
            this.mouseClick(arg)
            this.mousePosition.x = e.pageX
            this.mousePosition.y = e.pageY
        },
        mousedownRotate() {
            this.mousePressed = true
            this.mouseRotated = true
        },
        // 拖拽旋转
        dragRotateHandle(event) {
            const rect = {
                x: this.mouseClickObj.x,
                y: this.mouseClickObj.y,
                width: this.mouseClickObj.width,
                height: this.mouseClickObj.height,
                rotate: this.mouseClickObj.rotate
            }
            const originCenter = {
                x: rect.x + rect.width / 2,
                y: rect.y + rect.height / 2
            }
            const mousePosition = {
                x: parseInt(event.pageX - document.getElementsByClassName('root')[0].offsetLeft),
                y: parseInt(event.pageY - document.getElementsByClassName('root')[0].offsetTop)
            }
            console.log(mousePosition)
            const a = Math.abs(mousePosition.x - originCenter.x)
            const b = Math.abs(mousePosition.y - originCenter.y)
            const c = Math.sqrt(a * a + b * b)
            let rotate = Math.round((Math.asin(b / c) / Math.PI * 180))
            
            console.log('鼠标角度', rotate)

            console.log(rect, originCenter, a, b, c)

            // 第一象限
            if (mousePosition.x >= originCenter.x && mousePosition.y <= originCenter.y) {
                rotate = -90 - rotate
            }
            // 第二象限
            else if (mousePosition.x <= originCenter.x && mousePosition.y <= originCenter.y) {
                rotate = 90 + rotate
            }
            // 第三象限
            else if (mousePosition.x <= originCenter.x && mousePosition.y >= originCenter.y) {
                rotate = 90 - rotate
            }
            // 第四象限
            else if(mousePosition.x >= originCenter.x && mousePosition.y >= originCenter.y) {
                rotate =  - 90 + rotate
            }
            console.log('旋转角度', rotate)
            this.mouseClickObj.rotate = rotate === 360 ? 0 : rotate
        },
        mousedownScale(event, arg) {
            console.log(event, arg)
            this.mousePressed = true
            this.mouseScaled = true
            this.mouseScalePosition = arg
        },
        // 左上拖拽
        dragLeftTopHandle(event) {
            // console.log('左上缩放', event)
            const { sPoint, rect, proportion } = this.getKeyVariable('leftTop')

            // 鼠标当前位置
            const mousePosition = {
                x: parseInt(event.pageX - document.getElementsByClassName('root')[0].offsetLeft),
                y: parseInt(event.pageY - document.getElementsByClassName('root')[0].offsetTop)
            }
            console.log(sPoint, rect, proportion, mousePosition)
            // 新的中心点
            let newCenterPoint = this.getCenterPoint(mousePosition, sPoint)
            let newLeftTopPoint = this.getRotatedPoint(mousePosition, newCenterPoint, -rect.rotate)
            let newRightBottomPoint = this.getRotatedPoint(sPoint, newCenterPoint, -rect.rotate)

            let newWidth = newRightBottomPoint.x - newLeftTopPoint.x
            let newHeight = newRightBottomPoint.y - newLeftTopPoint.y

            // 是否限制宽高比
            if (this.mouseClickObj.lockProportions) {
                if (newWidth / newHeight > proportion) {
                    newLeftTopPoint.x = newLeftTopPoint.x + Math.abs(newWidth - newHeight * proportion)
                    newWidth = newHeight * proportion
                } else {
                    newLeftTopPoint.y = newLeftTopPoint.y + Math.abs(newHeight - newWidth / proportion)
                    newHeight = newWidth / proportion
                }

                // 重新计算各点位置
                let rotatedLeftTopPoint = this.getRotatedPoint(newLeftTopPoint, newCenterPoint, rect.rotate)
                newCenterPoint = this.getCenterPoint(rotatedLeftTopPoint, sPoint)
                newLeftTopPoint = this.getRotatedPoint(rotatedLeftTopPoint, newCenterPoint, -rect.rotate)
                newRightBottomPoint = this.getRotatedPoint(sPoint, newCenterPoint, -rect.rotate)

                newWidth = newRightBottomPoint.x - newLeftTopPoint.x
                newHeight = newRightBottomPoint.y - newLeftTopPoint.y
            }

            if (newWidth < this.MININUM_SIZE || newHeight < this.MININUM_SIZE) {
                return
            }
            this.mouseClickObj.x = this.content[this.focusIndex].x = newLeftTopPoint.x
            this.mouseClickObj.y = this.content[this.focusIndex].y = newLeftTopPoint.y
            this.mouseClickObj.width = this.content[this.focusIndex].width = newWidth
            this.mouseClickObj.height = this.content[this.focusIndex].height = newHeight
        },
        // 右上拖拽
        dragRightTopHandle(event) {
            console.log('右上拖拽', event)
            const { sPoint, rect, proportion } = this.getKeyVariable('rightTop')

            // 鼠标当前位置
            const mousePosition = {
                x: parseInt(event.pageX - document.getElementsByClassName('root')[0].offsetLeft),
                y: parseInt(event.pageY - document.getElementsByClassName('root')[0].offsetTop)
            }
            console.log(sPoint, rect, proportion, mousePosition)

            let newCenterPoint = this.getCenterPoint(mousePosition, sPoint)
            let newRightTopPoint = this.getRotatedPoint(mousePosition, newCenterPoint, -rect.rotate)
            let newLeftBottomPoint = this.getRotatedPoint(sPoint, newCenterPoint, -rect.rotate)

            let newWidth = newRightTopPoint.x - newLeftBottomPoint.x
            let newHeight = newLeftBottomPoint.y - newRightTopPoint.y

            if (this.mouseClickObj.lockProportions) {
                if (newWidth / newHeight > proportion) {
                    newRightTopPoint.x = newRightTopPoint.x - Math.abs(newWidth - newHeight * proportion)
                    newWidth = newHeight * proportion
                } else {
                    newRightTopPoint.y = newRightTopPoint.y + Math.abs(newHeight - newWidth / proportion)
                    newHeight = newWidth / proportion
                }

                let rotatedRightTopPoint = this.getRotatedPoint(newRightTopPoint, newCenterPoint, rect.rotate)
                newCenterPoint = this.getCenterPoint(rotatedRightTopPoint, sPoint)
                newRightTopPoint = this.getRotatedPoint(rotatedRightTopPoint, newCenterPoint, -rect.rotate)
                newLeftBottomPoint = this.getRotatedPoint(sPoint, newCenterPoint, -rect.rotate)
                
                newWidth = newRightTopPoint.x - newLeftBottomPoint.x
                newHeight = newLeftBottomPoint.y - newRightTopPoint.y
            }

            if (newWidth < this.MININUM_SIZE || newHeight < this.MININUM_SIZE) {
                return
            }
            this.mouseClickObj.x = this.content[this.focusIndex].x = newLeftBottomPoint.x
            this.mouseClickObj.y = this.content[this.focusIndex].y = newRightTopPoint.y
            this.mouseClickObj.width = this.content[this.focusIndex].width = newWidth
            this.mouseClickObj.height = this.content[this.focusIndex].height = newHeight
        },
        // 左下拖拽
        dragLeftBottomHandle(event) {
            console.log('左下拖拽', event)
            const { sPoint, rect, proportion } = this.getKeyVariable('leftBottom')

            // 鼠标当前位置
            const mousePosition = {
                x: parseInt(event.pageX - document.getElementsByClassName('root')[0].offsetLeft),
                y: parseInt(event.pageY - document.getElementsByClassName('root')[0].offsetTop)
            }
            console.log(sPoint, rect, proportion, mousePosition)

            let newCenterPoint = this.getCenterPoint(mousePosition, sPoint)
            let newRightTopPoint = this.getRotatedPoint(sPoint, newCenterPoint, -rect.rotate)
            let newLeftBottomPoint = this.getRotatedPoint(mousePosition, newCenterPoint, -rect.rotate)

            let newWidth = newRightTopPoint.x - newLeftBottomPoint.x
            let newHeight = newLeftBottomPoint.y - newRightTopPoint.y

            if (this.mouseClickObj.lockProportions) {
                if (newWidth / newHeight > proportion) {
                    newLeftBottomPoint.x = newLeftBottomPoint.x + Math.abs(newWidth - newHeight * proportion)
                    newWidth = newHeight * proportion
                } else {
                    newLeftBottomPoint.y = newLeftBottomPoint.y - Math.abs(newHeight - newWidth / proportion)
                    newHeight = newWidth / proportion
                }

                let rotatedLeftBottomPoint = this.getRotatedPoint(newLeftBottomPoint, newCenterPoint, rect.rotate)
                newCenterPoint = this.getCenterPoint(rotatedLeftBottomPoint, sPoint)
                newLeftBottomPoint = this.getRotatedPoint(rotatedLeftBottomPoint, newCenterPoint, -rect.rotate)
                newRightTopPoint = this.getRotatedPoint(sPoint, newCenterPoint, -rect.rotate)
                
                newWidth = newRightTopPoint.x - newLeftBottomPoint.x
                newHeight = newLeftBottomPoint.y - newRightTopPoint.y
            }

            if (newWidth < this.MININUM_SIZE || newHeight < this.MININUM_SIZE) {
                return
            }
            this.mouseClickObj.x = this.content[this.focusIndex].x = newLeftBottomPoint.x
            this.mouseClickObj.y = this.content[this.focusIndex].y = newRightTopPoint.y
            this.mouseClickObj.width = this.content[this.focusIndex].width = newWidth
            this.mouseClickObj.height = this.content[this.focusIndex].height = newHeight
        },
        // 右下拖拽
        dragRightBottomHandle(event) {
            console.log('右下拖拽', event)

            const { sPoint, rect, proportion } = this.getKeyVariable('rightBottom')

            // 鼠标当前位置
            const mousePosition = {
                x: parseInt(event.pageX - document.getElementsByClassName('root')[0].offsetLeft),
                y: parseInt(event.pageY - document.getElementsByClassName('root')[0].offsetTop)
            }
            console.log(sPoint, rect, proportion, mousePosition)

            let newCenterPoint = this.getCenterPoint(mousePosition, sPoint)
            let newLeftTopPoint = this.getRotatedPoint(sPoint, newCenterPoint, -rect.rotate)
            let newRightBottomPoint = this.getRotatedPoint(mousePosition, newCenterPoint, -rect.rotate)

            let newWidth = newRightBottomPoint.x - newLeftTopPoint.x
            let newHeight = newRightBottomPoint.y - newLeftTopPoint.y

            if (this.mouseClickObj.lockProportions) {
                if (newWidth / newHeight > proportion) {
                    newRightBottomPoint.x = newRightBottomPoint.x - Math.abs(newWidth - newHeight * proportion)
                    newWidth = newHeight * proportion
                } else {
                    newRightBottomPoint.y = newRightBottomPoint.y - Math.abs(newHeight - newWidth / proportion)
                    newHeight = newWidth / proportion
                }

                let rotatedRightBottomPoint = this.getRotatedPoint(newRightBottomPoint, newCenterPoint, rect.rotate)
                newCenterPoint = this.getCenterPoint(rotatedRightBottomPoint, sPoint)
                newRightBottomPoint = this.getRotatedPoint(rotatedRightBottomPoint, newCenterPoint, -rect.rotate)
                newLeftTopPoint = this.getRotatedPoint(sPoint, newCenterPoint, -rect.rotate)
                
                newWidth = newRightBottomPoint.x - newLeftTopPoint.x
                newHeight = newRightBottomPoint.y - newLeftTopPoint.y
            }

            if (newWidth < this.MININUM_SIZE || newHeight < this.MININUM_SIZE) {
                return
            }
            this.mouseClickObj.x = this.content[this.focusIndex].x = newLeftTopPoint.x
            this.mouseClickObj.y = this.content[this.focusIndex].y = newLeftTopPoint.y
            this.mouseClickObj.width = this.content[this.focusIndex].width = newWidth
            this.mouseClickObj.height = this.content[this.focusIndex].height = newHeight
        },
        // 获取关键变量
        getKeyVariable(dragPosition) {
            const rect = {
                x: this.mouseClickObj.x,
                y: this.mouseClickObj.y,
                width: this.mouseClickObj.width,
                height: this.mouseClickObj.height,
                rotate: this.mouseClickObj.rotate
            }
            const center = {
                x: rect.x + rect.width / 2,
                y: rect.y + rect.height / 2
            }
            const handlePoint = this.getPoint(rect, center, dragPosition)
            console.log('鼠标位置', handlePoint)
            const sPoint = {
                x: center.x + Math.abs(handlePoint.x - center.x) * (handlePoint.x < center.x ? 1 : -1),
                y: center.y + Math.abs(handlePoint.y - center.y) * (handlePoint.y < center.y ? 1 : -1)
            }
            // 元素宽高比
            const proportion = rect.width / rect.height
            // console.log(sPoint, proportion)
            return {
                sPoint,
                rect,
                proportion
            }
        },
        // 获取旋转后手柄坐标
        getPoint(rect, center, dragPosition) {
            let point

            switch (dragPosition) {
                case 'rightTop':
                    point = {
                        x: rect.x + rect.width,
                        y: rect.y
                    }
                    break;
                case 'leftTop':
                    point = {
                        x: rect.x,
                        y: rect.y
                    }
                    break
                case 'leftBottom':
                    point = {
                        x: rect.x,
                        y: rect.y + rect.height
                    }
                    break
                case 'rightBottom':
                    point = {
                        x: rect.x + rect.width,
                        y: rect.y + rect.height
                    }
                    break
            }
            return this.getRotatedPoint(point, center, rect.rotate)
        },
        // 获取旋转后手柄位置
        getRotatedPoint(point, center, rotate) {    
            // 角度转弧度
            const radian = 2 * Math.PI / 360 * rotate
            return {
                x: (point.x - center.x) * Math.cos(radian) - (point.y - center.y) * Math.sin(radian) + center.x,
                y: (point.x - center.x) * Math.sin(radian) + (point.y - center.y) * Math.cos(radian) + center.y
            }
        },
        // 获取中心位置
        getCenterPoint(p1, p2) {
            return {
                x: p1.x + (p2.x - p1.x) / 2,
                y: p1.y + (p2.y - p1.y) / 2
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
    user-select: none;
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
    /* cursor: default; */
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
    cursor: -webkit-image-set(url(../assets/whirl/4d0e991d3ba4f5fc763640a966b6171a.png) 1x) 12 12,auto;
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
/* 旋转指针*/
.xhg {
    /* cursor: -webkit-image-set(url('https://static.canva.cn/web/images/4d0e991d3ba4f5fc763640a966b6171a.png') 1x) 12 12,auto; */
    /* -webkit-image-set(url(images/4d0e991d3ba4f5fc763640a966b6171a.png) 1x,url(images/c0013ec5969d2610c26794064d159d8c.png) 2x) 12 12,auto */
    cursor: url(../assets/whirl/4d0e991d3ba4f5fc763640a966b6171a.png) 12 12 auto;
    cursor: -webkit-image-set(url(../assets/whirl/4d0e991d3ba4f5fc763640a966b6171a.png) 1x) 12 12,auto;
}
.qba {
    cursor: url(../assets/whirl/4661bcf5b63be067385bd9260947ef7d.png) 12 12 auto;
    cursor: -webkit-image-set(url(../assets/whirl/4661bcf5b63be067385bd9260947ef7d.png) 1x) 12 12,auto;
}
.qoq {
    cursor: url(../assets/whirl/1bbecc821ffe33e2147c0be478f9d607.png) 12 12 auto;
    cursor: -webkit-image-set(url(../assets/whirl/1bbecc821ffe33e2147c0be478f9d607.png) 1x) 12 12,auto;
}
.s0w {
    cursor: url(../assets/whirl/345e22a8570868fae4d383ffe4ecac76.png) 12 12 auto;
    cursor: -webkit-image-set(url(../assets/whirl/345e22a8570868fae4d383ffe4ecac76.png) 1x) 12 12,auto;
}
.yea {
    cursor: url(../assets/whirl/878b259878673d7fa8b605d6013d2078.png) 12 12 auto;
    cursor: -webkit-image-set(url(../assets/whirl/878b259878673d7fa8b605d6013d2078.png) 1x) 12 12,auto;
}
.qeq {
    cursor: url(../assets/whirl/7d9caa2e41936cabdb1ca50870fc3186.png) 12 12 auto;
    cursor: -webkit-image-set(url(../assets/whirl/7d9caa2e41936cabdb1ca50870fc3186.png) 1x) 12 12,auto;
}
.yug {
    cursor: url(../assets/whirl/713e3da1691fe19554200e5b21617b50.png) 12 12 auto;
    cursor: -webkit-image-set(url(../assets/whirl/713e3da1691fe19554200e5b21617b50.png) 1x) 12 12,auto;
}
.pmw {
    cursor: url(../assets/whirl/7db85eed14fd1a977cf9fad576733372.png) 12 12 auto;
    cursor: -webkit-image-set(url(../assets/whirl/7db85eed14fd1a977cf9fad576733372.png) 1x) 12 12,auto;
}
.mqw {
    cursor: url(../assets/whirl/677b89a5a3de28dc63980930cf60079e.png) 12 12 auto;
    cursor: -webkit-image-set(url(../assets/whirl/677b89a5a3de28dc63980930cf60079e.png) 1x) 12 12,auto;
}
.gcw {
    cursor: url(../assets/whirl/2b7409e26aa3f06f03f156502dacc115.png) 12 12 auto;
    cursor: -webkit-image-set(url(../assets/whirl/2b7409e26aa3f06f03f156502dacc115.png) 1x) 12 12,auto;
}
.bnw {
    cursor: url(../assets/whirl/9a4e14bff3ccd5e318047611990c7374.png) 12 12 auto;
    cursor: -webkit-image-set(url(../assets/whirl/9a4e14bff3ccd5e318047611990c7374.png) 1x) 12 12,auto;
}
.ypa {
    cursor: url(../assets/whirl/d40ce2ba71b8a2ce6525fc7e3d845e49.png) 12 12 auto;
    cursor: -webkit-image-set(url(../assets/whirl/d40ce2ba71b8a2ce6525fc7e3d845e49.png) 1x) 12 12,auto;
}
.r75_q {
    cursor: url(../assets/whirl/2e0ea326850959ffed4c15a186697a9f.png) 12 12 auto;
    cursor: -webkit-image-set(url(../assets/whirl/2e0ea326850959ffed4c15a186697a9f.png) 1x) 12 12,auto;
}
/*左半部分*/
.ufw {
    cursor: url(../assets/whirl/31295144b1e0601d2676be6c73dcf1b1.png) 12 12 auto;
    cursor: -webkit-image-set(url(../assets/whirl/31295144b1e0601d2676be6c73dcf1b1.png) 1x) 12 12,auto;
}
.ewq {
    cursor: url(../assets/whirl/3c47e805b1288ff7482475a5baa1ab2b.png) 12 12 auto;
    cursor: -webkit-image-set(url(../assets/whirl/3c47e805b1288ff7482475a5baa1ab2b.png) 1x) 12 12,auto;
}
.wrq {
    cursor: url(../assets/whirl/33f1440c7ada5e7e8f31a706fcf722ee.png) 12 12 auto;
    cursor: -webkit-image-set(url(../assets/whirl/33f1440c7ada5e7e8f31a706fcf722ee.png) 1x) 12 12,auto;
}
.qvw {
    cursor: url(../assets/whirl/aba8fc531953b668920076359565eb59.png) 12 12 auto;
    cursor: -webkit-image-set(url(../assets/whirl/aba8fc531953b668920076359565eb59.png) 1x) 12 12,auto;
}
.g099ww {
    cursor: url(../assets/whirl/63999399c8cf3b47236a30ea6a310a32.png) 12 12 auto;
    cursor: -webkit-image-set(url(../assets/whirl/63999399c8cf3b47236a30ea6a310a32.png) 1x) 12 12,auto;
}
.eq404a {
    cursor: url(../assets/whirl/956c07bd1e2cf2a0e7a674681caf5be0.png) 12 12 auto;
    cursor: -webkit-image-set(url(../assets/whirl/956c07bd1e2cf2a0e7a674681caf5be0.png) 1x) 12 12,auto;
}
.p0aq {
    cursor: url(../assets/whirl/3fd9adc7eac568ae4407a879223a7a5b.png) 12 12 auto;
    cursor: -webkit-image-set(url(../assets/whirl/3fd9adc7eac568ae4407a879223a7a5b.png) 1x) 12 12,auto;
}
.qvq {
    cursor: url(../assets/whirl/263856851390cd905452bf7b5d39b725.png) 12 12 auto;
    cursor: -webkit-image-set(url(../assets/whirl/263856851390cd905452bf7b5d39b725.png) 1x) 12 12,auto;
}
.afw {
    cursor: url(../assets/whirl/a4da5947a391c4ec3b9080ca26583bb0.png) 12 12 auto;
    cursor: -webkit-image-set(url(../assets/whirl/a4da5947a391c4ec3b9080ca26583bb0.png) 1x) 12 12,auto;
}
.t_rg {
    cursor: url(../assets/whirl/d33c87b484f655fb60bd17688adf3e70.png) 12 12 auto;
    cursor: -webkit-image-set(url(../assets/whirl/d33c87b484f655fb60bd17688adf3e70.png) 1x) 12 12,auto;
}
.arq {
    cursor: url(../assets/whirl/226ff3adc87fd7093018e0c8a3cc931c.png) 12 12 auto;
    cursor: -webkit-image-set(url(../assets/whirl/226ff3adc87fd7093018e0c8a3cc931c.png) 1x) 12 12,auto;
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
.xY4chA {
    position: absolute;
    top: -1px;
    bottom: -1px
}

/* [dir] .xY4chA { */
.xY4chA {
    padding: 1px;
    background-size: 12px 2px,2px 12px,12px 2px,2px 12px;
    background-repeat: repeat-x,repeat-y,repeat-x,repeat-y
}

/* [dir=ltr] .xY4chA { */
.xY4chA {
    background-image: linear-gradient(90deg,#00d9e1 0,#00d9e1),linear-gradient(180deg,#00d9e1 0,#00d9e1),linear-gradient(90deg,#00d9e1 0,#00d9e1),linear-gradient(180deg,#00d9e1 0,#00d9e1);
    background-position: top,100%,bottom,0;
    left: -1px;
    right: -1px
}

[dir=rtl] .xY4chA {
    background-image: linear-gradient(270deg,#00d9e1 0,#00d9e1),;
    background-position: top,0,bottom,100%;
    right: -1px;
    left: -1px
}
</style>