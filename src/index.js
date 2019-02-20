/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let count = 0;

    for (let i = 0; i < preferences.length; i++) {
        let first = preferences[i];
        for (let j = i + 1; j < preferences.length; j++) {
            let second = preferences[j];
            for (let k = i + 1; k < preferences.length; k++) {
                let third = preferences[k];

                if ( (i + 1) == third && (j + 1) == first && (k + 1) == second ) {
                    count++;
                }
            }
        }
    }

    return count;
};
