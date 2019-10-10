<template lang="pug">
div
  h1 VIZ-GALLERY
  viz-gallery(:data="JSON.stringify(viz)" engine="dot" title="sample")

</template>

<script>
import vizGallery from './viz-gallery.vue'
export default {
    data(){
        return {
            viz:[
                {
                    src:`graph g {
    node[shape=rect width=1 style=filled fillcolor="lightblue"];

    1[pos="1,0!" label="100" fillcolor="orange"];
    2[pos="2,0!" label="2"];
    3[pos="3,0!" label="3"];
    4[pos="4,0!" label="4"];
    5[pos="5,0!" label="5"];
    6[pos="6,0!" label="6"];
    7[pos="7,0!" label="7"];
    8[pos="8,0!" label="8"];

    node[shape=circle width=0.5 style=filled fillcolor="white"];
    c1[pos="1,0.55!" label="100" fillcolor="orange"];
    c2[pos="2,1.55!" label="2"];
    c3[pos="3,0.55!" label="3"];
    c4[pos="4,2.55!" label="4"];
    c5[pos="5,0.55!" label="5"];
    c6[pos="6,1.55!" label="6"];
    c7[pos="7,0.55!" label="7"];
    c8[pos="8,3.55!" label="8"];
    c8--c4--c2--c1;
    c2--2;
    c4--{c3,4};
    c6--{c5,6};
    c8--{c6,c7,8};
}`,
                    engine:'neato',
                    log:'log 1'
                },
                {
                    src:`graph g {
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
                    log:'log 2'
                }
            ]
        }
    },
  components:{vizGallery}
}
</script>
