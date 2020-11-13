const { timeStamp } = require("console");
const Discord = require("discord.js");
const { fstat } = require("fs");
const prefix = "d!";
const Client = new Discord.Client 

Client.on("ready" , () => {
    console.log("Bot en ligne");
    Client.user.setActivity("d!help");
    }
);

Client.login("TOKEN");

Client.on ("message", message => {

    if(message.content == "d!send" ){
        if(!message.member.hasPermission("MANAGE_MESSAGES")){
            if(!message.content.length > 5){
                message_send = message.content.slice(4)
                console.log(message_send)
            }
        }
    }
})

//____________________________Commandes____________________________________________//

Client.on("message" , message => {
    if(message.author.bot)return;
    if(message.content == prefix + "end"){
    console.log("end")
        const sendEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle("")
        .setDescription()
        .setThumbnail('https://cdn.discordapp.com/avatars/775400912813555722/a82b26bb844a486a568bea51690bb005.png?size=4096')
        .setTimestamp()
        .setFooter('Fait par @Neal#5759/https://discord.gg/CBnYSMacQq', 'https://cdn.discordapp.com/avatars/775400912813555722/a82b26bb844a486a568bea51690bb005.png?size=4096');
    
        message.reply(sendEmbed);
    }     
});

Client.on("message" , message => {
    if(message.author.bot)return;

    if(message.content == prefix + "surprise"){
    console.log("BON TOUTOU")
        message.reply ("Bon toutou ! ");
    }     
});

Client.on("message" , message => {
    if(message.author.bot)return;
    
    if(message.content == prefix + "test"){
        message.reply ("voila :arrow_down: ");
        message.channel.send ("Voila la commande du test");
    }
});

//___________PING PONG________//
    Client.on("message" , message => {
        if(message.author.bot)return;
        
        if(message.content == "ping"){
            message.channel.send ("pong");
        }     
});

//________Salut____//
Client.on("message" , message => {
    if(message.author.bot)return;
    
    if(message.content == "Salut"){
        message.channel.send ("Hey !");
    }     
});
Client.on("message" , message => {
    if(message.author.bot)return;
    
    if(message.content == "Bonjour"){
        message.channel.send ("Salut !");
    }     
});
Client.on("message" , message => {
    if(message.author.bot)return;
    
    if(message.content == "Hey"){
        message.channel.send ("Coucou !");
    }     
});
Client.on("message" , message => {
    if(message.author.bot)return;
    
    if(message.content == "hey"){
        message.channel.send ("Coucou !");
    }     
});

Client.on("message" , message => {
    if(message.author.bot)return;
    
    if(message.content == "bonjour"){
        message.channel.send ("Salut !");
    }     
});

Client.on("message" , message => {
    if(message.author.bot)return;
    
    if(message.content == "salut"){
        message.channel.send ("Hey !");
    }     
});

//____________________________PANNEL____________________________________________//

Client.on("message" , message => {

    if(message.author.bot)return;
    if(message.content == prefix + "help"){
    console.log("Help")
    const helpEmbed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle("Pannel d'aide")
	.setDescription("**d!info**\nOuverture d'un pannel d'administration\n\n**d!fun**\nOuverture d'un pannel de commande pour le fun\n\n**d!musique**\nOuverture d'un pannel pour les commandes de musique\n\n**d!invite**\nEnvoie une invitation pour faire venir ce bot dans le serveur de votre choix\n\n**d!level**\nOuverture d'un pannel de control sur le level\n\n**d!desc**\nDescription du bot\n\n**d!information**\nOuvre un pannel du channel <#707578567856226310>\n\n**d!role**\nOuvre un pannel du channel <#707578567856226310>\n\n**d!relgement**\nOuvre un pannel du channel <#697121873044963449>\n\n**d!jeux**\nOuverture du pannel d'aide pour les jeux\n\n**d!surprise**\nUne surprise vous attend si vous la faite :)")
	.setThumbnail('https://cdn.discordapp.com/avatars/775400912813555722/a82b26bb844a486a568bea51690bb005.png?size=4096')
	.setTimestamp()
	.setFooter('Fait par @Neal#5759/ https://discord.gg/CBnYSMacQq', 'https://cdn.discordapp.com/avatars/775400912813555722/a82b26bb844a486a568bea51690bb005.png?size=4096');
    message.reply(" Voila le pannel que tu a demandé(e):arrow_down: ")
    message.channel.send(helpEmbed);
    }

    //___________________________________________________//

    if(message.author.bot)return;
    if(message.content == prefix + "fun"){
    console.log("Fun")
    const funEmbed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle("Pannel du FUN")
	.setDescription("**ping**\n\nEt le bot repondras **pong**\n\n")
	.setThumbnail('https://cdn.discordapp.com/avatars/775400912813555722/a82b26bb844a486a568bea51690bb005.png?size=4096')
	.setTimestamp()
	.setFooter('Fait par @Neal#5759/https://discord.gg/CBnYSMacQq', 'https://cdn.discordapp.com/avatars/775400912813555722/a82b26bb844a486a568bea51690bb005.png?size=4096');
    message.reply(" Voila le pannel que tu a demandé(e):arrow_down: ")
    message.channel.send(funEmbed);
    }

    //__________________________________//
    if(message.author.bot)return;

    if(message.content == prefix + "desc"){
    console.log("Description")
    const descEmbed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle("Description")
	.setDescription("Bonjour, je me presente je suis le bot Dirho.\nJe vien du serveur Dirho d'où mon nom, vous pouvez le rejoindre ne faisant d!invite !\nJe suis créer pour aider, administrer, jouer sur vos serveur.\nIl y a quel que fonction qui sont exclusives sur le serveur dirho ( encore a compléter )\nVous disposez de plusieurs commandes et de pannel d'information pour vous aidez, la premiere commande est d!help.\n\nLe bot a était fais sur Visual Studio CODE.\n")
	.setThumbnail('https://cdn.discordapp.com/avatars/775400912813555722/a82b26bb844a486a568bea51690bb005.png?size=4096')
	.setTimestamp()
	.setFooter('Fait par @Neal#5759/https://discord.gg/CBnYSMacQq', 'https://cdn.discordapp.com/avatars/775400912813555722/a82b26bb844a486a568bea51690bb005.png?size=4096');
    message.reply(" Voila le pannel que tu a demandé(e):arrow_down: ")
    message.channel.send(descEmbed);
    }

//________________________________________//

    if(message.author.bot)return;

    const nopeEmend = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle(":/")
	.setDescription("Tu n'a pas les permissions")
	.setThumbnail('https://cdn.discordapp.com/avatars/775400912813555722/a82b26bb844a486a568bea51690bb005.png?size=4096')
	.setTimestamp()
	.setFooter('Fait par @Neal#5759/https://discord.gg/CBnYSMacQq', 'https://cdn.discordapp.com/avatars/775400912813555722/a82b26bb844a486a568bea51690bb005.png?size=4096');
    if(message.content == prefix + "info"){
    console.log("info")
    if(!message.member.hasPermission("MANAGE_MESSAGES"))return message.channel.send(nopeEmend)
    const infoEmbed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle("Pannel d'information")
	.setDescription("**d!info**\nOuverture du pannelle d'information\n\n**d!mute**\nmute une personne\n\n**d!warn**\nwarn une personne\n\n**d!ban**\nban une personne\n\n**d!kick**\nkick une personne\n\n**d!clear [ nombre ]**\nSuprime le nombre de message que vous avez choisi ( entre 1 et 100 ) avant 14 jours")
	.setThumbnail('https://cdn.discordapp.com/avatars/775400912813555722/a82b26bb844a486a568bea51690bb005.png?size=4096')
	.setTimestamp()
	.setFooter('Fait par @Neal#5759/https://discord.gg/CBnYSMacQq', 'https://cdn.discordapp.com/avatars/775400912813555722/a82b26bb844a486a568bea51690bb005.png?size=4096');
    message.reply(" Voila le pannel que tu a demandé(e):arrow_down: ")
    message.channel.send(infoEmbed);
    }


//_____________________________________//

    if(message.author.bot)return;
    if(message.content == prefix + "reglement"){
    console.log("reglement")
    const reglementEmbed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle("Pannel du reglement")
	.setDescription("**__❯ 1. Le respect et la courtoisie__\nUn comportement respectueux est demandé à chaque membre.\nIl n’est est permis de manquer de respect sauf sympathiquement, insulter ou dire n’importe quelle chose qui puisse porter à l’intégrité d’un membre. Les propos racistes, xénophobes, homophobes, ou tout autre propos à caractère haineux ou qui porte atteinte à quiconque est formellement interdit.\n\n__❯ 2. Les images__\nLes images affichées ou envoyées, à caractère haineux, religieux, politiques, sexuels, homophobes ou à n’importe quel caractère pouvant porter atteinte à l'image de quiconque ou être source de conflits, sont interdites.\n\n__❯ 3. Le matériel__\nVeuillez disposer d’un matériel audio convenable. Les gènes envers les autres utilisateurs occasionnés par du matériel défectueux ou par une mauvaise configuration logicielle doivent être absolument évités.\nLes bruits incongrus, radios, ou autre non-souhaités ne sont pas acceptés.\n\n__❯ 4. Le langage__\nCe serveur discord est francophone, veuillez écrire en français.\n\n__❯ 5. Les mentions__\nLes mentions (@pseudo) sont à utiliser avec modération. L’utilisation répétée et/ou inutile de cette commande est interdite.\n\n__❯ 6. Les liens__\nIl est interdit de donner des liens emmenant vers des sites frauduleux ou de téléchargements illégaux. Il est aussi interdit de donner des liens donnant directement des applications illégales ou qui mènent vers des sites de torrents, cracks, virus.\n\n__❯ 7. Le droit d’écoute__\nL’équipe de modération et d’administration de Dirho se réservent le droit de pénétrer à tout moment dans n’importe quel salon public ou privé afin d’écouter ce qu’il peut se dire dans le seul but de faire respecter le présent règlement.\n\n__❯ 8. La publicité__\nLa publicité pour un quelconque serveur  sont interdite, sous quelle que forme que ce soit.\n\n__❯ 9. Les channels__\nVas dans <#707578567856226310>.\n\n__❯10. __\nTout non respect du reglement est passible d'une sanction selon ce que vous enfreindrai. \n3 warn=BAN 1J**")
	.setThumbnail()
	.setTimestamp()
	.setFooter('Fait par @Neal#5759/https://discord.gg/CBnYSMacQq', 'https://cdn.discordapp.com/avatars/775400912813555722/a82b26bb844a486a568bea51690bb005.png?size=4096');
    message.reply(" Voila le pannel que tu a demandé(e):arrow_down: ")
    message.channel.send(reglementEmbed);
    }


//_____________________________________//

    if(message.author.bot)return;
    if(message.content == prefix + "information"){
    console.log("information2")
    const informartionEmbed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle("Pannel du informartion")
	.setDescription("**Dirho c'est quoi ?:white_flower: \n\nDirho est un servuer communautée:shinto_shrine:  gaming:video_game: ,  il peut aussi vous apportez de l'aide dans tous ce que vous voulez ( bot, discord et même jeux) :star:  il y a plein de bot pour jouer sur discord :crown: **\n\n★━━━━━━━━━━━━━SALON━━━━━━━━━━━━━━━━━━━━━━━━━━━★\n\n**#💼│arriver-et-départ  :arriver/au revoir, la où les nouvelles personnes qui arrive sur le serveur sont afficher\n#☕│la-taverne :salon où tout le monde peux parler\n#📷│media  : salon où vous pouvez postez des liens pour les memes\n#🗳│-commande-bot  : Salon où toute les commandes de bots  peut etre utiliser\n#📡│demande-de-grade : Salon où  vous pouvez demander un grade ( interdit de demander un grade qui est dans le staff )\n#❓│support : Salon où  ci vous avez n'importe quel question faite ``-ticket open [Question]``( les crochets ne sont pas a metre.)\n#🉐│koya  : Salon où tu peux jouer avec koya a n'importe quoi, un pendu: ``^^hangman start``, ou même a une aventure: ``^^new adventure``\n#🤯│akinator  : Salon où tu peux jouer avec akinator: ``!aki`` pour le lancer.\n#🔢│counting :Salon où vous pouvez conter mais les un aprés les autres (1, 2, 3, 4, ect)\n#💲│money :Salon où vous pouvez voir votre argent, ``*money``  et vous gagner 20 $ à chaques phrases\n#☕│la-taverne  :Salon où tout le mon peux parler ( vous avez pas de micro mais que vous étes en vocal)\n#📃│reglement : le reglement\n#👾│role : salon où vous pouvez prendre les roles que vous voulez\n#🎯│description : la description de notre serveur\n#🚨│annonce : annonce du serveur\n#🎉│giveway : Des tirages au sort**\n**#💭│poll : des choix fun a faire ou même pour le serveur\n #💡│-suggestions  : si vous avez un suggestions\n#📀│shop : Salon où vous pouvez voir ce qu'il y a en vente ,`` *shop``\n #📥│candidature : salon ou les information pour postulé**")
	.setThumbnail()
	.setTimestamp()
	.setFooter('Fait par @Neal#5759/https://discord.gg/CBnYSMacQq', 'https://cdn.discordapp.com/avatars/775400912813555722/a82b26bb844a486a568bea51690bb005.png?size=4096');
    message.reply(" Voila le pannel que tu a demandé(e):arrow_down: ")
    message.channel.send(informartionEmbed);
    }

//_____________________________________//


    if(message.author.bot)return;
    if(message.content == prefix + "role"){
    console.log("role")
    const roleEmbed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle("Pannel de role")
	.setDescription("★━━━━━━━━━━━━━━━ROLE━━━━━━━━━━━━━━━━━━━━━━━━━★\n  **@Fille :si vous été une fille \n @Garçon :si vous été un garçon\n @-18 : moins de 18 ans \n@+18 : plus de 18 ans\n@dirho/メ :Membre\n@Deco/メ :#📀│shop \n@Shiro/メ :#📀│shop \n@Meno/メ :#📀│shop \n@ako/メ :#📀│shop \n @____________________________________ \n @🥳│𝒜𝓂𝒾𝓈 :Amis du staff\n @📀│ 𝓥𝓘𝓟:vip\n  @💎│𝕊𝕖𝕣𝕧𝕖𝕣 𝔹𝕠𝕠𝕤𝕥𝕖𝕣💎 : Boost**")
	.setThumbnail()
	.setTimestamp()
	.setFooter('Fait par @Neal#5759/https://discord.gg/CBnYSMacQq', 'https://cdn.discordapp.com/avatars/775400912813555722/a82b26bb844a486a568bea51690bb005.png?size=4096');
    message.reply(" Voila le pannel que tu a demandé(e):arrow_down: ")
    message.channel.send(roleEmbed);
    }

//________________//

    if(message.author.bot)return;
    if(message.content == prefix + "invite"){
    console.log("invite")
    const inviteEmbed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle("Pannel d'invitation")
    .setDescription("**Voici le lien pour inviter le bot sur votre serveur:**\n\n:link: : https://discord.com/api/oauth2/authorize?client_id=775400912813555722&permissions=8&scope=bot ")
    .setThumbnail('https://cdn.discordapp.com/avatars/775400912813555722/a82b26bb844a486a568bea51690bb005.png?size=4096')
    .setTimestamp()
    .setFooter('Fait par @Neal#5759/https://discord.gg/CBnYSMacQq', 'https://cdn.discordapp.com/avatars/775400912813555722/a82b26bb844a486a568bea51690bb005.png?size=4096');
    message.reply(" Voila le pannel que tu a demandé(e):arrow_down: ")
    message.channel.send(inviteEmbed);
    }

//________________//

    if(message.author.bot)return;
    if(message.content == prefix + "enderbot"){
    console.log("ender")
    const enderEmbed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle("Pannel d'enderbot")
    .setDescription("**Le jeux de enderbot est une aventure ou vous farmez des minerais et d'autre le prefix est >\nPour voir les commandes faite >help et regarder commande de jeux voila ^^**\n\n**Pour plus d'information contacter Neal ｼ#5759 ou allez dans <#707336199898923030> et faite ``-ticket open [question]`` voila ^^**")
    .setThumbnail('https://cdn.discordapp.com/avatars/775400912813555722/a82b26bb844a486a568bea51690bb005.png?size=4096')
    .setTimestamp()
    .setFooter('Fait par @Neal#5759/https://discord.gg/CBnYSMacQq', 'https://cdn.discordapp.com/avatars/775400912813555722/a82b26bb844a486a568bea51690bb005.png?size=4096');
    message.reply(" Voila le pannel que tu a demandé(e):arrow_down: ")
    message.channel.send(enderEmbed);
    }

//________________//

    if(message.author.bot)return;
    if(message.content == prefix + "koyagame"){
    console.log("koyagame")
    const koyagameEmbed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle("Pannel de koya game")
    .setDescription("**Koya propose un jeux comme une aventure de ONE PIECE, vous pouvez avoir un équipage et bien d'autre \n\nDonc pour commencer l'aventure faite ``^^new adventure``\nPour voir votre profil faite ``^^profile``\nPour voir a quel chapitre vous vous trouver faite ``^^chapter`` \nPour améliorez votre personnage faite ``^^train``\nPour voir votre bateau faite ``^^boat``\nPour voir le colisé faite ``^^colisee``\nPour pêcher faite ``^^fish``\nPour recèperez votre recompose quotidien faite ``^^fish``  \nPour jouer au casino faite ``^^casino``\nPour prendre un coffre faite ``^^lootbox``\nPour vous battre faite ``^^battle``\nPour avoir un dendenmushi faite ``^^dendenmushi``**\n\n__**Les commande peuvent ouvrir un pannel d'aide pour des precision**__\n\n**Pour plus d'information contacter Neal ｼ#5759 ou allez dans <#707336199898923030> et faite ``-ticket open [question]`` voila ^^**")
    .setThumbnail('https://cdn.discordapp.com/avatars/775400912813555722/a82b26bb844a486a568bea51690bb005.png?size=4096')
    .setTimestamp()
    .setFooter('Fait par @Neal#5759/https://discord.gg/CBnYSMacQq', 'https://cdn.discordapp.com/avatars/775400912813555722/a82b26bb844a486a568bea51690bb005.png?size=4096');
    message.reply(" Voila le pannel que tu a demandé(e):arrow_down: ")
    message.channel.send(koyagameEmbed);
    }

//________________//

    if(message.author.bot)return;
    if(message.content == prefix + "akinator"){
    console.log("akinator")
    const akinatorEmbed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle("Pannel d'akinator")
    .setDescription("**Akinator trouve toute les personnages, pokemon.... que vous voulez repondez juste a c'est question par \noui: ``y``\nnon: ``n``\nprobablement: ``p``\nprobablement pas: ``pn``\nretour: ``b`` \n__Pour lancer une partie  fait ``!aki``__\n\nPour plus d'information contacter Neal ｼ#5759 ou allez dans <#707336199898923030> et faite ``-ticket open [question]`` voila ^^**")
    .setThumbnail('https://cdn.discordapp.com/avatars/775400912813555722/a82b26bb844a486a568bea51690bb005.png?size=4096')
    .setTimestamp()
    .setFooter('Fait par @Neal#5759/https://discord.gg/CBnYSMacQq', 'https://cdn.discordapp.com/avatars/775400912813555722/a82b26bb844a486a568bea51690bb005.png?size=4096');
    message.reply(" Voila le pannel que tu a demandé(e):arrow_down: ")
    message.channel.send(akinatorEmbed);
    }

//________________//

    if(message.author.bot)return;
    if(message.content == prefix + "counting"){
    console.log("counting ")
    const countingEmbed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle("Pannel de counting")
    .setDescription("**Donc le jeux de counting consiste a conter les un apres les autres en suivant le nombre au dessu exemple:\n\nNeal: 256\n\nVous: 257\n\nMais si vous vous trompez le conteur repart a 0 donc attention counting vous surveille \n\n(Faite attention que counting ait bien mis un emojy sous le message au dessu avant d'envoyer le votre ! )\n\nPour plus d'information contacter Neal ｼ#5759 ou allez dans <#707336199898923030> et faite ``-ticket open [question]`` voila ^^**")
    .setThumbnail('https://cdn.discordapp.com/avatars/775400912813555722/a82b26bb844a486a568bea51690bb005.png?size=4096')
    .setTimestamp()
    .setFooter('Fait par @Neal#5759/https://discord.gg/CBnYSMacQq', 'https://cdn.discordapp.com/avatars/775400912813555722/a82b26bb844a486a568bea51690bb005.png?size=4096');
    message.reply(" Voila le pannel que tu a demandé(e):arrow_down: ")
    message.channel.send(countingEmbed);
    }

//________________//

    if(message.author.bot)return;
    if(message.content == prefix + "money"){
    console.log("money ")
    const countingEmbed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle("Pannel de money")
    .setDescription("**Bonjour {usermetion}, je vais t'expliquer le système d'économie du serveur !\nDonc le système est administrait par @Drafabot , Et à chaque message envoyer vous gagnez entre 30 $ et 35 $, Pour voir votre argent faite ``*money``\nVous pouvez acheter des rôles qui vous permettes de multiplier l'argent que vous gagnez a chaque message envoyer pour acheter un rôles faite ``*buy [role]`` et pour voir les rôles en vantes regarde <#707634690605056060> voila j'espère t'avoir apporter une aide voila ^^**")
    .setThumbnail('https://cdn.discordapp.com/avatars/775400912813555722/a82b26bb844a486a568bea51690bb005.png?size=4096')
    .setTimestamp()
    .setFooter('Fait par @Neal#5759/https://discord.gg/CBnYSMacQq', 'https://cdn.discordapp.com/avatars/775400912813555722/a82b26bb844a486a568bea51690bb005.png?size=4096');
    message.reply(" Voila le pannel que tu a demandé(e):arrow_down: ")
    message.channel.send(countingEmbed);
    }

//________________//


    if(message.author.bot)return;
    if(message.content == prefix + "koyacommand"){
    console.log("koyacommand")
    const koyacommandEmbed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle("Pannel de koya command")
    .setDescription("**^^baka Dire a quel qu'un qui est con !\n^^bang Pour Bang Bang !\n^^blush  Pour rougir !\n^^confused Pour être confus !\n^^cookie Pour avoir un cookie\n^^cry Pour etre triste/pleurer \n^^cuddle Pour réconforter quel qu'un\n^^dab Pour faire un dab\n^^dance  Pour danser\n ^^feed`` pour manger\n^^handholding pour tenir la main\n^^highfive Pour check\n^^hug Pour faire un calin\n^^insult pour insulter X)\n^^jojo regarde par toi même...\n^^kiss pour embrasser quel qu'un\n^^pat Pour caresser\n^^pokePour donner un petit coup \n^^pout Pour bouder\n^^punch Pour frapper quel qu'un\n^^shrug  ¯\\_(ツ)_/¯\n^^slap Pour foutre une PUTAIN DE CLAQUE \n^^sleepy Pour etre fatiguer \n^^smile  Pour sourire\n ^^smug  Quand t fier connard\n^^thinking  Pour être perplexe\n^^wasted POUR TUER QUEL QU'UN !\n\n__Pour faire une cammande sur une personne faite un espace et marquer [@user]__ **")
    .setThumbnail('https://cdn.discordapp.com/avatars/775400912813555722/a82b26bb844a486a568bea51690bb005.png?size=4096')
    .setTimestamp()
    .setFooter('Fait par @Neal#5759/https://discord.gg/CBnYSMacQq', 'https://cdn.discordapp.com/avatars/775400912813555722/a82b26bb844a486a568bea51690bb005.png?size=4096');
    message.reply(" Voila le pannel que tu a demandé(e):arrow_down: ")
    message.channel.send(koyacommandEmbed);
    }



    if(message.author.bot)return;
    if(message.content == prefix + "jeux"){
    console.log("jeux")
    const jeuxEmbed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle("Pannel de jeux")
    .setDescription("**d!enderbot**\nOuvre le pannel pour tout savoir sur enderbot\n\n**d!koyagame**\nOuvre le pannel pour tout savoir sur koyagame\n\n**d!akinator**\nOuvre le pannel pour tout savoir sur akinator\n\n**d!counting **\nOuvre le pannel pour tout savoir sur counting\n\n**d!money**\nOuvre le pannel pour tout savoir sur d!money\n\n**d!koyacommand**\nOuvre le pannel pour tout savoir sur d!koyacommand\n")
    .setThumbnail('https://cdn.discordapp.com/avatars/775400912813555722/a82b26bb844a486a568bea51690bb005.png?size=4096')
    .setTimestamp()
    .setFooter('Fait par @Neal#5759/https://discord.gg/CBnYSMacQq', 'https://cdn.discordapp.com/avatars/775400912813555722/a82b26bb844a486a568bea51690bb005.png?size=4096');
    message.reply(" Voila le pannel que tu a demandé(e):arrow_down: ")
    message.channel.send(jeuxEmbed);
    }
});

//______________________________________________________________________________________________________________________________________________________________________________//

