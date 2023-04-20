try{
    ab();
    // We have not declared the
    // function ab anywhere
} catch(e){
    console.log("Error : "+ e.name);
}