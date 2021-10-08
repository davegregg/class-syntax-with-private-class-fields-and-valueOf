class Counter {

    #count // This is a private property. It is ONLY accessible from WITHIN the code in this class.

    constructor (initial = 0) {
        this.#count = initial
    }

    #render () { // This is a private method. It can ONLY be accessed or run by code WITHIN this class.
        console.log(this.#count)
    }

    next () {
        this.#count += 1
        this.#render()

        return this.#count
    }

    prev () {
        this.#count -= 1
        this.#render()

        return this.#count
    }

    reset () {
        this.#count = 0
        this.#render()

        return this.#count
    }

    valueOf () { // This is a common method for objects in JS. If your class has a PRIMITIVE value which represents the class instance itself, then it is a good idea to define this method. For instance, in this case, the `#count` number primitive represents the state of this counter. So valueOf() is a good fit. It means that in some places, counter will be treated like a primitive.
        return this.#count
    }

    toString () { // This is a common method for objects in JS. This one is pretty universal. It gives you a chance to specify what the "string version" of this counter should be.
        return String(this.#count)
    }
    
}

const counter = new Counter()
counter.next()
counter.next()
counter.next()

console.log(counter + 3) // This ONLY works because of the "magic" of the valueOf() method. I am treating counter like a primitive number, which wouldn't usually work, because it is actually an object. But it works here, because I have specified the valueOf() method to associate my object with the primitive value (the number) which represents the current count of the counter.
