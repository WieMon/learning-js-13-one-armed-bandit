class Wallet {
  constructor(money) {
    let _money = money;
    //Taking the actual value of wallet
    this.getWalletValue = () => _money;
    //console.log('this:', this)

    //Checking if there is enough money in the wallet
    this.checkCanPlay = value => {
      if (_money >=  value) return true;
      return false
    }

    this.changeWallet = (value, type = '+') => {
      if (typeof value ==='number' && !isNaN(value)) {
        if (type = '+') {
          return _money += value;
        } else if (type === '-') {
          return _money -= value;
        } else {
          throw new Error ('incorrect type of action')
        }
      } else {
        console.log(typeof value);
        throw new Error ('incorrect number')
      }
    }
  }
}

const wallet = new Wallet(200);