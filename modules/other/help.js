function help(message, bot) {
	if (message.content === "h$help") {
		message.channel.send({
			embed: {
				footer: {
					text: "By Hariamane",
					icon_url: "https://cdn.discordapp.com/avatars/300896265078571009/853decbb9091b9a045c198c68e4866eb.png?size=128"
				},
				color: 0xFF0000,
				description: "[**Commandes:**]()\n\n" +
				"**Commandes utils :**\n\n" +
				":white_check_mark:h$annonce : Cette commande est réservé au développeur.\n" +
				":white_check_mark:h$botmessage : Cette commande est réservé au développeur.\n" +
				":white_check_mark:h$join : Cette commande te permet d'ajouter ce bot dans ton serveur.\n" +
				":white_check_mark:h$discord : Cette commande te permet de me rejoindre.\n" +
				":x:h$support : Cette commande te permet de contacter le support technique du bot.\n\n" +
				"**Commandes jeux :**\n\n" +
				":white_check_mark:h$ping : Renvoie pong avec le temps écoulé en ms (millisecondes).\n" +
				":x:h$traduction : Le but c'est de traduire des phrases.\n\n" +
				"**Commandes modérateur :**\n\n" +
				":x:h$ban : Cette commande c'est pour ban un utilisateur.\n" +
				":x:h$kick : Cette commande c'est pour kicker un utilisateur.\n\n" +
				"**Commandes radio :**\n\n" +
				":white_check_mark:h$webradioplay <flux_radio> : Pour écouter de la radio.\n" +
				":white_check_mark:h$webradiostop : Pour stopper la radio.\n\n" +
				"**Commandes audio :**\n\n" +
				":white_check_mark:h$add <recherche> ou h$add <URL vidéo> : Pour ajouter une musique recherché ou l'URL de la vidéo et met le bot dans un canal vocal.\n" +
				":white_check_mark:h$playyt : Pour mettre la musique en lecture.\n" +
				":white_check_mark:h$pause : Pour mettre la musique en cours de lecture en pause.\n" +
				":white_check_mark:h$resume : Pour remettre la musique qui était en pause de nouveau en lecture.\n" +
				":white_check_mark:h$next : Pour arrêter la musique en cours de lecture et de passer à la suivante.\n" +
				":white_check_mark:h$volume+ : Pour augmenter le volume de la musique en cours de lecture.\n" +
				":white_check_mark:h$volume- : Pour diminuer le volume de la musique en cours de lecture.\n" +
				":white_check_mark:h$time : Affiche le temps écoulé de la musique en cours de lecture.\n" +
				":white_check_mark:h$addlist : Pour ajouter une playlist YouTube.\n" +
				":white_check_mark:h$queue : Pour afficher la/les musique(s) qui est/sont dans la file d'attente."
			}
		});
	}
}

module.exports = help;