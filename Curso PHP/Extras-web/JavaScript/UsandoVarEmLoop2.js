// Usando VAR
const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function(){
        console.log(i)
    })
}
funcs[2]()
funcs[8]()

// Usando LET

const func = []

for (let i = 0; i < 10; i++) {
    func.push(function(){
        console.log(i)
    })
}
func[2]()
func[8]()
