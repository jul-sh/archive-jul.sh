import emoji from 'react-easy-emoji'

export default input =>
  emoji(input, {
    baseUrl: '/emoji',
    ext: '.svg',
    size: '',
    protocol: '',
    props: { className: 'emoji' }
  })
