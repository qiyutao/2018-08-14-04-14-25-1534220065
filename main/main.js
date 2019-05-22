module.exports = function main(a) {
    var one = new Array(new Array("._.", "...", "._.", "._.", "...", "._.", "._.", "._.", "._.", "._."),
        new Array("|.|", "..|", "._|", "._|", "|_|", "|_.", "|_.", "..|", "|_|", "|_|"),
        new Array("|_|", "..|", "|_.", "._|", "..|", "._|", "|_|", "..|", "|_|", "..|"));

    var num = a.toString();
    var led = "";

    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < num.length - 1; j++) {
            led += one[i][num[j]] + " ";
        }
        led += one[i][num[num.length - 1]] + "\n";
    }
    
    return led;
};
