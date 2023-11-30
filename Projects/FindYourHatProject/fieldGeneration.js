module.exports = {
    generateHoles: (field, rows, cols, percentage=false) => {

        //total number of fieldChars 
        let whole = rows * cols
        //amount of fieldChars to be changed to holes
        let segment = whole * Math.floor(percentage) / 100
        let xAxis = () => Math.floor(Math.random() * cols)
        let yAxis = () => Math.floor(Math.random() * rows)

        const randomHoles = Math.floor(Math.random() * cols)

       if(percentage === false) { 
           if(field[yAxis()][xAxis()] === '░'){
            field[yAxis()][xAxis()] === '^'
           }
           for(let i = 0; i < randomHoles; i++) {
           if(field[yAxis()][xAxis()] === '░'){
            field[yAxis()][xAxis()] = 'O'
           }
       } return field
        } else {
            console.log(`${Math.floor(segment)} pieces will be converted to obstacles`)
            let i = 0; 
            while(i < segment) {
                let xAxis = Math.floor(Math.random() * cols)
                let yAxis = Math.floor(Math.random() * rows)
               
        
                if(field[yAxis][xAxis] === '░'){
                    i++
                    field[yAxis][xAxis] = 'O'
                }
            } return field
        }
    },

    generatePlayer: (field, rows, cols) =>{
        let i = 0;
        while(i < 1) {
            let xAxis = Math.floor(Math.random() * cols)
            let yAxis = Math.floor(Math.random() * rows)
           
    
            if(field[yAxis][xAxis] === '░'){
                i++
                field[yAxis][xAxis] = '*'
            }
        } return field

    },

    generateHat: (field, rows, cols) => {
        let i = 0;
        while(i < 1) {
            let xAxis = Math.floor(Math.random() * cols)
            let yAxis = Math.floor(Math.random() * rows)
           
    
            if(field[yAxis][xAxis] === '░'){
                i++
                field[yAxis][xAxis] = '^'
            }
        } return field
    },
    
    printField: (field) => {
        field.forEach(field =>{
            console.log(field.toString())
        }) 
    },

  
    
}