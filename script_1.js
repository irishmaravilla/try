const first = () => {
    const greet = 'Hi';
    const second = () => {
        alert (greet);
    }
    return second;
}

const newFunc = first ();
newFunc();

const array = [ 1, 2 , 5 , 10];
dgtdryt 