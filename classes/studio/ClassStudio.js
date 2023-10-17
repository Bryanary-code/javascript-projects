//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(newScore) {
        this.scores.push(newScore)
    }
    average() {
        let total = 0;
        for(let i = 0; i < this.scores.length; i++) {
            total += this.scores[i]
        }
        let average = total / this.scores.length
        let roundedAvg = Math.round(average * 10)/ 10
        return roundedAvg
    }

    status(avgScore) {
        if (avgScore >= 90) {
            return 'Accepted'
        } else if(avgScore >= 80 && avgScore <= 89) {
            return 'Reserve'
        } else if(avgScore >= 70 && avgScore <= 79) {
            return 'Probationary'
        } else {
            return 'Rejected'
        }
    }
}
    

let bear = new CrewCandidate('Bubba Bear', 135, [88, 85, 90]) 
let dog = new CrewCandidate('Merry Maltese', 1.5, [93,88,97])
let gator = new CrewCandidate('Glad Gator', 225, [75,78,62])

console.log(`${bear.name} earned an average test score of ${bear.average()} % and has a status of ${bear.status(bear.average())}.`)




//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

gator.addScore(93)
gator.average()
gator.status(gator.average())

gator.addScore(97)
gator.average()
console.log(gator.status(gator.average()))


