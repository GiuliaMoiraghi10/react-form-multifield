/**
 * Alcuni post dovranno rimanere senza immagine, quindi avere la proprietà image = undefined
 */

//importo immagini
import cover from './assets/sailor.jpg'
import undefined from './assets/placeholder.webp'

export const initialPosts = [
	{
		id: 1,
		title: 'Sailor Moon',
		image: cover /* compila questo campo */,
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
		tags: ['html', 'css'],
		category: 'luna',
		published: true,
	},
	{
		id: 2,
		title: 'Sailor Mercury',
		image: undefined /* compila questo campo */,
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
		tags: ['js', 'css'],
		category: 'Mercurio',
		published: true,
	},
	{
		id: 3,
		title: 'Sailor Mars',
		image: cover /* compila questo campo */,
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
		tags: ['js', 'php'],
		category: 'Marte',
		published: true,
	},
	{
		id: 4,
		title: 'Sailor Jupiter',
		image: undefined /* compila questo campo */,
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
		tags: ['html'],
		category: 'Giove',
		published: false,
	},
]
