
import Page from './components/page';
import Header from './components/header';
import VideoSection from './components/video-section';
import ListSection from './components/list-section';
import FeatureSection from './components/feature-section';
import CasesSection from './components/cases-section';
import Footer from './components/footer';

export default function Home() {
  return (
    <Page>
      <Header />
      <main>
        <VideoSection />
        <FeatureSection />
        <ListSection />
        <CasesSection />
      </main>
      <Footer />
    </Page>
  );
}
