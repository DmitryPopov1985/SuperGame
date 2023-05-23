class Bot {
    constructor( ) {
        this.health = Math.ceil((Math.random()*(600 -60) + 60)/10)*10
            this.attack = Math.ceil(Math.random()*10)
            this.dexterity = Math.ceil(Math.random()*10)
    }
    attached(damage) {
        this.health = this.health - damage
    }
}


const bot = new Bot()
const userHP = document.querySelector('.js-hero__health')


userHP.innerHTML = user.getHealth()


const botProfile = document.querySelector('.js-bot')
let [botHealth, botHead, botBody, botLegs] = [...botProfile.children]

botHealth.innerHTML = bot.health
user.setHealth()

console.log(bot.dexterity)



const exp = Math.ceil(bot.health * .3)

//====================================================================
botHead.addEventListener('click', () => {
    const kf = (max, min) => {
        const maxAttack = max + user.attack
        const minAttack = min + user.attack
        return Math.random() * (maxAttack - minAttack) + minAttack
    }

    const critUser = Math.ceil(Math.random()*100)
    const headDamage = Math.ceil(kf(40, 20))
    const userDamage = Math.ceil(Math.random() * (40 - 5) + 5) - user.protection
    if (user.health <= 0) {
        user.gameOver()
        botProfile.classList.add('bot__disabled')
        document.querySelector('.index').textContent = 'Ты проиграл...'
    } else if (bot.health > 0) {
        const dodge = Math.ceil(Math.random() * 100)
        if (dodge >= 70 - bot.dexterity + user.dexterity + user.accuracy) {
            let newDiv = document.createElement('div')
            newDiv.classList.add('bot__info-attack')
            newDiv.innerHTML = 'Промах'
            botProfile.appendChild(newDiv)
            user.atached(userDamage)
            user.setHealth()
            user.getHealth()
            userHP.innerHTML = user.getHealth()
            setTimeout(() => {
                newDiv.classList.remove('bot__info-attack')
                newDiv.innerHTML = ''
            }, 300)
        } else {
            if (critUser >= 100 - user.critical) {
            bot.attached(headDamage * 2)
            user.atached(userDamage)
            user.setHealth()
            user.getHealth()
            let newDiv = document.createElement('div')
            newDiv.classList.add('bot__info-attack')
            newDiv.innerHTML = 'Крит ' + '-' + headDamage*2
            botProfile.appendChild(newDiv)
            setTimeout(() => {
                newDiv.classList.remove('bot__info-attack')
                newDiv.innerHTML = ''
            }, 300)
            userHP.innerHTML = user.getHealth()
            userHealth.innerHTML = 'Здоровье:' + Number(localStorage.getItem('health'))
            botHealth.innerHTML = bot.health
        } else {
            bot.attached(headDamage)
            user.atached(userDamage)
            user.setHealth()
            user.getHealth()
            let newDiv = document.createElement('div')
            newDiv.classList.add('bot__info-attack')
            newDiv.innerHTML = '-' + headDamage
            botProfile.appendChild(newDiv)
            setTimeout(() => {
                newDiv.classList.remove('bot__info-attack')
                newDiv.innerHTML = ''
            }, 300)
            userHP.innerHTML = user.getHealth()
            userHealth.innerHTML = 'Здоровье:' + Number(localStorage.getItem('health'))
            botHealth.innerHTML = bot.health
        }
            
        }

        return
    } else {
        user.win(3, exp)
        user.setBalance()
        user.getBalance()
        user.setScore()
        user.getScore()
        user.setLevel()
        user.getLevel()
        botProfile.classList.add('bot__disabled')
        document.querySelector('.index').textContent = 'Победа!!!'
        userLevel.innerHTML = 'Уровень:' + Number(localStorage.getItem('level'))
        userBalance.innerHTML = 'Баланс:' + Number(localStorage.getItem('balance'))
        userScore.innerHTML = 'Опыт:' + Number(localStorage.getItem('score'))
    }


})


// =======================================================================================
botBody.addEventListener('click', () => {
    const kf = (max, min) => {
        const maxAttack = max + user.attack
        const minAttack = min + user.attack
        return Math.random() * (maxAttack - minAttack) + minAttack
    }

    const critUser = Math.ceil(Math.random()*100)
    const bodyDamage = Math.ceil(Math.random() * kf(20, 10))
    const userDamage = Math.ceil(Math.random() * (40 - 5) + 5) - user.protection
    if (user.health <= 0) {
        user.gameOver()
        botProfile.classList.add('bot__disabled')
        document.querySelector('.index').textContent = 'Ты проиграл...'

    }
    else if (bot.health > 0) {
        const dodge = Math.ceil(Math.random() * 100)
        if (dodge >= 91 - bot.dexterity + user.dexterity + user.accuracy) {
            let newDiv = document.createElement('div')
            newDiv.classList.add('bot__info-attack')
            newDiv.innerHTML = 'Промах'
            botProfile.appendChild(newDiv)
            user.atached(userDamage)
            user.setHealth()
            user.getHealth()
            userHP.innerHTML = user.getHealth()
            setTimeout(() => {
                newDiv.classList.remove('bot__info-attack')
                newDiv.innerHTML = ''
            }, 300)
        } else {
            if (critUser >= 100 - user.critical) {
                bot.attached(bodyDamage * 2)
                user.atached(userDamage)
                botHealth.innerHTML = bot.health
                user.setHealth()
                user.getHealth()
                let newDiv = document.createElement('div')
                newDiv.classList.add('bot__info-attack')
                newDiv.innerHTML = 'Крит' + '-' + bodyDamage*2
                botProfile.appendChild(newDiv)
               
                setTimeout(() => {
                    newDiv.classList.remove('bot__info-attack')
                    newDiv.innerHTML = ''
                }, 300)
                userHP.innerHTML = user.getHealth()
                userHealth.innerHTML = 'Здоровье:' + Number(localStorage.getItem('health'))
            } else {
                bot.attached(bodyDamage)
                user.atached(userDamage)
                botHealth.innerHTML = bot.health
                user.setHealth()
                user.getHealth()
                let newDiv = document.createElement('div')
                newDiv.classList.add('bot__info-attack')
                newDiv.innerHTML = '-' + bodyDamage
                botProfile.appendChild(newDiv)
               
                setTimeout(() => {
                    newDiv.classList.remove('bot__info-attack')
                    newDiv.innerHTML = ''
                }, 300)
                userHP.innerHTML = user.getHealth()
                userHealth.innerHTML = 'Здоровье:' + Number(localStorage.getItem('health'))
            }
          
        }

        return
    } else {
        user.win(3,exp)
        user.setBalance()
        user.getBalance()
        user.setScore()
        user.getScore()
        user.setLevel()
        user.getLevel()
        botProfile.classList.add('bot__disabled')
        document.querySelector('.index').textContent = 'Победа!!!'
        userLevel.innerHTML = 'Уровень:' + Number(localStorage.getItem('level'))
        userBalance.innerHTML = 'Баланс:' + Number(localStorage.getItem('balance'))
        userScore.innerHTML = 'Опыт:' + Number(localStorage.getItem('score'))

    }
})






//===================================================================================
botLegs.addEventListener('click', () => {
    const kf = (max, min) => {
        const maxAttack = max + user.attack
        const minAttack = min + user.attack
        return Math.random() * (maxAttack - minAttack) + minAttack
    }

    const critUser = Math.ceil(Math.random()*100)
    const userDamage = Math.ceil(Math.random() * (40 - 5) + 5) - user.protection
    const legsDamage = Math.ceil(Math.random() * kf(30, 15))
    if (user.health <= 0) {
        user.gameOver()
        botProfile.classList.add('bot__disabled')
        document.querySelector('.index').textContent = 'Ты проиграл...'

    }
    else if (bot.health > 0) {
        const dodge = Math.ceil(Math.random() * 100)
        
        if (dodge >= 75 - bot.dexterity + user.dexterity + user.accuracy) {
            let newDiv = document.createElement('div')
            newDiv.classList.add('bot__info-attack')
            newDiv.innerHTML = 'Промах'
            botProfile.appendChild(newDiv)
            user.atached(userDamage)
            user.setHealth()
            user.getHealth()
            userHP.innerHTML = user.getHealth()
            setTimeout(() => {
                newDiv.classList.remove('bot__info-attack')
                newDiv.innerHTML = ''
            }, 300)
        } else {
            if (critUser >= 100 - user.critical) {
                bot.attached(legsDamage * 2)
                user.atached(userDamage)
                botHealth.innerHTML = bot.health
                user.setHealth()
                user.getHealth()
                let newDiv = document.createElement('div')
                newDiv.classList.add('bot__info-attack')
                newDiv.innerHTML = 'Крит ' + '-' + legsDamage*2
                botProfile.appendChild(newDiv)
                
                setTimeout(() => {
                    newDiv.classList.remove('bot__info-attack')
                    newDiv.innerHTML = ''
                }, 300)
                userHP.innerHTML = user.getHealth()
                userHealth.innerHTML = 'Здоровье:' + Number(localStorage.getItem('health'))
            } else {
                bot.attached(legsDamage)
                user.atached(userDamage)
                botHealth.innerHTML = bot.health
                user.setHealth()
                user.getHealth()
                let newDiv = document.createElement('div')
                newDiv.classList.add('bot__info-attack')
                newDiv.innerHTML = '-' + legsDamage
                botProfile.appendChild(newDiv)
                
                setTimeout(() => {
                    newDiv.classList.remove('bot__info-attack')
                    newDiv.innerHTML = ''
                }, 300)
                userHP.innerHTML = user.getHealth()
                userHealth.innerHTML = 'Здоровье:' + Number(localStorage.getItem('health'))
            }
           
        }

        return
    } else {
        user.win(3, exp)
        user.setBalance()
        user.getBalance()
        user.setScore()
        user.getScore()
        user.setLevel()
        user.getLevel()
        botProfile.classList.add('bot__disabled')
        document.querySelector('.index').textContent = 'Победа!!!'
        userLevel.innerHTML = 'Уровень:' + Number(localStorage.getItem('level'))
        userBalance.innerHTML = 'Баланс:' + Number(localStorage.getItem('balance'))
        userScore.innerHTML = 'Опыт:' + Number(localStorage.getItem('score'))
    }
})

userHP.innerHTML = user.getHealth()
userHealth.innerHTML = 'Здоровье:' + Number(localStorage.getItem('health'))
userAttack.innerHTML = 'Атака:' + user.attack
userProtection.innerHTML = 'Защита:' + user.protection

