// https://www.codewars.com/kata/61044b64704a9e0036162a1f

function sortThePile(pileOfTowels, weeklyUsedTowels) {
    let used = pileOfTowels.length - Math.max(...weeklyUsedTowels)

    for (let i = 0; i < weeklyUsedTowels.length ; i++){
        for (let j = used; j < pileOfTowels.length; j++){
            if(pileOfTowels[j] === "blue" && pileOfTowels[j+1] === "red" ){
                pileOfTowels[j] = "red";
                pileOfTowels[j+1] = "blue";
              i--;
              j--;
            }
        }
    }
    return pileOfTowels;
}