/**
 * Sakinys su automobilio modeliu, bako dydžiu, sąnaudomis
 * @param {string} model automobilio modelis
 * @param {number} liters bako dydis
 * @param {number} consumption1 sąnaudos, su kuriomis galima nuvažiuoti magistralej 6l/100km
 * @param {number} consumption2 sąnaudos, su kuriomis galima nuvažiuoti vidutiniskai 7l/100km
 * @param {number} consumption3 sąnaudos, su kuriomis galima nuvažiuoti mieste 8l/100km
 * @returns {string} Sakinys
 */


function car(model, liters, consumption1, consumption2, consumption3) {


    return `${model} su ${liters}l baku, gali nuvaziuoti ${(liters*100/consumption1).toFixed(0)}km (magistralej, kai sanaudos yra ${consumption1}l/100km), ${(liters*100/consumption2).toFixed(0)}km (vidutiniskai, kai sanaudos yra ${consumption2}l/100km) ir ${(liters*100/consumption3).toFixed(0)}km (mieste, kai sanaudos yra ${consumption3}l/100km).`
}
module.exports = car;