function srvdiscord(message, bot) {
	if (message.content === "h$discord") {
		message.channel.send({
			embed: {
				color: 0xFF0000,
				title: "Cette commande te permet de me rejoindre : https://discord.gg/4PhX6pj"
			}
		});
	}
}

module.exports = srvdiscord;
