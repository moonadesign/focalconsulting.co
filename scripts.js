const g = document.getElementById.bind(document)
const q = document.querySelectorAll.bind(document)

q('a.button').forEach(el =>
  el.addEventListener('click', e => {
    e.preventDefault()
    window.scrollTo({
      behavior: 'smooth',
      top: g('contact').getBoundingClientRect().top + window.scrollY,
    })

    // track this event
    clarity('set', 'LetsChat', 'true')
    gtag('event', 'conversion', {
      event_category: 'interaction',
      event_label: 'Lets Chat',
      value: 1,
    })
    plausible('LetsChat')
  }),
)
