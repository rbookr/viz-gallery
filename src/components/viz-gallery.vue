<style lang="scss" scoped>
.viz-gallery {
    margin: 50px 0;
    .viz-gallery-control{
        display: flex;
        justify-content: flex-end;
        padding-right: 20px;
    }
    .frame-input {
        width: 20px;
        margin-left: 8px;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        appearance: none; 
        margin: 0; 
    }
    .viz-gallery-img-content {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    div.viz-gallery-title, .log {
        text-align: center;
    }
}
</style>
<template lang="pug">
div.viz-gallery
    div.viz-gallery-title
        h3 {{title}} 
    div.viz-gallery-control
        button.pre-frame(@click="renderPre" :disabled="nowFrame==0") Pre
        button.next-frame(@click="renderNex" :disabled="nowFrame ==vizData.length-1") Nex
        .frame-info
            input.frame-input(:value="nowFrame+1" type="number" @keyup.enter="goFrame" ref="frameInput")
            span.total-frame  / {{vizData.length}}
    div.log
        p {{vizData[nowFrame].log || ''}}
    div.viz-gallery-img-content(ref="imageDiv" :style="{width:'100%',height:height+'px' ,'max-height':height+'px'}")
</template>

<script>
export default {
    data(){
        return {
            name:'rain',
            vizIns:{},
            nowFrame:0,
        }
    },
    mounted(){
        this.vizIns = new Viz()
        if(this.vizData.length !== 0)
            this.render(0)
    },
    props:{
        data:String,
        title:String,
        engine:{
            type:String,
            default:"dot"
        },
        height:{
            type:String,
            default:"400"
        }
    },
    methods:{
        render(i){
            var self = this
            let engine = this.vizData[i].engine || this.engine || "dot"
            this.vizIns.renderImageElement(this.vizData[i].src,{engine})
                .then(function(element){
                    if( parseInt(element.getAttribute('height')) > parseInt(self.height)){
                        element.removeAttribute("width")
                        element.setAttribute("height",self.height)

                    }

                    while( self.$refs.imageDiv.firstChild )
                        self.$refs.imageDiv.removeChild( self.$refs.imageDiv.firstChild )
                    self.$refs.imageDiv.append(element)
                })
        },
        renderPre(){
            if( this.nowFrame > 0){
                this.render(--this.nowFrame)
            }
        },
        renderNex(){
            if( this.nowFrame < this.vizData.length-1){
                this.render(++this.nowFrame)
            }
        },
        goFrame(){
            let frame = parseInt(this.$refs.frameInput.value) || 1
            frame--
            if( frame > this.vizData.length-1)
                frame = this.vizData.length-1
            else if (frame < 0)
                frame = 0
            this.$refs.frameInput.value = frame+1+''
            this.nowFrame = frame
            this.render(frame)
        }
    },
    computed:{
        vizData(){
            return JSON.parse(this.data)
        }
    }
}
</script>
