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
		},
		blu: {
			how: "sicken",
			what: "the Blu",
			length: 3,
			lethality: 0.09
		}
	}
};
/*
{
	date: "1/1/2020",
	news: [
		{
			...common.news.,
			content: "?"
		}
	],
	decision: {
		image: "?",
		prompt: "?",
		yes: "Yes",
		no: "No"
	},
	result: {
		yes: {
			image: "?",
			who: "?",
			how: "?",
			what: "?",
			length: 0,
			lethality: 0,
			description: "?"
		},
		no: {
			image: "?",
			who: "?",
			how: "?",
			what: "?",
			length: 0,
			lethality: 0,
			description: "?"
		}
	}
}
*/

var plot = [
	// January
	{
		date: "1/5/2020",
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
				who: "player",
				...common.sick.bovid,
				description: "While you relax in Italy, you contract a disease and have to quarantine. Oh well, at least it's Nice."
			},
			no: {
				image: "images/staycation.jpeg",
				description: "You relax in your home and get some quality family time."
			}
		}
	},
	// February
	{
		date: "2/9/2020",
		news: [
			{
				...common.news.bwitter,
				author: "Bwayne Bohnson",
				content: "Hey bud, I have a cough but I'm sure it's nothing. Can I come visit you?"
			},
			{
				...common.news.bsj,
				content: "The first case of Boronavirus in the US has been confirmed in DC."
			}
		],
		decision: {
			image: "images/small-cough.jpeg",
			prompt: "A family friend who is visiting from DC says he has a cough, but he’s sure it’s nothing, what do you do?",
			yes: "Welcome him in for a home-cooked meal.",
			no: "Banish him from your house!"
		},
		result: {
			yes: {
				image: "images/family-hug.jpg",
				multiple: [
					{ who: "player", ...common.sick.bovid, length: 1.5 },
					{ who: "wife", ...common.sick.bovid, length: 1.5  },
					{ who: "son", ...common.sick.bovid, length: 1.5  },
				],
				description: "Shouldn’t have trusted that low-down, no good, lying cheat. He gets you, your wife and your son sick for 1.5 weeks."
			},
			no: {
				image: "images/angry-spit.jpg",
				who: "player",
				...common.sick.bovid,
				length: 1,
				description: "He starts yelling at you and sneezes, getting you sick for 1 week."
			}
		}
	},
	// March
	{
		date: "3/2/2020",
		news: [
			{
				...common.news.nbt,
				content: "Many countries of the European Union have declared they are going into lockdown."
			},
			{
				...common.news.bsj,
				content: "United States to go into basic temporary shutdown mode in an attempt to mitigate strains on the health system due to the Boronavirus."
			},
			{
				...common.news.beta,
				content: "The US went into lockdown today. I'm so disappointed in this country. BOVID-19 isn't even real."
			}
		],
		decision: {
			image: "images/executive-order.jpeg",
			prompt: "The Government says that we’re shutting down and quarantine for 2 weeks. Do you comply?",
			yes: "I am never taking a step outside again - So long, grass!",
			no: "Two weeks is too long! I need my people fix."
		},
		result: {
			yes: {
				image: "images/board-games.jpeg",
				description: "You are bored in your house, but you make do with board games. Everyone stays healthy."
			},
			no: {
				image: "images/sick-girl.png",
				multiple: [
					{ who: "daughter", ...common.sick.bovid, length: 2 },
					{ who: "wife", ...common.sick.blu }
				],
				description: "A restaurant waiter has asymptomatic Bovid and your daughter catches it. She gets hospitalized, and your wife gets the flu in the hospital."
			}
		}
	}
];

var nonplot = [
	// Essential Oils
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
			image: "images/essential-oils.jpeg",
			prompt: "Will you buy some essential oils to try curing the sickness with?",
			yes: "They are essential and natural, I'll try it.",
			no: "No, who even thinks that would work?"
		},
		result: {
			yes: {
				image: "images/relaxed.jpeg",
				description: "After using essential oils, you gained peace of mind and believe that things will get better now. "
			},
			no: {
				image: "images/worried.jpeg",
				description: "You continue to worry about how the sickness progresses."
			}
		}
	},
	// Quarantine
	{
		news: [
			{
				...common.news.beta,
				content: "It's all a sham. BOVID-19 is a hoax created by the Chinese government to further their ultimate goal of world domination!"
			},
			{
				...common.news.bsj,
				content: "The CDC recommends that people stay at home if they are feeling ill. Staying cautious and quarantining will help flatten the curve."
			},
			{
				...common.news.bwitter,
				content: "Lads, y'all better stay at home. This bovid is getting out of hand."
			}
		],
		decision: {
			image: "images/hamlet.jpeg",
			prompt: "To quarantine, or not to quarantine. That is the question.",
			yes: "I'll quarantine; I want to flatten the curve",
			no: "Heel nah, the curve is already flat, just like the Earth!"
		},
		result: {
			yes: {
				image: "images/yes-kid.jpeg",
				description: "Thanks to your quarantine, nobody else got sick"
			},
			no: {
				image: "images/rip.jpeg",
				description: "Because you neglected to quarantine, you got some other people at the store sick. One of them died."
			}
		}
	}
];
