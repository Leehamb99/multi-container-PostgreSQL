const dogData = [{name: 'Masha', age: 9}]


class Dog {
    constructor(data){
        this.id = data._id
        this.name = data.name
        this.age = data.age
    }

    static get all(){
        return new Promise(async (resolve, reject) => {
            try{
                const dogs = dogData.map(d => new dogs(d))
                if (!dogs.length) {throw new Error('No doggos here"')}
                resolve(dogs)
            } catch (err){
                reject(`Error retrieving dogs: ${err.message}`)
            }
        })
    }
}

module.exports = Dog;

