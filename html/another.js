var mainTypes = {
    "鱿鱼": 17,
    "鸭肠": 16,
    "牛肉": 17,
    "鸡胗": 17,
    "咸肉": 17,
    "鸡肉": 16,
    "脆骨肠": 15,
    "热狗肠": 15,
    "肉丝": 15,
    "腊肠": 15,
    "火腿": 14,
    "培根": 15,
    "里脊肉": 15,    
};

var baseTypes = {
    "面":0,
    "饭":0,
    "河粉":0,
    "粉丝" : 0,
    "米线" : 0,
    "方便面" : 0,

};

var ingredientTypes = {
    "鱿鱼": 5,
    "咸鸭蛋": 2,
    "鸭肠": 4,
    "鸡胗": 5,
    "金针菇": 2,
    "炒鸡蛋": 2,
    "荷包蛋": 2,
    "里脊肉": 3,
    "培根": 3,
    "番茄": 2,
    "热狗肠": 3,
    "脆骨肠": 3,
    "老干妈": 3,
    "花生米":3,
};
var selectElement = document.getElementById("ingredient-select");
var rice;

function getRandomKey(obj) {
    var keys = Object.keys(obj);
    return keys[keys.length * Math.random() << 0];
}
document.getElementById("main-btn").addEventListener("click", function() {
    var mainType = getRandomKey(mainTypes)
    document.getElementById("main-box").textContent = mainType;
});
document.getElementById("rice-btn").addEventListener("click", function() {
    var baseType = getRandomKey(baseTypes)
    document.getElementById("base-box").textContent = baseType;
});
document.getElementById("ingredient-btn").addEventListener("click", function() {
    var riceType = getRandomKey(riceTypes)
    document.getElementById("rice-box").textContent = riceType;
});

for (var ingredient in ingredientTypes) {
    var optionElement = document.createElement("option");
    optionElement.value = ingredient;
    optionElement.textContent = ingredient;
    selectElement.appendChild(optionElement);
}

document.getElementById("main-select").addEventListener("change", function() {
    var main = this.value;
    document.getElementById("main-box").textContent = main;
});

document.getElementById("base-select").addEventListener("change", function() {
    var base = this.value;
    document.getElementById("base-box").textContent = base;
});

document.getElementById("price-btn").addEventListener("click", function() {
    var main = document.getElementById("main-box").textContent;
    var base = document.getElementById("base-box").textContent;
    var selectedIngredients = Array.from(document.getElementById("ingredient-select").selectedOptions).map(option => option.value);

    if (!mainTypes[main]) {
        alert("主食种类不存在");
        return;
    }
    if(selectedIngredients.length>=2){
        alert("酱紫能吃？");
    }
    var ingredientPrice = selectedIngredients.reduce(function(total, ingredient) {
        if (!ingredientTypes[ingredient]) {
            alert("加料种类不存在");
            return total;
        }

        return total + ingredientTypes[ingredient];
    }, 0);

    var price = mainTypes[main] + baseTypes[base] + ingredientPrice;

    document.getElementById("ingredient-box").textContent = selectedIngredients.join(", ");
    document.getElementById("price-box").textContent = price;
});
