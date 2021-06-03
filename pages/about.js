import Layout from '../components/layout';
import Link from 'next/link';

export default function About() {
  return (
    <Layout>
      <h1>About</h1>
      <p>Hello! Thanks for visiting ES6 Notes 🤩</p>
      <p>
        By creating this blog, I guess this will be my notes on some concepts explanation around Javascript, especially ES6, and also as a way to learn in public.
        <br />
        Hopefully you can also learn something through my writing.
      </p>
      <p>
        If you'd like to share any feedback or discuss with me. You can always
        {' '}<Link href="mailto:chrysilla_mysr@hotmail.com"><a>contact me</a></Link>{' '}
        anytime!
      </p>
    </Layout>
  )
}