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
				how: "nothing",
				description: "You relax in your home and get some quality family time."
			}
		}
	},
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
			image: "",
			prompt: "A family friend who is visiting from DC says he has a cough, but he’s sure it’s nothing, what do you do?",
			yes: "Welcome him in for a home-cooked meal.",
			no: "Banish him from your house!"
		},
		result: {
			yes: {
				image: "",
				multiple: [
					{ who: "player", ...common.sick.bovid, length: 1.5 },
					{ who: "wife", ...common.sick.bovid, length: 1.5  },
					{ who: "son", ...common.sick.bovid, length: 1.5  },
				],
				description: "Shouldn’t have trusted that low-down, no good, lying cheat. He gets you, your wife and your son sick for 1.5 weeks."
			},
			no: {
				image: "",
				who: "player",
				...common.sick.bovid,
				length: 1,
				description: "He starts yelling at you and sneezes, getting you sick for 1 week."
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
			image: "images/essential-oils.jpeg",
			prompt: "Will you buy some essential oils to try curing the sickness with?",
			yes: "They are essential and natural, I'll try it.",
			no: "No, who even thinks that would work?"
		},
		result: {
			yes: {
				image: "images/relaxed.jpeg",
				how: "nothing",
				description: "After using essential oils, you gained peace of mind and believe that things will get better now. "
			},
			no: {
				image: "images/worried.jpeg",
				how: "nothing",
				description: "You continue to worry about how the sickness progresses."
			}
		}
	}
];
