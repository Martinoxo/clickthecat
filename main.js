coinsstr = document.getElementById("coinsstr")
coinsstr = document.getElementById("coinsstr")
audio = new Audio('meow.wav')

coins = 0
cpc = 5
items = []
owneditems = []

class Item {
    constructor(name,value) {
      this.name = name
      this.value = value
    }
    init() {
        items.push(this)
    }
    sell() {
        owneditems.pop(this)
        coins = coins + this.value
    }
}

function Update() {
    coinsstr.innerHTML = "Coins: " + coins
    document.title = coins + " Coins"
}

function Click() {
    coins = coins + cpc
    audio.load()
    audio.play()
    Update()
}

testitem = new Item("Test",10000)
testitem.init()

Update()