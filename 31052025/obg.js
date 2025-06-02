function fooobg(count){
    let obgarr = [];

    for (let i = 0; i < count; ++i){
        obgarr.push({id: i, data: 'tvyal'});
    }
    console.log("stexcvec");

    setTimeout(() => {
        for (let i = 0; i < obgarr.length; ++i){
            obgarr[i] = null;
        }
        console.log('Jnjvec');
    },1000);
}

fooobg(10000);