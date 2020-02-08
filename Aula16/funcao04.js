let fat = function(f){
    var res = 1
    for(f; 1 < f; f--){
        res *= f
    }
    return res
}
console.log(fat(5))