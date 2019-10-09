<template lang="pug">
div
  h1 VIZ-GALLERY
  viz-gallery(:viz="JSON.stringify(viz)" engine="dot" title="sample")

</template>

<script>
import vizGallery from './viz-gallery.vue'
export default {
    data(){
        return {
          viz:[
            `graph g {
    compound=true;
    node[shape=circle];
    1--no[lhead=cluster_1];
    subgraph cluster_1{
        no[shape=point height=0]
        x--no--y;
        {
            rank="same";
            x,y,no;
        }
    }
    no--{3,4}[ltail=cluster_1];
    1--{3,4};
    {
        rank="min";
        1;
    }
}`,
            `graph g {
    compound=true;
    node[shape=circle];
    1--{x,y};
    x--y;
        {
            rank="same";
            x,y;
        }
    {x,y}--3;
    y--4;
    x--4;
    //x--4;
    1--{3,4};
    {
        rank="min";
        1;
    }
}`
          ]
        }
    },
  components:{vizGallery}
}
</script>
