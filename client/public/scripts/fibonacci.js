class Fibonacci {
    constructor(n, element) {
        this.n = n
        this.fs = [0, 1]
        this.element = element
    }

    async calculate() {
        try {
            return await this.compute(this.n)
        } catch(error) {
            console.log(error.message)
            this.element.innerText = error.message
        }
    }

    async compute(n) {
        const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

        if( n < 0 ) {
            throw new Error("Invalid fibonacci number")
        }
        if( n <= 1 ) {
            return this.fs[n]
        }
        for( let i = 2; i < n; i++ ) {
            this.fs[i] = this.fs[i-1] + this.fs[i-2]
            console.log(`${i} = ${this.fs[i]}`)
            this.element.innerText += `${i} = ${this.fs[i]}`
            await sleep(1000)
        }
        return this.fs[this.fs.length-1]
    }
}

async function run() {
    const logElement = document.getElementById('results')
    const n = 4
    const fib = await new Fibonacci(n, logElement).calculate()
    console.log(`Fibonacci(${n}) is ${fib}`)
    logElement.innerText += fib
}
 
run()