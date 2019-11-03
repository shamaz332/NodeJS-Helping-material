module.exports = (x, y, callback) => {
    if (x <= 0 || y <= 0) {
        //jb b hmm error pass krty hain tb 2nd parameter ko null chor dain gayh
        setTimeout(() => callback(new Error('ewrroe'), null), 2000)
    }
    else {
        //ab hm else part may value bhaj rhy hain.es k lye hmo first ko null krain gay r 2nd waly may values pass krain gay.
        setTimeout(() => callback(null, {


            perameter: () => (2 * (x + y)),
            area: () => (x * y)

        }), 2000)

    }
}




// exports.perameter= (x, y) => (2 * (x + y)),
// exports.area= (x, y) => (x * y)
