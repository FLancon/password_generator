/**
 * à partir d'un tableau de caractères, vous devez générer un mot de passe de 8 caractères
 * bonus : le mot de passe contient  minimum 1 majuscule, 1 caractère spécial & 1 nombre
 */

 
    const numberChars = "0123456789";
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const otherChars = "`~!@#$%^&*()-_=+[{]}|;:',<.>/?";
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`~!@#$%^&*()-_=+[{]}|;:',<.>/?"

// Genere un mdp à "n" caractères depuis la liste "characters"
    // function passwordGenerate(n) {
    //     let result = "";
    //     for ( let i = 0; i < n; i++ ) {
    //         result += characters.charAt(Math.random() * characters.length);
    //     }
    //     return result;
    // }

    // console.log(passwordGenerate(8));



    // Genere un mdp avec : "1" Numberchars + "1" upperChars + "1" otherChars +  "5" lowerChars

    // function passwordGenerate() {
    //     let result = "";

    //     for ( let i = 0; i < 5; i++ ) {
    //         result += lowerChars.charAt(Math.random() * lowerChars.length);
    //     }
    //         result += upperChars.charAt(Math.random() * upperChars.length);

    //         result += otherChars.charAt(Math.random() * otherChars.length);

    //         result += numberChars.charAt(Math.random() * numberChars.length);


    //     return shuffle(result);
    // }

    // function shuffle(s) {
    //     var arr = s.split('');           // Convert String to array
        
    //     arr.sort(function() {
    //       return 0.5 - Math.random();
    //     });  
    //     s = arr.join('');                // Convert Array to string
    //     return s;                        // Return shuffled string
    //   }
      


    // console.log(passwordGenerate());


// Genere un mdp avec : "1" Numberchars + "1" upperChars + "1" otherChars +  "5" Charactere(aléatoire)


    function passwordGenerate() {
        let result = "";

        for ( let i = 0; i < 5; i++ ) {
            result += characters.charAt(Math.random() * characters.length);
        }
            result += upperChars.charAt(Math.random() * upperChars.length);

            result += otherChars.charAt(Math.random() * otherChars.length);

            result += numberChars.charAt(Math.random() * numberChars.length);


        return shuffle(result);
    }

    function shuffle(s) {
        var arr = s.split('');           // Convert String to array
        
        arr.sort(function() {
          return 0.5 - Math.random();
        });  
        s = arr.join('');                // Convert Array to string
        return s;                        // Return shuffled string
      }
      

    console.log(passwordGenerate());