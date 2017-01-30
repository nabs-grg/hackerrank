function main() {
    var N = parseInt(readLine());
    var weird = 'Weird';
    var notWeird = 'Not Weird';
    //console.log(N % 2 == 0)
    if(N % 2 != 0){
        //return true;
        console.log(weird);
    } else if(N % 2 == 0 && N <= 5){
        console.log(notWeird);
    } else if(N % 2 == 0 && N >= 5 && N <= 20){
        console.log(weird);
    } else if(N % 2 == 0 && N > 20){
        console.log(notWeird);
    }
    
}