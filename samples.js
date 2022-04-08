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
			lethality: 0.15
		},
		belta: {
			how: "sicken",
			what: "BOVID-19 Belta Variant",
			length: 1,
			lethality: 0.25
		},
		blu: {
			how: "sicken",
			what: "the Blu",
			length: 3,
			lethality: 0.20
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
			prompt: "The Government says that we’re shutting down and quarantining for 2 weeks. Do you comply?",
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
	},
	// May
	{
		date: "5/10/2020",
		news: [
			{
				...common.news.bwitter,
				author: "Joseph Mother",
				content: "Hey man, are you gonna have a birthday party this year? That bovid stuff is a hoax, don't let it scare you."
			},
			{
				...common.news.beta,
				author: "Candice",
				content: "I hope you have a birthday party this year. I miss seeing you and feel tired of staying at home. But man, that Boronavirus worries me."
			},
			{
				...common.news.nbt,
				content: "Boronavirus cases are continuing to surge in the US. President Bump has launched Operation Warp Speed in an attempt to develop a vaccine quickly."
			}
		],
		decision: {
			image: "images/birthday.jpg",
			prompt: "You’re getting cabin fever and your birthday is coming up. Do you want to have a party?",
			yes: "Nothing can stop my birthday, not even a pandemic!",
			no: "Maybe this year doesn’t count"
		},
		result: {
			yes: {
				image: "images/small-cough.jpeg",
				multiple: [
					{ who: "son", ...common.sick.bovid, length: 2 },
					{ who: "daughter", ...common.sick.bovid, length: 2 },
				],
				description: "A guest brings Bovid and you spread it to your son and daughter."
			},
			no: {
				image: "images/mini-birthday.jpg",
				description: "You’re sad about missing your own birthday, but your family throws you a surprise mini-party that cheers you up!"
			}
		}
	},
	// November
	{
		date: "11/11/2020",
		news: [
			{
				...common.news.beta,
				author: "Barbara",
				content: "My son, come up to New York and celebrate Thanksgiving with us! I promise to stuff you full of Turkey! 🥺😍"
			},
			{
				...common.news.beta,
				author: "George",
				content: "Son, we're having Thanksgiving in NY this year, even though that joke of a virus BOVID is scaring everyone. I expect your presence."
			}
		],
		decision: {
			image: "images/thanksgiving.jpg",
			prompt: "You're invited to Thanksgiving in New York, do you go see your family?",
			yes: "I’ve already got antibodies, family is worth the risk!",
			no: "Virtual Turkey time"
		},
		result: {
			yes: {
				image: "images/sick-girl.png",
				multiple: [
					{ who: "player",   ...common.sick.belta },
					{ who: "wife",     ...common.sick.belta },
					{ who: "son",      ...common.sick.belta },
					{ who: "daughter", ...common.sick.belta }
				],
				description: "Your cousin brought a new variant, Belta, to the gathering, and everyone got sick."
			},
			no: {
				image: "images/delta-variant.png",
				description: "You stay home, and luckily too, as you hear of a new Belta variant going around that’s twice as deadly!"
			}
		}
	},
	// December - daughter
	{
		date: "12/24/2020",
		precondition: "family.daughter.status != DEAD",
		news: [
			{
				...common.news.bwitter,
				content: "#VaxFax Even if you've had BOVID-19, you should get vaccinated. Health experts are still unsure about how long you're protected by natural immunity."
			},
			{
				...common.news.beta,
				content: "Apparently there is a risk of infertility as a result of this new vaccine. It was developed TOO QUICK! There's no way it's safe."
			},
			{
				...common.news.bsj,
				content: "Scientists have found no evidence supporting the myth that any of the new Bizer, Boderna, or Bohnson & Bohnson vaccines causes infertility in teenage women."
			}
		],
		decision: {
			image: "images/bovid-vaccine.png",
			prompt: "Are you going to vaccinate your daughter?",
			yes: "Glory to the vaccinated!",
			no: "I can’t, she’ll be infertile!"
		},
		result: {
			yes: {
				image: "images/superhero1.png",
				who: "daughter",
				how: "superpower",
				description: "Those vaccines are crazy, your daughter feels superpowered!"
			},
			no: {
				image: "images/double-mask.jpeg",
				description: "Your poor daughter is forced to wear masks everywhere and suffer while the rest of the world breathes fresh air again."
			}
		}
	},
	// December - son
	{
		date: "12/25/2020",
		precondition: "family.son.status != DEAD",
		news: [
			{
				...common.news.bwitter,
				content: "Q: <i>\"Even if I'm vaccinated, I can catch bovid. WHAT IS THE POINT\"</i><br>A: Though there are breakthrough cases, being vaccinated does reduce transmission and lethality."
			},
			{
				...common.news.nbt,
				content: "CDC health officials are proposing the idea that vaccinated people will no longer need to be masked in public spaces."
			},
			{
				...common.news.beta,
				content: "I know for a fact that if I let my child get that vaccine, he's gonna get autism. I don't want my child being autistic if I can avoid it, and I recommend that y'all would too! I am NOT allowing my child to be vaccinated. Let him get Bovid!"
			}
		],
		decision: {
			image: "images/bovid-vaccine.png",
			prompt: "Are you going to have your son vaccinated?",
			yes: "Glory to the vaccinated!",
			no: "I don’t want him to have autism!"
		},
		result: {
			yes: {
				image: "images/superhero2.png",
				who: "son",
				how: "superpower",
				description: "Them vaccines really do be special, your son feels powered up now!"
			},
			no: {
				image: "images/double-mask.jpeg",
				description: "Your disheartened son is heartbroken to see the vaccinated being able to go mask free, breathing the wonderfully luscious fresh air, all while he has to be suffocated under this awful constricting mask."
			}
		}
	},
	// December - player
	{
		date: "12/26/2020",
		precondition: "family.player.status != DEAD",
		news: [
			{
				...common.news.beta,
				content: "The bovid vaccine sucks. I got vaccinated last week and just got bovid anyway!"
			},
			{
				...common.news.bwitter,
				content: "The vaccines were devoloped too fast. It must be a government campaign to implant microchips in US citizens! NO WAY am I taking the vaccine. I'd rather wear a mask! 😤"
			},
			{
				...common.news.bsj,
				content: "Studies have proven the Bizer vaccine to have 95% efficacy according to clinical trials conducted by the FDA. The CDC continues to recommend everyone to get vaccinated."
			}
		],
		decision: {
			image: "images/bovid-vaccine.png",
			prompt: "Are you going to get vaccinated?",
			yes: "Glory to the vaccinated!",
			no: "No, the government can’t track <i>me</i> with microchips"
		},
		result: {
			yes: {
				image: "images/superhero3.png",
				who: "player",
				how: "superpower",
				description: "Sheeeeesh, you're feeling a little pumped after that!"
			},
			no: {
				image: "images/double-mask.jpeg",
				description: "You are forced to wear masks everywhere and suffer as you watch the rest of the world breathe fresh air again."
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
			yes: "Quarantine; I want to flatten the curve",
			no: "Heel nah, the curve is already flat, just like the Earth!"
		},
		result: {
			yes: {
				image: "images/yes-kid.jpeg",
				description: "Thanks to your quarantine, nobody else got sick"
			},
			no: {
				image: "images/rip.jpeg",
				description: "Because you neglected to quarantine, some other people at the store got sick. One of them died."
			}
		}
	},
	// Shower with mask
	{
		news: [
			{
				...common.news.bwitter,
				content: "always wear your mask correctly😷 <br>✅ Make sure it covers your nose and mouth. <br>❌ Don't lower your mask when coughing or sneezing"
			},
			{
				...common.news.bwitter,
				content: "WEAR YOUR MASK • KEEP YOUR WISDOM"
			}
		],
		decision: {
			image: "?",
			prompt: "Do you wear a mask while showering?",
			yes: "Yeah, duh",
			no: "Nah that's dumb"
		},
		result: {
			yes: {
				image: "?",
				description: "While showering you realize how dumb this was and gets sick with embarresment",
				who: "player",
				how: "sicken",
				what: "embarrassment",
				length: 1,
				lethality: 0.00001
			},
			no: {
				image: "?",
				description: "you take a normal shower and feel clean"
			}
		}
	}
];
