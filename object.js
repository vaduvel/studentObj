class Student {
    constructor(name, address, phone, course) {
        this.name = name,
            this.address = address,
            this.phone = phone,
            this.course = course
    }
    getInfo() {
        console.log("Name: " + this.name + ",", "Address: " +
            this.address + ",", "Phone Number: " + this.phone + ",", "Course: " +
            this.course)
    }

}

let StudentOne = new Student("Marinescu Alex", "Timisoara Nr:24", 0755456654, "Arte")
let StudentTwo = new Student("Pop Marian", "Oradea Nr:7", 0736743676, "Biologie")
let StudentThree = new Student("Vinstescu Andra", "Cluj Nr:110", 0775451504, "Geografie")

StudentOne.getInfo()
StudentTwo.getInfo()
StudentThree.getInfo()