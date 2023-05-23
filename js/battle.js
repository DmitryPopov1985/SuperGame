class Bot {
    constructor() {
        this.health = Math.ceil((Math.random() * (160 - 60) + 60) / 10) * 10
        this.attack = Math.ceil(Math.random() * 10)
        this.dexterity = Math.ceil(Math.random() * 10)
    }
    attached(damage) {
        this.health = this.health - damage
    }
}


const bot = new Bot()
const userHP = document.querySelector('.js-hero__health')


userHP.innerHTML = user.getHealth()


const botProfile = document.querySelector('.js-bot')
const heroProfile = document.querySelector('.hero')
let [botHealth, botHead, botBody, botLegs] = [...botProfile.children]

botHealth.innerHTML = bot.health
user.setHealth()

console.log(bot.dexterity)



const exp = Math.ceil(bot.health * .3)

function kf(max, min) {
    const maxAttack = max + user.attack
    const minAttack = min + user.attack
    return Math.random() * (maxAttack - minAttack) + minAttack
}
function createDamage(a,b) {
    critUser = Math.ceil(Math.random() * 100)
    botDamage = Math.ceil(Math.random() * kf(a, b))
    userDamage = Math.ceil(Math.random() * (30 - 5) + 5) - user.protection
    dmg = { critUser, botDamage, userDamage }
    return dmg
}

function createDodge() {
    dodge = Math.ceil(Math.random() * 100)
    userDodge = Math.ceil(Math.random() * 100)
    return ddg = { dodge, userDodge }
}
function chanceToHit(c) {
    return chance = c - bot.dexterity + user.dexterity + user.accuracy
}
function userDead() {
    user.gameOver()
    botProfile.classList.add('bot__disabled')
    document.querySelector('.index').textContent = 'Ты проиграл...'
}
function createDiv(target, nameClass, text) {
    let newDiv = document.createElement('div')
    newDiv.classList.add(nameClass)
    newDiv.innerHTML = text
    target.appendChild(newDiv)
    setTimeout(() => {
        newDiv.classList.remove(nameClass)
        newDiv.innerHTML = ''
    }, 300)
}
function updateHealth() {
    user.setHealth()
            user.getHealth()
            userHP.innerHTML = user.getHealth()
}


function logicsBattle() {
    if (user.health <= 0) {
        userDead()
    }
    else if (bot.health > 0) {
        createDodge()
        if (ddg.dodge >= chance) {
            createDiv(botProfile, 'bot__info-attack', 'Промах')
            if (ddg.userDodge >= 80) {
                createDiv(heroProfile, 'user__info-attack', 'Промах')
            } else {
                user.atached(dmg.userDamage)
                createDiv(heroProfile, 'user__info-attack', `- ${dmg.userDamage}`)
            }
            updateHealth()
        } else {
            if (dmg.critUser >= 100 - user.critical) {
                bot.attached(dmg.botDamage * 2)
                if (ddg.userDodge >= 80) {
                    createDiv(heroProfile, 'user__info-attack', 'Промах')
                } else {
                    user.atached(dmg.userDamage)
                    createDiv(heroProfile, 'user__info-attack', `- ${dmg.userDamage}`)
                }
                botHealth.innerHTML = bot.health
                updateHealth()
                createDiv(botProfile, 'bot__info-attack', `Крит  - ${dmg.botDamage * 2}`)
                
            } else {
                bot.attached(dmg.botDamage)
                if (ddg.userDodge >= 80) {
                    createDiv(heroProfile, 'user__info-attack', 'Промах')
                } else {
                    user.atached(dmg.userDamage)
                    createDiv(heroProfile, 'user__info-attack', `- ${dmg.userDamage}`)
                }
                botHealth.innerHTML = bot.health
                updateHealth()
                createDiv(botProfile, 'bot__info-attack', `- ${dmg.botDamage}`)    
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

    }
}


botHead.addEventListener('click',() => {createDamage(50,30), chanceToHit(70), logicsBattle()} )
botBody.addEventListener('click',() => {createDamage(30,10), chanceToHit(91), logicsBattle()} )
botLegs.addEventListener('click',() => {createDamage(40,20), chanceToHit(80), logicsBattle()} )
userHP.innerHTML = user.getHealth()





