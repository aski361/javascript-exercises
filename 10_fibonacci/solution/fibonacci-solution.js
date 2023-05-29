const fibonacci = function(number) {
    if (number==0) {
        return 0
    } else if (number==1) {
        return 1;
    } else if (number>1) {
        let a = 0;
        let b = 1
        for(let i=1;i<number;i++) {
            const temp = b;
            b = a + b;
            a = temp;
        }
        return b
    }
};

module.exports = fibonacci;
