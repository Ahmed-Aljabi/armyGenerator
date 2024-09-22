// This is my JavaScript code

// Function to generate a random army
function generateRandomArmy(totalTroops, types) {
    // Ensure that the total number of types is less than or equal to the totalTroops
    if (types.length > totalTroops) {
        throw new Error("Total number of troop types exceeds total troops.");
    }

    let remainingTroops = totalTroops;
    let army = {};

    // Assign 1 troop to each type initially to satisfy the condition that each troop type must be > 0
    types.forEach(type => {
        army[type] = 1;
        remainingTroops--;
    });

    // Randomly distribute the remaining troops among the types
    while (remainingTroops > 0) {
        const randomType = types[Math.floor(Math.random() * types.length)];
        army[randomType]++;
        remainingTroops--;
    }

    return army;
}

// Example usage, and testing with different inputs:
const totalTroops1 = 167;
const troopTypes1 = ["Spearmen", "Swordsmen", "Archers"];

const totalTroops2 = 120;
const troopTypes2 = ["Spearmen", "Swordsmen", "Archers", "Trebuchets"];

const totalTroops3 = 80;
const troopTypes3 = ["Spearmen", "Archers", "Trebuchets"];

const totalTroops4 = 2;
const troopTypes4 = ["Spearmen", "Archers", "Trebuchets"];

console.log("Example 1:", generateRandomArmy(totalTroops1, troopTypes1));
console.log("Example 2:", generateRandomArmy(totalTroops2, troopTypes2));
console.log("Example 3:", generateRandomArmy(totalTroops3, troopTypes3));
console.log("Example 4:", generateRandomArmy(totalTroops4, troopTypes4)); // This should throw an error
