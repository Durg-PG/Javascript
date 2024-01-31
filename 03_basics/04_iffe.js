// Immedaitely Invoked Function Expresion(IIFE)
// Used to avoid confusion amoung the globally declared variables.

(function chai(){
    console.log("DB Connected");
})();

( (name) => {
    console.log(`DB Connected TWO ${name}`);
})('Durgesh')