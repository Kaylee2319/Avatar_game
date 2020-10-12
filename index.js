const prompt = require('readline-sync');

const N = "Neytiri"
const T = "Tsu'tey"
const H = "grace"

const savingTheWorld = () =>{
    console.log(`The humans learn about everything you have and more come to your world. \n As they start to take over one area at a time, and you have to decide what to do about it.\n`)
    let saveTheWorld = prompt.question(
        `A. Your tribe fights alone to get back your land.\nB. You surrender to the humans\nC. You get the other tribes in Pandora to fight the humans\n`)
        saveTheWorld = saveTheWorld.toUpperCase();
        if (saveTheWorld == 'A'){
                console.log(`You and your tribe die and Pandora falls\n You lose!\n`)
                
            } else if (saveTheWorld == 'B'){
                console.log(`You and your tribe die and Pandora falls\n You lose!\n`)
                
            } else{
                console.log(`There is a war on Pandora and the land is destroyed. Most of the life in the war was lost and it is unclear if life will ever recover. Pandora will never be the same.\n You lose!\n`)
               
            }

    return saveTheWorld;
}

let usersAvatarChoice = prompt.question(
    `Choose your avatar:\n N: ${N}\n T: ${T}\n`)
    usersAvatarChoice = usersAvatarChoice.toUpperCase();
   if (usersAvatarChoice == 'N') {
        console.log( `Welcome to Pandora ${N}\n`)
        console.log(`In the world of Pandora ${N} lives with her tribe called Omaticaya. \nPandora is a perfect world where everything is in sync creating the perfect ecosystem...   \nbut something was about to change.\n`)
        console.log(`Asleep in the tree, ${N} heard a rustling sound from the east, she goes to examine the noise.\n`)
        console.log(`As she stalked through the trees she see a stranger... a human and she is injured.\n`)
    } else {
            console.log(`Welcome to Pandora ${T}\n`)
            console.log(`In the world of Pandora ${T} lived in his tribe. \nPandora is a perfect world where everything is in sync creating the perfect ecosystem...   \nbut something was about to change.\n`)
            console.log(`Asleep in the tree, ${T} heard a rustling sound from the east, he goes to examine the noise.\n`)
            console.log(`As he stalked through the trees he see a stranger... a human and she is injured.\n`)
   }

   let helpChoice = prompt.question(
    `Should you help her? Y | N \n`)
    helpChoice = helpChoice.toUpperCase();
        if (helpChoice == 'Y') {
            console.log(`The human is brought back to the village and is healed by Eywa, the god of the Na’vi.\n`)
            console.log(`The human wakes up and you have to figure out who they are and what they want.\n How do you proceed?\n`)
                let knowTheHuman = prompt.question(
                    `A. You are nice to the human\nB. You are mean to the human\n`)
                        if (knowTheHuman == 'A'){
                            console.log(`You learn that the humans name is Grace. \n She comes from a planet called Earth and they came to Pandora with a 100 more people. \nThey came to explore the new world they have found.  \n`)
                            knowTheHuman = knowTheHuman.toUpperCase();
                                let toDoWithGrace = prompt.question(
                                   `Next you need to decide what to do with Grace. \nA. You show her your ways and teach her to see the world in the way you do.\nB. You turn her away and send her back to her people\n`)
                                   if (toDoWithGrace == 'A'){
                                    console.log(`You work with Grace day by day. You show her everything about Pandora and how everything is living in balance creating this perfect world. \nGrace realizes that what the rest of the humans want to do will destroy Pandora, and it is useless without the Na’vi. \nShe realizes she has to save this planet from dying. \n`)
                                    console.log(`Grace approaches you and tells you that her peoples plan is to destroy Pandora \njust for it's natural resources. Grace tells you she is on your side and wants to show them your ways \nby teaching them to see the world the way you do.\n`)
                                        let teachHumans = prompt.question(
                                            `Do you trust her?\n Y | N\n`)
                                            teachHumans = teachHumans.toUpperCase();
                                                if (teachHumans == 'Y'){
                                                    console.log(`Grace tells you that she is a scientist and that she has a way where humans can look like the Na,vi. \nShe can bring humans into their world in a safe way so they feel less threatened by the Na’vi that are almost 3 times their size. \nThis way if the human's avatar dies, the human would still live.\n`)
                                                    console.log(`To achieve this you would have to go meet the humans and show them you are not dangerous. \nThe is a dangerous task for you as the humans could kill you on sight. This might be your only way to bring peace between the worlds.\n`)
                                                     let willYouDoIt = prompt.question(
                                                         `Will you do it? \nY | N\n`)
                                                         willYouDoIt = willYouDoIt.toUpperCase();
                                                         if (willYouDoIt == 'Y'){
                                                            console.log(`You go with Grace to meet the humans. They have many questions for you, but in the end they decide to give it a try.\n`)
                                                            console.log(`There is a group of people who didn't like the decision to ‘play with the blue monkeys', so they decide to take the world that they have found and they aim a gun at you. \nYou have to make a decision quickly…\n`)
                                                                let thinkFast = prompt.question(
                                                                    `A. You quickly grab the gun and kill the human against the peaceful integration.\nB. You hit the gun out of their hand\nC. You stay calm and explain you want nothing but peace in the worlds.\n`)
                                                                    thinkFast = thinkFast.toUpperCase();
                                                                    if (thinkFast == 'A'){
                                                                        savingTheWorld();
                                                                    }else if (thinkFast =='B'){
                                                                        console.log(`when you hit the gun it accidentally shot Grace, and the humans created a riot!\n`)
                                                                        savingTheWorld();
                                                                    }else{
                                                                        console.log(`Showing peace even in a time when you should have panicked shows the other humans you mean no harm, so they attack the human that is attempting to hurt you. \nYou see that not all humans are bad and you go home to tell your people that most humans can be trusted. \nYou also tell them that peace between the worlds is the only way that Pandora will survive.\n`)
                                                                            let finalQuestion = prompt.question(
                                                                                `You are faced with one last question, will you provide Grace with some DNA to continue the Na’vi avatar project?\n Y | N\n`)
                                                                                finalQuestion = finalQuestion.toUpperCase();
                                                                                if (finalQuestion == 'Y'){
                                                                                        console.log(`Congratulations you created peace between the worlds. The humans learned how fragile the world of Pandora is and how they need to protect it. \nMost of the humans return to their life on Earth, while Grace and a select few who fell in love with Pandora and their way of life, decided to stay… \nONLY if Eywa accepted them as they go through a permanent transformation from Avatar/human to true Na’vi.\n`)
                                                                                    } else {savingTheWorld()}}
                                                         } else { 
                                                             console.log(`Grace is forced to go back on her own where she is tortured for information about your tribe!\n`)
                                                                 savingTheWorld();}
                                                 } else {
                                                    console.log(`Grace is hurt and can't believe you don't trust her after everything you have been through together, she returns to her people to try to talk them out of attacking.\n They didn't believe anything she had to say and now plan to take your land. You must make a choice...\n`)
                                                         savingTheWorld();}
                                            } else {
                                                    savingTheWorld();}
                                } else {
                                    Console.log(`The human manages to get back to her people and tells them all about the “Monsters”\n`)
                                        savingTheWorld();}
                    } else {
                        console.log(`The human manages to get back to her people and tells them all about the “Monsters”\n`)
                            savingTheWorld();}
                    



    //  const playAgain = () => {
    //          let playAgain = prompt.question('Do you want to play again? y || n \n');
    //            playAgain = playAgain.toLowerCase();
    //           if (playAgain === 'y') {
    //             ChoosingAvatar();
    //           }
    //         return playAgain;
    //         }
                 
    