
class Hero {
    constructor(health=60,attack=0,protection=0, level= 0, balance = 0, score = 0, dexterity = 0, accuracy = 0,critical = 10) {
        this.health = health + this.getLevel() * 10
        this.level = level
        this.attack = attack + this.getLevel()
        this.protection = protection + this.getLevel()
        this.dexterity = dexterity + this.getLevel()
        this.accuracy = accuracy + this.getLevel()
        this.critical = critical + this.getLevel()
        this.balance = balance
        this.score = score
    }
    setHealth() {
      localStorage.setItem('health', this.health)
    }
    getHealth() {
      return Number(localStorage.getItem('health'))
    }
    setBalance() {
      localStorage.setItem('balance', this.balance)
    }
    getBalance() {
      return Number(localStorage.getItem('balance'))
    }
    setScore() {
      localStorage.setItem('score', this.score)
    }
    getScore() {
      return Number(localStorage.getItem('score'))
    }
    setLevel() {
      localStorage.setItem('level', this.level)
    }
    getLevel() {
      return Number(localStorage.getItem('level'))
    }
    
    gameOver() {
        
        //return this.health =  this.getHealth() + 60
        
    }
    win(rub, exp) {
       this.balance = this.getBalance() + rub
      this.score = this.getScore() + exp 
      this.level = this.getLevel()
      if(this.score >= 20 && this.score < 40) {  
        return this.level = 1
      } else if(this.score >= 100 && this.score < 200) {
        return this.level = 2
      } else if(this.score >= 200 && this.score < 300) {
        return this.level = 3
      } else if(this.score >= 300 && this.score < 500) {
        return this.level = 4
      } else if(this.score >= 500 && this.score < 800) {
        return this.level = 5
      } else if(this.score >= 800 && this.score < 1500) {
        return this.level = 6
      } else if(this.score >= 1500 && this.score < 2500) {
        return this.level = 7
      } else if(this.score >= 2500 && this.score < 4000) {
        return this.level = 8
      } else if(this.score >= 4000 && this.score < 6000) {
        return this.level = 9
      } else if(this.score >= 6000 && this.score < 9000) {
        return this.level = 10
      }
     
     
      return [this.balance, this.score, this.level]
       
    }
    atached(damage) {
     this.health = this.health - damage + this.protection
}

}
const user = new Hero()
const userProfile = document.querySelector('.profile')

let [userHealth, userLevel, userBalance, userScore, userAttack, userProtection, userDexterity, userAccuracy, userCritical] = [...userProfile.children]

userHealth.innerHTML = 'Здоровье: ' + Number(localStorage.getItem('health'))
userLevel.innerHTML = 'Уровень: ' + Number(localStorage.getItem('level'))
userBalance.innerHTML = 'Баланс: ' + Number(localStorage.getItem('balance'))
userScore.innerHTML = 'Опыт: ' + Number(localStorage.getItem('score'))
userAttack.innerHTML = 'Атака: ' + user.attack
userProtection.innerHTML = 'Защита: ' + user.protection
userDexterity.innerHTML = 'Ловкость :' + user.dexterity
userAccuracy.innerHTML = 'Точность: ' + user.accuracy
userCritical.innerHTML = 'Шанс критического удара: ' + user.critical + ' %'
