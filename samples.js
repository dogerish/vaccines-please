const common = {
	news: {
		bwitter: {
			image: "images/bwitter.png",
			name: "Bwitter"
		},
		bsj: {
			image: "images/bsj.png",
			name: "The Ball Street Journal"
		},
		beta: {
			image: "images/beta.png",
			name: "Beta"
		},
		nbt: {
			image: "images/nbt.png",
			name: "The New Bork Times"
		}
	},
	sick: {
		bovid: {
			how: "sicken",
			what: "BOVID-19",
			length: 3,
			lethality: 0.06
		}
	}
};

var plot = [
	{
		date: "1/15/2020",
		news: [
			{
				...common.news.bwitter,
				content: "New virus, BOVID-19 is spreading from China to Europe"
			},
			{
				...common.news.bsj,
				content: "New cases of Boronavirus appeared in Italy, invoking efforts to contain the virus in rural regions."
			},
		],
		decision: {
			image: "images/italy.jpg",
			prompt: "You have a trip planned to Italy, do you want to take it or stay home?",
			yes: "Lick international doorknobs!",
			no: "Take a boring Staycation"
		},
		result: {
			yes: {
				image: "images/italy-quarantine.jpeg",
				who: "father",
				...common.sick.bovid,
				description: "While you relax in Italy, you contract a disease and have to quarantine. Oh well, at least it's Nice."
			},
			no: {
				image: "images/staycation.jpeg",
				how: "nothing",
				description: "You relax in your home and get some quality family time during this stressful pandemic."
			}
		}
	}
];

var nonplot = [
	{
		news: [
			{
				...common.news.bwitter,
				content: "NOOO! Essential oils can't heal BOVID-19!! Those claims are fraudulent!"
			},
			{
				...common.news.beta,
				content: "Due to the rising cases of Boronavirus, we're dropping a huge sale on our essential oil stock! Stay healthy, stay natural™"
			},
			{
				...common.news.nbt,
				content: "Though the sales of vitamins, herbs, and extracts have surged, none of them are proven to be effective against contracting or shortening the duration of BOVID-19."
			}
		],
		decision: {
			image: "https://media.discordapp.net/attachments/808471748102062132/960258942603251742/unknown.png",
			prompt: "make a cool non plot decision",
			yes: "bruh momento",
			no: "never"
		},
		result: {
			yes: {
				image: "https://media.discordapp.net/attachments/808471748102062132/960252502496911380/unknown.png",
				who: "daughter",
				how: "kill",
				what: "drugs",
				description: "you are daughter is ded dumbass"
			},
			no: {
				image: "https://cdn.discordapp.com/attachments/808471748102062132/959611224692228166/unknown.png",
				how: "nothing",
				description: "you survivd"
			}
			
		}
	}
];
