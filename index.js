const prompt = require('readline-sync');

const N = "Neytiri"
const T = "Tsu'tey"
const H = "grace"


const savingTheWorld = () =>{
    console.log(`The humans learn about everything you have and more come to your world, \n as they start to take over one area at a time, and you have to decide what to do about it.\n`)
    let saveTheWorld = prompt.question(
        `A. Your tribe fights alone to get back your land.\nB. You surrender to the humans\nC. You get the other tribes in Pandora to fight the humans\n`)
            if (saveTheWorld == 'A'){
                console.log(`You and your tribe dies and Pandora falls\n You lose!\n`)
               // playAgain();
            } else if (saveTheWorld == 'B'){
                console.log(`You and your tribe dies and Pandora falls\n You lose!\n`)
               // playAgain();
            } else{
                console.log(`There is a war on Pandora the land is destroyed and a part of the world. Most of the life in the war was lost and the it its unclear if life will ever recover. Pandora will never be the same.\n You lose!\n`)
               // playAgain();
            }

    return saveTheWorld;
}

let usersAvatarChoice = prompt.question(
    `Chose your avatar:\n N: ${N}\n T: ${T}\n`)
        
   if (usersAvatarChoice == 'N') {
        console.log( `Welcome to Pandora ${N}\n`)
        console.log(`In the world of Pandora ${N} lives with her tribe called Omaticaya. \nPandora is an perfect world everything is in sync creating the perfect ecosystem...   \nbut something was about to change.\n`)
        console.log(`Asleep in the tree ${N} heard a rustling sound from the east, she goes to examine the noise.\n`)
        console.log(`As she stalked through the trees she see a stranger... a human and she is injured.\n`)
    } else {
            console.log(`Welcome to Pandora ${T}\n`)
            console.log(`The world of Pandora ${T} lived in his tribe. \nPandora is an perfect world everything is in sync creating the perfect ecosystem...   \nbut something was about to change.\n`)
            console.log(`Asleep in the tree ${T} heard a rustling sound from the east, he goes to examine the noise.\n`)
            console.log(`As he stalked through the trees he see a stranger... a human and she is injured.\n`)
   }

   let helpChoice = prompt.question(
    `Should you help her? Y | N \n`)
        if (helpChoice == 'Y') {
            console.log(`The human is brought back to the village and is healed by Eywa the god of the Na’vi .\n`)
            console.log(`The human wakes up and you have to have to figure out who they are and what they want.\n HOw do you want to do that?\n`)
                let knowTheHuman = prompt.question(
                    `A. You are nice to the human\nB. You are mean to the Human\n`)
                        if (knowTheHuman == 'A'){
                            console.log(`You learn that the humans name is Grace \nand she comes from a plant called Earth and that they came to Pandora with a 100 more people from Earth. \nThey come to explore the new world they have found.  \n`)
                                let toDoWithGrace = prompt.question(
                                   `Next you need to decide what to do with Grace. \nA. You show her your ways and teach her to see the world in the way you do.\nB. You turn her away and send her back to her people\n`)
                                   if (toDoWithGrace == 'A'){
                                    console.log(`You works with Grace day by day. You shows her everything about Pandora and that everything is living in balance creating this perfect world. \nGrace realizes that what the rest of her people want to do, will destroy this place and it is basically useless without the Na’vi. \nShe realizes she has to save this planet from dying. \n`)
                                    console.log(`Grace approaches you and tell you that her peoples plan to destroy Pandora \njust for the natural resources on the planet. Grace tells you she is on your side and wants to show them your ways \nand teach them to see the world the way you do.\n`)
                                        let teachHumans = prompt.question(
                                            `Do you trust her?\n Y | N\n`)
                                                if (teachHumans == 'Y'){
                                                    console.log(`Grace tells you that she is a scientist and that the she has away where is can look like the Na,vi \nshe can bring humans into there world in a safe way so they feel less threaten by the Na’vi that is almost 3 times there size. \nThis way if the humans avatar dies the human would still live.\n`)
                                                    console.log(`To achieve this you would have to go meet the humans and show them they are not dangerous. \nThe is a dangerous task for you the humans could kill you on sight but this might be your only way to bring peace between the worlds.\n`)
                                                     let willYouDoIt = prompt.question(
                                                         `Will you do it? \nY | N\n`)
                                                         if (willYouDoIt == 'Y'){
                                                            console.log(`You go with Grace to meet the humans. They have many questions for you but in the end they decide to give it a try.\n`)
                                                            console.log(`There is a group of people who didn't like the decision to ‘play with the blue monkeys, they decide that they want to take the world that they have found and they aim a gun at you. You have to make a decision quickly…\n`)
                                                                let thinkFast = prompt.question(
                                                                    `A. You quickly grab the gun and kill the human against the peaceful integration.\nB. You hit the gun out of their hand\nC. You stay calm and explain you want nothing but peace in the worlds.\n`)
                                                                    if (thinkFast == 'A'){
                                                                        savingTheWorld();
                                                                    }else if (thinkFast =='B'){
                                                                        console.log(`when you hit the gun I accidentally shot Grace, and the humans created a riot!\n`)
                                                                        savingTheWorld();
                                                                    }else{
                                                                        console.log(`Showing peace even in a time when you should have panic show many humans you mean no harm and they attack the human that is attempting to hurt you. \nYou see that not all humans are bad and you go home to tell your people that most humans can be trusted. \nYou also tell them that peace between the world is the only way that Pandora will survive.\n`)
                                                                            let finalQuestion = prompt.question(
                                                                                `You are faced with one last question, will you provide Grace with some DNA to continue the Na’vi avatar project.\n Y | N\n`)
                                                                                    if (finalQuestion == 'Y'){
                                                                                        console.log(`Congratulations you created peace between the worlds, the humans learned how fragile the world of Pandora is and how they need to protect it and leave it alone, \nmost of the humans return to there life on Earth. Then there was Grace and a select few who fell in love with the world and there ways that decide to stay… \nOnly if Eywa accepted them as they go through through a permanent transformation from Avatar/human to true Na’vi.\n`)
                                                                                    } else {savingTheWorld()}}
                                                         } else { 
                                                             console.log(`Grace is forced to go back on her own where she is torched for information about your tribe!\n`)
                                                                 savingTheWorld();}
                                                 } else {
                                                    console.log(`Grace is hurt and can't believe you don't trust her after everything you have been through together, she returns to her people to try to talk them out of attacking.\n They didn't believe anything she had to say and now plan to take your land. You must make a choice...\n`)
                                                         savingTheWorld();}
                                            } else {
                                                    savingTheWorld();}
                                } else {
                                    Console.log(`The human manages to get back to his people and tells them all about the “Monsters”\n`)
                                        savingTheWorld();}
                    } else {
                        console.log(`The human manages to get back to his people and tells them all about the “Monsters”\n`)
                            savingTheWorld();}
  




    //  const playAgain = () => {
    //          let playAgain = prompt.question('Do you want to play again? y || n \n');
    //            playAgain = playAgain.toLowerCase();
    //           if (playAgain === 'y') {
    //             ChoosingAvatar();
    //           }
    //         return playAgain;
    //         }
                 