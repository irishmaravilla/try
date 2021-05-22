var to_do = [
    "clean room",
    "drink tea",
    "work",
    "liguan ang aso",
];

for (var i=0; i<to_do. length; i++) {
    // i=0; i<to_do.length kapag masmarami ang to do kesa sa i which is 0  i++ i+1=i 
    // length ay kung ilan ang quantity ni length 
    console.log( to_do[i], i)
    // kapag cinall ang to_do 
    // to_do[i]= to_do[i]+"!"

}

to_do.forEach(function(to_do, i){
    console.log(to_do,i);
})
