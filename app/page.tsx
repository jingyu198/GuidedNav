import homepage from './homepage.html?raw';

export default function Home() {
  return <div dangerouslySetInnerHTML={{ __html: homepage }} />;
}
