const YEAR = new Date().getFullYear()

export default {
  footer: (
    <>
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time> @Marlon / mfalconsoft@gmail.com / +34 (662) 47 0645
      
      <a href="/feed.xml">RSS</a>
      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
    </>
  )
}
