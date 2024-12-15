/**
 * Calculates the area of a circle given its radius.
 * @param {number} radius - The radius of the circle
 * @returns {number} The calculated area of the circle
 * @throws {Error} If radius is negative
 */
function calculateCircleArea(radius) {
    // Input validation
    if (radius < 0) {
        throw new Error('Radius cannot be negative');
    }

    // Precise calculation using parameter
    return Math.PI * Math.pow(radius, 2);
}

/**
 * Main function to demonstrate area calculation.
 */
function main() {
    try {
        const radius = 5;
        const area = calculateCircleArea(radius);
        console.log(`The area of a circle with radius ${radius} is: ${area.toFixed(2)}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

main();