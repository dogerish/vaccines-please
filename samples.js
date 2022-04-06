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
				who: "father",
				...common.sick.bovid,
				description: "While you relax in Italy, you contract a disease and have to quarantine. Oh well, at least it's Nice."
			},
			no: {
				image: "images/staycation.jpeg",
				how: "nothing",
				description: "You relax in your home and get some quality family time."
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
