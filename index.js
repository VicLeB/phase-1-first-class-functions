function receivesAFunction(cb){
    cb();
};

function simplePrint(){
    console.log("hello, world!")
}

function returnsANamedFunction(){
    return simplePrint;
}

function returnsAnAnonymousFunction(){
    return () => console.log("anonymous function");
}