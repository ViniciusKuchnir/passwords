export function generatePassword(quantityCharacters, password, setValue){
    const characters = 'aAbB6c.CdDe1EfFgGhH-iIj0JkKl@Lm5MnN3oOpPqQ2_rRsStTuUv7VwWxXy4YzZ89';
    password = "";
    for(let i=0; i < quantityCharacters; i++){
        let randomNumber = Math.floor(Math.random() * (characters.length - 1))
        password += characters[randomNumber];
    }
    setValue(password);
}