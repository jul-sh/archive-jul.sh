import emoji from 'react-easy-emoji'

export default input =>
  emoji(input, {
    baseUrl: '/assets/emoji/svg',
    ext: '.svg',
    size: '',
    protocol: '',
    props: { className: 'emoji' }
  })
