<template lang="pug">
div.viz-gallery
    div.viz-gallery-title
        h3 {{title}} 
    div(ref="imageDiv")
    button.pre-frame(@click="renderPre" :disabled="nowFrame==0") Pre
    button.next-frame(@click="renderNex" :disabled="nowFrame ==vizData.length-1") Nex
    .frame-info
        span.now-frame {{nowFrame+1}}/
        span.total-frame {{vizData.length}}
</template>

<script>
export default {
    data(){
        return {
            name:'rain',
            vizIns:{},
            nowFrame:0,
            image:""
        }
    },
    mounted(){
        this.vizIns = new Viz()
        if(this.vizData.length !== 0)
            this.render(0)
    },
    props:{
        viz:String,
        title:String,
        engine:{
            type:String,
            default:"dot"
        }
    },
    methods:{
        render(i){
            var self = this
            this.vizIns.renderImageElement(this.vizData[i],{engine:this.engine || "dot"})
                .then(function(element){
                    self.image = element
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
        }
    },
    computed:{
        vizData(){
            return JSON.parse(this.viz)
        }
    }
}
</script>
