export const MORE_PAGE = Object.freeze({
  eyebrow: '03 / BEYOND CODE',
  title: 'Beyond Code.',
  intro:
    'Software is a big part of what I enjoy creating, but music, travel, and technology are just as much a part of what interests me beyond it.',
})

export const BEYOND_INTERESTS = Object.freeze([
  Object.freeze({
    id: 'music',
    order: '01',
    label: 'Music',
    summary: 'Piano, composition, film music, jazz, rock, neo-classical, J-pop & K-pop',
    title: 'The part that ties everything together.',
    paragraphs: Object.freeze([
      'Music is the most important part of entertainment to me. Whether it is carrying a film scene, shaping an atmosphere, or standing on its own, it is usually the element I notice first and remember longest.',
      'I play piano and compose original pieces, and I enjoy moving between very different musical languages rather than staying inside one genre.',
    ]),
    tags: Object.freeze(['Film music', 'Jazz', 'Rock', 'Neo-classical', 'J-pop', 'K-pop']),
    link: Object.freeze({
      label: 'YouTube · compositions & music',
      href: 'https://www.youtube.com/@1000Andrej',
    }),
  }),
  Object.freeze({
    id: 'travel',
    order: '02',
    label: 'Travel',
    summary: 'Places, cultures, movement & the feeling of somewhere new',
    title: 'Somewhere different.',
    paragraphs: Object.freeze([
      'I enjoy travelling because it breaks familiar routines and lets me experience new places and cultures directly.',
      'It is the change of setting and perspective that makes exploring somewhere new interesting to me.',
    ]),
  }),
  Object.freeze({
    id: 'technology',
    order: '03',
    label: 'Technology',
    summary: 'Devices, hardware & the wider world around software',
    title: 'Technology beyond the code editor.',
    paragraphs: Object.freeze([
      'My interest in technology does not stop at programming. I also enjoy exploring devices, hardware, and the wider ideas that sit around software.',
      'I like seeing how technology evolves and how different pieces fit together beyond the code editor.',
    ]),
  }),
])
