const prompt = require('prompt-sync')({sigint: true});
const fieldGeneration = require('./fieldGeneration')


class Field {
    constructor(myField) {
        //player attributes
        this.player = '*'
        this.playerPos = [0, 0]

        //map attributes
        this.hole = 'O'
        this.hat = '^'
        this.fieldCharacter = '░'

        //field
        this.myField = myField;
        this.myFieldBackup = JSON.parse(JSON.stringify(this.myField))

        //game tracking 
        this.counter = 0 
        
    }
 
 //percentage should cover field in holes
 //should return a hat somehwere in the field 
    static generateField(rows, cols, percentage=false) {    

        const newField = []

        for(let i = 0; i < rows; i++){
            let newRow = []
            for(let z = 0; z < cols; z++){
                newRow.push('░')
            }
            newField.push(newRow)
        }
        

        fieldGeneration.generateHoles(newField, rows, cols, percentage)
        fieldGeneration.generatePlayer(newField, rows, cols)
        fieldGeneration.generateHat(newField, rows, cols)
        fieldGeneration.printField(newField)
        //startGame()
        
         
    }
  
    printMyField() {

        this.myField[0][0] = this.player
        this.myField.forEach(field =>{
            console.log(`${field.toString()}\n`)
        })
    }

    getIndex() {

        let movesIndex = ['W', 'A', 'S', 'D']
        let playerMove = prompt('Input move: ') //make uppercase

        const movesArr = 
        [
            [-1, 0],
            [0, -1],
            [1, 0],
            [0, 1]
        ]

        let filteredMoves;
         movesIndex.filter(move => {
            if(move === playerMove.toUpperCase()){
                 filteredMoves = movesArr[movesIndex.indexOf(move)]
            }
        })
        return filteredMoves

    }

    checkWin(check) {

        if(check === this.hole || typeof check === 'undefined') {
            let restart = prompt('aww you lost :( wanna restart? y/n)')

            if(restart.toUpperCase() === 'Y') {
                this.playerPos[0] = 0
                this.playerPos[1] = 0
                this.restartGame()
            }else if(restart.toUpperCase() === 'N'){
                throw console.log('Thanks for playing')
            } 
        } else if(check === this.hat){
            throw console.log('Winner!')
        } this.startGame()
    }

    movePlayer() {
        //takes into account players moves 
        this.counter ++
        console.log("🚀 Player Moves:", this.counter)
        let move = this.getIndex()
        let check = this.myField[this.playerPos[0] + move[0]][this.playerPos[1] + move[1]]

      try {  

        while (check !== 'undefined' || check != this.hole) {
            console.log(check)
            //keeps track of player's movement
            this.playerPos[0] += move[0]
            this.playerPos[1] += move[1]

            //moves player within the field
            this.myField[this.playerPos[0]][this.playerPos[1]] = this.player
            this.checkWin(check)
        } checkWin(check)
    } catch (e) {
        console.log('out of bounds' + e)
        /*
        add code to end game or to return to previous pos
        */
    }


    }

    restartGame(){
        //this.startGame()
        this.counter = 0
        this.myField = JSON.parse(JSON.stringify(this.myFieldBackup))
        this.startGame()


    }

    startGame() {
        this.printMyField()
        this.movePlayer()
        
    }
  
}
const field = [
    ['░', 'O', '░',],
    ['░', '░', '░'],
  
]

  /*
    idea 1: 
    declare moves:
    W - [0, -1]
    A - [1, 0]
    S - [1, 0]
    D - [0, +1]

    const field = [
       0    1    2
   0 ['░', '░', '░'],
   1 ['░', '░', '░'],
   2 ['░', '░', '░']
]
    */



let newGame = new Field(field)

//newGame.startGame()

Field.generateField(5, 5, 25)





