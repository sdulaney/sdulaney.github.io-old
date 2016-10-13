window.onload = function() { init() };

var agents = [];
agents.push("x");
var call_counts = [];
call_counts.push("Call Count");
 var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1lvQ3NGvU7PGbPWwuYzccblFPCnY-ln00EJO0IO1Bacc/pubhtml?gid=1925952226&single=true';
//var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1hriSgPMcEnjEOaAZ3d0gGMPtkt_dUU1edTkspvoveDk/pubhtml?gid=0&single=true';


function showInfo(data, tabletop) {
//alert("Successfully processed!")
//console.log(data);

for (var i = 0; i < data.length; i++) {
    agents.push(data[i].Agent);
    call_counts.push(data[i]['Call Count']);
    //console.log(agents);
    //console.log(call_counts);
}

var chart = c3.generate({
    bindto: '#chart',
      padding: {
        //   left: 120
        // top: 40,
        // right: 100,
        // bottom: 40,
        // left: 200,
    },
    data: {
        type: 'bar',
        x: 'x',
         columns: [
            agents,
            call_counts
        ],
        labels: true,
        colors: {
            'Call Count': '#ff9933',
        }
    },
    axis: {
        y: {
                label: {
                    text : "Call Count",        //to be passed
                    position: "outer-center",

                }
        },
        rotated: true,
            x: {
                label: {
                    text : "Agent",        //to be passed
                    position: "outer-middle"
                },
                type: 'category'
            }
    },
    bar: {
        zerobased: true
        // width: {
        //     ratio: 0.75 // this makes bar width 50% of length between ticks
        // }
        // or
        //width: 100 // this makes bar width 100px
    },
    legend: {
        show: false
    }
});

// TODO: Load data dynamically
// setTimeout(function () {
//     agents = [];
//     agents.push("x");
//     call_counts = [];
//     call_counts.push("Call Count");
//     // var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1lvQ3NGvU7PGbPWwuYzccblFPCnY-ln00EJO0IO1Bacc/pubhtml?gid=1925952226&single=true';
//     var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1hriSgPMcEnjEOaAZ3d0gGMPtkt_dUU1edTkspvoveDk/pubhtml?gid=0&single=true';
//     Tabletop.init( { key: public_spreadsheet_url, callback: showInfo, simpleSheet: true } )
//     chart.load({
//         type: 'bar',
//         x: 'x',
//          columns: [
//             agents,
//             call_counts
//         ]
//     });
//     console.log("chart.load running...")
// }, 10000);

// Fit to screen
 var screenHeight = Math.floor(screen.height*0.55);
 var screenWidth = Math.floor(screen.width*0.90);
console.log("Height: " + screenHeight+ ", Width: " + screenWidth);
chart.resize({height:screenHeight, width:screenWidth});
//d3.selectAll(".c3-text").className += "animated pulse dataValues";
//$( "c3-text" ).addClass( "animated pulse dataValues" );

// chart.resize({height:screenHeight-100});
// d3.selectAll(".c3-axis-y .tick text").attr("y",3);
}

// Refresh page automatically
setTimeout(function(){
   window.location.href=window.location.href;
}, 600000);


function init() {
  Tabletop.init( { key: public_spreadsheet_url, callback: showInfo, simpleSheet: true } )


}
