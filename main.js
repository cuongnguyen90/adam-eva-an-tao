const WEIGHT = 10;
const MALE = 1;
let Apple = function () {
    this.setWeight = function () {
        this.weight = WEIGHT;
    }

    this.getWeight = function () {
        return this.weight;
    }
    this.decreaseApple = function () {
        this.weight -=1;
        return this.weight;
    }
    this.isEmpty = function () {
        if (this.getWeight() > 0){
            return false;
        }else {
            return true;
        }
    }
}

let Human = function () {
    this.name = null;
    this.gender = null;
    this.weight = null;

    this.setGender = function (gender) {
        this.gender = gender
    }

    this.isMale = function () {
        if (this.gender == MALE){
            return true;
        }else {
            return false;
        }
    }

    this.setName = function (name) {
        this.name = name
    }

    this.getName = function () {
        return this.name;
    }

    this.setWeight = function (weight) {
        this.weight = weight;
    }
    this.getWeight = function () {
        return this.weight;

    }

    this.checkApple = function (apple) {
        if (apple.isEmpty()){
            return false
        }else {
            return true
        }

    }

    this.say = function (string) {
        console.log(string);
    }

    this.eat = function (apple) {

        if (this.checkApple(apple)){
            this.weight += 1;
            return apple.decreaseApple()
        }else {
            alert("het tao")
        }
    }
}

let apple = new Apple();
apple.setWeight();
apple.getWeight();


let adam = new Human();
adam.setWeight(80);

let eva = new Human();
eva.setWeight(60);



function AdamEat(apple) {
    adam.checkApple(apple);
    adam.say("Toi thich an tao");
    adam.eat(apple);
    count();
}
function EvaEat(apple) {
    eva.checkApple(apple);
    eva.say("Tao thich an toi");
    eva.eat(apple);
    count();
}

function init() {
    content = document.createElement('div');
    content.id = "display";
    document.body.appendChild(content);
    document.getElementById('display').innerHTML = "<div class=\"main\" style=\"text-align: center\">\n" +
        "    <input type=\"button\" onclick=\'AdamEat(apple)\' value=\"Adam nang "+adam.weight+"\">\n" +
        "    <input type=\"text\" name=\"\" id=\"apple\" value=\"Con "+apple.getWeight()+" mieng tao\" disabled>\n" +
        "    <input type=\"button\" value=\"Eva nang "+eva.weight+"\" onclick=\'EvaEat(apple)\'>\n" +
        "</div>";
}

function count() {
    document.getElementById('display').innerHTML = "<div class=\"main\" style=\"text-align: center\">\n" +
        "    <input type=\"button\" onclick=\'AdamEat(apple)\' value=\"Adam nang "+adam.weight+"\">\n" +
        "    <input type=\"text\" name=\"\" id=\"apple\" value=\"Con "+apple.getWeight()+" mieng tao\" disabled>\n" +
        "    <input type=\"button\" value=\"Eva nang "+eva.weight+"\" onclick=\'EvaEat(apple)\'>\n" +
        "</div>";

}

