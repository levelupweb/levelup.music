
const db = {
	people: [{
		id: 0, 
		name: 'Lucky Dee',
		description: 'Молодой рэпер, создатель бренда Level Up и основатель лэйбла Level Up music, сам пишет свои треки с 14 лет, в которых лежит глубокий смысл. Талантливый артист, скоро выход его альбома при участии самых известных рэп-исполнителей и поп-исполнителей России.',
		image: '/img/luckydee.gif',
		socials: [{
			title: 'vk',
			link: 'http://vk.com/luckydee'
		}, {
			title: 'instagram',
			link: 'https://instagram.com/luckydee_1'
		}],
		releases: [{
			title: 'All Stars (Feat. )',
			category: 'Сингл',
			year: '2017'
		}, {
			title: 'ID (feat. Джерин)',
			category: 'Сингл',
			year: '2017'
		}, {
			title: 'Марс',
			category: 'Сингл',
			year: '2016'
		}, {
			title: 'Феникс',
			category: 'Сингл',
			year: '2016'
		}, {
			title: 'Моя бейба',
			category: 'Сингл',
			year: '2016'
		}]
	}, {
		id: 1, 
		name: 'Hitta On Tha Trakk',
		description: 'Молодой битмейкер, работающий со звуком уже более чем, добрых 3 года. Создаёт трэп-звук с того самого момента, как познакомился с творчеством выходцев из Атланты, таких как: Travi$ Scott, Migos, Metro Boomin, Sonny Digital и других',
		image: '/img/hitta.gif',
		socials: [{
			title: 'vk',
			link: 'http://vk.com/vanya2h'
		}, {
			title: 'instagram',
			link: 'http://www.instagram.com/hittabeatz__hibandz/'
		}, {
			title: 'soundcloud',
			link: 'http://soundcloud.com/ittanharakk'
		}],
		releases: [{
			title: 'Hi Bandz Season',
			category: 'EP',
			year: '2017'
		}, {
			title: 'Because of You',
			category: 'EP',
			year: '2016'
		}]
	}],
	projects: [{
		title: 'Because of You',
		category: 'EP',
		author: 'Hitta On Tha Trakk',
		year: 2016,
		image: '/img/releases/because.jpg',
		link: 'https://vk.com/hittabeatz?w=wall-99368840_60'
	}, {
		title: 'Hi Bandz Season',
		category: 'EP',
		author: 'Hitta On Tha Trakk',
		year: 2017,
		image: '/img/releases/season.jpg',
		link: 'https://vk.com/hibandz?w=wall-136476926_4'
	}, {
		title: 'All Stars (Feat. )',
		author: 'Lucky Dee',
		category: 'Сингл',
		year: 2017,
		image: '/img/releases/allstars.png',
		link: 'https://vk.com/levelup?w=wall-53360956_5464'
	}, {
		title: 'ID (feat. Джерин)',
		category: 'Сингл',
		author: 'Lucky Dee',
		year: 2017,
		image: '/img/releases/id.jpg',
		link: 'https://vk.com/levelup?w=wall-53360956_5544'
	}, {
		title: 'Марс',
		category: 'Сингл',
		author: 'Lucky Dee',
		year: 2016,
		image: '/img/releases/mars.jpg',
		link: 'https://vk.com/wall-53360956_5416'
	}, {
		title: 'Феникс',
		category: 'Сингл',
		author: 'Lucky Dee',
		year: 2016,
		image: '/img/releases/feniks.jpg',
		link: 'https://new.vk.com/wall-53360956_5414'
	}, {
		title: 'Моя бейба',
		category: 'Сингл',
		author: 'Lucky Dee',
		year: 2016,
		image: '/img/releases/baby.jpg',
		link: 'https://new.vk.com/wall-53360956_5486'
	}]
}

export const peoples = db.people;
export const projects = db.projects
export default db