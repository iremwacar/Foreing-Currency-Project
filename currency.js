class Currency{
    constructor(firstCurrrency,secondCurrency){
        this.firstCurrrency = firstCurrrency;
        this.secondCurrency = secondCurrency;
        this.url = "https://v6.exchangerate-api.com/v6/e92a2ef79ac0cb9b5c7828f8/latest";
        this.amount = null;
    }

    exchange(){
        return new Promise((resolve,reject) => {
            fetch(this.url + this.firstCurrrency)
        .then(response =>response.json())
        .then(data => {
            const parity = data["rates"][this.secondCurrency];
            const amount2 = Number(this.amount);
            let total = parity*amount2;
            resolve(total);
        })
        .catch(err => console.log(err));
        });
        
    }
    changeAmount(amount){
        this.amount = amount;
    }
    changeFirstCurrency(newFirstCurrency){
        this.firstCurrency = newFirstCurrency;
    }
    changeSecontCurrency(newSecontCurrency){
        this.secondCurrency = newSecontCurrency;
    }
}
