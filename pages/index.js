import Head from 'next/head';
import Link from 'next/link';
import styles from './styles/SusuHome.module.css';
import visualStyles from './styles/SusuHeroVisual.module.css';

const steps = [
  { number: '01', title: 'Create your circle', description: 'Invite people you trust and agree on a contribution amount, cadence, and payout order.' },
  { number: '02', title: 'Contribute together', description: 'Everyone makes the same scheduled contribution, making the goal feel achievable week by week.' },
  { number: '03', title: 'Take your turn', description: 'Each member receives the pooled amount when it is their turn—turning consistency into momentum.' },
];

const stats = [
  { value: '45%', label: 'of U.S. adults did not have three months of emergency savings in 2024.' },
  { value: '1 in 3', label: 'adults said they could not cover three months of expenses by any means after losing their main income.' },
  { value: '63%', label: 'would pay a $400 emergency expense using cash or its equivalent.' },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>SuSuFi | Save together. Move forward.</title>
        <meta name="description" content="SuSuFi helps trusted circles turn a shared savings habit into real momentum." />
      </Head>
      <main className={styles.page}>
        <nav className={styles.nav} aria-label="Main navigation">
          <Link href="/" className={styles.brand} aria-label="SuSuFi home"><span className={styles.brandMark}>S</span><span>SuSuFi</span></Link>
          <div className={styles.navActions}>
            <a href="#how-it-works" className={styles.textLink}>How it works</a>
            <Link href="/api/v1/login" className={styles.loginLink}>Log in</Link>
            <Link href="/earlyaccess" className={styles.navCta}>Get early access</Link>
          </div>
        </nav>

        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}><span /> Community-powered saving</p>
            <h1>Saving feels different when you are <em>not doing it alone.</em></h1>
            <p className={`${styles.lede} ${visualStyles.lede}`}>
              <span>SuSuFi brings the time-tested Susu savings circle into one clear, modern place—</span>
              <span>so your people can build a shared rhythm</span>
              <span>and move toward what matters.</span>
            </p>
            <div className={styles.heroActions}>
              <Link href="/earlyaccess" className={styles.primaryCta}>Join the early access list <span aria-hidden="true">→</span></Link>
              <a href="#how-it-works" className={styles.secondaryCta}>See how a Susu works</a>
            </div>
            <div className={styles.trustLine}><span className={styles.avatarStack} aria-hidden="true"><i>J</i><i>M</i><i>A</i></span><span>Built for the people you already trust.</span></div>
          </div>
          <div className={`${styles.heroVisual} ${visualStyles.heroVisual}`} aria-label="Illustration of a SuSuFi savings circle">
            <div className={styles.orbOne} /><div className={styles.orbTwo} />
            <div className={visualStyles.savingsOrbit} aria-hidden="true">
              <span className={visualStyles.orbitMember}>A</span><span className={visualStyles.orbitMember}>J</span><span className={visualStyles.orbitMember}>M</span><span className={visualStyles.orbitMember}>R</span>
            </div>
            <div className={visualStyles.circleCard}>
              <div className={visualStyles.cardTopline}><span className={visualStyles.cardSpark}>✦</span><span>THIS MONTH'S CIRCLE</span></div>
              <strong>Move forward,<br />together.</strong>
              <div className={visualStyles.progressRow}><span>4 of 5 contributions</span><b>80%</b></div>
              <div className={visualStyles.progressTrack}><i /></div>
              <div className={visualStyles.payout}><span>Next payout</span><b>Friday</b><em>→</em></div>
            </div>
            <div className={styles.floatingCard}><span className={styles.cardIcon}>✓</span><div><b>Circle contribution</b><small>On track for Friday</small></div></div>
          </div>
        </section>

        <section className={styles.intro}>
          <p className={styles.sectionLabel}>The simple idea</p>
          <div><h2>A Susu turns a shared promise into a savings practice.</h2><p>Small, regular contributions add up. With a trusted group, each person contributes on a schedule and takes a turn receiving the pooled amount. It is saving with structure, visibility, and community behind it.</p></div>
        </section>

        <section className={styles.steps} id="how-it-works">
          <div className={styles.sectionHeading}><p className={styles.sectionLabel}>How SuSuFi works</p><h2>Good money habits, made more human.</h2></div>
          <div className={styles.stepGrid}>{steps.map((step) => <article className={styles.stepCard} key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.description}</p></article>)}</div>
        </section>

        <section className={styles.why}>
          <div className={styles.whyCopy}>
            <p className={styles.sectionLabel}>Why it matters</p><h2>A little structure can make room for a lot more possibility.</h2>
            <p>Saving is not only about willpower. It is about making a plan that is visible, repeatable, and connected to the people rooting for you.</p>
            <a className={styles.sourceLink} href="https://www.federalreserve.gov/publications/2025-economic-well-being-of-us-households-in-2024-savings-and-investments.htm" target="_blank" rel="noreferrer">Explore the Federal Reserve’s 2024 savings data <span aria-hidden="true">↗</span></a>
          </div>
          <div className={styles.statsGrid}>{stats.map((stat) => <article className={styles.stat} key={stat.value}><strong>{stat.value}</strong><p>{stat.label}</p></article>)}</div>
        </section>

        <section className={styles.closing}>
          <div className={styles.closingGlow} /><p className={styles.sectionLabel}>A better way to begin</p><h2>Your next goal does not have to be a solo mission.</h2>
          <p>Be among the first to help shape SuSuFi and bring your savings circle together.</p><Link href="/earlyaccess" className={styles.primaryCta}>Get early access <span aria-hidden="true">→</span></Link>
        </section>
        <footer className={styles.footer}><Link href="/" className={styles.brand}><span className={styles.brandMark}>S</span><span>SuSuFi</span></Link><p>Community-powered saving, thoughtfully designed.</p><Link href="/api/v1/login">Log in</Link></footer>
      </main>
    </>
  );
}
