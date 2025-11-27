const Welcome=()=>{
    console.log("node js says hiii")
}

const Exporting=()=>{
    console.log("we can export this file")
}

// for single funtion module.export=welcome;
// for export multi   funtion
module.exports={Welcome , Exporting};


