const Discord = require("discord.js");
const prefix = "d!";
const Client = new Discord.Client 

Client.on("ready" , () => {
    console.log("Bot en ligne");
    Client.user.setActivity("d!help");
    }
);

Client.login("porcess.env.TOKEN");


Client.on("guildMemberadd", member =>{
    console.log("join")
    const channel = memnber.guild.channel.cache.find(ch => ch.name === "join");
    var joinEmbed = new Discord.RichEmbed()
    .setColor('RANDOM')
	.setTitle("Bienvenue")
	.setDescription("**Bienvenue + ${member} + , vas dans <#707578567856226310> :wink**")
	.setThumbnail('https://cdn.discordapp.com/avatars/775400912813555722/a82b26bb844a486a568bea51690bb005.png?size=4096')
	.setTimestamp()
	.setFooter('Fait par @Neal#5759/https://discord.gg/CBnYSMacQq', 'https://cdn.discordapp.com/avatars/775400912813555722/a82b26bb844a486a568bea51690bb005.png?size=4096');
    channel.send(joinEmbed)
});

Client.on("guildMemberRemove", member =>{
    console.log("leave")
    const channel = memnber.guild.channel.cache.find(ch => ch.name === "leave");
    var leaveEmbed = new Discord.RichEmbed()
    .setColor('RANDOM')
	.setTitle("Au revoir")
	.setDescription("**Au revoir** sob")
	.setThumbnail('https://cdn.discordapp.com/avatars/775400912813555722/a82b26bb844a486a568bea51690bb005.png?size=4096')
	.setTimestamp()
	.setFooter('Fait par @Neal#5759/https://discord.gg/CBnYSMacQq', 'https://cdn.discordapp.com/avatars/775400912813555722/a82b26bb844a486a568bea51690bb005.png?size=4096');
    channel.send(leaveEmbed)

});

//____________________________Commandes____________________________________________//


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
    console.log("Help")

    if(message.content == prefix + "help"){
    const helpEmbed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle("Pannel d'aide")
	.setDescription("**d!info**\nOuverture d'un pannel d'administration\n\n**d!fun**\nOuverture d'un pannel de commande pour le fun\n\n**d!musique**\nOuverture d'un pannel pour les commandes de musique\n\n**d!invite**\nEnvoie une invitation pour faire venir ce bot dans le serveur de votre choix\n\n**d!level**\nOuverture d'un pannel de control sur le level\n\n**d!desc**\nDescription du bot\n")
	.setThumbnail('https://cdn.discordapp.com/avatars/775400912813555722/a82b26bb844a486a568bea51690bb005.png?size=4096')
	.setTimestamp()
	.setFooter('Fait par @Neal#5759/ https://discord.gg/CBnYSMacQq', 'https://cdn.discordapp.com/avatars/775400912813555722/a82b26bb844a486a568bea51690bb005.png?size=4096');

    message.channel.send(helpEmbed);
    }
});

Client.on("message" , message => {
    if(message.author.bot)return;
    console.log("Description")

    if(message.content == prefix + "desc"){
    const descEmbed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle("Description")
	.setDescription("Bonjour, je me presente je suis le bot Dirho.\nJe vien du serveur Dirho d'où mon nom, vous pouvez le rejoindre ne faisant d!invite !\nJe suis créer pour aider, administrer, jouer sur vos serveur.\nIl y a quel que fonction qui sont exclusives sur le serveur dirho ( encore a compléter )\nVous disposez de plusieurs commandes et de pannel d'information pour vous aidez, la premiere commande est d!help.\n\nLe bot a était fais sur Visual Studio CODE.\n")
	.setThumbnail('https://cdn.discordapp.com/avatars/775400912813555722/a82b26bb844a486a568bea51690bb005.png?size=4096')
	.setTimestamp()
	.setFooter('Fait par @Neal#5759/https://discord.gg/CBnYSMacQq', 'https://cdn.discordapp.com/avatars/775400912813555722/a82b26bb844a486a568bea51690bb005.png?size=4096');

    message.channel.send(descEmbed);
    }
});

Client.on("message" , message => {
    if(message.author.bot)return;
    console.log("Info")

    if(message.content == prefix + "info"){
    const infoEmbed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle("Pannel d'information")
	.setDescription("**d!info**\nOuverture du pannelle d'information\n\n**d!mute**\nmute une personne\n\n**d!warn**\nwarn une personne\n\n**d!ban**\nban une personne\n\n**d!kick**\nkick une personne")
	.setThumbnail('https://cdn.discordapp.com/avatars/775400912813555722/a82b26bb844a486a568bea51690bb005.png?size=4096')
	.setTimestamp()
	.setFooter('Fait par @Neal#5759/https://discord.gg/CBnYSMacQq', 'https://cdn.discordapp.com/avatars/775400912813555722/a82b26bb844a486a568bea51690bb005.png?size=4096');

    message.channel.send(infoEmbed);
    }
});
