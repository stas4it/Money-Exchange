// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let money=currency;
    let coins={"H":0,"Q":0,"D":0,"N":0,"P":0}
    let H=0;
    let Q=0;
    let D=0;
    let N=0;
    let P=0;
    let coinsKeys=Object.keys(coins);
    if (money<=0) {
        let error = {};
        return error;
    }
    if (money>10000) {
        let error = {error: "You are rich, my friend! We don't have so much coins for exchange"};
        return error;
    }
    if (money>=50) {
        H=Math.floor(money/50);
        money-=H*50;
        coins.H=H;
    }
    if (money>=25) {
        Q=Math.floor(money/25);
        money-=Q*25;
        coins.Q=Q;
    }
    if (money>=10) {
        D=Math.floor(money/10);
        money-=D*10;
        coins.D=D;
    }
    if (money>=5) {
        N=Math.floor(money/5);
        money-=N*5;
        coins.N=N;
    }
    if (money>=1) {
        P=money;
        coins.P=P;
    }
    
    for (let i=0, length=coinsKeys.length; i<length; i++) {
        if (coins[coinsKeys[i]]===0) {
            delete coins[coinsKeys[i]];
        } 
    }
    return coins;
}
